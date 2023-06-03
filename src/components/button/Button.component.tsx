import { HTMLAttributes } from "react";

import { Children } from "@/types/globals";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: Children;
  className?: string;
}

export default function Button({
  children,
  className,
  ...rest
}: Props): JSX.Element {
  return (
    <button
      {...rest}
      className={`rounded bg-blue-500 px-6 py-2 text-white transition-all ease-out hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}
