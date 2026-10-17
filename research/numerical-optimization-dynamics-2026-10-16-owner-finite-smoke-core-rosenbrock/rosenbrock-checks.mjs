import { q, qcmp, qnum, createBinaryArithmetic, matVec, solveDense, vectorNorm, close } from './numerical-core.mjs';

// Each selector is a bounded fixture, never a general convergence certificate.
const alpha = 1 - 1 / Math.sqrt(2);
const scalarR = (z, gamma = 1) => (1 + (1 - gamma) * z) / (1 - gamma * z);
const cdiv = (a, b) => { const t = b[0] ** 2 + b[1] ** 2; return [(a[0] * b[0] + a[1] * b[1]) / t, (a[1] * b[0] - a[0] * b[1]) / t]; };
const cmul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const cnorm = a => Math.hypot(...a);
const scalarRC = (z, gamma = 1) => cdiv([1 + (1 - gamma) * z[0], (1 - gamma) * z[1]], [1 - gamma * z[0], -gamma * z[1]]);
const twoRC = z => { const den = [1 - alpha * z[0], -alpha * z[1]]; return cdiv([1 + (1 - 2 * alpha) * z[0], (1 - 2 * alpha) * z[1]], cmul(den, den)); };
const assert = (test, detail) => { if (!test) throw new Error(detail); };
const checkClose = (a, b, detail, tolerance) => assert(close(a, b, tolerance), `${detail}: ${a} versus ${b}`);
const minus = (x, y) => x.map((v, i) => v - y[i]);

// Successful scalar/diagonal Householder fixture realization, not a general QR.
// All active nonzero columns are one nonzero coordinate. Their exact norm is
// |a|, so the square-root calls of the source algorithm are exact in this family.
function diagonalFactor(diagonal, precision = 16) {
  const fp = createBinaryArithmetic({ precision });
  const counters = { factor: 1, solve: 0, reflector: 0, residual: 0 };
  const take = z => { if (z.status !== 'success') throw new Error(z.status); return z.value; };
  const R = [], reflectors = [];
  for (const a of diagonal) {
    const stored = fp.store(q(a)); if (stored.status !== 'success') return { status: stored.status, counters };
    if (!a) { R.push(q(0)); reflectors.push(null); continue; }
    // s=|a|, z=a/s, t=z*z=1, r=s; alpha=-sign(a)*r.
    const z = take(fp.div(q(a), q(Math.abs(a))));
    assert(qcmp(take(fp.mul(z, z)), q(1)) === 0, 'diagonal scaled norm must be one');
    const target = q(-a), v = take(fp.sub(q(a), target));
    const w = take(fp.mul(v, v)), tau = take(fp.div(q(2), w));
    R.push(target); reflectors.push({ v, tau }); counters.reflector++;
  }
  if (R.some(a => qcmp(a, q(0)) === 0)) return { status: 'singular-factor', counters };
  const solve = (rhs, epsilon, certificate = true) => {
    counters.solve++; const x = [];
    for (let i = 0; i < diagonal.length; i++) {
      const stored = fp.store(q(rhs[i])); if (stored.status !== 'success') return { status: stored.status };
      const { v, tau } = reflectors[i];
      const d = take(fp.mul(v, stored.value)), p = take(fp.mul(tau, v));
      const c = take(fp.sub(stored.value, take(fp.mul(p, d))));
      x.push(take(fp.div(c, R[i])));
    }
    counters.residual++; const vhat = [], rhat = [];
    for (let i = 0; i < x.length; i++) {
      vhat.push(take(fp.mul(q(diagonal[i]), x[i])));
      rhat.push(take(fp.sub(vhat[i], q(rhs[i]))));
    }
    if (!certificate) return { status: 'residual-unverified', x: x.map(qnum), rho: null };
    // Sum-of-absolute-values bounds dominate all requested Euclidean/Frobenius
    // norms; an external certificate oracle can return these finite upper bounds.
    const absSum = y => y.reduce((s, a) => s + Math.abs(typeof a === 'number' ? a : qnum(a)), 0);
    const u = fp.unitRoundoff, gamma = x.length * u / (1 - x.length * u);
    const W = gamma * absSum(diagonal) * absSum(x) + u * (absSum(vhat) + absSum(rhs));
    const rho = absSum(rhat) + W * (1 + 1e-12) + Number.EPSILON;
    const exactResidual = diagonal.map((a, i) => a * qnum(x[i]) - qnum(rhs[i]));
    assert(vectorNorm(exactResidual) <= rho, 'certificate misses actual equation residual');
    return { status: rho <= epsilon ? 'success' : 'residual-not-certified', x: x.map(qnum), rho, exactResidual };
  };
  return { status: 'factor', solve, counters, fp };
}

function twoStage(A, y, h, J = A, timeDerivative = y.map(() => 0), altered = false) {
  const W = J.map((row, i) => row.map((v, j) => Number(i === j) - alpha * h * v));
  const f0 = matVec(A, y), b1 = f0.map((v, i) => v + alpha * h * timeDerivative[i]);
  const k1 = solveDense(W, b1).x;
  const midpoint = y.map((v, i) => v + h * k1[i] / 2), F1 = matVec(A, midpoint);
  const q2 = solveDense(W, altered ? F1 : minus(F1, k1)).x;
  const k2 = altered ? q2 : q2.map((v, i) => v + k1[i]);
  return { y: y.map((v, i) => v + h * k2[i]), k1, F1, q2, midpoint, W };
}

const fixtures = {
  'constant-stage-map': () => {
    for (const y of [-3, 0, 3]) for (const h of [0.25, 0.5]) checkClose(y + h * solveDense([[1]], [2]).x[0], y + 2 * h, 'constant stage/update');
    return '6 constant-field exact shifted equations, including y=3,h=1/2 ->4';
  },
  'shifted-inverse': () => {
    for (const diagonal of [[0], [0, 0], [0.25, -0.5]]) {
      const qbound = Math.max(...diagonal.map(Math.abs));
      for (const a of diagonal) assert(Math.abs(1 / (1 - a)) <= 1 / (1 - qbound) + 1e-12, 'Neumann bound');
    }
    return 'zero matrices and signed diagonal shifted inverses bounded by1/(1-q)';
  },
  'inverse-perturbation': () => {
    for (const [j, jt] of [[0, 0], [-2, -2], [-2, -1], [1, 0]]) {
      const h = 0.25, a = 1 - h * j, at = 1 - h * jt;
      checkClose(1 / at - 1 / a, h * (jt - j) / (at * a), 'resolvent identity sign');
    }
    return '4 scalar resolvent identities including identical Jacobians';
  },
  'residual-certificate': () => {
    const f = diagonalFactor([1]), r = f.solve([1], 1);
    assert(r.status === 'success' && r.rho > 0 && r.rho >= Math.abs(r.exactResidual[0]), 'nonnegative residual allowance');
    return 'M=x=b=1: actual residual0, conservative positive finite-u certificate';
  },
  'qr-solver-status': () => {
    const f = diagonalFactor([2]); const exact = f.solve([2], 1), strict = f.solve([2], 0), unavailable = f.solve([2], 1, false);
    assert(exact.status === 'success' && exact.x[0] === 1, 'scalar QR solve');
    assert(strict.status === 'residual-not-certified' && strict.rho > 0, 'epsilon0 cannot certify positive rounding allowance');
    assert(unavailable.status === 'residual-unverified' && diagonalFactor([0]).status === 'singular-factor', 'failure statuses');
    return 'same M2,b2 checked at admissible positive tolerance and epsilon0; singular/unavailable branches';
  },
  'jacobian-map-defect': () => {
    for (const [j, jt] of [[-2, -2], [-2, -1], [0, 0]]) {
      const h = 0.25, f = 2, a = 1 - h * j, at = 1 - h * jt;
      const error = Math.abs(h * f / at - h * f / a), bound = h * h * Math.abs(jt - j) * Math.abs(f) / Math.abs(a * at);
      checkClose(error, bound, 'scalar sharp Jacobian perturbation');
    }
    return 'equal and unequal scalar Jacobian map defects';
  },
  'newton-backward-euler': () => {
    const G = z => 101 * z - 1, corrected = 1 - G(1) / 101;
    checkClose(corrected, scalarR(-100), 'Newton correction equals RosenbrockEuler');
    checkClose(G(corrected), 0, 'affine backwardEuler root');
    return 'lambda100,h1 affine BE/Newton stage agreement';
  },
  'one-stage-algorithm': () => {
    const f = diagonalFactor([1]), stage = f.solve([2], 0.01);
    assert(stage.status === 'success' && f.counters.factor === 1 && f.counters.solve === 1, 'one factor/solve');
    checkClose(3 + stage.x[0] / 2, 4, 'one-stage outer update');
    assert(f.fp.store(q(1, 3)).status === 'representation-unavailable', 'exact storage must reject thirds');
    return 'stored constant-field step plus explicit nonrepresentable-storage failure';
  },
  'zero-w-stage': () => {
    const z = twoStage([[-4]], [1], 1, [[0]]);
    checkClose(z.k1[0], -4, 'stage1'); checkClose(z.F1[0], 4, 'midpoint field'); checkClose(z.q2[0], 8, 'corrected second RHS'); checkClose(z.y[0], 5, 'W0 factor5');
    return 'all zero-W stage equations independently solved: -4,4,8,5';
  },
  'zero-one-local-defect': () => {
    const stage = solveDense([[1]], [0]).x[0]; assert(stage === 0 && 3 + 0.5 * stage === 3, 'zero exact and computed map');
    return 'zero-field exact flow and one-stage map coincide; defect and residual both0';
  },
  'zero-two-local-defect': () => {
    const z = twoStage([[0]], [3], 0.5, [[0]]); assert(z.y[0] === 3 && z.k1[0] === 0 && z.q2[0] === 0, 'zero two-stage defect');
    return 'zero-field both stages and exact flow unchanged';
  },
  'factor-reuse': () => {
    const f = diagonalFactor([1, 1]), s1 = f.solve([-1, -4], 1), s2 = f.solve([q(1, 2), 4], 1);
    assert(s1.status === 'success' && s2.status === 'success' && f.counters.factor === 1 && f.counters.solve === 2, 'same factor object reused');
    checkClose(s2.x[0], 0.5, 'stored half-valued RHS'); checkClose(s2.x[1], 4, 'stored second RHS');
    const exactJ = twoStage([[-1, 0], [0, -2]], [1, 2], 1);
    checkClose(exactJ.W[0][0], 1 + alpha, 'exactJ diagonal'); checkClose(exactJ.W[1][1], 1 + 2 * alpha, 'exactJ diagonal2');
    return 'one stored identity factor/two RHS calls; exact-J irrational diagonals checked only as exact-equation comparison';
  },
  'finite-work': () => {
    let cases = 0;
    for (const d of [1, 2]) for (const a of [0, 1, -2]) {
      const f = diagonalFactor(Array(d).fill(a));
      if (f.status === 'factor') { f.solve(Array(d).fill(2), 1); assert(f.counters.solve === 1 && f.counters.reflector === d, 'finite loop counters'); }
      else assert(f.status === 'singular-factor', 'finite singular branch');
      cases++;
    }
    return `${cases} bounded dimension/diagonal traces terminate with success or singular status; no general termination inference`;
  },
  'one-stage-a-endpoint': () => {
    checkClose(scalarR(-1, 0.5), 1 / 3, 'gamma1/2 endpoint');
    for (const gamma of [0.5, 1, 2]) for (const re of [0, -0.5, -4]) for (const im of [-3, 0, 3]) assert(cnorm(scalarRC([re, im], gamma)) <= 1 + 1e-12, 'finite halfplane amplification');
    assert(cnorm(scalarRC([-100, 0], 0.25)) > 1, 'outside A-stable parameter witness');
    return '27 finite left-halfplane points plus gamma1/2 endpoint and gamma1/4 counterexample; not global A-stability proof';
  },
  'one-stage-l-limit': () => {
    const vals = [10, 100, 1000].map(x => Math.abs(scalarR(-x, 1)));
    assert(vals[0] > vals[1] && vals[1] > vals[2] && vals[2] < 0.001, 'negative-axis stiff decay');
    return 'three increasing stiff products decay for gamma1; finite samples do not prove a limit';
  },
  'two-stage-stiff-stability': () => {
    const stage = twoStage([[-4]], [1], 1).y[0]; checkClose(stage, twoRC([-4, 0])[0], 'stage-derived stability function');
    assert(Math.abs(stage) < 1, 'z-4 bounded');
    for (const re of [0, -1, -4]) for (const im of [-3, 0, 3]) assert(cnorm(twoRC([re, im])) <= 1 + 1e-12, 'finite exactJ halfplane samples');
    return 'exact stage z=-4 and9complex samples; no arbitrary-J stability transfer';
  },
  'zero-one-global-recurrence': () => {
    let e = 0; for (let n = 0; n < 16; n++) { e = (1 + 0 * 0.125) * e + 0 * 0.125 ** 2; assert(e === 0, 'zero recurrence'); }
    return '16 finite zero-field first-order recurrence steps; no asymptotic theorem tested';
  },
  'zero-two-global-recurrence': () => {
    let y = [3]; for (let n = 0; n < 16; n++) { y = twoStage([[0]], y, 0.125, [[0]]).y; assert(y[0] === 3, 'zero global state'); }
    return '16 zero-field two-stage steps; all global errors0';
  },
  'omitted-stage-correction': () => {
    const hs = [1 / 256, 1 / 512, 1 / 1024];
    const coeff = hs.map(h => (twoStage([[1]], [1], h, [[1]], [0], true).y[0] - 1 - h) / h ** 2);
    assert(Math.abs(coeff[2] - (alpha + 0.5)) < 0.001, 'altered quadratic coefficient');
    const error = hs.map(h => Math.abs(twoStage([[1]], [1], h, [[1]], [0], true).y[0] - Math.exp(h)) / h ** 2);
    assert(Math.abs(error[2] - alpha) < 0.001 && error[2] > alpha / 2, 'nonzero quadratic local error');
    return 'three decreasing h check altered quadratic coefficient; bounded numerical coefficient evidence only';
  },
  'current-reuse-example': () => {
    const z = twoStage([[-1, 0], [0, -2]], [1, 2], 1, [[0, 0], [0, 0]]);
    for (const [actual, expected] of [[z.k1, [-1, -4]], [z.midpoint, [0.5, 0]], [z.F1, [-0.5, 0]], [z.q2, [0.5, 4]]]) actual.forEach((v, i) => checkClose(v, expected[i], 'current stored identityW example'));
    return fixtures['factor-reuse']() + '; actual current example stage vectors verified';
  },
  'stiff-backward-euler': () => {
    const step = 1 + solveDense([[101]], [-100]).x[0]; checkClose(step, 1 / 101, 'stiff BE equality'); assert(step > 0 && step < 1, 'stiff damping range');
    return 'independent stage solve gives1/101 and lies(0,1)';
  },
  'approximate-jacobian-damping': () => {
    const approx = twoStage([[-4]], [1], 1, [[0]]).y[0], exact = twoStage([[-4]], [1], 1).y[0];
    assert(approx === 5 && Math.abs(exact) < 1, 'bounded zeroJ fails stiff damping while exactJ damps');
    return 'same z=-4 exact-J versus zero approximate-J witness; no order/convergence claim';
  },
};

export const numericalRosenbrockChecks = {
  'numerical-rosenbrock-fixture': (smoke = {}) => {
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) return { ok: false, summary: 'fixture options must be an object' };
    const extra = Object.keys(smoke).filter(k => !['check', 'asserts', 'fixture', 'case', 'input', 'calculation', 'result', 'fixture_note'].includes(k));
    if (extra.length) return { ok: false, summary: `unsupported fixture parameters: ${extra.join(',')}` };
    const selected = smoke.fixture === undefined ? Object.keys(fixtures) : [smoke.fixture];
    if (selected.some(k => !Object.hasOwn(fixtures, k))) return { ok: false, summary: `unknown Rosenbrock fixture ${String(smoke.fixture)}` };
    try { const results = selected.map(k => ({ fixture: k, summary: fixtures[k]() })); return { ok: true, summary: `${results.length} bounded Rosenbrock fixture(s); no general stability/order/termination proof`, results }; }
    catch (error) { return { ok: false, summary: error.message }; }
  },
};
export const rosenbrockFixtureNames = Object.freeze(Object.keys(fixtures));
