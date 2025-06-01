import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, router, usePage } from '@inertiajs/react';

type MenuLink = { label: string; href: string; alias?: string };

const menuLinks: MenuLink[] = [
  { label: 'Create a Meet', href: '/events/new', alias: '/' },
  { label: 'How it works', href: '#' },
  { label: 'Notifications', href: '#' },
];
const SignInButton = () => (
  <Button
    variant="outline"
    onClick={() => router.visit('/session/new', { replace: true })}
  >
    Sign in
  </Button>
);

const SignupButton = () => (
  <Button onClick={() => router.visit('/registration/new', { replace: true })}>
    Sign up
  </Button>
);

const SignoutButton = () => (
  <Button onClick={() => router.delete('/session', { replace: true })}>
    Logout
  </Button>
);
export function Navbar() {
  const { current_user } = usePage().props;
  const checkCurrentPage = (pathname?: string) => {
    return window.location.pathname === pathname;
  };

  return (
    <header className="w-full px-5 md:px-10">
      <div className="container mx-auto flex h-16 items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">Plan A Meet</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-2 gap-6">
          {menuLinks.map((menuLink: MenuLink) => (
            <Link
              key={menuLink.label}
              href={menuLink.href}
              className={`text-sm font-medium ${
                checkCurrentPage(menuLink.href) ||
                checkCurrentPage(menuLink?.alias)
                  ? 'underline'
                  : ''
              }`}
            >
              {menuLink.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex items-right justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            {!current_user ? (
              <>
                <SignInButton />
                <SignupButton />
              </>
            ) : (
              <SignoutButton />
            )}
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-10">
              <nav className="grid gap-4 text-center">
                {menuLinks.map((menuLink: MenuLink) => (
                  <Link
                    key={menuLink.label}
                    href={menuLink.href}
                    className="text-sm font-medium py-2"
                  >
                    {menuLink.label}
                  </Link>
                ))}

                <div className="grid grid-cols-1 gap-2 p-5 border-t border-gray-200">
                  {!current_user ? (
                    <>
                      <SignInButton />
                      <SignupButton />
                    </>
                  ) : (
                    <SignoutButton />
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
