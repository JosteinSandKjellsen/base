"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Custom typography configuration based on design system
const customTypography = {
  fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  // Display styles
  h1: {
    fontSize: '76px',
    lineHeight: '114px',
    letterSpacing: '-0.25px',
    fontWeight: 400,
  },
  h2: {
    fontSize: '61px',
    lineHeight: '92px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  h3: {
    fontSize: '49px',
    lineHeight: '74px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  // Headline styles
  h4: {
    fontSize: '39px',
    lineHeight: '58px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  h5: {
    fontSize: '31px',
    lineHeight: '46px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  h6: {
    fontSize: '25px',
    lineHeight: '38px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  // Title styles
  subtitle1: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    fontWeight: 500,
  },
  // Body styles
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.25px',
    fontWeight: 400,
  },
  body2: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.25px',
    fontWeight: 400,
  },
  // Label styles
  button: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.2px',
    fontWeight: 500,
    textTransform: 'none' as const,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.25px',
    fontWeight: 500,
  },
  overline: {
    fontSize: '11px',
    lineHeight: '17px',
    letterSpacing: '0.25px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
  },
};

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
  typography: customTypography,
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
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    }
  }

  const currentTheme = nextTheme === 'system' ? systemTheme : nextTheme;
  const muiTheme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}
)

/**
 * Client-side providers for the application.
 * This component wraps the app with necessary providers like MUI theme.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <MUIThemeProvider>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </AppRouterCacheProvider>
    </NextThemesProvider>
  );
}