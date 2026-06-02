module.exports = function(eleventyConfig) {
  // Passthrough copy for assets to keep original paths intact
  eleventyConfig.addPassthroughCopy("src/sites");
  eleventyConfig.addPassthroughCopy("src/themes");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Custom filter to squish HTML content into clean plaintext for search indexing
  eleventyConfig.addFilter("squish", function(content) {
    if (!content) return "";
    let str = content.toString();
    // Remove scripts and style tags + their contents
    str = str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    str = str.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    // Remove HTML tags
    str = str.replace(/<[^>]*>/g, ' ');
    // Decode common HTML entities
    str = str.replace(/&nbsp;/gi, ' ');
    str = str.replace(/&amp;/gi, '&');
    str = str.replace(/&lt;/gi, '<');
    str = str.replace(/&gt;/gi, '>');
    str = str.replace(/&quot;/gi, '"');
    str = str.replace(/&#39;/gi, "'");
    str = str.replace(/&mdash;/gi, '—');
    str = str.replace(/&ndash;/gi, '–');
    // Compress multiple spaces and newlines
    str = str.replace(/\s+/g, ' ').trim();
    return str;
  });

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
