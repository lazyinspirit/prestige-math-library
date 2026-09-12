import assert from 'node:assert/strict';

// Finite membership-stage accounting only. No L-model or Sat verifier is imported.
const pair = (a, b) => Math.max(a, b) + 2;
const finiteSet = xs => Math.max(...xs, 0) + 1;
const def = ambient => ambient + 1;
const assignment = finiteSet([pair(0, 0)]);
const universe = def(assignment);
const truthRow = def(assignment); // Direct fixed-formula definition, not recursion in levels.
const table = finiteSet([pair(0, truthRow)]);
assert.deepEqual({ assignment, universe, truthRow, table },
  { assignment: 3, universe: 4, truthRow: 4, table: 7 });

function checkOffsets(h, r, k, tableOverhead = table) {
  const hSuccessor = def(Math.max(h, pair(2, 2)));
  // eta=delta+1, plus one margin beyond the table for the stated local interface.
  const rSuccessor = def(Math.max(r, 2 + tableOverhead, 3));
  const kSuccessor = def(Math.max(k, pair(2, pair(2, rSuccessor))));
  const hLimit = def(Math.max(1, pair(1, 1)));
  const rLimit = def(0);
  const kLimit = def(Math.max(1, pair(1, pair(1, rLimit))));
  return { pass: hSuccessor <= h + 1 && rSuccessor <= r + 1 && kSuccessor <= k + 1
      && hLimit <= h && rLimit <= r && kLimit <= k,
    hSuccessor, rSuccessor, kSuccessor, hLimit, rLimit, kLimit };
}
const offsets = checkOffsets(8, 32, 40);
assert.equal(offsets.pass, true);
assert.deepEqual(offsets, { pass: true, hSuccessor: 9, rSuccessor: 33,
  kSuccessor: 41, hLimit: 4, rLimit: 1, kLimit: 6 });
assert.equal(checkOffsets(3, 32, 40).pass, false);
assert.equal(checkOffsets(8, 6, 40).pass, false);
assert.equal(checkOffsets(8, 32, 35).pass, false);
assert.equal(checkOffsets(8, 32, 40, 40).pass, false);

// A canonical HF DAG, not giant Ackermann integers. Empty has rank zero.
const pool = new Map();
function set(xs) {
  const es = [...new Map(xs.map(x => [x.id, x])).values()].sort((a, b) => a.id - b.id);
  const key = es.map(x => x.id).join(',');
  if (!pool.has(key)) pool.set(key, { id: pool.size, es,
    rank: es.length ? 1 + Math.max(...es.map(x => x.rank)) : 0 });
  return pool.get(key);
}
const E = set([]), P = (x, y) => set([set([x]), set([x, y])]);
function powerset(x) {
  return set(Array.from({ length: 2 ** x.es.length }, (_, mask) =>
    set(x.es.filter((_, i) => mask & 2 ** i))));
}
const V = [E], ordinal = [E];
for (let n = 1; n <= 4; n++) { V.push(powerset(V[n - 1])); ordinal.push(set(ordinal)); }
const history = [], augmented = [], finiteChecks = [];
for (let n = 0; n <= 4; n++) {
  // Any binary relation obeys the rank bound. This arbitrary order is NOT <_L.
  const R = set(V[n].es.flatMap((x, i) => V[n].es.slice(i + 1).map(y => P(x, y))));
  history.push(P(ordinal[n], V[n]));
  augmented.push(P(ordinal[n], P(V[n], R)));
  const H = set(history), K = set(augmented);
  assert.equal(H.rank, n + 3);
  assert(R.rank <= n + 2);
  assert(K.rank <= n + 7);
  // At finite n, L_n=V_n. Membership requires rank STRICTLY below the stage.
  assert(H.rank < n + 8 && R.rank < n + 32 && K.rank < n + 40);
  finiteChecks.push({ n, levelSize: V[n].es.length, Hrank: H.rank, Rrank: R.rank, Krank: K.rank });
}
assert.equal(V[4].rank, 4);
assert(!(V[4].rank < 4)); // Reject confusing x⊆V_n with x∈V_n.
console.log(JSON.stringify({ status: 'passed', stageOffsets: { assignment, universe, truthRow, table },
  conditionalHistoryBookkeeping: offsets, finiteChecks, mutationRejections: 5,
  boundary: 'Arithmetic and finite HF packing checks only. Infinite L-stage bounds use the accompanying Def arguments. No internal Sat/BRIDGE or owner gate is certified.' }, null, 2));
