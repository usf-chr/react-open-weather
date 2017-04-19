module.exports = {
  icons: {
    "01d": "wi-day-sunny",
    "01n": "wi-night-clear",
    "02d": "wi-day-cloudy",
    "02n": "wi-night-alt-cloudy",
    "03d": "wi-cloudy",
    "03n": "wi-cloudy",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-day-showers",
    "09n": "wi-night-alt-showers",
    "10d": "wi-day-rain",
    "10n": "wi-night-alt-rain-wind",
    "11d": "wi-day-thunderstorm",
    "11n": "wi-night-alt-thunderstorm",
    "13d": "wi-day-snow-wind",
    "13n": "wi-night-alt-snow",
    "50d": "wi-day-fog",
    "50n": "wi-night-fog"
  },
  getIcon: function (icon) {
    var icoClass = this.icons[icon];
    if (icoClass) {
      return icoClass;
    } else {
      return "na"
    }
  },
  getTempSymbol: function (unit) {
    if (unit == "metric") {
      return "C"
    } else {
      return "F"
    }
  }
}