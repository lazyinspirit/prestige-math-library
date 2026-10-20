# Step 4 batch reviewer — batch **83**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **83**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["83"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 83 | `average-reward-regret-and-ucrl2` | A | discrete-time-martingales, finite-mdps-and-bellman-operators, markov-kernels-and-markov-chains, martingale-inequalities-and-convergence, identifiability-and-approximation-bias-in-computational-inference |
| 83 | `average-reward-regret-and-ucrl2-examples` | B | average-reward-regret-and-ucrl2 |

## Your content, in full

### `average-reward-regret-and-ucrl2` — Average-reward regret and UCRL2

- `lem-almost-additive-sequence-has-limit` · lemma — Almost-additive sequences have a normalized limit
- `def-bounded-reward-finite-mdp` · definition — Finite MDP with bounded real rewards
- `alg-extended-value-iteration` · algorithm — Extended value iteration for a confidence set
- `def-communicating-mdp-and-diameter` · definition — Communicating MDP and diameter
- `lem-ucrl2-adaptive-sample-tape-representation` · lemma — Adaptive MDP visits admit fixed sample tapes
- `lem-ucrl2-evi-termination` · lemma — Termination of extended value iteration under communicating assumptions
- `lem-ucrl2-uniform-confidence-bounds` · lemma — Uniform empirical reward and transition confidence bounds
- `thm-communicating-mdp-common-optimal-average-reward` · theorem — Communicating MDPs have a common optimal average reward
- `alg-ucrl2` · algorithm — UCRL2 for finite communicating MDPs
- `def-average-reward-and-regret` · definition — Average reward and pathwise regret
- `thm-ucrl2-high-probability-regret` · theorem — UCRL2 high-probability pathwise regret bound
- `thm-ucrl2-regret-lower-bound` · theorem — Expected regret lower bound for communicating MDPs

### `average-reward-regret-and-ucrl2-examples` — Average-reward regret and UCRL2 — Examples

- `ex-noncommunicating-mdp-has-state-dependent-gain` · example — A noncommunicating MDP can have state-dependent average reward
- `ex-one-state-diameter-convention` · example — One-state MDP and normalized diameter
- `ex-pathwise-and-expected-regret-are-different` · example — A random reward separates pathwise and expected regret

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `average-reward-regret-and-ucrl2` requires `finite-mdps-and-bellman-operators`
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
