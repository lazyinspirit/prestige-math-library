# Step 4 batch reviewer — batch **82**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **82**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["82"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 82 | `pac-mdp-exploration` | A | martingale-inequalities-and-convergence, tabular-prediction-and-control |
| 82 | `pac-mdp-exploration-examples` | B | pac-mdp-exploration |

## Your content, in full

### `pac-mdp-exploration` — Optimistic exploration and PAC-MDP sample complexity

- `def-pac-mdp-bounded-reward-model` · definition — Finite discounted MDP with bounded real rewards
- `thm-pac-mdp-value-functions` · theorem — Well-defined discounted values and optimal Bellman fixed points
- `lem-pac-mdp-adaptive-sample-concentration` · lemma — Concentration for adaptively sampled MDP observations
- `def-pac-mdp-sample-complexity` · definition — PAC-MDP sample complexity of exploration
- `def-admissible-mdp-heuristic` · definition — Admissible upper heuristic for a discounted MDP
- `lem-pac-mdp-value-simulation` · lemma — Value stability under empirical model error
- `def-pac-mdp-known-state-action-mdp` · definition — Known-state/action MDP with optimistic self-loops
- `alg-r-max` · algorithm — R-MAX with an admissible heuristic
- `alg-delayed-q-learning` · algorithm — Delayed Q-learning with an admissible heuristic
- `thm-pac-mdp-escape-event-reduction` · theorem — Escape-event reduction for optimistic greedy learning
- `lem-r-max-empirical-model-accuracy` · lemma — Adaptive empirical-model accuracy for R-MAX
- `lem-delayed-q-learning-optimism-and-update-counts` · lemma — Delayed Q-learning optimism and update-count bounds
- `thm-zero-tolerance-pac-mdp-boundary` · theorem — The zero-tolerance boundary of PAC-MDP exploration
- `thm-r-max-pac-bound` · theorem — PAC-MDP sample complexity of R-MAX
- `thm-delayed-q-learning-pac-bound` · theorem — PAC-MDP sample complexity of Delayed Q-learning

### `pac-mdp-exploration-examples` — Optimistic exploration and PAC-MDP sample complexity — Examples

- `ex-pac-mdp-nonpermanent-bad-steps` · example — A finite bad-step count need not be a permanent stopping time
- `ex-pac-mdp-inadmissible-heuristic-fails` · example — An inadmissible heuristic can suppress exploration forever
- `ex-pac-mdp-discount-factor-dependence` · example — The uninformative heuristic exposes the discount-factor powers
- `ex-pac-mdp-delayed-q-zero-slack` · example — Zero heuristic slack can still require one Delayed Q-learning update

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `pac-mdp-exploration` requires `tabular-prediction-and-control`
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
