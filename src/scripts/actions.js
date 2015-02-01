'use strict';

var type = {
  BUCKET: {
    ADD: 'BUCKET_ADD'
  }
};

var methods = {
  buckets: {
    add: function (name) {
      this.dispatch(type.BUCKET.ADD, {
        name: name
      });
    }
  }
};

module.exports = {
  type: type,
  methods: methods
};
