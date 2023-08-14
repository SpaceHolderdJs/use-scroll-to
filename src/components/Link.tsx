import {
  PropsWithChildren,
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { useScrollTop } from "../hooks";

export const Link: FC<
  PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
      elementTag: string;
      isHasRouted?: boolean;
    }
> = ({ children, elementTag, isHasRouted = false }) => {
  const { scroll } = useScrollTop(elementTag);
  return isHasRouted ? (
    <a href={`#${elementTag}`}>{}</a>
  ) : (
    <span onClick={scroll}>{children}</span>
  );
};
