// Extract the pair inventory each track proposes. Every track states it in its
// own table shape, so each gets an explicit locator and its own row matcher; a
// single permissive regex silently undercounts (it matched 758 item rows in the
// complex-analysis file). Counts are checked against each track's own claim.
import { readFileSync } from 'node:fs';

const R = 'research/';

// Rows of the form: | LBL | `page-id` | ...   (label bare or backticked)
function labelledTable(text, { header, labelRe }) {
  const lines = text.split('\n');
  let i = lines.findIndex(l => header.test(l));
  if (i < 0) return null;
  const out = [];
  for (i += 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*$/.test(l)) break;                 // table ends at a blank line
    if (/^\|\s*-+/.test(l) || /^\|[\s|:-]+\|$/.test(l)) continue;   // separator
    if (!l.startsWith('|')) break;
    const m = l.match(labelRe);
    if (m) out.push({ label: m[1], a: m[2] });
  }
  return out;
}

const TRACKS = {
  'measure-theory': { file: 'plan-measure-theory-track.md', claim: 23,
    header: /^\| label \| A page id \| one line \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'functional-analysis': { file: 'plan-functional-analysis-track.md', claim: 25,
    header: /^\| label \| A page id \| mathematical spine \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'probability-theory': { file: 'plan-probability-track.md', claim: 22,
    header: /^\| label \| A page id \| mathematical spine \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'pde': { file: 'plan-pde-track.md', claim: 26,
    header: /^\| relative label \| A page \| subject \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'group-theory': { file: 'plan-group-theory-track.md', claim: 23,
    header: /^\| label \| proposed A-page id \| block \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'category-theory': { file: 'plan-category-theory-track.md', claim: 18,
    header: /^\| label \| proposed page id \| supersedes \| est\. A items \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'homological-algebra': { file: 'plan-homological-algebra-track.md', claim: 17,
    header: /^\| label \| proposed A-page id \| relation to the six empty placeholders \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
  'differential-geometry': { file: 'plan-differential-geometry-track.md', claim: 37,
    header: /^\| Pair \| A page \| B\/examples page \|/,
    labelRe: /^\|\s*`?([A-Z]{2,4}-\d+)`?\s*\|\s*`([a-z0-9-]+)`/ },
};

// commutative algebra and number theory use per-pair bullet sections instead
function bulletSections(text) {
  const out = [];
  const lines = text.split('\n');
  let cur = null;
  for (const l of lines) {
    const h = l.match(/^### ((?:CA|NT)-\d+)\.\s*(.+?)\s*$/);
    if (h) { cur = { label: h[1], title: h[2] }; out.push(cur); continue; }
    if (!cur) continue;
    let m = l.match(/^- \*\*A page id:\*\*\s*`([a-z0-9-]+)`/); if (m) { cur.a = m[1]; continue; }
    m = l.match(/^- \*\*B page id:\*\*\s*`([a-z0-9-]+)`/);     if (m) { cur.b = m[1]; continue; }
    m = l.match(/^- \*\*Requires:\*\*\s*(.+)$/);               if (m) { cur.requires = m[1]; continue; }
  }
  return out.filter(x => x.a);
}

const result = {};
for (const [name, t] of Object.entries(TRACKS)) {
  const text = readFileSync(R + t.file, 'utf8');
  const rows = labelledTable(text, t) || [];
  result[name] = rows;
  const ok = rows.length === t.claim ? 'ok' : `MISMATCH (claim ${t.claim})`;
  console.log(`  ${name.padEnd(22)} ${String(rows.length).padStart(3)} pairs   ${ok}`);
}
for (const [name, file, claim] of [
  ['commutative-algebra', 'plan-commutative-algebra-track.md', 18],
  ['number-theory', 'plan-number-theory-track.md', 24],
]) {
  const rows = bulletSections(readFileSync(R + file, 'utf8'));
  result[name] = rows;
  console.log(`  ${name.padEnd(22)} ${String(rows.length).padStart(3)} pairs   ${rows.length === claim ? 'ok' : `MISMATCH (claim ${claim})`}`);
}

const total = Object.values(result).reduce((n, r) => n + r.length, 0);
console.log(`\n  TOTAL extracted: ${total} pairs across ${Object.keys(result).length} tracks`);
process.stdout.write('');
import('node:fs').then(fs => fs.writeFileSync(
  '/private/tmp/claude-501/-Users-ianx-Projects-prestige-math-library/c97b02e9-dbd1-472a-8232-642f59aef178/scratchpad/pairs.json',
  JSON.stringify(result, null, 1)));
