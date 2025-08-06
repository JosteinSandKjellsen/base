import config from "@loom/eslint-config";

const eslintConfig = [
  ...config,
  {
    rules: {
      "no-console": ["warn"], // Do not use console. Use ´logger´ or ´devLogger´ from '@/lib/logger/serverLogger' instead for server components. For client components, use ´useLogger´ from '@/lib/logger/clientLogger'.
    },
  },
];

export default eslintConfig;
