// Bounded QC11/QC13 fixtures. These computations are not general proof checks.
// Exact computations use Z[omega,1/2], omega^4=-1, with BigInt coefficients.
import { readFileSync } from 'node:fs';
const result = (ok, summary) => ({ ok, summary });
const descriptiveKeys = new Set(['check', 'asserts', 'claim', 'checked_in', 'case', 'result', 'id', 'name', 'status', 'evidence', 'command']);
const safe = (fn, fixtureKeys) => smoke => {
  try {
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) return result(false, 'expected an obligation object');
    const unsupported = Object.keys(smoke).filter(key => !descriptiveKeys.has(key) && !fixtureKeys.includes(key));
    if (unsupported.length) return result(false, `unsupported fixture parameter(s): ${unsupported.join(', ')}`);
    return fn(smoke);
  } catch (error) { return result(false, `finite fixture computation failed: ${error.message}`); }
};
function fixed(s, name, value) { return s[name] === undefined || s[name] === value; }
function ring(coefficients, d = 0) {
  let a = coefficients.map(BigInt);
  while (d > 0 && a.every(x => x % 2n === 0n)) { a = a.map(x => x / 2n); d--; }
  return { a, d };
}
const ZERO = ring([0, 0, 0, 0]), ONE = ring([1, 0, 0, 0]);
const W = ring([0, 1, 0, 0]), SQRT2 = ring([0, 1, 0, -1]);
function add(x, y) {
  const d = Math.max(x.d, y.d);
  return ring(x.a.map((v, i) => (v << BigInt(d - x.d)) + (y.a[i] << BigInt(d - y.d))), d);
}
const neg = x => ring(x.a.map(v => -v), x.d);
function mul(x, y) {
  const a = Array(4).fill(0n);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) a[(i + j) % 4] += (i + j < 4 ? 1n : -1n) * x.a[i] * y.a[j];
  return ring(a, x.d + y.d);
}
const conjugate = x => ring([x.a[0], -x.a[3], -x.a[2], -x.a[1]], x.d);
const norm = x => mul(conjugate(x), x);
const key = x => `${x.d}:${x.a.join(',')}`;
const equal = (x, y) => key(x) === key(y);
const half = x => ring(x.a, x.d + 1);
const divideSqrt2 = x => half(mul(x, SQRT2));
function powW(k) {
  let x = ONE;
  for (let j = 0; j < ((k % 8) + 8) % 8; j++) x = mul(x, W);
  return x;
}
function sde(x) {
  if (equal(x, ZERO)) return -Infinity;
  let y = x, r = 0;
  // All callers have bounded dyadic inputs. Positive multiplication clears
  // denominators; negative division finds the exact integral valuation.
  while (y.d > 0 && r <= 128) { y = mul(y, SQRT2); r++; }
  if (r > 128) throw Error('sde bound exceeded');
  for (let j = 0; j < 128; j++) {
    const z = divideSqrt2(y);
    if (z.d > 0) return r;
    y = z; r--;
  }
  throw Error('valuation bound exceeded');
}
const columnKey = v => v.map(key).join('|');
function columnGate(v, gate) {
  if (gate === 'H') return [divideSqrt2(add(v[0], v[1])), divideSqrt2(add(v[0], neg(v[1])))];
  if (gate === 'T') return [v[0], mul(W, v[1])];
  if (gate === 'Td') return [v[0], mul(powW(-1), v[1])];
  throw Error('unknown exact gate');
}
function* vectors(bound) {
  for (let a = -bound; a <= bound; a++) for (let b = -bound; b <= bound; b++)
    for (let c = -bound; c <= bound; c++) for (let d = -bound; d <= bound; d++) yield ring([a, b, c, d]);
}
let baseCache;
function baseTable() {
  if (baseCache) return baseCache;
  const entries = new Map();
  for (let k = 0; k <= 2; k++) for (let z of vectors(2)) {
    for (let j = 0; j < k; j++) z = divideSqrt2(z);
    entries.set(key(z), z);
  }
  const byNorm = new Map();
  for (const z of entries.values()) {
    const n = norm(z);
    if (sde(n) > 3) continue;
    const k = key(n);
    if (!byNorm.has(k)) byNorm.set(k, []);
    byNorm.get(k).push(z);
  }
  const targets = new Map();
  for (const u of entries.values()) {
    const nu = norm(u);
    if (sde(nu) > 3) continue;
    for (const v of byNorm.get(key(add(ONE, neg(nu)))) ?? []) targets.set(columnKey([u, v]), [u, v]);
  }
  if (entries.size !== 1537 || targets.size !== 208) throw Error(`base enumeration sizes ${entries.size},${targets.size}`);
  const start = [ONE, ZERO], first = columnKey(start);
  const seen = new Map([[first, { column: start, word: [] }]]);
  let front = [first], found = new Map();
  for (let depth = 0; depth <= 18; depth++) {
    const next = [];
    for (const k of front) {
      const state = seen.get(k);
      if (targets.has(k)) found.set(k, state.word);
      for (const gate of ['H', 'T', 'Td']) {
        const column = columnGate(state.column, gate), nk = columnKey(column);
        if (!seen.has(nk)) {
          seen.set(nk, { column, word: [...state.word, gate] }); next.push(nk);
          if (seen.size > 100000) throw Error('bounded BFS state limit exceeded');
        }
      }
    }
    if (found.size === targets.size) break;
    front = next;
  }
  if (found.size !== targets.size) throw Error(`only ${found.size} base columns reached`);
  let longest = 0;
  for (const [k, word] of found) {
    let v = start;
    for (const gate of word) v = columnGate(v, gate);
    if (columnKey(v) !== k) throw Error('exact stored-word replay mismatch');
    longest = Math.max(longest, word.length);
  }
  if (longest !== 16 || seen.size !== 7660) throw Error(`unexpected shortest-word/search counts ${longest},${seen.size}`);
  const distribution = new Map();
  for (const [u] of targets.values()) {
    const exponent = sde(norm(u)); distribution.set(exponent, (distribution.get(exponent) ?? 0) + 1);
  }
  for (const [exponent, count] of [[-Infinity, 8], [0, 8], [2, 64], [3, 128]]) {
    if (distribution.get(exponent) !== count) throw Error('base exponent distribution mismatch');
  }
  baseCache = { targets, words: found, states: seen.size, longest };
  return baseCache;
}

// Floating matrices are used only for the three explicitly bounded Cartan
// fixtures. Construct exp(i(aXX+bYY+cZZ)) by its convergent power series,
// independently of the parity-block formula or the proposed circuit product.
const cadd = (x, y) => [x[0] + y[0], x[1] + y[1]];
const cmul = (x, y) => [x[0] * y[0] - x[1] * y[1], x[0] * y[1] + x[1] * y[0]];
const cscale = (x, a) => [a * x[0], a * x[1]];
const matrix = (n, f) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => f(i, j)));
const identity = n => matrix(n, (i, j) => [i === j ? 1 : 0, 0]);
function mm(a, b) { return matrix(a.length, (i, j) => a[i].reduce((s, v, k) => cadd(s, cmul(v, b[k][j])), [0, 0])); }
function kron(a, b) { return matrix(a.length * b.length, (i, j) => cmul(a[Math.floor(i / b.length)][Math.floor(j / b.length)], b[i % b.length][j % b.length])); }
const pauli = {
  x: [[[0, 0], [1, 0]], [[1, 0], [0, 0]]],
  y: [[[0, 0], [0, -1]], [[0, 1], [0, 0]]],
  z: [[[1, 0], [0, 0]], [[0, 0], [-1, 0]]],
};
function rotation(axis, t) { return matrix(2, (i, j) => cadd([i === j ? Math.cos(t / 2) : 0, 0], cmul([0, -Math.sin(t / 2)], pauli[axis][i][j]))); }
function cnot(control, target) { return matrix(4, (i, j) => [i === (j ^ (((j >> (1 - control)) & 1) << (1 - target))) ? 1 : 0, 0]); }
function cartanCheck(s) {
  if (!fixed(s, 'fixture', 'qc11-three-cartan-triples-v1')) return result(false, 'unsupported Cartan fixture');
  const triples = [[0.23, -0.4, 0.71], [0, 0, 0], [Math.PI / 4, Math.PI / 8, -Math.PI / 5]];
  let residual = 0;
  for (const [a, b, c] of triples) {
    const xx = kron(pauli.x, pauli.x), yy = kron(pauli.y, pauli.y), zz = kron(pauli.z, pauli.z);
    const exponent = matrix(4, (i, j) => cmul([0, 1], cadd(cadd(cscale(xx[i][j], a), cscale(yy[i][j], b)), cscale(zz[i][j], c))));
    let term = identity(4), exponential = identity(4);
    for (let k = 1; k <= 80; k++) {
      term = mm(term, exponent).map(row => row.map(z => cscale(z, 1 / k)));
      exponential = matrix(4, (i, j) => cadd(exponential[i][j], term[i][j]));
    }
    const I = identity(2);
    const factors = [kron(rotation('z', Math.PI / 2), I), cnot(1, 0), kron(I, rotation('y', Math.PI / 2 - 2 * b)), cnot(0, 1), kron(rotation('z', Math.PI / 2 - 2 * c), rotation('y', 2 * a - Math.PI / 2)), cnot(1, 0), kron(I, rotation('z', -Math.PI / 2))];
    let circuit = identity(4);
    for (const f of factors) circuit = mm(circuit, f);
    const phase = [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)];
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const z = cmul(phase, circuit[i][j]);
      residual = Math.max(residual, Math.hypot(z[0] - exponential[i][j][0], z[1] - exponential[i][j][1]));
    }
  }
  return result(Number.isFinite(residual) && residual < 1e-12, `3 fixed Cartan triples, direct 80-term matrix exponential versus three-CNOT product; max residual ${residual}; finite numerical consistency only`);
}
function twoLevel(s) {
  if (!fixed(s, 'fixture', 'qc11-two-level-00-01-v1')) return result(false, 'unsupported two-level fixture');
  const h = divideSqrt2(ONE), zero = () => ZERO;
  const a = Array.from({ length: 4 }, () => Array.from({ length: 4 }, zero));
  // Generate columns from the declared active-pair action.
  a[0][0] = h; a[1][0] = h; a[0][1] = neg(h); a[1][1] = h; a[2][2] = ONE; a[3][3] = ONE;
  const target = [[h, neg(h), ZERO, ZERO], [h, h, ZERO, ZERO], [ZERO, ZERO, ONE, ZERO], [ZERO, ZERO, ZERO, ONE]];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    let inner = ZERO;
    for (let k = 0; k < 4; k++) inner = add(inner, mul(conjugate(a[k][i]), a[k][j]));
    if (!equal(inner, i === j ? ONE : ZERO) || !equal(a[i][j], target[i][j])) return result(false, 'two-level column/orthogonality mismatch');
  }
  return result(true, 'all 16 exact matrix entries and all 16 column inner products checked, active pair 00/01 and identity complement');
}
const TOFFOLI = [['H', 2], ['C', 1, 2], ['P', 2, -1], ['C', 0, 2], ['P', 2, 1], ['C', 1, 2], ['P', 2, -1], ['C', 0, 2], ['P', 1, 1], ['P', 2, 1], ['H', 2], ['C', 0, 1], ['P', 0, 1], ['P', 1, -1], ['C', 0, 1]];
function stateGate(state, [op, q, p]) {
  const out = Array(8).fill(ZERO), bit = 1 << (2 - q);
  if (op === 'H') {
    for (let i = 0; i < 8; i++) if (!(i & bit)) {
      out[i] = divideSqrt2(add(state[i], state[i | bit]));
      out[i | bit] = divideSqrt2(add(state[i], neg(state[i | bit])));
    }
  } else if (op === 'P') {
    for (let i = 0; i < 8; i++) out[i] = i & bit ? mul(powW(p), state[i]) : state[i];
  } else if (op === 'C') {
    for (let i = 0; i < 8; i++) out[i & bit ? i ^ (1 << (2 - p)) : i] = state[i];
  } else throw Error('unsupported three-wire operation');
  return out;
}
function applyWord(state, word) { for (const g of word) state = stateGate(state, g); return state; }
function exactToffoli(s) {
  if (!fixed(s, 'wires', 3)) return result(false, 'expected exactly three wires');
  // Recognize the complete current procedure, not an intended missing gate.
  // Reject unrecognized instructions instead of silently simulating a variant.
  const source = readFileSync(new URL('../items/alg-qc-controlled-t-clean-ancilla-circuit.md', import.meta.url), 'utf8');
  const definition = source.split('## Definition')[1]?.split('## Remarks')[0] ?? '';
  const actual = definition.match(/^1\.[\s\S]*?(?=\n\nThe 15-gate word)/m)?.[0]?.replace(/\s+/g, ' ').trim();
  const expected = String.raw`1. $H_t$.
2. $\operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t},T_t,
   \operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t}$.
3. $T_b,T_t,H_t$.
4. $\operatorname{CNOT}_{a,b},T_a,T_b^\dagger,\operatorname{CNOT}_{a,b}$.
5. $T_t$.
6. Apply the same 15-gate word from steps 1–4 again.`.replace(/\s+/g, ' ').trim();
  if (actual !== expected) return result(false, 'actual controlled-T procedure does not match the recognized compute-T-uncompute instructions, including the middle T_t');
  for (let input = 0; input < 8; input++) {
    const state = Array(8).fill(ZERO); state[input] = ONE;
    const output = applyWord(state, TOFFOLI), dest = input ^ ((input & 6) === 6 ? 1 : 0);
    if (output.some((z, i) => !equal(z, i === dest ? ONE : ZERO))) return result(false, `Toffoli phase/output mismatch at ${input}`);
    if ((input & 1) === 0) {
      const computed = applyWord(state, [...TOFFOLI, ['P', 2, 1], ...TOFFOLI]);
      const expectedPhase = powW((input & 6) === 6 ? 1 : 0);
      if (computed.some((z, i) => !equal(z, i === input ? expectedPhase : ZERO))) return result(false, `compute-T-uncompute mismatch at ${input}`);
    }
  }
  return result(true, 'all 8 Toffoli basis inputs have exact phase 1; all 4 clean-input compute-T-uncompute cases have exact controlled-T phase and restored ancilla');
}
const mod = (n, p) => ((n % p) + p) % p;
function normPQ(v) {
  // Multiply in the integral power basis, rather than assuming the displayed
  // P,Q formulas being checked by the residue argument.
  const conj = [v[0], -v[3], -v[2], -v[1]], out = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) out[(i + j) % 4] += (i + j < 4 ? 1 : -1) * v[i] * conj[j];
  if (out[2] !== 0 || out[3] !== -out[1]) throw Error('non-real norm');
  return [mod(out[0], 8), mod(out[1], 8)];
}
function valuation5(P, Q) {
  // Exact successive sqrt(2) divisions: (P+Q sqrt(2))/sqrt(2)
  // = Q + (P/2)sqrt(2). Five decisions depend only on P,Q modulo 8.
  let v = 0;
  while (v < 5 && P % 2 === 0) { [P, Q] = [Q, P / 2]; v++; }
  return v;
}
function rotate(v, k) {
  let a = [...v];
  for (let i = 0; i < mod(k, 8); i++) a = [-a[3], a[0], a[1], a[2]];
  return a;
}
function residues(s) {
  if (!fixed(s, 'modulus', 8)) return result(false, 'residue fixture requires modulus 8');
  const groups = new Map(); let primitive = 0;
  for (let a = 0; a < 8; a++) for (let b = 0; b < 8; b++) for (let c = 0; c < 8; c++) for (let d = 0; d < 8; d++) {
    const x = [a, b, c, d], [P, Q] = normPQ(x), j = valuation5(P, Q);
    if (j > 1) continue;
    const k = `${j},${P},${Q}`;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(x); primitive++;
  }
  let pairs = 0, positive = 0, negative = 0;
  for (const [k, xs] of groups) {
    const [j, P, Q] = k.split(',').map(Number);
    for (const x of xs) for (const y of groups.get(`${j},${mod(-P, 8)},${mod(-Q, 8)}`) ?? []) {
      pairs++;
      for (const sign of [-1, 1]) {
        const attained = new Set();
        for (let k = 0; k < 4; k++) {
          const wy = rotate(y, sign * k), z = x.map((a, i) => mod(a + wy[i], 8));
          attained.add(valuation5(...normPQ(z)));
        }
        for (let d = 1; d <= 3; d++) {
          if (!attained.has(j + d)) return result(false, `residue descent fails at x=${x}; y=${y}; j=${j},d=${d},sign=${sign}`);
          if (sign < 0) negative++; else positive++;
        }
      }
    }
  }
  return result(primitive === 3072 && pairs === 393216 && positive === 1179648 && negative === 1179648, `${primitive} primitive residue vectors; ${pairs} compatible pairs; ${negative} negative-power and ${positive} positive-power targets checked exhaustively modulo 8`);
}
function boundary(s) {
  if (!fixed(s, 'coefficient_bound', 2)) return result(false, 'boundary fixture requires coefficient bound 2');
  const values = [...vectors(2)], byNorm = new Map();
  for (const x of values) {
    const k = key(norm(x)); if (!byNorm.has(k)) byNorm.set(k, []); byNorm.get(k).push(x);
  }
  const four = ring([4, 0, 0, 0]); let count = 0;
  for (const x of values) {
    const nx = norm(x);
    if (sde(half(half(nx))) !== 4) continue;
    for (const y of byNorm.get(key(add(four, neg(nx)))) ?? []) {
      let good = false;
      for (let k = 0; k < 4; k++) {
        const z = divideSqrt2(half(add(x, mul(powW(-k), y))));
        if (sde(norm(z)) === 3) good = true;
      }
      if (!good) return result(false, `sde-4 boundary lacks descent: ${key(x)},${key(y)}`);
      count++;
    }
  }
  return result(count === 256, `${count} normalized coefficient-bound-2 columns at squared-entry sde 4; each has an exact negative-power descent to 3`);
}
function base(s) {
  if (!fixed(s, 'coefficient_bound', 2) || !fixed(s, 'maximum_entry_exponent', 2)) return result(false, 'base fixture requires coefficient bound 2 and entry exponents 0..2');
  const t = baseTable();
  return result(true, `${t.targets.size} independently enumerated base columns reached and exact stored words replayed; maximum shortest length ${t.longest}; ${t.states} BFS states; bounded table only`);
}
function compilerBase(s) {
  if (!fixed(s, 'coefficient_bound', 2) || !fixed(s, 'phase_order', 8)) return result(false, 'compiler fixture requires bound 2 and phase order 8');
  const t = baseTable(); let cases = 0;
  for (const [k, target] of t.targets) {
    let first = [ONE, ZERO], second = [ZERO, ONE];
    for (const g of t.words.get(k)) { first = columnGate(first, g); second = columnGate(second, g); }
    for (let j = 0; j < 8; j++) {
      // Independently complete the target first column to a unitary of
      // determinant omega^j, then solve W*U's remaining scalar phase.
      const phase = powW(j), desired = [mul(neg(conjugate(target[1])), phase), mul(conjugate(target[0]), phase)];
      const lambda = add(mul(conjugate(second[0]), desired[0]), mul(conjugate(second[1]), desired[1]));
      const power = Array.from({ length: 8 }, (_, q) => q).find(q => equal(lambda, powW(q)));
      if (power === undefined || first.some((z, i) => !equal(z, target[i])) || second.some((z, i) => !equal(mul(z, powW(power)), desired[i]))) return result(false, `terminal matrix phase correction fails for ${k},phase=${j}`);
      cases++;
    }
  }
  return result(cases === 1664, `${cases} exact terminal compiler matrices (208 base columns times 8 determinant phases); replayed words and solved/reconstructed the remaining T phase`);
}
function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }
function polynomialQuotient(numerator, denominator) {
  const r = numerator.slice(), q = Array(Math.max(0, r.length - denominator.length + 1)).fill(0n);
  for (let k = r.length - denominator.length; k >= 0; k--) {
    if (denominator.at(-1) !== 1n) throw Error('nonmonic polynomial divisor');
    q[k] = r[k + denominator.length - 1];
    for (let j = 0; j < denominator.length; j++) r[k + j] -= q[k] * denominator[j];
  }
  if (r.some(x => x !== 0n)) throw Error('cyclotomic division left nonzero remainder');
  while (q.length > 1 && q.at(-1) === 0n) q.pop();
  return q;
}
function periodDegree(s) {
  if (!fixed(s, 'period', 8) || !fixed(s, 'target_order', 64)) return result(false, 'period/degree fixture requires orders 8 and 64');
  for (let k = 1; k <= 8; k++) if (equal(powW(k), ONE) !== (k === 8)) return result(false, `unexpected T period at ${k}`);
  const cache = new Map();
  function phi(n) {
    if (cache.has(n)) return cache.get(n);
    let p = Array(n + 1).fill(0n); p[0] = -1n; p[n] = 1n;
    for (let d = 1; d < n; d++) if (n % d === 0) p = polynomialQuotient(p, phi(d));
    cache.set(n, p); return p;
  }
  for (const [n, degree] of [[8, 4], [64, 32]]) {
    const p = phi(n), totient = Array.from({ length: n }, (_, i) => i).filter(i => gcd(i, n) === 1).length;
    if (p.length - 1 !== degree || totient !== degree || p[0] !== 1n || p[degree] !== 1n || p.slice(1, -1).some(x => x !== 0n)) return result(false, `cyclotomic polynomial/degree mismatch for ${n}`);
  }
  return result(true, 'exact T powers 1..8; independent integer polynomial division gives Phi_8=x^4+1 and Phi_64=x^32+1, with 4 and 32 coprime residues; irreducibility remains a cited theorem');
}
export const quantumQCChecks = {
  'qc-cartan-three-cnot-matrix': safe(cartanCheck, ['fixture']),
  'qc-generic-cnot-lower-bound-n2': safe(s => {
    if (!fixed(s, 'n', 2)) return result(false, 'lower-bound fixture requires n=2');
    const n = 2, dimension = 4 ** n, M = Math.ceil((dimension - 3 * n - 1) / 4);
    const below = [0, 1, 2].every(m => 3 * n + 4 * m + 1 < dimension), at = 3 * n + 4 * M + 1;
    return result(M === 3 && below && at >= dimension, `n=2: ceiling bound ${M}; all m=0,1,2 have dimension below ${dimension}, m=3 gives ${at}; no measure claim checked`);
  }, ['n']),
  'qc-two-level-example-matrix': safe(twoLevel, ['fixture']),
  'qc-three-wire-toffoli-exact': safe(exactToffoli, ['wires']),
  'qc-clifford-t-mod8-residue-descent': safe(residues, ['modulus']),
  'qc-clifford-t-sde4-boundary': safe(boundary, ['coefficient_bound']),
  'qc-clifford-t-base-column-table': safe(base, ['coefficient_bound', 'maximum_entry_exponent']),
  'qc-clifford-t-compiler-base-table': safe(compilerBase, ['coefficient_bound', 'phase_order']),
  'qc-clifford-t-period-and-degree': safe(periodDegree, ['period', 'target_order']),
};
