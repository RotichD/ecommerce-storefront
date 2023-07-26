'use client';
import Image from 'next/image';
import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import Currency from '@/components/ui/currency';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      key={data.id}
      className='group relative cursor-pointer'
    >
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
        <div className='flex gap-x-6 justify-center'>
          <IconButton
            onClick={() => {}}
            icon={<ArrowsPointingOutIcon className='text-red-600 w-4 h-4' />}
          />
        </div>
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <>
              <span aria-hidden='true' className='absolute inset-0' />
              {data.name}
            </>
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
