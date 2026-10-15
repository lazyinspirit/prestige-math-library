# Step 4 batch reviewer — batch **7**, run `statistical-models-experiments-62`

You are the only reviewer for batch **7**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `mixed-effects-and-longitudinal-models` | A | scientific-statistical-model-contracts, fixed-design-linear-regression-and-estimability, statistical-experiments-models-and-identifiability, estimators-and-randomized-procedures, dominated-experiments-likelihood-and-sufficiency, losses-risk-and-decision-rules, central-limit-theorems, probability-spaces-random-variables-and-expectation, inner-product-spaces-and-orthogonality, independence-borel-cantelli-and-zero-one-laws, direct-matrix-factorisations-lu-cholesky-and-qr |
| 7 | `mixed-effects-and-longitudinal-models-examples` | B | mixed-effects-and-longitudinal-models |

## Your content, in full

### `mixed-effects-and-longitudinal-models` — Mixed effects and longitudinal models

- `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent` · lemma — Jointly Gaussian blocks with zero cross-covariance are independent, including singular blocks
- `thm-nondegenerate-multivariate-normal-law-has-density` · theorem — A positive-definite multivariate normal law has its Gaussian density
- `def-error-contrast-matrix` · definition — Error-contrast matrix for a full-rank fixed design
- `def-known-covariance-generalized-least-squares-estimator` · definition — Generalized least-squares estimator for known covariance
- `def-linear-mixed-model` · definition — Finite-dimensional linear mixed model with explicit longitudinal roles
- `def-gaussian-linear-mixed-model` · definition — Gaussian branch of the linear mixed model
- `def-longitudinal-missingness-mechanisms` · definition — Longitudinal observation patterns and missingness mechanisms
- `lem-error-contrast-matrix-exists` · lemma — A full-rank error-contrast matrix exists when n exceeds p
- `lem-gls-information-matrix-is-positive-definite` · lemma — The GLS information matrix is positive definite
- `lem-marginal-covariance-of-linear-mixed-model` · lemma — Marginal covariance of the linear mixed model
- `lem-reml-error-contrast-covariance-is-positive-definite` · lemma — The REML error-contrast covariance is positive definite
- `lem-gaussian-error-contrast-is-multivariate-normal` · lemma — A Gaussian error contrast has the induced multivariate-normal law
- `thm-gaussian-conditional-law-of-random-effects` · theorem — Conditional Gaussian law of random effects
- `thm-variance-component-identifiability-iff-covariance-map-injective` · theorem — Gaussian variance-component identifiability is covariance-map injectivity
- `def-restricted-maximum-likelihood-error-contrasts` · definition — Restricted maximum likelihood from error contrasts
- `thm-known-covariance-gls-is-blue` · theorem — Known-covariance GLS is BLUE
- `lem-reml-error-contrast-basis-change-is-parameter-free` · lemma — Changing an error-contrast basis changes the REML likelihood by a constant
- `thm-known-covariance-blup-for-random-effects` · theorem — Known-covariance BLUP and its prediction-error covariance

### `mixed-effects-and-longitudinal-models-examples` — Mixed effects and longitudinal models — Examples

- `cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout` · counterexample — A mixed-model covariance does not imply MAR dropout
- `ex-random-intercept-intraclass-correlation` · example — Random-intercept covariance and intraclass correlation
- `cex-two-visits-alias-random-slope-and-residual-variance` · counterexample — Two visits can alias random-slope and residual variance components

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mixed-effects-and-longitudinal-models` requires `scientific-statistical-model-contracts`
- `mixed-effects-and-longitudinal-models` requires `fixed-design-linear-regression-and-estimability`
- `biological-and-technical-replication` requires `mixed-effects-and-longitudinal-models`
- `measurement-batch-and-process-variation` requires `mixed-effects-and-longitudinal-models`
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
