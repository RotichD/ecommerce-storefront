'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import {
  ArrowsPointingOutIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

import { Product } from '@/types';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div key={data.id} className='group relative cursor-pointer'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          width={300}
          height={400}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 top-5'>
        <div className='flex flex-col gap-y-6 justify-center'>
          <IconButton
            onClick={onPreview}
            icon={<ArrowsPointingOutIcon className='text-red-600 w-4 h-4' />}
          />
          <IconButton
            onClick={onAddToCart}
            icon={<ShoppingBagIcon className='text-red-600 w-4 h-4' />}
          />
        </div>
      </div>
      <div className='mt-4 flex justify-between' onClick={handleClick}>
        <div>
          <h3 className='text-sm text-gray-700'>
            <>{data.name}</>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{data.category.name}</p>
        </div>
        <p className='text-sm  text-gray-900'>
          <Currency value={data.price} isBold />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
