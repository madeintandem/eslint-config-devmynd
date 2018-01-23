module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "globals": {
    "fetch": false,
    "FormData": false
  },
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "standard/object-curly-even-spacing": ["error", "always"]
  }
}
