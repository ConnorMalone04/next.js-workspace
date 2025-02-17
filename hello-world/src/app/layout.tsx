import "./styles.css";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
                    <h1>Header</h1>
                </header>

                <Navbar />

                <main>{children}</main>

                <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
                    <h1>Footer</h1>
                </footer>
            </body>
        </html>
    );
}