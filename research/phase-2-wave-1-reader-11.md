# Phase 2 wave 1 — reader report, batch 11

Date: 2026-09-08. Reader scope was the draft differential-geometry A/B pair
`measurable-densities-and-radon-volume-on-manifolds` and
`measurable-densities-and-radon-volume-on-manifolds-examples`. No content,
contract, page, plan, or published file was edited.

## Opened scope

I read the live batch-11 manifest, coverage, cross-batch dependency record,
proof contracts, and notes; the controlling DG-17M design in
`research/plan-differential-geometry-track.md` (including its A inventory and
B examples); the current plan entry; and both page files. The current plan
adds the necessary earlier batch-10 A-page supplier
`euclidean-surface-measure-divergence-and-green-identities`; this is the
controlling current-plan difference from the prose design.

All 18 assigned items were opened and checked:

- A: `def-borel-measurable-nonnegative-density-on-a-manifold`,
  `lem-measurable-density-chart-integrals-agree-on-overlaps`,
  `def-countable-chart-gluing-of-a-nonnegative-density-measure`,
  `thm-chart-gluing-defines-a-countably-additive-borel-density-measure`,
  `thm-density-measure-is-independent-of-the-chart-gluing`,
  `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure`,
  `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`,
  `thm-density-measure-integration-agrees-with-smooth-density-integration`,
  `cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls`,
  `fs-local-finiteness-means-finite-total-density-measure`, and
  `fs-orientation-is-required-for-a-density-measure`.
- B: `ex-chart-gluing-recovers-euclidean-lebesgue-measure`,
  `ex-positive-weighted-volume-on-an-open-interval`,
  `ex-density-measure-in-two-overlapping-circle-charts`,
  `ex-density-measure-on-a-nonorientable-manifold`,
  `ex-zero-dimensional-density-measure-is-weighted-counting`,
  `cex-a-smooth-density-can-have-infinite-total-mass`, and
  `ex-borel-ball-volume-before-any-comparison-theorem`.

I also opened each direct item dependency used by those claims, including the
batch-10 Borel change-of-variables supplier
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
and its complete current proof. Its open-domain, $C^1$-diffeomorphism,
nonnegative-Borel, $[0,\infty]$ interface matches the overlap lemma exactly;
boundary faces and the zero-dimensional case are separately handled.

## Mathematical reading

The density transition law has the correct Jacobian direction. The overlap
argument correctly restricts boundary charts to open interiors before applying
substitution, then restores face contributions by nullity even for infinite
coefficients. Chart-partition gluing uses only nonnegative sums; its measure,
partition-independence, and chart-restriction proofs do not cancel infinities.
The compact-finiteness/Radon proof handles boundary half-balls and dimension
zero. The integration comparison correctly routes completed-measurable
functions through Borel representatives rather than claiming a
completed-measurable change-of-variables theorem.

The finite-dimensional Darboux bridge handles assigned grid faces, and all
examples have the stated witnesses: the interval exhaustion has mass
$\log(N-1)$, the circle arcs total $2\pi$, the open Möbius fundamental strip
has area two with a null seam, and the two balls distinguish relative
compactness from finite total volume.

The source contracts cite Lee, Chapter 16 (pp. 428–433), and Folland,
Theorems 2.14–2.15, 2.47, 7.8 and §11.4 at the locators recorded in the
coverage manifest. Their current contracts accurately delimit the local Borel
construction; no claim depends on the protected published measurable-$C^1$
proof.

## Verdict and blockers

Both pages pass this reader check. No defect was confirmed, no proposed
withdrawal is needed, and no blocker remains in this batch scope. The separate
published measurable-$C^1$ proof debt remains protected Phase-3 work and is
not used as this batch's Borel substitution supplier.

## Validation

- `node tools/tsx-run.mjs tools/precheck.mts` on all 16 proof-bearing assigned
  items: 16 checked, 0 failing.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-11.coverage.json --require-destination`:
  1 page, 35 harvested results, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-11.proof-contracts.json --strict`:
  18/18 checked, 0 errors, 0 warnings.
- `git diff --check`: clean.

No reflow was required because no assigned item changed.
