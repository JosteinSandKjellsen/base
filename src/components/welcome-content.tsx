"use client";

import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Container
} from "@mui/material";
import { 
  Code as CodeIcon,
  Palette as PaletteIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon
} from "@mui/icons-material";

/**
 * Welcome content component that uses MUI components.
 * Client component to handle MUI's client-side requirements.
 */
export function WelcomeContent() {
  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="text-center mb-8">
        <Typography 
          variant="h2" 
          component="h1" 
          className="font-bold mb-4"
          color="primary"
        >
          Welcome to Base
        </Typography>
        <Typography variant="h5" color="text.secondary" className="mb-6">
          A simplified Next.js starter perfect for rapid prototyping
        </Typography>
        <Box className="flex gap-2 justify-center flex-wrap mb-8">
          <Chip label="Next.js 15" color="primary" />
          <Chip label="React 19" color="primary" />
          <Chip label="MUI v7" color="secondary" />
          <Chip label="Tailwind CSS v4" color="secondary" />
          <Chip label="TypeScript" color="default" />
        </Box>
      </Box>

      <Grid container spacing={4} className="mb-8">
        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center mb-3">
                <SpeedIcon color="primary" className="mr-2" />
                <Typography variant="h6" component="h2">
                  Fast Development
                </Typography>
              </Box>
              <List dense>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <CodeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Next.js App Router with Turbopack" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <PaletteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="MUI components ready to use" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <SecurityIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="TypeScript with Zod validation" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" component="h2" className="mb-3">
                What's Included
              </Typography>
              <Typography variant="body2" color="text.secondary" className="mb-3">
                This simplified starter includes everything you need for rapid prototyping:
              </Typography>
              <List dense>
                <ListItem disablePadding>
                  <ListItemText 
                    primary="🎨 MUI (Material-UI) v7 with icons" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary="🎯 Tailwind CSS v4 for styling" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary="⚡ TanStack Query for data fetching" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary="🔧 ESLint & Prettier configured" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      <Card className="mb-8">
        <CardContent>
          <Typography variant="h6" component="h2" className="mb-3">
            Getting Started
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mb-4">
            Ready to build something amazing? Here are some quick commands to get you started:
          </Typography>
          <Box className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <Typography variant="body2" component="code" className="font-mono">
              # Install dependencies<br />
              pnpm install<br /><br />
              # Start development server<br />
              pnpm dev<br /><br />
              # Build for production<br />
              pnpm build
            </Typography>
          </Box>
          <Box className="flex gap-2 flex-wrap">
            <Button 
              variant="contained" 
              startIcon={<LaunchIcon />}
              href="/docs" 
              disabled
            >
              View Documentation
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<GitHubIcon />}
              href="https://github.com" 
              target="_blank"
              disabled
            >
              GitHub Repository
            </Button>
          </Box>
        </CardContent>
      </Card>
      </Grid>
      <Box className="text-center">
        <Typography variant="body2" color="text.secondary">
          Built with ❤️ for rapid prototyping • Ready to customize for your needs
        </Typography>
      </Box>
    </Container>
  );
}