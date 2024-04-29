// import { React, useState, useCallback } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ActivityIndicator,
//   View,
//   Text,
//   Button,
//   Platform,
// } from "react-native";
// import {
//   requestForegroundPermissionsAsync,
//   getCurrentPositionAsync,
//   reverseGeocodeAsync,
// } from "expo-location";
// import CustomInput from "../components/CustomInput";
// import { setWeather } from "../redux/weatherReducer";
// import { useDispatch } from "react-redux";

// export default function MainScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const [city, setCity] = useState("");
//   const [isFetching, setIsFetching] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleCityChange = useCallback((text) => {
//     setIsError(false);
//     setCity(text);
//   }, []);

//   const handleFindPress = useCallback(() => {
//     fetchWeatherData(city.trim());
//     setCity("");
//   }, [city]);

//   const handleLocationPick = useCallback(() => {
//     getLocationAsync();
//   }, []);

//   const getLocationAsync = useCallback(async () => {
//     setIsFetching(true);
//     try {
//       let { status } = await requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setIsError(true);
//         return;
//       }
//       let location = await getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       const city = await reverseGeocodeAsyncFunction(latitude, longitude);
//       fetchWeatherData(city);
//     } catch (error) {
//       console.error("Error fetching location:", error.message);
//       setIsError(true);
//     } finally {
//       setIsFetching(false);
//     }
//   }, []);

//   const reverseGeocodeAsyncFunction = useCallback(
//     async (latitude, longitude) => {
//       let location = await reverseGeocodeAsync({ latitude, longitude });
//       let city = location[0].city;
//       return city;
//     },
//     []
//   );

//   const fetchWeatherData = useCallback(async (cityName) => {
//     setIsFetching(true);

//     try {
//       const apiKey = "a983a4d3a2001154045c740dc3263a80";
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
//       );
//       if (!response.ok) {
//         setIsFetching(false);
//         setIsError(true);
//       } else {
//         const data = await response.json();
//         dispatch(setWeather(data));

//         setIsFetching(false);
//         navigation.navigate("WeatherScreen");
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error.message);
//     }
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       {isFetching ? (
//         <View style={styles.loader}>
//           <ActivityIndicator />
//         </View>
//       ) : (
//         <View style={styles.loader}></View>
//       )}
//       <Text style={styles.header}>Enter City to see the weather</Text>
//       <CustomInput
//         style={styles.textInput}
//         value={city}
//         placeholder="Enter city name"
//         buttonText="Find"
//         handleChange={handleCityChange}
//         handleButtonPress={handleFindPress}
//         isButtonDisabled={isFetching}
//       />
//       <View style={styles.errorContainer}>
//         {isError && <Text style={styles.errorText}>Try another city</Text>}
//       </View>
//       <View style={styles.textInput}>
//         <Button
//           title="Use my location"
//           onPress={handleLocationPick}
//           disabled={isFetching}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loader: {
//     alignSelf: "center",
//     alignItems: "flex-start",
//     alignContent: "center",
//     width: "90%",
//     height: 40,
//     ...(Platform.OS === "android" && { marginTop: "10%" }),
//   },
//   header: {
//     textAlign: "center",
//     fontSize: 20,
//   },
//   errorContainer: {
//     height: 30,
//   },
//   errorText: {
//     fontSize: 16,
//     color: "red",
//     textAlign: "center",
//   },
//   textInput: {
//     marginTop: "10%",
//     alignSelf: "center",
//     marginBottom: "10%",
//   },
// });
import { React, useState, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Platform,
} from "react-native";

import CustomInput from "../components/CustomInput";
import { setWeather } from "../redux/weatherReducer";
import { useDispatch } from "react-redux";


export default function MainScreen({ navigation }) {
  const apiKey = process.env.API_KEY;
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCityChange = useCallback((text) => {
    setIsError(false);
    setCity(text);
  }, []);

  const handleFindPress = useCallback(() => {
    fetchWeatherData(city.trim());
    setCity("");
  }, [city]);

  const fetchWeatherData = useCallback(async (cityName) => {
    setIsFetching(true);

    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        setIsFetching(false);
        setIsError(true);
      } else {
        const data = await response.json();
        dispatch(setWeather(data));

        setIsFetching(false);
        navigation.navigate("WeatherScreen");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isFetching ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.loader}></View>
      )}
      <Text style={styles.header}>Enter City to see the weather</Text>
      <CustomInput
        style={styles.textInput}
        value={city}
        placeholder="Enter city name"
        buttonText="Find"
        handleChange={handleCityChange}
        handleButtonPress={handleFindPress}
        isButtonDisabled={isFetching}
      />
      <View style={styles.errorContainer}>
        {isError && <Text style={styles.errorText}>Try another city</Text>}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    alignSelf: "center",
    alignItems: "flex-start",
    alignContent: "center",
    width: "90%",
    height: 40,
    ...(Platform.OS === "android" && { marginTop: "10%" }),
  },
  header: {
    textAlign: "center",
    fontSize: 20,
  },
  errorContainer: {
    height: 30,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  textInput: {
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: "10%",
  },
});
