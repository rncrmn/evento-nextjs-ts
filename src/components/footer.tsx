import Link from "next/link";

const routes = [
    {
        path: "/terms-conditions",
        name: "Terms & Conditions",
    },
    {
        path: "/privacy-policy",
        name: "Privacy Policy",
    },
];

export default function Footer() {
    return (
        <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 md:px-9 text-xs text-white/25">
            <small className="text-xs">
                &copy; 2024 Aaron Carmen. All Rights Resereved.
            </small>

            <ul className="flex gap-x-3 md:gap-x-8">
                {routes.map((route) => (
                    <li key={route.name}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
