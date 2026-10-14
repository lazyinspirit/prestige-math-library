# Step 4 batch reviewer — batch **3**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **3**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `losses-risk-and-decision-rules` | A | estimators-and-randomized-procedures, statistical-experiments-models-and-identifiability, probability-spaces-random-variables-and-expectation, conditional-expectation, convex-and-semicontinuous-functions-on-rn |
| 3 | `losses-risk-and-decision-rules-examples` | B | losses-risk-and-decision-rules |

## Your content, in full

### `losses-risk-and-decision-rules` — Loss, Risk and Decision Theory

- `lem-finite-dimensional-integral-jensen-for-convex-loss` · lemma — Integral Jensen inequality for finite-dimensional convex losses
- `lem-prior-and-model-kernel-define-joint-law` · lemma — A prior and model kernel define a joint law
- `def-loss-function-and-risk` · definition — Loss functions and risk
- `def-risk-domination-and-admissibility` · definition — Risk domination and admissibility
- `def-bayes-and-minimax-risk` · definition — Bayes risk and minimax risk
- `thm-randomization-does-not-improve-convex-action-loss` · theorem — Randomization does not improve convex action loss
- `thm-bayes-rule-minimizes-prior-risk` · theorem — A posterior-risk minimizer minimizes prior risk

### `losses-risk-and-decision-rules-examples` — Loss, Risk and Decision Theory — Examples

- `ex-squared-error-risk-for-bernoulli-observation` · example — Squared-error risk for a Bernoulli observation
- `ex-zero-one-loss-randomization-minimax` · example — Randomization lowers worst-case risk under zero-one loss
- `ex-data-rule-dominates-constant-rule` · example — A data-dependent rule dominates a constant rule
- `cex-open-action-set-no-minimizer` · counterexample — An open action set need not contain a posterior-risk minimizer

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `losses-risk-and-decision-rules` requires `estimators-and-randomized-procedures`
- `losses-risk-and-decision-rules` requires `statistical-experiments-models-and-identifiability`
- `finite-sample-point-estimation-and-unbiased-optimality` requires `losses-risk-and-decision-rules`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `losses-risk-and-decision-rules`
- `minimax-lower-bounds-and-information-theoretic-methods` requires `losses-risk-and-decision-rules`
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `losses-risk-and-decision-rules`
- `m-and-z-estimation-and-uniform-laws` requires `losses-risk-and-decision-rules`
- `nonparametric-regression-and-smoothing` requires `losses-risk-and-decision-rules`
- `splines-series-and-approximation-rates` requires `losses-risk-and-decision-rules`
- `contamination-models-and-robust-risk` requires `losses-risk-and-decision-rules`
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
