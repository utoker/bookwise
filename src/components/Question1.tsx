import { IMAGES } from 'lib/constants';
import React from 'react';
import ImageCard from './ImageCard';

const suffledImages = IMAGES.sort(() => Math.random() - 0.5);

type FC = React.FC<{
  user: {
    adventure: number;
    selfHelp: number;
    history: number;
    fantasy: number;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      adventure: number;
      selfHelp: number;
      history: number;
      fantasy: number;
    }>
  >;
  setSelectCount: React.Dispatch<React.SetStateAction<number>>;
}>;

const Question1: FC = ({ user, setUser, setSelectCount }) => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 ">
      <div className="max-w-4xl grid mx-auto lg:gap-8 xl:gap-0 lg:grid-rows-12">
        <h1 className=" text-center text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Choose 5 pictures you like
        </h1>
        <div className="grid gap-4 lg:grid-cols-5 lg:py-8 justify-center ">
          {suffledImages.map((image) => (
            <ImageCard
              key={image.id}
              src={image.src}
              title={image.title}
              alt={image.alt}
              setUser={setUser}
              setSelectCount={setSelectCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question1;
