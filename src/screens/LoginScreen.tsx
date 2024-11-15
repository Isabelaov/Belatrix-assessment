import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../interfaces'
import { useNavigation } from '@react-navigation/native'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}
