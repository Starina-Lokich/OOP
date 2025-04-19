// eslint.config.mjs

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([
  // Основная конфигурация для всех JavaScript-файлов
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off', // Разрешаем использование console.log
    },
  },

  // Конфигурация для тестовых файлов
  {
    files: ['__tests__/**/*.{js,mjs,cjs}'],
    plugins: {
      jest: jestPlugin,
    },
    extends: ['jest/recommended'], // Новый формат записи плагина Jest
    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  },
]);