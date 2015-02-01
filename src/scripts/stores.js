'use strict';

var Fluxxor = require('fluxxor');
var actions = require('./actions');

var Buckets = Fluxxor.createStore({
  initialize: function () {
    this.buckets = [];

    this.bindActions(
      actions.type.BUCKET.ADD, this.handleBucketAdd
    )
  },

  getBuckets: function () {
    return this.buckets;
  },

  handleBucketAdd: function (payload) {
    this.buckets.push(payload);

    this.emit('change');
  }
});

module.exports = {
  buckets: new Buckets()
};
