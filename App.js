import * as React from "react";
import { Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import Safety from "./app/screens/safety";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function Screen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Bezpieczeństwo") {
            iconName = focused ? "ios-medkit" : "ios-medkit";
          } else if (route.name === "Polska") {
            iconName = focused ? "ios-home" : "ios-home";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fe484a",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Polska" component={HomeScreen} />
      <Tab.Screen name="Bezpieczeństwo" component={Safety} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
