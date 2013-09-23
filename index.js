'use strict';

//
// Plugin name.
//
exports.name = 'layout';

/**
 * Wrap Bigpipe#Page in a layout.
 *
 * @param {Pipe} bigpipe instance
 * @param {Object} options
 * @api public
 */
exports.server = function server(bigpipe, options) {
  var temper = bigpipe.temper
    , original = temper.fetch
    , layout = temper.fetch(options('base', process.cwd())).server
    , once = true;

  /**
   * Shortcircuit original Temper#fetch and wrap a layout around it.
   *
   * @param {String} file
   * @param {String} engine
   * @api public
   */
  temper.fetch = function fetch(file, engine) {
    var compiled = original.apply(temper, arguments)
      , partial = compiled.server;

    if (once) compiled.server = function server(data) {
      var output = partial(data);

      //
      // Return early if the file is a pagelet and in compiler.
      //
      if (file in bigpipe.compiler.alias) return output;

      data.partial = output;
      return layout(data);
    };

    once = false;
    return compiled;
  };
};
