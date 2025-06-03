import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '@/services/studentService';
export type Student = {
    id: string;
    name: string;
    email: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    class: string;
    enrolledAt: string;
  };
  

export const useStudentsQuery = () => {
  const {
    data: students,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents,
  });

  return {
    students,
    isLoading,
    isError,
    error,
    refetch,
  };
};
