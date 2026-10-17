# Batch 39 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`; role `beta`; assigned page pair `numerical-optimization-globalization-and-inexact-certificates` (A) and `numerical-optimization-globalization-and-inexact-certificates-examples` (B). These are draft carriers only. No published item, owner verdict, shared plan, engine state, or other pair's carrier was edited.

## Controlling design and conflicts

The owner's `OPT0` authoring direction controls over stale task/design prose. The controlling section is `research/plan-numerical-optimization-track.md` around lines 489 and 503, read together with the `contract-opt0` entry in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`. It repairs the earlier `NA43` wording and preserves the scalar-objective globalization scope, exact-search attainment proof, Armijo constants, damped-Newton decrement-stop boundary, and separately verified residual/discrepancy certificate. The assignment's pair IDs, order 2362, category, and page-level `requires` agree with `research/plan-spec.json`; no plan-spec conflict was found. The page-level prerequisites are navigation/scheduling context unless an item has a corresponding logical `deps` edge.

The exact line-search algorithm is an ideal selector. Its `justified_by` theorem proves the ray minimizer exists and is unique; the theorem uses the definition only after proving those properties. The proof does not assume the selector is well-defined to prove its well-definedness.

## Inventory, logical dependencies, and levels

The scaffold inventory was written before the item carriers. Levels use only in-run item suppliers; dependencies outside this batch remain at their declared supplier interfaces. The batch 39 graph has page-level prerequisites batches 3 and 12; batch 12 itself has batches 3 and 4 as prerequisites, giving batch 39 level 2.

| Item | Kind | Level | In-run suppliers |
|---|---|---:|---|
| `alg-exact-gradient-line-search-step` | algorithm | 0 | — |
| `lem-hessian-lower-bound-strong-convexity-gradient-gap` | lemma | 0 | — |
| `thm-exact-line-search-gradient-descent-global-contraction` | theorem | 1 | `alg-exact-gradient-line-search-step`, `lem-hessian-lower-bound-strong-convexity-gradient-gap` |
| `thm-armijo-gradient-descent-global-linear-rate` | theorem | 1 | `lem-hessian-lower-bound-strong-convexity-gradient-gap` |
| `thm-damped-newton-global-phase-and-local-quadratic-rate` | theorem | 1 | `lem-hessian-lower-bound-strong-convexity-gradient-gap` |
| `thm-inexact-gradient-residual-distance-certificate` | theorem | 1 | `lem-hessian-lower-bound-strong-convexity-gradient-gap` |
| `ex-global-exact-line-search-on-an-anisotropic-quadratic` | example | 2 | exact-search theorem, Armijo theorem |
| `ex-damped-newton-halves-step-before-local-phase` | example | 2 | damped-Newton global-phase theorem |
| `ex-small-gradient-can-hide-error-at-ill-conditioned-minimizer` | example | 2 | residual-distance certificate |
| `ex-approximate-gradient-residual-distance-certificate` | example | 2 | residual-distance certificate |
| `ex-inner-quadrature-error-in-gradient-certificate` | example | 2 | residual-distance certificate |

The full direct dependency arrays are in the carriers and match `research/numerical-optimization-dynamics-2026-10-16-batch-39.pages.json`. The pair remains well under the 100-item page cap. No cycle was found. No new axiom is used; the exact-search attainment proof uses compactness and the extreme-value theorem, and its closed-preimage implication is choice-free. The Newton theorem keeps the positive decrement test before line search and asserts no post-stop update. The residual theorem requires independent bounds on both the computed residual and its discrepancy from the true gradient.

## Cross-batch interfaces

`research/numerical-optimization-dynamics-2026-10-16-batch-39.cross-batch-dependencies.json` records the inspected page edges. Batch 3's vector-root Newton and residual-merit methods do not supply the scalar-objective claims here; the claims use the canonical scalar-objective `alg-damped-newton` and local Newton theorem. Batch 12 is relevant only when a computed derivative is instantiated by a finite-difference approximation. These examples instead state a gradient discrepancy directly and differentiate the polynomial integral exactly before evaluating the quadrature discrepancy. No batch 3 or 12 item is a direct logical supplier of a batch 39 claim. The existing-library requirements are also verified at item level: `thm-hessian-characterises-convexity` comes from `convex-and-semicontinuous-functions-on-rn`; `alg-gradient-descent`, `alg-damped-newton`, `lem-armijo-backtracking-terminates-for-strict-descent-directions`, and `thm-newton-local-quadratic-convergence-under-lipschitz-hessian` come from the published `numerical-optimization-for-statistical-computation` page and are direct carrier dependencies. The fixed-step gradient-rate item remains a separate comparison and is not used as a proof premise. The page's latent-density and KL targets are not part of these claims.

## Sources and harvested-result disposition

`research/numerical-optimization-dynamics-2026-10-16-batch-39.coverage.json` records two independent full-text treatments, locators, supported items, every harvested result's disposition, retrieval history, and searches.

- Stephen Boyd and Lieven Vandenberghe, *Convex Optimization*, complete Stanford-hosted book PDF: Chapter 9 §§9.2, 9.3.1, and 9.5.1–9.5.3. It supports exact and Armijo search, strong-convexity gradient gaps, damped Newton, and the decrement boundary. The browser PDF viewer failed once; the complete PDF was then fetched directly and the relevant full sections were inspected. The successful recovery is recorded; no source remains unresolved or dropped.
- Philip E. Gill and Margaret H. Wright, *Math 171B Numerical Optimization Class Notes*, complete 174-page PDF: Chapter 3 §§3.4.3–3.4.5, 3.5.1, and 3.5.3–3.5.4. The complete exact-search, backtracking, modified-Newton, and eventual unit-step arguments were read. Its differing global theorem hypotheses are recorded as inline context rather than used to overstate the local claims.

The local proof contracts quote current supplier `Statement` or `Definition` sections exactly; the local Newton example proves its displayed radius directly rather than citing an unpublished proof excerpt. There is no registered numerical-optimization `finite_smoke` check. The examples carry their finite arithmetic verification in numbered proof steps and contracts; no unsupported checker name or synthetic pass was added.

## Checks and blockers

- `author-check.mts numerical-optimization-dynamics-2026-10-16 39`: pass. Its saved report records precheck, rendercheck, content policy, and strict proof-contract checks.
- Final `precheck`: 10 proof-bearing carriers checked, 10 pass, 0 repair/fail. Canonical phase/step repairs were adopted for the exact-search theorem and the damped-Newton example, then rechecked.
- `proof-layout.mjs` on the 11 changed item carriers: 11 items, 39 numbered steps, 0 defects.
- `proof-contract.mjs --strict`: 10 proof-bearing items, 0 errors and 0 warnings. `boundary-audit.mjs`: 80 rows, 0 template clusters, 0 contradicted candidates.
- `rendercheck.mjs` on 11 item carriers and both pages: 13 files, 0 errors. `content-policy.mjs` on the batch manifest: 11 items, 0 errors/warnings. Focused `depcheck.mjs` on the batch items and their closure: 0 errors/warnings (867 closure items; 283 pages checked).
- `coverage-checklist.mjs`: 1 page, 13 harvested results, 0 errors/warnings. `source-fetch-check.mjs --check`: 2/2 sources fetch-verified and resolved, 0 documented drops.
- Batch 39's scoped item-level DAG calculation: 11 items, 0 dependency-level discrepancies; levels are 0/1/2 as listed above. The scoped batch graph computes level 2 from batches 3 and 12.
- Eleven Step 1 records were written with `ready` decisions, explicit direct `deps` plus `justified_by` where applicable, and item-specific evidence. A focused hash check confirms all eleven records are closed. These records are not independent review or owner approval.
- Run-wide `item-dependency-levels.mjs check` is blocked by numerous other run pages with empty scaffold inventories and unrelated carrier level mismatches. Run-wide `proof-contract-coverage.mjs` is likewise blocked by the empty inventory for `direct-transcription-and-numerical-ode-optimal-control`. These checks do not identify a batch 39 item defect.
- Run-wide `batch-dependency-levels.mjs check` fails while parsing unrelated malformed YAML in existing contact-dynamics carriers (the first inspected example is `items/ex-one-dimensional-impact-restitution-boundaries.md`; the unquoted colon in the Stewart book title causes the YAML error). Those files are outside this assignment and were not edited. The task's scheduling input hash is `e8550439fef5be6a02b177bd3d34853719a8096a1856fe08ac9827e78543ee0c`; the currently recorded run artifact hash is `13d6c7995bc212bf12dc286ef626cf95193bd830cda1a18d29141f76c9defad4`. The shared artifact was not rewritten. A prior disk-derived status read showed the run held in `1-scaffold` for owner repair/recertification with no active workers; a refresh attempt for this handoff did not return within 60 seconds and was stopped. No run-state files were changed.

The readiness records are author completion records only and are not independent approval.
