import { Navbar } from '@/components/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
}
