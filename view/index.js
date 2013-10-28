'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  if(this.env.options.jade) {
  	this.template('common/view.jade', path.join(this.env.options.appPath, 'views', this.name + '.jade'));
  } else {
  	this.template('common/view.html', path.join(this.env.options.appPath, 'views', this.name + '.html'));
  }
};
