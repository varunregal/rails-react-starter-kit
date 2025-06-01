import { Link } from '@inertiajs/react';
import { LoginForm } from './components/LoginForm';

export default function Login() {
  return (
    <div className="grid min-h-svh">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md flex flex-col gap-5 text-center">
          <LoginForm />
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Link
              href="/registration/new"
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
