// Research proposal: seven bounded batch-8 cases, not general probability proofs.
import { q, qadd, qsub, qmul, qdiv, qcmp, qstr, close } from '../numerical-optimization-dynamics-2026-10-16-owner-finite-smoke-core-rosenbrock/numerical-core.mjs';
const equal = (a, b) => qcmp(a, b) === 0;
const sum = xs => xs.reduce(qadd, q(0));
function moments(rows, target = null) {
  const mass = sum(rows.map(r => r.p));
  if (!equal(mass, 1)) throw new Error('fixture law must have total mass one');
  const mean = sum(rows.map(r => qmul(r.p, r.value)));
  const second = sum(rows.map(r => qmul(r.p, qmul(r.value, r.value))));
  const variance = qsub(second, qmul(mean, mean));
  const mse = target === null ? null : sum(rows.map(r => qmul(r.p, qmul(qsub(r.value, target), qsub(r.value, target)))));
  return { mean, second, variance, mse };
}
const displayMoments = m => Object.fromEntries(Object.entries(m).map(([k, v]) => [k, v === null ? null : qstr(v)]));
function sirUpdate(ys, { z = q(1), G = y => y, f = () => q(1), fallback = q(0) } = {}) {
  const weights = ys.map(y => q(G(y))), a = qdiv(sum(weights), ys.length);
  const etaF = equal(a, 0) ? fallback : qdiv(sum(weights.map((g, i) => qmul(g, f(ys[i])))), qmul(ys.length, a));
  return { a, value: qmul(qmul(z, a), etaF), zeroWeight: equal(a, 0) };
}
function oneProposal() {
  const rows = [0, 1].map(y => ({ p: q(1, 2), value: sirUpdate([y]).value }));
  const m = moments(rows), fallbacks = [q(0), q(1)].map(fallback => sirUpdate([0], { fallback }));
  return { ok: equal(m.mean, q(1, 2)) && equal(m.variance, q(1, 4)) && fallbacks.every(r => r.zeroWeight && equal(r.value, 0)), details: { ...displayMoments(m), zeroFallbacks: fallbacks.map(r => qstr(r.value)), varianceBound: '1/4' } };
}
function oneLevel() {
  // A1={0}; full resampling after the sole level cannot change its normalizer.
  const rows = [0, 1].map(y => ({ p: q(1, 2), value: sirUpdate([y], { G: x => Number(x === 0) }).value }));
  const m = moments(rows, q(1, 2)), bound = q(2, 4);
  return { ok: equal(m.mean, q(1, 2)) && equal(m.mse, q(1, 4)) && qcmp(m.mse, bound) <= 0, details: { ...displayMoments(m), bound: qstr(bound), outcomes: rows.map(r => qstr(r.value)) } };
}
function simpson(f, a, b, n = 4096) {
  const h = (b - a) / n;
  let total = f(a) + f(b);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(a + i * h);
  return total * h / 3;
}
function gaussianBarrier() {
  // Fixed finite quadrature evaluation, not a proof/certified enclosure of a Gaussian integral.
  const phi = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  const contribution = x => x >= 2 ? Math.exp(-2 * x + 2) : 0;
  // y=X-2 under Q=N(2,1); integrate only y>=0, with a fixed cutoff12.
  const mean = simpson(y => contribution(y + 2) * phi(y), 0, 12);
  const second = simpson(y => contribution(y + 2) ** 2 * phi(y), 0, 12);
  const tail2 = simpson(phi, 2, 14), tail4 = simpson(phi, 4, 14);
  const expectedSecond = Math.exp(4) * tail4;
  const ok = close(contribution(1), 0) && close(contribution(2), Math.exp(-2)) && close(contribution(3), Math.exp(-4)) && close(tail2, 0.02275013194817921, 5e-11) && close(tail4, 0.00003167124183311998, 5e-11) && close(mean, tail2, 5e-11) && close(second, expectedSecond, 5e-11) && second > mean ** 2;
  return { ok, details: { barrier: 2, likelihoodAt1_2_3: [1, 2, 3].map(contribution), mean, tail2, second, expectedSecond, quadrature: { panels: 4096, proposalOffsetRange: [0, 12], tailCutoff: 14 }, limitation: 'bounded quadrature comparison only; no exact real integral or asymptotic efficiency proof' } };
}
function productLaw(probabilities, N) {
  const count = probabilities.length * N, rows = [];
  for (let mask = 0; mask < 2 ** count; mask++) {
    let weight = q(1), estimator = q(1);
    for (let level = 0; level < probabilities.length; level++) {
      let successes = 0;
      for (let j = 0; j < N; j++) {
        const hit = (mask >> (level * N + j)) & 1;
        successes += hit;
        weight = qmul(weight, hit ? probabilities[level] : qsub(1, probabilities[level]));
      }
      estimator = qmul(estimator, q(successes, N));
    }
    rows.push({ p: weight, value: estimator });
  }
  return rows;
}
function queueWork() {
  const arrivals = [0, 1].flatMap(b1 => [0, 1].map(b2 => b1 + b2));
  const p1 = q(arrivals.filter(n => n >= 1).length, arrivals.length), target = q(arrivals.filter(n => n === 2).length, arrivals.length), p2 = qdiv(target, p1);
  const two = moments(productLaw([p1, p2], 2)), four = moments(productLaw([p1, q(1), q(1), p2], 1));
  const relative = m => qdiv(m.variance, qmul(m.mean, m.mean));
  const rv2 = relative(two), rv4 = relative(four), work2 = 2 * 2, work4 = 1 * 4;
  return { ok: equal(p1, q(3, 4)) && equal(p2, q(1, 3)) && equal(target, q(1, 4)) && equal(two.mean, target) && equal(four.mean, target) && equal(rv2, q(4, 3)) && equal(rv4, 3) && qcmp(rv4, rv2) > 0 && work2 === 4 && work4 === 4, details: { arrivalTotals: arrivals, p1: qstr(p1), p2: qstr(p2), target: qstr(target), two: { ...displayMoments(two), relativeVariance: qstr(rv2), work: work2 }, four: { ...displayMoments(four), relativeVariance: qstr(rv4), work: work4 }, enumeratedDrawPatternsPerDesign: 16 } };
}
function dependentLevels() {
  const outcomes = [0, 1].flatMap(u => [0, 1].map(v => { const x1 = u ? 1 + v : 3 + v, x2 = u ? 1 : 2; return { u, v, x1, x2, h1: Number(x1 <= 2), h2: Number(x2 === 1) }; }));
  const mean1 = q(outcomes.filter(r => r.h1).length, 4), mean2 = q(outcomes.filter(r => r.h2).length, 4), productMean = q(outcomes.reduce((a, r) => a + r.h1 * r.h2, 0), 4), target = q(1, 4);
  const uniformX1 = [1, 2, 3, 4].every(x => outcomes.filter(r => r.x1 === x).length === 1), conditionalX2 = [1, 2].every(x => outcomes.filter(r => r.x2 === x).length === 2);
  return { ok: uniformX1 && conditionalX2 && outcomes.every(r => r.h1 === r.u && r.h2 === r.u) && equal(mean1, q(1, 2)) && equal(mean2, q(1, 2)) && equal(productMean, q(1, 2)) && !equal(productMean, target), details: { outcomes, mean1: qstr(mean1), mean2: qstr(mean2), productMean: qstr(productMean), target: qstr(target) } };
}
function zeroPrefix() {
  const outcomes = [0, 1].flatMap(x => [0, 1].map(y => { const r = sirUpdate([x, y], { G: v => Number(v === 0) }); return { particles: [x, y], status: r.zeroWeight ? 'zero-particle-prefix' : 'completed', estimate: r.value }; }));
  const misses = outcomes.filter(r => r.status === 'zero-particle-prefix'), missProbability = q(misses.length, outcomes.length), target = q(1, 2);
  return { ok: equal(missProbability, q(1, 4)) && qcmp(target, 0) > 0 && misses.length === 1 && misses[0].particles.every(x => x === 1) && misses.every(r => equal(r.estimate, 0)), details: { outcomes: outcomes.map(r => ({ ...r, estimate: qstr(r.estimate) })), missProbability: qstr(missProbability), target: qstr(target) } };
}
function endpointMiss() {
  const path = t => { const delta = qsub(t, q(1, 2)); const distance = q(delta.n < 0n ? -delta.n : delta.n, delta.d); return qsub(1, qmul(2, distance)); };
  const times = [q(0), q(1, 2), q(1)], values = times.map(path), threshold = q(3, 4);
  const gridHit = [values[0], values[2]].some(v => qcmp(v, threshold) >= 0), witnessHit = qcmp(values[1], threshold) >= 0;
  const continuousProbability = Number(witnessHit), gridProbability = Number(gridHit), bias = Math.abs(continuousProbability - gridProbability);
  return { ok: equal(values[0], 0) && equal(values[1], 1) && equal(values[2], 0) && witnessHit && !gridHit && bias === 1, details: { times: times.map(qstr), values: values.map(qstr), threshold: qstr(threshold), continuousProbability, gridProbability, bias, limitation: 'a single fixed continuous piecewise-affine path; no grid-spacing rate' } };
}
const fixtures = {
  'one-proposal-bernoulli-update': oneProposal,
  'one-level-one-particle-event-model': oneLevel,
  'barrier-two-moment-substitution': gaussianBarrier,
  'equal-work-two-versus-four-levels': queueWork,
  'four-point-dependent-level-coupling': dependentLevels,
  'two-particle-zero-prefix-branch': zeroPrefix,
  'deterministic-endpoint-grid-miss': endpointMiss,
};
export const numericalParticlesChecks = {
  'numerical-particles-fixture': (smoke = {}) => {
    const fail = summary => ({ ok: false, summary });
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) return fail('fixture descriptor must be an object');
    const allowed = new Set(['check', 'asserts', 'fixture', 'parameters', 'claim', 'checked_in']);
    if (Object.keys(smoke).some(k => !allowed.has(k))) return fail('unsupported fixture parameter');
    if ('parameters' in smoke && (!smoke.parameters || typeof smoke.parameters !== 'object' || Array.isArray(smoke.parameters) || Object.keys(smoke.parameters).some(k => k !== 'fixture'))) return fail('parameters supports only fixture');
    if ('check' in smoke && smoke.check !== 'numerical-particles-fixture') return fail('wrong fixture family');
    const top = smoke.fixture, nested = smoke.parameters?.fixture;
    if ((top !== undefined && typeof top !== 'string') || (nested !== undefined && typeof nested !== 'string') || (top !== undefined && nested !== undefined && top !== nested)) return fail('invalid or conflicting fixture selector');
    const selected = top ?? nested;
    if (selected !== undefined && !Object.hasOwn(fixtures, selected)) return fail('unknown bounded fixture');
    try {
      const names = selected === undefined ? Object.keys(fixtures) : [selected];
      const results = names.map(fixture => ({ fixture, ...fixtures[fixture]() }));
      return { ok: results.every(r => r.ok), summary: `${results.filter(r => r.ok).length}/${results.length} bounded rare-event fixtures; exact finite enumeration except fixed Gaussian quadrature`, results };
    } catch (e) { return fail(`bounded fixture failed: ${e.message}`); }
  },
};
