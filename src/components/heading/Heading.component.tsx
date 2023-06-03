import { HTMLAttributes } from "react";

import WithTransition from "../with-transition/WithTransition";
import { withPulseEffect } from "@constants/animationOptions";

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
