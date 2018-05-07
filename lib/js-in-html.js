const jsInHtmlExp = /(<script[^>]*src=("|').*steal\/steal\.js\2[^>]*>)([\s\S]+?)(<\/script>)/g;

exports.replace = function(src, callback) {
  return src.replace(jsInHtmlExp, function (fullStr, $1, quoteType, $3, $4) {
    return $1 + callback($3) + $4;
  });
};
