import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStudent } from '@/services/studentService';
import { Student } from '@/types/student';

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Student }) => updateStudent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};
