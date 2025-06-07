import axiosInstance from '@/lib/axios';

export interface User {
  id: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export const register = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await axiosInstance.post('/auth/register', { email, password , role:'User'});
  return res.data;
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await axiosInstance.post('/auth/login', { email, password });
  return res.data;
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post('auth/logout');
  // Optionally clear tokens locally here
};

export const getCurrentUser = async (): Promise<User> => {
  const res = await axiosInstance.get('/auth/me');
  return res.data;
};
