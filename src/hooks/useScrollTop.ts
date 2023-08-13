import { useCallback, useContext } from "react";
import { ScrollTopContetx } from "../contexts/ScrollTop.context";

declare type ScrollOptions = ScrollIntoViewOptions & {
    offsetX?: number;
    offsetY?: number;
};

export const useScrollTop = (
    elemId: string,
    options: ScrollOptions = { behavior: "smooth", offsetX: 0, offsetY: 0 }
) => {
    const { current, elements } = useContext(ScrollTopContetx)!;

    const scroll = useCallback(() => {
        const { offsetX, offsetY, ...defaultOptions } = options;

        if (elements) {
            const element = elements[elemId as keyof typeof elements];

            (offsetX || offsetY) &&
                window.scrollTo({
                    left: offsetX,
                    top: offsetY,
                    behavior: defaultOptions.behavior,
                });

            element.scrollIntoView(defaultOptions);
        }
    }, [elemId, elements, options]);

    return { scroll, current };
};
