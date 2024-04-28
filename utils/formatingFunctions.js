export const formatTime = (timestamp, timezoneOffset) => {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
};

export const celsiusToKelvin = (celsius) => {
  return Math.round(celsius + 273.15);
};
export const celsiusToFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};
