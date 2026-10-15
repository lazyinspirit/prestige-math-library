# Step 4 batch reviewer — batch **32**, run `statistical-models-experiments-62`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `nelson-aalen-kaplan-meier-greenwood` | A | event-time-censoring-and-truncation, counting-process-compensators-and-integrals, independent-subject-terminal-influence-limits, estimators-and-randomized-procedures, delta-method-and-asymptotic-normality, conditional-expectation |
| 32 | `nelson-aalen-kaplan-meier-greenwood-examples` | B | nelson-aalen-kaplan-meier-greenwood |

## Your content, in full

### `nelson-aalen-kaplan-meier-greenwood` — Nelson–Aalen, Kaplan–Meier, Greenwood

- `def-nelson-aalen-kaplan-meier-greenwood-estimators` · definition — Nelson–Aalen, Kaplan–Meier, and Greenwood estimators
- `lem-finite-support-risk-set-proportion-limits` · lemma — Finite-support risk-set proportion limits
- `thm-finite-support-nelson-aalen-kaplan-meier-consistency` · theorem — Finite-support consistency of Nelson–Aalen and Kaplan–Meier
- `lem-uniform-right-censoring-risk-set-convergence` · lemma — Uniform convergence of the empirical right-censoring risk set
- `thm-pointwise-nelson-aalen-kaplan-meier-greenwood-limit` · theorem — Pointwise influence limit and Greenwood variance consistency

### `nelson-aalen-kaplan-meier-greenwood-examples` — Nelson–Aalen, Kaplan–Meier, Greenwood — Examples

- `ex-kaplan-meier-hand-risk-set-and-support-loss` · example — A hand Kaplan–Meier calculation and loss of tail support

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nelson-aalen-kaplan-meier-greenwood` requires `event-time-censoring-and-truncation`
- `nelson-aalen-kaplan-meier-greenwood` requires `counting-process-compensators-and-integrals`
- `nelson-aalen-kaplan-meier-greenwood` requires `independent-subject-terminal-influence-limits`
- `logrank-and-weighted-logrank-examples` requires `nelson-aalen-kaplan-meier-greenwood`
- `competing-risks-and-cumulative-incidence` requires `nelson-aalen-kaplan-meier-greenwood`
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
