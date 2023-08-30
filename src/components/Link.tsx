import {
  PropsWithChildren,
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { useScrollTo } from "../hooks";

export const Link: FC<
  PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
      elementTag: string;
      isHashRouted?: boolean;
    }
> = ({ children, elementTag, isHashRouted = false, ...rest }) => {
  const { scroll } = useScrollTo(elementTag);
  return isHashRouted ? (
    <a href={`#${elementTag}`}>{}</a>
  ) : (
    <span
      {...rest}
      style={{ ...rest.style, cursor: "pointer" }}
      onClick={scroll}
    >
      {children}
    </span>
  );
};
