# Batch 89 authoring notes — Variational crimes and Strang lemmas

## Controlling design and conflict record

The controlling design is `research/plan-numerical-spatial-track.md` NA-30, read at the assigned range beginning at line 1046 through its proof closure. `research/plan-spec.json` names that repaired spatial plan as the scaffold for this page, so it governs the scope and proof route. The older NA-30 section in `research/plan-numerical-analysis-track.md` lines 426–439 supplies the original first/second Strang outline and its quadrature warnings. It agrees on page identity and the basic theorem pair; the repaired spatial section adds the lifted-geometry/Jacobian argument, separate conforming and nonconforming settings, the common comparison space and bounded-extension condition, explicit defect terms, and the finite-element/quadrature conditions. There is no conflict in the page IDs, order, category, or declared page requirements. The spatial plan controls where the shorter analysis summary omits those repaired scope conditions.

The authored claims preserve the plan's warnings: discrete coercivity is a separate premise of the first Strang estimate; the second estimate requires a bounded extension to the comparison space; load/source oscillation remains an explicit defect; a geometry lift alone gives no convergence rate; and polynomial exactness alone is not used to infer mesh-uniform stability.

## Inventory, dependencies, and levels

The 12 A-page items and 3 B-page examples were entered in `batch-89.pages.json` before carrier authoring. Direct carrier dependencies match the manifest. Current dependency levels were recomputed over the run's batch manifests: 15/15 labels match, with no cycles or missing direct dependencies. The focused dependency graph checks also pass.

| Item | Level | Direct in-run item suppliers |
|---|---:|---|
| `def-variational-crime-error-framework` | 0 | none |
| `lem-one-dimensional-p1-interpolation-error` | 0 | none |
| `lem-one-dimensional-zero-boundary-poincare` | 0 | none |
| `def-geometry-lift-and-tensor-discrepancy` | 1 | `def-variational-crime-error-framework` |
| `lem-discrete-form-perturbation-preserves-coercivity` | 1 | `def-variational-crime-error-framework` |
| `thm-first-strang-lemma-for-conforming-perturbed-galerkin` | 1 | `def-variational-crime-error-framework` |
| `thm-second-strang-lemma-for-nonconforming-galerkin` | 1 | `def-variational-crime-error-framework` |
| `lem-geometry-tensor-gap-bounds-cellwise-form-defect` | 2 | `def-geometry-lift-and-tensor-discrepancy`, `lem-discrete-form-perturbation-preserves-coercivity` |
| `lem-midpoint-quadrature-defect-for-p1-stiffness` | 2 | `def-variational-crime-error-framework`; batches 20 suppliers at level 1 |
| `cor-midpoint-quadrature-strang-error-for-p1` | 3 | `def-variational-crime-error-framework`, first Strang, interpolation/Poincare helpers, midpoint-defect lemma |
| `cor-perturbed-conforming-galerkin-bound-from-cea` | 3 | `def-variational-crime-error-framework`; batch 38 symmetric Galerkin supplier at level 2 |
| `cor-shape-regular-fe-strang-error-bound` | 6 | `def-variational-crime-error-framework`, first Strang; batch 24 interpolation theorem at level 5 |
| `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity` | 2 | framework, first Strang; batch 20 midpoint rule |
| `ex-nonconforming-residual-breaks-galerkin-orthogonality` | 2 | framework, second Strang; batch 38 Céa theorem |
| `ex-two-node-gauss-polynomial-exactness-and-x4-error` | 8 | batch 82 Gaussian rule/exactness suppliers through level 7 |

The assignment's scheduling input is `a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979` and declares batches 20, 24, 38, and 82. An unused direct dependency on batch 4's cardinal-polynomial definition was removed from the Gaussian example: the two cardinal polynomials are written and computed explicitly from the nodes. The current batch 89 item edges use only the four declared supplier batches.

The stored run-wide `batch-dependency-levels.json` still reports batch 89 requiring batches 4, 20, 24, 38, and 82 with stored input hash `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. It predates the removal of the batch 4 item edge and does not match the assigned scheduling input. The owner-side `batch-dependency-levels.mjs check` cannot recompute the shared artifact: it stops on a duplicate `pipeline_run` YAML key at `items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md:25–26`. That unrelated item and the shared dependency artifact were left untouched. The assigned current item levels were independently recomputed from the run manifests and all 15 match.

## Mathematical interfaces and axiom use

The exact/discrete framework defines the domains of the two error estimates and their residuals. The conforming theorem is proved for bounded coercive forms and a bounded load, with Countable Choice used through Lax–Milgram and finite-dimensional closure. The nonconforming theorem uses the norm on (V+V_h), a bounded extension of the discrete form, and the exact-solution residual. Its proof does not assert that every penalty or DG form has such an extension.

The geometry definition gives the Jacobian-weighted tensor (J_hD\Phi_h^{-1}(A\circ\Phi_h)D\Phi_h^{-T}). Its local estimate proves the change-of-variables identity for real (C^1) physical functions, bounds the cellwise tensor gap, and states the mesh rate separately. The stability clause is explicitly restricted to a real Hilbert trial space whose norm is the gradient norm, with (L>0), a nonempty finite cell partition, and the quantitative smallness condition.

The one-dimensional interpolation and Poincare helper proofs are supplied locally. The midpoint P1 corollary derives discrete coercivity directly from (A(m_K)\ge\alpha) and retains δF. The separate P2 example uses (V=V_h=\operatorname{span}\{x(1-x)\}) with coefficient norm — its exact stiffness is (1/3), its midpoint stiffness is 0, and its exact form is coercive in the stated Hilbert norm. The two-cell broken example verifies (X_h=L^2(0,1)) and computes residual (-1/4) on a test of norm \(\sqrt2\), giving \(\delta_h^{\mathrm{nc}}\ge1/(4\sqrt2)\). The Gaussian example verifies the moment-data hypotheses, nodes \(\pm1/\sqrt3\), weights 1, exactness through degree 3, and absolute (x^4) error (8/45).

The shape-regular FE corollary keeps bounded reference nodal functionals as an explicit hypothesis. The separate batch 24 point-evaluation threshold theorem was inspected; its statement assumes the full Axiom of Choice. That stronger branch is not imported here, so the FE corollary does not claim to derive bounded nodal evaluation from \(\ell>d/p\) under Countable Choice alone. The CC-only branches remain explicit for Lax–Milgram, the one-dimensional (H^1_0) convention, and change of variables. An AC-bearing weak Dirichlet Poisson theorem was inspected and not used; the broken example verifies its exact solution in a derivative-field (L^2) Hilbert space using only the listed Countable-Choice suppliers.

## Cross-batch body checks and unresolved supplier readiness

The actual supplier statements and proofs were inspected for batches 20, 24, 38, and 82. This records interface verification only; it is not supplier approval. Four current supplier Step 1 records are stale, and they affect five consumers:

| Supplier | Current record | Affected items and required interface |
|---|---|---|
| `alg-composite-midpoint-rule` (20) | Stored `ready`, `closed:false`, `owner:true` | `lem-midpoint-quadrature-defect-for-p1-stiffness`, `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity`; one-panel midpoint value times cell width. |
| `thm-composite-midpoint-error-bound` (20) | Stored `ready`, `closed:false`, `owner:true` | `lem-midpoint-quadrature-defect-for-p1-stiffness`; C2 one-panel error bound (h_K^3\|g_K''\|_\infty/24). |
| `thm-local-finite-element-interpolation-estimates` (24) | Stored `ready`, `closed:false`, `owner:false` | `cor-shape-regular-fe-strang-error-bound`; P1, (p=2,\ell=r=2,m=1), (d=2,3), shape-regular affine cell bound. |
| `cor-symmetric-galerkin-best-approximation-in-energy-norm` (38) | Stored `ready`, `closed:false`, `owner:true` | `cor-perturbed-conforming-galerkin-bound-from-cea`; Hermitian exact Galerkin best-approximation baseline. |

The midpoint Strang corollary is also escalated because it depends on the local midpoint-defect lemma, and the P2 example is escalated because its one-panel rule supplier is owner-held. All bodies and complete proofs were available and inspected. The affected items retain their full conditional statements and proofs; their Step 1 records name the exact unresolved supplier readiness checks. No owner-held supplier record was changed.

## Source reading and dispositions

The two primary Strang treatments are Guermond, complete Chapter 27, and Schöberl, Chapter 25; their relevant proofs and caveats were read in full. Four additional full-text treatments support the local interpolation and Poincare helpers: Guermond Chapter 11, Schöberl Chapter 24, Laugesen §3.10, and Hunter §4.4. URLs, locators, harvested headings, dispositions, retrieval histories, and fetch stamps are in `batch-89.source-coverage.json` and `batch-89.coverage.json`. `source-fetch-check --stamp` verified all 8 page-source records (6 unique texts); the final check passes 8/8 with zero documented drops. No retrieval failed, so no `source_resolution` recovery record was needed. The two-page coverage checklist accounts for 30 harvested results with no omissions or warnings.

## Final scoped checks and readiness

- `author-check.mts numerical-optimization-dynamics-2026-10-16 89`: pass; 13 proof prechecks, rendercheck over 15 items and 2 pages, content policy over 15 items, and strict proof contracts over all 13 proof-bearing items.
- `proof-layout.mjs` on all 15 changed item files: 15 items, 49 steps, 0 defects.
- `manifest-deps.mjs` on batch 89: 15 items, 0 missing dependency arrays, 0 errors.
- The batch 89 scoped DFS passes all 15 labels with no cycles or missing direct dependencies. Run-wide `item-dependency-levels.mjs check` currently exits 1 on the unrelated item `thm-parabolic-control-adjoint-gradient-extension` (declared level 4, computed 6); no batch 89 item is reported and the unrelated item was left untouched.
- Focused `depcheck`, `fwdcheck`, and `extcheck`: each passes for this batch and its prerequisite closure; there are no dependency/forward cycles, open forward references, or active unproved dependencies.
- `coverage-checklist` and `source-fetch-check`: pass, 30 harvested results and 8/8 source records verified.
- `batch-dependency-levels.mjs check`: blocked before graph comparison by the unrelated duplicate YAML key at `items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md:25–26`. The shared graph refresh remains owner work.

The final Step 1 records are 10 `ready` and 5 `escalated`, all with `owner:false`. Escalated items are `lem-midpoint-quadrature-defect-for-p1-stiffness`, `cor-midpoint-quadrature-strang-error-for-p1`, `cor-perturbed-conforming-galerkin-bound-from-cea`, `cor-shape-regular-fe-strang-error-bound`, and `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity`. The escalation reason is limited to stale current-readiness evidence for the exact suppliers in the table. These completion records are authoring evidence and do not constitute independent approval. The run engine and published content were left unchanged.
