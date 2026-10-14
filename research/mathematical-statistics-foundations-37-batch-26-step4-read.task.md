# Step 4 batch reviewer — batch **26**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **26**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["26"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 26 | `nonparametric-regression-and-smoothing` | A | nonparametric-density-estimation-and-kernels, losses-risk-and-decision-rules |
| 26 | `nonparametric-regression-and-smoothing-examples` | B | nonparametric-regression-and-smoothing |

## Your content, in full

### `nonparametric-regression-and-smoothing` — Regression Estimation

- `def-regression-target-version` · definition — Regression target and chosen version
- `lem-local-linear-normalized-moment-matrix-converges-in-probability` · lemma — Local-linear moment matrix converges to a positive-definite limit
- `def-nadaraya-watson-estimator` · definition — Nadaraya–Watson estimator
- `def-pointwise-regression-risk` · definition — Pointwise squared-error risk for regression
- `def-local-polynomial-estimator` · definition — Local-polynomial estimator
- `thm-pointwise-risk-bias-variance-decomposition` · theorem — Pointwise risk is variance plus squared bias
- `thm-nadaraya-watson-population-bias` · theorem — Pointwise population bias of the Nadaraya–Watson smoother
- `thm-local-linear-population-bias` · theorem — Pointwise population bias of local-linear regression
- `thm-local-linear-conditional-bias` · theorem — Conditional-on-design bias of the empirical local-linear estimator
- `thm-kernel-regression-conditional-asymptotic-variance` · theorem — Conditional asymptotic variance of Nadaraya–Watson and local-linear estimators
- `thm-nadaraya-watson-finite-sample-bias` · theorem — Finite-sample mean bias of the Nadaraya–Watson estimator

### `nonparametric-regression-and-smoothing-examples` — Regression Estimation — Examples

- `ex-local-linear-reproduces-affine-regression` · example — Local-linear regression reproduces affine responses
- `cex-local-linear-finite-sample-expectation-undefined` · counterexample — Local-linear estimator can lack a finite-sample expectation
- `cex-nadaraya-watson-design-gradient-and-boundary-bias` · counterexample — Nadaraya–Watson bias from design gradients and boundaries

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonparametric-regression-and-smoothing` requires `nonparametric-density-estimation-and-kernels`
- `nonparametric-regression-and-smoothing` requires `losses-risk-and-decision-rules`
- `splines-series-and-approximation-rates` requires `nonparametric-regression-and-smoothing`
---

# Step 4 Alpha batch reviewer — read-only digest, `mathematical-statistics-foundations-37`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
