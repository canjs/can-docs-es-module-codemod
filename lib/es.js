
exports.createCanImport = function(j, importNames) {
	let variableIds = [];
	for(let name of Array.from(importNames).sort()) {
		variableIds.push(j.importSpecifier(j.identifier(name), j.identifier(name)));
	}

	let declaration = j.importDeclaration(variableIds, j.literal("can"));
	return declaration;
};

exports.findCanImports = function(j, ast) {
	return ast.find(j.ImportDeclaration).filter(imp => {
		return imp.value.source.value.indexOf("can-") === 0;
	});
}
