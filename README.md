# Bigpipe-layout

[![Build
Status](https://travis-ci.org/Moveo/bigpipe-layout.png)](https://travis-ci.org/Moveo/bigpipe-layout)
[![NPM version](https://badge.fury.io/js/bigpipe-layout.png)](http://badge.fury.io/js/bigpipe-layout)

[Bigpipe] plugin that will provide an easy method to add a general layout to
pages. The Bigpipe#Temper instance is used to load your provided layout. The
template engine of the file is automatically detected. The page is supplied to
the layout as `partial` by default, changable through options#key.

[Bigpipe]: https://github.com/3rd-Eden/bigpipe

## Features

- Provide default layout to each page
- Utilizes Bigpipe#[Temper] to automatically detect the template engine
- Fully customizable layout page, options provide full control

Example of layout file using the [embedded js] template egine

```html
<div><%- partial %></div>
```

[Temper]: https://github.com/3rd-Eden/temper
[embedded js]: https://github.com/visionmedia/ejs

## Installation

Bigpipe-layout is released in npm and can be installed using:

```bash
npm install bigpipe-layout --save
```

To use the plugin from Bigpipe, simply add it after Bigpipe is initialized.
`bigpipe.use` will execute the plugin logic. Make sure the plugin name is unique,
bigpipe-layout is provided with `layout` as default.

```js
var layout = require('bigpipe-layout');

//
// Add valid path to base layout.
//
layout.options = { base: ''/path/to/base/layout.ejs' };
layout.key = 'custom';

//
// Start server.
//
bigpipe.server = Bigpipe.createServer(8080, {
  pages: __dirname + '/pages',
  public: __dirname + '/public'
}).use(layout);
```

## License

MIT
