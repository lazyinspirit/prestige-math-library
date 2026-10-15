# Step 4 batch reviewer — batch **58**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **58**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `multilevel-monte-carlo` | A | statistical-and-computational-error-accounting, euler-maruyama-convergence |
| 58 | `multilevel-monte-carlo-examples` | B | multilevel-monte-carlo |

## Your content, in full

### `multilevel-monte-carlo` — Multilevel Monte Carlo and cost theorem

- `def-mlmc-hierarchy-and-coupled-corrections` · definition — Geometric MLMC hierarchy and coupled corrections
- `lem-mlmc-estimator-moments-and-mse` · lemma — Expectation, variance, and MSE of a finite MLMC estimator
- `thm-mlmc-complexity-under-rate-assumptions` · theorem — MLMC cost complexity under bias, variance, and work rates
- `cor-mlmc-euler-hms-autonomous-cost-rate` · corollary — Autonomous all-moment Euler MLMC logarithmic cost
- `cor-mlmc-euler-finite-l2-and-weak-cost-rate` · corollary — Finite-L2 strong and conditional weak Euler MLMC cost

### `multilevel-monte-carlo-examples` — Multilevel Monte Carlo and cost theorem — Examples

- `ex-mlmc-finite-level-telescoping-and-bias` · example — A three-level telescoping estimator and its remaining bias
- `ex-mlmc-euler-strong-and-weak-cost-regimes` · example — Euler strong, weak, and autonomous MLMC rate contracts
- `ex-mlmc-discontinuous-payoff-half-rate` · example — A discontinuous payoff with bias order one and variance order one-half
- `cex-mlmc-no-bias-rate-no-accuracy` · counterexample — Finite correction variance cannot replace bias control
- `cex-mlmc-no-positive-variance-decay` · counterexample — Nondecaying correction variance can force cubic cost

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `multilevel-monte-carlo` requires `statistical-and-computational-error-accounting`
- `multilevel-monte-carlo` requires `euler-maruyama-convergence`
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
