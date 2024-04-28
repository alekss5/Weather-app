// import { StyleSheet, Text, View, Image } from "react-native";

// import {
//   formatTime,
//   celsiusToFahrenheit,
//   celsiusToKelvin,
// } from "../../utils/formatingFunctions";

// import sunrise from "../../assets/icons/sunrise.png";
// import sunset from "../../assets/icons/sunset.png";

// export default function WeatherInformation({ weatherData }) {

//   const temperatureC = Math.round(weatherData.main.temp);
//   const temperatureF = celsiusToFahrenheit(temperatureC);
//   const temperatureK = celsiusToKelvin(temperatureC);

//   const maxTemp = Math.round(weatherData.main.temp_max)
//   const minTemp = Math.round(weatherData.main.temp_min)
//   const feelsLikeTemp = Math.round(weatherData.main.feels_like)

//   return (
//     <View style={styles.textContainer}>
//       <Text style={styles.cityName}>{weatherData.name}</Text>
//       <Text style={styles.date}>27 April </Text>
//       <View style={styles.weatherDescriptionsContainer}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={{
//               uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
//             }}
//             style={{ width: "100%", height: "100%" }}
//           />
//         </View>
//         <Text style={styles.description}>
//           {weatherData.weather[0].description}
//         </Text>
//       </View>
//       <View style={styles.degreesContainer}>
//         <View style={styles.rowContainer}>
//           <Text style={styles.degreesText}>{temperatureF}</Text><Text> °F</Text>
//         </View>
//         <View style={styles.rowContainer}>
//           <Text style={styles.degreesText}>{temperatureC}</Text><Text> °C</Text>
//         </View>
//         <View style={styles.rowContainer}>
//           <Text style={styles.degreesText}>{temperatureK}</Text><Text> °K</Text>
//         </View>
//       </View>

//       <View>
//       <View style={styles.rowContainer}>
//         <Text>H: {maxTemp}°C</Text>
//         <Text>L: {minTemp}°C</Text>
//         </View>
//         <Text>Feels Like: {feelsLikeTemp} °C</Text>
//       </View>

//       <Text>{weatherData.wind.speed} km/h</Text>
//       <Text>
//         Sunrise: {formatTime(weatherData.sys.sunrise, weatherData.timezone)}
//       </Text>
//       <Image source={sunrise} style={{ width: 30, height: 30 }} />
//       <Text>
//         Sunset: {formatTime(weatherData.sys.sunset, weatherData.timezone)}
//       </Text>
//       <Image source={sunset} style={{ width: 30, height: 30 }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textContainer: {
//     justifyItems: "center",
//     alignItems: "center",
//   },
//   cityName: {
//     marginTop: 40,
//     fontSize: 28,
//     fontWeight: "500",
//   },
//   date: {
//     padding: 5,
//     fontSize: 18,
//     fontWeight: "300",
//   },
//   imageContainer: {
//     width: 50,
//     height: 50,
//   },

//   weatherDescriptionsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: "5%",
//   },
//   degreesContainer: {
//     width: "90%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: "5%",
//     marginBottom: 10,
//   },
//   rowContainer: {
//     backgroundColor: "lightblue",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 5,
//     borderBottomWidth: 1,
//     borderColor: "gray",
//     width: 110,
//     padding: 22,
//   },
//   degreesText: {
//     fontSize: 24,
//   },
// });
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
