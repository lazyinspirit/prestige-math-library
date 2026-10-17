# Batch 83 authoring notes — Riemannian optimization on Stiefel and Grassmann manifolds

## Scope and controlling documents

This batch owns A page `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (order 2450) and B page `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` (order 2451) in `numerical-optimization-inverse-problems-and-uncertainty-quantification`. The batch dependency input assigns level 5 with prerequisite batches 1, 34, 58, and 72; its supplied scheduling input is `61a7875a7da61ae8a6a1abfa2d4e0eba5973b556d11d5ecccebb7f57ed73f8f6`.

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner authoring direction, the batch assignment and evidence, `plan-spec.json`, and the complete assigned design sections at `research/plan-numerical-optimization-track.md` L947 and L959. The binding detail is Contract OPT11 in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`, as adopted by the owner direction. It controls any stale task/design wording. The current plan spec agrees with the assigned page order, category, and six required pages; no plan-spec conflict was found.

The stale task text says the scheduled PC-VAR supplier is empty. That is no longer true: the batch-92 manifest now has 19 A-page items, including the exact energy-model and gradient items used by the example, and both current supplier bodies and proofs were inspected. The PC-VAR example is therefore completed against those interfaces. Its two later-page item citations are `forward_refs`, not `deps`, because batch 92 requires the batch-83 A page; this records the real supplier relationship without creating a reverse batch dependency.

## Inventory and item dependency levels

The manifest has 20 A items and 4 B examples, below the 100-item page cap. Levels below count only item suppliers in this run; external published suppliers do not raise a level.

| Level | Assigned items |
|---:|---|
| 0 | `def-stiefel-grassmann-optimization-conventions`; `def-complex-stiefel-grassmann-optimization-conventions` |
| 1 | `prop-stiefel-grassmann-are-compact`; `prop-complex-stiefel-grassmann-are-compact`; `thm-stiefel-grassmann-tangent-projections`; `thm-complex-stiefel-grassmann-tangent-projections` |
| 2 | `prop-stiefel-grassmann-riemannian-gradient-formulas`; `def-complex-grassmann-polar-retraction` |
| 3 | `thm-complex-grassmann-polar-retraction-is-first-order` |
| 4 | `prop-complex-grassmann-projector-energy-gradient`; `def-stiefel-qr-polar-retractions` |
| 5 | `thm-stiefel-retractions-are-first-order` |
| 6 | `alg-riemannian-armijo-backtracking`; `alg-riemannian-trust-region`; `def-stiefel-grassmann-projected-vector-transport` |
| 7 | `lem-riemannian-trust-region-ratio-accuracy-for-small-radii`; `prop-stiefel-grassmann-vector-transport-is-tangent`; `thm-retraction-armijo-acceptance-and-step-lower-bound` |
| 8 | `thm-retraction-armijo-best-iterate-complexity`; `thm-riemannian-trust-region-first-order-complexity` |
| 3 (B) | `ex-repeated-eigenspace-on-grassmann`; `ex-riemannian-stiefel-nonconvex-saddle`; `ex-trace-eigenspace-optimization-with-lanczos-start-angle` |
| 9 (B) | `ex-finite-basis-projector-optimization-on-grassmann` |

All direct carrier dependency lists match the batch manifest, and the final run-wide `item-dependency-levels check` passes with 2,007 items across 214 pages. The scoped manifest contains no dependency cycle.

## Mathematical route and limits

- The real branch fixes the Frobenius metric, derives Stiefel and Grassmann tangent projections and gradients, proves compactness, and defines QR/polar retractions and projected vector transport. The QR and polar maps are proved first-order. The QR Grassmann claim concerns the output column space; no right-equivariance of the QR frame is asserted.
- The complex branch treats complex matrices as real coordinate spaces with metric `Re tr(U*V)`. It proves the Hermitian-adjoint Stiefel tangent/projection formulas, horizontal complex Grassmann projection, compactness, the gradient `2(I-P)K(P)X` for a real Hermitian-projector energy, and a right-unitary-equivariant polar retraction. Smoothness of the inverse square root is justified through realification, the positive-square-root supplier, and the published `lem-matrix-inversion-preserves-ck-regularity`; no unproved complex matrix-smoothness shortcut is used.
- The finite-basis PC-VAR example consumes the current model item and its proved C2/Hermitian-gradient proposition. It derives the model-specific gradient `2(I-P)F(P)X`, verifies the projector parameterization in both directions, and proves uniform pullback-gradient Lipschitzness on each fixed bounded tangent disk. It chooses the zero self-adjoint model operator and a finite subproblem routine that immediately returns failure, so the specified trust-region algorithm uses its Cauchy fallback. The local complexity theorem then gives an explicit finite outer-trial bound and `O(epsilon^-2)` accepted and rejected trials. This is a finite-dimensional guarantee; no claim of exact continuum physical modeling is made.
- The trust-region algorithm matches the current batch-72 thresholds, Cauchy-fraction safeguard, small-radius override, finite statuses, and radius updates. Its manifold ratio estimate and accepted/rejected-trial count are proved locally; the Euclidean supplier proof is not asserted to transfer directly.
- The Armijo theorem includes the step-domain margin `min(1, 1/(2G), 2(1-a)/L_R)`. Finite budgets can return failure and imply no unconditional success. The complexity results are first-order only. The exact QR/polar definitions make no floating-point retraction guarantee; the Householder backward-error supplier does not assert exact orthogonality of computed `Q`.
- No additional axiom branch or choice principle is used.

## Cross-batch supplier inspection

Exact interfaces, required hypotheses, and evidence are in `numerical-optimization-dynamics-2026-10-16-batch-83.cross-batch-dependencies.json`.

- Batch 1: the Householder QR backward-stability body was inspected. It supplies a backward-error limitation under its operationwise assumptions, not exact orthogonality of computed factors.
- Batch 34: the Lanczos bound body and proof were inspected. The trace/Lanczos example checks real symmetry, separated eigenvalues, nonzero start projection, Krylov dimension, and the candidate Rayleigh comparison.
- Batch 58: the strong-Wolfe search body was inspected. It is Euclidean and is not imported as an Armijo theorem; the retraction Armijo acceptance bound is proved locally.
- Batch 72: the trust-region definitions, Cauchy decrease, current algorithm, ratio-accuracy lemma, and complexity proof were read. The local manifold method preserves the actual OPT3 parameter interface and proves its own ratio accuracy and trial counts. These draft bodies are interface evidence only, not independent approval.
- Batch 92: `def-finite-basis-projector-energy-model` and `prop-finite-projector-energy-reality-and-gradient` were read in full. Their exact IDs are the example's two forward references. They state the complex Hermitian rank-r projector domain, real C2 energy, and Hermitian Frobenius gradient. The batch-92 page is order 2468, after this B page; `fwdcheck` confirms both load-bearing references resolve and that no cycle is introduced.

## Sources and coverage

The A page has six full-text sources: Absil–Mahony–Sepulchre, Chapters 3, 4, and 7; Boumal's complete 367-page book; Boumal–Absil–Cartis (2018); and Manton (2002), §§IV and VI–VII for complex Stiefel/Grassmann geometry. Full URLs, locators, item support, and each harvested result's disposition are in `numerical-optimization-dynamics-2026-10-16-batch-83.coverage.json` and `.source-coverage.json`. The coverage checklist reports 27 harvested results with 0 errors and 0 warnings. `source-fetch-check --stamp` verifies 6/6 sources; no source was dropped and no retrieval failed.

## Step 1 readiness and scoped checks

All 24 final items have `ready` records with `owner: false`; their direct `deps`, `justified_by`, and `forward_refs` were recorded and their item/dependency hashes are current. These records attest authoring readiness, not independent mathematical approval.

- `proof-layout`: 24 items, 67 steps, 0 defects.
- Scoped `precheck`: 24/24 pass.
- `rendercheck`: 26 item/page files pass, including real KaTeX and YAML parsing.
- Strict proof contracts: 24/24, 0 errors and 0 warnings.
- Authored-item content policy: 24 items, 0 errors and 0 warnings.
- Manifest dependency arrays: 24 items, 0 normalized, 0 errors; source/manifest comparison found no dependency or page-list mismatches.
- Run-wide item dependency levels: 2,007 items across 214 pages, maximum level 16, no mismatches.
- Scoped `depcheck`: 0 errors and 2 expected `cited-not-in-deps` warnings for the two later PC-VAR suppliers; they are explicitly declared as forward references. Scoped `fwdcheck`: 0 errors, 0 warnings, 2 closed load-bearing forward references and no cycle.
- `extcheck`: 24 items, 0 unproved results; `citecheck`: 24 scanned, 0 warnings.
- `coverage-checklist`: 1 A page, 27 harvested results, 0 errors and 0 warnings. `source-fetch-check --stamp`: 6/6 full-text sources resolved.

No tests were run. No published content, shared plan, engine state, or owner verdict was changed. Completion records do not constitute independent approval.
