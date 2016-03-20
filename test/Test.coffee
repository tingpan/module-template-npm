Test = require '../src/Test.coffee'
SimpleModule = require 'simple-module'
expect = require('chai').expect

describe 'Test', ->

  it 'should inherit from SimpleModule', ->
    module = new Test()
    expect(module instanceof SimpleModule).to.be.equal(true)
