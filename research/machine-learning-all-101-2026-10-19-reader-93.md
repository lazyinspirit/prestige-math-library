# Step 3a reader report — batch 93

## Scope and live run

Reviewed batch `93` for run `machine-learning-all-101-2026-10-19`, independently of the author decisions recorded in the batch notes and contracts. The live autopilot status showed the run still in Step 3a, with no worker in flight; `3a-collect` had an existing blocker because `collect-57` failed three times. That blocker is outside batch 93.

The assigned current items were read in dependency order. I also read the current in-run batch-38 shared-parameter theorem used by the remark. Its raw SHA-256 at review was `69f384b84c84cae715c0201e184ad760c9c10cb545028f2b4fe69a51ab55c58b`.

## Opened inventory

Assigned pages:

- `bilevel-learning-hypergradients-and-implicit-layers`
- `bilevel-learning-hypergradients-and-implicit-layers-examples`

Assigned items, read supplier-first:

- `def-smooth-bilevel-learning-problem`
- `alg-adjoint-hypergradient-with-residual`
- `thm-smooth-bilevel-hypergradient-formula`
- `thm-adjoint-hypergradient-linear-solve-error`
- `rem-truncated-training-and-exact-hypergradients`
- `ex-ridge-hyperparameter-hypergradient`
- `ex-singular-hessian-nonisolated-inner-minimum`
- `ex-exact-state-wrong-truncated-hypergradient`

In-run batch-38 context:

- Page `automatic-differentiation-and-backpropagation`
- `alg-backpropagation-through-shared-parameter-recurrence`
- `thm-shared-parameter-backpropagation-gradient-formula`

Published supplier items and proof prerequisites opened to check the assigned claims:

- `def-c-one-map-and-local-inverse`; `def-finite-straight-line-computational-program`; `def-ck-and-multi-index-notation-in-several-variables`; `def-total-derivative-in-euclidean-space`; `def-directional-and-partial-derivatives`; `def-jacobian-matrix-and-gradient`; `def-euclidean-linear-map`; `def-invertible-euclidean-linear-map`; `def-hessian-and-euclidean-critical-point`.
- `alg-reverse-mode-automatic-differentiation`; `alg-forward-mode-automatic-differentiation`; `alg-forward-over-reverse-hessian-vector-product`.
- `thm-reverse-mode-computes-gradient`; `thm-forward-mode-computes-directional-derivative`; `thm-forward-over-reverse-computes-hessian-vector-product`; `thm-total-derivative-computes-directional-and-partial-derivatives`; `thm-chain-rule-for-total-derivatives`; `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`; `thm-algebra-of-total-derivatives`; `thm-euclidean-implicit-function-theorem`; `thm-euclidean-inverse-function-theorem`; `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`; `thm-clairaut-schwarz-mixed-partials`; `thm-mean-value-inequality-for-total-derivatives`; `thm-mean-value-inequality`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-cauchy-schwarz-finite`; `cor-hessian-is-symmetric`; `lem-finite-straight-line-program-defines-c1-map`; `lem-finite-straight-line-program-defines-c2-map`; `lem-euclidean-linear-maps-have-matrices-and-are-bounded`; `lem-implicit-sensitivity-error-controlled-by-residual`; `thm-finite-iteration-sensitivity-bound-and-residual-limitation`.

Also consulted the current batch page manifest, dependency-input and cross-batch dependency records, proof contracts, author notes, and coverage record as evidence. No separate rendered evidence bundle was present in the scoped run files.

## Edit and validation

In `thm-adjoint-hypergradient-linear-solve-error`, proof step 2.1 previously bounded the sensitivity difference in terms of state distance using a coefficient that the preceding step had only established as a residual bound. I rewrote the estimate to use the cited sensitivity-residual bound from step 1.1 for the middle term, the stated Lipschitz bounds and step 1.3 for the other terms, and leave the state-residual substitution to step 3.1. This proves the displayed coefficient under the stated hypotheses without an unstated local sensitivity estimate.

Updated the `state-formula-bound` derivation in `machine-learning-all-101-2026-10-19-batch-93.proof-contracts.json` to match the repaired proof. The item had no `verification.judge` record to remove.

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-adjoint-hypergradient-linear-solve-error.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-adjoint-hypergradient-linear-solve-error.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-adjoint-hypergradient-linear-solve-error.md` — 1 item, 9 steps, 0 defects.

No other assigned item or page required repair. The adjoint computation diagram has the stated vector dimensions and data flow: it sends `d` to the solve, the returned vector through `B^T`, adds the direct term `c`, and independently recomputes `d-H^T v`; the dashed residual arrows and solid estimate arrows match the text. The proofs remain independent of the diagram.

## Uneditable published-dependency findings

The following published suppliers have wikilinks inside their complete `Definition` or `Statement` sections. The statement-first policy requires moving those links to the immediately following references section, one source line and paragraph per link. These are formatting defects; no mathematical inaccuracy is alleged. They are outside this reader's write scope.

| Subject | Assigned consumer | Exact location |
|---|---|---|
| `def-ck-and-multi-index-notation-in-several-variables` | `alg-adjoint-hypergradient-with-residual` | `Definition`, the multi-index paragraph and the paragraph beginning “For $k\in\mathbb N$…” contain multiple inline wikilinks. |
| `alg-reverse-mode-automatic-differentiation` | `alg-adjoint-hypergradient-with-residual` | `Definition`, opening sentence links to `def-finite-straight-line-computational-program`. |
| `alg-forward-mode-automatic-differentiation` | `alg-adjoint-hypergradient-with-residual` | `Definition`, opening sentence links to `def-finite-straight-line-computational-program`. |
| `alg-forward-over-reverse-hessian-vector-product` | `alg-adjoint-hypergradient-with-residual` | `Definition`, opening operational sentence links to `alg-forward-mode-automatic-differentiation`. |
| `def-total-derivative-in-euclidean-space` | `def-smooth-bilevel-learning-problem` | `Definition`, first and second paragraphs embed links to the Euclidean linear-map and norm definitions. |
| `def-euclidean-linear-map` | `def-smooth-bilevel-learning-problem` | `Definition`, final sentences link to `def-euclidean-inner-product` and `def-linear-map`. |
| `def-directional-and-partial-derivatives` | `alg-adjoint-hypergradient-with-residual` | `Definition`, the basis-vector and zero-codomain paragraphs embed wikilinks. |
| `def-jacobian-matrix-and-gradient` | `def-smooth-bilevel-learning-problem` | `Definition`, the gradient-coordinate sentence and final sentence embed wikilinks. |
| `def-invertible-euclidean-linear-map` | `thm-smooth-bilevel-hypergradient-formula` | `Definition`, opening paragraph embeds a link to `def-euclidean-linear-map`. |
| `def-hessian-and-euclidean-critical-point` | `alg-adjoint-hypergradient-with-residual` | `Definition`, opening sentence embeds links to the matrix-space, $C^k$, and Jacobian definitions. |
| `thm-cauchy-schwarz-and-the-euclidean-norm` | `thm-adjoint-hypergradient-linear-solve-error` | `Statement`, the opening hypothesis and clauses 1, 2, and 4 contain inline wikilinks; the explanatory “Clause 1 is a citation” paragraph also contains links. |
| `thm-cauchy-schwarz-finite` | `thm-adjoint-hypergradient-linear-solve-error` | `Statement`, the opening paragraph and the two explanatory paragraphs contain inline wikilinks. |
| `thm-mean-value-inequality` | `thm-adjoint-hypergradient-linear-solve-error` | `Statement`, the first paragraph's parenthetical and following explanatory paragraphs contain inline wikilinks. |

## Page verdicts

- `bilevel-learning-hypergradients-and-implicit-layers`: pass. Frontmatter inventory matches the manifest, all five assigned A-page items are listed once, required pages are retained, `page_layout: compact-v1` is present, and the Markdown body is empty.
- `bilevel-learning-hypergradients-and-implicit-layers-examples`: pass. Frontmatter inventory matches the manifest, all three examples are listed once, the companion A page is required, `page_layout: compact-v1` is present, and the Markdown body is empty.

## Blockers and coverage limits

There is no unresolved mathematical blocker in batch 93. The live run has the separate `3a-collect` blocker for batch 57 noted above. Review was based on current authored carriers and local supplier proofs; no separate rendered evidence bundle was available. I did not need an external source search to resolve any mathematical uncertainty.
