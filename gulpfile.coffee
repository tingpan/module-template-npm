require './build/compile.coffee'
require './build/test.coffee'
require './build/docs.coffee'
require './build/publish.coffee'
<<<<<<< HEAD
require './build/server.coffee'

=======
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86
gulp = require 'gulp'
runSequence = require 'run-sequence'
coffeelint = require './build/helpers/coffeelint.coffee'

gulp.task 'build.lint', ->
  gulp.src 'build/**/*.coffee'
    .pipe coffeelint()

gulp.task 'default', ->
<<<<<<< HEAD
  runSequence 'build.lint', 'compile', 'test', 'docs', 'server', ->
=======
  runSequence 'build.lint', 'compile', 'test', 'docs', ->
>>>>>>> 5d011c62b029e376b2589bbb814a78aa79c31a86
    gulp.watch 'build/**/*.coffee', ['build.lint']

    gulp.watch 'src/**/*.coffee', ['compile.coffee', 'test']
    gulp.watch 'src/**/*.scss', ['compile.sass']
    gulp.watch 'test/**/*.coffee', ['test']

    gulp.watch 'docs/**/*.coffee', ['docs.coffee']
    gulp.watch 'docs/**/*.scss', ['docs.sass']
    gulp.watch [
      'docs/**/*.jade'
      'docs/data/**/*.json'
      'README.md'
      'LICENSE.md'
    ], ['docs.jade']
