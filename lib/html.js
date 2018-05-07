const {replace} = require("./js-in-html");
const pkgToCan = require("./packages-to-can");

module.exports = function(file, api) {
  const j = api.jscodeshift;
	const convert = pkgToCan.bind(null, j);

  return replace(file.source, convert);
};
