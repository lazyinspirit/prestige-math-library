# Step 4 batch reviewer — batch **24**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **24**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["24"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 24 | `boundary-and-misspecified-asymptotics` | A | delta-method-and-asymptotic-normality, likelihood-asymptotics-wald-score-and-likelihood-ratio, local-asymptotic-normality-contiguity-and-efficiency |
| 24 | `boundary-and-misspecified-asymptotics-examples` | B | boundary-and-misspecified-asymptotics |

## Your content, in full

### `boundary-and-misspecified-asymptotics` — Nonregular and Misspecified Limits

- `def-pseudo-true-parameter-under-misspecification` · definition — Pseudo-true parameter under misspecification
- `thm-m-estimator-sandwich-limit-under-misspecification` · theorem — Misspecified M-estimator sandwich limit
- `def-fisher-information-metric-distance` · definition — Fisher-information metric distance to a set
- `lem-quadratic-likelihood-optimization-is-fisher-distance` · lemma — Quadratic likelihood optimization is squared Fisher distance
- `thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model` · theorem — Likelihood-ratio limit for local cones in a QMD model
- `cex-uniform-maximum-has-n-rate-not-root-n` · counterexample — The uniform endpoint MLE has rate n, not square-root n

### `boundary-and-misspecified-asymptotics-examples` — Nonregular and Misspecified Limits — Examples

- `ex-uniform-endpoint-mle` · example — The endpoint MLE for a uniform scale
- `ex-one-sided-normal-likelihood-ratio-at-boundary` · example — A one-sided normal likelihood ratio at the boundary
- `ex-normal-location-under-wrong-variance` · example — Normal location fitted under the wrong variance

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `boundary-and-misspecified-asymptotics` requires `delta-method-and-asymptotic-normality`
- `boundary-and-misspecified-asymptotics` requires `likelihood-asymptotics-wald-score-and-likelihood-ratio`
- `boundary-and-misspecified-asymptotics` requires `local-asymptotic-normality-contiguity-and-efficiency`
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
