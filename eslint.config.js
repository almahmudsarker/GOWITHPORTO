import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: { version: "18.3" },
      "import/resolver": { node: { extensions: [".js", ".jsx"] } },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/no-scope": "error",
      "react-refresh/runtime": "error",
      "react-refresh/symbol": "error",
      "react-refresh/webpack": "error",
      "react-refresh/babel": "error",
      "react-refresh/webpack-plugin": "error",
      "react-refresh/babel-plugin": "error",
      "react-refresh/webpack-runtime": "error",
      "react-refresh/babel-runtime": "error",
      "react-refresh/webpack-runtime-plugin": "error",
      "react-refresh/babel-runtime-plugin": "error",
      "react-refresh/webpack-runtime-runtime": "error",
      "react-refresh/babel-runtime-runtime": "error",
      "react-refresh/webpack-runtime-runtime-plugin": "error",
      "react-refresh/babel-runtime-runtime-plugin": "error",
      "react-refresh/only-export-components": [
        "warn",

        { allowConstantExport: true },
      ],
    },
  },
];
