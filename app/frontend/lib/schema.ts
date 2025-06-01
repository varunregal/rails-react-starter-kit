import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password should be at least 8 characters'),
});

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;

export const signupFormSchema = z.object({
  first_name: z.string().min(2, 'First name should be at least 2 characters'),
  last_name: z.string().min(2, 'Last name should be at least 2 characters'),
  role: z.enum(['mentee', 'mentor']),
  category: z.enum(['pre-health', 'graduate']),
  email: z.string().email(),
  password: z.string().min(8, 'Password should be at least 8 characters'),
});

export type signupFormSchemaType = z.infer<typeof signupFormSchema>;
