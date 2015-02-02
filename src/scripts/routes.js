'use strict';

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect, Link } = Router;

var App = require('./app'),
    Buckets = require('./componets/buckets'),
    Entries = require('./componets/entries');

var routes = (
  <Route path="/" handler={App}>
    <Route name="entries" handler={Entries} path="/:id" />
    <DefaultRoute name="bucket-list" handler={Buckets}/>
  </Route>
);

module.exports = routes;
