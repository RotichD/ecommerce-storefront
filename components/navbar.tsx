import getCategories from '@/actions/get-categories';
import MainNav from './main-nav';

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className='bg-white'>
      <MainNav data={categories} />
    </div>
  );
};

export default Navbar;
