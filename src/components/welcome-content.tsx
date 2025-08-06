"use client";

import { Box, Typography } from "@mui/material";

/**
 * Welcome content component that uses MUI components.
 * Client component to handle MUI's client-side requirements.
 */
export function WelcomeContent() {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center">
      <Typography 
        variant="h2" 
        component="h1" 
        className="font-bold"
      >
        Welcome to Base
      </Typography>
    </Box>
  );
}