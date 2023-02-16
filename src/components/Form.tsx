import React, { FC, useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Result from './Result';

type book = {
  title: string;
  author: string;
  src: string;
  amazonLink: string;
};

const Form: FC = () => {
  const initialUser = {
    adventure: 0,
    selfHelp: 0,
    history: 0,
    fantasy: 0,
  };
  const [user, setUser] = useState(initialUser);
  const [selectCount, setSelectCount] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [adventureRange, setAdventureRange] = useState(2.5);
  const [selfHelpRange, setSelfHelpRange] = useState(2.5);
  const [historyRange, setHistoryRange] = useState(2.5);
  const [fantasyRange, setFantasyRange] = useState(2.5);
  const [book, setBook] = useState({} as book);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    user.adventure = user.adventure + adventureRange;
    user.selfHelp = user.selfHelp + selfHelpRange;
    user.history = user.history + historyRange;
    user.fantasy = user.fantasy + fantasyRange;

    const res = await fetch('/api/getbooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setBook(data);
    setUser(initialUser);
    setSelectCount(0);
    setIsShowResult(true);
  };
  if (isShowResult) {
    return (
      <Result
        amazonLink={book.amazonLink}
        title={book.title}
        author={book.author}
        src={book.src}
        setIsShowResult={setIsShowResult}
      />
    );
  }

  if (selectCount >= 5) {
    return (
      <Question2
        onSubmit={onSubmit}
        adventureRange={adventureRange}
        fantasyRange={fantasyRange}
        historyRange={historyRange}
        selfHelpRange={selfHelpRange}
        setAdventureRange={setAdventureRange}
        setFantasyRange={setFantasyRange}
        setHistoryRange={setHistoryRange}
        setSelfHelpRange={setSelfHelpRange}
      />
    );
  }

  return (
    <Question1 setSelectCount={setSelectCount} setUser={setUser} user={user} />
  );
};

export default Form;
