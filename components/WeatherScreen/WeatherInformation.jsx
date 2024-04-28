import { StyleSheet, Text, View, Image } from "react-native";
import {
  formatTime,
  celsiusToFahrenheit,
  celsiusToKelvin,
} from "../../utils/formatingFunctions";
import sunriseIcon from "../../assets/icons/sunrise.png";
import sunsetIcon from "../../assets/icons/sunset.png";
import windIcon from "../../assets/icons/wind.png";

const WeatherInformation = ({ weatherData }) => {
  if (!weatherData) return null; // Error handling

  const { name, main, weather, sys, wind, timezone } = weatherData;
  const { temp, temp_max, temp_min, feels_like } = main;

  const temperatureC = Math.round(temp);
  const temperatureF = celsiusToFahrenheit(temperatureC);
  const temperatureK = celsiusToKelvin(temperatureC);

  const maxTemp = Math.round(temp_max);
  const minTemp = Math.round(temp_min);
  const feelsLikeTemp = Math.round(feels_like);

  const sunrise = formatTime(sys.sunrise, timezone);
  const sunset = formatTime(sys.sunset, timezone);

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.date}>27 April</Text>
      <View style={styles.weather}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.description}>{weather[0].description}</Text>
      </View>
      <View style={styles.temperatures}>
        <Text style={styles.temperature}>{temperatureF}°F</Text>
        <Text style={styles.temperature}>{temperatureC}°C</Text>
        <Text style={styles.temperature}>{temperatureK}°K</Text>
      </View>
      <View style={styles.additionalInfo}>
        <Text>{`H: ${maxTemp} °C `}</Text>
        <Text>{`L: ${minTemp} °C `}</Text>
        <Text style={styles.inline}>{`Feels Like: ${feelsLikeTemp}°C`}</Text>

        <View style={styles.inline}>
          <Image source={windIcon} style={styles.icon} />
          <Text>{` ${wind.speed} km/h`}</Text>
        </View>
        <View style={styles.inline}>
          <Image source={sunriseIcon} style={styles.icon} />
          <Text>{`Sunrise: ${sunrise}`}</Text>
        </View>
        <View style={styles.inline}>
          <Image source={sunsetIcon} style={styles.icon} />
          <Text>{`Sunset: ${sunset}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cityName: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: "500",
  },
  date: {
    padding: 5,
    fontSize: 18,
    fontWeight: "300",
  },
  weather: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "5%",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  description: {
    marginLeft: 10,
  },
  temperatures: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginTop: "5%",
    marginBottom: 10,

    //horizontal line
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  temperature: {
    textAlign: "center",
    padding: 20,
    width: "31%",
    backgroundColor: "lightblue",
    fontSize: 24,
  },
  additionalInfo: {
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default WeatherInformation;
