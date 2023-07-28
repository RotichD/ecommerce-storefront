'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import useCart from '@/hooks/use-cart';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Cart */}
      <div className='ml-4 flow-root lg:ml-8'>
        <button
          onClick={() => router.push('/cart')}
          className='group -m-2 flex items-center p-2'
        >
          <ShoppingBagIcon
            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
          <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
            {cart.items.length}
          </span>
          <span className='sr-only'>items in cart, view bag</span>
        </button>
      </div>
    </>
  );
};

export default NavbarActions;
