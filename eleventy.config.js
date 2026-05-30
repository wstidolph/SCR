module.exports = function(eleventyConfig) {
  // Passthrough copy for assets to keep original paths intact
  eleventyConfig.addPassthroughCopy("src/sites");
  eleventyConfig.addPassthroughCopy("src/themes");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Keep directories structured exactly as they are in src
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
