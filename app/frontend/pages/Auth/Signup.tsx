import { Link } from '@inertiajs/react';
import { SignupForm } from './components/SignupForm';

export default function Register() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4 p-6 md:p-10">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/session/new" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  );
}
