describe('Bigpipe default page layout plugin', function () {
  'use strict';

  var chai = require('chai');
  chai.Assertion.includeStack = true;

  var layout = require('../')
    , Pipe = require('bigpipe')
    , expect = chai.expect
    , server;

    layout.base = __dirname + '/fixtures/base.ejs';
    beforeEach(function () {
      server = Pipe.createServer(1337, {
        public: __dirname,
        dist: '/tmp/dist'
      }).use(layout);
    });

    afterEach(function () {
      server = null;
    });
});
