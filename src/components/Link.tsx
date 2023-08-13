import { PropsWithChildren, FC } from "react";

export const Link: FC<PropsWithChildren & { elementId: string }> = ({
  children,
  elementId,
}) => {
  return <a href={`#${elementId}`}>{children}</a>;
};
