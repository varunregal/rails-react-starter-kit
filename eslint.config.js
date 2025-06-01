import js from '@eslint/js';
  import typescript from '@typescript-eslint/eslint-plugin';
  import typescriptParser from '@typescript-eslint/parser';
  import react from 'eslint-plugin-react';
  import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';

  export default defineConfig([
    globalIgnores(["app/frontend/entrypoints/*"]),
    js.configs.recommended,
    {
      
      files: ['app/frontend/**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
        parser: typescriptParser,
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      
      plugins: {
        '@typescript-eslint': typescript,
        react,
        'react-hooks': reactHooks
      },
      rules: {
        'react/react-in-jsx-scope': 'off'
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      
    }
  ]);