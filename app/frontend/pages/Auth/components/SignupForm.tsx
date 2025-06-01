import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, usePage } from '@inertiajs/react';
import { signupFormSchema, signupFormSchemaType } from '@/lib/schema';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const { errors: pageErrors } = usePage().props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signupFormSchemaType>({
    resolver: zodResolver(signupFormSchema),
  });
  const onSubmit = async (values: any) => {
    console.log({ values });
    router.post('/registration', {
      first_name: values.first_name,
      last_name: values.last_name,
      role: values.role,
      category: values.category,
      email_address: values.email,
      password: values.password,
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter the details below to create an account
        </p>
      </div>
      <div className="grid gap-7">
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              required
              {...register('first_name')}
            />
            {errors.first_name?.message && (
              <p className="text-red-500">{errors.first_name?.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              required
              {...register('last_name')}
            />
            {errors.last_name?.message && (
              <p className="text-red-500">{errors.last_name?.message}</p>
            )}
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Role</Label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Role</SelectLabel>
                    <SelectItem value="mentee">Mentee</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.role?.message && (
            <p className="text-red-500">{errors.role?.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label>Category</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="pre-health">Pre-health</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.role?.message && (
            <p className="text-red-500">{errors.role?.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@projectshort.com"
            required
            {...register('email')}
          />

          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
          {pageErrors?.email_address && (
            <p className="text-red-500">{`Email address ${pageErrors.email_address[0]}`}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
          {pageErrors?.password && (
            <p className="text-red-500">{`Password ${pageErrors.password[0]}`}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>

      {pageErrors?.base && <p className="text-red-500">{pageErrors.base[0]}</p>}
    </form>
  );
}
