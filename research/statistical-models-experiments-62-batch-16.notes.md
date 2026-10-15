# Batch 16 authoring notes — Response surfaces and optimal design

Run `statistical-models-experiments-62`, beta / batch 16. The assigned A/B pages are `response-surfaces-and-optimal-design` (order 1948) and `response-surfaces-and-optimal-design-examples` (order 1949), both draft. The dispatched batch level is 4, with prerequisite batches 14 and 15; the task's scheduling input is `e30b5fb0846f99901227f66c3b959023af70584f5401bde09898c86d2ddbe743`.

## Controlling plan and interfaces

The owner direction selects the integrated SME track as the controlling design and treats the model dossiers as navigation and prior evidence, not source reading or proof acceptance. The SME-16 contract is carried over in full: local response-surface approximation; second-order stationary point and eigenvalue classification; CCD core/axial/center runs; approximate D/A/E/c criteria; D-equivalence theorem; the distinction between approximate and integer-run designs; and the warnings that model adequacy and physical response are not proved by polynomial algebra.

The SME prerequisite table says “None; D/A criteria are defined and proved within the design pair,” referring to no cross-category MSF prerequisite. The detailed SME-16 contract also requires SME-14/15, a published determinant differential, and a local proof of log-determinant concavity. `plan-spec.json` and the dispatched manifest additionally require the matrix-differentiation and spectral-theorem pages. These are compatible context requirements: the determinant differential supports the D-directional derivative, and the spectral theorem supports curvature classification and the concavity proof. All four assigned page requirements are retained.

## Inventory, dependencies, and levels

The current batch-16 manifest has six A items and two B examples, below the 100-item page cap. Items were authored supplier-first. `dependency_level` counts only suppliers in the current run manifests; published mathematics remains external context.

| Level | Item | In-run suppliers |
|---:|---|---|
| 0 | `def-local-response-surface-model` | none |
| 0 | `def-approximate-linear-model-design-and-optimality-criteria` | none |
| 0 | `lem-log-determinant-concavity-on-positive-definite-matrices` | none; its matrix-calculus and spectral suppliers are published |
| 2 | `def-central-composite-design` | `def-two-level-full-factorial-design` (batch 14, level 0), `def-regular-fractional-factorial-defining-relation-and-resolution` (batch 15, level 1) |
| 1 | `thm-second-order-response-surface-stationary-point-and-classification` | `def-local-response-surface-model` |
| 1 | `thm-d-optimality-equivalence-theorem` | `def-approximate-linear-model-design-and-optimality-criteria`, `lem-log-determinant-concavity-on-positive-definite-matrices` |
| 2 | `ex-saddle-in-second-order-response-surface` | local response-surface definition and stationary-point theorem |
| 2 | `ex-approximate-vs-exact-d-optimal-design` | approximate-design definition and D-equivalence theorem |

Batch 15's manifest and items were initially absent when construction began. A later disk read found its current draft A/B pages and complete supplier bodies. The regular-fraction definition states the independent generator equations, signed subgroup, and shortest-word resolution. Its justified-by theorem's row-reduction proof establishes the run count and exact signed-column criterion; the foldover theorem proves the residual parity rule. I inspected these actual bodies and their hypotheses. They remain drafts; no independent review or acceptance is claimed. The batch-16 central-composite item now uses the actual regular-fraction definition and has level 2, one above the batch-15 definition's current level 1. The foldover theorem is a page-level context item but is not a logical premise of any batch-16 claim.

Batch 14's current draft `def-two-level-full-factorial-design` supplies the exact full sign-run set used by the full-factorial CCD branch. Its statement and the complete sign-cancellation proof of `thm-full-two-level-factorial-contrast-orthogonality` were inspected. Their draft status is preserved; this is supplier-body verification, not approval.

## Actual published mathematical suppliers checked

- `thm-determinant-differential-and-jacobis-formula`: Jacobi's formula is stated only on the invertible locus; the proof uses it only for positive-definite matrices.
- `thm-derivative-of-matrix-inversion`, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, and `prop-differentials-of-trace-and-frobenius-linear-functionals`: the inverse, product, and trace derivatives used in the local concavity proof match the proof's matrix domains and directions.
- `def-trace-of-a-square-matrix`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, and `def-determinant-of-a-square-matrix`: the trace and determinant identities used to show positivity and compute the line derivatives were read.
- `prop-standard-coordinate-inner-products`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`: the real symmetric matrices in the classification and log-determinant arguments meet the self-adjoint hypotheses.

No choice axiom is used. The local proofs use finite sums, real finite-dimensional spectral decomposition, ordinary one-variable calculus, and algebra only.

## Source reading and dispositions

Two independent full-text treatments were read: Oehlert, Chapter 19 §§19.1–19.7, printed pp. 509–528 (PDF pp. 529–548), and Boyd–Vandenberghe, complete §3.1.5, PDF pp. 87–88 / printed pp. 73–74, and complete §7.5, PDF pp. 399–406 / printed pp. 385–392. Oehlert supplies the model-region caveat, second-order classification, and CCD construction. Boyd–Vandenberghe supplies the complete log-determinant concavity route and the relaxed-design, information-matrix, and D/A/E criteria context. The local proof contracts preserve the full determinant-differential and concavity arguments.

The author-hosted Oehlert PDF and Stanford-hosted Boyd–Vandenberghe PDF both passed `source-fetch-check --stamp`; the saved coverage file records the exact URLs, locators, harvested results, dispositions, fetch timestamps, byte counts, page counts, and hash prefixes. Full-text preflight GETs returned 4,273,179 bytes (Oehlert, 679 pages) and 6,881,335 bytes (Boyd–Vandenberghe, 714 pages). The browser PDF viewer timed out on the Stanford PDF once; I searched the official Stanford book page, then the direct full-text fetch and required stamp succeeded. No source was dropped and no `source_resolution` escalation is needed.

The plan's NIST/SEMATECH note is explicitly examples-only. The two B examples use locally stated models and complete computations rather than NIST observations, so no NIST result is harvested or used as proof support. The Oehlert and Boyd–Vandenberghe harvests and the out-of-scope dispositions are listed in the coverage file.

## Checks and readiness

The proof contracts contain step-by-step derivations, exact current supplier excerpts, all standard boundary worksheets, and a finite three-point integer-allocation enumeration. The saddle example also has a registered diagonal-matrix finite smoke check; that computation is only a witness check and does not replace its proof.

The scoped `item-dependency-levels` calculation on batches 14–16 checks 19 items with 0 errors and maximum level 4. A full run-wide check at the time of recomputation reported no batch-14/15/16 label errors; its unrelated findings were batch 47's two empty Kriging inventories and six stale item-level labels in batch 45's random-field items. A subsequent current `batch-dependency-levels check` is blocked by invalid YAML in `items/lem-translation-invariant-locally-finite-borel-measure-on-rd.md:4` (`\mathbb` is an invalid escape in its double-quoted title); the current `validate-plan --run` is also blocked by malformed JSON at line 244 of `research/statistical-models-experiments-62-batch-42.pages.json`. Both are outside this assignment and were left untouched. The pre-existing batch-16 page level remains 4 with suppliers 14 and 15; the new item-level dependencies stay within those supplier batches. The shared run-level dependency artifact and engine state are left to the owner.

Scoped authoring checks pass: strict proof contracts 8/8; coverage 2 pages / 19 harvested results / 0 errors; source fetch 4/4; manifest dependencies 8 items / 0 errors; provenance/content policy 8 items / 0 errors; focused depcheck, fwdcheck, extcheck, and batches 14–16 audit-manifest have 0 errors; precheck 5 proof-bearing items / 0 repairs; proof-layout 8 changed items / 22 steps / 0 defects; rendercheck 10 files / 0 errors; and the registered diagonal-matrix finite smoke passes 288 directions. The first source-fetch invocation used page IDs instead of the coverage-file path and returned `fetch-check-no-coverage`; the corrected `--coverage research/statistical-models-experiments-62-batch-16.coverage.json --stamp` command passed. The first focused item-check invocation used a newline list where the tool requires a JSON ID array; after correcting the temporary selector, depcheck/fwdcheck/extcheck all passed with 0 errors or warnings.

Step-1 readiness records could not be written. `node tools/step1-decisions.mjs record --run statistical-models-experiments-62 --item def-local-response-surface-model --decision ready --dependencies '[]' ...` fails before writing because `loadStep3` parses every run manifest and encounters malformed JSON in `research/statistical-models-experiments-62-batch-42.pages.json` at line 244, column 9 (position 12375): “Expected ',' or '}' after property value”. `step1-decisions.mjs check` fails on the same parse error, and the record command has no batch-scoped loading option. No batch-16 readiness files were created; all eight items therefore remain without records for the same run-wide blocker. I left batch 42 untouched and did not manufacture records outside the utility. Based on the completed local checks and inspected suppliers, the items are authoring-ready; the central-composite definition relies on current batch-14/15 draft suppliers whose bodies and hypotheses were inspected, without any independent acceptance claim. The run status observed during this work showed Step 1 held for owner repair in `research/statistical-models-experiments-62-step1-blockers.json`; this batch did not change that state.
