'use strict';

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect, Link } = Router;

var App = require('./app'),
    Buckets = require('./componets/buckets');

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="bucket-list" handler={Buckets}/>
  </Route>
);

module.exports = routes;
