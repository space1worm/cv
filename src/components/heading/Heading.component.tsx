import { HTMLAttributes } from "react";

import { withPulseEffect } from "@constants/animationOptions";

import WithTransition from "../with-transition/WithTransition";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export default function Heading({ text, ...rest }: Props): JSX.Element {
  return (
    <WithTransition options={withPulseEffect}>
      <h1 {...rest}>{text}</h1>
    </WithTransition>
  );
}
