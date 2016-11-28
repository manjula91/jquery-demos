var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["./*.html", "./assets/css/*.css", "./assets/js/*.js"]).on("change", reload);
});