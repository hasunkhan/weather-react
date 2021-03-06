/*
var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
*/

var React = require('react');
var Nav = require('Nav');
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <div style={{marginTop: "1rem"}}></div>
        <div className="row" style={{border: "2px solid #466d98"}}>
          <div className="medium-6 large-4 small-centered columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
