const {replace} = require("./js-in-html");
const convert = require("./packages-to-can");

module.exports = function(file, api) {
  const j = api.jscodeshift;

	return convert(j, file.source);
};
