import { Link, useLocation } from 'react-router-dom';
import { Avatar } from './BlogCard';

export const Appbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="w-full bg-white shadow-md border-b border-gray-200 flex items-center justify-between px-8 py-4">
      <Link to={'/'} className="text-3xl font-bold text-gray-900 font-sans tracking-tight hover:text-gray-700 transition"> BLOGIFY </Link>
      {isHomePage ? (
        <div className="flex items-center space-x-6">
          <Link to="/signin"><button type="button" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"> Sign In </button> </Link>
          <Link to="/signup"> <button type="button" className="text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-6 py-2.5 rounded-full transition shadow-md"> Get Started </button> </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          <Link to="/publish"> <button type="button" className="text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-6 py-2.5 rounded-full transition shadow-md"> Publish </button></Link>
          <Avatar name={'singking'} size={'big'} />
        </div>
      )}
    </div>
  );
};