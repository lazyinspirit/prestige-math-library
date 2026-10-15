# Step 4 batch reviewer — batch **1**, run `statistical-models-experiments-62`

You are the only reviewer for batch **1**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `scientific-statistical-model-contracts` | A | statistical-experiments-models-and-identifiability, estimators-and-randomized-procedures, probability-spaces-random-variables-and-expectation |
| 1 | `scientific-statistical-model-contracts-examples` | B | scientific-statistical-model-contracts |

## Your content, in full

### `scientific-statistical-model-contracts` — Scientific model contracts and applicability

- `def-scientific-statistical-model-contract` · definition — Scientific statistical model contracts

### `scientific-statistical-model-contracts-examples` — Scientific model contracts and applicability — Examples

- `ex-technical-biological-units-and-repeated-visits` · example — Biological units, repeated visits, and technical assay replicates
- `ex-unvalidated-calibration-offset-is-not-identifiable` · example — An unvalidated calibration offset leaves the true quantity unidentified

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `fixed-design-linear-regression-and-estimability` requires `scientific-statistical-model-contracts`
- `generalized-linear-models-and-fisher-scoring` requires `scientific-statistical-model-contracts`
- `multivariate-normal-wishart-hotelling` requires `scientific-statistical-model-contracts`
- `principal-components-and-eigenspace-stability` requires `scientific-statistical-model-contracts`
- `mixed-effects-and-longitudinal-models` requires `scientific-statistical-model-contracts`
- `finite-populations-and-sampling-designs` requires `scientific-statistical-model-contracts`
- `randomized-treatment-assignment-and-sharp-null-tests` requires `scientific-statistical-model-contracts`
- `biological-and-technical-replication` requires `scientific-statistical-model-contracts`
- `event-time-censoring-and-truncation` requires `scientific-statistical-model-contracts`
- `measurement-calibration-and-uncertainty` requires `scientific-statistical-model-contracts`
- `method-agreement-and-limits` requires `scientific-statistical-model-contracts`
- `stationary-time-series-moments-and-autocovariance` requires `scientific-statistical-model-contracts`
- `state-space-models-as-probability-laws` requires `scientific-statistical-model-contracts`
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
