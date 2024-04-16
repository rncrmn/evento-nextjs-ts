import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col max-w-7xl mx-auto bg-white/[2%] min-h-screen">
            {children}
        </div>
    );
}
