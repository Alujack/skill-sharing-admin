export type UserRole = 'Admin' | 'Instructor' | 'User' | 'Student';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string | null;
  isVerified: boolean;
  createdAt: Date;
  instructorProfile?: InstructorProfile | null;
  enrollments?: Enrollment[];
  wishlists?: Wishlist[];
};

export type InstructorProfile = {
  id: number;
  userId: number;
  bio?: string | null;
  isApproved: boolean;
  user?: User;
  courses?: Course[];
};

export type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  instructorId: number;
  categoryId: number;
  createdAt: Date;
  instructor?: InstructorProfile;
  category?: Category;
  lessons?: Lesson[];
  enrollments?: Enrollment[];
  wishlists?: Wishlist[];
};

export type Category = {
  id: number;
  name: string;
  courses?: Course[];
};

export type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
  courseId: number;
  course?: Course;
};

export type Enrollment = {
  id: number;
  userId: number;
  courseId: number;
  createdAt: Date;
  user?: User;
  course?: Course;
};

export type Wishlist = {
  id: number;
  userId: number;
  courseId: number;
  user?: User;
  course?: Course;
};

// Types for API responses
export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};

// Types for forms
export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

export type CourseFormData = {
  title: string;
  description: string;
  price: number;
  categoryId: number;
};

export type LessonFormData = {
  title: string;
  videoUrl: string;
  courseId: number;
};