import Image from 'next/image';
import React, { FC, useContext } from 'react';
import AppContext from './AppContext';

const Hero: FC = () => {
  const context = useContext(AppContext);
  const onClick = () => {
    context.setIsOpen(true);
  };
  return (
    <section
      className="bg-blue-50 dark:bg-gray-900 max-w-screen-xl mx-auto pt-16"
      id="hero"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Your Personal Book Recommendation Hub
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            An innovative book recommendation app that matches you with books
            based on your personality and interests.
          </p>
          <button
            onClick={onClick}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Discover Your Next Read
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            priority
            src="/images/book.jpg"
            alt="mockup"
            width={520}
            height={481}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
