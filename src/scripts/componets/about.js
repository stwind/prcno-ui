'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var About = React.createClass({
  mixins: [
    Router.State,
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("info")
  ],

  componentDidMount: function () {
    this.getFlux().actions.info.get();
  },

  getStateFromFlux: function() {
    var info = this.getFlux().store("info").getInfo();
    return { info: info };
  },

  render: function () {
    return (
      <div className="page p-about">
        <div className="page__content">
          {this.state.info.content.data}
        </div>
      </div>
    );
  }
});

module.exports = About;
