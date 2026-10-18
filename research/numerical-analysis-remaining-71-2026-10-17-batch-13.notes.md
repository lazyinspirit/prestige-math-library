# Batch 13 — Step 1 authoring evidence

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `oscillatory-filon-and-levin-quadrature` and its examples page  
Dependency-level input hash: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`  
Active stage observed before authoring: `1-scaffold`; no autopilot state was edited.

## Inventory and dependency levels

The pair contains 16 A-page items and 3 B-page examples (19 items total), below the 100-item page cap. Levels below are recomputed from the final manifest and current `deps`; external suppliers do not raise an in-run level.

- Level 0: `def-na-finite-interval-oscillatory-integral`, `lem-na-lagrange-interpolation-on-distinct-nodes`, `lem-na-one-dimensional-morse-coordinate`.
- Level 1: `alg-na-fourier-polynomial-moments`, `lem-na-complex-phase-derivative`.
- Level 2: `alg-na-levin-collocation-quadrature`, `lem-na-fresnel-integral`, `lem-na-quadratic-phase-amplitude-bound`, `thm-na-fourier-oscillatory-moment-recurrence`, `thm-na-nonstationary-oscillatory-integration-by-parts`.
- Level 3: `alg-na-nonstationary-moment-expansion`, `lem-na-quadratic-phase-stationary-expansion`, `thm-na-levin-conditioned-residual-bound`.
- Level 4: `alg-na-filon-nodal-moment-quadrature`, `ex-na-ill-conditioned-levin-collocation`, `thm-na-single-interior-stationary-phase-expansion`.
- Level 5: `ex-na-interior-stationary-phase-boundary-term`, `thm-na-filon-interpolation-error-bound`.
- Level 6: `ex-na-large-frequency-fourier-filon-versus-midpoint-sample`.

The final graph has no in-run cycles and no cross-batch item edges; `batch-13.cross-batch-dependencies.json` is therefore `[]`. The A-page frontmatter and manifest are sorted by computed level; the B examples are sorted by their levels as well. The item inventory and dependency graph were determined before downstream consumers were written, but the final manifest carrier was persisted after the first draft carriers existed. That sequencing deviation is recorded rather than backdated.

The external item suppliers used by the authored `deps` were read at their current Statements/Definitions and relevant proofs. Their complete ID list is: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-differentiable-implies-continuous`, `cor-pi-is-the-first-positive-sine-zero`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `def-riemann-integral-over-a-jordan-set`, `lem-derivative-of-a-power`, `lem-euclidean-bump-for-a-compact-set-inside-an-open-set`, `lem-mean-value-theorem-on-closed-interval`, `lem-power-laws`, `lem-riemann-integral-unchanged-by-content-zero-modification`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-chain-rule`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-numbers-form-a-field`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-exponential-definition-equivalence`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-ftc-second-part`, `thm-gaussian-integral`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-heine-borel-rn`, `thm-integration-by-parts`, `thm-intermediate-value`, `thm-jordan-boundary-criterion`, `thm-multidimensional-integral-properties`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `thm-of-square-roots`, `thm-polar-form-with-unique-principal-argument`, `thm-quarter-turn-values-and-shift-formulas`, `thm-riemann-fubini-on-product-rectangles`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-and-cosine-subtraction-formulas`, and `thm-sine-cosine-zero-sets-and-fundamental-period`. No missing supplier body remains within this pair. The QUAD-OSC owner-direction sentence saying that no external canonical item is used is read as excluding external method-page theorems as proof premises; the foundational item suppliers above remain explicitly declared and were checked under the batch authoring instructions.

## Plan and design reconciliation

1. The assigned manifest and `plan-spec.json` require the published pages `composite-quadrature-rules` and `finite-precision-direct-factorizations`. The QUAD-OSC prose in `research/plan-numerical-linear-track.md` says no external page token is recorded in `requires`. The manifest/plan-spec requirements are preserved. No composite-rule theorem is a logical premise. The finite-precision page is named only for the separate rounded-solve boundary; all authored quadrature and residual identities are exact-arithmetic statements.

2. The QUAD-OSC design proposes `NA-10 → polynomial-interpolation-and-remainder`, but this page is absent from all 71 run manifests and has no carrier. The needed distinct-node interpolation formula is supplied by the new local `lem-na-lagrange-interpolation-on-distinct-nodes`, with a full root-count uniqueness proof. No polynomial-remainder theorem is claimed or imported; the Filon error estimate is proved from the local interpolation identity and the nonstationary expansion.

3. `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` L216 pairs the Levin equation `p' + iωg'p = f` with an endpoint expression divided by `iω`. Differentiation gives `(p e^{iωg})' = (p' + iωg'p)e^{iωg}`, hence the endpoint difference for this equation has **no** `1/(iω)` factor. The carriers use the no-divisor identity and the exact residual theorem is proved from it. Owner reconciliation is required for `alg-na-levin-collocation-quadrature`, `thm-na-levin-conditioned-residual-bound`, and `ex-na-ill-conditioned-levin-collocation`; these three receive `escalated` readiness records. Proposed owner repair: correct the audit equation/output pair, then reconcile the corresponding statement and downstream contract before acceptance.

## Source reading and disposition

Four full-text sources were inspected and stamped; the complete locators, supported item IDs, and every harvested result's disposition are in `batch-13.coverage.json`.

- Levin 1982, complete 9-page paper, §§1 and 3 plus appendix: `https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf`. Full-text stamp: 207,537 bytes, 9 pages, SHA-256 prefix `4352a1568e943443`.
- Iserles–Nørsett–Olver, complete 22-page book chapter, §§1, 3.2, 3.3, and 4: `https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf`. Stamp: 359,238 bytes, 22 pages, SHA-256 prefix `b982a86b2787508f`.
- DLMF §2.3 full HTML, relevant subsections (i), (iv), and (v): `https://dlmf.nist.gov/2.3`. Stamp: 324,069 bytes, 25,587 extracted text characters, SHA-256 prefix `c5ee95bda599c1f4`.
- DLMF §7.12(ii), full §7.12 HTML inspected and Fresnel subsection read: `https://dlmf.nist.gov/7.12`. Stamp: 109,291 bytes, 9,415 extracted text characters, SHA-256 prefix `e8c80dd44601ae63`.

All four `source-fetch-check --stamp` retrievals succeeded on the first attempt; no recovery retry or `source_resolution` record was needed. DLMF §7.7 was not read and is not claimed as evidence. The two independent treatments per A page are the complete Levin paper and the complete Iserles–Nørsett–Olver chapter, with DLMF as additional reference support.

## Proof and axiom evidence

The proof-contract file has 19 item entries, 83 exact supplier citation rows, and 41 actual numbered-step derivations. Every source-linked fact is mapped to a current supplier Statement or Definition excerpt, every cited step is in its contract, and all eight boundary cases are classified. The three B examples have symbolic Verification arguments; no registered finite-smoke selector applies. Every proof-bearing carrier declares `axiom_use`; no Axiom of Choice is used. The Morse coordinate and stationary cutoff are explicitly constructed, and the proof branches keep the nonstationary, simple-interior-stationary, singular-matrix, and approximate-residual cases distinct.

## Scoped checks

- Batch-local dependency levels: pass, 19 items, maximum level 6; no local cycle or label mismatch.
- `proof-contract --strict`: pass, 19/19 items, 0 errors and 0 warnings.
- `precheck.mts`: pass, 14 proof-bearing carriers checked, 0 failing; definitions and algorithms without proof steps were not applicable.
- `proof-layout.mjs`: pass, 19 files, 41 proof steps, 0 defects.
- Scoped `depcheck`: pass for 19 assigned items and their prerequisite closure (789 items / 160 pages checked), with no warnings.
- Scoped `content-policy`: pass, 19 items, 0 errors / 0 warnings.
- Scoped `rendercheck`: pass, 21 item/page files; KaTeX and renderer YAML checks ran.
- `source-fetch-check`: pass, 4/4 sources fetch-verified.

Three run-wide checks remain open because of state outside this batch; no other batch files were edited.

- `proof-contract-coverage` cannot construct the complete run scope: its first reported missing frontier item is `thm-ewald-pme-reciprocal-energy-force-error-bound`.
- `item-dependency-levels check --run numerical-analysis-remaining-71-2026-10-17` reports 84 errors elsewhere: 74 empty scaffold inventories and 10 level-label mismatches. The mismatches are `alg-incremental-planar-delaunay-edge-flips` (4→5), `alg-incremental-three-dimensional-regular-cavity-repair` (4→5), `alg-randomized-history-dag-point-location` (5→6), `thm-incremental-planar-delaunay-correctness-and-termination` (5→6), `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination` (5→6), `thm-randomized-history-dag-expected-location-cost` (6→7), `thm-three-dimensional-delaunay-output-size-quadratic` (6→7), `ex-cocircular-four-site-lexicographic-tie` (6→7), `ex-collinear-sites-lower-dimensional-output` (6→7), and `ex-scattered-linear-interpolation-over-delaunay-cell` (6→7). The 74 empty A/B page inventories are in batches other than 13: `interpolative-cur-and-nystrom-decompositions`, `fast-multipole-expansions-and-error`, `alternating-tensor-optimization-and-effective-eigenproblems`, `square-root-covariance-update-error-and-stability`, `gaussian-basis-integral-recurrences-and-boys-error`, `monotone-finite-volume-entropy-convergence`, `high-resolution-tvd-eno-and-weno-methods`, `invariant-domain-and-entropy-stable-conservative-schemes`, `mixed-hdiv-fluxes-and-darcy-discretization`, `elasticity-near-incompressibility-and-locking-free-discretization`, `hyperbolic-dg-and-summation-by-parts-discretizations`, `well-balanced-balance-laws-and-wet-dry-fronts`, `discrete-de-rham-complexes-and-edge-elements`, `energy-stable-incompressible-navier-stokes-discretization`, `yee-fdtd-and-transient-maxwell-discretization`, `maxwell-eigenproblems-and-compatible-vector-waves`, `finite-volume-diffusion-and-mimetic-fluxes`, `overlapping-schwarz-and-stable-subspace-decompositions`, `nonlinear-full-approximation-multigrid`, `projection-and-pressure-correction-for-incompressible-flow`, `substructuring-feti-dp-and-bddc-preconditioners`, `volume-integral-scattering-and-partial-wave-error`, `supg-and-residual-based-stabilized-finite-elements`, `boundary-integral-equations-and-galerkin-bem`, `variational-inequality-and-contact-finite-elements`, `compressible-viscous-flow-and-entropy-stable-fluxes`, `least-squares-fem-and-practical-dpg`, `reaction-diffusion-invariants-and-pattern-discretization`, `curved-mesh-geometry-and-conservative-mesh-transfer`, `exterior-wave-problems-absorbing-boundaries-and-pml`, `homogenization-and-multiscale-finite-element-methods`, `phase-field-and-energy-dissipative-discretization`, `ale-interface-and-partitioned-multiphysics-discretization`, `hp-finite-elements-and-spectral-element-methods`, `isogeometric-galerkin-methods`, `semi-lagrangian-characteristic-transport`, and `monotone-hjb-schemes-and-policy-iteration`, each with its `-examples` companion page.
- `step1-decisions check` sees 690 run items, 306 ready, and 458 remaining work rows (340 missing records, 74 empty inventories, 28 escalations, and 16 stale records elsewhere). All 19 batch-13 records are present and hash-current: 16 `ready`, and the three Levin items named above `escalated`.

Optional tests were not added or run. These Step 1 completion and readiness records are author evidence, not independent mathematical approval.
