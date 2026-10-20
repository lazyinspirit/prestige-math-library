# Step 4 batch reviewer — batch **90**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **90**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["90"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 90 | `constrained-mdps-and-policy-safety` | A | finite-mdps-and-bellman-operators, conditional-distributions-and-regular-conditional-probability, conditional-expectation, minimax-lower-bounds-and-information-theoretic-methods, policy-gradients-reinforce-and-actor-critic |
| 90 | `constrained-mdps-and-policy-safety-examples` | B | constrained-mdps-and-policy-safety |

## Your content, in full

### `constrained-mdps-and-policy-safety` — Constrained MDPs and policy safety

- `lem-finite-action-average-tv-controlled-by-kl` · lemma — Finite-action average total variation is bounded by average KL
- `def-constrained-markov-decision-process` · definition — Finite discounted constrained Markov decision process
- `def-normalized-discounted-state-occupancy` · definition — Normalized discounted state occupancy
- `def-discounted-cost-constraint` · definition — Expected discounted-cost feasibility constraint
- `lem-normalized-discounted-state-occupancy-is-probability` · lemma — Normalized discounted occupancy is a probability distribution
- `def-discounted-value-and-advantage-functions` · definition — Discounted value, action-value, and advantage functions
- `lem-discounted-occupancy-change-bounded-by-average-tv` · lemma — Discounted occupancy change is bounded by average policy TV
- `lem-mdp-performance-difference-identity-with-arbitrary-baseline` · lemma — Performance-difference identity for an arbitrary bounded baseline
- `thm-policy-performance-bound-by-average-divergence` · theorem — Policy performance bound by average divergence
- `alg-constrained-policy-optimization` · algorithm — Sample-based constrained policy optimization update
- `lem-cpo-sample-update-well-defined-and-finite-search` · lemma — The sample CPO update has a well-defined proposal and finite backtracking search
- `rem-cpo-implementation-is-approximate` · remark — Practical CPO updates do not inherit exact safety guarantees automatically

### `constrained-mdps-and-policy-safety-examples` — Constrained MDPs and policy safety — Examples

- `ex-expected-discounted-cost-does-not-imply-pathwise-safety` · example — A small expected cost can coexist with frequent finite-horizon violations
- `ex-empirical-cost-satisfaction-can-miss-population-violation` · example — A finite sample can report cost satisfaction while the policy violates its expected-cost limit
- `ex-exact-trust-region-and-sampled-line-search-disagree` · example — An exact trust-region test can disagree with a sampled line search
- `cex-arbitrary-baseline-bound-without-old-policy-residual` · counterexample — An arbitrary baseline requires the old-policy residual

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `constrained-mdps-and-policy-safety` requires `finite-mdps-and-bellman-operators`
- `constrained-mdps-and-policy-safety` requires `policy-gradients-reinforce-and-actor-critic`
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
