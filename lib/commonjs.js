function findRequires(j, ast) {
	return ast.find(j.CallExpression, {
    callee: {
      name: 'require'
    }
  });
}

function findCanRequires(j, ast) {
	return findRequires(j, ast).filter(requireStatement => {
		return requireStatement.value.arguments[0].value.indexOf("can-") === 0;
	});
}

exports.findRequires = findRequires;
exports.findCanRequires = findCanRequires;
