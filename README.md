# jstransformer-to-markdown

[to-markdown](https://github.com/domchristie/to-markdown) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-to-markdown/master.svg)](https://travis-ci.org/jstransformers/jstransformer-to-markdown)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-to-markdown/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-to-markdown?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-to-markdown/master.svg)](http://david-dm.org/jstransformers/jstransformer-to-markdown)
[![NPM version](https://img.shields.io/npm/v/jstransformer-to-markdown.svg)](https://www.npmjs.org/package/jstransformer-to-markdown)

## Installation

    npm install jstransformer-to-markdown

## API

```js
var tomarkdown = require('jstransformer')(require('jstransformer-to-markdown'))

tomarkdown.render('<h1>Hello World!</h1>').body
//=> '# Hello World!'
```

## License

MIT
