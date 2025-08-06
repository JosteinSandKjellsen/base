import { ReactNode } from "react";
import { Providers } from "@/components/providers";
import { NavigationRail } from "@/components/navigation-rail";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Root layout for the base application.
 * Server component that wraps children with client-side providers.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Providers>
          <NavigationRail />
          <ThemeToggle />
          <div className="ml-20 container mx-auto max-w-6xl min-h-screen py-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}