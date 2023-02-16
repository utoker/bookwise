import React from 'react';
import RangeInput from './RangeInput';

type FC = React.FC<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setAdventureRange: React.Dispatch<React.SetStateAction<number>>;
  adventureRange: number;
  setSelfHelpRange: React.Dispatch<React.SetStateAction<number>>;
  selfHelpRange: number;
  setHistoryRange: React.Dispatch<React.SetStateAction<number>>;
  historyRange: number;
  setFantasyRange: React.Dispatch<React.SetStateAction<number>>;
  fantasyRange: number;
}>;

const Question2: FC = ({
  onSubmit,
  setAdventureRange,
  adventureRange,
  setSelfHelpRange,
  selfHelpRange,
  setHistoryRange,
  historyRange,
  setFantasyRange,
  fantasyRange,
}) => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-8 mx-auto lg:pt-8 lg:grid-rows-12">
        <RangeInput
          question="How much do you enjoy stories that take you on exciting and unpredictable journeys"
          setValue={setAdventureRange}
          value={adventureRange}
        />
        <RangeInput
          question="Do you find yourself seeking out advice and guidance on how to improve your life or achieve your goals?"
          setValue={setSelfHelpRange}
          value={selfHelpRange}
        />
        <RangeInput
          question="Do you find yourself regularly seeking out information about historical topics?"
          setValue={setHistoryRange}
          value={historyRange}
        />
        <RangeInput
          question="When you think of your favorite stories, how much do fantasy elements into your enjoyment of them?"
          setValue={setFantasyRange}
          value={fantasyRange}
        />

        <form onSubmit={onSubmit} className="mx-auto mt-8">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Recommendation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Question2;
