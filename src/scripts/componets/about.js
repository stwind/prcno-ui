'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxxor = require('fluxxor');

var About = React.createClass({
  mixins: [
    Router.State
  ],

  render: function () {
    return (
      <div className="page p-about">
        <div className="page__content">
          nothing
        </div>
      </div>
    );
  }
});

module.exports = About;
