import 'react-native-gesture-handler';
import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './home';
import denemeScreen from './deneme';



const Stack =createStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown:false,
        }}
        />
      
        <Stack.Screen
        name="deneme"
        component={denemeScreen}
        options={{
          title:'Deneme Ekrani',
          headerStyle: {
            backgroundColor:'pink'
          }
        }}
        />
      

        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Routes;