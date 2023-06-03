import { HTMLAttributes } from "react";

import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export default function Title({ text, ...rest }: Props): JSX.Element {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 {...rest}>{text}</h1>
    </motion.div>
  );
}
