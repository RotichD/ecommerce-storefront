'use client';

import { Color, Size } from '@/types';
import { FunnelIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import IconButton from '@/components/ui/icon-button';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Filter from './filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className='flex items-center py-4 lg:hidden'>
        <button
          onClick={onOpen}
          className='ml-auto text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
        >
          <FunnelIcon className='-mr-0.5 h-8 w-8' />
        </button>
      </div>

      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className='flex items-center justify-end px-4'>
              <IconButton
                icon={<XMarkIcon className='text-black w-4 h-4' />}
                onClick={onClose}
              />
            </div>
            <div className='p-4'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
