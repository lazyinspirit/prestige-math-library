// Apply the staged group-actions page amendments in the publishing commit.
//
// The two pages are PUBLISHED and were deliberately never edited during the run:
// listing a draft item on a published page raises `draft-on-published-page`. The
// lists below only become legal once the items are flipped to `published`, which
// is why this runs inside the publishing commit and nowhere earlier.
//
// The staged blocks are lifted verbatim from
// research/frontier-10-published-amendments.md rather than reconstructed.
//
// --apply to write; default is a dry run.

import { readFileSync, writeFileSync } from 'node:fs';

const apply = process.argv.includes('--apply');
const AM = readFileSync('research/frontier-10-published-amendments.md', 'utf8');

/** Pull the n-th ```yaml fenced block that starts with `key:`. */
function stagedBlock(key) {
  const re = new RegExp('```yaml\\n(' + key + ':[\\s\\S]*?)\\n```', 'g');
  const hits = [...AM.matchAll(re)].map((m) => m[1]);
  if (hits.length !== 1) throw new Error(`expected exactly 1 staged \`${key}:\` block, found ${hits.length}`);
  return hits[0];
}

/** Replace a top-level frontmatter list in a page file. */
function replaceList(path, key, block) {
  const t = readFileSync(path, 'utf8');
  const re = new RegExp('^' + key + ':\\s*\\[[\\s\\S]*?\\]', 'm');
  if (!re.test(t)) throw new Error(`${path}: no \`${key}:\` list found`);
  const before = t.match(re)[0];
  const out = t.replace(re, block);
  const count = (s) => s.split(',').filter((x) => x.trim()).length;
  console.log(`  ${path.split('/').pop()}  ${key}: ${count(before)} -> ${count(block)}`);
  if (apply) writeFileSync(path, out);
}

const A = 'library/abstract-algebra/group-actions-and-cayleys-theorem.md';
const B = 'library/abstract-algebra/group-actions-and-cayleys-theorem-examples.md';

replaceList(A, 'items', stagedBlock('items'));
replaceList(B, 'examples', stagedBlock('examples'));

// The staged A-page summary replaces the published one, which was written when
// the page held six items and no examples.
// Take ONLY the fenced block. Matching from the heading swept up the lead-in
// sentence too and made a valid two-paragraph summary look like three.
const sumMatch = AM.match(/### Staged replacement A-page summary[\s\S]*?```markdown\n([\s\S]*?)\n```/);
if (!sumMatch) throw new Error('staged A-page summary fenced block not found');
const summary = sumMatch[1].trim();
const paras = summary.split(/\n\s*\n/).filter(Boolean);
console.log(`  staged summary: ${paras.length} paragraph(s), ${paras.map((p) => p.split(/\s+/).length).join(' + ')} words`);
if (paras.length !== 2) console.log('    WARNING: the page-summary contract requires exactly two paragraphs');

const at = readFileSync(A, 'utf8');
const bodyStart = at.indexOf('\n---\n', 4) + 5;
const head = at.slice(0, bodyStart);
if (apply) writeFileSync(A, `${head}\n${summary}\n`);
console.log(apply ? '\nwritten.' : '\nDRY RUN — nothing written. Pass --apply.');
