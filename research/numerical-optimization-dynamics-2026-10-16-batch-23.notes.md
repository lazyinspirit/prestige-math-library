# Batch 23 authoring notes — elliptic finite-difference methods

Date: 2026-10-16. Scope: only `elliptic-finite-difference-methods` and its examples page, plus batch-23 evidence.

## Controlling design and conflicts

- The controlling section is `research/plan-numerical-spatial-track.md`, NA-23, lines 130–154 and its incorporated NA-23 contract appendix. The current `plan-spec.json` NA-23 records this file as its `scaffold`, and the owner-authoring direction names the spatial category plan as controlling. The plan supplies the same-frontier NA-19 page edge, exact published item interfaces, and explicit local obligations for the grid inner product, boundary terms, discrete Poincare/coercivity, inverse bound, and variable-flux Taylor remainder.
- `research/plan-numerical-analysis-track.md` line 328 is the older duplicate NA-23 design. Its core scope, fourth-derivative consistency, discrete stability, full-residual error transfer, and examples agree with the controlling spatial plan. It is not controlling because the owner direction and `plan-spec.json` route this pair to the repaired spatial plan.
- The `plan-spec.json` row agrees on order 2330, category, A/B IDs, and the three page requirements. Its short description is an abridged scope statement and leaves `items: []` for author inventory; this is not a mathematical conflict. The repaired spatial plan is more specific about supplier ownership and local proof closure. All examples from the older design and the repaired plan were retained: exact quadratic, variable-flux versus expanded stencil, first-order Neumann boundary closure, and a mesh-uniform inverse matrix norm.

## Inventory and dependency levels

The scaffold inventory was fixed before writing carriers. In-run item edges and levels are:

| Item | Direct in-run dependencies | Level |
|---|---|---:|
| `def-rectangular-grid-and-dirichlet-flux-stencil` | none | 0 |
| `lem-discrete-summation-by-parts-poincare-and-inverse-bound` | definition above | 1 |
| `lem-variable-coefficient-flux-stencil-second-order-consistency` | definition above | 1 |
| `thm-elliptic-finite-difference-l2-error-on-rectangles` | definition and both lemmas | 2 |
| `ex-first-order-neumann-closure-causes-first-order-error` | none | 0 |
| `ex-dirichlet-laplacian-has-uniform-infinity-inverse-bound` | none | 0 |
| `ex-variable-coefficient-flux-and-expanded-stencils` | definition | 1 |
| `ex-five-point-laplacian-is-exact-on-quadratics` | definition and discrete summation-by-parts lemma | 2 |

The pair's scheduling input is `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`; batch 23 is level 1 with prerequisite batch 5. The item-level labels above use only actual in-run item dependencies; published suppliers remain context and do not raise item levels. Batch 23 has four A items and four B examples, below the 100-item page cap.

## Supplier checks and exact limits

- `thm-poincare-inequality-for-w-one-p-zero` is published and its full statement/proof were inspected. It assumes Countable Choice, an open domain bounded in one direction, and a zero-boundary Sobolev closure. Its proof uses the continuous FTC, Holder, Tonelli, and closure limit. It supplies no discrete grid inequality; the item proves its own finite-grid telescope and uses no choice axiom.
- `thm-lax-milgram` is published and its full statement/proof were inspected. It assumes Countable Choice, a Hilbert space, a bounded coercive sesquilinear form, and a bounded datum; it supplies continuous weak solvability and the coercivity estimate. It is not used as a discrete matrix theorem.
- `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` is published and its full statement/proof were inspected. It assumes AC and Countable Choice, an open nonempty domain bounded in one direction, and an H^-1 datum; it concerns the constant-coefficient weak Poisson problem and does not supply C4 regularity or variable-coefficient finite-difference error. The present theorem is conditional on an explicitly C4 classical solution.
- Owner reconciliation after native batch-23 author drain: batch 5 now declares actual bodies including `def-common-space-linear-scheme-interface`, `thm-lax-equivalence-for-common-banach-space-schemes`, `def-finite-grid-common-space-lift`, and `lem-grid-stability-transfers-under-uniform-norm-comparison`. Their interfaces concern a time semigroup, finite-time powers, a common Banach norm and uniform grid reconstruction/restriction comparisons; the Lax theorem assumes DC. The NA-23 stationary theorem invokes none of these results. Its exact local weighted-grid inverse bound and complete residual estimate supply its proof. The declared page edge remains navigation/context; no page or item scope is removed.
- The owner checked the three actual local suppliers, the error theorem, and the inverse lemma's other actual consumer `ex-five-point-laplacian-is-exact-on-quadratics`. The inverse lemma proof step 1.1 now uses the already-defined horizontal flux symbols in its boundary term. Its Statement and all consumers are unchanged. Evidence and full preimages are preserved under `research/numerical-optimization-dynamics-2026-10-16-owner-elliptic-evidence/`; detailed interfaces are in `research/numerical-optimization-dynamics-2026-10-16-owner-elliptic-escalation.json`.

## Source reading and dispositions

`batch-23.coverage.json` records the exact locators, source-result dispositions, supported item IDs, source-fetch attempts and full-text stamps. Süli's §3.2 and §4.1(a) proof ranges and all pages of MIT OCW lectures 5 and 6 were inspected. The local PDF hashes begin with the fetched stamps: Süli `edab7ca043dba44a`, MIT lecture 5 `915abe7f2a680623`, and MIT lecture 6 `2c13b07d375cc8b8`. The source-fetch check returned 3/3 verified on the first attempt, with no retrieval failures or dropped sources.

Süli proves the constant-coefficient discrete summation-by-parts, Poincare, stability, C4 consistency, and error-transfer route. MIT lecture 5 develops Taylor stencils and shows the one-sided Neumann residual; MIT lecture 6 contrasts flux and expanded variable-conductivity operators and gives the residual/stability framework. The variable-coefficient face expansion, its explicit derivative constant, and every example verification are proved locally. No source URL is used as a substitute for a proof.

## Required checks and blockers

Final scoped outcomes after the last item edits:

- `node tools/tsx-run.mjs tools/precheck.mts <eight item paths> --json`: 8 files, 7 proof-bearing items checked, 0 failures; the definition is not applicable.
- `node tools/proof-layout.mjs <eight item paths>`: 8 items, 28 numbered steps, 0 defects.
- `node tools/rendercheck.mjs <eight item paths and two page paths> --json`: 10 files, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/numerical-optimization-dynamics-2026-10-16-batch-23.pages.json --json`: 8 scoped items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/numerical-optimization-dynamics-2026-10-16-batch-23-items.json --json`: focused checks for all 8 items and both pages, 0 errors, 0 warnings; dependency closure covered 8 items and 2 pages.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-23.proof-contracts.json --strict --json`: all 7 proof-bearing items covered, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-23.coverage.json`: 3/3 full-text sources fetch-verified; all succeeded on the first recorded attempt.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-23.coverage.json --json`: 1 A page and 10 harvested source results, 0 errors, 1 `coverage-low-yield` warning. The warning counts only 3 standalone `included` results; the other 7 are explicitly `inline` into local proofs, with no source result dropped or left undisposed.
- The scoped `dependencyLevels` computation on the batch-23 manifest passed with levels A: `0,1,1,2`; B: `0,0,1,2`.
- Historical author closeout recorded seven ready decisions and one escalation for then-absent NA-19 bodies. The bodies are now available and the owner has reconciled their interface as context for this stationary result. Readiness records remain untouched for root to update through its owner route.

Whole-run batch-level recomputation is blocked before its comparison step: `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` fails parsing [def-matching-affine-simplicial-meshes.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-matching-affine-simplicial-meshes.md:17), whose unquoted `locator` contains `pp. 83–88: reference maps`. This item is outside batch 23; it was not edited. The frozen scheduling input originally gives batch 23 level 1 with prerequisite batch 5. Do not rewrite the shared scheduling artifact from this batch; the owner must resolve the malformed unrelated carrier and refresh/verify the run-wide artifact.

The original absence-based NA-19 blocker is superseded by the owner body reconciliation above. The original author evidence, native result and exact preimages remain archived; this update grants no new gate or acceptance credit. Root owns the cross-batch metadata/readiness integration and current recertification.
