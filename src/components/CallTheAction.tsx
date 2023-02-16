import React, { FC, useContext } from 'react';
import AppContext from './AppContext';

const CallTheAction: FC = () => {
  const context = useContext(AppContext);
  const onClick = () => {
    context.setIsOpen(true);
  };
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="w-full p-4 text-center grid grid-cols-2 bg-white border-b border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Discover Your Next Read
        </h5>
        <div className="row-span-2 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <button
            onClick={onClick}
            type="button"
            className="px-12 py-7 rounded-2xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
          </button>
        </div>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Find your next favorite book now with BookWise!
        </p>
      </div>
    </section>
  );
};

export default CallTheAction;
