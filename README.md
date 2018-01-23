# eslint-config-devmynd

## Installation

Add the package

```sh
yarn add --dev eslint-config-devmynd
```

Add its `peerDependencies`:

```sh
yarn add --dev eslint babel-eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

Create a root level `.eslintrc.json` file with:

```json
{
  "extends": [
    "devmynd"
  ]
}
```

Add the following to the `scripts` section of your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
