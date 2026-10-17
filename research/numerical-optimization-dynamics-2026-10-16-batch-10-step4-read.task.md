# Step 4 batch reviewer — batch **10**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **10**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `stochastic-reaction-jump-simulation-and-coupling` | A | counting-process-compensators-and-integrals, parametric-survival-and-reliability, poisson-and-cox-point-process-models, probability-spaces-random-variables-and-expectation, temporal-point-process-intensity-and-likelihood |
| 10 | `stochastic-reaction-jump-simulation-and-coupling-examples` | B | stochastic-reaction-jump-simulation-and-coupling |

## Your content, in full

### `stochastic-reaction-jump-simulation-and-coupling` — Stochastic reaction jump simulation and coupling

- `def-reaction-network-propensity-system-and-generator` · definition — Finite-channel reaction propensity systems and their generator
- `lem-competing-exponential-race-for-reaction-channels` · lemma — Competing exponential clocks give the reaction event law
- `alg-gillespie-direct-method-for-reaction-networks` · algorithm — Gillespie direct method with horizon and budget statuses
- `alg-next-reaction-random-time-change-method` · algorithm — Next-reaction method by internal Poisson clocks
- `alg-dominating-thinning-for-time-varying-reaction-rates` · algorithm — Dominating thinning for bounded time-varying propensities
- `thm-countable-state-reaction-networks-lyapunov-nonexplosion` · theorem — A proper Lyapunov bound prevents reaction-network explosion
- `thm-dominating-thinning-exactly-simulates-reaction-rates` · theorem — Dominating thinning has the prescribed reaction law
- `alg-minimum-intensity-coupling-for-reaction-networks` · algorithm — Minimum-intensity coupling of reaction networks
- `thm-finite-state-gillespie-and-next-reaction-exactness` · theorem — Finite-state Gillespie and next-reaction methods have the specified CTMC law
- `thm-minimum-intensity-coupling-preserves-exact-marginals` · theorem — The minimum-intensity reaction coupling preserves both marginals
- `thm-reaction-counts-have-compensators-brackets-and-isometry` · theorem — Compensators, brackets, and jump-integral isometry for reaction counts

### `stochastic-reaction-jump-simulation-and-coupling-examples` — Stochastic reaction jump simulation and coupling — Examples

- `cex-quadratic-pure-birth-reaction-network-explodes` · counterexample — Quadratic pure-birth rates can explode
- `cex-understated-thinning-envelope-is-invalid` · counterexample — Clipping an understated thinning envelope changes the waiting-time law
- `ex-zero-total-hazard-state-is-absorbing` · example — A zero-total-hazard state is absorbing
- `ex-finite-state-birth-death-reaction-simulation` · example — Gillespie simulation of a finite birth-death reaction network
- `ex-two-chain-minimum-intensity-birth-death-coupling` · example — Minimum-intensity coupling of two birth-death chains

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tau-leaping-and-reaction-diffusion-model-error` requires `stochastic-reaction-jump-simulation-and-coupling`
- `finite-generator-master-equations-and-uniformization` requires `stochastic-reaction-jump-simulation-and-coupling`
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
