import {
  PropsWithChildren,
  createContext,
  FC,
  useState,
  Dispatch,
  RefObject,
} from "react";

export type ElementsType = {
  [k: string]: RefObject<HTMLElement | null> | null;
};

export interface ScrollTopContextItemsInterface {
  current: RefObject<HTMLElement | null> | null;
  setCurrent: Dispatch<RefObject<HTMLElement | null> | null>;
  elementsRefs: ElementsType | null;
  setElementsRefs: Dispatch<ElementsType | null>;
}

export const ScrollTopContext =
  createContext<ScrollTopContextItemsInterface | null>(null);

export const ScrollTopContextProvider: FC<
  PropsWithChildren
> = ({ children }) => {
  const [elementsRefs, setElementsRefs] = useState<ElementsType | null>(null);
  const [current, setCurrent] = useState<RefObject<HTMLElement | null> | null>(
    null
  );

  return (
    <ScrollTopContext.Provider
      value={{
        elementsRefs,
        setElementsRefs,
        current,
        setCurrent,
      }}
    >
      {children}
    </ScrollTopContext.Provider>
  );
};
