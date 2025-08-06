import { ReactNode } from "react";
import { Providers } from "@/components/providers";
import "./globals.css";

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
      <body className="antialiased bg-background text-foreground">
        <Providers>
          <div className="container mx-auto max-w-6xl min-h-screen py-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}