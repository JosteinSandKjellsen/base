"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Create light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C4E9B4",
      contrastText: "#12280B",
    },
    secondary: {
      main: "#EEDEF6",
      contrastText: "#441B50",
    },
    success: {
      main: "#6BBD6E",
      contrastText: "#0E2510",
    },
    warning: {
      main: "#FCD24D",
      contrastText: "#451A03",
    },
    error: {
      main: "#FD6F6C",
      contrastText: "#470908",
    },
    info: {
      main: "#5D7DD4",
      contrastText: "#222749",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFFFFF",
    },
    surface: {
      main: "#F8F8F8",
    },
    text: {
      primary: "#292929",
      secondary: "#292929",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E7F7E1",
      contrastText: "#12280B",
    },
    secondary: {
      main: "#F6EDFA",
      contrastText: "#441B50",
    },
    success: {
      main: "#3FAF3",
      contrastText: "#0E2510",
    },
    warning: {
      main: "#FFFBEB",
      contrastText: "#451A03",
    },
    error: {
      main: "#FEF2F2",
      contrastText: "#470908",
    },
    info: {
      main: "#F2F5FC",
      contrastText: "#222749",
    },
    background: {
      default: "#292929",
      paper: "#1A1A1A",
    },
    surface: {
      main: "#292929",
    },
    text: {
      primary: "#F8F8F8",
      secondary: "#F8F8F8",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Theme provider component that switches between light and dark themes
 */
function MUIThemeProvider({ children }: { children: ReactNode }) {
  const { theme: nextTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return light theme during SSR
    return (
      <ThemeProvider theme={lightTheme}>
        {children}
      </ThemeProvider>
    );
  }

  const currentTheme = nextTheme === 'system' ? systemTheme : nextTheme;
  const muiTheme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}

/**
 * Client-side providers for the application.
 * This component wraps the app with necessary providers like MUI theme.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MUIThemeProvider>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </AppRouterCacheProvider>
  );
}