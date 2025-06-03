import axios from '@/lib/axios';
import { Student } from '@/types/student';

export const fetchStudents = async () => {
  const res = await axios.get('/student');
  return res.data;
};

export const fetchStudent = async (id: string)=> {
  const res = await axios.get(`/student/${id}`);
  return res.data;
};

export const createStudent = async (data: Omit<Student, 'id' | 'enrolledAt'>) => {
  const res = await axios.post('/student', data);
  return res.data;
};

export const updateStudent = async ({ id, data }: { id: string; data: Partial<Student> }) => {
  const res = await axios.put(`/student/${id}`, data);
  return res.data;
};

export const deleteStudent = async (id: string) => {
  const res = await axios.delete(`/student/${id}`);
  return res.data;
};
