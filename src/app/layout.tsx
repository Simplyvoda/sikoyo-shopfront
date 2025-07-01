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
    "For the woman who believes in the power of the perfect accessory. Our gold jewelry collection turns simple into stunning. Affordable luxury that fits your lifestyle and budget.",
  keywords:
    "gold jewelry Nigeria, affordable luxury jewelry, women gold accessories, elegant jewelry collection, modern African jewelry brand, gold jewelry USA",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sikoyo Jewelry",
    description:
      "For the woman who believes in the power of the perfect accessory. Affordable luxury jewelry.",
    images: [
      {
        url: "https://sikoyojewelry.com/sikoyo_logo.png",
        width: 1200,
        height: 630,
      },
    ],
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

        <meta
          property="og:image"
          content="https://sikoyojewelry.com/sikoyo_logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sikoyo Jewelry" />
        <meta
          name="twitter:description"
          content="For the woman who believes in the power of the perfect accessory. Affordable luxury that fits your lifestyle and budget."
        />
        <meta
          name="twitter:image"
          content="https://sikoyojewelry.com/sikoyo_logo.png"
        />

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
