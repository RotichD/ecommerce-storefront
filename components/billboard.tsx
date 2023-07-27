import { Billboard as BillboardType } from '@/types';
import Image from 'next/image';

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          fill
          src={data?.imageUrl}
          alt='image that describes category'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gray-900 bg-opacity-50'
      />
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
        <h2 className='text-3xl md:text-5xl lg:text-6xl sm:max-w-xl max-w-xs font-bold tracking-tight text-white sm:text-4xl'>
          {data?.label}
        </h2>
        <p className='mt-3 text-xl text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, esse.
          Animi deserunt in voluptates quisquam quae reiciendis recusandae amet
          magnam consectetur. Provident, illo eum recusandae eos delectus
          expedita modi dolores.
        </p>
      </div>
    </div>
  );
};

export default Billboard;
