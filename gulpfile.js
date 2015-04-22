var gulp = require('gulp');
var to5 = require('gulp-babel');
var assign = Object.assign || require('object-assign');

var babelOptions = {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: false,
    stage:2,
    optional: [
        "es7.decorators",
        "es7.classProperties"
    ]
};

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(to5(assign({}, babelOptions, {modules: 'system'})))
        .pipe(gulp.dest('dist'));
});
