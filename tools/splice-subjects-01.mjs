// THE SPLICE. Converts every track's placement anchor into a concrete plan
// order, in one pass, keyed by ANCHOR PAGE ID resolved from the live spec —
// never by composing shift tables. Fractional orders mean nothing is renumbered,
// so no existing page moves and no order already quoted anywhere goes stale.
import { readFileSync, writeFileSync } from 'node:fs';

const SPEC = 'research/plan-spec.json';
const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const orderOf = id => { const p = spec.pages.find(x => x.id === id); return p && p.order; };
const pairs = JSON.parse(readFileSync(process.argv[2], 'utf8'));

const SMALL = new Set(['a','an','and','as','at','by','for','from','in','of','on','or','the','to','via','with','over','under','into']);
function titleOf(id) {
  const words = id.split('-');
  return words.map((w, i) => {
    if (i > 0 && SMALL.has(w)) return w;
    if (w === 'lp') return '$L^p$';
    if (/^[a-z]$/.test(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

// ---- the layout. Each block: pairs, the anchor it sits after, and how orders
// ---- are drawn. `after` is a page id resolved live; `ints` uses free integers.
const L = [
  { block: 'nt-elementary',   cat: 'number-theory',         rows: pairs['number-theory'].slice(0, 8),   after: 'splitting-fields-examples' },
  { block: 'gt-structure',    cat: 'group-theory',          rows: pairs['group-theory'].slice(0, 9),    after: 'sylow-theorems-and-nilpotent-groups-examples' },
  { block: 'galois',          cat: 'abstract-algebra',      rows: null,                                  ints: [98, 99, 100, 101], tail: 101 },
  { block: 'commutative-alg', cat: 'commutative-algebra',   rows: pairs['commutative-algebra'],          after: 'modules-over-a-pid-and-canonical-forms-examples' },
  { block: 'nt-algebraic',    cat: 'number-theory',         rows: pairs['number-theory'].slice(16, 24), chainAfter: 'commutative-alg' },
  { block: 'gt-modular',      cat: 'group-theory',          rows: pairs['group-theory'].slice(17, 20),  after: 'induced-representations-and-frobenius-reciprocity-examples' },
  { block: 'measure',         cat: 'measure-theory',        rows: pairs['measure-theory'],               after: 'stone-weierstrass-general-examples' },
  { block: 'functional',      cat: 'functional-analysis',   rows: pairs['functional-analysis'],          chainAfter: 'measure' },
  { block: 'probability',     cat: 'probability',           rows: pairs['probability-theory'],           chainAfter: 'functional' },
  { block: 'pde',             cat: 'pde',                   rows: pairs['pde'],                          chainAfter: 'probability' },
  { block: 'gt-geometric',    cat: 'group-theory',          rows: pairs['group-theory'].slice(9, 17),   after: 'applications-of-the-fundamental-group-examples' },
  { block: 'nt-analytic',     cat: 'number-theory',         rows: pairs['number-theory'].slice(8, 16),  after: 'bloch-schottky-and-picard-examples' },
  { block: 'category',        cat: 'category-theory',       rows: pairs['category-theory'],              bandStart: 365 },
  { block: 'homological',     cat: 'category-theory',       rows: pairs['homological-algebra'],          chainAfter: 'category' },
  { block: 'gt-cohomological',cat: 'group-theory',          rows: pairs['group-theory'].slice(20, 23),  chainAfter: 'homological' },
  { block: 'diffgeo',         cat: 'differential-geometry', rows: pairs['differential-geometry'],        intStart: 443 },
];

const GALOIS = [
  ['algebraic-closure-embeddings-and-separability', 'GA-1'],
  ['the-galois-correspondence', 'GA-2'],
  ['finite-fields-and-cyclotomic-extensions', 'GA-3'],
  ['solvability-by-radicals-and-kummer-theory', 'GA-4'],
];

// the 365-392 band is entirely planned/empty and is replaced wholesale
const BAND = spec.pages.filter(p => p.order >= 365 && p.order <= 392);
if (BAND.some(p => (p.items || []).length)) { console.error('REFUSING: an authored page is in the 365-392 band'); process.exit(1); }
const bandIds = new Set(BAND.map(p => p.id));

const created = [];
const cursor = {};   // block -> last order used

function emit(block, cat, aId, bId, order, step, requiresA) {
  const aTitle = titleOf(aId);
  created.push({ order, id: aId, title: aTitle, kind: 'A', category: cat, companion: bId, requires: requiresA, items: [] });
  created.push({ order: +(order + step).toFixed(4), id: bId, title: aTitle + ' — Examples', kind: 'B', category: cat, companion: aId, requires: [aId], items: [] });
}

for (const b of L) {
  let rows = b.rows;
  if (b.block === 'galois') rows = GALOIS.map(([a, label]) => ({ label, a }));
  const n = rows.length;

  let base, step, prevPage;
  if (b.ints) {                       // Galois: free integers 98-101, then fractional
    prevPage = 'algebraic-extensions-degree-and-finite-fields-examples';
  } else if (b.intStart) {            // differential geometry: clean integers at 443+
    base = b.intStart; step = 1;
    prevPage = 'spectral-sequences';  // lower bound only; 443 > the whole homological band
  } else if (b.bandStart) {
    base = b.bandStart; step = 0.001;
    prevPage = spec.pages.find(p => p.order === 364)?.id;
  } else if (b.chainAfter) {
    base = cursor[b.chainAfter].base; step = cursor[b.chainAfter].step;
    base = cursor[b.chainAfter].next;
    prevPage = cursor[b.chainAfter].lastPage;
  } else {
    const ao = orderOf(b.after);
    if (ao === undefined) { console.error('MISSING ANCHOR', b.after); process.exit(1); }
    base = ao; step = 0.001;
    prevPage = b.after;
  }

  if (b.ints) {
    // GA-1 -> 98/99, GA-2 -> 100/101, then GA-3/GA-4 fractional after 101
    const slots = [[98, 99], [100, 101], [101.2, 101.4], [101.6, 101.8]];
    rows.forEach((r, i) => {
      const bId = r.a + '-examples';
      emit(b.block, b.cat, r.a, bId, slots[i][0], slots[i][1] - slots[i][0], [prevPage]);
      prevPage = bId;
    });
    cursor[b.block] = { base: 101.8, step: 0.2, next: 102, lastPage: prevPage };
    continue;
  }

  let k = 0;
  rows.forEach(r => {
    const aId = r.a, bId = r.b || (r.a + '-examples');
    const oA = b.intStart ? base + k * 2 : +(base + (++k) * step).toFixed(4);
    const oB = b.intStart ? base + k * 2 + 1 : +(base + (++k) * step).toFixed(4);
    if (b.intStart) k += 1;
    emit(b.block, b.cat, aId, bId, oA, oB - oA, [prevPage]);
    prevPage = bId;
  });
  const last = created[created.length - 1].order;
  cursor[b.block] = { base, step, next: b.intStart ? last + 1 : +(last).toFixed(4), lastPage: prevPage };
}

// ---- apply
const keepIds = new Set(created.map(p => p.id));
const survivors = spec.pages.filter(p => !bandIds.has(p.id));
const clash = created.filter(p => survivors.some(s => s.id === p.id));
if (clash.length) { console.error('ID CLASH with a surviving page:', clash.map(c => c.id).join(', ')); process.exit(1); }

const dupes = created.map(p => p.id).filter((v, i, a) => a.indexOf(v) !== i);
if (dupes.length) { console.error('DUPLICATE new ids:', [...new Set(dupes)].join(', ')); process.exit(1); }

const orders = created.map(p => p.order);
const dupOrders = orders.filter((v, i, a) => a.indexOf(v) !== i);
if (dupOrders.length) { console.error('DUPLICATE new orders:', [...new Set(dupOrders)].slice(0, 10).join(', ')); process.exit(1); }
const collideOrders = created.filter(p => survivors.some(s => s.order === p.order));
if (collideOrders.length) { console.error('ORDER COLLIDES with a surviving page:', collideOrders.slice(0, 6).map(c => c.order + ' ' + c.id).join(', ')); process.exit(1); }

spec.pages = [...survivors, ...created].sort((a, b) => a.order - b.order);

console.log(`  band pages replaced : ${BAND.length}`);
console.log(`  pages created       : ${created.length}  (${created.length / 2} pairs)`);
console.log(`  pages before/after  : 448 -> ${spec.pages.length}`);
console.log(`  max order           : ${Math.max(...spec.pages.map(p => p.order))}`);
if (process.argv[3] === '--write') { writeFileSync(SPEC, JSON.stringify(spec, null, 2) + '\n'); console.log('\n  WRITTEN'); }
else console.log('\n  DRY RUN — pass --write to apply');
