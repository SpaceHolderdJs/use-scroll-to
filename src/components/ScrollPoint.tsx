import {
  PropsWithChildren,
  FC,
  useContext,
  useEffect,
  useRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { ElementsType, ScrollTopContext } from "../contexts/ScrollTop.context";

export const ScrollPoint: FC<
  PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
      tag: string;
    }
> = ({ children, tag, ...rest }) => {
  const { setElementsRefs } = useContext(ScrollTopContext)!;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    //@ts-ignore
    setElementsRefs((prev: ElementsType) => ({ ...prev, [tag]: ref }));
  }, [setElementsRefs, ref, tag]);

  return (
    <section id={tag} ref={ref} {...rest}>
      {children}
    </section>
  );
};
