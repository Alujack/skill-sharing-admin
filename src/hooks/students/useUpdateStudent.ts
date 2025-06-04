import { useState } from 'react';
import { updateStudent } from '@/services/studentService';
import { Student } from '@/types/student';

export const useUpdateStudent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const update = async (id: string, data: Student) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await updateStudent({id:id,data:data});
      setSuccess(true);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error, success };
};
