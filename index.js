'use strict'

const engine = require('to-markdown')
const extend = require('extend-shallow')

exports.name = 'to-markdown'
exports.inputFormats = ['to-markdown', 'html']
exports.outputFormat = 'md'

exports.render = function (str, options, locals) {
  const opts = extend({}, options || {}, locals || {})
  return engine(str, opts)
}
