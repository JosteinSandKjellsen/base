# Base - Next.js Starter Project

This is a simplified Next.js application perfect for rapid prototyping with MUI components.

## Features

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **MUI (Material-UI) v7** component library with icons
- **Tailwind CSS v4** for styling
- **TanStack Query** for data fetching
- **Zod** for schema validation
- **Next Themes** for theme switching
- **ESLint** and **Prettier** for code quality

## What's NOT Included

This is a simplified version that excludes:
- Authentication (NextAuth, Azure)
- Feature flags (Unleash)
- OpenTelemetry monitoring
- Internationalization (next-intl)
- Complex security middleware

Perfect for quick prototyping without the complexity!

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:full` - Run ESLint and TypeScript checks
- `pnpm type-check` - Run TypeScript checks only

## Dependencies

This simplified project includes:

- **UI Framework**: MUI (Material-UI) v7 with icons
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack Query (React Query)
- **Type Safety**: Zod for schema validation
- **Theming**: Next Themes for light/dark mode

## Getting Started with MUI

The project comes with MUI pre-configured. Here's a simple example:

```tsx
import { Button, Typography, Box } from '@mui/material';

export default function MyComponent() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Hello World
      </Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </Box>
  );
}
```

## Configuration

The project inherits configuration from the workspace:

- TypeScript config extends `@loom/tsconfig/nextjs.json`
- ESLint config extends `@loom/eslint-config`
- Tailwind CSS v4 with custom theme variables

## License

Private project - all rights reserved.
