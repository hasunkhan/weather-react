var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    // set isLoading property
    return {
      isLoading: false
    };
  },
  handleSearch: function (location){
    // console.log(location);
    // debugger;
    var that = this;
    this.setState ({
      isLoading: true
    });
    OpenWeatherMap
      .getTemp(location)
      .then(function (temp){
        // this will not work cause
        // this binding will lost inside the async function
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (errMessage) {
        that.setState({
          location: null,
          temp: null,
          isLoading: false,
          errorMessage: errMessage.message
        })
        // alert('Error Occured', errMessage);

      });
      /*
      this.setState({
        location: location,
        temp: 24
      });
      */

  },
  render: function () {
    var { temp, location, isLoading } = this.state;

    function renderMessage() {
      if(isLoading) {
        return (
          <h3 className="text-center">Temp is Loading ...</h3>
        );
      } else if (temp && location){
        return (
          <WeatherMessage temp={temp} location={location} />
        );
      }
    }
    function renderError() {
      if(typeof(errorMessage) === 'string'){
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }
    return (
      <div>
        <h1 className="text-center">Fetch Weather </h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
