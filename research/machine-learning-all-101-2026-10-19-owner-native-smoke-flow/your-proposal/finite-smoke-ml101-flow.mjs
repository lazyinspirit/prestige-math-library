// Deterministic bounded fixtures for ML101 batch 69. These computations do not
// establish any general continuity equation, Gaussian theorem, or OT optimality.
// No imports: integrate by importing flowMatchingMLChecks into finite-smoke.mjs
// and spreading it into makeChecks(). Every selector is fixed and validated.
const metadata = ['check', 'asserts', 'claim', 'checked_in', 'case', 'result'];
function fixture(name, selector, compute) {
  return (smoke = {}) => {
    try {
      if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) throw Error('expected obligation object');
      for (const key of Object.keys(smoke)) if (![...metadata, 'fixture'].includes(key)) throw Error(`unsupported parameter ${key}`);
      if ('check' in smoke && smoke.check !== name) throw Error(`check must be ${name}`);
      if ('fixture' in smoke && smoke.fixture !== selector) throw Error(`fixture must be ${selector}`);
      return compute();
    } catch (error) { return { ok: false, summary: error.message }; }
  };
}
const near = (a, b, tol = 1e-9) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const normal = z => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
function integral(f, low, high) {
  const n = 4096, h = (high - low) / n;
  let total = f(low) + f(high);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(low + i * h);
  return total * h / 3;
}
const scale = (t, s) => (1 - t) + t * s;
const particle = (t, z, a, s) => scale(t, s) * z + t * a;
const density = (t, x, a, s) => normal((x - t * a) / scale(t, s)) / scale(t, s);
const velocity = (t, x, a, s) => a + (s - 1) * (x - t * a) / scale(t, s);
function marginal(endpoints, t, x, s) {
  let p = 0, flux = 0;
  for (const [a, weight] of endpoints) {
    const r = density(t, x, a, s);
    p += weight * r;
    flux += weight * r * velocity(t, x, a, s);
  }
  return { p, flux, u: flux / p };
}
const answer = (ok, summary) => ({ ok, summary });

export const flowMatchingMLChecks = {
  'ml101-flow-single-endpoint-mixture': fixture('ml101-flow-single-endpoint-mixture', 'singleton-gaussian-mass-v1', () => {
    let cases = 0;
    for (const a of [-2, 0, 3]) for (const s of [0.25, 1, 2]) for (const t of [0, 0.25, 0.5, 1]) {
      const endpoints = [[a, 1]], sigma = scale(t, s), center = t * a;
      const mass = integral(x => marginal(endpoints, t, x, s).p, center - 10 * sigma, center + 10 * sigma);
      if (!near(mass, 1)) return answer(false, `singleton mixture mass ${mass} at a=${a}, s=${s}, t=${t}`);
      for (const z of [-3, -1, 0, 1, 3]) {
        const x = center + sigma * z, p = marginal(endpoints, t, x, s).p;
        if (!(p >= 0) || !near(p, density(t, x, a, s))) return answer(false, 'singleton summation disagrees with conditional density');
      }
      cases++;
    }
    return answer(true, `${cases} singleton Gaussian paths: direct 4096-panel Simpson mass integrals and 180 density comparisons, including t=0,1; tails truncated at 10 scales, tolerance 1e-9; bounded fixtures only`);
  }),
  'ml101-flow-single-endpoint-marginal-pde': fixture('ml101-flow-single-endpoint-marginal-pde', 'singleton-moving-gaussian-pde-v1', () => {
    const endpoints = [[2, 1]], s = 0.25, h = 1e-5;
    let worst = 0, cases = 0;
    for (const t of [0.25, 0.5, 0.75]) for (const x of [-2, -0.5, 0, 1, 3]) {
      const at = marginal(endpoints, t, x, s);
      if (!near(at.p, density(t, x, 2, s)) || !near(at.flux, density(t, x, 2, s) * velocity(t, x, 2, s))) return answer(false, 'singleton density or flux mismatch');
      // Independent centered differences of density in time and flux in space;
      // no evaluation of a claimed symbolic cancellation formula.
      const dt = (marginal(endpoints, t + h, x, s).p - marginal(endpoints, t - h, x, s).p) / (2 * h);
      const dx = (marginal(endpoints, t, x + h, s).flux - marginal(endpoints, t, x - h, s).flux) / (2 * h);
      const residual = Math.abs(dt + dx);
      worst = Math.max(worst, residual);
      if (!Number.isFinite(residual) || residual > 3e-8) return answer(false, `continuity residual ${residual} at t=${t}, x=${x}`);
      cases++;
    }
    return answer(true, `${cases} nonstationary singleton Gaussian density/flux fixtures: centered-difference continuity residual max ${worst}, h=1e-5, tolerance 3e-8; no general PDE claim`);
  }),
  'ml101-flow-unit-scale-boundary': fixture('ml101-flow-unit-scale-boundary', 'three-atom-all-quarter-couplings-v1', () => {
    // X in {-2,0,2} with masses {1,2,1}/4. Enumerate every coupling whose
    // masses are multiples of 1/4 with the translated identical marginal.
    const xs = [-2, 0, 2], margins = [1, 2, 1];
    let couplings = 0;
    function visit(row, remaining, cells, a) {
      if (row === 3) {
        if (remaining.some(n => n !== 0)) return true;
        let costNumerator = 0;
        for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) costNumerator += cells[i][j] * (a + xs[j] - xs[i]) ** 2;
        couplings++;
        return costNumerator >= 4 * a * a;
      }
      for (let b0 = 0; b0 <= Math.min(margins[row], remaining[0]); b0++) for (let b1 = 0; b1 <= Math.min(margins[row] - b0, remaining[1]); b1++) {
        const b2 = margins[row] - b0 - b1;
        if (b2 > remaining[2]) continue;
        const counts = [b0, b1, b2];
        if (!visit(row + 1, remaining.map((n, j) => n - counts[j]), [...cells, counts], a)) return false;
      }
      return true;
    }
    for (const a of [-2, 0, 3]) {
      if (!visit(0, [...margins], [], a)) return answer(false, `coupling below translation cost at a=${a}`);
      const diagonalCost = xs.reduce((sum, x, i) => sum + margins[i] * ((a + x) - x) ** 2, 0);
      if (diagonalCost !== 4 * a * a) return answer(false, 'affine unit-scale coupling fails equality');
    }
    return answer(couplings > 0, `${couplings} exact integer quarter-mass couplings across 3 translations of a centered three-atom law: all costs >= a^2 and the diagonal attains a^2 at s=1; finite coupling grid only`);
  }),
  'ml101-flow-stationary-standard-gaussian': fixture('ml101-flow-stationary-standard-gaussian', 'stationary-scalar-standard-normal-v1', () => {
    const mass = integral(normal, -10, 10), mean = integral(z => z * normal(z), -10, 10), variance = integral(z => z * z * normal(z), -10, 10);
    if (!near(mass, 1) || !near(mean, 0) || !near(variance, 1)) return answer(false, 'standard normal quadrature moments mismatch');
    let cases = 0;
    for (const t of [0, 0.25, 0.5, 0.75, 1]) for (const z of [-3, -1, 0, 1, 3]) {
      const x = particle(t, z, 0, 1);
      if (x !== z || scale(t, 1) !== 1 || velocity(t, x, 0, 1) !== 0 || !near(density(t, x, 0, 1), normal(z))) return answer(false, 'stationary path is not the identity with zero field');
      cases++;
    }
    const cost = integral(z => (particle(1, z, 0, 1) - z) ** 2 * normal(z), -10, 10);
    return answer(cost === 0, `${cases} stationary particle/density comparisons; normal mass/mean/variance quadrature and direct endpoint displacement integral cost=${cost}; scalar bounded fixture only`);
  }),
  'ml101-flow-scalar-rational-endpoint-cost': fixture('ml101-flow-scalar-rational-endpoint-cost', 'a1-sigma-quarter-direct-cost-v1', () => {
    const cost = integral(z => (particle(1, z, 1, 0.25) - z) ** 2 * normal(z), -10, 10);
    for (const z of [-4, -1, 0, 1, 4]) {
      if (particle(1, z, 1, 0.25) !== 1 + z / 4) return answer(false, 'endpoint map disagrees with 1+z/4');
      for (const t of [0, 0.25, 0.5, 1]) {
        const x = particle(t, z, 1, 0.25), slope = (particle(1, z, 1, 0.25) - particle(0, z, 1, 0.25));
        if (!near(x, (1 - t) * z + t * (1 + z / 4)) || !near(velocity(t, x, 1, 0.25), slope)) return answer(false, 'straight-line or field check failed');
      }
    }
    return answer(near(cost, 25 / 16), `direct Gaussian-weighted squared displacement integral=${cost}, expected 25/16, tolerance 1e-9; 5 endpoint and 20 straight-path/velocity comparisons; no general optimality claim`);
  }),
  'ml101-flow-two-point-symmetric-mixture': fixture('ml101-flow-two-point-symmetric-mixture', 'symmetric-a1-sigma1-time-half-v1', () => {
    const endpoints = [[-1, 0.5], [1, 0.5]], t = 0.5, s = 1;
    let cases = 0;
    for (const x of [-3, -2, -1, 0, 1, 2, 3]) {
      // Evaluate the posterior from Gaussian densities and conditional fields;
      // compare to the separate hyperbolic-tangent library implementation.
      const m = marginal(endpoints, t, x, s);
      if (!(m.p > 0) || !near(m.u, Math.tanh(x / 2))) return answer(false, `posterior velocity disagrees with tanh(x/2) at x=${x}`);
      cases++;
    }
    const u0 = marginal(endpoints, t, 0, s).u;
    const defect = marginal(endpoints, t, 2, s).u - 2 * marginal(endpoints, t, 1, s).u;
    const mass = integral(x => marginal(endpoints, t, x, s).p, -10.5, 10.5);
    return answer(near(mass, 1) && u0 === 0 && defect < -0.1 && near(defect, Math.tanh(1) - 2 * Math.tanh(0.5)), `${cases} direct two-density posterior comparisons; mixture mass=${mass}, u(0)=${u0}, nonlinear defect u(2)-2u(1)=${defect}<0; bounded fixture only`);
  })
};
