import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
    return (
        <div className="flex flex-wrap justify-center  max-w-[1110px] mx-auto px-[20px] py-24 gap-20">
            {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
}
