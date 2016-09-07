const gulp = require('gulp')

const assets = require('postcss-assets')
const cssnext = require('postcss-cssnext')
const postcss = require('gulp-postcss')
const precss = require('precss')

gulp.task('styles', () => {
  const processors = [
    precss(),
    assets({loadPaths: ['src/images/']}),
    cssnext()
  ]
  return gulp.src('src/styles/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.css', ['styles'])
})

gulp.task('default', ['styles', 'watch'])
