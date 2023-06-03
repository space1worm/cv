/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  importOrder: [
    "react",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@types/(.*)$",
    "",
    "^@context/(.*)$",
    "",
    "^@pages/(.*)$",
    "",
    "^@ui/(.*)$",
    "",
    "^@components/(.*)$",
    "",
    "^@services/(.*)$",
    "",
    "^@models/(.*)$",
    "",
    "^@utils/(.*)$",
    "",
    "^[./]"
  ]
};
