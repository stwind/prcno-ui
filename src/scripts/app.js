'use strict';

var React = require('react');
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var { RouteHandler } = Router;

var App = React.createClass({
  mixins: [Router.State, Fluxxor.FluxMixin(React)],

  render: function () {
    return (
      <RouteHandler {...this.props}/>
    );
  }
});

module.exports = App;
