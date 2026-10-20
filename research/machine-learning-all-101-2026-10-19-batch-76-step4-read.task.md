# Step 4 batch reviewer — batch **76**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **76**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["76"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 76 | `stochastic-finite-armed-bandits` | A | independence-borel-cantelli-and-zero-one-laws, online-decision-protocols, probability-spaces-random-variables-and-expectation, product-measures-and-the-fubini-tonelli-theorems, the-exponential-function, the-lebesgue-integral-and-the-convergence-theorems, improper-and-parameter-dependent-multiple-integrals, improper-integrals, properties-of-the-integral-and-the-working-ftc, the-logarithm-and-general-powers, further-trigonometric-identities-and-inverses, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, roots-and-rational-powers |
| 76 | `stochastic-finite-armed-bandits-examples` | B | stochastic-finite-armed-bandits |

## Your content, in full

### `stochastic-finite-armed-bandits` — Stochastic finite-armed bandits

- `def-centered-subgaussian-reward` · definition — Centered 1-sub-Gaussian reward
- `lem-zeta-two-and-three-converge` · lemma — The zeta sums at 2 and 3 are finite
- `lem-countably-valued-expectation-is-weighted-series` · lemma — Expectation of a countably valued nonnegative random variable is its weighted series
- `lem-ucb-prefix-envelope-sum-bound` · lemma — A deterministic-prefix envelope sum for the sharper UCB count bound
- `lem-independent-subgaussian-prefix-tail` · lemma — Tail bounds for deterministic prefixes of independent sub-Gaussian rewards
- `def-stochastic-bandit-and-pseudo-regret` · definition — Finite stochastic bandit model, gaps, and regret
- `alg-explore-then-commit` · algorithm — Explore-then-commit for a finite stochastic bandit
- `alg-upper-confidence-bound-bandit` · algorithm — Finite-horizon upper-confidence-bound bandit algorithm
- `lem-bandit-reward-table-has-fixed-conditional-laws` · lemma — The independent reward-stack model has the prescribed conditional arm laws
- `lem-ucb-suboptimal-arm-expected-pulls` · lemma — Expected pull count for a suboptimal UCB arm
- `thm-explore-then-commit-expected-regret` · theorem — Expected regret of explore-then-commit
- `lem-ucb-sharp-suboptimal-arm-expected-pulls` · lemma — A sharper expected suboptimal-arm pull count for the unchanged UCB rule
- `thm-ucb-gap-dependent-regret` · theorem — Gap-dependent expected regret of UCB
- `thm-ucb-gap-free-regret` · theorem — Gap-free expected regret of UCB

### `stochastic-finite-armed-bandits-examples` — Stochastic finite-armed bandits — Examples

- `ex-two-arm-deterministic-gap` · example — A two-arm deterministic gap and explore-then-commit
- `ex-tied-optimal-bandit-arms` · example — Tied optimal arms have zero regret
- `ex-heavy-tailed-reward-law-outside-subgaussian-model` · example — A finite-mean polynomial-tail reward is not sub-Gaussian

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stochastic-finite-armed-bandits` requires `online-decision-protocols`
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
