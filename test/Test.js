Test = require '../src/Test.coffee'
SimpleModule = require 'simple-module'

describe 'Test', ->

  it 'should inherit from SimpleModule', ->
    module = new Test()
    expect(module instanceof SimpleModule).toBe(true)
