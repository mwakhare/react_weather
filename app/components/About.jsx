var React = require ('react');

var About = React.createClass ({
  render: function (){
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>
          This app is based on React.
          This is build for practice purpose.

          I have used following tools-
        </p>

        <ul>
          <li>
            <a herf="https://facebook.github.io/react">React  - This was
              the JavaScript framework used.</a>
          </li>
          <li>
            <a herf="http://openweathermap.com">Open Weather Map - This was
              used to get weather data by city name.</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
