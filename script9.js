function CelsiustoFahrenheit(x)
{
    var celsius=x;
    var convert=(celsius*(9/5))+32;
    console.log(x+"\u00B0C is "+convert+"\u00B0F");
}
function FahrenheittoCelsius(x)
{
    var fahrenheit=x;
    var convert=(fahrenheit-32)*(5/9);
    console.log(x+"\u00B0F is "+convert+"\u00B0C");
}