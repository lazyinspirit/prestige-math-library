# Step 4 batch reviewer — batch **107**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **107**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["107"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 107 | `global-sensitivity-anova-and-sobol-estimation` | A | conditional-expectation, randomized-quasi-monte-carlo-and-replicates, polynomial-chaos-stochastic-collocation-and-galerkin-uq |
| 107 | `global-sensitivity-anova-and-sobol-estimation-examples` | B | global-sensitivity-anova-and-sobol-estimation |

## Your content, in full

### `global-sensitivity-anova-and-sobol-estimation` — Global sensitivity anova and sobol estimation

- `def-dependent-input-shapley-effects` · definition — Shapley effects for dependent inputs
- `def-product-coordinate-projections` · definition — Product-coordinate averaging operators
- `lem-uniform-interval-poincare-inequality` · lemma — Sharp Poincare bound for the uniform law on an interval
- `alg-exact-permutation-shapley-effects` · algorithm — Exact finite-permutation Shapley effects
- `alg-monte-carlo-permutation-shapley-effects` · algorithm — Monte Carlo permutation estimator for Shapley effects
- `lem-product-coordinate-projections-commute-and-contract` · lemma — Product-coordinate projections commute and contract in L2
- `thm-shapley-effects-are-nonnegative-and-efficient` · theorem — Dependent-input Shapley effects are nonnegative and sum to one
- `def-product-hoeffding-anova-components` · definition — Product-law Hoeffding ANOVA components
- `thm-monte-carlo-shapley-effects-clt-and-standard-errors` · theorem — Monte Carlo permutation Shapley effects have a joint CLT
- `thm-product-hoeffding-anova-decomposition` · theorem — Independent product inputs have an orthogonal Hoeffding decomposition
- `def-first-and-total-sobol-indices` · definition — First-order and total Sobol indices
- `thm-complete-chaos-tensor-expansions-give-sobol-coefficients` · theorem — Complete orthonormal tensor expansions group into Sobol components
- `thm-pick-freeze-sobol-covariance-identities` · theorem — Pick-freeze covariances recover first and total Sobol numerators
- `thm-poincare-bound-for-total-sobol-effect` · theorem — Coordinate Poincare inequalities bound total Sobol effects
- `alg-pick-freeze-monte-carlo-sobol-estimators` · algorithm — Pick-freeze Monte Carlo estimators for Sobol indices
- `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse` · theorem — Pick-freeze Sobol ratios are consistent and have a joint delta-method CLT

### `global-sensitivity-anova-and-sobol-estimation-examples` — Global sensitivity anova and sobol estimation — Examples

- `ex-perfectly-correlated-inputs-and-shapley-allocation` · example — Perfectly correlated inputs share a Shapley effect
- `ex-ishigami-function-sobol-decomposition` · example — The Ishigami function's only possible interaction is X1-X3
- `ex-polynomial-chaos-coefficients-and-sobol-indices` · example — Polynomial-chaos coefficients group by variable support
- `ex-zero-variance-sobol-indices-undefined` · example — A constant output has no normalized Sobol indices
- `ex-noisy-simulator-intrinsic-noise-and-input-sensitivity` · example — Noisy simulator output separates intrinsic noise from input variance
- `ex-ratio-pick-freeze-index-estimator-is-biased` · example — A pick-freeze ratio can be biased at finite sample size

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `global-sensitivity-anova-and-sobol-estimation` requires `polynomial-chaos-stochastic-collocation-and-galerkin-uq`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
