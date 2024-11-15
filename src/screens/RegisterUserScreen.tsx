import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../interfaces'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterUser'>

export const RegisterUserScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  
  return (
    <View>
      <Text>CreateUpdateUserScreen</Text>
    </View>
  )
}
