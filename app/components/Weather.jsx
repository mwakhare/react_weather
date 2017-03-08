var React = require ('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
const openweathermap = require('../api/openweathermap');
const ErrorModal = require('./ErrorModal');

var Weather = React.createClass ({
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  handleSearch: function(location){
    var that = this;

    that.setState ({
      isLoading: true,
      errorMessage: undefined
    });

    openweathermap.getTemp (location).then(function (temp) {
      that.setState ({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (err) {
      that.setState ({
        isLoading: false,
        errorMessage: err.message
      });
    })
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location.length > 0)
    {
      this.handleSearch (location);
      window.location.hash = "#/";
    }

  },
  render: function (){
    var {isLoading, temp, location, errorMessage} = this.state;

      function renderMessage () {
      if (isLoading)
      {
        return <h3 className="text-center">Fatching the data...</h3>;
      }else {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderErrorMessage() {
      if (typeof errorMessage === "string")
      {
        return <ErrorModal/>
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>

    );
  }
});

module.exports = Weather;
