'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var Buckets = React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React), 
    Fluxxor.StoreWatchMixin("buckets"),
    Router.State
  ],

  getStateFromFlux: function() {
    return {
      buckets: this.getFlux().store("buckets").getBuckets()
    };
  },

  render: function () {
    return (
      <div>
        <ul>{this.state.buckets.map(this.renderBucket)}</ul>
      </div>
    );
  },

  renderBucket: function (bucket) {
    return (
      <li key={bucket.name}>{bucket.name}</li>
    );
  }
});

module.exports = Buckets;
