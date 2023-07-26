import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className='mx-auto max-w-2xl  pb-16 pt-2  sm:pb-24 lg:max-w-7xl '>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {items.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
