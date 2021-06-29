module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "prettier/prettier": "error",
    endOfLine: "auto",
  },
};
