// Footer: Set the current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather: Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Static values for temperature and wind speed
const temperature = 10; // in °C
const windSpeed = 10; // in km/h

// Conditions for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = `${windChill} °C`;
} else {
    document.getElementById("windChill").textContent = "N/A";
}
