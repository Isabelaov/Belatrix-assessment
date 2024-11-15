import React from 'react'
import { View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateUpdateVehicle'>

export const CreateUpdateVehicle = () => {
  const navigation = useNavigation<NavigationProp>()
  
  return (
    <View>CreateUpdateVehicle</View>
  )
}
