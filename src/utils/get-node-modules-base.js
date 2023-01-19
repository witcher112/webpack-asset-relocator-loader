module.exports = function (id) {
  const pkgIndex = id.lastIndexOf('node_modules');
  if (pkgIndex !== -1 &&
      (id[pkgIndex - 1] === '/' || id[pkgIndex - 1] === '\\') &&
      (id[pkgIndex + 12] === '/' || id[pkgIndex + 12] === '\\')) {
    return id.substr(0, pkgIndex + 12);
  }
};
