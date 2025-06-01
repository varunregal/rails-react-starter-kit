import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password should be at least 8 characters'),
});

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;

export const signupFormSchema = z.object({
  name: z.string().min(2, 'Name should be at least 2 characters'),
  email: z.string().email(),
  password: z.string().min(8, 'Password should be at least 8 characters'),
});

export type signupFormSchemaType = z.infer<typeof signupFormSchema>;
