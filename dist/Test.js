/**
 * Test v0.0.1
 * http://Test.github.io/Test
 *
 * Copyright Mycolorway Design
 * Released under the MIT license
 * http://Test.github.io/Test/license.html
 *
 * Date: 2016-03-20
 */

(function() {
  var SimpleModule, Test, _, isNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if ((isNode = typeof module === 'object' && module.exports)) {
    SimpleModule = require('simple-module');
    _ = require('lodash');
  } else {
    SimpleModule = window.SimpleModule;
    _ = window._;
  }

  Test = (function(superClass) {
    extend(Test, superClass);

    Test.test = function() {
      console.log('test');
      return this;
    };

    Test.opts = {
      name: 'Test'
    };

    function Test(opts) {
      Test.__super__.constructor.call(this);
      _.extend(this.opts, Test.opts, opts);
      this.name = this.opts.name;
    }

    Test.prototype.name = function(name) {
      if (name) {
        this.name = name;
        return this;
      } else {
        return this.name;
      }
    };

    return Test;

  })(SimpleModule);

  if (isNode) {
    module.exports = Test;
  } else {
    window.Test = Test;
  }

}).call(this);
