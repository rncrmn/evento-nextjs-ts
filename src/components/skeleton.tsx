import { cn } from "@/lib/utils";

type SkeletonProps = {
    className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "h-4 w-[550px] rounded-md bg-white/5 animate-pulse",
                className
            )}
        />
    );
}
