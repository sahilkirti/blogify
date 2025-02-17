import { Link } from 'react-router-dom';
import { Appbar } from '../components/Appbar';
import BlogImage from '../assets/BlogImage.jpg';

export const Home = () => {
  return (
    <div>
      <Appbar />
      <div className="h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="flex-1 md:w-1/2 px-8 py-12 md:px-16 md:py-24 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-wide">
            <span className="block">Create, Share,</span>
            <span className="block">and Inspire with Blogify</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 opacity-80">
            Blogify is a powerful platform designed for creators, bloggers, and storytellers who want to bring their ideas to life. Write with ease, connect with a global audience, and leave a lasting impact. Whether you're sharing personal experiences or professional insights, Blogify helps you craft content that resonates and inspires.
          </p>
          <Link to="/signup"  className="inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out shadow-xl transform hover:scale-105">Start Writing</Link>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-center h-full">
          <img src={BlogImage} alt="Blog Writing Image" className="max-h-full w-auto object-contain rounded-md shadow-xl border border-gray-300" />
        </div>
      </div>
    </div>
  );
};
