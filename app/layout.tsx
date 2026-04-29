import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

/* ===== Google Fonts ===== */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* ===== SEO Metadata ===== */
export const metadata: Metadata = {
  title: "WiriGoo — Nggak Perlu Keluar, Biar WiriGoo yang Mengantar",
  description:
    "Layanan jasa titip beli & pengantaran untuk mahasiswa UNESA Kampus 5 Magetan. Apapun semua berangkat!",
  keywords: [
    "WiriGoo",
    "jasa titip",
    "delivery Magetan",
    "UNESA Kampus 5",
    "jastip mahasiswa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${caveat.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
