// Semantic frontmatter readers shared by content-policy and its regression tests.
import { createRequire } from 'node:module';
import { yamlCandidates } from './paths.mjs';

const require_ = createRequire(import.meta.url);
let YAML;
const mapping = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export function parseFrontmatter(fm) {
  if (!YAML) {
    for (const candidate of yamlCandidates()) {
      try { YAML = require_(candidate); break; } catch { /* next candidate */ }
    }
    if (!YAML) throw new Error('no yaml module found (the app repo supplies it, same as rendercheck)');
  }
  const doc = YAML.parse(fm);
  if (!mapping(doc)) throw new Error('item frontmatter must be a mapping');
  return doc;
}

export function nested(doc, parent, child) {
  return mapping(doc[parent]) ? doc[parent][child] : undefined;
}

export function referenceUrls(frontmatter) {
  const doc = typeof frontmatter === 'string' ? parseFrontmatter(frontmatter) : frontmatter;
  const references = nested(doc, 'sources', 'references');
  if (!Array.isArray(references)) return [];
  // Only direct URLs on reference objects count. Legacy title strings remain
  // readable but cannot satisfy a source-backed provenance claim.
  return references.filter(mapping)
    .map((reference) => reference.url)
    .filter((url) => typeof url === 'string' && url.trim().length > 0);
}
