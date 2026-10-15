# Step 4 batch reviewer — batch **5**, run `statistical-models-experiments-62`

You are the only reviewer for batch **5**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["5"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 5 | `multivariate-normal-wishart-hotelling` | A | scientific-statistical-model-contracts, exact-gaussian-linear-regression-inference, dominated-experiments-likelihood-and-sufficiency, finite-sample-tests-neyman-pearson-and-valid-p-values, confidence-sets-pivots-and-test-inversion, gaussian-orthogonal-decomposition-and-quadratic-forms, likelihood-asymptotics-wald-score-and-likelihood-ratio, central-limit-theorems, probability-spaces-random-variables-and-expectation, independence-borel-cantelli-and-zero-one-laws, inner-product-spaces-and-orthogonality |
| 5 | `multivariate-normal-wishart-hotelling-examples` | B | multivariate-normal-wishart-hotelling |

## Your content, in full

### `multivariate-normal-wishart-hotelling` — Multivariate normal, Wishart, and Hotelling $T^2$

- `def-wishart-law` · definition — Wishart law by Gaussian outer products
- `lem-standard-normal-matrix-has-full-row-rank-almost-surely` · lemma — A standard-normal matrix with at least as many columns as rows has full row rank almost surely
- `def-multivariate-normal-sample-model-and-statistics` · definition — The iid multivariate-normal sample and covariance conventions
- `lem-standard-wishart-independent-normal-quadratic-form-is-f` · lemma — The standard Wishart inverse quadratic form has an exact Fisher law
- `thm-multivariate-normal-sample-mean-scatter-independence-and-wishart` · theorem — The Gaussian sample mean is independent of the Wishart sample scatter
- `thm-covariance-likelihood-ratio-asymptotic-chi-square` · theorem — The Gaussian covariance likelihood ratio has its fixed-dimensional Wilks limit
- `thm-hotelling-t2-exact-f-distribution` · theorem — The one-sample Hotelling statistic has an exact F law
- `thm-wishart-trace-statistic-is-chi-square` · theorem — The exact covariance trace statistic has p(n−1) chi-square degrees of freedom
- `cor-exact-hotelling-one-sample-test` · corollary — The one-sample Hotelling F test has exact size alpha

### `multivariate-normal-wishart-hotelling-examples` — Multivariate normal, Wishart, and Hotelling $T^2$ — Examples

- `ex-sample-covariance-singular-when-sample-size-not-exceeding-dimension` · example — The unbiased sample covariance is singular when 2 ≤ n ≤ p
- `ex-exact-wishart-trace-and-asymptotic-covariance-lrt-differ` · example — The exact Wishart trace and covariance likelihood ratio are different statistics
- `ex-hotelling-t2-two-dimensional-exact-test` · example — A two-dimensional Hotelling statistic and its exact F cutoff

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `multivariate-normal-wishart-hotelling` requires `scientific-statistical-model-contracts`
- `multivariate-normal-wishart-hotelling` requires `exact-gaussian-linear-regression-inference`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
