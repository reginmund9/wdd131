const temperature = 10;
const windSpeed = 5;
const windChillElement = document.querySelector('.windchill')

function calculateWindChill(temp, wind) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} °C`;
} else {
    windChillElement.textContent = "N/A";
}
