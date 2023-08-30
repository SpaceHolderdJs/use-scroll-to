import { useCallback, useContext } from "react";
import { ScrollTopContext } from "../contexts/ScrollTop.context";

declare type ScrollOptions = ScrollIntoViewOptions & {
    offsetX?: number;
    offsetY?: number;
};

export const useScrollTo = (
    tag: string,
    options: ScrollOptions = { behavior: "smooth", offsetX: 0, offsetY: 0 }
) => {
    const { current, elementsRefs, options: contextOptions } = useContext(ScrollTopContext)!;

    const scroll = useCallback(() => {
        const { offsetX, offsetY, ...defaultOptions } = options;

        if (elementsRefs) {
            const element = elementsRefs[tag as keyof typeof elementsRefs];

            if (offsetX || offsetY) {
                window.scrollTo({
                    left: offsetX || 0,
                    top: offsetY || 0,
                    behavior: defaultOptions.behavior || "smooth",
                });
            }

            element?.current?.scrollIntoView(contextOptions || defaultOptions);
        }
    }, [options, elementsRefs, tag, contextOptions]);

    return { scroll, current };
};
