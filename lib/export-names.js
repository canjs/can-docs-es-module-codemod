const fs = require("fs");

module.exports = function(file, api) {
  const j = api.jscodeshift;

	let exportNames = {};

	let root = j(file.source);
	root.find(j.ExportNamedDeclaration).forEach(decl => {
		let moduleName = decl.value.source.value;

		decl.value.specifiers.forEach(spec => {
			let namedExport = spec.exported.name;

			exportNames[moduleName] = namedExport;
		});
	});

	fs.writeFileSync("export-names.json", JSON.stringify(exportNames, null, "  "));

	return file.source;
};
