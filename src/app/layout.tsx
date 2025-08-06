"use client";

import { ReactNode } from "react";
import { Container, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "./globals.css";

// Create a basic MUI theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#8e24aa",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Root layout for the base application.
 * Simple layout with MUI theme provider and basic styling.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" className="min-h-screen py-8">
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
