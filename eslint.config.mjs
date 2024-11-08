import tsp from "@typescript-eslint/parser";

import globals from "globals";

import js from "@eslint/js";
import ts from "typescript-eslint";

import react from "eslint-plugin-react";

import biome from "eslint-config-biome";

const jsConfig = js.configs.recommended;

const tsConfigs = ts.configs.strictTypeChecked;

const reactConfig = react.configs.flat.recommended;

const reactJsxConfig = react.configs.flat["jsx-runtime"];

export default [
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parser: tsp,
			parserOptions: {
				project: "./tsconfig.json",
				ecmaVersion: "latest",
				sourceType: "module",
			},
			globals: globals.browser,
		},
		ignores: ["dist/"],
	},
	jsConfig,
	...tsConfigs,
	reactConfig,
	reactJsxConfig,
	biome,
];
