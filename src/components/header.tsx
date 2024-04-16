"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "All Events",
        path: "/events/all",
    },
];

export default function Header() {
    const activePathName = usePathname();
    return (
        <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9">
            <Logo />
            <nav className="h-full">
                <ul className="flex gap-x-6 text-sm h-full">
                    {routes.map((route) => (
                        <li
                            key={route.name.toLowerCase()}
                            className={cn(
                                "flex items-center hover:text-white relative transition",
                                {
                                    "text-white": activePathName === route.path,
                                    "text-white/50":
                                        activePathName !== route.path,
                                }
                            )}
                        >
                            <Link href={route.path}>{route.name}</Link>
                            {activePathName === route.path && (
                                <motion.div
                                    layoutId="header-active-link"
                                    className="bg-accent h-1 w-full absolute bottom-0"
                                ></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
