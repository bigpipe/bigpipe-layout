'use strict';

//
// Required modules.
//
var Page = require('bigpipe').Page;

//
// Plugin name.
//
exports.name = 'layout';

/**
 * Server side plugin to deliver static content as fast as possible. The
 * relative path options#public is used as root directory for content.
 *
 * @param {Pipe} bigpipe instance
 * @param {Object} options
 * @api public
 */
exports.server = function server(bigpipe, options) {
  console.log(Page.prototype.data.toString());
  console.log(options.base);
};
