"use client";

import { Box, Typography, Container } from "@mui/material";

/**
 * Welcome content component that uses MUI components.
 * Client component to handle MUI's client-side requirements.
 */
export function WelcomeContent() {
  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="text-center">
        <Typography 
          variant="h2" 
          component="h1" 
          className="mb-4"
          color="primary"
        >
          Welcome
        </Typography>
        <Typography 
          variant="h6" 
          component="p"
          color="text.secondary"
        >
          Ready to build something amazing
        </Typography>
      </Box>
    </Container>
  );
}