# Frontier 33 — reader report, batch 12

## Scope opened

- Assigned A page: `library/pde/maximum-principles-harnack-and-liouville-in-rn.md`.
- Assigned B page: `library/pde/maximum-principles-harnack-and-liouville-in-rn-examples.md`.
- Assigned A items (26): `def-subharmonic-and-superharmonic-functions-in-rn`, `lem-strict-subharmonic-perturbation`, `thm-weak-maximum-principle-for-the-laplacian`, `cor-weak-minimum-principle-for-the-laplacian`, `thm-comparison-principle-for-classical-subharmonic-functions`, `lem-classical-subharmonic-mean-value-inequalities`, `thm-strong-maximum-principle-for-classical-subharmonic-functions`, `thm-strong-maximum-principle-for-harmonic-functions`, `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes`, `cor-uniqueness-for-the-classical-dirichlet-problem`, `cor-poisson-supremum-estimate-from-a-quadratic-barrier`, `def-interior-sphere-condition-and-sphere-normal`, `lem-interior-sphere-barrier-for-the-laplacian`, `thm-hopf-boundary-point-lemma-for-the-laplacian`, `thm-harnack-inequality-on-a-ball`, `lem-finite-harnack-chain-on-a-compact-connected-subset`, `cor-harnack-inequality-on-compact-subsets`, `thm-harnack-convergence-principle`, `lem-smooth-sphere-data-have-a-harmonic-replacement`, `lem-derivative-estimate-proof-of-one-sided-harmonic-liouville`, `thm-liouville-theorem-for-bounded-harmonic-functions`, `cor-positive-entire-harmonic-functions-are-constant`, `cor-entire-harmonic-functions-with-bounded-gradient-are-affine`, `cor-removable-singularity-for-bounded-harmonic-functions`, `thm-maximum-principle-with-limsup-control-at-infinity`, and `rem-maximum-principles-need-domain-and-boundary-hypotheses`.
- Assigned B items (10): `ex-harmonic-function-attaining-only-boundary-extrema`, `ex-harnack-constant-from-the-poisson-kernel-ratio`, `cex-maximum-principle-fails-for-superharmonic-maxima`, `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity`, `cex-hopf-lemma-needs-a-boundary-geometry-hypothesis`, `cex-liouville-needs-one-sided-boundedness`, `cex-unbounded-punctured-harmonic-singularity-is-not-removable`, `cex-strong-maximum-principle-needs-connectedness`, `cex-hopf-conclusion-needs-a-strict-nonconstant-extremum`, and `ex-subharmonic-quartic-and-harmonic-saddle`.
- Read the current batch manifest, coverage, proof-contract map, author check, design section PDE-4, the current page prose, and all 13 direct published dependency bodies: `def-laplacian-of-a-c2-function`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `lem-radial-derivative-of-a-spherical-average`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `def-connected-space`, `cor-ball-mean-value-property-for-harmonic-functions`, `lem-sphere-and-ball-measures-scale`, `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic`, `thm-spherical-mean-value-property-for-harmonic-functions`, `thm-dominated-convergence`, `lem-derivatives-of-harmonic-functions-are-harmonic`, and `thm-continuous-mean-value-functions-are-harmonic`.
- Opened the cited source treatments: Hunter, *Notes on Partial Differential Equations*, Chapter 2 §§2.1–2.4 (including Theorems 2.17–2.18, Lemma 2.21, and Theorem 2.22); Gantumur, *Harmonic functions* (including Lemma 5, Corollaries 10–11, Theorems 17 and 26); and Schmidt, *Lectures Notes, PDE*, §2.4 remarks on Phragmén–Lindelöf principles.

## Mathematics review

The classical sign convention, strict quadratic perturbation, weak comparison, and strong maximum proofs preserve their boundedness, closure-continuity, and connectedness hypotheses. The subharmonic mean inequalities have the correct spherical and ball expansion constants, and retain the Countable Choice hypothesis inherited from polar coordinates.

The Hopf argument uses only the supplied interior tangent sphere and its one-sided directional derivative. The exponential barrier has the correct nonnegative Laplacian on the stated annulus and negative outward derivative. The Harnack ball estimate uses compactly contained smaller balls, so it does not assume a boundary trace; its finite-chain corollary treats the zero function separately and does not assume that the compact set itself is connected.

The convergence theorem applies Harnack to nonnegative differences and obtains local uniform Cauchy control. The Poisson kernel is normalized with the correct surface-measure factor, has the stated harmonicity calculation, and its boundary convergence argument is valid for the restricted smooth data. The removability barriers have the correct dimension-two logarithmic and dimension-at-least-three power profiles. The examples and counterexamples have the asserted signs, extrema, derivative directions, harmonicity, and geometry; in particular the planar cusp example directly excludes every tangent interior ball.

## Repairs made

None. No assigned A-page prose or in-flight item had a confirmed defect. Consequently no proof contract or `verification.judge` record was changed.

## Checks

- Focused `node tools/tsx-run.mjs tools/precheck.mts` over all 33 proof-bearing assigned items — pass: 33/33.
- Focused `node tools/rendercheck.mjs` over all 36 assigned items — pass.
- `node tools/content-policy.mjs research/frontier-33-batch-12.pages.json` — pass: 36 scoped items, zero errors and warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-12.proof-contracts.json --strict` — pass: 33/33, zero errors and warnings.
- `node tools/citation-fidelity.mjs research/frontier-33-batch-12.proof-contracts.json` — all 69 recorded quotes found; no widening candidates.
- Repository-wide `node tools/depcheck.mjs --quiet` reports existing unrelated global errors (three YAML escapes and three unresolved links) and many warnings outside this batch. It reports no batch-12-specific result and is not a blocker to this reader verdict.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `maximum-principles-harnack-and-liouville-in-rn` | Pass. |
| `maximum-principles-harnack-and-liouville-in-rn-examples` | Pass. |

## Uneditable defects

None.

## Blocker

None. The live default `.autopilot` pointer reports stale `frontier-23` state; it was not used as evidence. The named frontier-33 artifacts and current corpus files were read directly.
