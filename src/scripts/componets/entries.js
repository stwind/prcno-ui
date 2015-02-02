'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var Entries = React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React), 
    Fluxxor.StoreWatchMixin("entries"),
    Router.State
  ],

  componentDidMount: function () {
    var bucket = this.getParams().id;
    this.getFlux().actions.entries.fetch(bucket);
  },

  getStateFromFlux: function() {
    return {
      entries: this.getFlux().store("entries").getEntries()
    };
  },

  render: function () {
    return (
      <div className="page p-entries">
        <div className="page__content">
          <ul className="p-entries__menu">{this.state.entries.map(this.renderEntry)}</ul>
        </div>
      </div>
    );
  },

  renderEntry: function (entry) {
    return (
      <li key={entry.id} className="p-entries__item">
        {entry.title}
      </li>
    );
  }
});

module.exports = Entries;
