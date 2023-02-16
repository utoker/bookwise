import React, { useState } from 'react';

type FC = React.FC<{
  question: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}>;

const RangeInput: FC = ({ question, setValue, value }) => {
  const onChange = (e: any) => {
    setValue(+e.target.value);
  };
  let rangeText = '';
  switch (value) {
    case 0:
      rangeText = 'Strongly Disagree';
      break;
    case 0.5:
      rangeText = 'Disagree';
      break;
    case 1:
      rangeText = 'Disagree';
      break;
    case 1.5:
      rangeText = 'Slightly Disagree';
      break;
    case 2:
      rangeText = 'Slightly Disagree';
      break;
    case 2.5:
      rangeText = 'Neutral';
      break;
    case 3:
      rangeText = 'Slightly Agree';
      break;
    case 3.5:
      rangeText = 'Slightly Agree';
      break;
    case 4:
      rangeText = 'Agree';
      break;
    case 4.5:
      rangeText = 'Agree';
      break;
    case 5:
      rangeText = 'Strongly Agree';
      break;

    default:
      break;
  }

  return (
    <div className="py-4">
      <label
        htmlFor="steps-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <p className="text-center text-2xl font-extrabold tracking-tight leading-none dark:text-white">
          {question}
        </p>
      </label>

      <input
        onChange={onChange}
        id="steps-range"
        type="range"
        min={0}
        max={5}
        value={value}
        step={0.5}
        className=" w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 py-2"
      />
      <p className="text-center text-sm font-extrabold tracking-tight leading-none dark:text-white">
        {rangeText}
      </p>
    </div>
  );
};

export default RangeInput;
