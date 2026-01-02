import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Kunal More | Backend Developer & System Architect",
  description: "Software Developer specializing in Java, Spring Boot, and enterprise systems. Building scalable applications with modern cloud technologies.",
  keywords: ["Kunal More", "Backend Developer", "Java Developer", "Spring Boot", "Full Stack Developer", "Mumbai"],
  authors: [{ name: "Kunal More" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunalmore.dev",
    title: "Kunal More | Backend Developer",
    description: "Software Developer specializing in Java, Spring Boot, and enterprise systems",
    siteName: "Kunal More Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal More | Backend Developer",
    description: "Software Developer specializing in Java, Spring Boot, and enterprise systems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}