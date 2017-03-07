var React = require ('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var Weather = React.createClass ({
  getInitialState: function(){
    return ({
      location: 'Navi Mumbai',
      temp: 35
    });
  },
  handleSearch: function(location){
    this.setState ({
      location: location,
      temp: 23
    });
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
