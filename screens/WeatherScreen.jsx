import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../redux/weatherReducer";
import WeatherInformation from "../components/WeatherScreen/WeatherInformation";

export default function WeatherScreen() {
  const weatherData = useSelector(selectWeather);

  return (
    <View style={styles.weatherWrapper}>
      <WeatherInformation weatherData={weatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
    weatherWrapper: {
        flex:1,
    }
});
