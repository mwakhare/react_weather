var axios = require ('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3c07ab77044b0bd4e597323bb3c4c81a&units=metric';

module.exports = {
  getTemp : function (location)
  {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    debugger;
    return axios.get(requestUrl).then(function(res) {
      if (res.status === 200)
      {
        return res.data.main.temp;
      }
      else {
        throw new Error (res.statusText)
      }
      //debugger;
      // if (res.data.cod && res.data.message)
      // {
      //   throw new Error(res.data.message);
      // }
      // else {
      //   debugger;
      //   return res.data.main.temp;
      // }
    }, function (res) {
      throw new Error (res.statusText);
    });
    debugger;
  }
}
