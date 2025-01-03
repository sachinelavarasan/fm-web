import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      'vite.config.ts',
      'postcss.config.js',
      'public',
      'tailwind.config.js',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          parser: 'typescript',
        },
      ],
    },
  },
  // Add configuration objects directly
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  eslintConfigPrettier,
];
