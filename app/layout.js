import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LWS Xtream",
  description: "A video streaming app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color-bg text-white font-exo`}
      >
        <div className="container mx-auto px-4 py-4">
          <Navbar />
          <div className="container my-4 lg:my-8">{children}</div>
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
