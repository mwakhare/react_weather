var React = require ('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
const openweathermap = require('../api/openweathermap');

var Weather = React.createClass ({
  getInitialState: function(){
    return ({
      location: 'Navi Mumbai',
      temp: 35
    });
  },
  handleSearch: function(location){
    var that = this;

    openweathermap.getTemp (location).then(function (temp) {
      that.setState ({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert (errorMessage);
    })
  },
  render: function (){
    var {temp, location} = this.state;
    return (
      <div>
        <h4>Weather component</h4>

        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>

    );
  }
});

module.exports = Weather;
