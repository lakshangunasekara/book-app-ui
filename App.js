import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Drama from "./screens/Drama";
import Novel from "./screens/Novel";
import ShortStories from "./screens/ShortStories";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Dash"
          component={Dashboard}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitle: "",
            headerSearchBarOptions: true,
          }}
        />
        <Stack.Screen
          name="Drama"
          component={Drama}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Novels"
          component={Novel}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Short Stories"
          component={ShortStories}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
