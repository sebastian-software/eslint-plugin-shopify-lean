module.exports = {
  targets: 'current node',
  presets: [
    [
      '@babel/preset-env',
      {modules: 'commonjs', useBuiltIns: 'entry', corejs: 3, bugfixes: true},
    ],
    '@babel/preset-typescript',
  ],
};
