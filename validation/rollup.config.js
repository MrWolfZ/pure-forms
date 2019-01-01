const resolve = require('rollup-plugin-node-resolve');

const globals = {
  'pure-forms': 'pure-forms',
};

module.exports = {
  exports: 'named',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals,
  onwarn: () => { return }
}
