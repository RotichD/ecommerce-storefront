'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { usePathname } from 'next/navigation';

import { Category } from '@/types';
import NavbarActions from './navbar-actions';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';

interface MainNavProps {
  data: Category[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className='relative bg-white border-b border-gray-200 '>
      <nav aria-label='Top' className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='px-4 pb-14 sm:px-0 sm:pb-0'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <div className='flex flex-1'>
              <Link href='/'>
                <span className='sr-only'>Fake Company</span>
                <span className='ml-2 font-semibold text-gray-800'>STORE</span>
              </Link>
            </div>

            {/* Flyout menus */}
            <Popover.Group className='absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch'>
              <div className='flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0'>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={classNames(
                      route.active
                        ? 'border-red-600 text-red-600 border-b'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                      'flex truncate items-center text-sm font-medium transition-colors duration-200 ease-out'
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className='flex flex-1 items-center justify-end'>
              <NavbarActions />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
