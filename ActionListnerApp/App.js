import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/FirstPage';
import LoginScreen from './screens/SecondPage';
import ConnectusScreen from './screens/ThirdPage';
import RegisterScreen from './screens/FourthPage';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen}options={{headerShown: false}} />
      <Stack.Screen name="Connect" component={ConnectusScreen}options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;