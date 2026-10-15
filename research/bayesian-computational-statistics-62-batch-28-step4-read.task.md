# Step 4 batch reviewer — batch **28**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **28**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `iid-monte-carlo-integration-and-error` | A | central-limit-theorems |
| 28 | `iid-monte-carlo-integration-and-error-examples` | B | iid-monte-carlo-integration-and-error, detection-and-quantification-limits |

## Your content, in full

### `iid-monte-carlo-integration-and-error` — IID Monte Carlo integration and error

- `def-iid-monte-carlo-estimators` · definition — IID Monte Carlo sample mean, variance, and standard error
- `thm-iid-monte-carlo-mean-moments` · theorem — Unbiasedness and exact variance of the IID Monte Carlo mean
- `thm-iid-monte-carlo-mean-consistency` · theorem — Strong and weak consistency of the IID Monte Carlo mean
- `thm-iid-monte-carlo-sample-variance-consistency` · theorem — Consistency of the IID Monte Carlo sample variance
- `thm-iid-monte-carlo-central-limit` · theorem — Lindeberg–Lévy limit for the IID Monte Carlo mean

### `iid-monte-carlo-integration-and-error-examples` — IID Monte Carlo integration and error — Examples

- `ex-gaussian-monte-carlo-integrand` · example — Gaussian integrand: exact Monte Carlo moments and asymptotic error
- `ex-finite-mean-infinite-variance-monte-carlo-integrand` · example — Finite mean does not give a finite-variance Monte Carlo error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `variance-reduction-and-randomized-integration` requires `iid-monte-carlo-integration-and-error`
- `rejection-sampling` requires `iid-monte-carlo-integration-and-error`
- `importance-sampling-and-weight-diagnostics` requires `iid-monte-carlo-integration-and-error`
- `statistical-and-computational-error-accounting` requires `iid-monte-carlo-integration-and-error`
- `synthetic-likelihood-and-indirect-inference` requires `iid-monte-carlo-integration-and-error`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
