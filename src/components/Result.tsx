import Image from 'next/image';
import React, { useContext } from 'react';
import AppContext from './AppContext';

type FC = React.FC<{
  title: string;
  author: string;
  src: string;
}>;

const Result: FC = ({ title, author, src }) => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <section className="">
      <div className="mx-auto max-w-sm bg-blue-50 border-none rounded-lg dark:bg-gray-900 ">
        <a href="#">
          <Image
            className="rounded-lg"
            src={src}
            alt="book"
            width={600}
            height={600}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          </a>
          <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {author}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Result;
