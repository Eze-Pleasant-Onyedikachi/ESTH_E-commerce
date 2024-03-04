
function temperaureConverter(kelvin) {
    var celsius = kelvin - 273;
    return celsius;
  }
  
  var kelvinTemperature = 300;
  var celsiusTemperature = `300 degrees Kelvin is equivalent to ${temperaureConverter(kelvinTemperature)} degrees celsius;`
  console.log(celsiusTemperature);