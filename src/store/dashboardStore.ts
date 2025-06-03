import { create } from 'zustand';
import { getDashboardCounts } from '@/services/dashboardService';

type DashboardData = {
  totalUsers: number;
  totalStudents: number;
  totalInstructors: number;
  totalApprovedInstructors: number;
  totalCourses: number;
};

interface DashboardStore {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  fetchCounts: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchCounts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getDashboardCounts();
      set({ data: res.data, loading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || 'Something went wrong',
        loading: false,
      });
    }
  },
}));
