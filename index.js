'use strict'

var engine = require('to-markdown')
var extend = require('extend-shallow')

exports.name = 'to-markdown'
exports.inputFormats = ['to-markdown', 'html']
exports.outputFormat = 'md'

exports.render = function (str, options, locals) {
  var opts = extend({}, options || {}, locals || {})
  return engine(str, opts)
}
