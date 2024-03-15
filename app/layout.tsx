import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dyno",
  description:
    "Blazing fast DynamoDB Interface. Explore your DynamoDB data without touching the AWS console, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-8DZ396HR5N" />
      <GoogleTagManager gtmId="GTM-NS4KM2SN" />
    </html>
  );
}
