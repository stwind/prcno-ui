'use strict';

require('normalize.css/normalize.css');
require('styles/app.scss');

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var stores = require('./stores'),
    actions = require('./actions');

var flux = new Fluxxor.Flux(stores, actions.methods);

var routes = require('./routes');

Router.run(routes, function (Handler, state) {
  React.render(<Handler flux={flux}/>, document.getElementById('content'));
});
