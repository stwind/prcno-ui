'use strict';

var Fluxxor = require('fluxxor');
var actions = require('./actions');

var Buckets = Fluxxor.createStore({
  initialize: function () {
    this.buckets = [];

    this.bindActions(
      actions.type.BUCKET.FETCH, this.handleBucketFetch
    )
  },

  getBuckets: function () {
    return this.buckets;
  },

  handleBucketFetch: function (payload) {
    this.buckets = payload;
    this.emit('change');
  }
});

var Entries = Fluxxor.createStore({
  initialize: function () {
    this.entries = [];

    this.bindActions(
      actions.type.ENTRY.FETCH, this.handleEntryFetch
    )
  },

  getEntries: function () {
    return this.entries;
  },

  handleEntryFetch: function (payload) {
    this.entries = payload;
    this.emit('change');
  }
});

module.exports = {
  buckets: new Buckets(),
  entries: new Entries()
};
