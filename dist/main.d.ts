import * as react from 'react';
import { FC, PropsWithChildren, DetailedHTMLProps, HTMLAttributes, RefObject, Dispatch } from 'react';

declare const Link: FC<PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    elementTag: string;
    isHasRouted?: boolean;
}>;

declare const ScrollPoint: FC<PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    tag: string;
}>;

type ElementsType = {
    [k: string]: RefObject<HTMLElement | null> | null;
};
interface ScrollTopContextItemsInterface {
    current: RefObject<HTMLElement | null> | null;
    setCurrent: Dispatch<RefObject<HTMLElement | null> | null>;
    elementsRefs: ElementsType | null;
    setElementsRefs: Dispatch<ElementsType | null>;
}
declare const ScrollTopContext: react.Context<ScrollTopContextItemsInterface | null>;
declare const ScrollTopContextProvider: FC<PropsWithChildren>;

declare type ScrollOptions = ScrollIntoViewOptions & {
    offsetX?: number;
    offsetY?: number;
};
declare const useScrollTop: (tag: string, options?: ScrollOptions) => {
    scroll: () => void;
    current: react.RefObject<HTMLElement | null> | null;
};

export { ElementsType, Link, ScrollPoint, ScrollTopContext, ScrollTopContextItemsInterface, ScrollTopContextProvider, useScrollTop };
