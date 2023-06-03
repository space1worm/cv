export const fromBottomToTop = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: "50%" },
  exit: { opacity: 0, y: "100%" },
  transition: { duration: 0.5 }
};

export const fromLeftToRight = {
  initial: { opacity: 0, x: "-30%" },
  animate: { opacity: 1, x: "0%" },
  exit: { opacity: 0, x: "-100%" },
  transition: { duration: 1 }
};

export const withPulseEffect = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};
