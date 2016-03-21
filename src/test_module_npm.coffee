if (isNode = typeof module == 'object' and module.exports)
  SimpleModule = require 'simple-module'
  _            = require 'lodash'
else
  SimpleModule = window.SimpleModule
  _            = window._

class Testmodulenpm extends SimpleModule

  @test: ->
    console.log 'test'
    @

  @opts:
    name: 'test_module_npm'

  constructor: (opts) ->
    super()
    _.extend @opts, Testmodulenpm.opts, opts
    @name = @opts.name

  name: (name) ->
    if name
      @name = name
      @
    else
      @name

if isNode
  module.exports = Testmodulenpm
else
  window.Testmodulenpm = Testmodulenpm
