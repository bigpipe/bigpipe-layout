describe('Bigpipe default page layout plugin', function () {
  'use strict';

  var chai = require('chai');
  chai.Assertion.includeStack = true;

  var layout = require('../')
    , Pipe = require('bigpipe')
    , expect = chai.expect
    , server;

  layout.options = {
    base: __dirname + '/fixtures/base.ejs'
  };

  beforeEach(function () {
    server = Pipe.createServer(1337, {
      public: __dirname,
      dist: '/tmp/dist'
    }).use(layout);
  });

  afterEach(function () {
    server = null;
  });

  it('exposes server side functionality', function () {
    expect(layout).to.have.property('server');
    expect(layout.server).to.be.a('function');
  });

  it('exposes default plugin name', function () {
    expect(layout).to.have.property('name', 'layout');
  });

  it('will emit an error if no valid layout is provided');
  it('will insert content of page in layout');
  it('allows insertion key to be changed');
  it('shortcircuits compiled#server only once');
});
