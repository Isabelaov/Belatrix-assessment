import axios from 'axios';
import { User } from '../interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BC_URL } from '@env';

export const useAuth = () => {
  const register = async ({ ...user }: User) => {
    const { email, name, password } = user;
    const res = await axios.post(`${BC_URL}/auth/register`, {
      email,
      user,
      name,
      password,
    });
  };

  const login = async (email: string, password: string) => {
    const res = await axios.post(`${BC_URL}/auth/login`, {
      email,
      password,
    });
    const token = res.data.access_token;
    await AsyncStorage.setItem('AuthToken', token);

    console.log(getAuthToken());
  };

  const logout = async () => {
    await AsyncStorage.removeItem('AuthToken');
  };

  const getAuthToken = async () => {
    return await AsyncStorage.getItem('AuthToken');
  };

  return { register, login, logout, getAuthToken };
};
