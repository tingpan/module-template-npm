gulp = require 'gulp'
express = require('express')

gulp.task 'server', ->
  app = express()
  app.use(express.static('_docs'))
  app.listen 8080