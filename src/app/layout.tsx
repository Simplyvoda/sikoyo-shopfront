import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Inter, Spectral } from "next/font/google";
import { satoshi } from "../../public/font";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Sikoyo Jewelry",
  description:
    "For the woman who believes in the power of the perfect accessory. Our gold jewelry collection turns simple into stunning. Luxury that fits your lifestyle and budget.",
  keywords:
    "gold jewelry Nigeria, affordable luxury jewelry, women gold accessories, elegant jewelry collection, modern African jewelry brand, gold jewelry USA",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sikoyo - Where Simplicity Meets Luxury",
    description:
      "For the woman who believes in the power of the perfect accessory. Gold jewelry that speaks to your soul.",
    type: "website",
    locale: "en_US",
    siteName: "Sikoyo Jewelry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="site.webmanifest" />

        <meta name="DC.coverage" content="Nigeria, United States" />
        <meta name="geo.region" content="NG-OY, US" />
        <meta name="geo.country" content="NG, US" />
        <meta name="price.currency" content="USD, NGN" />
        <meta name="brand.category" content="jewelry, accessories, luxury" />
        <meta name="brand.positioning" content="affordable luxury" />
      </Head>
      <body
        className={`${inter.variable} ${spectral.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
