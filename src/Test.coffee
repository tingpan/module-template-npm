if (isNode = typeof module == 'object' and module.exports)
  SimpleModule = require 'simple-module'
  _            = require 'lodash'
else
  SimpleModule = window.SimpleModule
  _            = window._

class Test extends SimpleModule

  @test: ->
    console.log 'test'
    @

  @opts:
    name: 'Test'

  constructor: (opts) ->
    super()
    _.extend @opts, Test.opts, opts
    @name = @opts.name

  name: (name) ->
    if name
      @name = name
      @
    else
      @name

if isNode
  module.exports = Test
else
  window.Test = Test
