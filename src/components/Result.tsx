import Image from 'next/image';
import React, { useContext } from 'react';
import AppContext from './AppContext';

type FC = React.FC<{
  title: string;
  author: string;
  src: string;
  amazonLink: string;
  setIsShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}>;

const Result: FC = ({ setIsShowResult, title, author, src, amazonLink }) => {
  const { setIsOpen } = useContext(AppContext);
  const onClick = () => {
    setIsShowResult(false);
    setIsOpen(false);
  };

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
          <div className="w-full flex justify-between ">
            <button
              onClick={onClick}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go Home
            </button>
            <a
              target="_blank"
              rel="noreferrer"
              href={amazonLink}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-orange-500"
            >
              Get on Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
