const {createCanImport} = require("./es");
const {findCanRequires} = require("./commonjs");
const exportNames = require("../export-names.json");

module.exports = function(j, jsSource) {
	let importNames = new Set();
	let root = j(jsSource);

	let requires = findCanRequires(j, root);
	requires.forEach(req => {
		let moduleName = req.value.arguments[0].value;
		let exportName = exportNames[moduleName];

		if(exportName) {
			importNames.add(exportName);
		}

		req.parentPath.prune();
	});

	if(importNames.size) {
		let importStatement = createCanImport(j, importNames);
		root.find(j.Program).at(0).get().value.body.unshift(importStatement);
	}

	return root.toSource();
}
