import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnSyles =
    "flex justify-center items-center gap-x-2 text-white text-sm px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition";

type PaginationControlsProps = {
    previousPath: string;
    nextPath: string;
};

export default function PaginationControls({
    previousPath,
    nextPath,
}: PaginationControlsProps) {
    return (
        <section className="flex justify-between w-full">
            {previousPath ? (
                <Link href={previousPath} className={btnSyles}>
                    <ArrowLeftIcon /> Previous
                </Link>
            ) : (
                <div />
            )}

            {nextPath && (
                <Link href={nextPath} className={btnSyles}>
                    Next <ArrowRightIcon />
                </Link>
            )}
        </section>
    );
}
