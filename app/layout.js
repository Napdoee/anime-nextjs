import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List | Napdoee",
  description: "Created By Napdoee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto pt-16">{children}</div>
      </body>
    </html>
  );
}