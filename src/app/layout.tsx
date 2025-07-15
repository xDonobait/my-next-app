import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Donoban Andrés Peralta Gutierrez",
  description: "Informacion Personal y Proyectos",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="centered-page">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Donoban Andrés Peralta Gutierrez
          </h1>
          <p style={{ fontSize: "1.1rem" }}>Estudiante de Ingeniería en Sistemas</p>

          <nav style={{ marginTop: "1.5rem" }}>
            <Link href="/" style={{ margin: "0 1rem" }}>Inicio</Link>
            <Link href="/contact" style={{ margin: "0 1rem" }}>Contacto</Link>
            <Link href="/projects" style={{ margin: "0 1rem" }}>Proyectos</Link>
          </nav>
        </header>

        <main className="centered-page">{children}</main>
      </body>
    </html>
  );
}
