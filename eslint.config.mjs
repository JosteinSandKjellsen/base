import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-console": ["warn"], // Do not use console. Use ´logger´ or ´devLogger´ from '@/lib/logger/serverLogger' instead for server components. For client components, use ´useLogger´ from '@/lib/logger/clientLogger'.
    },
  },
];

export default eslintConfig;
