const {join, dirname, relative, basename} = require('path');

const resolve = require('eslint-module-utils/resolve').default;
const pkgDir = require('pkg-dir');

const REPO_URL = 'https://github.com/Shopify/web-configs';

function uncast(node) {
  let currentNode = node;

  while (
    currentNode.type === 'TypeCastExpression' ||
    currentNode.type === 'TSAsExpression'
  ) {
    currentNode = currentNode.expression;
  }

  return currentNode;
}

function getName(node) {
  const finalNode = uncast(node);
  const type = finalNode.type;

  if (type === 'Identifier') {
    return finalNode.name;
  } else if (type === 'Literal') {
    return String(finalNode.value);
  } else if (type === 'TemplateLiteral' && finalNode.expressions.length === 0) {
    return finalNode.quasis[0].value.raw;
  }
  return null;
}

const DEFAULT_IMPORT = Symbol('default');
const NAMESPACE_IMPORT = Symbol('namespace');

function getImportDetailsForName(name, context) {
  const definition = findDefinition(name, context);
  if (definition == null || definition.type !== 'ImportBinding') {
    return null;
  }

  const source = definition.parent.source.value;
  const resolvedSource = resolve(source, context);
  if (resolvedSource == null) {
    return null;
  }

  const definitionNode = definition.node;
  let imported;

  if (definitionNode.type === 'ImportDefaultSpecifier') {
    imported = DEFAULT_IMPORT;
  } else if (definitionNode.type === 'ImportNamespaceSpecifier') {
    imported = NAMESPACE_IMPORT;
  } else {
    const importedName = definitionNode.imported.name;
    imported = importedName === 'default' ? DEFAULT_IMPORT : importedName;
  }

  return {
    source: normalizeSource(resolvedSource, context),
    local: name,
    imported,
  };
}

function toPosix(windowsPath) {
  return windowsPath.replace(/\\/g, '/');
}

const INDEX_FILE = /^index\./;
const IS_FILE = /(^|\/).*\..*$/;
function normalizeSource(source, context) {
  const sourceRoot = pkgDir.sync(source);
  const packageRoot = pkgDir.sync(context.getFilename());

  // Compute relative path + replace windows path seperators with unix ones
  // which are also used in NodeJS import syntax.
  const relativeSource =
    sourceRoot === packageRoot
    ? toPosix(relative(packageRoot, source))
    : toPosix(relative(packageRoot, sourceRoot));
  const sourceBasename = basename(relativeSource);
  const sourceDir = IS_FILE.test(relativeSource)
    ? dirname(relativeSource)
    : relativeSource;

  const sourceWithoutExtension = INDEX_FILE.test(sourceBasename)
    ? sourceDir
    : join(sourceDir, sourceBasename.split('.').slice(0, -1).join('.'));

  return toPosix(sourceWithoutExtension).replace(/^node_modules\//, '');
}

function findDefinition(name, context) {
  let definition = null;
  let currentScope = context.getScope();

  while (currentScope && !definition) {
    if (currentScope.set.has(name)) {
      const {defs} = currentScope.set.get(name);
      definition = defs[defs.length - 1];
    }

    currentScope = currentScope.upper;
  }

  return definition;
}

function getRootObject(memberExpression) {
  let currentObject = memberExpression;

  while (currentObject.object) {
    currentObject = currentObject.object;
  }

  return currentObject;
}

function docsUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin/docs/rules/${ruleName}.md`;
}

module.exports = {
  uncast,
  getName,
  getImportDetailsForName,
  getRootObject,
  docsUrl,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
};
