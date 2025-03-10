import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MyFeedScreen from "./screens/MyFeedScreen";

// Create Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyFeed" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyFeed" component={MyFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
