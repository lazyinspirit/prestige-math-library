// Research proposal only. Not executed. Bounded fixtures are falsification checks,
// not proofs, exact-backend executions, or universal convergence assertions.
import { q, qadd, qmul, qdiv, qcmp, close, solveDense } from './finite-smoke-numerical-core.mjs';
const gamma = 1 - 1 / Math.sqrt(2);
const tableaux = {
  be: { A: [[1]], b: [1], c: [1], p: 1 },
  sdirk: { A: [[gamma, 0], [1 - gamma, gamma]], b: [1 - gamma, gamma], c: [gamma, 1], p: 2 },
  radau: { A: [[5 / 12, -1 / 12], [3 / 4, 1 / 4]], b: [3 / 4, 1 / 4], c: [1 / 3, 1], p: 3 },
};
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const mv = (A, x) => A.map(r => dot(r, x));
const abs2 = ([x, y]) => x * x + y * y;
const div = ([a, b], [c, d]) => [(a * c + b * d) / (c * c + d * d), (b * c - a * d) / (c * c + d * d)];
// Solve the realified stage equations independently of the displayed R formula.
function stability(T, [x, y]) {
  const n = T.b.length, M = Array.from({ length: 2 * n }, () => Array(2 * n).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    M[i][j] = Number(i === j) - x * T.A[i][j];
    M[i][j + n] = y * T.A[i][j];
    M[i + n][j] = -y * T.A[i][j];
    M[i + n][j + n] = Number(i === j) - x * T.A[i][j];
  }
  const sol = solveDense(M, [...Array(n).fill(1), ...Array(n).fill(0)]);
  if (sol.status !== 'success') throw new Error('finite stage solve singular');
  const re = dot(T.b, sol.x.slice(0, n)), im = dot(T.b, sol.x.slice(n));
  return [1 + x * re - y * im, y * re + x * im];
}
function moments(T) {
  return [T.b.reduce((s, b) => s + b, 0), dot(T.b, T.c), dot(T.b, T.c.map(x => x * x)), dot(T.b, mv(T.A, T.c))];
}
function requireCase(ok, detail) { if (!ok) throw new Error(detail); }
function tableauFixture(name) {
  const T = tableaux[name], expected = name === 'sdirk' ? [1, .5] : [1, .5, 1 / 3, 1 / 6];
  const actual = moments(T);
  expected.forEach((v, i) => requireCase(close(actual[i], v, 1e-13), `${name} moment ${i}`));
  if (name === 'radau') {
    // Exact rational order moments supplement the binary64 stage samples.
    const A = [[q(5, 12), q(-1, 12)], [q(3, 4), q(1, 4)]], b = [q(3, 4), q(1, 4)], c = [q(1, 3), q(1)];
    const sum = xs => xs.reduce(qadd, q(0)), mulDot = (u, v) => sum(u.map((x, i) => qmul(x, v[i])));
    [sum(b), mulDot(b, c), mulDot(b, c.map(x => qmul(x, x))), mulDot(b, A.map(r => mulDot(r, c)))].forEach((v, i) => requireCase(qcmp(v, [q(1), q(1, 2), q(1, 3), q(1, 6)][i]) === 0, 'exact Radau moment'));
  }
  let samples = 0;
  for (const s of [0, .25, 1, 4, 100]) for (const t of [-3, -1, 0, .5, 2]) {
    const z = [-s, -t], R = stability(T, z);
    let numerator, denominator, expanded;
    if (name === 'sdirk') {
      const v = gamma * s, u = gamma * t;
      numerator = [1 - (1 - 2 * gamma) * s, -(1 - 2 * gamma) * t];
      denominator = [(1 + gamma * s) ** 2 - (gamma * t) ** 2, 2 * (1 + gamma * s) * gamma * t];
      expanded = (4 + 2 * Math.sqrt(2)) * v + 4 * v ** 2 + 4 * v ** 3 + v ** 4 + 4 * v * u ** 2 + 2 * v ** 2 * u ** 2 + u ** 4;
    } else {
      numerator = [1 - s / 3, -t / 3];
      denominator = [1 + 2 * s / 3 + (s * s - t * t) / 6, 2 * t / 3 + s * t / 3];
      expanded = 2 * s + 2 * s ** 2 / 3 + 2 * s ** 3 / 9 + s ** 4 / 36 + (2 * s / 9 + s * s / 18) * t * t + t ** 4 / 36;
    }
    const formula = div(numerator, denominator);
    requireCase(abs2(denominator) > 0 && R.every((v, i) => close(v, formula[i], 1e-10)), `${name} finite R stage/formula mismatch`);
    requireCase(close(abs2(denominator) - abs2(numerator), expanded, 1e-10) && expanded >= 0 && abs2(R) <= 1 + 1e-10, `${name} finite modulus identity`);
    samples++;
  }
  return `${name}: ${expected.length} moments and ${samples} closed-left-half-plane stage/formula/modulus samples; no universal or asymptotic stability conclusion`;
}
// Partial-pivot LU is retained and reused by chord corrections, not refactored.
function factor(A) {
  const n = A.length, L = A.map(r => r.slice()), perm = Array.from({ length: n }, (_, i) => i);
  for (let k = 0; k < n; k++) {
    let p = k; for (let i = k + 1; i < n; i++) if (Math.abs(L[i][k]) > Math.abs(L[p][k])) p = i;
    if (L[p][k] === 0) throw new Error('singular finite LU');
    [L[p], L[k]] = [L[k], L[p]]; [perm[p], perm[k]] = [perm[k], perm[p]];
    for (let i = k + 1; i < n; i++) { L[i][k] /= L[k][k]; for (let j = k + 1; j < n; j++) L[i][j] -= L[i][k] * L[k][j]; }
  }
  return b => {
    const x = perm.map(i => b[i]);
    for (let i = 0; i < n; i++) for (let j = 0; j < i; j++) x[i] -= L[i][j] * x[j];
    for (let i = n - 1; i >= 0; i--) { for (let j = i + 1; j < n; j++) x[i] -= L[i][j] * x[j]; x[i] /= L[i][i]; }
    return x;
  };
}
function finiteNewton({ initial, residual, jacobian, budget, refresh, tolerance }) {
  let x = initial.slice(), solve, assemblies = 0, solves = 0;
  const norms = [];
  for (let k = 0; k <= budget; k++) {
    const r = residual(x), norm = Math.sqrt(dot(r, r)); norms.push(norm);
    if (norm <= tolerance) return { status: 'root', x, norms, assemblies, solves };
    if (k === budget) return { status: 'iteration-budget-exhausted', x, norms, assemblies, solves };
    if (k % refresh === 0) { solve = factor(jacobian(x)); assemblies++; }
    const d = solve(r.map(v => -v)); solves++; x = x.map((v, i) => v + d[i]);
  }
  throw new Error('unreachable finite loop');
}
function robertson(mode) {
  const h = .001, f = ([a, b, c]) => [-.04 * a + 1e4 * b * c, .04 * a - 1e4 * b * c - 3e7 * b * b, 3e7 * b * b];
  const residual = y => { const F = f(y); return y.map((v, i) => v - Number(i === 0) - h * F[i]); };
  const jacobian = ([a, b, c]) => { const D = [[-.04, 1e4 * c, 1e4 * b], [.04, -1e4 * c - 6e7 * b, -1e4 * b], [0, 6e7 * b, 0]]; return D.map((r, i) => r.map((v, j) => Number(i === j) - h * v)); };
  const newton = mode === 'newton';
  const z = finiteNewton({ initial: [1, 0, 0], residual, jacobian, budget: newton ? 12 : 8, refresh: newton ? 1 : 8, tolerance: 1e-12 });
  const expected = newton ? [5.65685425e-5, 6.78768207e-5, 8.45562545e-6, 2.32643360e-7, 1.97215675e-10, 1.43041174e-16] : [5.65685425e-5, 6.78768207e-5, 6.51657654e-5, 5.88221242e-5, 6.10108196e-5, 6.61093086e-5, 6.44848425e-5, 6.06814747e-5, 6.19977506e-5];
  requireCase(z.norms.length === expected.length && z.norms.every((v, i) => Math.abs(v - expected[i]) <= 1e-13 + 2e-7 * expected[i]), 'Robertson residual trace differs beyond printed-value tolerance');
  requireCase(z.status === (newton ? 'root' : 'iteration-budget-exhausted') && z.assemblies === (newton ? 5 : 1) && z.solves === (newton ? 5 : 8), 'Robertson status/work count');
  requireCase(Math.abs(z.x.reduce((s, v) => s + v, 0) - 1) < 2e-12, 'Robertson mass sum');
  if (newton) requireCase(z.norms.slice(0, -1).every(v => v > 1e-12) && z.norms.at(-1) < 1e-12, 'first Newton successful count');
  else requireCase(z.norms.every(v => v > 1e-12), 'chord prematurely converged');
  return `Robertson ${mode}: ${z.solves} binary64 partial-pivot solves, ${z.assemblies} actual LU factorizations, ${z.status}; implementation-only approximate trace, not exact-backend execution`;
}
const fixtures = {
  'sdirk-tableau-stability': () => tableauFixture('sdirk'),
  'radau-tableau-stability': () => tableauFixture('radau'),
  'stage-residual-scaling': () => {
    let count = 0;
    for (const T of Object.values(tableaux)) for (const h of [.125, .25, .5]) {
      const n = T.b.length, B = T.A.map((r, i) => r.map((v, j) => Number(i === j) + h * v)), D = 2, target = D * h ** (T.p + 1);
      const Y = solveDense(B, Array(n).fill(1)).x, error = solveDense(B, Array(n).fill(target)).x, approx = Y.map((v, i) => v + error[i]);
      const residual = mv(B, approx).map(v => v - 1), rnorm = Math.max(...residual.map(Math.abs));
      const outputError = Math.abs(h * dot(T.b, error));
      requireCase(close(rnorm, target) && Math.max(...error.map(Math.abs)) <= 2 * target + 1e-12 && outputError <= 3 * target + 1e-12 && close(rnorm / h, D * h ** T.p), 'stage update/derivative residual finite scaling'); count++;
    }
    return `${count} f=-y stage-perturbation models: update-residual and derivative-residual scaling, stage <=2D and output <=3D allowances; no global convergence conclusion`;
  },
  'constant-bdf2-ratio': () => {
    let count = 0; for (const N of [2, 4, 8]) { const h = q(1, N); for (let n = 1; n < N; n++) { requireCase(qcmp(qdiv(h, h), q(1)) === 0 && 1 < 1 + Math.sqrt(2), 'constant-grid ratio'); count++; } }
    return `${count} exact constant-grid adjacent ratios equal one; no branch solvability or convergence inferred`;
  },
  'newton-zero-budget': () => {
    const z = finiteNewton({ initial: [0], residual: ([x]) => [x - 1 + x ** 3], jacobian: ([x]) => [[1 + 3 * x * x]], budget: 0, refresh: 1, tolerance: .1 });
    requireCase(z.status === 'iteration-budget-exhausted' && z.norms[0] === 1 && z.solves === 0 && z.assemblies === 0, 'zero-budget solver status');
    return 'G(0)=-1, norm1>0.1, zero corrections/factorizations: iteration-budget-exhausted; no error certificate';
  },
  'stiff-decay-factors': () => {
    const z = q(-100), halfZ = qdiv(z, q(2));
    const trap = qdiv(qadd(q(1), halfZ), qadd(q(1), qmul(q(-1), halfZ)));
    const be = qdiv(q(1), qadd(q(1), qmul(q(-1), z)));
    requireCase(qcmp(trap, q(-49, 51)) === 0 && qcmp(be, q(1, 101)) === 0 && close(stability(tableaux.be, [-100, 0])[0], 1 / 101), 'independent exact trap/BE equation factors and BE stage solve');
    const s = stability(tableaux.sdirk, [-100, 0])[0], rad = stability(tableaux.radau, [-100, 0])[0];
    requireCase(close(s, (1 - 100 * (1 - 2 * gamma)) / (1 + 100 * gamma) ** 2) && close(rad, (1 - 100 / 3) / (1 + 200 / 3 + 10000 / 6)) && Math.abs(s) < .05 && Math.abs(rad) < .02 && 49 / 51 > .96, 'stiff scalar stage factors');
    return 'z=-100: trap -49/51, BE1/101, independently solved SDIRK/Radau stage factors; scalar fixture only';
  },
  'dissipative-be-residual': () => {
    const x = q(1, 3), cube = qmul(qmul(x, x), x), eta = qadd(qadd(qmul(q(3), x), qmul(q(2), cube)), q(-1));
    requireCase(qcmp(eta, q(2, 27)) === 0 && qcmp(qdiv(eta, q(2)), q(1, 27)) === 0 && qcmp(qmul(q(1, 3), eta), q(2, 81)) === 0, 'BE residual units/bound');
    return 'Exact x=1/3,h=2: eta=2/27, derivative residual1/27,q=1/3,error allowance2/81; no root approximation assumed exact';
  },
  'robertson-newton': () => robertson('newton'),
  'robertson-chord': () => robertson('chord'),
};
export const numericalImplicitRKChecks = {
  'numerical-implicit-rk-fixture': (entry = {}) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return { ok: false, summary: 'fixture object required' };
    const allowed = new Set(['check', 'case', 'asserts', 'fixture']);
    if (Object.keys(entry).some(k => !allowed.has(k))) return { ok: false, summary: 'unsupported fixture parameter' };
    const names = entry.fixture === undefined ? Object.keys(fixtures) : [entry.fixture];
    if (names.some(name => typeof name !== 'string' || !Object.hasOwn(fixtures, name))) return { ok: false, summary: 'unknown bounded implicit-RK fixture enum' };
    try { return { ok: true, summary: names.map(name => fixtures[name]()).join('; ') }; }
    catch (e) { return { ok: false, summary: e.message }; }
  },
};
