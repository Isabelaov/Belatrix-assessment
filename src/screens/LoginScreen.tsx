import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { RootStackParamList } from '../interfaces'
import { useAuth } from '../hooks'
import { FormStyles } from '../assets/styles'
import { Button, Input } from '../components'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

export const LoginScreen = ({ navigation, }: { navigation: NavigationProp; }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = async () => {
    if(!email || !password){
      Alert.alert('All fields are required')
      return;
    }

    await login(email, password)
    navigation.navigate('VehicleList', {})
  }

  return (
    <View style={ FormStyles.container }>
      <Text style={ FormStyles.title }>Login</Text>

      <Input 
      keyboardType='email-address' 
      placeholder='Email'
      onChangeText={ setEmail }
      />

      <Input 
        placeholder='Password' 
        secureTextEntry 
        onChangeText={ setPassword }
      />

      <Button
          onPress={ handleLogin }
          buttonText={
            <Text style={ FormStyles.buttonText }>Log In</Text>
          }>
      </Button>

    </View>
  )
}
