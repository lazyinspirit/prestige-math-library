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
import { quantumQCChecks } from './finite-smoke-quantum-qc.mjs';
import { quantumQueryChecks } from './finite-smoke-quantum-query.mjs';
import { quantumEstimationChecks } from './finite-smoke-quantum-estimation.mjs';

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
  ...quantumQCChecks,
  ...quantumQueryChecks,
  ...quantumEstimationChecks,
  // Finite Gaussian fixtures: integrate the original prior/likelihood product
  // independently of the proposed completed-square parameters.
  'normal-normal-finite-n-posterior': () => {
    let cases = 0;
    for (const n of [1, 2, 5]) for (const tau of [0.5, 1, 2]) for (const barX of [-2, 0, 3]) {
      const variance = 1 / (n + tau ** -2), mean = n * barX * variance;
      const logKernel = theta => -n * (theta - barX) ** 2 / 2 - theta ** 2 / (2 * tau ** 2);
      const moments = smokeGaussianKernelMoments(logKernel, mean, Math.sqrt(variance));
      if (!(variance > 0) || !smokeClose(moments.mean, mean)
        || !smokeClose(moments.variance, variance)
        || !smokeClose(n * variance, n / (n + tau ** -2)))
        return smokeResult(false, `prior/likelihood quadrature disagrees at n=${n}, tau=${tau}, barX=${barX}`);
      cases++;
    }
    return smokeResult(true, `${cases} finite normal-normal models: direct prior/likelihood quadrature verifies posterior mean, variance and scaled variance; no asymptotic conclusion checked`);
  },
  'normal-working-model-calibration-boundary': () => {
    let cases = 0;
    for (const z of [1, 2]) {
      // Choose alpha by the defining quantile relation. Directly integrate the
      // sampling N(0,sigma^2) interval, without invoking a CDF library.
      const nominal = smokeSimpson(smokeStandardNormalDensity, -z, z);
      for (const sigma of [0.5, 1, 2]) {
        const coverage = smokeSimpson(x => smokeStandardNormalDensity(x / sigma) / sigma, -z, z);
        const formula = 2 * smokeNormalCdf(z / sigma) - 1;
        const direction = sigma === 1 ? smokeClose(coverage, nominal)
          : sigma > 1 ? coverage < nominal : coverage > nominal;
        if (!direction || !smokeClose(coverage, formula))
          return smokeResult(false, `coverage direction/formula disagrees at z=${z}, sigma=${sigma}`);
        cases++;
      }
    }
    return smokeResult(true, `${cases} finite coverage models, z=1,2 and sigma=1/2,1,2: interval integration verifies nominal equality and both miscalibration directions; no CLT checked`);
  },
  'boundary-posterior-support-and-tv-witness': () => {
    let cases = 0;
    for (const n of [1, 4, 16]) for (const delta of [-2, 0, 2]) {
      const logKernel = h => h * delta - h * h / 2 - h / Math.sqrt(n);
      const center = delta - 1 / Math.sqrt(n);
      for (const h of [0, 0.5, 2]) {
        if (!smokeClose(logKernel(h) - logKernel(0), -((h - center) ** 2 - center ** 2) / 2))
          return smokeResult(false, `truncated posterior kernel disagrees at n=${n}, delta=${delta}, h=${h}`);
      }
      // The original exponential prior vanishes on the negative half-line.
      const prior = theta => theta < 0 ? 0 : Math.exp(-theta);
      for (const h of [-3, -1, -0.25]) if (prior(h / Math.sqrt(n)) !== 0)
        return smokeResult(false, 'posterior support extends to negative h');
      const negativeMass = smokeSimpson(h => smokeStandardNormalDensity(h - delta), -12, 0);
      const bound = smokeNormalCdf(-delta);
      if (!(negativeMass > 0) || !smokeClose(negativeMass, bound)
        || (delta <= 0 && negativeMass < 0.5 - 1e-9))
        return smokeResult(false, `negative-half-line TV witness disagrees at n=${n}, delta=${delta}`);
      cases++;
    }
    return smokeResult(true, `${cases} finite truncated-normal models: prior support, completed-square center and negative-half-line masses verify the TV witness, including Delta=0; no convergence-in-probability claim checked`);
  },
  'gaussian-sequence-one-coordinate-posterior': () => {
    for (const x of [-2, 0, 3]) {
      // n=i=alpha=kappa_i=1: prior variance 1, noise variance 1.
      const joint = theta => smokeStandardNormalDensity(theta) * smokeStandardNormalDensity(x - theta);
      const moments = smokeGaussianKernelMoments(theta => -(theta * theta + (x - theta) ** 2) / 2, x / 2, Math.SQRT1_2);
      const predictive = smokeSimpson(joint, x / 2 - 10, x / 2 + 10);
      const claimedPredictive = smokeStandardNormalDensity(x / Math.SQRT2) / Math.SQRT2;
      if (!smokeClose(moments.mean, x / 2) || !smokeClose(moments.variance, 0.5)
        || !smokeClose(predictive, claimedPredictive))
        return smokeResult(false, `one-coordinate posterior/predictive disagrees at x=${x}`);
    }
    return smokeResult(true, 'n=i=alpha=kappa_i=1, x=-2,0,3: prior/likelihood integration gives posterior N(x/2,1/2) and predictive N(0,2); no infinite-product or ell^2 claim checked');
  },

  // Bounded rank-one models; no claim about general rank or all fields.
  'cyclotomic-rank-one-f5-inverse': ({ modulus = 5, inverse_x_coefficient = -1 } = {}) => {
    if (modulus !== 5 || !Number.isInteger(inverse_x_coefficient) || Math.abs(inverse_x_coefficient) > 2)
      return smokeResult(false, 'expected the field F5 and a small integer inverse X coefficient');
    let cases = 0;
    for (let a = 1; a < 5; a++) for (let b = 1; b < 5; b++) {
      const model = cyclotomicQuadraticModel(5, a, b);
      const inverseAB = [1, 2, 3, 4].find(t => model.reduceNumber(a * b * t) === 1);
      const claimed = model.remainder([(a + b) * inverseAB, inverse_x_coefficient * inverseAB]);
      const solutions = [];
      // Independently find X^{-1} among all 25 degree-below-two residues.
      for (let c = 0; c < 5; c++) for (let d = 0; d < 5; d++) {
        if (model.equal(model.product([0, 1], [c, d]), [1, 0])) solutions.push([c, d]);
      }
      if (solutions.length !== 1 || !model.equal(claimed, solutions[0])
        || !model.equal(model.product(claimed, [0, 1]), [1, 0]))
        return smokeResult(false, `inverse formula fails for a=${a}, b=${b} in F5`);
      if (!model.equal(model.remainder([0, 0, 1]), [-a * b, a + b]))
        return smokeResult(false, `quadratic reduction fails for a=${a}, b=${b} in F5`);
      cases++;
    }
    return smokeResult(true, `all ${cases} unit pairs in F5, including four repeated roots: monic polynomial division and exhaustive 25-residue inverse search verify X^2=(a+b)X-ab and X^{-1}=(a+b-X)/(ab)`);
  },
  'cyclotomic-rank-one-content-collision': ({ epsilon_scale = 1, epsilon_shift_sign = -1 } = {}) => {
    if (!Number.isInteger(epsilon_scale) || Math.abs(epsilon_scale) > 2
      || !Number.isInteger(epsilon_shift_sign) || Math.abs(epsilon_shift_sign) > 2)
      return smokeResult(false, 'expected small integer coefficients for epsilon');
    // The first fixture is the source's actual Q-specialization Q=2,u1=u2=1.
    // Its monic integer reductions are exact also in Q; four finite-field
    // fixtures additionally exercise every allowed nonzero repeated root in F5.
    const fixtures = [{ modulus: 0, root: 1 }, ...[1, 2, 3, 4].map(root => ({ modulus: 5, root }))];
    for (const { modulus, root } of fixtures) {
      const model = cyclotomicQuadraticModel(modulus, root, root);
      const epsilon = model.remainder([epsilon_scale * epsilon_shift_sign * root, epsilon_scale]);
      if (model.equal(epsilon, [0, 0]))
        return smokeResult(false, `epsilon is zero for root ${root} over ${modulus ? 'F5' : 'Q'}`);
      if (!model.equal(model.product(epsilon, epsilon), [0, 0]))
        return smokeResult(false, `epsilon is not square-zero for root ${root} over ${modulus ? 'F5' : 'Q'}`);
      // Both one-box exponents are zero, so the specialized contents are the
      // two chosen roots themselves and the interpolation denominator is zero.
      const contents = [root, root];
      if (contents[0] - contents[1] !== 0)
        return smokeResult(false, 'the specialized interpolation denominator is nonzero');
    }
    if (epsilon_scale !== 1 || epsilon_shift_sign !== -1)
      return smokeResult(false, 'source normalization is epsilon=X-c');
    return smokeResult(true, 'actual Q specialization Q=2,u1=u2=1 has nonzero epsilon=X-1 with epsilon^2=0 and zero interpolation denominator; same exact identities hold at all four unit repeated roots in F5 (five bounded fixtures only)');
  },
  // Exact source witness: this checks the counterexample, not all real norm axioms.
  'anisotropic-real-norm-complex-homogeneity-witness': ({
    weights = [1, 2], vector = [1, 0], scalar = [0, 1], expected_values = [1, 2, 1],
  } = {}) => {
    const fail = summary => smokeResult(false, summary);
    const integerPair = value => Array.isArray(value) && value.length === 2
      && value.every(Number.isSafeInteger);
    if (!integerPair(weights) || !weights.every(x => x > 0)
      || !integerPair(vector) || !integerPair(scalar)
      || !Array.isArray(expected_values) || expected_values.length !== 3
      || !expected_values.every(Number.isSafeInteger))
      return fail('expected positive integer weights, Gaussian-integer pairs [real, imaginary], and three integer values');
    const [a, b] = weights.map(BigInt), [x, y] = vector.map(BigInt), [u, v] = scalar.map(BigInt);
    const abs = n => n < 0n ? -n : n;
    const norm = (re, im) => a * abs(re) + b * abs(im);
    const before = norm(x, y), after = norm(u * x - v * y, u * y + v * x);
    const modulusSquared = u * u + v * v;
    // Squaring avoids any numerical square-root approximation. All quantities
    // in the homogeneity equation are nonnegative; unequal squares refute it.
    if (after * after === modulusSquared * before * before)
      return fail('complex homogeneity does not fail at the supplied witness');
    if (JSON.stringify(weights) !== '[1,2]' || JSON.stringify(vector) !== '[1,0]'
      || JSON.stringify(scalar) !== '[0,1]')
      return fail('source witness requires weights [1,2], z=1 and scalar i');
    const [claimedBefore, claimedAfter, claimedModulus] = expected_values.map(BigInt);
    if (before !== claimedBefore || after !== claimedAfter || claimedModulus < 0n
      || claimedModulus * claimedModulus !== modulusSquared)
      return fail('computed norm values or nonnegative complex modulus disagree with expected_values');
    return smokeResult(true, 'exact Gaussian-integer witness z=1, scalar i: N(1)=1, N(i)=2, |i|=1; squared complex-homogeneity sides are 4 and 1 (finite witness only)');
  },
  'four-outcome-rademacher-pivot': ({ support = [[-1, -1], [-1, 1], [1, -1], [1, 1]] } = {}) => {
    const fail = summary => smokeResult(false, summary);
    if (!Array.isArray(support) || support.length !== 4 || support.some(row =>
      !Array.isArray(row) || row.length !== 2 || row.some(x => x !== -1 && x !== 1)))
      return fail('expected all four distinct pairs of Rademacher errors');
    if (new Set(support.map(row => row.join(','))).size !== 4)
      return fail('support must include every Rademacher pair exactly once');
    const n = 2, p = 1, gram = n, inverse = 1 / gram;
    const means = [0, 1].map(i => support.reduce((s, row) => s + row[i], 0) / 4);
    const variances = [0, 1].map(i => support.reduce((s, row) => s + (row[i] - means[i]) ** 2, 0) / 4);
    if (means.some(x => x !== 0) || variances.some(x => x !== 1))
      return fail('finite marginal means or variances disagree with the model');
    let zeroResidual = 0, positiveResidual = 0;
    for (const errors of support) {
      const beta = errors.reduce((s, x) => s + x, 0) * inverse;
      const residuals = errors.map(x => x - beta);
      const rss = residuals.reduce((s, x) => s + x * x, 0);
      const s2 = rss / (n - p), denominator2 = s2 * inverse;
      const pivot = s2 === 0 ? 0 : beta / Math.sqrt(denominator2);
      if (errors[0] === errors[1]) {
        if (rss !== 0 || Math.abs(beta) !== 1 || denominator2 !== 0 || pivot !== 0)
          return fail('equal-error zero-residual branch disagrees');
        zeroResidual++;
      } else {
        if (rss !== 2 || beta !== 0 || denominator2 !== 1 || pivot !== 0)
          return fail('opposite-error positive-residual branch disagrees');
        positiveResidual++;
      }
    }
    return smokeResult(zeroResidual === 2 && positiveResidual === 2,
      'enumerated four equally weighted independent sign pairs: mean0, variance1, two RSS0 branches and two RSS2 branches; every defined pivot is zero');
  },
  'four-row-regression-arithmetic': ({ design = [[1, 0], [1, 1], [1, 2], [1, 3]], response = [1, 2, 2, 4], x0 = [1, 2] } = {}) => {
    const fail = summary => smokeResult(false, summary);
    if (JSON.stringify(design) !== '[[1,0],[1,1],[1,2],[1,3]]' ||
      JSON.stringify(response) !== '[1,2,2,4]' || JSON.stringify(x0) !== '[1,2]')
      return fail('expected the exact four-row design, response and x0 from the source');
    const n = design.length, p = design[0].length, nu = n - p;
    const gram = [0, 1].map(j => [0, 1].map(k => design.reduce((s, row) => s + row[j] * row[k], 0)));
    const xty = [0, 1].map(j => design.reduce((s, row, i) => s + row[j] * response[i], 0));
    const determinant = gram[0][0] * gram[1][1] - gram[0][1] * gram[1][0];
    const adj = [[gram[1][1], -gram[0][1]], [-gram[1][0], gram[0][0]]];
    if (determinant <= 0) return fail('design Gram matrix is not invertible');
    const inverseIdentity = gram.every((row, i) => [0, 1].every(j =>
      row.reduce((s, x, k) => s + x * adj[k][j], 0) === determinant * Number(i === j)));
    const betaNumerators = adj.map(row => row.reduce((s, x, j) => s + x * xty[j], 0));
    const fittedNumerators = design.map(row => row.reduce((s, x, j) => s + x * betaNumerators[j], 0));
    const residualNumerators = response.map((y, i) => determinant * y - fittedNumerators[i]);
    const rssNumerator = residualNumerators.reduce((s, r) => s + r * r, 0), rssDenominator = determinant ** 2;
    const hNumerator = x0.reduce((s, x, i) => s + x * adj[i].reduce((t, a, j) => t + a * x0[j], 0), 0);
    const fittedMeanNumerator = x0.reduce((s, x, j) => s + x * betaNumerators[j], 0);
    // All equality checks use integer numerators and cross products. The
    // three squared half-widths below are the multipliers before common q^2.
    const widthDenominator = nu * rssDenominator * determinant;
    const slopeWidthNumerator = rssNumerator * adj[1][1];
    const meanWidthNumerator = rssNumerator * hNumerator;
    const predictionWidthNumerator = rssNumerator * (hNumerator + determinant);
    const ok = JSON.stringify(gram) === '[[4,6],[6,14]]' && determinant === 20 &&
      JSON.stringify(adj) === '[[14,-6],[-6,4]]' && inverseIdentity &&
      JSON.stringify(xty) === '[9,18]' && betaNumerators.every(b => 10 * b === 9 * determinant) &&
      JSON.stringify(fittedNumerators) === '[18,36,54,72]' && nu === 2 &&
      10 * rssNumerator === 7 * rssDenominator &&
      20 * rssNumerator === 7 * nu * rssDenominator &&
      40 * rssNumerator === 7 * n * rssDenominator &&
      10 * hNumerator === 3 * determinant && 10 * fittedMeanNumerator === 27 * determinant &&
      100 * slopeWidthNumerator === 7 * widthDenominator &&
      200 * meanWidthNumerator === 21 * widthDenominator &&
      200 * predictionWidthNumerator === 91 * widthDenominator &&
      3 * predictionWidthNumerator === 13 * meanWidthNumerator &&
      predictionWidthNumerator > meanWidthNumerator;
    return smokeResult(ok, ok
      ? 'independent integer Gram/adjugate and residual calculations give beta=(0.9,0.9), RSS0.70, residual variance0.35, ML variance0.175, h0.30, mean2.7; squared q-free widths0.07/0.105/0.455 and prediction/mean squared ratio13/3'
      : 'four-row regression arithmetic differs from at least one exact source value');
  },
  // Finite-window spatial likelihood witnesses for SME-50. The parameters
  // bind the particular square/empty/singleton observations in the contracts.
  // These deterministic computations do not prove the general item claims.
  'positive-count-square-window': ({ volume = 4, count = 3 } = {}) => {
    if (volume !== 4 || count !== 3)
      return smokeResult(false, 'this witness requires square volume 4 and count 3');
    const rate = count / volume;
    const logLikelihood = rho => count * Math.log(rho) - volume * rho;
    const score = rho => count / rho - volume;
    const probes = [1 / 16, 1 / 8, 1 / 4, 1 / 2, 3 / 4, 1, 2, 4];
    const candidates = probes.filter(rho => logLikelihood(rho) >= logLikelihood(rate) - 1e-12);
    const signs = probes.every(rho => rho < rate ? score(rho) > 0 : rho > rate ? score(rho) < 0 : score(rho) === 0);
    return smokeResult(rate === 3 / 4 && score(rate) === 0 && signs
      && candidates.length === 1 && candidates[0] === rate,
      `square volume=${volume}, count=${count}: score vanishes at rate ${rate}; eight positive-rate log-likelihood probes have unique maximum there, with correct score signs`);
  },
  'empty-count-boundary': ({ volume = 4, count = 0 } = {}) => {
    if (volume !== 4 || count !== 0)
      return smokeResult(false, 'this witness requires square volume 4 and empty count');
    const rates = [1, 1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64];
    const logLikelihood = rho => -volume * rho;
    const values = rates.map(logLikelihood);
    const ordered = values.every((value, i) => value < 0 && (!i || value > values[i - 1]));
    const halves = values.slice(1).every((value, i) => value === values[i] / 2);
    const boundary = logLikelihood(0);
    // Zero belongs to [0,infinity), and does not belong to (0,infinity).
    const admittedMaximum = Math.max(boundary, ...values);
    const positiveOnlyMaximum = Math.max(...values);
    return smokeResult(ordered && halves && boundary === 0
      && admittedMaximum === 0 && positiveOnlyMaximum < admittedMaximum,
      `empty count: seven decreasing dyadic rates give increasing negative log likelihoods with exactly halved boundary gaps; rate-zero value is 0 and exceeds every sampled positive rate`);
  },
  'no-interaction-ratio': ({ volume = 4, beta = 2, gamma = 1 } = {}) => {
    if (volume !== 4 || beta !== 2 || gamma !== 1)
      return smokeResult(false, 'this witness requires volume 4, activity 2 and no interaction gamma=1');
    // Unit-rate Poisson reference: the exact density is beta^n/Z, with
    // log Z=volume*(beta-1); pseudo likelihood has integrated intensity v*beta.
    const logNormalizer = volume * (beta - 1);
    const exactLog = n => n * Math.log(beta) - logNormalizer;
    const pseudoLog = n => n * Math.log(beta) - volume * beta;
    const counts = [0, 1, 2, 3, 4, 5, 6];
    const constantRatio = counts.every(n => Math.abs(exactLog(n) - pseudoLog(n) - volume) < 1e-12);
    const sameObservationRatios = counts.every(n => Math.abs(
      (exactLog(n) - exactLog(0)) - (pseudoLog(n) - pseudoLog(0))) < 1e-12);
    return smokeResult(constantRatio && sameObservationRatios,
      `seven finite counts: exact and pseudo log-density differences all equal ${volume}; both observation ratios relative to the empty configuration equal beta^n, and exact/pseudo ratio is exp(4)`);
  },
  'soft-interaction-singleton-ratio': ({ volume = 4, beta = 2, gamma = 0.5, radius = 0.5 } = {}) => {
    if (volume !== 4 || beta !== 2 || gamma !== 0.5 || radius !== 0.5)
      return smokeResult(false, 'this witness requires [0,2]^2, center (1,1), activity 2, gamma=1/2 and radius 1/2');
    // The centered closed disk lies wholly inside the square. For the empty
    // observation T_R=0 everywhere. For the center singleton T_R is 1 in
    // the disk and 0 outside; hence its integral is computed from two regions.
    const center = [1, 1], side = 2;
    const contained = center.every(x => x - radius >= 0 && x + radius <= side);
    const diskArea = Math.PI * radius ** 2;
    const squareArea = (6 / 5 - 4 / 5) ** 2;
    const farthestSquareDistanceSquared = 2 * (1 / 5) ** 2;
    const integratedEmpty = beta * volume;
    const integratedSingleton = beta * gamma * diskArea + beta * (volume - diskArea);
    const eventFactor = beta; // deleting the singleton leaves the empty pattern
    const logPseudoRatio = Math.log(eventFactor) + integratedEmpty - integratedSingleton;
    const logExactRatio = Math.log(beta); // both configurations have zero pairs
    const predictedGap = beta * (1 - gamma) * diskArea;
    const actualGap = logPseudoRatio - logExactRatio;
    const lowerBound = 4 / 25;
    return smokeResult(contained && farthestSquareDistanceSquared <= radius ** 2
      && Math.abs(squareArea - lowerBound) < 1e-12 && diskArea > lowerBound
      && Math.abs(actualGap - predictedGap) < 1e-12 && actualGap > lowerBound,
      `empty/single-center model: exact ratio=2; disk area=${diskArea}; independently integrated pseudo log-ratio gap=${actualGap}=a>4/25, so pseudo ratio=2*exp(a)>2`);
  },
  // Mathematical-statistics finite witnesses. Defaults are the contract
  // models; parameterized checks validate their admissible input domains.
  'diagonal-matrix-rayleigh-equality': ({ matrix = [[3, 0], [0, -1]] } = {}) => {
    if (!Array.isArray(matrix) || matrix.length !== 2 || matrix.some(row => !Array.isArray(row) || row.length !== 2 || row.some(x => !Number.isFinite(x))) || matrix[0][1] !== 0 || matrix[1][0] !== 0)
      return smokeResult(false, 'expected a finite real diagonal 2-by-2 matrix');
    const [a, b] = [matrix[0][0], matrix[1][1]], maximum = Math.max(Math.abs(a), Math.abs(b));
    let count = 0;
    // Rational directions normalized from integer pairs, including both axes.
    for (let x = -8; x <= 8; x++) for (let y = -8; y <= 8; y++) {
      const norm2 = x * x + y * y;
      if (!norm2) continue;
      if (Math.abs((a * x * x + b * y * y) / norm2) > maximum + 1e-12 || (a * a * x * x + b * b * y * y) / norm2 > maximum * maximum + 1e-12)
        return smokeResult(false, 'a sampled normalized direction exceeds the diagonal maximum');
      count++;
    }
    return smokeResult(maximum === Math.max(Math.abs(a), Math.abs(b)), `${count} normalized rational directions bounded; a coordinate eigenvector attains norm and absolute Rayleigh value ${maximum}`);
  },
  'zero-proxy-covariance': ({ sample_size = 1, dimension = 1 } = {}) => {
    const n = boundedInteger(sample_size, 1, 1, 32), d = boundedInteger(dimension, 1, 1, 16);
    const sample = Array.from({ length: n }, () => Array(d).fill(0));
    const { mean, raw, centered } = smokeCovariances(sample);
    return smokeResult([...mean, ...raw.flat(), ...centered.flat()].every(x => x === 0), `computed raw and centered covariance of ${n} zero vectors in dimension ${d}`);
  },
  'scalar-soft-threshold': ({ z = 3, tau = 1 } = {}) => {
    if (!Number.isFinite(z) || !Number.isFinite(tau) || tau <= 0) return smokeResult(false, 'finite z and positive finite tau required');
    const soft = z > tau ? z - tau : z < -tau ? z + tau : 0;
    const objective = a => (z - a) ** 2 + 2 * tau * Math.abs(a);
    const candidates = [0, Math.max(z - tau, 0), Math.min(z + tau, 0)];
    if (candidates.some(a => objective(a) < objective(soft) - 1e-12)) return smokeResult(false, 'branch constrained minimizer has lower objective than soft threshold');
    const probes = Array.from({ length: 81 }, (_, i) => soft + (i - 40) / 4);
    return smokeResult(probes.every(a => objective(a) >= objective(soft) - 1e-12), `soft=${soft}, Q(soft)=${objective(soft)}, Q(1)=${objective(1)}; both branch candidates and 81 nearby actions checked`);
  },
  'collinear-two-column-witness': ({ design = [[1, 1]], vector = [1, -1] } = {}) => {
    if (!Array.isArray(design) || !design.length || design.some(r => !Array.isArray(r) || r.length !== 2 || r.some(x => !Number.isFinite(x))) || !Array.isArray(vector) || vector.length !== 2 || vector.some(x => !Number.isFinite(x)))
      return smokeResult(false, 'expected finite two-column design and two-coordinate vector');
    const fitted = design.map(r => r[0] * vector[0] + r[1] * vector[1]);
    const n = design.length, gram = [0, 1].map(i => [0, 1].map(j => design.reduce((s, r) => s + r[i] * r[j], 0) / n));
    const deviation = Math.max(...gram.flatMap((r, i) => r.map((x, j) => Math.abs(x - Number(i === j)))));
    const cone = Math.abs(vector[1]) <= 3 * Math.abs(vector[0]);
    return smokeResult(cone && vector[0] ** 2 > 0 && fitted.every(x => x === 0) && deviation > 1 / 14, `cone=${cone}; Xv=${fitted}; support norm squared=${vector[0] ** 2}; Gram deviation=${deviation}`);
  },
  'n2-p3-centered-rank': ({ observations = [[1, 0, 0], [0, 1, 0]] } = {}) => {
    if (!Array.isArray(observations) || observations.length !== 2 || observations.some(r => !Array.isArray(r) || r.length !== 3 || r.some(x => !Number.isFinite(x))))
      return smokeResult(false, 'expected two finite observations in dimension three');
    const { mean, centered } = smokeCovariances(observations);
    const rows = observations.map(r => r.map((x, i) => x - mean[i]));
    const rowRank = smokeMatrixRank(rows), covarianceRank = smokeMatrixRank(centered);
    return smokeResult(rowRank === 1 && covarianceRank === 1 && covarianceRank < 3, `centered row rank=${rowRank}, covariance rank=${covarianceRank}; all covariance entries computed`);
  },
  'balanced-partition-n5-k2': () => {
    const n = 5, k = 2, q = Math.floor(n / k), r = n - k * q;
    let cursor = 0;
    const blocks = Array.from({ length: k }, (_, j) => Array.from({ length: q + Number(j < r) }, () => cursor++));
    return smokeResult(blocks.map(b => b.length).join(',') === '3,2' && blocks.flat().join(',') === '0,1,2,3,4', `q=${q}, r=${r}, blocks=${JSON.stringify(blocks)} cover each index once`);
  },
  'nearest-rank-epsilon-quarter-n4': () => {
    const n = 4, epsilon = 1 / 4, ranks = [Math.ceil(epsilon * n), Math.ceil((1 - epsilon) * n)];
    return smokeResult(ranks[0] === 1 && ranks[1] === 3 && ranks.every(r => r >= 1 && r <= n) && ranks[0] <= ranks[1], `nearest ranks ${ranks} are valid and ordered`);
  },
  'one-observation-tied-cutoffs': () => {
    const x = [2], y = [3], epsilon = 1 / 4, sorted = [...y].sort((a, b) => a - b);
    const alpha = sorted[Math.ceil(epsilon * y.length) - 1], beta = sorted[Math.ceil((1 - epsilon) * y.length) - 1];
    const output = x.reduce((s, value) => s + Math.min(beta, Math.max(alpha, value)), 0) / x.length;
    return smokeResult(alpha === 3 && beta === 3 && output === 3, `coincident nearest-rank cutoffs=${alpha},${beta}; winsorized output=${output}`);
  },
  'all-zero-observed-data': () => {
    // The admitted selector takes fixed epsilon as input. For zero data each
    // directional interval is [-Q,Q], so U_Q=0 and the slab intersection
    // is ||z|| <= 2 epsilon Q. This computes slabs and the nested radii,
    // including their algebraic limit; no stochastic inputs are simulated.
    const epsilon = 1 / 4, half = Array.from({ length: 4 }, () => [0, 0]);
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [3 / 5, 4 / 5]];
    for (let i = -8; i <= 8; i++) {
      const q = 2 ** i;
      for (const v of directions) {
        const projected = half.map(x => x[0] * v[0] + x[1] * v[1]).sort((a, b) => a - b);
        const alpha = projected[Math.ceil(epsilon * half.length / 2) - 1];
        const beta = projected[Math.ceil((1 - epsilon / 2) * half.length) - 1];
        const center = projected.reduce((s, x) => s + Math.min(beta + q, Math.max(alpha - q, x)), 0) / half.length;
        if (alpha !== 0 || beta !== 0 || center !== 0) return smokeResult(false, 'zero projections did not give zero winsorized center');
      }
      if (!(2 * epsilon * q > 0)) return smokeResult(false, 'dyadic zero-centered slab radius invalid');
    }
    // Tail intersections have minimum radius at i=j. All contain zero;
    // radius 2 epsilon 2^j tends to zero as j tends to negative infinity.
    const radius = j => 2 * epsilon * 2 ** j;
    return smokeResult(radius(-20) < radius(-8) && radius(-8) < radius(0) && radius(0) === 0.5, '85 directional models give center zero; nested ball radii are 2 epsilon 2^j with infimum zero, selecting the unique minimum-norm origin');
  },
  'uniform-upper-median': () => {
    const cdf = t => Math.max(0, Math.min(1, t)), u = 1 / 2, quantile = u;
    const survival = t => 1 - cdf(t);
    const below = [0, 1 / 4, 1 / 2], above = [3 / 4, 1];
    return smokeResult(survival(quantile) === 1 - u && below.every(t => survival(t) >= 1 - u) && above.every(t => survival(t) < 1 - u), 'uniform interval-length CDF gives upper median 1/2; singleton length zero makes strict/inclusive tails both 1/2');
  },
  'symmetric-rademacher-covariance': () => {
    const atoms = [-1, 1], weights = [1 / 2, 1 / 2];
    const mean = atoms.reduce((s, x, i) => s + weights[i] * x, 0);
    const covariance = atoms.reduce((s, x, i) => s + weights[i] * (x - mean) ** 2, 0);
    const centeredSecondMoment = atoms.reduce((s, x, i) => s + weights[i] * (x - mean) ** 2, 0);
    return smokeResult(mean === 0 && covariance === 1 && centeredSecondMoment === covariance && covariance >= 0, `two-atom weighted enumeration: mean=${mean}, covariance=trace=lambda_max=${covariance}`);
  },
  'unit-scale-bracket': () => {
    const a = 1, candidates = Array.from({ length: 9 }, (_, i) => i - 4);
    const i = candidates.find(j => 2 ** j >= a), scale = 2 ** i;
    return smokeResult(i === 0 && a <= scale && scale < 2 * a && 2 ** (i - 1) < a, `least qualifying exponent=${i}; ${a}<=${scale}<${2 * a}, previous scale=${2 ** (i - 1)}`);
  },
  'binomial-quantile-exponent-counterexample': ({ sample_size = 4000 } = {}) => {
    const n = boundedInteger(sample_size, 4000, 4000, 200000);
    if (n % 40) return smokeResult(false, 'counterexample sample size must be divisible by forty');
    const p = 1 / 20, m = 3 * n / 40 + 1;
    // Direct log of one binomial mass, avoiding underflow and computing the
    // combinatorial factor rather than substituting the asymptotic KL rate.
    let logChoose = 0;
    for (let j = 1; j <= m; j++) logChoose += Math.log((n - m + j) / j);
    const logMass = logChoose + m * Math.log(p) + (n - m) * Math.log1p(-p);
    const margin = logMass + n / 120, logDelta = Math.log(4) - n / 120;
    const epsilon = 12 * (Math.log(4) - logDelta) / n;
    return smokeResult(m > 3 * n / 40 && margin > 1e-6 && logDelta < 0 && logDelta >= -n / 4 && Math.abs(epsilon - 0.1) < 1e-12, `Bin(${n},1/20) mass at ${m} is above exp(-n/120) by log margin ${margin}; admissible epsilon=${epsilon}, log(delta)=${logDelta}`);
  },
  'rational-series-bounds-for-Minsker-constants': () => {
    // Log via 2 sum t^(2j+1)/(2j+1), with the absolute geometric
    // remainder bound from the source. Conservative roundoff padding is
    // much smaller than the stated rational interval margins.
    const logInterval = t => {
      let sum = 0;
      for (let j = 0; j <= 50; j++) sum += 2 * t ** (2 * j + 1) / (2 * j + 1);
      const remainder = 2 * Math.abs(t) ** 103 / (103 * (1 - t * t));
      const padding = 1e-12;
      return [sum - remainder - padding, sum + remainder + padding];
    };
    const left = logInterval(-13 / 68), right = logInterval(13 / 22), sevenFifths = logInterval(1 / 6);
    // log((1-a)/(1-p)) uses -13/68; log(a/p) uses 13/22.
    const a = 7 / 18, p = 1 / 10;
    const lo = a * right[0] + (1 - a) * left[0], hi = a * right[1] + (1 - a) * left[1];
    const caSquared = (1 - a) ** 2 / (1 - 2 * a), constantSquaredUpper = caSquared * 2 / (p * lo);
    return smokeResult(lo > 2915 / 10000 && hi < 2916 / 10000 && lo > 5 / 18 && hi < sevenFifths[0] && sevenFifths[0] > 3364 / 10000 && constantSquaredUpper <= 121, `51-term log series with explicit tails and roundoff padding: psi in [${lo},${hi}], log(7/5)>${sevenFifths[0]}, coefficient squared<=${constantSquaredUpper}`);
  },
  'five-point-objective': ({ magnitude = 7 } = {}) => {
    if (!Number.isFinite(magnitude) || magnitude <= 0) return smokeResult(false, 'positive finite magnitude required');
    const points = [0, 0, 0, 0, magnitude], value = z => points.reduce((s, x) => s + Math.abs(z - x), 0);
    const probes = Array.from({ length: 41 }, (_, i) => (i - 10) * magnitude / 10);
    if (probes.some(z => value(z) < magnitude - 1e-10 || (z !== 0 && value(z) <= magnitude))) return smokeResult(false, 'objective probe violates unique origin minimum');
    const slope = z => points.reduce((s, x) => s + Math.sign(z - x), 0);
    return smokeResult(value(0) === magnitude && slope(-magnitude) === -5 && slope(magnitude / 2) === 3 && slope(2 * magnitude) === 5, `direct five-distance sums and all three linear-region slopes verify unique minimizer zero, value=${magnitude}`);
  },
  'identical-observation-law-at-eta-half': ({ half_size = 3, magnitude = 7 } = {}) => {
    const n = boundedInteger(half_size, 3, 1, 64);
    if (!Number.isFinite(magnitude) || magnitude <= 0) return smokeResult(false, 'distinct positive finite mean required');
    const cleanZero = Array(2 * n).fill(0), cleanOther = Array(2 * n).fill(magnitude);
    const observed = [...Array(n).fill(0), ...Array(n).fill(magnitude)];
    const changes = clean => clean.filter((x, i) => x !== observed[i]).length;
    const variance = clean => { const mean = clean.reduce((s, x) => s + x, 0) / clean.length; return clean.reduce((s, x) => s + (x - mean) ** 2, 0) / clean.length; };
    return smokeResult(changes(cleanZero) === n && changes(cleanOther) === n && variance(cleanZero) === 0 && variance(cleanOther) === 0, `same deterministic observed vector from means0/${magnitude}, each clean covariance0, exactly${n}/${2 * n} replacements in either coupling`);
  },
  'max-cut-triangle-conditional-expectation': ({ expected_cut = 2 } = {}) => {
    // Count the eight placements and all fifteen prefixes independently of
    // the edge-contribution formula used by the worked example.
    const edges = [[0, 1], [0, 2], [1, 2]];
    const placements = Array.from({ length: 8 }, (_, mask) =>
      [0, 1, 2].map(vertex => (mask >> vertex) & 1));
    const cut = bits => edges.filter(([a, b]) => bits[a] !== bits[b]).length;
    const average = prefix => {
      const completions = placements.filter(bits => prefix.every((bit, i) => bits[i] === bit));
      return completions.reduce((sum, bits) => sum + cut(bits), 0) / completions.length;
    };
    let prefixes = 0;
    for (let length = 0; length <= 3; length++) {
      for (let mask = 0; mask < 2 ** length; mask++) {
        const prefix = Array.from({ length }, (_, i) => (mask >> i) & 1);
        const edgeFormula = edges.reduce((sum, [a, b]) => sum +
          (a < length && b < length ? Number(prefix[a] !== prefix[b]) : 0.5), 0);
        if (average(prefix) !== edgeFormula) return { ok: false,
          summary: `conditional edge formula differs from enumeration at prefix ${prefix}` };
        prefixes++;
      }
    }
    if (average([]) !== 1.5 || average([0, 0]) !== 1 || average([0, 1]) !== 2)
      return { ok: false, summary: 'triangle initial or second-bit expectation is incorrect' };
    const bits = [];
    while (bits.length < 3) bits.push(average([...bits, 1]) > average([...bits, 0]) ? 1 : 0);
    const zeroSide = bits.flatMap((bit, i) => bit === 0 ? [i] : []);
    const crossings = edges.filter(([a, b]) => zeroSide.includes(a) !== zeroSide.includes(b));
    if (bits.join(',') !== '0,1,0' || zeroSide.join(',') !== '0,2'
        || crossings.map(edge => edge.join('-')).join(',') !== '0-1,1-2')
      return { ok: false, summary: 'triangle tie rule, returned partition or crossing edges disagree' };
    const maximum = Math.max(...placements.map(cut));
    if (cut(bits) !== expected_cut || maximum !== expected_cut || cut(bits) < 1.5)
      return { ok: false, summary: `enumeration returns cut ${cut(bits)} and optimum ${maximum}, not ${expected_cut}` };
    return { ok: true, summary: `checked ${placements.length} triangle placements, ${prefixes} conditional prefixes, tie decisions, returned partition and optimum ${maximum}` };
  },
  'gns-cyclic-c2-boundaries': () => {
    // Independent finite models for the GNS boundary claims. A real function
    // on C2={e,s} has Gram matrix [[a,b],[b,a]], whose two eigenvalues are
    // a+b and a-b. Enumerate nonnegative integral coefficients and dominated
    // pairs rather than trusting the prose's zero/trivial-group calculations.
    const fail = summary => ({ ok: false, summary });
    let positive = 0, dominated = 0, split = 0, characters = 0, trivial = 0;
    const phases = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const multiply = ([x, y], [u, v]) => [x * u - y * v, x * v + y * u];
    for (let a = 0; a <= 4; a++) {
      // On the one-element group the Gram matrix is [a]. Its quotient is
      // zero for a=0 and one-dimensional otherwise; the point vector has
      // squared norm a and is cyclic in both cases.
      const rank = Number(a > 0);
      if (rank !== (a === 0 ? 0 : 1)) return fail(`trivial-group quotient rank mismatch at a=${a}`);
      for (let u = 0; u <= a; u++) {
        const contraction = a === 0 ? 0 : u / a;
        if (contraction < 0 || contraction > 1 || (a === 0 ? u !== 0 : contraction * a !== u))
          return fail(`trivial-group domination mismatch at a=${a}, u=${u}`);
        trivial++;
      }
    }
    for (const first of phases) for (const second of phases) {
      const conjugateFirst = [first[0], -first[1]];
      const intertwiner = multiply(second, conjugateFirst);
      const images = phases.filter(candidate => {
        const [x, y] = multiply(candidate, first);
        return x === second[0] && y === second[1];
      });
      if (images.length !== 1 || images[0][0] !== intertwiner[0] || images[0][1] !== intertwiner[1])
        return fail('trivial-group pointed unitary was not unique');
    }
    for (let a = 0; a <= 4; a++) for (let b = -a; b <= a; b++) {
      const plus = a + b, minus = a - b;
      const rank = Number(plus > 0) + Number(minus > 0);
      if (rank === 0 !== (a === 0 && b === 0)) return fail(`wrong GNS rank at (a,b)=(${a},${b})`);
      if (a === 0 && (rank !== 0 || plus !== 0 || minus !== 0)) return fail('zero function has nonzero quotient');
      // The point mass has Gram norm a and its C2 orbit spans the quotient.
      if (a !== (plus + minus) / 2 || rank > 2) return fail(`cyclic norm/rank mismatch at (${a},${b})`);
      positive++;
      for (let u = 0; u <= a; u++) for (let v = -u; v <= u; v++) {
        if (a - u < Math.abs(b - v)) continue; // phi-psi must be positive type
        const p = u + v, m = u - v;
        if (p < 0 || m < 0 || p > plus || m > minus) return fail(`domination mismatch at (${a},${b};${u},${v})`);
        if ((plus === 0 && p !== 0) || (minus === 0 && m !== 0)) return fail('operator fails on a null eigenspace');
        // On the nonzero GNS eigenspaces T has eigenvalues p/plus, m/minus,
        // so 0<=T<=I and its e,s coefficients reconstruct u,v exactly.
        if (p + m !== 2 * u || p - m !== 2 * v) return fail('dominated coefficient reconstruction failed');
        dominated++;
        if (a === 4 && u > 0 && u < 4 && rank === 2) {
          const nonscalar = p * minus !== m * plus;
          const distinctNormalizedParts = 4 * v !== u * b;
          if (nonscalar !== distinctNormalizedParts) return fail(`split criterion mismatch at (${b};${u},${v})`);
          if (nonscalar) split++;
        }
      }
    }
    for (let dimension = 1; dimension <= 4; dimension++) {
      for (let mask = 0; mask < 2 ** dimension; mask++) {
        let traceS = 0;
        for (let j = 0; j < dimension; j++) traceS += (mask & (1 << j)) ? -1 : 1;
        if (dimension + traceS < 0 || dimension - traceS < 0 || dimension / dimension !== 1)
          return fail(`normalized C2 character fails at dimension ${dimension}, mask ${mask}`);
        characters++;
      }
    }
    for (let q = -4; q <= 4; q++) {
      // phi(e)=1, phi(s)=q/4. Its GNS representation is one-dimensional
      // exactly at the two extreme points of P_1(C2)=[-1,1].
      const rank = Number(4 + q > 0) + Number(4 - q > 0);
      if ((rank === 1) !== (Math.abs(q) === 4)) return fail(`purity/rank mismatch at q=${q}`);
    }
    if (split === 0) return fail('no nonscalar dominated example was exercised');
    return { ok: true, summary: `checked ${positive} C2 positive-type Grams, ${dominated} dominated pairs, ${split} nonscalar splits, ${characters} normalized characters, ${trivial} trivial-group dominated cases, 16 pointed unitary phase pairs and nine purity samples` };
  },
  'positive-definite-trapezoid-three-point-witness': () => {
    // Independently evaluate the three-point positive-definiteness witness
    // used by the Fourier counterexample.  The trapezoid is 1 on [-1,1],
    // decreases linearly to 0 at |x|=2, and vanishes beyond that interval.
    const phi = x => {
      const r = Math.abs(x);
      return r <= 1 ? 1 : r < 2 ? 2 - r : 0;
    };
    const points = [0, 1, 2];
    const coefficients = [1, -2, 1];
    const matrix = points.map(x => points.map(y => phi(x - y)));
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    const determinant = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    const quadratic = coefficients.reduce((sum, left, row) => sum + coefficients.reduce(
      (inner, right, column) => inner + left * right * matrix[row][column], 0), 0);
    const expected = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
    if (matrix.some((row, r) => row.some((value, c) => value !== expected[r][c])))
      return { ok: false, summary: `trapezoid Gram matrix differs from the displayed witness: ${JSON.stringify(matrix)}` };
    if (determinant !== -1 || quadratic !== -2)
      return { ok: false, summary: `determinant/quadratic form are ${determinant}/${quadratic}, expected -1/-2` };
    return { ok: true, summary: 'three-point trapezoid Gram matrix has determinant -1 and the displayed coefficient vector has quadratic form -2' };
  },
  'base-b-digit-orbit-cylinders': ({ max_base = 4 } = {}) => {
    // Independent finite arithmetic views of the selected digit-cylinder
    // lemma: repeated quotient/remainder digits versus the half-open interval
    // test after a shift. Coprime denominators avoid terminating base-b
    // expansions. This can catch an index or endpoint convention error; it
    // does not prove the statement for every real number.
    const largestBase = boundedInteger(max_base, 4, 2, 5);
    let cases = 0;
    for (let base = 2; base <= largestBase; base++) {
      for (const denominator of [7, 11, 13]) {
        for (let numerator = 1; numerator < denominator; numerator++) {
          const digits = [];
          let remainder = numerator;
          for (let place = 0; place < 6; place++) {
            const scaled = base * remainder;
            digits.push(Math.floor(scaled / denominator));
            remainder = scaled % denominator;
          }
          for (let start = 1; start <= 3; start++) {
            for (let length = 1; length <= 3; length++) {
              const modulus = base ** length;
              const shifted = (numerator * base ** (start - 1)) % denominator;
              for (let word = 0; word < modulus; word++) {
                const expected = [];
                let code = word;
                for (let position = length - 1; position >= 0; position--) {
                  expected[position] = code % base;
                  code = Math.floor(code / base);
                }
                const digitMatch = expected.every((digit, offset) => digits[start - 1 + offset] === digit);
                const intervalMatch = word * denominator <= shifted * modulus
                  && shifted * modulus < (word + 1) * denominator;
                if (digitMatch !== intervalMatch) return { ok: false,
                  summary: `digit/interval mismatch at b=${base}, x=${numerator}/${denominator}, j=${start}, length=${length}, word=${word}` };
                cases++;
              }
            }
          }
        }
      }
    }
    return { ok: true, summary: `checked ${cases} exact nonterminating rational digit/interval cases across bases 2–${largestBase}` };
  },
  'binary-shift-disjoint-cylinder-independence': ({ max_coordinates = 3 } = {}) => {
    // A finite countermodel search for the exact cylinder calculation used in
    // the fair-coin shift proof. Enumerate words, not the independence formula:
    // a wrong shift offset, overlap threshold or empty-prescription convention
    // changes the counted intersections. This does not prove Borel mixing or
    // the extension to the completed measure.
    const width = boundedInteger(max_coordinates, 3, 1, 3);
    const patterns = [];
    for (let code = 0; code < 3 ** width; code++) {
      let digits = code;
      const fixed = [];
      for (let coordinate = 0; coordinate < width; coordinate++) {
        const digit = digits % 3;
        digits = Math.floor(digits / 3);
        if (digit) fixed.push([coordinate, digit - 1]);
      }
      patterns.push(fixed);
    }
    const matches = (word, fixed, offset) => fixed.every(([coordinate, value]) =>
      ((word >> (coordinate + offset)) & 1) === value);
    let cases = 0;
    for (let shift = width; shift <= width + 2; shift++) {
      const words = 1 << (shift + width);
      for (const first of patterns) for (const second of patterns) {
        let countFirst = 0, countShifted = 0, countBoth = 0;
        for (let word = 0; word < words; word++) {
          const inFirst = matches(word, first, 0);
          const inShifted = matches(word, second, shift);
          if (inFirst) countFirst++;
          if (inShifted) countShifted++;
          if (inFirst && inShifted) countBoth++;
        }
        if (countFirst * 2 ** first.length !== words
          || countShifted * 2 ** second.length !== words
          || countBoth * words !== countFirst * countShifted) {
          return { ok: false, summary: `cylinder count mismatch at shift ${shift}, first ${JSON.stringify(first)}, second ${JSON.stringify(second)}` };
        }
        cases++;
      }
    }
    return { ok: true, summary: `enumerated ${cases} cylinder pairs with empty and nonempty prescriptions on ${width} coordinates and disjoint shifts; finite counts match product masses` };
  },
  'polynomial-gaussian-derivatives': () => {
    // Compare two independently computed finite jets: differentiate the
    // product's Taylor coefficients, versus the claimed polynomial recurrence.
    // a=pi*t is sampled at positive integers. BigInt scaling keeps this exact;
    // this does not test decay at infinity or prove the Schwartz assertion.
    const degree = 24;
    const factorial = [1n];
    for (let k = 1; k <= degree; k++) factorial[k] = factorial[k - 1] * BigInt(k);
    const scale = factorial[degree];
    const multiply = (p, q) => {
      const out = Array(degree + 1).fill(0n);
      for (let i = 0; i < p.length; i++)
        for (let j = 0; j < q.length && i + j <= degree; j++) out[i + j] += p[i] * q[j];
      return out;
    };
    const polynomials = [[0n], [1n], [-1n], [0n, 1n], [0n, 0n, 1n],
      [0n, 0n, 0n, 1n], [0n, 0n, 0n, 0n, 1n], [1n, -2n, 3n]];
    let coefficients = 0;
    for (const a of [1n, 2n, 3n]) {
      const exponential = Array(degree + 1).fill(0n);
      for (let j = 0; 2 * j <= degree; j++) exponential[2 * j] = scale / factorial[j] * (-a) ** BigInt(j);
      for (const p of polynomials) {
        const original = multiply(p, exponential);
        let q = p;
        for (let order = 0; order <= 6; order++) {
          const predicted = multiply(q, exponential);
          for (let k = 0; k <= 12; k++) {
            const actual = original[k + order] * factorial[k + order] / factorial[k];
            if (predicted[k] !== actual) return { ok: false,
              summary: `Gaussian derivative mismatch: a=${a}, P=${p}, derivative=${order}, coefficient=${k}` };
            coefficients++;
          }
          const next = Array(q.length + 1).fill(0n);
          for (let k = 0; k < q.length; k++) {
            if (k) next[k - 1] += BigInt(k) * q[k];
            next[k + 1] -= 2n * a * q[k];
          }
          q = next;
        }
      }
    }
    return { ok: true, summary: `checked ${coefficients} exact Taylor coefficients for 8 polynomials, 3 positive Gaussian parameters and derivative orders 0–6; no decay or general proof claim` };
  },
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

  // Independent finite verification of the interval-partition claims on the
  // three-element chain C and the diamond D. Every set partition of each
  // lattice is enumerated, the interval partitions are identified, the
  // endpoint maps are tested for monotonicity on every comparable pair, the
  // congruence property is tested directly on every pair of equivalent
  // pairs, and the counts, the surviving partitions, the explicit failure of
  // {0,a}|{b}|{1} and the quotient of each survivor are asserted.
  // Exhaustive for these two lattices; it is not a proof of the general
  // interval criterion, and it verifies the finite claims of the citing
  // chain/diamond example and counterexample rather than the whole theory.
  'interval-partition-criterion-on-chain-and-diamond': () => {
    const fail = summary => ({ ok: false, summary });
    const lattice = covers => {
      const P = poset(covers);
      if (!P.ok) return { ok: false, summary: `covers are not a poset: ${P.why}` };
      const join = (x, y) => {
        const upper = P.elements.filter(z => P.le(x, z) && P.le(y, z));
        const least = upper.filter(z => upper.every(w => P.le(z, w)));
        return least.length === 1 ? least[0] : null;
      };
      return { ok: true, elements: P.elements, le: P.le, meet: (x, y) => meet(P, x, y), join };
    };
    const partitionsOf = elements => {
      // every set partition, via restricted growth strings
      const out = [];
      const assign = (index, blocks) => {
        if (index === elements.length) { out.push(blocks.map(block => block.slice())); return; }
        for (let slot = 0; slot <= blocks.length; slot += 1) {
          const fresh = slot === blocks.length;
          if (fresh) blocks.push([elements[index]]); else blocks[slot].push(elements[index]);
          assign(index + 1, blocks);
          if (fresh) blocks.pop(); else blocks[slot].pop();
        }
      };
      assign(0, []);
      return out;
    };
    const keyOf = blocks => blocks.map(block => block.slice().sort().join(',')).sort().join('|');
    const analyse = (L, expected) => {
      const { elements } = L;
      let partitions = 0, intervalPartitions = 0, monotoneCount = 0, congruenceCount = 0, comparableChecks = 0, quotientChecks = 0;
      let criterionAgrees = true, quotientOk = true;
      const sizes = {}, surviving = [], failing = [];
      for (const blocks of partitionsOf(elements)) {
        partitions += 1;
        const blockOf = new Map();
        blocks.forEach((block, index) => block.forEach(x => blockOf.set(x, index)));
        const same = (x, y) => blockOf.get(x) === blockOf.get(y);
        const lower = new Map(), upper = new Map();
        let isInterval = true;
        for (const block of blocks) {
          const least = block.filter(x => block.every(y => L.le(x, y)));
          const greatest = block.filter(x => block.every(y => L.le(y, x)));
          if (least.length !== 1 || greatest.length !== 1) { isInterval = false; break; }
          if (!elements.every(z => block.includes(z) === (L.le(least[0], z) && L.le(z, greatest[0])))) { isInterval = false; break; }
          for (const x of block) { lower.set(x, least[0]); upper.set(x, greatest[0]); }
        }
        if (!isInterval) continue;
        intervalPartitions += 1;
        let monotone = true;
        for (const x of elements) for (const y of elements) if (L.le(x, y)) {
          comparableChecks += 1;
          if (!L.le(lower.get(x), lower.get(y)) || !L.le(upper.get(x), upper.get(y))) monotone = false;
        }
        let congruence = true;
        for (const x of elements) for (const y of elements) for (const u of elements) for (const v of elements) {
          if (!same(x, y) || !same(u, v)) continue;
          if (!same(L.join(x, u), L.join(y, v)) || !same(L.meet(x, u), L.meet(y, v))) congruence = false;
        }
        const key = keyOf(blocks);
        if (monotone) monotoneCount += 1;
        if (congruence) congruenceCount += 1;
        if (monotone !== congruence) criterionAgrees = false;
        if (congruence) { surviving.push(key); sizes[key] = blocks.length; } else failing.push(key);
        if (congruence) {
          // quotient of a congruence: [x]<=[y] iff x join y = y, with the class
          // operations [x] join [y] = [x join y] and [x] meet [y] = [x meet y];
          // check the class order is representative-independent, that those
          // operations are the least upper and greatest lower bounds, and that
          // a two-class quotient is a chain.
          const classes = blocks.map((block, index) => ({ index, block }));
          const classOf = x => blockOf.get(x);
          const leClass = (A, B) => same(L.join(A.block[0], B.block[0]), B.block[0]);
          let wellDefined = true;
          for (const A of classes) for (const B of classes) {
            let value = null;
            for (const x of A.block) for (const y of B.block) {
              const here = same(L.join(x, y), y);
              if (value === null) value = here; else if (value !== here) wellDefined = false;
            }
          }
          for (const A of classes) for (const B of classes) {
            const joinClass = classes.find(C => C.index === classOf(L.join(A.block[0], B.block[0])));
            const meetClass = classes.find(C => C.index === classOf(L.meet(A.block[0], B.block[0])));
            quotientChecks += 1;
            const isLub = leClass(A, joinClass) && leClass(B, joinClass)
              && classes.every(C => (!leClass(A, C) || !leClass(B, C)) || leClass(joinClass, C));
            const isGlb = leClass(meetClass, A) && leClass(meetClass, B)
              && classes.every(C => (!leClass(C, A) || !leClass(C, B)) || leClass(C, meetClass));
            if (!isLub || !isGlb) quotientOk = false;
          }
          if (classes.length === 2 && leClass(classes[0], classes[1]) === leClass(classes[1], classes[0])) quotientOk = false;
          if (!wellDefined) quotientOk = false;
        }
      }
      const sameKeys = (list, keys) => JSON.stringify(list.slice().sort()) === JSON.stringify(keys.slice().sort());
      if (partitions !== expected.partitions) return fail(`${expected.name}: ${partitions} set partitions, expected ${expected.partitions}`);
      if (intervalPartitions !== expected.intervalPartitions) return fail(`${expected.name}: ${intervalPartitions} interval partitions, expected ${expected.intervalPartitions}`);
      if (monotoneCount !== expected.monotone) return fail(`${expected.name}: ${monotoneCount} interval partitions with monotone endpoint maps, expected ${expected.monotone}`);
      if (congruenceCount !== expected.congruence) return fail(`${expected.name}: ${congruenceCount} lattice congruences, expected ${expected.congruence}`);
      if (!criterionAgrees) return fail(`${expected.name}: monotone endpoints and congruence did not agree on every interval partition`);
      if (!sameKeys(surviving, Object.keys(expected.sizes))) return fail(`${expected.name}: surviving partitions ${surviving.join(' ; ')} differ from ${Object.keys(expected.sizes).join(' ; ')}`);
      if (!sameKeys(failing, expected.failing)) return fail(`${expected.name}: failing partitions ${failing.join(' ; ')} differ from ${expected.failing.join(' ; ')}`);
      for (const [key, size] of Object.entries(expected.sizes)) if (sizes[key] !== size) return fail(`${expected.name}: quotient of ${key} has ${sizes[key]} classes, expected ${size}`);
      if (!quotientOk) return fail(`${expected.name}: a quotient class order or class operation failed its lattice check`);
      return { ok: true, parts: { partitions, intervalPartitions, monotoneCount, congruenceCount, comparableChecks, quotientChecks } };
    };
    const chain = lattice([['0', 'a'], ['a', '1']]);
    if (!chain.ok) return fail(`chain C: ${chain.summary}`);
    const diamond = lattice([['0', 'a'], ['0', 'b'], ['a', '1'], ['b', '1']]);
    if (!diamond.ok) return fail(`diamond D: ${diamond.summary}`);
    const onChain = analyse(chain, { name: 'chain C', partitions: 5, intervalPartitions: 4, monotone: 4, congruence: 4,
      sizes: { '0|1|a': 3, '0,a|1': 2, '0|1,a': 2, '0,1,a': 1 }, failing: [] });
    if (!onChain.ok) return onChain;
    const onDiamond = analyse(diamond, { name: 'diamond D', partitions: 15, intervalPartitions: 8, monotone: 4, congruence: 4,
      sizes: { '0|1|a|b': 4, '0,a|1,b': 2, '0,b|1,a': 2, '0,1,a,b': 1 },
      failing: ['0,a|1|b', '0,b|1|a', '0|1,a|b', '0|1,b|a'] });
    if (!onDiamond.ok) return onDiamond;
    // the explicit witness of {0,a}|{b}|{1}: u(0)=a, u(b)=b, 0<=b but a!<=b,
    // and 0 join b = b against a join b = 1 across the classes {b} and {1}
    if (!(diamond.le('0', 'b') && !diamond.le('a', 'b')
      && diamond.join('0', 'b') === 'b' && diamond.join('a', 'b') === '1'))
      return fail('the explicit endpoint/join witness for {0,a}|{b}|{1} did not check out');
    const p = onChain.parts, q = onDiamond.parts;
    return { ok: true, summary: `checked all ${p.partitions + q.partitions} set partitions of the chain and the diamond, ${p.intervalPartitions + q.intervalPartitions} interval partitions, ${p.comparableChecks + q.comparableChecks} comparable endpoint pairs, the congruence property of every partition, the explicit failure of {0,a}|{b}|{1}, and the ${p.quotientChecks + q.quotientChecks} quotient join/meet classes of the ${p.congruenceCount + q.congruenceCount} surviving congruences` };
  },

  // The covariance calculation for two Brownian increments reduces to a
  // four-minimum identity. Enumerating every ordered pair of integer intervals
  // checks all endpoint interleavings, including coincident and zero-length
  // intervals. This tests the finite algebra in the citing example, not the
  // probabilistic construction of Brownian motion.
  'brownian-increment-overlap-identity': ({ max_endpoint = 8 } = {}) => {
    const max = boundedInteger(max_endpoint, 8, 0, 30);
    let cases = 0;
    for (let s = 0; s <= max; s += 1) for (let t = s; t <= max; t += 1) {
      for (let u = 0; u <= max; u += 1) for (let v = u; v <= max; v += 1) {
        const expanded = Math.min(t, v) - Math.min(t, u) - Math.min(s, v) + Math.min(s, u);
        const overlap = Math.max(0, Math.min(t, v) - Math.max(s, u));
        if (expanded !== overlap) {
          return { ok: false,
            summary: `four-minimum covariance ${expanded} differs from overlap ${overlap} for [${s},${t}] and [${u},${v}]` };
        }
        cases += 1;
      }
    }
    return { ok: true, summary: `checked ${cases} ordered interval pairs with endpoints through ${max}, including all zero-length and coincident-endpoint cases` };
  },

  // Derive the adjoint matrices of the standard sl_2 basis directly from 2x2
  // commutators, then calculate the Killing Gram matrix. This independently
  // checks the signs, basis order, trace pairings and determinant asserted by
  // the citing example; it is not a general semisimplicity test.
  'sl2-killing-form-matrix-calculation': () => {
    const mul2 = (A, B) => [
      A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3],
      A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3],
    ];
    const commutator = (A, B) => {
      const AB = mul2(A, B), BA = mul2(B, A);
      return AB.map((value, i) => value - BA[i]);
    };
    const coordinates = (A) => {
      if (A[3] !== -A[0]) throw new Error(`non-traceless commutator [${A}]`);
      return [A[1], A[2], A[0]]; // coefficients of (e,f,h)
    };
    const e = [0, 1, 0, 0], f = [0, 0, 1, 0], h = [1, 0, 0, -1];
    const basis = [e, f, h];
    const adjoint = (x) => {
      const columns = basis.map((y) => coordinates(commutator(x, y)));
      return Array.from({ length: 3 }, (_, row) => columns.map((column) => column[row]));
    };
    const mul3 = (A, B) => Array.from({ length: 3 }, (_, i) =>
      Array.from({ length: 3 }, (_, j) => A[i].reduce((sum, value, k) => sum + value * B[k][j], 0)));
    const traceProduct = (A, B) => {
      const C = mul3(A, B);
      return C[0][0] + C[1][1] + C[2][2];
    };
    const ads = basis.map(adjoint);
    const gram = ads.map((A) => ads.map((B) => traceProduct(A, B)));
    const expected = [[0, 4, 0], [4, 0, 0], [0, 0, 8]];
    if (JSON.stringify(gram) !== JSON.stringify(expected)) {
      return { ok: false, summary: `computed Killing Gram matrix ${JSON.stringify(gram)}, expected ${JSON.stringify(expected)}` };
    }
    const determinant = gram[0][0] * (gram[1][1] * gram[2][2] - gram[1][2] * gram[2][1])
      - gram[0][1] * (gram[1][0] * gram[2][2] - gram[1][2] * gram[2][0])
      + gram[0][2] * (gram[1][0] * gram[2][1] - gram[1][1] * gram[2][0]);
    if (determinant !== -128) return { ok: false, summary: `Killing Gram determinant is ${determinant}, expected -128` };
    return { ok: true, summary: 'derived all nine Killing pairings from 2x2 commutators and obtained Gram determinant -128' };
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

  // Equality of DFA right languages must be a right congruence.  Exhaustive
  // small automata are especially good at catching a swapped transition
  // convention or a claim that checks only the start state.  Equivalence is
  // decided exactly for each finite DFA by reachability in the product
  // automaton; the bound limits the family of DFAs, not the continuation words.
  'dfa-state-equivalence-right-congruence': ({ max_states = 3, alphabet_size = 2 }) => {
    const maxStates = boundedInteger(max_states, 3, 1, 3);
    const alphabetSize = boundedInteger(alphabet_size, 2, 1, 2);
    let automata = 0;
    let equivalentPairs = 0;

    for (let states = 1; states <= maxStates; states += 1) {
      const tableCount = states ** (states * alphabetSize);
      for (let tableCode = 0; tableCode < tableCount; tableCode += 1) {
        const transition = new Array(states * alphabetSize);
        let code = tableCode;
        for (let i = 0; i < transition.length; i += 1) {
          transition[i] = code % states;
          code = Math.floor(code / states);
        }
        const step = (state, letter) => transition[state * alphabetSize + letter];

        for (let acceptingMask = 0; acceptingMask < (1 << states); acceptingMask += 1) {
          automata += 1;
          const accepting = (state) => Boolean(acceptingMask & (1 << state));
          const equivalent = (left, right) => {
            const queue = [[left, right]];
            const seen = new Set();
            for (let at = 0; at < queue.length; at += 1) {
              const [p, q] = queue[at];
              const key = p * states + q;
              if (seen.has(key)) continue;
              seen.add(key);
              if (accepting(p) !== accepting(q)) return false;
              for (let letter = 0; letter < alphabetSize; letter += 1) {
                queue.push([step(p, letter), step(q, letter)]);
              }
            }
            return true;
          };

          const relation = Array.from({ length: states }, (_, p) =>
            Array.from({ length: states }, (_, q) => equivalent(p, q)));
          for (let p = 0; p < states; p += 1) {
            if (!relation[p][p]) return { ok: false, summary: `state equivalence is not reflexive in DFA ${automata}, state ${p}` };
            for (let q = 0; q < states; q += 1) {
              if (relation[p][q] !== relation[q][p]) {
                return { ok: false, summary: `state equivalence is not symmetric in DFA ${automata}, states ${p},${q}` };
              }
              if (!relation[p][q]) continue;
              equivalentPairs += 1;
              for (let letter = 0; letter < alphabetSize; letter += 1) {
                const nextP = step(p, letter), nextQ = step(q, letter);
                if (!relation[nextP][nextQ]) {
                  return { ok: false, summary: `equivalent states ${p},${q} separate after letter ${letter} in DFA ${automata}` };
                }
              }
              for (let r = 0; r < states; r += 1) {
                if (relation[q][r] && !relation[p][r]) {
                  return { ok: false, summary: `state equivalence is not transitive in DFA ${automata}, states ${p},${q},${r}` };
                }
              }
            }
          }
        }
      }
    }
    return { ok: true, summary: `checked ${equivalentPairs} equivalent state-pairs across all ${automata} DFAs through ${maxStates} states over ${alphabetSize} letters` };
  },

  // Independent exact re-computation of the finite arithmetic of the hexagonal
  // A_2 cell. That cell is one regular hexagon, so every vertex distance,
  // perpendicularity, barycentric slope and star-radius value displayed in the
  // citing example is a finite computation in Q + Q*sqrt(3); the field is
  // implemented below with BigInt fractions, so the comparison is exact and no
  // floating-point tolerance can mask a wrong constant. The twelve v-m-o
  // triangles, the three slopes 2, 4/sqrt(3), 2/sqrt(3), L = 4/sqrt(3),
  // delta = sqrt(3)/24, the vertex distances 1, sqrt(3), 2 and the C_6 graph
  // distances are recomputed from the six vertices. The general star lemma and
  // the passage from the cell to the chain metric are NOT proved here.
  // The collapsing recursion of thm-mostowski-collapse on a finite chain: the
  // von Neumann numeral for x is {0,1,...,x-1}, so the defining equation
  // F(x) = {F(y) : y < x} must reproduce F(x) = x on a chain of length n and
  // carry the chain onto the ordinal n. This is the finite model of the cited
  // example's displayed computation, not a proof of the general theorem.
  'mostowski-finite-chain-collapse': ({ max_length = 6 } = {}) => {
    const max = boundedInteger(max_length, 6, 1, 12);
    const numeral = (n) => Array.from({ length: n }, (_, i) => numeral(i));
    const setRepr = (setOfSets) => '{' + setOfSets.map((member) => setRepr(member)).sort().join(',') + '}';
    for (let n = 1; n <= max; n += 1) {
      const F = [];
      for (let x = 0; x < n; x += 1) {
        const members = [];
        for (let y = 0; y < x; y += 1) if (!members.some((m) => setRepr(m) === setRepr(F[y]))) members.push(F[y]);
        F.push(members);
      }
      for (let x = 0; x < n; x += 1) {
        if (setRepr(F[x]) !== setRepr(numeral(x))) {
          return { ok: false, summary: `chain of length ${n}: F(${x}) is ${setRepr(F[x])}, not the numeral ${x} = ${setRepr(numeral(x))}` };
        }
      }
      for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
          const before = F[j].some((member) => setRepr(member) === setRepr(F[i]));
          if (!before) return { ok: false, summary: `chain of length ${n}: F(${i}) is not a member of F(${j}) although ${i} < ${j}` };
        }
      }
      const image = F.filter((value, index) => F.findIndex((other) => setRepr(other) === setRepr(value)) === index);
      if (setRepr(image) !== setRepr(numeral(n))) {
        return { ok: false, summary: `chain of length ${n}: the image ${setRepr(image)} is not the ordinal ${n} = ${setRepr(numeral(n))}` };
      }
    }
    return { ok: true, summary: `checked the collapsing recursion on chains of length 1..${max}: F(x) equals the von Neumann numeral x, order is reflected as membership, and the image is the ordinal n` };
  },

  'hexagon-a2-cell-triangulation-arithmetic': () => {
    const gcd = (a, b) => { while (b) { const t = a % b; a = b; b = t; } return a < 0n ? -a : a; };
    const frac = (n, d = 1n) => {
      n = BigInt(n); d = BigInt(d);
      if (d === 0n) throw new Error('zero denominator in a rational literal');
      if (d < 0n) { n = -n; d = -d; }
      const g = gcd(n, d) || 1n;
      return { n: n / g, d: d / g };
    };
    const fAdd = (x, y) => frac(x.n * y.d + y.n * x.d, x.d * y.d);
    const fSub = (x, y) => frac(x.n * y.d - y.n * x.d, x.d * y.d);
    const fMul = (x, y) => frac(x.n * y.n, x.d * y.d);
    const fSign = (x) => (x.n > 0n ? 1 : x.n < 0n ? -1 : 0);
    const three = frac(3n);
    // Q + Q*sqrt(3): { a, b } means a + b*sqrt(3) with a, b fractions.
    const num = (a, b = frac(0n)) => ({ a, b });
    const nAdd = (x, y) => num(fAdd(x.a, y.a), fAdd(x.b, y.b));
    const nSub = (x, y) => num(fSub(x.a, y.a), fSub(x.b, y.b));
    const nMul = (x, y) => num(fAdd(fMul(x.a, y.a), fMul(three, fMul(x.b, y.b))), fAdd(fMul(x.a, y.b), fMul(x.b, y.a)));
    const nEq = (x, y) => fSign(fSub(x.a, y.a)) === 0 && fSign(fSub(x.b, y.b)) === 0;
    const nSign = (x) => {
      const a = x.a, b = x.b;
      if (a.n >= 0n && b.n >= 0n) return a.n > 0n || b.n > 0n ? 1 : 0;
      if (a.n <= 0n && b.n <= 0n) return a.n < 0n || b.n < 0n ? -1 : 0;
      const c = fSign(fSub(fMul(a, a), fMul(three, fMul(b, b))));
      return a.n > 0n ? c : -c;
    };
    const f = (n, d = 1n) => num(frac(n, d));
    const g = (n, d = 1n) => num(frac(0n), frac(n, d)); // (n/d)*sqrt(3)
    const half = f(1n, 2n);
    const problems = [];
    const want = (test, message) => { if (!test) problems.push(message); };
    try {
      const V = [
        [f(1n), f(0n)],
        [f(1n, 2n), g(1n, 2n)],
        [f(-1n, 2n), g(1n, 2n)],
        [f(-1n), f(0n)],
        [f(-1n, 2n), g(-1n, 2n)],
        [f(1n, 2n), g(-1n, 2n)],
      ];
      const o = [f(0n), f(0n)];
      const sub = (u, w) => [nSub(u[0], w[0]), nSub(u[1], w[1])];
      const dot = (u, w) => nAdd(nMul(u[0], w[0]), nMul(u[1], w[1]));
      const norm2 = (u) => dot(u, u);
      const mid = (u, w) => [nMul(nAdd(u[0], w[0]), half), nMul(nAdd(u[1], w[1]), half)];

      let sx = f(0n), sy = f(0n);
      for (const vtx of V) { sx = nAdd(sx, vtx[0]); sy = nAdd(sy, vtx[1]); }
      want(nEq(sx, f(0n)) && nEq(sy, f(0n)), 'the six vertices do not sum to the centre');

      V.forEach((u, k) => {
        want(nEq(norm2(u), f(1n)), `|v_${k}|^2 is not 1`);
        want(nEq(norm2(sub(u, V[(k + 1) % 6])), f(1n)), `side ${k} does not have squared length 1`);
      });

      // The three barycentric slopes, written in Q + Q*sqrt(3).
      const slopes = [f(2n), g(4n, 3n), g(2n, 3n)]; // 2, 4/sqrt(3), 2/sqrt(3)
      let triangles = 0;
      for (let k = 0; k < 6; k += 1) {
        const u = V[k], w = V[(k + 1) % 6];
        const m = mid(u, w);
        for (const vtx of [u, w]) {
          triangles += 1;
          const legVM = norm2(sub(vtx, m));
          const legMO = norm2(sub(o, m));
          const hypVO = norm2(sub(vtx, o));
          want(nEq(legVM, f(1n, 4n)), 'leg |vm|^2 is not 1/4');
          want(nEq(legMO, f(3n, 4n)), 'leg |mo|^2 is not 3/4');
          want(nEq(hypVO, f(1n)), 'hypotenuse |vo|^2 is not 1');
          want(nEq(dot(sub(vtx, m), sub(o, m)), f(0n)), 'the angle at m is not right');
          const twoCont2 = nMul(legVM, legMO); // (|vm| |om|)^2 = (2 content)^2 at a right angle
          want(nEq(twoCont2, f(3n, 16n)), '(2 content)^2 is not 3/16');
          const hM2 = nMul(g(1n, 4n), g(1n, 4n)); // (sqrt(3)/4)^2, the height at m over the base |vo|
          want(nEq(nMul(hM2, hypVO), twoCont2), 'the height at m does not invert the base |vo| through (2 content)^2');
          want(nEq(nMul(nMul(slopes[0], slopes[0]), legVM), f(1n)), 'slope 2 does not invert the height at v');
          want(nEq(nMul(nMul(slopes[1], slopes[1]), hM2), f(1n)), 'slope 4/sqrt(3) does not invert the height at m');
          want(nEq(nMul(nMul(slopes[2], slopes[2]), legMO), f(1n)), 'slope 2/sqrt(3) does not invert the height at o');
        }
      }
      want(triangles === 12, `enumerated ${triangles} triangles rather than 12`);

      const L = g(4n, 3n); // 4/sqrt(3)
      want(nEq(nMul(L, g(1n)), f(4n)), 'L * sqrt(3) is not 4');
      want(nSign(nSub(L, f(1n))) === 1, 'L is not greater than 1');
      const delta = g(1n, 24n); // sqrt(3)/24
      want(nEq(nMul(delta, nMul(f(6n), L)), f(1n)), 'delta * 2(D+1)L is not 1 for D = 2');

      want(nEq(norm2(sub(V[0], V[1])), f(1n)), 'd(v_0,v_1) is not 1');
      want(nEq(norm2(sub(V[0], V[2])), f(3n)), 'd(v_0,v_2)^2 is not 3');
      want(nEq(norm2(sub(V[0], V[3])), f(4n)), 'd(v_0,v_3)^2 is not 4');
      want(fSign(fSub(frac(3n), frac(4n))) < 0, 'sqrt(3) < 2 failed: 3 is not below 4');

      const dist = Array.from({ length: 6 }, () => Infinity);
      dist[0] = 0;
      const queue = [0];
      for (let index = 0; index < queue.length; index += 1) {
        const here = queue[index];
        for (const next of [(here + 1) % 6, (here + 5) % 6]) {
          if (dist[next] === Infinity) { dist[next] = dist[here] + 1; queue.push(next); }
        }
      }
      want(dist[1] === 1 && dist[2] === 2 && dist[3] === 3, `the C_6 graph distances are ${dist.slice(1, 4)}`);
      want(queue.length === 6, 'the walk on the 1-skeleton did not reach all six vertices');

      if (problems.length) return { ok: false, summary: problems[0] };
      return { ok: true, summary: `recomputed all ${triangles} v-m-o triangles of the regular hexagon in exact Q(sqrt 3) arithmetic: legs 1/2 and sqrt(3)/2, hypotenuse 1, right angle at each midpoint, slopes 2, 4/sqrt(3), 2/sqrt(3), L = 4/sqrt(3), delta = sqrt(3)/24, vertex distances 1, sqrt(3), 2 against the C_6 graph distances 1, 2, 3` };
    } catch (error) {
      return { ok: false, summary: String(error && error.message ? error.message : error) };
    }
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

// Coefficients are in ascending degree. modulus=0 is exact integer arithmetic
// for the bounded monic rational fixture; otherwise all arithmetic is in F5.
function cyclotomicQuadraticModel(modulus, a, b) {
  const reduceNumber = x => modulus ? ((x % modulus) + modulus) % modulus : x;
  const multiply = (left, right) => {
    const out = Array(left.length + right.length - 1).fill(0);
    left.forEach((x, i) => right.forEach((y, j) => { out[i + j] += x * y; }));
    return out.map(reduceNumber);
  };
  const polynomial = multiply([-a, 1], [-b, 1]);
  const remainder = input => {
    const out = input.map(reduceNumber);
    for (let degree = out.length - 1; degree >= 2; degree--) {
      const leading = out[degree];
      for (let j = 0; j <= 2; j++)
        out[degree - 2 + j] = reduceNumber(out[degree - 2 + j] - leading * polynomial[j]);
    }
    return [out[0] ?? 0, out[1] ?? 0];
  };
  const equal = (left, right) => {
    const x = remainder(left), y = remainder(right);
    return x.every((v, i) => v === y[i]);
  };
  return { reduceNumber, remainder, equal, product: (left, right) => remainder(multiply(left, right)) };
}

function smokeResult(ok, summary) { return { ok, summary }; }
// Composite Simpson quadrature for the fixed finite Gaussian fixtures above.
// CDF arguments have absolute value at most 4. Witness truncation at -12
// discards at most Phi(-10)<8e-24; moment windows span ten standard deviations
// on each side. The 1e-8 tolerance exceeds tails and discretization error.
function smokeSimpson(f, low, high) {
  const panels = 4096, width = (high - low) / panels;
  let sum = f(low) + f(high);
  for (let i = 1; i < panels; i++) sum += (i % 2 ? 4 : 2) * f(low + width * i);
  return sum * width / 3;
}
function smokeStandardNormalDensity(x) { return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI); }
function smokeNormalCdf(x) { return 0.5 + smokeSimpson(smokeStandardNormalDensity, 0, x); }
function smokeClose(a, b) { return Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-8 * Math.max(1, Math.abs(b)); }
function smokeGaussianKernelMoments(logKernel, center, scale) {
  const kernel = theta => Math.exp(logKernel(theta) - logKernel(center));
  const low = center - 10 * scale, high = center + 10 * scale;
  const mass = smokeSimpson(kernel, low, high);
  const mean = smokeSimpson(theta => theta * kernel(theta), low, high) / mass;
  const variance = smokeSimpson(theta => (theta - mean) ** 2 * kernel(theta), low, high) / mass;
  return { mean, variance };
}

function smokeCovariances(sample) {
  const n = sample.length, d = sample[0].length;
  const mean = Array.from({ length: d }, (_, j) => sample.reduce((s, row) => s + row[j], 0) / n);
  const raw = Array.from({ length: d }, (_, j) => Array.from({ length: d }, (_, k) => sample.reduce((s, row) => s + row[j] * row[k], 0) / n));
  const centered = Array.from({ length: d }, (_, j) => Array.from({ length: d }, (_, k) => sample.reduce((s, row) => s + (row[j] - mean[j]) * (row[k] - mean[k]), 0) / n));
  return { mean, raw, centered };
}
function smokeMatrixRank(matrix) {
  const a = matrix.map(row => [...row]);
  let rank = 0;
  for (let column = 0; column < a[0].length && rank < a.length; column++) {
    const pivot = a.findIndex((row, i) => i >= rank && Math.abs(row[column]) > 1e-12);
    if (pivot < 0) continue;
    [a[rank], a[pivot]] = [a[pivot], a[rank]];
    for (let i = rank + 1; i < a.length; i++) {
      const factor = a[i][column] / a[rank][column];
      for (let j = column; j < a[0].length; j++) a[i][j] -= factor * a[rank][j];
    }
    rank++;
  }
  return rank;
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
