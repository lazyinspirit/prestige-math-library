#!/usr/bin/env node
// finite-smoke.mjs — small finite-model falsification checks selected by proof contracts.
//
//   node tools/finite-smoke.mjs research/level<n>-proof-contracts.json
//   node tools/finite-smoke.mjs --self-test
//
// A pass is deliberately NOT a proof of a general statement.  These checks only
// search a bounded, independently computed model family for counterexamples to
// a named invariant which the item's text explicitly asserts.  They are useful
// for convention, endpoint, and quantifier bugs; the proof contract and human
// audit remain the mathematical gate.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const requested = option('--items')?.split(',').map((value) => value.trim()).filter(Boolean) ?? null;
const CHECKS = makeChecks();

if (argv.includes('--self-test')) {
  const outcomes = Object.keys(CHECKS).map((name) => ({ name, ...CHECKS[name]({}) }));
  const failures = outcomes.filter((outcome) => !outcome.ok);
  if (asJson) console.log(JSON.stringify({ ok: failures.length === 0, outcomes }, null, 2));
  else {
    for (const outcome of outcomes) console.log(`${outcome.ok ? 'PASS' : 'FAIL'} ${outcome.name}: ${outcome.summary}`);
  }
  process.exit(failures.length ? 1 : 0);
}

const contractPath = argv.find((arg) => !arg.startsWith('--') && arg !== option('--items'));
if (!contractPath) usage();

const errors = [];
const outcomes = [];
let document;
try {
  document = JSON.parse(readFileSync(resolvePath(contractPath), 'utf8'));
} catch (cause) {
  errors.push({ code: 'contract-read', message: `${contractPath}: ${cause.message}` });
  finish();
}
if (document?.version !== 1 || !Array.isArray(document?.scope) || typeof document?.contracts !== 'object') {
  errors.push({ code: 'contract-shape', message: 'expected a version-1 proof contract with scope and contracts' });
  finish();
}

const ids = requested ? document.scope.filter((id) => requested.includes(id)) : document.scope;
for (const id of requested ?? []) if (!document.scope.includes(id)) errors.push({ code: 'selection-outside-scope', message: `${id} is outside the contract scope`, id });

for (const id of ids) {
  const contract = document.contracts[id];
  for (const smoke of contract?.finite_smoke ?? []) runSmoke(id, smoke);
}
finish();

function runSmoke(id, smoke) {
  if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) {
    errors.push({ code: 'smoke-shape', message: 'finite_smoke entries must be objects', id });
    return;
  }
  const check = CHECKS[smoke.check];
  if (!check) {
    errors.push({ code: 'smoke-check', message: `unknown finite smoke check ${smoke.check ?? '(missing)'}`, id });
    return;
  }
  if (typeof smoke.asserts !== 'string' || !smoke.asserts.trim()) {
    errors.push({ code: 'smoke-assertion', message: `${smoke.check} needs an exact assertion excerpt`, id });
    return;
  }
  const itemPath = join(REPO, 'items', `${id}.md`);
  if (!existsSync(itemPath)) {
    errors.push({ code: 'item-missing', message: `items/${id}.md does not exist`, id });
    return;
  }
  if (!normalise(readFileSync(itemPath, 'utf8')).includes(normalise(smoke.asserts))) {
    errors.push({ code: 'smoke-assertion-mismatch', message: `${smoke.check}'s assertion excerpt is not present in ${id}`, id });
    return;
  }
  const outcome = check(smoke);
  outcomes.push({ id, check: smoke.check, ...outcome });
  if (!outcome.ok) errors.push({ code: 'finite-countermodel', message: `${smoke.check}: ${outcome.summary}`, id });
}

function makeChecks() { return {
  'tree-characterisation': ({ max_vertices = 5 }) => {
    const max = boundedInteger(max_vertices, 5, 0, 5);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        const connected = components(graph) === (vertices === 0 ? 0 : 1);
        const tree = vertices > 0 && connected && acyclic(graph);
        const right = connected && graph.edges.length === vertices - 1;
        if (tree !== right) return counterexample('tree iff connected and n-1 edges', graph);
      }
    }
    return { ok: true, summary: `checked all simple graphs through ${max} vertices` };
  },
  'forest-edge-component-count': ({ max_vertices = 5 }) => {
    const max = boundedInteger(max_vertices, 5, 0, 5);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        const forest = acyclic(graph);
        const formula = graph.edges.length === vertices - components(graph);
        if (forest !== formula) return counterexample('forest iff |E| = |V| - components', graph);
      }
    }
    return { ok: true, summary: `checked all simple graphs through ${max} vertices` };
  },
  'induced-complement-commutes': ({ max_vertices = 4 }) => {
    const max = boundedInteger(max_vertices, 4, 0, 4);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        for (let mask = 0; mask < (1 << vertices); mask += 1) {
          const subset = [...Array(vertices).keys()].filter((vertex) => mask & (1 << vertex));
          const left = induced(complement(graph), subset);
          const right = complement(induced(graph, subset));
          if (!sameEdges(left, right)) return counterexample('complement(induced G) = induced(complement G)', graph, subset);
        }
      }
    }
    return { ok: true, summary: `checked all simple graphs and vertex subsets through ${max} vertices` };
  },
  // Two poset checks, added for run frontier-12's category-theory pair. Every
  // registered check before them was graph- or group-theoretic, so a level of
  // algebra, analysis and category theory matched none and `finite-smoke`
  // passed having executed nothing. A poset IS a category — one arrow per
  // related pair — and in it a pullback/product is exactly a meet, so a finite
  // poset is a real countermodel search for a limit claim, not a toy.
  //
  // Both confirm an EXISTENCE claim: the counterexample they back asserts that
  // something can fail, so `ok: true` means the witness was verified to fail as
  // claimed. Defaults are the witnesses the citing items actually construct, so
  // `--self-test` exercises them with no parameters.
  'monotone-map-need-not-preserve-meets': ({
    // the diamond 0 < a,b < 1 (a,b incomparable), collapsed onto the 2-chain
    domain_covers = [['0', 'a'], ['0', 'b'], ['a', '1'], ['b', '1']],
    codomain_covers = [['0', '1']],
    map = { 0: '0', a: '1', b: '1', 1: '1' },
    pair = ['a', 'b'],
  } = {}) => {
    const P = poset(domain_covers), Q = poset(codomain_covers);
    if (!P.ok) return { ok: false, summary: `domain is not a poset: ${P.why}` };
    if (!Q.ok) return { ok: false, summary: `codomain is not a poset: ${Q.why}` };
    for (const x of P.elements) if (!Q.elements.includes(map[x])) return { ok: false, summary: `map sends ${x} outside the codomain` };
    for (const x of P.elements) for (const y of P.elements) {
      if (P.le(x, y) && !Q.le(map[x], map[y])) return { ok: false, summary: `map is not monotone: ${x} <= ${y} but ${map[x]} !<= ${map[y]}` };
    }
    // In a poset category every arrow is monic, so "preserves monomorphisms" is
    // automatic — which is exactly why the counterexample works.
    const [a, b] = pair;
    const below = meet(P, a, b), image = meet(Q, map[a], map[b]);
    if (below === null) return { ok: false, summary: `${a} and ${b} have no meet in the domain` };
    if (image === null) return { ok: false, summary: `their images have no meet in the codomain` };
    if (map[below] === image) return { ok: false, summary: `the meet IS preserved: f(${a}^${b}) = ${map[below]} = ${image}` };
    return { ok: true, summary: `f(${a}^${b}) = f(${below}) = ${map[below]} but f(${a})^f(${b}) = ${image}, so meets are not preserved while every arrow stays monic` };
  },
  'full-subposet-meet-differs-from-ambient': ({
    // 0 < q < m < a,b in the ambient; the full subposet drops m
    ambient_covers = [['0', 'q'], ['q', 'm'], ['m', 'a'], ['m', 'b']],
    subset = ['0', 'q', 'a', 'b'],
    pair = ['a', 'b'],
  } = {}) => {
    const P = poset(ambient_covers);
    if (!P.ok) return { ok: false, summary: `ambient is not a poset: ${P.why}` };
    for (const x of subset) if (!P.elements.includes(x)) return { ok: false, summary: `${x} is not in the ambient poset` };
    // A FULL subcategory keeps every arrow between retained objects: the order
    // is inherited, never re-declared. That is what makes the difference honest.
    const S = { elements: subset, le: (x, y) => P.le(x, y) };
    const [a, b] = pair;
    const outer = meet(P, a, b), inner = meet(S, a, b);
    if (outer === null) return { ok: false, summary: `${a} and ${b} have no meet in the ambient poset` };
    if (inner === null) return { ok: false, summary: `${a} and ${b} have no meet in the full subposet` };
    if (outer === inner) return { ok: false, summary: `both meets are ${outer}: the limit does NOT differ` };
    if (subset.includes(outer)) return { ok: false, summary: `the ambient meet ${outer} is retained, so the subposet cannot differ for this reason` };
    return { ok: true, summary: `ambient meet of ${a},${b} is ${outer}; the full subposet omits it, so its meet is ${inner} — the inclusion does not preserve this limit` };
  },
  'cyclic-subgroup-lagrange': ({ max_modulus = 24 }) => {
    const max = boundedInteger(max_modulus, 24, 1, 200);
    for (let modulus = 1; modulus <= max; modulus += 1) {
      for (let divisor = 1; divisor <= modulus; divisor += 1) {
        if (modulus % divisor) continue;
        const subgroup = new Set();
        for (let multiplier = 0; multiplier < modulus; multiplier += 1) subgroup.add((multiplier * divisor) % modulus);
        if (subgroup.size !== modulus / divisor || modulus % subgroup.size !== 0) {
          return { ok: false, summary: `Z/${modulus}Z with generator ${divisor} has computed subgroup size ${subgroup.size}` };
        }
      }
    }
    return { ok: true, summary: `checked cyclic subgroups of Z/nZ through n = ${max}` };
  },

  // ---------------------------------------------------------------------------
  // ARITHMETIC AND POLYNOMIAL CHECKS (owner-directed, 2026-08-15)
  //
  // WHY THESE EXIST. On run frontier-13 the gate reported "0 errors, 0 checks"
  // across all 390 contracts — a green line proving nothing. The cause was not
  // lazy Betas: the registry held only graph, poset and cyclic-subgroup checks,
  // and a contract can REFERENCE a registered check but cannot DEFINE one. Four
  // of seven batches (symmetric polynomials, linear algebra, tensor products,
  // linear recurrences) had no applicable check in the registry, and both Betas
  // asked to add tests correctly refused rather than attach an unrelated check
  // and manufacture coverage. Extending the registry is the orchestrator's job.
  //
  // Each of these is a BOUNDED COUNTERMODEL SEARCH, never a proof. Its value is
  // catching a dropped hypothesis or an off-by-one on small instances before a
  // judge reads the claim.
  // ---------------------------------------------------------------------------

  // The binomial-congruence count: solvable x^m = a (mod n) has exactly
  // gcd(phi(n), m) solutions. An Alpha verified this by hand over 18,895
  // instances and the result lived only in a report; this is that search, made
  // re-runnable. Catches a dropped coprimality or primitive-root hypothesis.
  'binomial-congruence-solution-count': ({ max_modulus = 60, max_exponent = 8 }) => {
    const maxN = boundedInteger(max_modulus, 60, 2, 200);
    const maxM = boundedInteger(max_exponent, 8, 1, 20);
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    let checked = 0;
    for (let n = 2; n <= maxN; n += 1) {
      const units = [];
      for (let u = 1; u < n; u += 1) if (gcd(u, n) === 1) units.push(u);
      const phi = units.length;
      // Only moduli admitting a primitive root: the cyclic hypothesis is what
      // makes the count exact, and omitting it is the defect to catch.
      const hasPrimitiveRoot = units.some((g) => {
        const seen = new Set();
        let x = 1;
        for (let i = 0; i < phi; i += 1) { x = (x * g) % n; seen.add(x); }
        return seen.size === phi;
      });
      if (!hasPrimitiveRoot) continue;
      for (let m = 1; m <= maxM; m += 1) {
        const counts = new Map();
        for (const x of units) {
          let p = 1;
          for (let i = 0; i < m; i += 1) p = (p * x) % n;
          counts.set(p, (counts.get(p) ?? 0) + 1);
        }
        const expected = gcd(phi, m);
        for (const [value, count] of counts) {
          checked += 1;
          if (count !== expected) {
            return { ok: false, summary: `x^${m} = ${value} (mod ${n}) has ${count} solutions, not gcd(phi(n),m) = ${expected}` };
          }
        }
      }
    }
    return { ok: true, summary: `no counterexample in ${checked} solvable instances, moduli through ${maxN} with a primitive root, exponents through ${maxM}` };
  },

  // Vieta over Z: the elementary symmetric functions of a monic polynomial's
  // roots are its coefficients up to sign. Catches a sign or index-shift error
  // in a symmetric-function statement.
  'vieta-elementary-symmetric': ({ max_root = 4, max_degree = 4 }) => {
    const R = boundedInteger(max_root, 4, 1, 8);
    const D = boundedInteger(max_degree, 4, 1, 6);
    let checked = 0;
    const roots = [];
    for (let r = -R; r <= R; r += 1) roots.push(r);
    const combos = (arr, k) => k === 0 ? [[]]
      : arr.flatMap((x, i) => combos(arr.slice(i + 1), k - 1).map((c) => [x, ...c]));
    for (let d = 1; d <= D; d += 1) {
      for (const chosen of combos(roots, d).slice(0, 400)) {
        // expand prod (x - r)
        let coeffs = [1];
        for (const r of chosen) {
          const next = new Array(coeffs.length + 1).fill(0);
          for (let i = 0; i < coeffs.length; i += 1) { next[i] += coeffs[i]; next[i + 1] -= r * coeffs[i]; }
          coeffs = next;
        }
        for (let k = 1; k <= d; k += 1) {
          const e = combos(chosen, k).reduce((s, c) => s + c.reduce((p, x) => p * x, 1), 0);
          const fromCoeff = ((-1) ** k) * coeffs[k];
          checked += 1;
          if (e !== fromCoeff) {
            return { ok: false, summary: `roots ${chosen.join(',')}: e_${k} = ${e} but (-1)^${k} a_${k} = ${fromCoeff}` };
          }
        }
      }
    }
    return { ok: true, summary: `Vieta held in ${checked} coefficient comparisons, degrees through ${D}, roots in [-${R},${R}]` };
  },

  // A linear recurrence's terms match the coefficient extraction of its rational
  // generating function. Catches an off-by-one in the numerator degree or the
  // initial-value indexing.
  'linear-recurrence-matches-rational-series': ({ max_order = 3, terms = 12 }) => {
    const K = boundedInteger(max_order, 3, 1, 5);
    const N = boundedInteger(terms, 12, 3, 40);
    let checked = 0;
    for (let k = 1; k <= K; k += 1) {
      for (let seed = 0; seed < 3 ** (2 * k); seed += 1) {
        const digits = [];
        let s = seed;
        for (let i = 0; i < 2 * k; i += 1) { digits.push((s % 3) - 1); s = Math.floor(s / 3); }
        const c = digits.slice(0, k);            // recurrence coefficients
        const init = digits.slice(k);            // initial values
        if (c[k - 1] === 0) continue;            // order must be genuine
        const a = [...init];
        for (let n = k; n < N; n += 1) {
          let v = 0;
          for (let i = 0; i < k; i += 1) v += c[i] * a[n - 1 - i];
          a.push(v);
        }
        // denominator 1 - c1 x - ... - ck x^k ; numerator from the first k terms
        const den = [1, ...c.map((x) => -x)];
        const num = new Array(k).fill(0);
        for (let n = 0; n < k; n += 1) for (let i = 0; i <= n; i += 1) num[n] += den[i] * a[n - i];
        // re-extract the series from num/den and compare
        const b = [];
        for (let n = 0; n < N; n += 1) {
          let v = n < k ? num[n] : 0;
          for (let i = 1; i <= k && i <= n; i += 1) v -= den[i] * b[n - i];
          b.push(v);
        }
        for (let n = 0; n < N; n += 1) {
          checked += 1;
          if (a[n] !== b[n]) {
            return { ok: false, summary: `order ${k}, coeffs [${c}], init [${init}]: term ${n} is ${a[n]} by recurrence but ${b[n]} by series extraction` };
          }
        }
      }
    }
    return { ok: true, summary: `recurrence and rational-series extraction agreed on ${checked} terms, orders through ${K}` };
  },

  // Matrix arithmetic over Z/nZ: associativity, distributivity, and that the
  // determinant is multiplicative. Catches a transposition or index convention
  // error in a matrix statement over a commutative ring.
  'matrix-ring-laws-mod-n': ({ max_modulus = 6, size = 2 }) => {
    const M = boundedInteger(max_modulus, 6, 2, 12);
    const d = boundedInteger(size, 2, 2, 3);
    const cells = d * d;
    let checked = 0;
    for (let n = 2; n <= M; n += 1) {
      const mats = [];
      for (let code = 0; code < Math.min(n ** cells, 400); code += 1) {
        const m = []; let s = code;
        for (let i = 0; i < cells; i += 1) { m.push(s % n); s = Math.floor(s / n); }
        mats.push(m);
      }
      const mul = (A, B) => {
        const C = new Array(cells).fill(0);
        for (let i = 0; i < d; i += 1) for (let j = 0; j < d; j += 1) {
          let v = 0;
          for (let k2 = 0; k2 < d; k2 += 1) v += A[i * d + k2] * B[k2 * d + j];
          C[i * d + j] = ((v % n) + n) % n;
        }
        return C;
      };
      const det = (A) => d === 2
        ? (((A[0] * A[3] - A[1] * A[2]) % n) + n) % n
        : (((A[0] * (A[4] * A[8] - A[5] * A[7]) - A[1] * (A[3] * A[8] - A[5] * A[6]) + A[2] * (A[3] * A[7] - A[4] * A[6])) % n) + n) % n;
      const sample = mats.slice(0, 12);
      for (const A of sample) for (const B of sample) {
        checked += 1;
        if (det(mul(A, B)) !== (det(A) * det(B)) % n) {
          return { ok: false, summary: `mod ${n}: det(AB) != det(A)det(B) for A=[${A}] B=[${B}]` };
        }
        for (const C of sample.slice(0, 4)) {
          if (mul(mul(A, B), C).join() !== mul(A, mul(B, C)).join()) {
            return { ok: false, summary: `mod ${n}: matrix multiplication not associative on [${A}],[${B}],[${C}]` };
          }
        }
      }
    }
    return { ok: true, summary: `determinant multiplicativity and associativity held in ${checked} products, moduli through ${M}, ${d}x${d}` };
  },
}; }

// A finite poset from its cover relations: reflexive-transitive closure, then
// an antisymmetry check so a mistyped cover list is reported rather than
// silently producing a preorder in which "the meet" is meaningless.
function poset(covers) {
  const elements = [...new Set(covers.flat())].sort();
  const below = new Map(elements.map((x) => [x, new Set([x])]));
  for (let changed = true; changed;) {
    changed = false;
    for (const [low, high] of covers) {
      for (const x of below.get(low)) if (!below.get(high).has(x)) { below.get(high).add(x); changed = true; }
    }
  }
  const le = (x, y) => below.get(y)?.has(x) ?? false;
  for (const x of elements) for (const y of elements) {
    if (x !== y && le(x, y) && le(y, x)) return { ok: false, why: `${x} and ${y} are mutually below each other` };
  }
  return { ok: true, elements, le };
}

// The meet of x and y: the greatest common lower bound, or null when the lower
// bounds have no greatest element. Returning null rather than guessing is what
// lets a check report "no meet exists" as a distinct outcome from "meets differ".
function meet(P, x, y) {
  const lower = P.elements.filter((z) => P.le(z, x) && P.le(z, y));
  const greatest = lower.filter((z) => lower.every((w) => P.le(w, z)));
  return greatest.length === 1 ? greatest[0] : null;
}

function graphs(vertices) {
  const pairs = [];
  for (let left = 0; left < vertices; left += 1) for (let right = left + 1; right < vertices; right += 1) pairs.push([left, right]);
  const count = 1 << pairs.length;
  return Array.from({ length: count }, (_, mask) => ({
    vertices,
    edges: pairs.filter((_, index) => mask & (1 << index)),
  }));
}
function components(graph) {
  const seen = new Set();
  let count = 0;
  const adjacent = adjacency(graph);
  for (let start = 0; start < graph.vertices; start += 1) {
    if (seen.has(start)) continue;
    count += 1;
    const queue = [start];
    seen.add(start);
    for (let index = 0; index < queue.length; index += 1) {
      for (const next of adjacent[queue[index]]) if (!seen.has(next)) { seen.add(next); queue.push(next); }
    }
  }
  return count;
}
function acyclic(graph) {
  const parent = Array.from({ length: graph.vertices }, (_, value) => value);
  const find = (value) => {
    while (parent[value] !== value) { parent[value] = parent[parent[value]]; value = parent[value]; }
    return value;
  };
  for (const [left, right] of graph.edges) {
    const a = find(left); const b = find(right);
    if (a === b) return false;
    parent[a] = b;
  }
  return true;
}
function adjacency(graph) {
  const out = Array.from({ length: graph.vertices }, () => []);
  for (const [left, right] of graph.edges) { out[left].push(right); out[right].push(left); }
  return out;
}
function complement(graph) {
  const existing = new Set(graph.edges.map(([a, b]) => `${a}:${b}`));
  const edges = [];
  for (let a = 0; a < graph.vertices; a += 1) for (let b = a + 1; b < graph.vertices; b += 1) if (!existing.has(`${a}:${b}`)) edges.push([a, b]);
  return { vertices: graph.vertices, edges };
}
function induced(graph, subset) {
  const map = new Map(subset.map((vertex, index) => [vertex, index]));
  return { vertices: subset.length, edges: graph.edges.filter(([a, b]) => map.has(a) && map.has(b)).map(([a, b]) => [map.get(a), map.get(b)]) };
}
function sameEdges(left, right) {
  if (left.vertices !== right.vertices || left.edges.length !== right.edges.length) return false;
  const edges = new Set(left.edges.map(([a, b]) => `${a}:${b}`));
  return right.edges.every(([a, b]) => edges.has(`${a}:${b}`));
}
function counterexample(claim, graph, subset = null) {
  const subsetText = subset ? `, subset {${subset.join(',')}}` : '';
  return { ok: false, summary: `${claim} fails for V=${graph.vertices}, E={${graph.edges.map(([a, b]) => `${a}-${b}`).join(',')}}${subsetText}` };
}
function boundedInteger(value, fallback, min, max) {
  const numeric = Number(value ?? fallback);
  if (!Number.isInteger(numeric) || numeric < min || numeric > max) throw new Error(`bound must be an integer from ${min} to ${max}`);
  return numeric;
}
function normalise(value) { return value.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim(); }
function option(flag) { const index = argv.indexOf(flag); return index >= 0 ? argv[index + 1] : undefined; }
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function usage() { console.error('usage: node tools/finite-smoke.mjs <contract.json> [--items id,id] [--json] | --self-test'); process.exit(2); }
function finish() {
  const result = { ok: errors.length === 0, errors, outcomes };
  if (asJson) console.log(JSON.stringify(result, null, 2));
  else {
    for (const outcome of outcomes) console.log(`${outcome.ok ? 'PASS' : 'FAIL'} [${outcome.id}] ${outcome.check}: ${outcome.summary}`);
    for (const error of errors) console.error(`ERROR ${error.code}${error.id ? ` [${error.id}]` : ''}: ${error.message}`);
    // The coverage ratio is the honest half of the count: "1 check" over 291
    // items read exactly like "291 checks" to a bare floor, and 1/291 is what
    // the real frontier-14 contracts carried. The ratio does not gate here —
    // whether a proof ADMITS a bounded countermodel search is a judgment, and
    // a quota invites padding — but it is now visible to every reader.
    const scoped = Array.isArray(document?.scope) ? ids.length : 0;
    const withChecks = Array.isArray(document?.scope)
      ? ids.filter((id) => (document.contracts?.[id]?.finite_smoke ?? []).length).length : 0;
    console.log(`finite-smoke: ${errors.length} error(s), ${outcomes.length} check(s) over ${withChecks}/${scoped} item(s) carrying obligations`);
  }
  process.exit(errors.length ? 1 : 0);
}
