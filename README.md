# Layout [![Build Status][status]](https://travis-ci.org/bigpipe/plugin-layout) [![NPM version][npmimgurl]](http://badge.fury.io/js/bigpipe-layout) [![Coverage Status][coverage]](http://coveralls.io/r/bigpipe/plugin-layout?branch=master)

[status]: https://travis-ci.org/bigpipe/plugin-layout.png
[npmimgurl]: https://badge.fury.io/js/bigpipe-layout.png
[coverage]: http://coveralls.io/repos/bigpipe/plugin-layout/badge.png?branch=master

[Bigpipe] plugin that will provide an easy method to add a general layout to
pages. The Bigpipe#Temper instance is used to load your provided layout. The
template engine of the file is automatically detected. The page is supplied to
the layout as `partial` by default, changable through options#key.

[Bigpipe]: https://github.com/bigpipe/bigpipe

## Features

- Provide default layout to each page
- Utilizes Bigpipe#[Temper] to automatically detect the template engine
- Fully customizable layout page, options provide full control

Example of layout file using the [embedded js] template egine

```html
<div><%- partial %></div>
```

[Temper]: https://github.com/bigpipe/temper
[embedded js]: https://github.com/visionmedia/ejs

## Installation

The layout plugin is released to npm and can be installed using:

```bash
npm install bigpipe-layout --save
```

To use the plugin from Bigpipe, simply add it after Bigpipe is initialized or
add it to options#plugins. `bigpipe.use` will execute the plugin logic. Make sure
the plugin name is unique, e.g. `layout` by default.

```js
// Usage after initialization
var layout = require('bigpipe-layout')
  , BigPipe = require('bigpipe');

//
// Add valid path to base layout.
//
layout.options = { base: '/path/to/base/layout.ejs' };
layout.key = 'custom';

var pipe = new BigPipe(http.createServer(), {
  pages: __dirname + '/pages',
  public: __dirname + '/public'
}).listen(8080).use(layout);
```

```js
// Usage through createServer options
var layout = require('bigpipe-layout')
  , BigPipe = require('bigpipe');

//
// Add valid path to base layout.
//
layout.options = { base: '/path/to/base/layout.ejs' };

var pipe = BigPipe.createServer(8080, {
  pages: __dirname + '/pages',
  public: __dirname + '/public',
  plugins: [ layout ]
});
```

## License

MIT
