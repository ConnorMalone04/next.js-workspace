import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        default: "",
        template: "",
    },
    description: "Default metadata description"
}

export default function Home() {
    return (
        <>
            <h1>Welcome home!</h1>
            <h2>
                <Link href="/about">About</Link>
            </h2>
            <h2>
                <Link href="/projects">Projects</Link>
            </h2>
            <h2>
                <Link href="/about">Profile</Link>
            </h2>
        </>
    );
}
