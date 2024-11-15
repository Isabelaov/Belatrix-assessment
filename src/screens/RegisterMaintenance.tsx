import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../interfaces'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterMaintenance'>

export const RegisterMaintenance = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View>
      <Text>RegisterMaintenance</Text>
    </View>
  )
}
