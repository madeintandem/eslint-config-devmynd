module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
    "react"
  ],
  "globals": {
    "fetch": false,
    "localStorage": false,
    "FormData": false
  },
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "standard/object-curly-even-spacing": ["error", "always"]
  }
}
