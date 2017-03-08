var React = require ('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
const openweathermap = require('../api/openweathermap');

var Weather = React.createClass ({
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  handleSearch: function(location){
    var that = this;

    that.setState ({
      isLoading: true
    });

    openweathermap.getTemp (location).then(function (temp) {
      that.setState ({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState ({
        isLoading: false
      });
    })
  },
  render: function (){
    var {isLoading, temp, location} = this.state;

      function renderMessage () {
      if (isLoading)
      {
        return <h2>Fatching the data...</h2>;
      }else {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h4>Weather component</h4>

        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
