'use client';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <button
              className={classNames(
                filter.id
                  ? 'cursor-pointer focus:outline-none'
                  : 'cursor-not-allowed opacity-25',

                selectedValue === filter.id
                  ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
