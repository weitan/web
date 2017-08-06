import camelcase from './camelcase';

const requireModule = require.context('.', false, /^(?!\.\/index).*\.js$/);
const modules = {};

requireModule.keys().forEach(path => {
  const regexp = /^\.\/([^_]*)\.js$/;
  const name = camelcase(path.match(regexp)[1]);

  const module = requireModule(path);
  modules[name] = module.default || module;
});

export default modules;
