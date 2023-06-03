import { Children } from "@/types/globals";

interface Props {
  children: Children;
  className?: string;
}

export default function WithPadding({
  children,
  className
}: Props): JSX.Element {
  return <div className={`withPadding ${className}`}>{children}</div>;
}
