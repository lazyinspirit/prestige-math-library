# Step 4 batch reviewer — batch **33**, run `statistical-models-experiments-62`

You are the only reviewer for batch **33**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `logrank-and-weighted-logrank` | A | randomized-treatment-assignment-and-sharp-null-tests, event-time-censoring-and-truncation, counting-process-compensators-and-integrals, independent-subject-terminal-influence-limits, estimators-and-randomized-procedures, finite-sample-tests-neyman-pearson-and-valid-p-values, chaining-uniform-laws-and-empirical-process-limits, finite-probability-spaces-and-random-variables |
| 33 | `logrank-and-weighted-logrank-examples` | B | logrank-and-weighted-logrank, nelson-aalen-kaplan-meier-greenwood |

## Your content, in full

### `logrank-and-weighted-logrank` — Logrank and weighted logrank

- `def-logrank-risk-set-score-and-test` · definition — Two-group logrank and weighted logrank scores
- `lem-logrank-risk-set-empirical-fractions-converge` · lemma — Uniform convergence of empirical risk-set fractions
- `thm-logrank-conditional-risk-set-moments` · theorem — Conditional hypergeometric moments for a logrank risk set
- `lem-logrank-risk-fraction-converges` · lemma — Uniform convergence of the risk-set treatment fraction
- `cor-logrank-fisher-randomization-pvalue-valid` · corollary — The logrank ordering gives a valid Fisher randomization p-value
- `lem-logrank-score-martingale-expansion` · lemma — Weighted logrank score expansion under a common-hazard model
- `lem-logrank-variance-estimator-consistency` · lemma — Consistency of the weighted logrank variance estimate
- `thm-weighted-logrank-terminal-normal-limit` · theorem — Terminal normal limit for weighted logrank scores

### `logrank-and-weighted-logrank-examples` — Logrank and weighted logrank — Examples

- `ex-logrank-crossing-hazards-zero-score` · example — Crossing hazards with a zero observed logrank score
- `ex-logrank-fisher-randomization-with-unequal-weights` · example — An exact logrank randomization p-value with unequal assignment weights

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `logrank-and-weighted-logrank` requires `randomized-treatment-assignment-and-sharp-null-tests`
- `logrank-and-weighted-logrank` requires `event-time-censoring-and-truncation`
- `logrank-and-weighted-logrank` requires `counting-process-compensators-and-integrals`
- `logrank-and-weighted-logrank` requires `independent-subject-terminal-influence-limits`
- `logrank-and-weighted-logrank-examples` requires `nelson-aalen-kaplan-meier-greenwood`
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
