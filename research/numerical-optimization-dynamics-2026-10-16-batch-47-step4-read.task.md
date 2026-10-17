# Step 4 batch reviewer — batch **47**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **47**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["47"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 47 | `finite-generator-master-equations-and-uniformization` | A | markov-kernels-and-markov-chains, matrix-norms-condition-numbers-and-numerical-stability, poisson-and-cox-point-process-models, sparse-matrix-models-and-kernel-costs, one-step-ode-consistency-and-local-error, stochastic-reaction-jump-simulation-and-coupling, global-ode-and-density-error |
| 47 | `finite-generator-master-equations-and-uniformization-examples` | B | finite-generator-master-equations-and-uniformization |

## Your content, in full

### `finite-generator-master-equations-and-uniformization` — Finite generator master equations and uniformization

- `def-xd-finite-column-generator` · definition — Finite column generator
- `lem-xd-finite-matrix-exponential-series` · lemma — Finite matrix exponential series and its identities
- `lem-xd-geometric-poisson-tail-bound` · lemma — A geometric upper bound for a Poisson right tail
- `def-xd-countable-nonexplosive-ctmc` · definition — Given countable nonexplosive pure-jump chain with finite rates
- `def-xd-countable-l1-distance` · definition — Countable-state l1 distance for mass functions
- `lem-xd-uniformized-matrix-is-stochastic` · lemma — The finite uniformized matrix is column stochastic
- `def-xd-finite-state-projection-and-cemetery-lift` · definition — Killed finite-state projection and cemetery lift
- `thm-xd-finite-generator-master-equation-uniformization` · theorem — Finite master equation and uniformization formula
- `alg-xd-budgeted-uniformization-accumulation` · algorithm — Budgeted uniformization accumulation with time splitting
- `thm-xd-uniformization-truncation-and-error` · theorem — Uniformization truncation, mass loss, and arithmetic-error ledger
- `thm-xd-finite-state-projection-loss-and-observable-bound` · theorem — Finite-state killed projection has an exact lost-mass certificate
- `alg-xd-finite-budget-adaptive-projection` · algorithm — Finite-budget adaptive finite-state projection
- `thm-xd-finite-budget-adaptive-projection-soundness` · theorem — Adaptive projection certificates are sound and finite-budgeted

### `finite-generator-master-equations-and-uniformization-examples` — Finite generator master equations and uniformization — Examples

- `ex-xd-two-state-gating-uniformization` · example — Two-state gating through uniformization
- `ex-xd-birth-death-poisson-tail` · example — Three-state birth-death chain with a certified Poisson tail
- `ex-xd-immigration-death-finite-state-projection` · example — Immigration-death chain projected onto two states
- `ex-xd-equal-mean-distinct-probability-vectors` · example — Equal mean trajectories do not determine a master-equation state

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-generator-master-equations-and-uniformization` requires `sparse-matrix-models-and-kernel-costs`
- `finite-generator-master-equations-and-uniformization` requires `one-step-ode-consistency-and-local-error`
- `finite-generator-master-equations-and-uniformization` requires `stochastic-reaction-jump-simulation-and-coupling`
- `finite-generator-master-equations-and-uniformization` requires `global-ode-and-density-error`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-generator-master-equations-and-uniformization`
- `positive-conservative-production-destruction-integrators` requires `finite-generator-master-equations-and-uniformization`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
