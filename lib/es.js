
exports.createCanImport = function(j, importNames) {
	let variableIds = [];
	for(let name of importNames) {
		variableIds.push(j.importSpecifier(j.identifier(name), j.identifier(name)));
	}

	let declaration = j.importDeclaration(variableIds, j.literal("can"));
	return declaration;
};
