const jsInMdExp = /(```)(js|html)?((?:[\s\S])+?)\1/g

exports.replace = function(src, callback) {
	//find ```html code blocks and treat it as stache
	//find ```js code blocks and treat them as js
	return src.replace(jsInMdExp, function (fullStr, ticks, codeBlockType, codeBlock) {
		codeBlockType = codeBlockType || '';
		var output = ticks + codeBlockType;

		if (codeBlockType === 'js') {
			output += callback(codeBlock);
		} else {
			output += codeBlock;
		}
		return output + ticks;
	});
}
