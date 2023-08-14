// src/hooks/useScrollTop.ts
import { useCallback, useContext } from "react";

// src/contexts/ScrollTop.context.tsx
import {
  createContext,
  useState
} from "react";
import { jsx } from "react/jsx-runtime";
var ScrollTopContext = createContext(null);
var ScrollTopContextProvider = ({ children }) => {
  const [elementsRefs, setElementsRefs] = useState(null);
  const [current, setCurrent] = useState(
    null
  );
  return /* @__PURE__ */ jsx(
    ScrollTopContext.Provider,
    {
      value: {
        elementsRefs,
        setElementsRefs,
        current,
        setCurrent
      },
      children
    }
  );
};

// src/hooks/useScrollTop.ts
var useScrollTop = (tag, options = { behavior: "smooth", offsetX: 0, offsetY: 0 }) => {
  const { current, elementsRefs } = useContext(ScrollTopContext);
  const scroll = useCallback(() => {
    const { offsetX, offsetY, ...defaultOptions } = options;
    if (elementsRefs) {
      const element = elementsRefs[tag];
      (offsetX || offsetY) && window.scrollTo({
        left: offsetX,
        top: offsetY,
        behavior: defaultOptions.behavior
      });
      element?.current?.scrollIntoView(defaultOptions);
    }
  }, [tag, elementsRefs, options]);
  return { scroll, current };
};

// src/components/Link.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Link = ({ children, elementTag, isHasRouted = false }) => {
  const { scroll } = useScrollTop(elementTag);
  return isHasRouted ? /* @__PURE__ */ jsx2("a", { href: `#${elementTag}` }) : /* @__PURE__ */ jsx2("span", { onClick: scroll, children });
};

// src/components/ScrollPoint.tsx
import {
  useContext as useContext2,
  useEffect,
  useRef
} from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var ScrollPoint = ({ children, tag, ...rest }) => {
  const { setElementsRefs } = useContext2(ScrollTopContext);
  const ref = useRef(null);
  useEffect(() => {
    setElementsRefs((prev) => ({ ...prev, [tag]: ref }));
  }, [setElementsRefs, ref, tag]);
  return /* @__PURE__ */ jsx3("section", { id: tag, ref, ...rest, children });
};
export {
  Link,
  ScrollPoint,
  ScrollTopContext,
  ScrollTopContextProvider,
  useScrollTop
};
//# sourceMappingURL=main.mjs.map