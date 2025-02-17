import Link from "next/link";

export default function ProjectDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h3>
                <Link href="./">Back to projects</Link>
            </h3>
        </>
    )
}