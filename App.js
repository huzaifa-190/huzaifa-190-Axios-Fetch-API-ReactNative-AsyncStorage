import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home"
import Movies from "./views/Movies"

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

       <Stack.Navigator screenOptions={{ headerShown: true }}>

          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="Movies" component={Movies} options={{}} />

      </Stack.Navigator>
    
    </NavigationContainer>
  );
}