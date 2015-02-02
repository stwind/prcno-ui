'use strict';

var request = require('superagent');
var config = require('./config');

var type = {
  BUCKET: {
    FETCH: 'BUCKET_FETCH'
  },
  ENTRY: {
    FETCH: 'ENTRY_FETCH'
  }
};

var methods = {
  buckets: {
    fetch: function () {
      this.dispatch(type.BUCKET.FETCH, [
        { name: 'news' },
        { name: 'works' }
      ]);
    }
  },
  entries: {
    fetch: function (bucket) {
      var self = this,
          url = config.api.url + '/api/entries?bucket=' + bucket;
      request
        .get(url)
        .end(function (res){
          var entries = res.body;

          self.dispatch(type.ENTRY.FETCH, entries);
        });
    }
  }
};

module.exports = {
  type: type,
  methods: methods
};
