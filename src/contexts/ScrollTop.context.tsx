import {
  PropsWithChildren,
  Ref,
  createContext,
  FC,
  useEffect,
  useState,
  Dispatch,
} from "react";

declare type ElementsType = { [k: string]: HTMLElement };

export interface ScrollTopContextItemsInterface {
  current: HTMLElement | null;
  setCurrent: Dispatch<HTMLElement | null>;
  elementsIds: string[];
  elements: ElementsType | null;
}

export const ScrollTopContetx =
  createContext<ScrollTopContextItemsInterface | null>(null);

export const ScrollTopContextProvider: FC<
  PropsWithChildren & { elementsIds: string[] }
> = ({ children, elementsIds }) => {
  const [elements, setElements] = useState<ElementsType | null>(null);
  const [current, setCurrent] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const elements: ElementsType = {};

    elementsIds.forEach((e) => {
      const element = document.getElementById(e);

      element && (elements[e] = element);
    });

    setElements(elements);
  }, [elementsIds]);

  return (
    <ScrollTopContetx.Provider value={{ elements, current, setCurrent, elementsIds }}>
      {children}
    </ScrollTopContetx.Provider>
  );
};
