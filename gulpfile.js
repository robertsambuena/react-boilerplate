var source        = require('vinyl-source-stream'),
    gulp          = require('gulp'),
    browserify    = require('browserify'),
    react         = require('gulp-react'),
    notify        = require('gulp-notify'),
    glob          = require('glob'),
    rename        = require('gulp-rename'),
    es            = require('event-stream');

// defaults
var source_url = './src',
    bundle_entries = [
        source_url + 'layout.js'
        // ,source_url + 'login.js'
    ];

gulp.task('js', function () {
    glob('./src/main-**.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({
                entries: [ entry ],
                debug: true,
                transform: [
                    ['reactify']
                ]})
            .bundle()
            .pipe(source(entry))
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('./public'))
            .pipe(notify("Bundling done."));
        });

        es.merge(tasks).on('end', function () {
            console.log('DONE!');
        });
    });
});

gulp.task('default', ['js', 'watch']);

gulp.task('watch', function() {
  gulp.watch(source_url + '/**' + "/*.js", ['default']);
});
