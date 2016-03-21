Testmodulenpm = require '../src/test_module_npm.coffee'
SimpleModule = require 'simple-module'
expect = require('chai').expect

describe 'Testmodulenpm', ->

  it 'should inherit from SimpleModule', ->
    module = new Testmodulenpm()
    expect(module instanceof SimpleModule).to.be.equal(true)
