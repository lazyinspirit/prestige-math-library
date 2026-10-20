// Bounded fixtures only: no theorem, convergence, or probability-limit audit.
const result = (ok, summary) => ({ ok: Boolean(ok), summary });
const close = (a, b, tol = 1e-10) => Number.isFinite(a) && Number.isFinite(b)
  && Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
const need = (condition, message) => { if (!condition) throw new Error(message); };

function callback(name, fixtures, defaultFixture) {
  return (smoke = {}) => {
    try {
      need(smoke && typeof smoke === 'object' && !Array.isArray(smoke), 'expected a finite-smoke object');
      const allowed = new Set(['check', 'asserts', 'case', 'result', 'fixture']);
      for (const key of Object.keys(smoke)) need(allowed.has(key), `unsupported selector/field ${key}`);
      if ('check' in smoke) need(smoke.check === name, `check selector must be ${name}`);
      for (const key of ['asserts', 'case', 'result']) if (key in smoke)
        need(typeof smoke[key] === 'string' && smoke[key].trim(), `${key} must be a nonempty string`);
      const selector = Object.hasOwn(smoke, 'fixture') ? smoke.fixture : defaultFixture;
      need(typeof selector === 'string' && Object.hasOwn(fixtures, selector), `unknown fixture ${String(selector)}`);
      return fixtures[selector]();
    } catch (cause) { return result(false, cause.message); }
  };
}

// Build joint atoms from the original a_sigma p_sigma X_sigma,b law.
function group(a, p, assignment, scores) {
  need(a.length === p.length && assignment.length === p.length, 'feature dimension mismatch');
  const atoms = [];
  for (let f = 0; f < p.length; f++) {
    need(close(assignment[f].reduce((s, x) => s + x, 0), 1), 'assignment row is not stochastic');
    for (let b = 0; b < scores.length; b++) for (const y of [0, 1])
      atoms.push({ f, b, y, score: scores[b], mass: a[f] * assignment[f][b] * (y ? p[f] : 1 - p[f]) });
  }
  need(close(atoms.reduce((s, x) => s + x.mass, 0), 1), 'joint law mass differs from one');
  const mass = test => atoms.filter(test).reduce((s, x) => s + x.mass, 0);
  const rho = mass(x => x.y === 1);
  const mean = atoms.reduce((s, x) => s + x.mass * x.score, 0);
  const second = atoms.reduce((s, x) => s + x.mass * x.score ** 2, 0);
  const alpha = rho > 0 ? atoms.filter(x => x.y === 1).reduce((s, x) => s + x.mass * x.score, 0) / rho : NaN;
  const beta = rho < 1 ? atoms.filter(x => x.y === 0).reduce((s, x) => s + x.mass * x.score, 0) / (1 - rho) : NaN;
  const calibrated = scores.every((v, b) => close(mass(x => x.y === 1 && x.b === b), v * mass(x => x.b === b)));
  const rate = (y, threshold) => mass(x => x.y === y && x.score >= threshold) / mass(x => x.y === y);
  return { atoms, mass, rho, mean, second, alpha, beta, calibrated, rate };
}
const identity = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => Number(i === j)));
function perfectGroups() {
  return [[3 / 4, 1 / 4], [1 / 4, 3 / 4]].map(a => group(a, [0, 1], identity(2), [0, 1]));
}
function equalConstant() { return [0, 1].map(() => group([1], [1 / 2], [[1]], [1 / 2])); }
function thresholdGroups() {
  const p = [1 / 5, 4 / 5, 1 / 10, 1 / 2, 9 / 10];
  return [[1 / 2, 1 / 2, 0, 0, 0], [0, 0, 9 / 32, 14 / 32, 9 / 32]]
    .map(a => group(a, p, identity(5), p));
}
function verifyPerfect() {
  const gs = perfectGroups();
  need(close(gs[0].rho, 1 / 4) && close(gs[1].rho, 3 / 4), 'unequal base rates fail');
  for (const g of gs) need(g.calibrated && close(g.alpha, 1) && close(g.beta, 0)
    && close(g.mass(x => x.score !== x.y), 0), 'perfect witness fails calibration/balance/support');
  return result(true, 'Enumerated both two-feature joint laws: rates 1/4,3/4; zero bin residuals, alpha 1, beta 0, and S=Y on every positive-mass atom.');
}
function verifyEqual() {
  for (const g of equalConstant()) need(g.calibrated && close(g.rho, 1 / 2)
    && close(g.alpha, 1 / 2) && close(g.beta, 1 / 2) && close(g.mass(x => x.score === x.y), 0), 'constant-score witness fails');
  return result(true, 'Two one-bin joint laws enumerated: calibration, equal rates/balances 1/2, and zero probability of S=Y.');
}
const riskFixtures = {
  'zero-mass-bin': () => {
    let count = 0;
    for (const p of [[1 / 4, 3 / 4], [0, 1]]) {
      const g = group([1, 0], p, identity(2), p);
      need(g.mass(x => x.b === 1) === 0 && g.mass(x => x.b === 1 && x.y === 1) === 0,
        'empty bin has nonzero mass');
      need(g.atoms.filter(x => x.b === 1).every(x => x.mass === 0) && g.calibrated, 'zero-mass calibration failed');
      count++;
    }
    return result(true, `${count} finite laws: every atom in the zero-mass bin is zero and the calibration identity has both sides zero.`);
  },
  'perfect-feature': verifyPerfect,
  'constant-balance': () => {
    let count = 0;
    for (const c of [0, 1 / 4, 1 / 2, 1]) {
      const gs = [[1 / 4, 3 / 4], [3 / 4, 1 / 4]].map(a => group(a, [1 / 4, 3 / 4], [[1], [1]], [c]));
      for (const g of gs) need(g.rho > 0 && g.rho < 1 && close(g.alpha, c) && close(g.beta, c), 'conditional constant-score means disagree');
      count += gs.length;
    }
    return result(true, `${count} joint laws with positive classes: independently summed positive/negative conditional means equal the chosen constant.`);
  },
  'threshold-area-endpoints': () => {
    let count = 0;
    for (const score of [0, 1]) for (const y of [0, 1]) {
      const atoms = [{ score, mass: 1 / 3, y }, { score: 1 - score, mass: 2 / 3, y: 1 - y }];
      const classMass = atoms.filter(x => x.y === y).reduce((s, x) => s + x.mass, 0);
      const cuts = [...new Set([0, 1, ...atoms.map(x => x.score)])].sort((a, b) => a - b);
      let area = 0;
      for (let i = 1; i < cuts.length; i++) {
        const mid = (cuts[i - 1] + cuts[i]) / 2;
        const survival = atoms.filter(x => x.y === y && x.score >= mid).reduce((s, x) => s + x.mass, 0) / classMass;
        area += (cuts[i] - cuts[i - 1]) * survival;
      }
      const mean = atoms.filter(x => x.y === y).reduce((s, x) => s + x.mass * x.score, 0) / classMass;
      need(close(area, score) && close(area, mean), 'endpoint threshold-area/mean mismatch'); count++;
    }
    return result(true, `${count} positive/negative endpoint laws: exact step-interval area enumeration gives 0 or 1, including the isolated threshold 0 endpoint.`);
  },
  'equal-rate-constant': verifyEqual,
  'perfect-unequal-rates': verifyPerfect,
  'balanced-moments': () => {
    for (const g of thresholdGroups()) need(g.calibrated && close(g.mean, 1 / 2) && close(g.second, 17 / 50)
      && close(g.alpha, 17 / 25) && close(g.beta, 8 / 25), 'enumerated balanced moments differ');
    return result(true, 'Enumerated all feature/outcome/bin atoms: both means 1/2, second moments 17/50, and class means 17/25, 8/25.');
  },
  'threshold-half': () => {
    const gs = thresholdGroups(); const expected = [[4 / 5, 1 / 5], [151 / 160, 79 / 160]];
    gs.forEach((g, i) => need(close(g.rate(1, 1 / 2), expected[i][0]) && close(g.rate(0, 1 / 2), expected[i][1]), 'threshold1/2 conditional masses disagree'));
    return result(true, 'Direct joint-mass threshold sums at 1/2 give(4/5,1/5) and(151/160,79/160); equality-at-threshold included.');
  },
  'threshold-nine-tenths': () => {
    const gs = thresholdGroups(); const expected = [[0, 0], [81 / 160, 9 / 160]];
    gs.forEach((g, i) => need(close(g.rate(1, 9 / 10), expected[i][0]) && close(g.rate(0, 9 / 10), expected[i][1]), 'threshold9/10 conditional masses disagree'));
    return result(true, 'Direct joint-mass threshold sums at 9/10 give(0,0) and(81/160,9/160); the score 9/10 atom is included.');
  },
};

// Small Gaussian elimination and objective grids do not use the claimed inverse/soft formula to find minimizers.
function solve(A, rhs) {
  const m = A.map((r, i) => [...r, rhs[i]]), n = rhs.length;
  for (let j = 0; j < n; j++) {
    let pivot = j;
    for (let k = j + 1; k < n; k++) if (Math.abs(m[k][j]) > Math.abs(m[pivot][j])) pivot = k;
    need(Math.abs(m[pivot][j]) > 1e-12, 'singular solve'); [m[j], m[pivot]] = [m[pivot], m[j]];
    const d = m[j][j]; m[j] = m[j].map(x => x / d);
    for (let k = 0; k < n; k++) if (k !== j) { const c = m[k][j]; m[k] = m[k].map((x, l) => x - c * m[j][l]); }
  }
  return m.map(r => r[n]);
}
function duplicateBase() {
  const X = [[1, 1]], y = [1];
  const gram = [0, 1].map(i => [0, 1].map(j => X.reduce((s, r) => s + r[i] * r[j], 0)));
  const rhs = [0, 1].map(i => X.reduce((s, r, k) => s + r[i] * y[k], 0));
  const ridge = solve(gram.map((r, i) => r.map((v, j) => v + Number(i === j))), rhs);
  need(ridge.every(v => close(v, 1 / 3)), 'ridge elimination differs from(1/3,1/3)');
  let olsMin = Infinity, ridgeMin = Infinity, olsCount = 0, ridgeCount = 0;
  for (let i = -24; i <= 24; i++) for (let j = -24; j <= 24; j++) {
    const b = [i / 12, j / 12], residual = y[0] - X[0].reduce((s, x, k) => s + x * b[k], 0);
    const ols = residual ** 2, reg = ols + b.reduce((s, x) => s + x * x, 0);
    if (ols < olsMin - 1e-12) { olsMin = ols; olsCount = 1; } else if (close(ols, olsMin)) olsCount++;
    if (reg < ridgeMin - 1e-12) { ridgeMin = reg; ridgeCount = 1; } else if (close(reg, ridgeMin)) ridgeCount++;
    need((close(ols, 0)) === close(b[0] + b[1], 1), 'zero-loss points fail normal-equation sum');
  }
  need(close(olsMin, 0) && olsCount > 1 && ridgeCount === 1 && close(ridgeMin, 1 / 3), 'bounded duplicate-design minimizer search disagrees');
  return { olsCount, ridgeCount };
}
const sparseFixtures = {
  'schur-s1': () => {
    const A = [[1, 3 / 4], [3 / 4, 1]];
    const trace = A[0][0] + A[1][1], det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
    const largest = (trace + Math.sqrt(trace ** 2 - 4 * det)) / 2;
    const schur = A[1][1] - A[1][0] * solve([[A[0][0]]], [A[0][1]])[0];
    const inverseColumn = solve(A, [0, 1]);
    need(det > 0 && close(largest, 7 / 4) && close(schur, 7 / 16)
      && close(1 / largest, 4 / 7) && schur < 1 / largest && close(inverseColumn[1], 1 / schur), 'Schur/eigenvalue countermodel fails');
    return result(true, 'Independent 2x2 characteristic roots and elimination: conditional variance7/16<4/7; inverse lower-right entry 16/7.');
  },
  'duplicate-ols-ridge': () => {
    const s = duplicateBase();
    return result(true, `2401 objective-grid points plus linear elimination: OLS zero-loss line has ${s.olsCount} grid minimizers, ridge unique grid point (1/3, 1/3).`);
  },
  'orthonormal-n2': () => {
    const y = [3, -1], n = 2, lambda = 1 / 2, minima = []; let best = Infinity;
    for (let i = -8; i <= 20; i++) for (let j = -12; j <= 8; j++) {
      const b = [i / 4, j / 4], loss = b.reduce((s, x, k) => s + (y[k] - x) ** 2 / (2 * n) + lambda * Math.abs(x), 0);
      if (loss < best - 1e-12) { best = loss; minima.length = 0; minima.push(b); }
      else if (close(loss, best)) minima.push(b);
    }
    need(minima.length === 1 && close(minima[0][0], 2) && close(minima[0][1], 0), 'raw empirical-objective grid minimizer differs from(2,0)');
    const left = (0 - y[1]) / n - lambda, right = (0 - y[1]) / n + lambda;
    need(close((2 - y[0]) / n + lambda, 0) && left <= 0 && right >= 0 && close(left, 0), 'positive derivative or exact negative-threshold boundary fails');
    return result(true, '609 raw empirical-Lasso objective points uniquely minimize at(2,0); independent one-sided derivatives check the zero boundary and n*lambda normalization.');
  },
  'identity-threshold-constants': () => {
    const Sigma = identity(3), active = Sigma.slice(0, 2).map(r => r.slice(0, 2));
    const inverseCols = [solve(active, [1, 0]), solve(active, [0, 1])];
    const Dmax = Math.max(...[0, 1].map(i => inverseCols.reduce((s, col) => s + Math.abs(col[i]), 0)));
    const Cmin = Math.min(...active.map((r, i) => r[i])), Cmax = Math.max(...Sigma.map(r => r.reduce((s, x) => s + Math.abs(x), 0)));
    const epsilon = 1 - Math.max(...Sigma.slice(2).map(r => r.slice(0, 2).reduce((s, x) => s + Math.abs(x), 0)));
    const low = (Math.sqrt(Cmax) - Math.sqrt(Cmax - 1 / Cmax)) ** 2 / (Cmax * (2 - epsilon) ** 2);
    const high = Cmax / (epsilon ** 2 * Cmin);
    need([Dmax, Cmin, Cmax, epsilon, low, high].every(x => close(x, 1)), 'identity covariance constants differ from one');
    return result(true, 'I3 with two active coordinates: elimination/row sums recompute Cmin,Cmax,Dmax,epsilon and both scheduled constants as 1; no support probability tested.');
  },
  'scheduled-active-scale': () => {
    let priorTerm = 0, priorRatioError = Infinity, priorLambda = Infinity;
    for (const k of [4, 6, 8, 10, 12, 16]) {
      const s = Math.ceil(Math.exp(k * k)), N = Math.ceil(Math.exp(k)), n = Math.ceil(5 * s * k);
      const lambda = n <= Math.ceil(Math.exp(Math.E)) ? 1 : 1 / Math.sqrt(Math.log(Math.log(n)));
      const actual = lambda * Math.sqrt(s * Math.log(s) / n), proxy = Math.sqrt(k / (10 * Math.log(k)));
      const error = Math.abs(actual / proxy - 1);
      need(Number.isFinite(actual) && actual > priorTerm && lambda < priorLambda && error < 0.04 && error < priorRatioError,
        `bounded schedule ratio/growth disagreement at k=${k}`);
      need(close(n / s, 5 * k, 1e-6) && Math.abs(Math.log(N) / k - 1) < 0.005, 'rounded original sequence ratios disagree');
      priorTerm = actual; priorLambda = lambda; priorRatioError = error;
    }
    return result(true, 'Six floating-point probes of the defining schedules k=4,6,8,10,12,16: active term increases, lambda decreases, ratio to sqrt(k/(10logk)) approaches1 within 4%; no asymptotic divergence or recovery probability certified.');
  },
  'duplicate-shrinkage': () => {
    duplicateBase(); let best = Infinity; const minima = [];
    for (let i = -32; i <= 32; i++) for (let j = -32; j <= 32; j++) {
      const b = [i / 16, j / 16], loss = (1 - b[0] - b[1]) ** 2 / 2 + (Math.abs(b[0]) + Math.abs(b[1])) / 4;
      if (loss < best - 1e-12) { best = loss; minima.length = 0; minima.push(b); }
      else if (close(loss, best)) minima.push(b);
    }
    need(minima.length === 13 && minima.every(b => b[0] >= 0 && b[1] >= 0 && close(b[0] + b[1], 3 / 4)), 'bounded Lasso minimizer segment disagrees');
    return result(true, 'OLS/ridge elimination plus 4225 raw-Lasso objective points: exactly 13 grid minimizers on nonnegative sum 3/4 segment, including endpoints; not a proof over all real coefficients.');
  },
};

function simpson(f, a, b, steps = 24000) {
  const h = (b - a) / steps; let sum = f(a) + f(b);
  for (let i = 1; i < steps; i++) sum += (i % 2 ? 4 : 2) * f(a + i * h);
  return sum * h / 3;
}
function gaussianTail() {
  let previous = Infinity;
  for (const n of [8, 16, 32, 64, 128]) {
    const shape = n / 2, logFactorial = Array.from({ length: shape - 1 }, (_, i) => Math.log(i + 1)).reduce((s, x) => s + x, 0);
    // Distribution of the actual sum of n squared independent standard normals,
    // rescaled by n. Integrate its density, not the proposed Chernoff envelope.
    const density = x => x <= 0 ? 0 : Math.exp(shape * Math.log(n / 2) - logFactorial + (shape - 1) * Math.log(x) - n * x / 2);
    const total = simpson(density, 0, 12), tail = simpson(density, 0, 1 / 2) + simpson(density, 3 / 2, 12);
    const bound = 2 * Math.exp(-n * (1 / 2) ** 2 / 8);
    need(close(total, 1, 2e-7) && tail > 0 && tail < previous && tail <= bound + 1e-8, `scalar chi-square quadrature/tail bound fails at n=${n}`);
    previous = tail;
  }
  return result(true, 'Five d=1 models n=8,16,32,64,128: independent chi-square density quadrature normalizes and gives decreasing deviation(1/2) tails below stated envelope; no convergence-in-probability theorem certified.');
}

export const sparseMLChecks = Object.freeze({
  'ml101-risk-score-finite': callback('ml101-risk-score-finite', riskFixtures, 'zero-mass-bin'),
  'ml101-sparse-regression-finite': callback('ml101-sparse-regression-finite', sparseFixtures, 'schur-s1'),
  'ml101-gaussian-scalar-covariance-tail': callback('ml101-gaussian-scalar-covariance-tail', { 'fixed-dimension-tail': gaussianTail }, 'fixed-dimension-tail'),
});
