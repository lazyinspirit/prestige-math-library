# Step 4 batch reviewer — batch **88**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **88**. Step-5 owning group: **ac**.
Return `group: "ac"` and `batches: ["88"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 88 | `pomdps-and-belief-state-planning` | A | conditional-distributions-and-regular-conditional-probability, finite-mdps-and-bellman-operators |
| 88 | `pomdps-and-belief-state-planning-examples` | B | pomdps-and-belief-state-planning |

## Your content, in full

### `pomdps-and-belief-state-planning` — POMDPs and belief-state planning

- `lem-cardinality-of-finite-natural-initial-segment` · lemma — A finite initial segment of the naturals has its index as cardinality
- `def-finite-pomdp` · definition — Finite partially observable Markov decision process
- `def-belief-state-and-bayes-filter` · definition — Belief states and the finite Bayes filter
- `alg-pomdp-witness-backup` · algorithm — Exhaustive finite-horizon POMDP alpha-vector backup
- `lem-finite-pomdp-belief-update-is-probability-kernel` · lemma — The finite POMDP Bayes filter is a probability kernel
- `thm-belief-mdp-sufficient-statistic` · theorem — The belief state is a sufficient statistic for finite POMDP control
- `thm-finite-horizon-pomdp-piecewise-linear-convex-value` · theorem — Finite-horizon POMDP values are piecewise-linear and convex

### `pomdps-and-belief-state-planning-examples` — POMDPs and belief-state planning — Examples

- `ex-pomdp-two-state-bayes-update` · example — A two-state POMDP update changes a three-to-one prior to nine-to-one
- `ex-pomdp-observation-aliasing-preserves-belief` · example — An observation with identical state likelihoods leaves the belief unchanged
- `ex-pomdp-zero-likelihood-observation-is-not-updated` · example — A zero-likelihood observation has no posterior update
- `ex-pomdp-policy-tree-enumeration-grows-exponentially` · example — A finite POMDP family has exponentially many witnessed alpha vectors

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `pomdps-and-belief-state-planning` requires `finite-mdps-and-bellman-operators`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
