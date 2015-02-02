'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var { Link } = Router;

var Buckets = React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React), 
    Fluxxor.StoreWatchMixin("buckets"),
    Router.State
  ],

  getStateFromFlux: function() {
    this.getFlux().actions.buckets.fetch();
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
      <li key={bucket.name}>
        <Link to="entries" params={{ id: bucket.name }}>
          {bucket.name}
        </Link>
      </li>
    );
  }
});

module.exports = Buckets;
