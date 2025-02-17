"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Profile", href: "/profile" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div>
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href || pathname?.startsWith(link.href + "/");

                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={isActive ? "font-bold text-black mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}
