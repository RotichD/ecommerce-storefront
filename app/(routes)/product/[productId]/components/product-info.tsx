'use client';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types';
import Currency from '@/components/ui/currency';

interface ProductInfoProps {
  data: Product;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
        {data.name}
      </h1>

      <div className='mt-3'>
        <h2 className='sr-only'>Product information</h2>
        <p className='text-3xl tracking-tight text-gray-900'>
          <Currency value={data.price} />
        </p>
      </div>

      {/* Reviews */}
      <div className='mt-3'>
        <h3 className='sr-only'>Reviews</h3>
        <div className='flex items-center'>
          <div className='flex items-center'>
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames('text-indigo-500 h-5 w-5 flex-shrink-0')}
                aria-hidden='true'
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='sr-only'>Description</h3>

        <div className='space-y-6 text-base text-gray-700'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque animi
          nihil, fugit architecto excepturi, et veniam iure iusto ipsam,
          cupiditate sunt dicta rem? Molestias itaque voluptate laudantium,
          minima quaerat veritatis.
        </div>
      </div>

      <div className='py-8 flex items-center space-x-6'>
        <h3 className=' text-gray-600'>
          Size: <span className='font-semibold'>{data.size.value}</span>
        </h3>
        <p>({data.size.name})</p>
      </div>

      <form className='mt-6'>
        {/* Colors */}
        <div>
          <h3 className='text-sm text-gray-600'>Color</h3>

          <RadioGroup value={data.color.value} className='mt-2'>
            <RadioGroup.Label className='sr-only'>
              Choose a color
            </RadioGroup.Label>
            <span className='flex items-center space-x-3'>
              <RadioGroup.Option
                value={data.color.value}
                className={({ active, checked }) =>
                  classNames(
                    data.color.name,
                    active && checked ? 'ring ring-offset-1' : '',
                    !active && checked ? 'ring-2' : '',
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                  )
                }
              >
                <RadioGroup.Label as='span' className='sr-only'>
                  {data.color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden='true'
                  style={{ backgroundColor: data.color.value }}
                  className='h-8 w-8 rounded-full border border-black border-opacity-10'
                />
              </RadioGroup.Option>
            </span>
          </RadioGroup>
        </div>

        <div className='mt-10 flex'>
          <button
            type='submit'
            className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
          >
            Add to bag
          </button>

          <button
            type='button'
            className='ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
          >
            <HeartIcon className='h-6 w-6 flex-shrink-0' aria-hidden='true' />
            <span className='sr-only'>Add to favorites</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductInfo;
