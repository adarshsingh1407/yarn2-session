('use strict');

const React = require('react');

const e = React.createElement;

const Header = () => {
  return e('header', {}, 'Shared Header');
};

module.exports = Header;
