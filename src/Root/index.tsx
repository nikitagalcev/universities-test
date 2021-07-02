import * as React from 'react'
import {useEffect} from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CountriesList } from '../Screens/CountriesList';
import { Country } from '../Screens/Country';
import RNBootSplash from "react-native-bootsplash";

const Stack = createStackNavigator();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen 
          name="CountriesList" 
          component={CountriesList} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Country"
          component={Country} 
          options={({ route }) => ({ name: route.params?.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
