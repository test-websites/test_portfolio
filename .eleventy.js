module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };

module.exports.config = {
  pathPrefix: "/test_portfolio",
}