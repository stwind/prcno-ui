'use strict';

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect, Link } = Router;

var App = require('./app');

var routes = (
  <Route path="/" handler={App}>
  </Route>
);

module.exports = routes;
