import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

type contexts = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const AppContext = createContext({} as contexts);
export default AppContext;
