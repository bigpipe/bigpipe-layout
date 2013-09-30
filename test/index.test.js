describe('Bigpipe default page layout plugin', function () {
  'use strict';

  var chai = require('chai');
  chai.Assertion.includeStack = true;

  var layout = require('../')
    , Pipe = require('bigpipe')
    , http = require('http')
    , expect = chai.expect
    , server = new Pipe(http.createServer(), {
        public: __dirname,
        dist: '/tmp/dist',
      });

  it('exposes server side functionality', function () {
    expect(layout).to.have.property('server');
    expect(layout.server).to.be.a('function');
  });

  it('exposes default plugin name', function () {
    expect(layout).to.have.property('name', 'layout');
  });

  it('will emit an error if no valid layout is provided', function () {
    layout.options = {};

    server.on('error', function (error) {
      expect(error).to.be.an.instanceof(Error);
      expect(error.message).to.equal('Please provide a valid layout template.');
    });

    server.use(layout);
  });

  it('shortcircuits compiled#server', function () {
    var compiled = server.temper.fetch(__dirname + '/fixtures/views/index.ejs');

    expect(compiled).to.be.an('object');
    expect(compiled).to.have.property('server');
    expect(compiled.server).to.be.an('function');
  });

  it('will insert content of page in layout', function () {
    layout.options = {
      base: __dirname + '/fixtures/base.ejs'
    };

    server.use('inserter', layout);

    var output = server.temper.fetch(__dirname + '/fixtures/views/index.ejs').server();
    expect(output).to.equal('<div>\n  Some random content of a page!\n\n</div>\n');
  });

  it('allows insertion key to be changed', function () {
    layout.options = {
      key: 'test',
      base: __dirname + '/fixtures/alternative.ejs'
    };

    var alternative = new Pipe(http.createServer(), {
      public: __dirname,
      dist: '/tmp/dist',
    }).use(layout);

    var output = alternative.temper.fetch(__dirname + '/fixtures/views/index.ejs').server();
    expect(output).to.equal('<span>\n  Some random content of a page!\n\n</span>\n');
  });
});
