// THE SUBJECTS-02 SPLICE. Same discipline as subjects-01: one pass, orders drawn
// from anchor page ids resolved live from the spec, fractional so nothing is
// renumbered and no existing order goes stale.
import { readFileSync, writeFileSync } from 'node:fs';

const SPEC = 'research/plan-spec.json';
const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const orderOf = id => { const p = spec.pages.find(x => x.id === id); return p && p.order; };

const SMALL = new Set(['a','an','and','as','at','by','for','from','in','of','on','or','the','to','via','with','over','under','into']);
const titleOf = id => id.split('-').map((w, i) =>
  (i > 0 && SMALL.has(w)) ? w : (/^[a-z]$/.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');

// Each track states its pairs in its own shape; match each explicitly.
function pairsOf(file, re, order) {
  const seen = new Map();
  for (const line of readFileSync('research/' + file, 'utf8').split('\n')) {
    const m = line.match(re);
    if (m && !seen.has(m[1])) seen.set(m[1], m[2]);
  }
  return order.map(l => ({ label: l, a: seen.get(l) })).filter(x => x.a);
}
const nums = (pre, n) => Array.from({ length: n }, (_, i) => `${pre}-${i + 1}`);

const P = {
  AT: pairsOf('plan-algebraic-topology-track.md', /^\|\s*`?(AT-\d+)`?\s*\|\s*`([a-z0-9-]+)`/, nums('AT', 20)),
  AV: pairsOf('plan-algebraic-geometry-track.md', /^##\s*(AV-\d+)\..*$/, []),
  DT: pairsOf('plan-differential-topology-track.md', /^\|\s*`?(DT-\d+)`?\s*\|\s*`([a-z0-9-]+)`/, nums('DT', 32)),
  FR: pairsOf('plan-fourier-analysis-track.md', /^\|\s*`?(FR-\d+)`?\s*\|\s*`([a-z0-9-]+)`/, nums('FR', 18)),
  RG: pairsOf('plan-representation-theory-groups-track.md', /^\|\s*`?(RG-\d+)`?\s*\|\s*`([a-z0-9-]+)`/, nums('RG', 30)),
  RL: pairsOf('plan-representation-theory-lie-track.md', /^\|\s*`?(RL-\d+)`?\s*\|\s*`([a-z0-9-]+)`/, nums('RL', 15)),
};

// The algebraic-geometry track is the one track that never minted page ids: it
// labels AV-1..AV-26 with titles and declares no id anywhere. They are derived
// from its own section titles, transliterated the way the published corpus does
// (bezout, cech, kahler, etale, poincare) with apostrophes dropped rather than
// turned into separators — `zariskis-main-theorem`, not `zariski-s-main-theorem`.
P.AV = JSON.parse(readFileSync('/tmp/av-ids.json', 'utf8'));

const LAYOUT = [
  // Fourier moves BELOW PDE per ruling S-2: it needs only measure theory and
  // functional analysis, and PDE-19 must cite FR-8 backwards.
  { key: 'FR',  cat: 'fourier-analysis',      rows: P.FR,               after: 'itos-formula-and-brownian-martingales-examples', step: 0.00002 },
  { key: 'AT',  cat: 'algebraic-topology',    rows: P.AT,               base: 366, step: 0.001 },
  { key: 'AVc', cat: 'algebraic-geometry',    rows: P.AV.slice(0, 8),   chain: 'AT' },
  { key: 'AVs', cat: 'scheme-theory',         rows: P.AV.slice(8),      chain: 'AVc' },
  { key: 'RL',  cat: 'lie-theory',            rows: P.RL,               after: 'real-forms-and-real-semisimple-lie-algebras-examples', step: 0.001 },
  { key: 'RG',  cat: 'representation-theory', rows: P.RG,               chain: 'RL' },
  { key: 'DT',  cat: 'differential-topology', rows: P.DT,               intStart: 517 },
];

const created = [], cursor = {};
for (const b of LAYOUT) {
  if (!b.rows.length) { console.error('NO PAIRS EXTRACTED for', b.key); process.exit(1); }
  let base, step, prev;
  if (b.intStart) { base = b.intStart; step = 1; prev = 'moment-maps-and-symplectic-reduction-examples'; }
  else if (b.chain) { base = cursor[b.chain].next; step = cursor[b.chain].step; prev = cursor[b.chain].lastPage; }
  else if (b.base !== undefined) { base = b.base; step = b.step; prev = 'schur-multipliers-and-universal-central-extensions-examples'; }
  else {
    const ao = orderOf(b.after);
    if (ao === undefined) { console.error('MISSING ANCHOR', b.after); process.exit(1); }
    base = ao; step = b.step; prev = b.after;
  }
  let k = 0;
  for (const r of b.rows) {
    const bId = r.a + '-examples';
    const oA = b.intStart ? base + k++ : +(base + (++k) * step).toFixed(6);
    const oB = b.intStart ? base + k++ : +(base + (++k) * step).toFixed(6);
    const t = titleOf(r.a);
    created.push({ order: oA, id: r.a, title: t, kind: 'A', category: b.cat, companion: bId, requires: [prev], items: [] });
    created.push({ order: oB, id: bId, title: t + ' — Examples', kind: 'B', category: b.cat, companion: r.a, requires: [r.a], items: [] });
    prev = bId;
  }
  const last = created[created.length - 1].order;
  cursor[b.key] = { step, next: last, lastPage: prev };
  console.log(`  ${b.key.padEnd(4)} ${String(b.rows.length).padStart(3)} pairs  ${b.cat.padEnd(22)} ${created[created.length - 2 * b.rows.length].order} … ${last}`);
}

// ---- guards
const ids = new Set(spec.pages.map(p => p.id)), ords = new Set(spec.pages.map(p => p.order));
const idClash = created.filter(p => ids.has(p.id));
if (idClash.length) { console.error('ID CLASH:', idClash.slice(0, 8).map(c => c.id).join(', ')); process.exit(1); }
const dupIds = created.map(p => p.id).filter((v, i, a) => a.indexOf(v) !== i);
if (dupIds.length) { console.error('DUPLICATE new ids:', [...new Set(dupIds)].join(', ')); process.exit(1); }
const ordClash = created.filter(p => ords.has(p.order));
if (ordClash.length) { console.error('ORDER CLASH:', ordClash.slice(0, 8).map(c => c.order + ' ' + c.id).join(', ')); process.exit(1); }
const dupOrd = created.map(p => p.order).filter((v, i, a) => a.indexOf(v) !== i);
if (dupOrd.length) { console.error('DUPLICATE new orders:', [...new Set(dupOrd)].slice(0, 8).join(', ')); process.exit(1); }

spec.pages = [...spec.pages, ...created].sort((a, b) => a.order - b.order);
const mono = spec.pages.every((p, i, a) => i === 0 || a[i - 1].order < p.order);
console.log(`\n  created ${created.length} pages (${created.length / 2} pairs)`);
console.log(`  pages: ${spec.pages.length - created.length} -> ${spec.pages.length}   strictly increasing: ${mono}`);
if (!mono) { console.error('ORDER NOT STRICTLY INCREASING'); process.exit(1); }
if (process.argv[2] === '--write') { writeFileSync(SPEC, JSON.stringify(spec, null, 2) + '\n'); console.log('\n  WRITTEN'); }
else console.log('\n  DRY RUN — pass --write to apply');
