/**
 * test_module_npm v0.0.1
 * http://tingpan.github.io/test_module_npm
 *
 * Copyright Mycolorway Design
 * Released under the MIT license
 * http://tingpan.github.io/test_module_npm/license.html
 *
 * Date: 2016-03-24
 */

(function() {
  var SimpleModule, Testmodulenpm, _, isNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if ((isNode = typeof module === 'object' && module.exports)) {
    SimpleModule = require('simple-module');
    _ = require('lodash');
  } else {
    SimpleModule = window.SimpleModule;
    _ = window._;
  }

  Testmodulenpm = (function(superClass) {
    extend(Testmodulenpm, superClass);

    Testmodulenpm.test = function() {
      console.log('test');
      return this;
    };

    Testmodulenpm.opts = {
      name: 'test_module_npm'
    };

    function Testmodulenpm(opts) {
      Testmodulenpm.__super__.constructor.call(this);
      _.extend(this.opts, Testmodulenpm.opts, opts);
      this.name = this.opts.name;
    }

    Testmodulenpm.prototype.name = function(name) {
      if (name) {
        this.name = name;
        return this;
      } else {
        return this.name;
      }
    };

    return Testmodulenpm;

  })(SimpleModule);

  if (isNode) {
    module.exports = Testmodulenpm;
  } else {
    window.Testmodulenpm = Testmodulenpm;
  }

}).call(this);
