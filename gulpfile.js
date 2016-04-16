var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var scss = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var plumber = require('gulp-plumber');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var cache = require('gulp-cache');
var del = require('del');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
    'react',
    'react-dom',
    'react-router',
    'react-addons-css-transition-group',
    'framework7'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('scripts', function () {
    bundleApp(false);
    return gulp.src('app/scripts/*.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['components'],
            noSource: true
        }))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('deploy', function () {
    bundleApp(true);
});

gulp.task('useref', function () {
    gulp.src('app/*.html')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:f7', function () {
    gulp.src('node_modules/framework7/dist/css/*ios.colors.min.css')
        .pipe(gulp.dest('app/css/'));
    gulp.src('node_modules/framework7/dist/css/*ios.min.css')
        .pipe(gulp.dest('app/css/'));
});

gulp.task('styles', function () {
    var processors = [cssnext, precss];
    return gulp.src('app/styles/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(scss())
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		}))
        .pipe(gulp.dest('app/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css/'))
        .pipe(postcss(processors))
});

gulp.task('minify:images', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('clean', function() {
    del('dist');
});

gulp.task('watch',['server'], function () {
    gulp.watch(['./app/scripts/components/*.js'], ['scripts']);
    gulp.watch(['./app/scripts/*.js'], browserSync.reload);
    gulp.watch(['./app/styles/*.scss'], ['styles']);
    gulp.watch(['./app/css/*.css'], browserSync.reload);
});

gulp.task('build', ['clean','minify:images','fonts'], function() {
    runSequence('useref');
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts','styles','watch']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
    scriptsCount++;
    // Browserify will bundle all our js files together in to one and will let
    // us use modules in the front end.
    var appBundler = browserify({
        entries: './app/scripts/components/app.js',
        debug: true
    })

    // If it's not for production, a separate vendors.js file will be created
    // the first time gulp is run so that we don't have to rebundle things like
    // react everytime there's a change in the js file
    if (!isProduction && scriptsCount === 1){
        // create vendors.js for dev environment.
        browserify({
            require: dependencies,
            debug: true
        })
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
            .pipe(gulp.dest('./app/scripts/'));
    }
    if (!isProduction){
        // make the dependencies external so they dont get bundled by the
        // app bundler. Dependencies are already bundled in vendor.js for
        // development environments.
        dependencies.forEach(function(dep){
            appBundler.external(dep);
        })
    }

    appBundler
    // transform ES6 and JSX to ES5 with babelify
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/scripts/'))
        .pipe(browserSync.reload({
            stream: true
        }));
}

var onError =  function (err) {
    console.log(err);
    this.emit('end');
};