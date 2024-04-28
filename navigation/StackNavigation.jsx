import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../screens/MainScreen";
import WeatherScreen from "../screens/WeatherScreen";
const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{ title: "Weather", headerBackTitle: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
