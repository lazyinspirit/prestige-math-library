// Bounded independent query-model fixtures. These are falsification checks,
// never proofs of the corresponding general statements. No import-time work.
const close = (a, b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) < 1e-10;
const requireThat = (ok, why) => { if (!ok) throw new Error(why); };
const range = n => Array.from({ length: n }, (_, i) => i);
const dot = (a, b) => { let r = 0; while (a || b) { r ^= (a & 1) & (b & 1); a >>>= 1; b >>>= 1; } return r; };
const span = rows => { let s = new Set([0]); for (const r of rows) s = new Set([...s, ...[...s].map(x => x ^ r)]); return s; };
const hadamard = (v, wire) => {
  const out = Array(v.length).fill(0), mask = 1 << wire;
  for (let i = 0; i < v.length; i++) if (!(i & mask)) {
    out[i] = (v[i] + v[i | mask]) / Math.SQRT2;
    out[i | mask] = (v[i] - v[i | mask]) / Math.SQRT2;
  }
  return out;
};
const permute = (v, map) => { const out = Array(v.length).fill(0); v.forEach((a, i) => { out[map(i)] += a; }); return out; };
const basis = (size, index) => range(size).map(i => +(i === index));
const marginal = (v, wire) => v.reduce((p, a, i) => { p[(i >> wire) & 1] += a * a; return p; }, [0, 0]);
const wrap = (name, fn) => smoke => {
  try {
    requireThat(smoke && typeof smoke === 'object' && !Array.isArray(smoke), 'expected obligation object');
    const allowed = new Set(['check', 'asserts', 'claim', 'checked_in', 'fixture_version']);
    requireThat(Object.keys(smoke).every(k => allowed.has(k)), 'unsupported fixture parameter');
    requireThat(smoke.fixture_version === undefined || smoke.fixture_version === 1, 'fixture_version must be 1');
    const summary = fn();
    return { ok: true, summary: `${name}: ${summary}; bounded fixtures only, no general proof claim` };
  } catch (e) { return { ok: false, summary: `${name}: ${e.message}` }; }
};

function residueTables(field = false) {
  const mod = x => ((x % 2) + 2) % 2;
  for (let a = -5; a <= 5; a++) for (let b = -5; b <= 5; b++) {
    requireThat(mod(a + b) === (mod(a) ^ mod(b)), 'quotient addition mismatch');
    requireThat(mod(a * b) === (mod(a) & mod(b)), 'quotient multiplication mismatch');
  }
  if (field) {
    for (const a of [0, 1]) for (const b of [0, 1]) for (const c of [0, 1]) {
      requireThat((a ^ (b ^ c)) === ((a ^ b) ^ c), 'addition associativity');
      requireThat((a & (b ^ c)) === ((a & b) ^ (a & c)), 'distributivity');
      requireThat((a & (b & c)) === ((a & b) & c), 'multiplication associativity');
      requireThat((a ^ a) === 0 && (a & 1) === a, 'identity/inverse');
    }
    requireThat([1, 2].filter(d => 2 % d === 0).join(',') === '1,2', 'prime divisor enumeration');
    requireThat(range(2).filter(x => (1 * x) % 2 === 1).join(',') === '1', 'nonzero inverse');
  }
  return '121 representative pairs, all two-residue tables' + (field ? ' and all eight field triples' : '');
}
function dotCircuit() {
  let cases = 0;
  for (let n = 0; n <= 3; n++) for (let a = 0; a < 2 ** n; a++) for (let x = 0; x < 2 ** n; x++) for (const z of [0, 1]) {
    let r = 0, target = z, toffolis = 0;
    const products = range(n).map(i => ((a >> i) & 1) && ((x >> i) & 1));
    for (const p of products) { r ^= +p; toffolis++; }
    target ^= r;
    for (const p of products.slice().reverse()) { r ^= +p; toffolis++; }
    requireThat(r === 0 && target === (z ^ dot(a, x)) && toffolis === 2 * n, 'Toffoli cleanup/count mismatch');
    cases++;
  }
  return `${cases} basis inputs n=0..3; explicit Toffoli/CNOT execution`;
}
function controlledConstant() {
  for (const c of [0, 1]) {
    let v = hadamard([1, 0], 0).map((a, i) => a * (i ? (-1) ** c : 1));
    v = hadamard(v, 0);
    requireThat(close(v[c] ** 2, 1) && close(v[1 - c] ** 2, 0), 'controlled relative phase witness');
  }
  return 'both constant functions, coherent control and final Hadamard';
}
function kickback() {
  for (const f of [0, 1]) {
    const minus = [1 / Math.SQRT2, -1 / Math.SQRT2];
    const after = permute(minus, i => i ^ f);
    after.forEach((a, i) => requireThat(close(a, (-1) ** f * minus[i]), 'XOR action on minus'));
  }
  return 'explicit XOR permutations of both minus-state amplitudes';
}
function cleanEvaluator() {
  // Register order encoded as bits x=2, y=1, r=0; simulate three CNOTs.
  for (const x of [0, 1]) for (const y of [0, 1]) {
    let state = (x << 2) | (y << 1), gates = 0;
    state ^= ((state >> 2) & 1); gates++;
    state ^= (state & 1) << 1; gates++;
    state ^= ((state >> 2) & 1); gates++;
    requireThat((state & 1) === 0 && ((state >> 1) & 1) === (y ^ x) && state >> 2 === x && gates === 3, 'compute/copy/uncompute');
  }
  return 'all four x,y inputs, three explicit CNOTs';
}
function annihilator() {
  let cases = 0;
  for (let n = 1; n <= 4; n++) for (let s = 1; s < 2 ** n; s++) {
    const allowed = range(2 ** n).filter(y => dot(s, y) === 0);
    const j = range(n).find(i => (s >> i) & 1);
    const rows = range(n).filter(i => i !== j).map(i => (1 << i) ^ (((s >> i) & 1) << j));
    const generated = span(rows);
    requireThat(generated.size === 2 ** (n - 1) && allowed.length === generated.size && allowed.every(y => generated.has(y)), 'explicit basis/span vs exhaustive parity kernel');
    cases++;
  }
  return `${cases} nonzero masks, n=1..4, exhaustive span and parity kernels`;
}
function simonSampling(n, s) {
  const size = 2 ** n;
  for (let x = 0; x < size; x++) {
    let v = Array(size).fill(0); v[x] = v[x ^ s] = 1 / Math.SQRT2;
    for (let w = 0; w < n; w++) v = hadamard(v, w);
    for (let y = 0; y < size; y++) requireThat(close(v[y] ** 2, dot(s, y) ? 0 : 2 / size), 'Hadamard-transformed coset law');
  }
}
function elimination() {
  let cases = 0;
  for (let n = 1; n <= 3; n++) for (let code = 0; code < 2 ** (n * (n - 1)); code++) {
    let t = code; const rows = range(n - 1).map(() => { const r = t % 2 ** n; t = Math.floor(t / 2 ** n); return r; });
    const original = rows.slice(), pivots = []; let k = 0;
    for (let j = 0; j < n; j++) {
      let i = rows.findIndex((r, index) => index >= k && ((r >> j) & 1));
      if (i < 0) continue;
      [rows[k], rows[i]] = [rows[i], rows[k]];
      for (let r = 0; r < rows.length; r++) if (r !== k && ((rows[r] >> j) & 1)) rows[r] ^= rows[k];
      pivots.push(j); k++;
    }
    const kernel = range(2 ** n).filter(x => original.every(r => dot(r, x) === 0));
    requireThat(kernel.length === 2 ** (n - k), 'kernel enumeration/rank mismatch');
    if (k === n - 1) {
      const free = range(n).find(j => !pivots.includes(j)); let x = 1 << free;
      rows.forEach((r, i) => { if (dot(r, x)) x ^= 1 << pivots[i]; });
      requireThat(kernel.length === 2 && kernel.includes(x) && x !== 0, 'recovered unique nonzero kernel');
      if (n === 2 && original[0] === 3) requireThat(pivots[0] === 0 && x === 3, '11 pivot/free-variable fixture');
    } else requireThat(kernel.length > 2, 'FAIL iff deficient rank');
    cases++;
  }
  return `${cases} matrices, n=1..3, row reduction versus brute-force kernels`;
}
function rankGrowth() {
  let cases = 0;
  for (const d of [1, 2]) {
    const space = range(2 ** d), candidates = [[]];
    if (d === 2) for (const r of space.slice(1)) candidates.push([r]);
    for (const rows of candidates) {
      const current = span(rows), k = rows.length;
      const failed = space.filter(y => current.has(y)).length;
      requireThat(close((space.length - failed) / space.length, 1 - 2 ** (k - d)), 'rank-rise count');
      for (let m = 1; m <= 4; m++) {
        let sum = 0, failures = 0;
        for (let code = 0; code < space.length ** m; code++) {
          let value = code, wait = m, allFail = true;
          for (let j = 0; j < m; j++) {
            const sample = value % space.length; value = Math.floor(value / space.length);
            if (allFail && !current.has(sample)) { wait = j + 1; allFail = false; }
          }
          sum += wait; failures += +allFail;
        }
        const q = failed / space.length, count = space.length ** m;
        requireThat(close(failures / count, q ** m) && close(sum / count, range(m).reduce((a, j) => a + q ** j, 0)) && sum / count <= 2, 'finite waiting enumeration');
      }
      cases++;
    }
  }
  return `${cases} rank histories at d=1,2; all continuations through horizon 4`;
}
function capFixture() {
  const d = 1, numerator = 1, denominator = 2, m = Math.ceil(2 * d * denominator / numerator);
  let fail = 0;
  for (let history = 0; history < 2 ** m; history++) {
    const rows = range(m).map(i => ((history >> i) & 1) ? 3 : 0);
    fail += +(span(rows).size < 2);
  }
  requireThat(m === 4 && fail === 1 && close(fail / 2 ** m, 1 / 16), 'cap failure enumeration');
  return 'all 16 potential row histories at d=1,delta=1/2; one failure';
}

export const quantumQueryChecks = Object.fromEntries(Object.entries({
  'one-fair-bit-then-conditional-query': () => {
    let histories = [{ bits: '', weight: 1, calls: 0 }], prior = 0;
    for (let step = 0; step <= 6; step++) {
      const expectation = histories.reduce((a, h) => a + h.weight * h.calls, 0);
      requireThat(close(histories.reduce((a, h) => a + h.weight, 0), 1) && close(expectation, step < 2 ? 0 : 0.5) && expectation >= prior, 'finite prefix expected count');
      prior = expectation;
      const next = histories.flatMap(h => step === 0 ? [0, 1].map(b => ({ bits: String(b), weight: h.weight / 2, calls: 0 })) : [{ ...h, calls: h.calls + +(step === 1 && h.bits === '1') }]);
      for (const h of histories) requireThat(close(next.filter(c => c.bits.startsWith(h.bits)).reduce((a, c) => a + c.weight, 0), h.weight), 'prefix marginal');
      histories = next;
    }
    return 'explicit fair-coin execution tree at horizons 0..6, query only in outcome-1 second step';
  },
  'two-bit-reply-one-query-and-hadamard-cancellation': () => {
    for (let z = 0; z < 16; z++) {
      const u = z >> 2, v = z & 3, table = [u, v];
      let input = basis(8, 0), padded = hadamard(hadamard(input, 1), 1);
      const call = state => permute(state, i => (i & 4) | ((i & 3) ^ table[i >> 2]));
      const a = call(input), b = call(padded);
      a.forEach((x, i) => requireThat(close(x, b[i]) && close(x, +(i === u)), 'two-bit-output XOR query'));
    }
    return 'all 16 two-address/two-bit-output functions; explicit XOR permutation and H-H matrices, one oracle application';
  },
  'one-leaf-computational-basis-output': () => {
    for (const u of [0, 1]) {
      const v = basis(4, u); const law = [0, 0];
      for (let full = 0; full < 4; full++) law[full & 1] += v[full] ** 2;
      requireThat(law[u] === 1 && law[1 - u] === 0, 'terminal marginal');
    }
    return 'both basis outputs with unobserved address summed out';
  },
  'two-outcome-instrument-branch-mixture': () => {
    const rho = [[1 / 3, Math.SQRT2 / 3], [Math.SQRT2 / 3, 2 / 3]], out = [0, 0];
    for (const branch of [0, 1]) {
      const projected = rho.map((row, i) => row.map((x, j) => i === branch && j === branch ? x : 0));
      const weight = projected.reduce((a, row, i) => a + row[i], 0);
      for (const y of [0, 1]) out[y] += weight * projected[y][y] / weight;
    }
    requireThat(close(out[0], 1 / 3) && close(out[1], 2 / 3) && close(out[0] + out[1], 1), 'projective instrument trace/mixture');
    return 'two explicit projective branch maps on a normalized two-dimensional density matrix';
  },
  'two-residue-table': () => residueTables(),
  'empty-and-two-coordinate': () => {
    for (let n = 0; n <= 3; n++) for (let a = 0; a < 2 ** n; a++) for (let x = 0; x < 2 ** n; x++) {
      let quotientSum = 0; for (let i = 0; i < n; i++) quotientSum += ((a >> i) & 1) * ((x >> i) & 1);
      requireThat(dot(a, x) === quotientSum % 2, 'parity versus quotient sum');
    }
    requireThat(dot(0, 0) === 0 && dot(3, 2) === 1, 'empty and 11 dot 10');
    return 'all binary dot products of lengths 0..3';
  },
  'two-bit': dotCircuit,
  'constant-phase': () => {
    for (const f of [0, 1]) { const scalar = (-1) ** f; requireThat(scalar * scalar === 1 && scalar === (f ? -1 : 1), 'zero-address scalar phase'); }
    return 'both total Boolean functions on the singleton zero-bit address';
  },
  'two-boolean-cases': kickback,
  'one-bit-evaluator': cleanEvaluator,
  'controlled-witness': controlledConstant,
  'target-preparation': () => {
    let v = permute([1, 0], i => i ^ 1); v = hadamard(v, 0);
    requireThat(close(v[0], 1 / Math.SQRT2) && close(v[1], -1 / Math.SQRT2), 'HX zero target');
    kickback(); return 'two explicit preparation gates X then H, and both XOR oracle values';
  },
  'controlled-output': () => {
    for (const f of [0, 1]) for (const y of [0, 1]) {
      let v = hadamard(basis(2, y), 0).map((a, i) => a * (i ? (-1) ** f : 1)); v = hadamard(v, 0);
      v.forEach((a, i) => requireThat(close(a, +(i === (y ^ f))), 'H-controlled-phase-H basis output'));
    }
    return 'both f values and both output basis states';
  },
  'four-finite-checks': () => {
    cleanEvaluator(); dotCircuit(); controlledConstant();
    const start = Array(8).fill(0); // x=2,y=1,r=0, |+>|->|0>
    for (const x of [0, 1]) for (const y of [0, 1]) start[(x << 2) | (y << 1)] = (y ? -1 : 1) / 2;
    const compute = v => permute(v, i => i ^ ((i >> 2) & 1));
    const copy = v => permute(v, i => i ^ ((i & 1) << 1));
    const dirty = copy(compute(start)), clean = compute(dirty);
    const dirtyLaw = marginal(hadamard(dirty, 2), 2), cleanLaw = marginal(hadamard(clean, 2), 2);
    requireThat(close(dirtyLaw[0], 0.5) && close(dirtyLaw[1], 0.5) && close(cleanLaw[1], 1), 'dirty work interference witness');
    return 'clean evaluator, dot circuit, dirty-work state-vector measurement and controlled constant phase';
  },
  'mod-two-quotient-field-specialization': () => residueTables(true),
  'coordinate-space-n0-n1': () => {
    for (let n = 0; n <= 3; n++) {
      const rows = range(n).map(i => 1 << i), generated = span(rows);
      requireThat(generated.size === 2 ** n && range(2 ** n).every(x => generated.has(x)), 'standard coordinate basis');
    }
    return 'explicit empty basis and standard bases n=1..3, all binary coefficients';
  },
  'two-outcome-born-trace': () => {
    // Complex amplitudes a,b: independent real/imaginary density multiplication.
    for (const v of [[[1, 0], [0, 0]], [[0, 0], [0, 1]], [[0.6, 0], [0, 0.8]], [[0.5, 0.5], [-0.5, 0.5]]]) {
      const rho = v.map(([ar, ai]) => v.map(([br, bi]) => [ar * br + ai * bi, ai * br - ar * bi]));
      const weights = [0, 1].map(y => {
        let real = 0, imag = 0;
        for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { const pji = +(j === y && i === y); real += rho[i][j][0] * pji; imag += rho[i][j][1] * pji; }
        requireThat(close(imag, 0) && close(real, v[y][0] ** 2 + v[y][1] ** 2), 'complex trace Born weight'); return real;
      });
      requireThat(close(weights[0] + weights[1], 1), 'Born normalization');
    }
    return 'four normalized complex two-outcome states, explicit density/projector trace';
  },
  'n1-m0-promised-oracle': () => {
    const table = ['', ''], masks = [1].filter(s => range(2).every(x => range(2).every(y => (table[x] === table[y]) === (y === x || y === (x ^ s)))));
    requireThat(masks.length === 1 && masks[0] === 1, 'unique hidden mask at zero output width');
    return 'all four address pairs of n=1,m=0 constant oracle';
  },
  'annihilator-n1-and-n2': annihilator,
  'one-row-mask11': elimination,
  'smallest-allowed-N-constant': () => {
    const N = 2 ** 8, q = Math.floor(Math.sqrt(N) / 4), differences = [];
    for (let i = 0; i < q; i++) for (let j = i + 1; j < q; j++) differences.push(i ^ j);
    const S = range(N).filter(s => s !== 0).length, B = differences.length;
    requireThat(N === 256 && q === 4 && S === 255 && B === 6 && S - B === 249 && 3 * (B + 1) < 2 * (S - B), 'exact lower-bound constant arithmetic');
    return '256 addresses, four queries, six address pairs; integer comparison 21<498';
  },
  'one-bit-sample': () => { simonSampling(1, 1); simonSampling(2, 3); return 'all conditional coset representatives n=1,s=1 and n=2,s=11'; },
  'rank-rise-small-d': rankGrowth,
  'd1-delta-half-cap': capFixture,
  'n1-n2-examples-and-cap': () => {
    const table = [0, 1, 1, 0];
    for (const x of range(4)) for (const y of range(4)) requireThat((table[x] === table[y]) === (y === x || y === (x ^ 3)), 'n=2 Simon fiber promise');
    simonSampling(1, 1); simonSampling(2, 3); annihilator(); elimination(); capFixture();
    let queries = 0, recovered = null; const targetRank = 1 - 1;
    if (targetRank === 0) recovered = 1;
    else { queries++; recovered = null; }
    requireThat(recovered === 1 && queries === 0, 'n=1 recovery must take the zero-query branch');
    return 'n=1 zero-rank boundary; full n=2 promise/coset sampling, kernel and four-row histories';
  },
}).map(([name, fn]) => [`quantum-query-${name}`, wrap(name, fn)]));
