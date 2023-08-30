import * as react from 'react';
import { FC, PropsWithChildren, DetailedHTMLProps, HTMLAttributes } from 'react';

declare const Link: FC<PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    elementTag: string;
    isHasRouted?: boolean;
}>;

declare const ScrollPoint: FC<PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    tag: string;
}>;

declare const ScrollTopContextProvider: FC<PropsWithChildren & {
    options?: ScrollOptions;
}>;

declare type ScrollOptions$1 = ScrollIntoViewOptions & {
    offsetX?: number;
    offsetY?: number;
};
declare const useScrollTo: (tag: string, options?: ScrollOptions$1) => {
    scroll: () => void;
    current: react.RefObject<HTMLElement | null> | null;
};

export { Link, ScrollPoint, ScrollTopContextProvider, useScrollTo };
