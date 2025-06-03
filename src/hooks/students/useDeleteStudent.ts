import { useState } from 'react';
import { deleteStudent } from '@/services/studentService';

export const useDeleteStudent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  const handleDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await deleteStudent(id);
      setSuccess(true);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteStudent: handleDelete,
    loading,
    error,
    success,
  };
};
