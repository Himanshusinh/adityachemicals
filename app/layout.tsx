import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ralewayBody = Raleway({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const ralewayHeading = Raleway({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Aditya Chemicals | Leading API Manufacturer",
  description: "GMP-certified chemical manufacturer and global leader in active pharmaceutical ingredients, Food Additives, and excipients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewayBody.variable} ${ralewayHeading.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
