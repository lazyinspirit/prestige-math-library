// The def-cantor-set row must quote the clause [L4] actually leans on — that C is
// the intersection of a family of subsets of R, hence a subset of R. Slice it
// verbatim from disk so the stored quote is byte-identical to the source.
import { readFileSync, writeFileSync } from 'node:fs';

const contractPath = 'research/frontier-15-batch-4.proof-contracts.json';
const doc = JSON.parse(readFileSync(contractPath, 'utf8'));
const fs = doc.contracts['fs-every-subset-of-r-is-borel'];

const src = readFileSync('items/def-cantor-set.md', 'utf8');
const from = src.indexOf('there is a unique family');
const anchor = src.indexOf('\\bigcap_{n \\in \\mathbb{N}} C_n');
const to = src.indexOf('$$', anchor) + 2;
if (from < 0 || anchor < 0 || to < 2) throw new Error('anchors not found in def-cantor-set');

const row = fs.citations.find((c) => c.source === 'def-cantor-set');
row.quote = src.slice(from, to);
if (!src.includes(row.quote)) throw new Error('slice is not verbatim');

writeFileSync(contractPath, JSON.stringify(doc, null, 2) + '\n');
console.log('def-cantor-set quote (verbatim,', row.quote.length, 'chars):');
console.log(row.quote);
