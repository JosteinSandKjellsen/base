"use client";

import { Box, Typography } from "@mui/material";

/**
 * Welcome page for the base Next.js application.
 */
export default function HomePage() {
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
