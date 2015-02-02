'use strict';

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
      this.dispatch(type.ENTRY.FETCH, [
        { name: 'e01', bucket: bucket },
        { name: 'e02', bucket: bucket },
        { name: 'e03', bucket: bucket },
        { name: 'e04', bucket: bucket },
        { name: 'e05', bucket: bucket }
      ]);
    }
  }
};

module.exports = {
  type: type,
  methods: methods
};
