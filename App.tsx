/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/interfaces';
import { CreateUpdateVehicle, LoginScreen, RegisterUserScreen, VehicleListScreen } from './src/screens';


const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterUser'>
      <Stack.Screen
          name="RegisterUser"
          component={ RegisterUserScreen }
          options={ { headerShown: false } }
      />

      <Stack.Screen
          name="Login"
          component={ LoginScreen }
      />

      <Stack.Screen
          name="CreateUpdateVehicle"
          component={ CreateUpdateVehicle }
          options={ 
            {  
              title: 'Create / Update Vehicle', headerTitleAlign: 'center' 
            } 
          }
      />

      <Stack.Screen
          name="VehicleList"
          component={ VehicleListScreen }
          options={ { title: 'Vehicles', } }
      />

      <Stack.Screen
          name="MaintenanceList"
          component={CreateUpdateVehicle }
          options={ { title: 'Maintenance Record', headerTitleAlign: 'center' } }
      />

      <Stack.Screen
          name="RegisterMaintenance"
          component={CreateUpdateVehicle }
          options={ { title: 'Register Maintenance', headerTitleAlign: 'center' } }
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
