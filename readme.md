# ESLint Plugin Shopify Lean

Fork of Shopify’s ESLint rules (only):

- Excludes all code related to pre-made configurations and their dependencies.
- Fixes a few Windows related issues due to different path separator.

## Installation

**With Yarn**
```bash
yarn add --dev eslint-plugin-shopify-lean
```

**With npm**
```bash
$ npm install eslint-plugin-shopify-lean --save-dev
```

## Plugin-Provided Rules

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [binary-assignment-parens](docs/rules/binary-assignment-parens.md): Require (or disallow) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
- [class-property-semi](docs/rules/class-property-semi.md): Require (or disallow) semicolons for class properties.
- [images-no-direct-imports](docs/rules/images-no-direct-imports.md): Prevent images from being directly imported.
- [jest/no-snapshots](docs/rules/jest/no-snapshots.md): Disallows jest snapshots.
- [jsx-no-complex-expressions](docs/rules/jsx-no-complex-expressions.md): Disallow complex expressions embedded in in JSX.
- [jsx-no-hardcoded-content](docs/rules/jsx-no-hardcoded-content.md): Disallow hardcoded content in JSX.
- [jsx-prefer-fragment-wrappers](docs/rules/jsx-prefer-fragment-wrappers.md): Disallow useless wrapping elements in favour of fragment shorthand in JSX.
- [no-namespace-imports](docs/rules/no-namespace-imports.md): Prevent namespace import declarations.
- [no-useless-computed-properties](docs/rules/no-useless-computed-properties.md): Prevent the usage of unnecessary computed properties.
- [polaris-no-bare-stack-item](docs/rules/polaris-no-bare-stack-item.md): Disallow the use of Polaris’s `Stack.Item` without any custom props.
- [polaris-prefer-sectioned-prop](docs/rules/polaris-prefer-sectioned-prop.md): Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component.
- [prefer-class-properties](docs/rules/prefer-class-properties.md): Prefer class properties to assignment of literals in constructors.
- [prefer-early-return](docs/rules/prefer-early-return.md): Prefer early returns over full-body conditional wrapping in function declarations.
- [no-ancestor-directory-import](docs/rules/no-ancestor-directory-import.md): Prefer imports from within a directory extend to the file from where they are importing without relying on an index file.
- [prefer-module-scope-constants](docs/rules/prefer-module-scope-constants.md): Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.
- [prefer-twine](docs/rules/prefer-twine.md): Prefer Twine over Bindings as the name for twine imports.
- [react-hooks-strict-return](docs/rules/react-hooks-strict-return.md): Restrict the number of returned items from React hooks.
- [react-initialize-state](docs/rules/react-initialize-state.md): Require that React component state be initialized when it has a non-empty type.
- [react-no-multiple-render-methods](docs/rules/react-no-multiple-render-methods.md): Disallow multiple render methods in React component classes.
- [react-prefer-private-members](docs/rules/react-prefer-private-members.md): Prefer all non-React-specific members be marked private in React class components.
- [react-type-state](docs/rules/react-type-state.md): Require that React component state be typed in TypeScript.
- [restrict-full-import](docs/rules/restrict-full-import.md): Prevent importing the entirety of a package.
- [sinon-no-restricted-features](docs/rules/sinon-no-restricted-features.md): Restrict the use of specified sinon features.
- [sinon-prefer-meaningful-assertions](docs/rules/sinon-prefer-meaningful-assertions.md): Require the use of meaningful sinon assertions through sinon.assert or sinon-chai.
- [strict-component-boundaries](docs/rules/strict-component-boundaries.md): Prevent module imports between components.
- [typescript/prefer-pascal-case-enums](docs/rules/typescript/prefer-pascal-case-enums.md): Prefer TypeScript enums be defined using Pascal case.
- [typescript/prefer-singular-enums](docs/rules/typescript/prefer-singular-enums.md): Prefer TypeScript enums be singular.
- [typescript/prefer-build-client-schema](docs/rules/typescript/prefer-build-client-schema.md): Prefer buildClientSchema for schema building.
- [webpack/no-unnamed-dynamic-imports](docs/rules/webpack/no-unnamed-dynamic-imports.md): Require that all dynamic imports contain a `webpackChunkName` comment.

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2020-present<br/>[Shopify](https://www.shopify.com)<br/>
Copyright 2020-present<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
