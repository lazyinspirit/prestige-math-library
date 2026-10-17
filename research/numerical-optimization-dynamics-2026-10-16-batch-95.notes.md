# Batch 95 — Step 1 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta / batch 95  
Pair: T20, Deferred correction and collocation iterations  
Design: `research/plan-numerical-dynamics-track.md`, L1145  
Dispatch scheduling input: `e003165909bf844a4efd5e4bf735ccedd8997534ddd33bc930b85761dbba8cd8`  
Declared batch level and prerequisites: level 6; batches 4, 28, 35, 65, 82.

## Plan and design reconciliation

The complete T20 design section, `plan-spec.json`, task direction, and the owner authoring direction were checked before constructing carriers. They agree on the A/B page IDs, title, and five page prerequisites. `plan-spec.items` is empty because this plan-spec entry is a page scaffold; the design and assigned task control the local item inventory. No scope or convention conflict was found between T20 and `plan-spec`. The owner direction adds no optimization premise. Batch 35 supplies explicit Runge–Kutta methods only; T20 proves the implicit collocation specialization locally and does not import an explicit-RK order statement as a collocation proof.

The assigned pages are:

- A: `library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations.md`
- B: `library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations-examples.md`

The A page has 19 items and the B page has 5 examples. Their inventories match `research/numerical-optimization-dynamics-2026-10-16-batch-95.pages.json`; the A page's five `requires` match the plan.

## Inventory and dependency levels

The levels below are the recomputed whole-run item levels. Each carrier's `deps` is explicit; assigned batch dependencies were authored in ascending level. The focused recomputation found no cycles or label mismatches.

- Level 0: `lem-continuous-riemann-lebesgue-agreement`.
- Level 1: `lem-unit-interval-lebesgue-gauss-data-valid`.
- Level 3: `def-collocation-quadrature-tableau`.
- Level 4: `lem-collocation-quadrature-matrix-well-defined`.
- Level 5: `alg-explicit-left-euler-sdc-sweep`.
- Level 6: `lem-sdc-fixed-point-is-collocation-stage`, `ex-sdc-cost-accounting-per-sweep`.
- Level 7: `lem-one-node-gauss-data-is-midpoint`, `lem-sdc-scalar-linear-iteration-matrix`, `thm-sdc-sweep-contraction-and-error-bound`.
- Level 8: `lem-collocation-polynomial-scaled-derivatives`, `thm-collocation-local-defect-order-m`, `thm-collocation-one-step-stability`, `ex-sdc-one-node-gauss-stiff-iteration-diverges`, `ex-sdc-two-node-gauss-nonstiff-cubic-ivp`.
- Level 9: `lem-gauss-collocation-weighted-defect-bound`, `prop-one-node-gauss-collocation-order-two`, `thm-collocation-global-order-m`, `thm-sdc-finite-sweeps-raise-order`, `thm-sdc-residual-tolerance-preserves-order`.
- Level 10: `thm-gauss-collocation-local-defect-order-2m`, `ex-sdc-constant-predictor-too-few-sweeps`, `ex-sdc-inexact-midpoint-stage-residual`.
- Level 11: `thm-gauss-collocation-global-order-2m`.

The selected 24 labels match their computed levels; the maximum assigned item level is 11. See `research/numerical-optimization-dynamics-2026-10-16-batch-95.dependency-level-check.json` for every item’s direct dependencies and in-run supplier list.

## Mathematical scope and axiom branch

The generic collocation and SDC arguments are choice-free. The local tableau, finite explicit-left-Euler correction sweep, invariant-set contraction, fixed-point equivalence, residual-to-stage bound, local order M, step-map stability, global order M, finite-sweep order, and residual-preserving order all state their branch and tube hypotheses explicitly. No stiff convergence is asserted outside the contraction region. The constants may depend on the fixed nodes and their Lebesgue constant; no uniform-in-M bound is claimed.

The specializations to Gauss quadrature for Lebesgue measure on `[0,1]` explicitly assume Countable Choice through `thm-lebesgue-measure-of-a-box-of-every-kind`. That theorem’s stated CC premise was read and retained. The local interval-data item establishes the required positive measure, support and finite moments under that branch. CC is declared in the relevant `deps` and proof contracts; the generic branch is kept separate.

For Gauss order 2M, the A page first proves the weighted adjoint-defect estimate: an exact-path variational equation, terminal adjoint matrix, degree-(M−1) approximation, moment-identical Gauss branch, and Hermite quadrature remainder yield an endpoint bound O(h^(2M+1)). The global theorem then consumes the current one-step stability/global-error result. One-node Gauss is identified with midpoint and its local expansion is verified directly. For fixed k, the constant-predictor result gives the guaranteed order min(M,k+1). The inexact-stage theorem converts an O(h^(p+1)) stage target into an O(h^(p+2)) endpoint perturbation and a discrete global recurrence.

## Source reading and harvest

The six active source entries and all 19 harvested results, with per-result disposition, item support, exact locator, retrieval history, and fetch stamp, are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-95.source-coverage.json`. Full-text sources were inspected; no abstract or search snippet is treated as proof evidence.

- Causley and Seal, *On the convergence of spectral deferred correction methods*, [full arXiv PDF](https://arxiv.org/pdf/1706.06245), §2.1 Lemma 2.1 and the complete §3 Theorem 3.1 proof/corollaries; 29 pages, stamp `adb58588b8235fb6`.
- Hairer, Nørsett, and Wanner, *Solving Ordinary Differential Equations I*, [complete book PDF](https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf), Chapter II §II.7, Theorems 7.9–7.10 and proof details; 539 pages, stamp `0e4cf5fc87bc5c08`.
- Hairer and Wanner, *Introduction à l’Analyse Numérique*, [official complete lecture notes](https://www.unige.ch/~hairer/poly/poly.pdf), Chapter III §§III.2–III.3, local-order convention and full global-error proof; 168 pages, stamp `fb58a3f600693678`.
- Gubner, *Gaussian Quadrature and the Eigenvalue Problem*, [complete notes PDF](https://gubner.ece.wisc.edu/gaussquad.pdf), §§2–5; 7 pages, stamp `c32a7dda93307bb8`.
- MATH 373, [Lecture 14: Gaussian Quadrature](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf), complete §§10.2–10.5; 4 pages, stamp `6c20571608862f8f`.
- Hunter, *Measure Theory Notes*, [complete notes PDF](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_old.pdf), §4.8, Theorem 4.28; 93 pages, stamp `b4ed9e44af744538`.

The planned chapter-only URL `https://www.unige.ch/~hairer/poly/chap3.pdf` failed in the web reader with an internal retrieval error. A search of official Hairer–Wanner full-note/book mirrors and independent numerical ODE notes located the official complete `poly.pdf`; that full source was retrieved and read, after which recovery stopped. The failed candidate is retained in the active source record’s `retrieval_history`; it is not cited as read. No Dutt/Greengard/Rokhlin text is claimed. No active batch-95 source remains unresolved or dropped.

## Supplier audit and open prerequisites

The actual supplier statements/proofs were inspected against each consuming claim. Current Step 1 status is material here:

- Batches 28, 35, 65, and 82 have current hash-valid ready records for the used supplier items. Batch 82’s exactness and Hermite-remainder proof contracts pass strict checking, both prechecks pass, and `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-82.coverage.json` reports 5/5 resolved (3 fetch stamps, 2 documented source drops). This is author readiness/interface verification, not independent acceptance.
- Batch 4’s current `def-cardinal-polynomial-interpolation` and `lem-cardinal-basis-degree-and-values` bodies were read. Their ordered-node, cardinal-value, polynomial-degree, and finite-expansion interfaces match the T20 uses. However, both item frontmatters omit `dependency_level` although the batch-4 manifest records levels 1 and 2, and both prior Step 1 ready hashes now return `Item or dependency changed; record current readiness`. These are unresolved supplier-readiness/metadata checks for the owner; this batch did not edit their files.
- `thm-lagrange-interpolation-remainder` also lacks carrier `dependency_level` despite batch-4 manifest level 4. T20 does not declare or consume that item; it is recorded as a page-level supplier defect only, not silently added to the mathematical proof.

The B4 page edge and all item edges using the two cardinal suppliers are `open` in `research/numerical-optimization-dynamics-2026-10-16-batch-95.cross-batch-dependencies.json`. Every T20 claim depending transitively on them is escalated: `def-collocation-quadrature-tableau`, `lem-collocation-quadrature-matrix-well-defined`, `alg-explicit-left-euler-sdc-sweep`, `lem-sdc-fixed-point-is-collocation-stage`, `lem-one-node-gauss-data-is-midpoint`, `lem-sdc-scalar-linear-iteration-matrix`, `thm-sdc-sweep-contraction-and-error-bound`, `lem-collocation-polynomial-scaled-derivatives`, `thm-collocation-local-defect-order-m`, `thm-collocation-one-step-stability`, `lem-gauss-collocation-weighted-defect-bound`, `prop-one-node-gauss-collocation-order-two`, `thm-collocation-global-order-m`, `thm-sdc-finite-sweeps-raise-order`, `thm-sdc-residual-tolerance-preserves-order`, `thm-gauss-collocation-local-defect-order-2m`, `thm-gauss-collocation-global-order-2m`, and all five B examples. The independent helper `lem-continuous-riemann-lebesgue-agreement` and the local interval-moment item `lem-unit-interval-lebesgue-gauss-data-valid` have no unresolved supplier and are ready.

The A/B carriers and contracts are complete despite this open supplier check. Planned interfaces were used only for drafting; supplier bodies were inspected and no acceptance is inferred. Current item decisions are recorded with `node tools/step1-decisions.mjs record` and no `--owner`: 2 ready, 22 escalated.

## Scoped checks and remaining owner reconciliation

- Assigned precheck: 24 files; 22 proof-bearing items checked, 0 failures, and 2 definitions/algorithms not applicable. Their `verification.precheck` fields now match (`pass`/`n/a`).
- Rendercheck: all 24 assigned items, 0 errors/warnings.
- Proof layout after proof edits: 4 explicitly changed items, 18 steps, 0 defects.
- Strict batch-95 proof contracts: all 24 scope entries checked, 0 errors/warnings. Changed proof claims/steps, fact-use maps, exact supplier excerpts, axiom notes, and checked boundary evidence are aligned.
- Coverage checklist: 2 pages, 19 harvested results, 0 errors/warnings.
- Source fetch: 6/6 assigned sources fetch-verified and resolved.
- Focused depcheck: 24 assigned item checks, 0 errors/warnings; manifest dependency check: 24 items, 0 errors.
- Whole-run item dependency-level check: 2009 items across 214 pages pass; all 24 batch-95 labels match, maximum assigned level 11.
- Whole-run merged proof-contract coverage remains blocked outside this batch: 1546 of 1561 proof-bearing items are covered, with 15 missing contracts in other batches: `ex-ishigami-function-sobol-decomposition`, `ex-noisy-simulator-intrinsic-noise-and-input-sensitivity`, `ex-perfectly-correlated-inputs-and-shapley-allocation`, `ex-polynomial-chaos-coefficients-and-sobol-indices`, `ex-ratio-pick-freeze-index-estimator-is-biased`, `ex-zero-variance-sobol-indices-undefined`, `lem-product-coordinate-projections-commute-and-contract`, `lem-uniform-interval-poincare-inequality`, `thm-complete-chaos-tensor-expansions-give-sobol-coefficients`, `thm-monte-carlo-shapley-effects-clt-and-standard-errors`, `thm-pick-freeze-sobol-covariance-identities`, `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse`, `thm-poincare-bound-for-total-sobol-effect`, `thm-product-hoeffding-anova-decomposition`, and `thm-shapley-effects-are-nonnegative-and-efficient`.
- The shared `research/numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json` was not edited. Its check is stale: recorded input hash `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`, current recomputation `3d463b9f298c2ee719113343b91f8eef52727d21deb2adaf383b242790973d7c`. Batch 95 itself still computes to level 6 with prerequisites 4, 28, 35, 65, 82. The precise result is in the assigned `dependency-level-check.json` for owner reconciliation.

No tests were run; the requested authoring and validation gates were run. No published content, shared plan, engine state, or verdict was changed.


## Owner focused interpolation reconciliation after genuine95 drain

Root verified the native95 final successful attempt ended04:55:42.424Z with
complete/unaborted/final response and zero exits; owner independently matched
the stable result to immutable .attempt-1 and found no95 refresh. Complete
final item/page/metadata/native/readiness preimages are archived under
`research/numerical-optimization-dynamics-2026-10-16-owner-collocation-interpolation-before-repair`.

The original two source4 stale-readiness conditions and their needed draft
prerequisite context were reconciled by root in `research/numerical-optimization-dynamics-2026-10-16-owner-collocation95-sources-binding.json`.
This supersedes the earlier notes about source4 missing numeric levels; no
source Statement/Definition change or independent acceptance is claimed here.

Two actual reproduction uses now explicitly depend on
`thm-cardinal-polynomial-interpolant-exists-uniquely`: scaled-derivative F3
and local-defect F8. For each real component polynomial p of degree≤M−1,
p and I_Mp have the same M nodal data/degree bound, so uniqueness supplies
reproduction. Scaled proof2.1 now derives u_h from its DEFINING integral
of the interpolated stage fields. The finite nodal field remainder O(h^M)
becomes an integrated remainder O(h^(M+1)) through derivative M, including
M=1 and a zero node; no uniqueness of a degree-M polynomial from M stage
values is assumed. Both Statements and all order/Gauss/SDC scope are unchanged.

All22 original affected interpolation uses were checked in the focused owner
triage. The actual changed-item reverse closure has eight further owning95
consumers and no outside pair consumers; their unchanged Statement interfaces
remain applicable. Exact contract derivations/fact-use maps/source excerpts,
manifest deps, coverage and cross-context records are synchronized. No new
page edge is needed. Root owns current95 levels/readiness/hash binding.
Required final scoped precheck/layout and release are recorded in `research/numerical-optimization-dynamics-2026-10-16-owner-collocation-interpolation-interface-escalation.json`.
