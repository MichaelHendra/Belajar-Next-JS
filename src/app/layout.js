import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

const gabraito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Ngaw",
  description: "The Bigges Ngaw in World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabraito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
