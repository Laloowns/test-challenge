const { default: expect } = require("expect");
const dna = require("../dna");

test("stringDNA(dna) return string with non-canonical DNA base values removed", () => {
expect(dna('CTAGGGTA')).toBe('CTAG');

});

test("stringDNA(dna) return string with characters lowercase removed", () => {
expect(dna('CTAGgfkroGGTAgfdfr')).toBe('CTAG');

});
test("stringDNA(dna) return string empty if dna string is empty", () => {
expect(dna("")).toBe("");
});