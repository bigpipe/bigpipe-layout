describe('Bigpipe default page layout plugin', function () {
  'use strict';

  var chai = require('chai');
  chai.Assertion.includeStack = true;

  var layout = require('../')
    , Pipe = require('bigpipe')
    , expect = chai.expect
    , server = Pipe.createServer(1337, {
        dist: '/tmp/dist'
      }).use(layout);
});
