import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([
  // Основная конфигурация для всех JavaScript-файлов
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: [
      'dist/**/*', // Игнорируем папку с результатами сборки
      'coverage/**/*.*', // Явно игнорируем все файлы в coverage/
      '__tests__/**/*.snap', // Игнорируем snapshot-файлы Jest
    ],
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