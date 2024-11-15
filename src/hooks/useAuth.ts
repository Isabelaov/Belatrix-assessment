import axios from 'axios';
import { User } from '../interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BC_URL } from '@env';
import { Alert } from 'react-native';
import { stringify } from 'uuid';

export const useAuth = () => {
  const register = async ({ ...user }: User) => {
    try {
      const { email, name, password } = user;
      await axios.post(`${BC_URL}/auth/register`, {
        email,
        user,
        name,
        password,
      });
    } catch (error: any) {
      Alert.alert('Error in register:', stringify(error));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${BC_URL}/auth/login`, {
        email,
        password,
      });

      const token = res.data.data.access_token;

      await AsyncStorage.setItem('AuthToken', token);
    } catch (error: any) {
      Alert.alert('Error in login:', stringify(error));
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('AuthToken');
  };

  const getAuthToken = async () => {
    return await AsyncStorage.getItem('AuthToken');
  };

  return { register, login, logout, getAuthToken };
};
