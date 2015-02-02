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
      <div className="page p-buckets">
        <div className="page__content">
          <div className="c-logo">princeno</div>
          <ul className="p-buckets__menu">
            {this.state.buckets.map(this.renderBucket)}
            <li key="about" className="p-buckets__item">
              <Link className="p-buckets__link" to="about">about</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  },

  renderBucket: function (bucket) {
    return (
      <li key={bucket.name} className="p-buckets__item">
        <Link className="p-buckets__link" to="entries" params={{ id: bucket.name }}>
          {bucket.name}
        </Link>
      </li>
    );
  }
});

module.exports = Buckets;
