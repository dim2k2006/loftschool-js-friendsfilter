import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import uglify       from 'gulp-uglify';
import sourcemaps   from 'gulp-sourcemaps';
import buffer       from 'vinyl-buffer';
import browserify   from 'browserify';
import source       from 'vinyl-source-stream';
import errorHandler from '../utils/errorHandler';
import settings     from '../settings';

gulp.task('scripts', () => {
    var b = browserify({
        entries: './src/blocks/filter/filter.js',
        debug: true
    });

    return b.bundle()
        .on('error', errorHandler)
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(settings.dist.scripts));
});
