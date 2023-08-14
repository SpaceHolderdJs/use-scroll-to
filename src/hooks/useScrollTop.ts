import { useCallback, useContext } from "react";
import { ScrollTopContext } from "../contexts/ScrollTop.context";

declare type ScrollOptions = ScrollIntoViewOptions & {
    offsetX?: number;
    offsetY?: number;
};

export const useScrollTop = (
    tag: string,
    options: ScrollOptions = { behavior: "smooth", offsetX: 0, offsetY: 0 }
) => {
    const { current, elementsRefs } = useContext(ScrollTopContext)!;

    const scroll = useCallback(() => {
        const { offsetX, offsetY, ...defaultOptions } = options;

        if (elementsRefs) {
            const element = elementsRefs[tag as keyof typeof elementsRefs];

            (offsetX || offsetY) &&
                window.scrollTo({
                    left: offsetX,
                    top: offsetY,
                    behavior: defaultOptions.behavior,
                });

            element?.current?.scrollIntoView(defaultOptions);
        }
    }, [tag, elementsRefs, options]);

    return { scroll, current };
};
