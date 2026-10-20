// Bounded, independent special-function/Ewald sanity models for frontier71.
// Registration does not execute fixtures. No source text is loaded or inspected.
// Floating quadratures and differences are numerical comparisons, not rigorous
// enclosures, algorithm implementations, asymptotic proofs or infinite sums.
import { q, qadd, qsub, qmul, qdiv, qcmp, qnum, close } from './finite-smoke-numerical-core.mjs';

const eq = (a, b) => qcmp(a, b) === 0;
const sumQ = xs => xs.reduce(qadd, q(0));
const squareQ = x => qmul(x, x);
const powQ = (x, n) => { let y = q(1); for (let i = 0; i < n; i++) y = qmul(y, x); return y; };
const factorial = n => { let f = 1n; for (let i = 2; i <= n; i++) f *= BigInt(i); return f; };
const requireCase = (ok, label) => { if (!ok) throw new Error(label); };
const C = (re, im = 0) => [re, im];
const addC = (a, b) => C(a[0] + b[0], a[1] + b[1]);
const subC = (a, b) => C(a[0] - b[0], a[1] - b[1]);
const scaleC = (a, t) => C(a[0] * t, a[1] * t);
const mulC = (a, b) => C(a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]);
const conjugate = a => C(a[0], -a[1]);
const normC = a => Math.hypot(...a);
const divC = (a, b) => scaleC(mulC(a, conjugate(b)), 1 / (b[0] ** 2 + b[1] ** 2));
const cis = t => C(Math.cos(t), Math.sin(t));
const closeC = (a, b, tolerance = 1e-10) => close(a[0], b[0], tolerance) && close(a[1], b[1], tolerance);

function simpson(f, a, b, panels = 8192) {
  const h = (b - a) / panels;
  let s = f(a) + f(b);
  for (let j = 1; j < panels; j++) s += (j % 2 ? 4 : 2) * f(a + j * h);
  return s * h / 3;
}
const moment = (x, k) => simpson(t => t ** k * Math.exp(-t * t - 2 * x * t), 0, 12);
const erfcxIntegral = x => 2 * moment(x, 0) / Math.sqrt(Math.PI);
function besselTerm(n, k, x, modified = false) {
  const v = qdiv(powQ(qdiv(x, 2), 2 * k + n), q(factorial(k) * factorial(k + n)));
  return !modified && k % 2 ? qmul(-1, v) : v;
}
const besselSumQ = (n, x, terms = 18, modified = false) => sumQ(Array.from({ length: terms }, (_, k) => besselTerm(n, k, x, modified)));
const besselSum = (n, x, modified = false) => qnum(besselSumQ(n, x, 40, modified));
function airyCoefficients(c0, c1, count = 24) {
  const c = Array.from({ length: count }, () => q(0)); c[0] = q(c0); c[1] = q(c1);
  for (let j = 0; j + 3 < count; j++) c[j + 3] = qdiv(c[j], (j + 3) * (j + 2));
  return c;
}
function evaluateQPolynomial(coefficients, x) {
  return coefficients.reduceRight((s, c) => qadd(qmul(s, x), c), q(0));
}

const fixtures = {
  'ewald-unit-nonneutral': () => {
    const charges = [q(1)], total = sumQ(charges), zeroModeEigenvalue = q(0);
    for (const constantCoefficient of [-3, 0, 2])
      requireCase(eq(qmul(zeroModeEigenvalue, constantCoefficient), 0), 'constant Fourier mode has nonzero Laplacian');
    requireCase(eq(total, 1) && !eq(qmul(4, total), 0), 'unit-charge zero-mode obstruction disappeared');
    return 'unit-charge zero Fourier coefficient is 1, while the constant-mode Laplacian is 0 for three trial solution coefficients; finite compatibility obstruction only';
  },
  'ewald-dipole-modes': () => {
    let count = 0;
    for (let k1 = -4; k1 <= 4; k1++) for (let k2 = -2; k2 <= 2; k2++) for (let k3 = -2; k3 <= 2; k3++) {
      const rho = subC(cis(0), cis(-2 * Math.PI * (k1 / 2 + k2 * 0 + k3 * 0)));
      requireCase(closeC(rho, C(k1 % 2 === 0 ? 0 : 2)), 'dipole Fourier parity mismatch'); count++;
    }
    return `${count} direct two-charge Fourier sums, including zero and both signed parities; not an infinite reciprocal-energy evaluation`;
  },
  'ewald-collision-self-kernel': () => {
    // Integrate erf locally, avoiding cancellation from a remote tail integral.
    for (const alpha of [1, 2]) {
      let previous = 0;
      for (const r of [1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128]) {
        const erf = 2 / Math.sqrt(Math.PI) * simpson(t => Math.exp(-t * t), 0, alpha * r, 256);
        const self = (1 - erf) / r;
        const derivative = -2 * alpha * Math.exp(-((alpha * r) ** 2)) / (Math.sqrt(Math.PI) * r) - (1 - erf) / (r * r);
        requireCase(self > previous && self > 0, 'screened self-potential fails finite source approach growth');
        requireCase(Math.abs(self - 1 / r) <= 2 * alpha / Math.sqrt(Math.PI) + 1e-10, 'screened self-potential residual exceeds local bound');
        requireCase(Math.abs(derivative + 1 / (r * r)) <= 2 * alpha ** 3 * r + 1e-8, 'radial Coulomb derivative cancellation failed');
        previous = self;
      }
    }
    return 'two alpha values and five nonzero dyadic radii: independently integrated screened self-potential grows and Coulomb potential/derivative residuals stay bounded; no infinite periodic remainder or source-limit proof';
  },
  'ewald-cutoff-tradeoff': () => {
    let real1 = 0, real2 = 0, reciprocal1 = 0, reciprocal2 = 0;
    for (let m = 1; m <= 8; m++) {
      const w = (m + 1) ** 3, a = Math.exp(-m * m), b = Math.exp(-4 * m * m) / 2;
      const c = Math.exp(-m * m / 4), d = Math.exp(-m * m / 16);
      requireCase(b > 0 && b < a && d > c && c > 0, 'fixed-shell alpha tradeoff failed');
      real1 += w * a; real2 += w * b; reciprocal1 += w * c; reciprocal2 += w * d;
    }
    requireCase(real2 < real1 && reciprocal2 > reciprocal1, 'finite positive shell sum tradeoff failed');
    return 'alpha 1 versus 2 at shells m=1..8 and their positive weighted sums: real terms decrease and reciprocal terms increase; no infinite-tail monotonicity or optimal-alpha proof';
  },
  'ewald-mesh-gradient': () => {
    const M = 4, P = 3, charge = [1, -1], modes = [1, -1], alpha = 2;
    const spline = u => u <= 0 || u >= 3 ? 0 : .5 * [1, -3, 3, -1].reduce((s, a, j) => s + a * Math.max(u - j, 0) ** 2, 0);
    const dspline = u => u <= 0 || u >= 3 ? 0 : [1, -3, 3, -1].reduce((s, a, j) => s + a * Math.max(u - j, 0), 0);
    const weight1 = (t, l, derivative = false) => {
      let v = 0; for (let wrap = -2; wrap <= 2; wrap++) v += (derivative ? M * dspline(M * t - l - M * wrap) : spline(M * t - l - M * wrap));
      return v;
    };
    const weight = (x, l, derivative = -1) => l.reduce((v, a, r) => v * weight1(x[r], a, r === derivative), 1);
    const grid = []; for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) for (let c = 0; c < 4; c++) grid.push([a, b, c]);
    const window = k => scaleC(cis(-Math.PI * P * k / M), (Math.sin(Math.PI * k / M) / (Math.PI * k / M)) ** P);
    const coefficient = k => 4 * Math.PI * Math.exp(-((2 * Math.PI * k) ** 2) / (4 * alpha ** 2)) / (2 * Math.PI * k) ** 2;
    const particleFactor = (x, k, derivative = -1) => divC(grid.reduce((z, l) => addC(z, scaleC(cis(-2 * Math.PI * k * l[0] / M), weight(x, l, derivative))), C(0)), conjugate(window(k)));
    function energy(positions, corrected = false) {
      let value = 0;
      for (const k of modes) {
        const b = positions.map(x => particleFactor(x, k));
        const spread = grid.map(l => charge.reduce((z, qi, i) => z + qi * weight(positions[i], l), 0));
        requireCase(close(spread.reduce((a, z) => a + z, 0), 0), 'neutral spread zero mode');
        const unitary = grid.reduce((z, l, j) => addC(z, scaleC(cis(-2 * Math.PI * k * l[0] / M), spread[j] / 8)), C(0));
        const z = divC(scaleC(unitary, 8), conjugate(window(k)));
        const direct = b.reduce((s, v, i) => addC(s, scaleC(v, charge[i])), C(0));
        requireCase(closeC(z, direct), 'unitary DFT particle factor normalization');
        value += .5 * coefficient(k) * normC(z) ** 2;
        if (corrected) value -= .5 * coefficient(k) * b.reduce((s, v, i) => s + charge[i] ** 2 * (normC(v) ** 2 - 1), 0);
      }
      return value;
    }
    let nonzero = false;
    for (const offset of [0, 1 / 32]) {
      const positions = [[1 / 8 + offset, 1 / 8, 1 / 8], [5 / 8, 1 / 8, 1 / 8]];
      requireCase(positions.every(x => x.every(t => !Number.isInteger(M * t))), 'assignment knot');
      for (const k of modes) requireCase(Math.abs(k) < M / 2 && normC(window(k)) > .1, 'mode/window denominator');
      for (const corrected of [false, true]) for (let axis = 0; axis < 3; axis++) {
        let force = 0;
        for (const k of modes) {
          const b = positions.map(x => particleFactor(x, k));
          const z = b.reduce((s, v, i) => addC(s, scaleC(v, charge[i])), C(0));
          const interaction = corrected ? subC(z, scaleC(b[0], charge[0])) : z;
          force -= charge[0] * coefficient(k) * mulC(conjugate(interaction), particleFactor(positions[0], k, axis))[0];
        }
        const h = 1e-6, plus = positions.map(x => [...x]), minus = positions.map(x => [...x]);
        plus[0][axis] += h; minus[0][axis] -= h;
        const difference = -(energy(plus, corrected) - energy(minus, corrected)) / (2 * h);
        requireCase(close(force, difference, 2e-8), 'mesh gather differs from independently perturbed finite energy');
        if (Math.abs(force) > 1e-6) nonzero = true;
      }
    }
    requireCase(nonzero, 'all mesh derivative comparisons were stationary');
    return '64-node order-3 dipole spread, signed +/-1 modes, unitary DFT/deconvolution and corrected/uncorrected gathers against centered energy differences at original and nearby off-knot data; finite floating comparisons, not error-theorem or FFT certification';
  },
  'airy-origin-coefficients': () => {
    for (const [a, b] of [[q(2, 3), q(-3, 5)], [q(5, 7), q(11, 13)]]) {
      const c = airyCoefficients(a, b);
      requireCase(eq(evaluateQPolynomial(c, 0), a) && eq(evaluateQPolynomial(c.slice(1).map((x, j) => qmul(j + 1, x)), 0), b), 'Airy initial coefficient/derivative');
      requireCase(eq(c[2], 0) && eq(c[3], qdiv(a, 6)) && eq(c[4], qdiv(b, 12)) && c.filter((_, k) => k % 3 === 2).every(v => eq(v, 0)), 'Airy residue-class recurrence');
    }
    // u=v^3 removes the fractional endpoint singularities in both Gamma integrals.
    const g13 = 3 * simpson(v => Math.exp(-(v ** 3)), 0, 4);
    const g23 = 3 * simpson(v => v * Math.exp(-(v ** 3)), 0, 4);
    const constants = [1 / (3 ** (2 / 3) * g23), -1 / (Math.cbrt(3) * g13), 1 / (3 ** (1 / 6) * g23), 3 ** (1 / 6) / g13];
    const references = [.3550280538878172, -.2588194037928068, .6149266274460007, .4482883573538264];
    requireCase(constants.every((x, i) => close(x, references[i], 2e-9)), 'Gamma-integral Airy origin normalization');
    return 'two exact 24-coefficient recurrence fixtures preserve c0,c1,c2=0,c3=c0/6,c4=c1/12, plus independent bounded transformed Gamma quadrature checks all four Airy origin constants; not execution/certification of the source evaluator';
  },
  'special-zero-branches': () => {
    let comparisons = 0;
    for (let k = 0; k < 16; k++) {
      // The nonzero pi/sqrt(pi) prefactors can be factored out at the origin.
      for (const [exponent, factorialOrder] of [[4 * k + 1, 2 * k], [4 * k + 3, 2 * k + 1], [2 * k + 1, k]]) {
        const term = qdiv(powQ(0, exponent), q(factorial(factorialOrder) * BigInt(exponent)));
        requireCase(eq(term, 0), 'Fresnel/erf zero term'); comparisons++;
      }
    }
    for (const [a, b, c] of [[q(1), q(1), q(2)], [q(-2), q(3), q(1)], [q(1, 2), q(2), q(3)]]) {
      let h = q(1), total = h;
      for (let k = 0; k < 12; k++) {
        h = qmul(h, qdiv(qmul(qmul(0, qadd(a, k)), qadd(b, k)), qmul(qadd(c, k), k + 1)));
        total = qadd(total, h); requireCase(eq(h, 0), 'Gauss higher zero term');
      }
      requireCase(eq(total, 1), 'Gauss origin value');
    }
    requireCase(eq(qsub(1, 0), 1), 'erfc origin complement');
    return `${comparisons} exact Fresnel/erf zero terms and three 13-term admissible Gauss origins, with first term 1 and zero later terms/tails; ratios never evaluated as 0/0; finite coefficient check only`;
  },
  'bessel-zero-branches': () => {
    for (let n = 0; n <= 8; n++) for (const modified of [false, true]) {
      const terms = Array.from({ length: 16 }, (_, k) => besselTerm(n, k, q(0), modified));
      requireCase(eq(sumQ(terms), Number(n === 0)), 'integer Bessel origin');
      requireCase(terms.every((a, k) => eq(a, Number(n === 0 && k === 0))), 'unexpected nonzero Bessel origin term');
    }
    let prior = 0;
    for (const x of [0, 1, 2, 4, 8]) {
      const ordinary = besselSum(0, x, true), scaled = Math.exp(-x) * ordinary;
      requireCase(ordinary >= prior && scaled >= 0 && scaled <= 1 + 1e-12, 'finite scaled-I growth/range'); prior = ordinary;
    }
    requireCase(prior > 400, 'finite unscaled-I growth witness missing');
    return '18 exact J/I origin polynomials (orders0..8) and five finite I0/scaled-I0 values x=0,1,2,4,8; no general order or unbounded-growth proof';
  },
  'euler-constant-m1': () => {
    const H1 = sumQ([q(1)]), log1 = Math.log(1);
    let H = 0; const N = 4096; for (let k = 1; k <= N; k++) H += 1 / k;
    const approximant = H - Math.log(N), interval = [approximant - 1 / N, approximant];
    requireCase(eq(H1, 1) && log1 === 0 && interval[0] > 0 && interval[1] < 1, 'M=1 Euler enclosure specialization');
    return 'exact H1=1/log1=0 endpoints and a 4096-term defining harmonic approximant consistent with the M=1 enclosure; no constant-limit or universal harmonic-bound proof';
  },
  'gamma-recurrence-one': () => {
    const T = 16, tail = Math.exp(-T);
    const g1 = simpson(t => Math.exp(-t), 0, T) + tail;
    const g2 = simpson(t => t * Math.exp(-t), 0, T) + (T + 1) * tail;
    requireCase(close(g1, 1, 1e-10) && close(g2, 1, 1e-10) && close(g2, g1, 1e-10), 'Gamma recurrence at1 from integrals');
    return 'independent bounded Euler-integrand quadratures for Gamma(1),Gamma(2), with explicit exponential tails, agree with Gamma(2)=Gamma(1)=1; no meromorphic continuation proof';
  },
  'bessel-integrals-origin': () => {
    for (let n = 0; n <= 4; n++) {
      const j = simpson(t => Math.cos(n * t), 0, Math.PI, 256) / Math.PI;
      const i = simpson(t => Math.exp(0 * Math.cos(t)) * Math.cos(n * t), 0, Math.PI, 256) / Math.PI;
      const series = qnum(besselSumQ(n, 0));
      requireCase(close(j, series) && close(i, series), 'Bessel zero-argument integral/series mismatch');
    }
    return 'five finite Fourier-integral quadratures at x=0 against independent factorial series values, including n=0 value1; not general integral identities';
  },
  'binet-half-panel': () => {
    const h = q(1, 8);
    const integral = sumQ(Array.from({ length: 4 }, (_, j) => qmul(h, qsub(q(1, 2), qmul(q(2 * j + 1, 2), h)))));
    requireCase(eq(integral, q(1, 8)), 'Binet affine panel integral at1/2');
    for (const t of [q(0), q(1, 4), q(1, 2), q(3, 4), q(1)])
      requireCase(qcmp(qdiv(qmul(t, qsub(1, t)), 2), q(1, 8)) <= 0, 'finite panel maximum');
    return 'exact midpoint integration of the affine sawtooth on [0,1/2] gives1/8, with five exact panel samples; no improper Binet identity proof';
  },
  'erfcx-moments-k0': () => {
    for (const x of [.5, 1, 2]) {
      const [m0, m1, m2] = [0, 1, 2].map(k => moment(x, k));
      requireCase(m0 > 0 && m1 > 0 && m2 > 0, 'positive finite moments');
      requireCase(close(2 * x * m0 + 2 * m1, 1, 2e-9), 'zeroth moment recurrence');
      requireCase(close(m1 / m0, 1 / (2 * (x + m2 / m1)), 2e-9), 'moment ratio k0');
    }
    return 'three x-values, independent [0,12] integrals of moments0,1,2 verify k=0 recurrence and ratio without dividing by zero; fixed quadrature, not all moments';
  },
  'bessel-midpoint-origin': () => {
    for (const m of [1, 2, 4, 8]) for (const modified of [false, true]) {
      const h = Math.PI / m; let total = 0;
      for (let j = 0; j < m; j++) { const t = (j + .5) * h; total += modified ? Math.exp(-0 * (1 - Math.cos(t))) * Math.cos(0 * t) : Math.cos(0 * t - 0 * Math.sin(t)); }
      const normalized = h * total / Math.PI, bound = h * h / 24 * ((0 + 0) ** 2 + 0);
      requireCase(close(normalized, 1) && bound === 0, 'constant-integrand midpoint origin');
    }
    return 'ordinary/scaled-I constant integrands on 1,2,4,8 midpoint panels give normalized value1 and exact zero remainder coefficient; finite endpoint case only';
  },
  'erfcx-asymptotic-one': () => {
    for (const x of [1, 2, 3]) {
      const integral = erfcxIntegral(x), main = 1 / (x * Math.sqrt(Math.PI)), residual = main - integral;
      requireCase(residual >= 0 && residual <= 1 / (2 * x ** 3 * Math.sqrt(Math.PI)) + 1e-9, 'signed N=1 erfcx remainder');
    }
    return 'independent positive-integral erfcx values at1,2,3 lie below S1 and within its N=1 bound; bounded numerical comparison, not an asymptotic expansion proof';
  },
  'erfcx-cf-zero': () => {
    for (const x of [.5, 1, 2]) {
      const value = erfcxIntegral(x), upperRatio = 1 / (2 * x);
      const lower = 1 / (Math.sqrt(Math.PI) * (x + upperRatio)), upper = 1 / (Math.sqrt(Math.PI) * x);
      requireCase(value >= lower - 1e-9 && value <= upper + 1e-9, 'depth-zero erfcx interval');
      if (x === 1) requireCase(close(lower, 2 / (3 * Math.sqrt(Math.PI))) && close(upper, 1 / Math.sqrt(Math.PI)), 'specified x=1 initial interval');
    }
    return 'depth-zero ratio interval mapped without a backward step and independently compared to three positive erfcx integrals, including x=1 endpoints2/(3sqrt(pi)),1/sqrt(pi); not depth convergence or source algorithm execution';
  },
  'stirling-half-pi-sector': () => {
    for (const z of [1, 2, 4]) {
      const sector = 1 / (8 * Math.sin(Math.PI / 4) ** 2 * z), specialized = 1 / (4 * z);
      let exactLogGamma = 0; for (let k = 1; k < z; k++) exactLogGamma += Math.log(k);
      const main = (z - .5) * Math.log(z) - z + .5 * Math.log(2 * Math.PI);
      requireCase(close(sector, specialized) && Math.abs(exactLogGamma - main) <= specialized, 'finite half-pi Stirling specialization');
    }
    return 'delta=pi/2 constant reduction and three integer Gamma factorial remainders satisfy1/(4z); finite real samples, not a complex-sector theorem';
  },
  'gamma-targets-one': () => {
    let H = 0; const N = 128; for (let n = 1; n <= N; n++) H += 1 / n;
    const gamma = [H - Math.log(N) - 1 / N, H - Math.log(N)];
    let partial = 0; for (let n = 1; n <= N; n++) partial += 1 / n - Math.log1p(1 / n);
    const tail = 1 / (2 * N * (1 - 1 / (N + 1))), logBox = [partial - gamma[1] - tail, partial - gamma[0] + tail];
    const value = simpson(t => Math.exp(-t), 0, 16) + Math.exp(-16);
    requireCase(logBox[0] <= 0 && logBox[1] >= 0 && Math.exp(logBox[0]) <= value && Math.exp(logBox[1]) >= value, 'Gamma1/logGamma1 finite range model');
    const radius = (logBox[1] - logBox[0]) / 2;
    requireCase(radius < .02 && radius > 1e-8, 'conditional finite radius tests lost');
    return '128-term direct log-product/Euler interval contains ell(1)=0 and its exponential contains independently integrated Gamma(1)=1; radius passes .02 but not1e-8, so no unconditional finite-cap success claim';
  },
  'bessel-casoratian': () => {
    const j0 = besselSumQ(0, 1), j1 = besselSumQ(1, 1);
    requireCase(qcmp(j0, q(3, 4)) >= 0 && qcmp(j1, q(7, 16)) >= 0, 'finite alternating Bessel lower bounds');
    const J = [j0, j1], D = [qmul(-1, j1), j0];
    const w0 = qadd(squareQ(j0), squareQ(j1));
    requireCase(qcmp(w0, q(193, 256)) >= 0, 'Casoratian lower bound193/256');
    for (let k = 1; k <= 8; k++) {
      J.push(qsub(qmul(2 * k, J[k]), J[k - 1])); D.push(qsub(qmul(2 * k, D[k]), D[k - 1]));
      requireCase(eq(qsub(qmul(J[k], D[k + 1]), qmul(J[k + 1], D[k])), w0), 'exact finite Casoratian recurrence');
    }
    return '18-term rational x=1 seeds satisfy lower bounds and exact propagated Wronskians through index8 equal W0>=193/256; finite recurrence model, not global nonvanishing';
  },
  'miller-normalization': () => {
    const N = 4, js = Array.from({ length: 6 }, (_, n) => besselSum(n, 1));
    const ds = [-js[1], js[0]]; for (let j = 1; j <= N; j++) ds.push(2 * j * ds[j] - ds[j - 1]);
    const u = Array(N + 2).fill(0); u[N] = 1; for (let j = N; j >= 1; j--) u[j - 1] = 2 * j * u[j] - u[j + 1];
    const contamination = -js[N + 1] / ds[N + 1];
    requireCase(Math.abs(ds[N + 1]) > 1 && u[0] !== 0 && u[1] !== 0, 'finite Miller denominator');
    for (const s of [0, 1]) for (let n = 0; n < N; n++) {
      const normalized = js[s] * u[n] / u[s], error = contamination * (js[s] * ds[n] - js[n] * ds[s]) / (js[s] + contamination * ds[s]);
      requireCase(close(normalized - js[n], error, 1e-10), 'finite Miller exact-error expression');
      if (n === s) requireCase(close(normalized, js[s]) && error === 0, 'normalization n=s error is nonzero');
    }
    return 'N=4,x=1 backward recurrence, two normalization slots and eight finite error comparisons include the required n=s zeros and nontrivial n!=s cases; no terminal-index convergence';
  },
  'hypergeometric-domain': () => {
    const origin = qdiv(qmul(factorial(0), factorial(0)), qmul(factorial(1), factorial(0)));
    requireCase(eq(origin, 1), 'Gauss removable origin');
    const z = -2, insideSeries = z * z < 1, logArgument = 1 - z;
    const continuation = -Math.log(logArgument) / z;
    requireCase(!insideSeries && logArgument > 0 && close(continuation, Math.log(3) / 2), 'Gauss disk versus principal continuation');
    return 'origin Pochhammer/factorial term is1; -2 fails disk and has positive principal-log argument3 with finite continuation log(3)/2; finite domain witness only';
  },
  'erf-subtraction': () => {
    for (const eta of [q(1, 16), q(1, 256)]) for (const exactErf of [q(1, 4), q(7, 8)]) {
      const exact = qsub(1, exactErf), perturbed = qsub(qadd(1, eta), qsub(exactErf, eta));
      const error = qsub(perturbed, exact), expected = qmul(2, eta);
      requireCase(eq(error, expected) && eq(qdiv(error, exact), qdiv(expected, exact)), 'signed subtraction bound not attained');
    }
    return 'four exact rational signed-error substitutions delta1=eta,delta2=-eta attain2eta and the relative bound; no tail asymptotic or evaluator certification';
  },
  'erfcx-least-term': () => {
    const terms = []; let rising = 1;
    for (let k = 0; k <= 12; k++) { terms.push(rising / (3 ** (2 * k + 1) * Math.sqrt(Math.PI))); rising *= k + .5; }
    requireCase(close(terms[9] / terms[8], 17 / 18) && close(terms[10] / terms[9], 19 / 18), 'x3 least-term crossing ratios');
    requireCase(terms.every(t => t >= terms[9] - 1e-15), 'N9 is not finite least term');
    const partial = terms.slice(0, 9).reduce((s, a, k) => s + (k % 2 ? -a : a), 0), residual = partial - erfcxIntegral(3);
    requireCase(residual >= -1e-9 && residual <= terms[9] + 1e-9, 'N9 signed first omitted term');
    return 'x=3,N=9 direct13-term values cross at17/18 and19/18 and a separate positive-integral quadrature lies in the signed remainder interval; not convergence of the asymptotic series';
  },
  'bessel-forward-sign': () => {
    const j0 = besselSumQ(0, 1), j1 = besselSumQ(1, 1), D = [qmul(-1, j1), j0];
    requireCase(qcmp(j0, q(3, 4)) >= 0 && qcmp(j1, q(7, 16)) >= 0, 'x1 seed bounds');
    for (let n = 1; n <= 8; n++) D.push(qsub(qmul(2 * n, D[n]), D[n - 1]));
    requireCase(qcmp(D[2], q(31, 16)) >= 0 && qcmp(D[2], D[1]) > 0, 'D2 lower/growth bound');
    for (let n = 2; n <= 8; n++) requireCase(qcmp(D[n + 1], qmul(3, D[n])) >= 0, 'finite complementary factor3 growth');
    const epsilon = q(1, 1024); let flipped = false;
    for (let n = 0; n <= 8; n++) {
      const J = besselSumQ(n, 1); requireCase(qcmp(J, 0) > 0, 'finite x1 J positivity');
      if (qcmp(qsub(J, qmul(epsilon, D[n])), 0) < 0) flipped = true;
    }
    requireCase(flipped, 'finite small-seed sign-flip witness missing');
    return 'exact rational x=1 truncated-series lower bounds, D2>=31/16, complementary factors through9, and epsilon1/1024 flips a J sign by order8; finite witness, not an all-epsilon or unbounded-growth proof';
  },
  'relative-zero-box': () => {
    const cases = [[q(-1, 2), q(1, 2)], [q(-1, 16), q(0)], [q(0), q(0)], [q(1), q(2)]];
    for (const [a, b] of cases) {
      const containsZero = qcmp(a, 0) <= 0 && qcmp(b, 0) >= 0;
      const distance = containsZero ? q(0) : qcmp(a, 0) > 0 ? a : qmul(-1, b);
      const radius = qdiv(qsub(b, a), 2);
      const relative = qcmp(distance, 0) > 0 && qcmp(radius, qmul(q(1, 2), distance)) <= 0;
      requireCase(containsZero ? !relative : relative, 'zero-exclusion relative flag');
    }
    return 'four exact interval distance/radius tests include an exact zero, one-sided and straddling zero boxes, plus a positive certified control; assumes the source exact Airy zero, does not locate or prove it';
  },
  'spherical-ode-l0': () => {
    for (const z of [.5, 1, 2]) {
      const j = Math.sin(z) / z, jp = Math.cos(z) / z - Math.sin(z) / z ** 2;
      const jpp = -Math.sin(z) / z - 2 * Math.cos(z) / z ** 2 + 2 * Math.sin(z) / z ** 3;
      const h = mulC(C(0, -1 / z), cis(z)), hp = mulC(C(1 / z, 1 / z ** 2), cis(z));
      const hpp = mulC(C(-2 / z ** 2, 1 / z - 2 / z ** 3), cis(z));
      requireCase(close(jpp + 2 * jp / z + j, 0) && closeC(addC(addC(hpp, scaleC(hp, 2 / z)), h), C(0)), 'l0 radial residual');
    }
    return 'l0 regular/outgoing functions and two analytic derivatives give zero radial residual at three positive points; uses the actual source h0=-i exp(iz)/z, not the packet typo without /z; no all-order ODE proof';
  },
  'spherical-wronskian-l0': () => {
    for (const z of [.5, 1, 2]) {
      const j = Math.sin(z) / z, jp = Math.cos(z) / z - Math.sin(z) / z ** 2;
      const h = mulC(C(0, -1 / z), cis(z)), hp = mulC(C(1 / z, 1 / z ** 2), cis(z));
      requireCase(closeC(scaleC(subC(scaleC(hp, j), scaleC(h, jp)), z * z), C(0, 1)), 'l0 Wronskian sign/normalization');
    }
    return 'three independently evaluated positive-point Wronskians satisfy z^2 W=i for the outgoing convention; not a general Wronskian theorem';
  },
  'spherical-scaled-graph-l0': () => {
    for (const z of [.5, 1, 2]) {
      const A = 0, B = 1 / z, dA = 0, dB = -1 / z ** 2, C0 = C(0, -1 / z), dC0 = C(0, 1 / z ** 2);
      const u = A * Math.cos(z) + B * Math.sin(z), v = (dA + B) * Math.cos(z) + (dB - A) * Math.sin(z);
      const w = mulC(C0, cis(z)), t = mulC(addC(dC0, mulC(C(0, 1), C0)), cis(z));
      requireCase(close(u, Math.sin(z) / z) && close(v, Math.cos(z) / z - Math.sin(z) / z ** 2), 'l0 regular graph');
      const scale = scaleC(cis(-z), z), scaled = mulC(scale, w), scaledDerivative = mulC(scale, t);
      requireCase(closeC(scaled, C(0, -1)) && closeC(scaledDerivative, C(1, 1 / z)), 'scaled derivative confused with derivative of scaled value');
      const epsilon = 1e-5, outgoing = x => mulC(C(0, -1 / x), cis(x));
      const difference = scaleC(subC(outgoing(z + epsilon), outgoing(z - epsilon)), 1 / (2 * epsilon));
      requireCase(closeC(t, difference, 2e-8), 'l0 outgoing graph derivative');
    }
    return 'three l0 base graphs plus finite-difference derivative controls give all unscaled values and scaled H=-i,DH=1+i/z; the latter is explicitly not the zero derivative of scaled H; finite floating model only';
  },
  'complex-cauchy-coefficients': () => {
    const multiplyI = (a, n) => { let z = a; for (let j = 0; j < n; j++) z = [qmul(-1, z[1]), z[0]]; return z; };
    for (let n = 0; n <= 6; n++) {
      let value = [q(0), q(0)];
      for (let r = 0; r <= n; r++) {
        let term = multiplyI([qdiv(r % 2 ? -1 : 1, q(factorial(r) * factorial(n - r))), q(0)], n);
        value = [qadd(value[0], term[0]), qadd(value[1], term[1])];
      }
      requireCase(eq(value[0], Number(n === 0)) && eq(value[1], 0), 'finite exp(-iz)exp(iz) convolution coefficient');
    }
    return 'exact Gaussian-rational Cauchy coefficients n=0..6, including required S0=1,S1=S2=0; finite convolution, not an infinite-series product proof';
  },
  'spherical-taylor-m1': () => {
    const M = 1, b = q(1), error = qdiv(qmul(2, powQ(b, M + 1)), q(factorial(M + 1)));
    requireCase(eq(error, 1) && qcmp(q(M + 2), qmul(2, b)) >= 0, 'M1,b1 Taylor tail/guard');
    const polynomial = C(1, 1), actual = cis(1), residual = subC(actual, polynomial);
    requireCase(normC(residual) < qnum(error) && Math.abs(residual[0]) < 1 && Math.abs(residual[1]) < 1, 'M1 exponential remainder sample');
    const finiteAbsoluteTail = sumQ(Array.from({ length: 19 }, (_, j) => qdiv(1, q(factorial(j + 2)))));
    requireCase(qcmp(finiteAbsoluteTail, error) < 0, 'finite absolute Taylor tail exceeds E1');
    return 'exact E1=1 and3>=2b, 19 exact omitted absolute terms and exp(i) sample lie within bound; not all-degree or whole-input range enclosure proof';
  },
};

export const numericalFrontierSpecialChecks = Object.freeze({
  'numerical-frontier71-special-fixture': (smoke = {}) => {
    const fail = summary => ({ ok: false, summary });
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) return fail('fixture descriptor must be an object');
    const allowed = new Set(['check', 'asserts', 'fixture', 'parameters', 'claim', 'checked_in']);
    if (Object.keys(smoke).some(k => !allowed.has(k))) return fail('unsupported special fixture parameter');
    if ('check' in smoke && smoke.check !== 'numerical-frontier71-special-fixture') return fail('wrong fixture family');
    if ('parameters' in smoke && (!smoke.parameters || typeof smoke.parameters !== 'object' || Array.isArray(smoke.parameters) || Object.keys(smoke.parameters).some(k => k !== 'fixture'))) return fail('parameters supports only the fixed fixture selector');
    const top = smoke.fixture, nested = smoke.parameters?.fixture;
    if ((top !== undefined && typeof top !== 'string') || (nested !== undefined && typeof nested !== 'string') || (top !== undefined && nested !== undefined && top !== nested)) return fail('invalid or conflicting fixture selector');
    const selected = top ?? nested;
    if (selected !== undefined && !Object.hasOwn(fixtures, selected)) return fail('unknown bounded special fixture');
    try {
      const names = selected === undefined ? Object.keys(fixtures) : [selected];
      const results = names.map(fixture => ({ fixture, summary: fixtures[fixture]() }));
      return { ok: true, summary: `${results.length} bounded special/Ewald fixture(s); exact rational algebra or fixed numerical comparisons only`, results };
    } catch (error) { return fail(`bounded special fixture failed: ${error.message}`); }
  },
});
