import { Children } from "@/types/globals";

interface Props {
  children: Children;
}

export default function WithLargePadding({ children }: Props): JSX.Element {
  return <div className="p-6">{children}</div>;
}
