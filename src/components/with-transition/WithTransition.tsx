import { Children } from "@/types/globals";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = {
    options: HTMLMotionProps<"div">;
    children: Children;
};

export default function WithTransition({
    options,
    children
}: Props): JSX.Element {
    return (
        <motion.div {...options}>{children}</motion.div>
    );
}
