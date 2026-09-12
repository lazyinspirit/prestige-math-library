import assert from 'node:assert/strict';

// Standalone finite regression oracle, not a ZF proof or workflow receipt.
const stats = { preorders: 0, maps: 0, lifting: 0, atomic: 0, roundTrips: 0,
  valuations: 0, formulas: 0, mutationRejections: 0 };
const range = n => Array.from({ length: n }, (_, i) => i);
const subsets = xs => range(2 ** xs.length).map(mask => xs.filter((_, i) => mask & 2 ** i));
const vectors = (n, k) => k === 0 ? [[]] : vectors(n, k - 1).flatMap(v => range(n).map(x => [...v, x]));
function preorder(n, le) {
  const ps = range(n);
  assert(ps.every(p => le(p, p)));
  assert(ps.every(p => ps.every(q => ps.every(r => !le(p, q) || !le(q, r) || le(p, r)))));
  const down = ps.map(p => ps.filter(q => le(q, p)));
  const compat = (p, q) => down[p].some(r => le(r, q));
  const dense = ds => ps.every(p => ds.some(d => le(d, p)));
  const all = subsets(ps);
  const denseSets = all.filter(dense);
  const generics = all.filter(g => g.length && g.every(p => ps.every(q => !le(p, q) || g.includes(q)))
    && g.every(p => g.every(q => g.some(r => le(r, p) && le(r, q))))
    && denseSets.every(d => d.some(p => g.includes(p))));
  return { n, ps, le, down, compat, dense, generics };
}
function allPreorders(n) {
  const edges = range(n).flatMap(p => range(n).filter(q => p !== q).map(q => [p, q]));
  return subsets(edges).flatMap(es => {
    const le = (p, q) => p === q || es.some(([a, b]) => a === p && b === q);
    if (!range(n).every(p => range(n).every(q => range(n).every(r => !le(p, q) || !le(q, r) || le(p, r))))) return [];
    return [preorder(n, le)];
  });
}
function allowed(P, Q, e) {
  return e.length === P.n && e.every(q => Q.ps.includes(q))
    && P.ps.every(p => P.ps.every(r => (!P.le(p, r) || Q.le(e[p], e[r]))
      && P.compat(p, r) === Q.compat(e[p], e[r])))
    && Q.ps.every(q => P.ps.some(p => Q.le(e[p], q)));
}

// Canonical set-of-pairs names. IDs only identify raw names, never forced equality.
const names = [], interned = new Map();
function name(entries) {
  const sorted = [...new Map(entries.map(([u, p]) => [`${u.id}:${p}`, [u, p]])).values()]
    .sort(([u, p], [v, q]) => u.id - v.id || p - q);
  const key = sorted.map(([u, p]) => `${u.id}:${p}`).join(',');
  if (!interned.has(key)) {
    const result = { id: names.length, entries: sorted };
    names.push(result); interned.set(key, result);
  }
  return interned.get(key);
}
const empty = name([]);
function namePool(P, rankTwo = false) {
  const first = subsets(P.ps).map(ps => name(ps.map(p => [empty, p])));
  if (!rankTwo) return first;
  const entries = first.flatMap(u => P.ps.map(p => [u, p]));
  return [...new Set([...first, ...entries.map(x => name([x])),
    ...entries.map((x, i) => name([x, entries[(i + 1) % entries.length]]))])];
}
function translations(P, Q, e, inverseTest = (p, q) => Q.le(e[p], q)) {
  const tm = new Map(), rm = new Map();
  const T = a => {
    if (!tm.has(a)) tm.set(a, name(a.entries.map(([u, p]) => [T(u), e[p]])));
    return tm.get(a);
  };
  const R = a => {
    if (!rm.has(a)) rm.set(a, name(a.entries.flatMap(([u, q]) => P.ps.filter(p => inverseTest(p, q)).map(p => [R(u), p]))));
    return rm.get(a);
  };
  return { T, R };
}
function forcing(P) {
  const memo = new Map();
  const subset = (p, a, b) => a.entries.every(([u, s]) => P.down[p].filter(q => P.le(q, s))
    .every(q => P.down[q].some(r => b.entries.some(([v, t]) => P.le(r, t) && eq(r, u, v)))));
  const eq = (p, a, b) => {
    const key = `${p}/${a.id}/${b.id}`;
    if (!memo.has(key)) memo.set(key, subset(p, a, b) && subset(p, b, a));
    return memo.get(key);
  };
  const mem = (p, a, b) => P.down[p].every(q => P.down[q].some(r => b.entries.some(([v, t]) => P.le(r, t) && eq(r, a, v))));
  // 'some' is explicitly finite-witness forcing, NOT unrestricted existential forcing.
  function formula(p, f, env, witnesses) {
    if (f[0] === '=') return eq(p, env[f[1]], env[f[2]]);
    if (f[0] === 'in') return mem(p, env[f[1]], env[f[2]]);
    if (f[0] === 'not') return !P.down[p].some(q => formula(q, f[1], env, witnesses));
    if (f[0] === 'and') return formula(p, f[1], env, witnesses) && formula(p, f[2], env, witnesses);
    if (f[0] === 'some') return P.down[p].every(q => P.down[q].some(r => witnesses.some(w => formula(r, f[1], [...env, w], witnesses))));
    throw new Error('Unknown formula');
  }
  return { eq, mem, formula };
}
function valuation(a, g) {
  return JSON.stringify([...new Set(a.entries.filter(([, p]) => g.includes(p)).map(([u]) => valuation(u, g)))].sort());
}
function checkMap(P, Q, e, rankTwo = false) {
  assert(allowed(P, Q, e)); stats.maps++;
  for (const ps of subsets(P.ps)) for (const q of Q.ps) {
    if (ps.every(p => Q.le(q, e[p]))) assert(P.ps.some(r => ps.every(p => P.le(r, p)) && Q.le(e[r], q)));
    stats.lifting++;
  }
  const { T, R } = translations(P, Q, e), fp = forcing(P), fq = forcing(Q);
  const pn = namePool(P, rankTwo), qn = namePool(Q, rankTwo);
  for (const a of pn) for (const p of P.ps) { assert(fp.eq(p, R(T(a)), a)); stats.roundTrips++; }
  for (const a of qn) for (const q of Q.ps) { assert(fq.eq(q, T(R(a)), a)); stats.roundTrips++; }
  for (const a of pn) for (const b of pn) for (const p of P.ps) {
    assert.equal(fp.eq(p, a, b), fq.eq(e[p], T(a), T(b)));
    assert.equal(fp.mem(p, a, b), fq.mem(e[p], T(a), T(b))); stats.atomic += 2;
  }
  for (const g of P.generics) {
    const h = Q.ps.filter(q => g.some(p => Q.le(e[p], q)));
    assert(Q.generics.some(k => JSON.stringify(k) === JSON.stringify(h)));
    assert.deepEqual(P.ps.filter(p => h.includes(e[p])), g);
    for (const a of pn) { assert.equal(valuation(T(a), h), valuation(a, g)); stats.valuations++; }
    for (const a of qn) { assert.equal(valuation(R(a), g), valuation(a, h)); stats.valuations++; }
  }
  for (const h of Q.generics) {
    const g = P.ps.filter(p => h.includes(e[p]));
    assert(P.generics.some(k => JSON.stringify(k) === JSON.stringify(g)));
    assert.deepEqual(Q.ps.filter(q => g.some(p => Q.le(e[p], q))), h);
  }
  if (rankTwo) {
    // Independent semantic oracle: direct HF valuations in all finite generics.
    for (const a of pn) for (const b of pn) for (const p of P.ps) {
      const gs = P.generics.filter(g => g.includes(p)); assert(gs.length);
      assert.equal(fp.eq(p, a, b), gs.every(g => valuation(a, g) === valuation(b, g)));
      assert.equal(fp.mem(p, a, b), gs.every(g => JSON.parse(valuation(b, g)).includes(valuation(a, g))));
    }
    const atoms = [['=', 0, 1], ['in', 0, 1]];
    const formulas = [...atoms, ...atoms.map(a => ['not', a]), ['and', atoms[0], ['not', atoms[1]]],
      ['some', ['=', 2, 0]], ['some', ['in', 2, 1]], ['some', ['not', ['=', 2, 0]]]];
    // These two finite witness sets correspond BOTH ways modulo forced equality.
    const pw = [...new Set([...pn, ...qn.map(R)])];
    const qw = [...new Set([...qn, ...pn.map(T)])];
    for (const a of pn) for (const b of pn) for (const p of P.ps) for (const f of formulas) {
      assert.equal(fp.formula(p, f, [a, b], pw), fq.formula(e[p], f, [T(a), T(b)], qw)); stats.formulas++;
    }
  }
}

const orders = [1, 2, 3].flatMap(allPreorders); stats.preorders = orders.length;
assert.equal(orders.length, 34);
for (const P of orders) for (const Q of orders) for (const e of vectors(Q.n, P.n)) {
  if (allowed(P, Q, e)) checkMap(P, Q, e);
}
const singleton = preorder(1, () => true);
const chain = preorder(2, (p, q) => p <= q);
const duplicates = preorder(2, () => true);
const fork = preorder(3, (p, q) => p === q || q === 2);
const antichain = preorder(2, (p, q) => p === q);
for (const [P, Q, e] of [[singleton, singleton, [0]], [chain, singleton, [0, 0]],
  [duplicates, singleton, [0, 0]], [antichain, fork, [0, 1]], [fork, fork, [0, 1, 2]]]) checkMap(P, Q, e, true);

function reject(label, witness) { assert(witness(), label); stats.mutationRejections++; }
reject('omit compatibility reflection', () => !allowed(antichain, singleton, [0, 0]));
reject('omit density', () => !allowed(singleton, antichain, [0]));
reject('reverse source order', () => !allowed(chain, chain, [1, 0]));
const fq = forcing(fork), topName = name([[empty, 2]]);
reject('inverse only exact coefficients', () => {
  const { T, R } = translations(antichain, fork, [0, 1], (p, q) => p === q);
  return !fq.eq(2, T(R(topName)), topName);
});
reject('inverse inequality reversed', () => {
  const { T, R } = translations(antichain, fork, [0, 1], (p, q) => fork.le(q, p));
  return !fq.eq(2, T(R(topName)), topName);
});
reject('one selected refinement replaces dense family', () => {
  const { T, R } = translations(antichain, fork, [0, 1], (p, q) => fork.le(p, q) && p === antichain.ps.find(r => fork.le(r, q)));
  return !fq.eq(2, T(R(topName)), topName);
});
reject('round trip literal equality', () => {
  const { T, R } = translations(antichain, fork, [0, 1]);
  return T(R(topName)) !== topName && fq.eq(2, T(R(topName)), topName);
});
reject('raw pullback must preserve every nongeneric filter', () => {
  const filter = [1]; // Upward closed and directed in the two-point chain, not generic.
  const push = singleton.ps.filter(q => filter.some(() => singleton.le(0, q)));
  return JSON.stringify(chain.ps.filter(() => push.includes(0))) !== JSON.stringify(filter);
});
reject('forcing membership is one witness somewhere below', () => {
  const branchName = name([[empty, 0]]);
  return !fq.mem(2, empty, branchName) && fork.down[2].some(r => fork.le(r, 0) && fq.eq(r, empty, empty));
});
console.log(JSON.stringify({ status: 'passed', ...stats,
  boundary: 'Finite exhaustive maps on 1–3 conditions; rank-one names exhaustive; selected rank-two and finite-witness formulas only. No formal ZF proof or owner receipt.' }, null, 2));
