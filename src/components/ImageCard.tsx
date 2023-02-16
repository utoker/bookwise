import Image from 'next/image';
import React from 'react';

type FC = React.FC<{
  alt: string;
  src: string;
  title: string;
  setSelectCount: React.Dispatch<React.SetStateAction<number>>;
  setUser: React.Dispatch<
    React.SetStateAction<{
      adventure: number;
      selfHelp: number;
      history: number;
      fantasy: number;
    }>
  >;
}>;

const ImageCard: FC = ({ alt, src, title, setUser, setSelectCount }) => {
  const [disabled, setDisabled] = React.useState(false);
  const onClick = () => {
    switch (title) {
      case 'adventure':
        setUser((prev) => ({ ...prev, adventure: prev.adventure + 1 }));
        setSelectCount((prev) => prev + 1);
        setDisabled(true);
        break;
      case 'selfHelp':
        setUser((prev) => ({ ...prev, selfHelp: prev.selfHelp + 1 }));
        setSelectCount((prev) => prev + 1);
        setDisabled(true);
        break;
      case 'history':
        setUser((prev) => ({ ...prev, history: prev.history + 1 }));
        setSelectCount((prev) => prev + 1);
        setDisabled(true);
        break;
      case 'fantasy':
        setUser((prev) => ({ ...prev, fantasy: prev.fantasy + 1 }));
        setSelectCount((prev) => prev + 1);
        setDisabled(true);
        break;
      default:
        break;
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="hover:opacity-75 transition ease-in-out duration-150 disabled:brightness-50"
    >
      <Image
        className="rounded-lg"
        src={src}
        alt={alt}
        width={256}
        height={256}
      />
    </button>
  );
};

export default ImageCard;
