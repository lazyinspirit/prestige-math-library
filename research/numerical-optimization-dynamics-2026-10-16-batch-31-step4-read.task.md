# Step 4 batch reviewer — batch **31**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **31**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `tau-leaping-and-reaction-diffusion-model-error` | A | poisson-and-cox-point-process-models, stochastic-reaction-jump-simulation-and-coupling, multilevel-monte-carlo |
| 31 | `tau-leaping-and-reaction-diffusion-model-error-examples` | B | tau-leaping-and-reaction-diffusion-model-error |

## Your content, in full

### `tau-leaping-and-reaction-diffusion-model-error` — Tau leaping and reaction diffusion model error

- `lem-shared-minimum-poisson-count-coupling` · lemma — Shared-minimum coupling of two Poisson counts
- `alg-explicit-poisson-tau-leaping` · algorithm — Explicit Poisson tau-leaping with an invalid-state status
- `def-density-scaled-jump-and-chemical-langevin-generators` · definition — Density-scaled reaction jump and chemical Langevin generators
- `lem-poisson-tau-leap-moment-and-covariance-identities` · lemma — Conditional moments of one Poisson tau-leap increment
- `thm-minimum-intensity-tau-leap-level-variance` · theorem — Order-one correction variance for coupled Poisson tau-leap levels
- `alg-critical-reaction-binomial-guarded-tau-leaping` · algorithm — Critical-reaction binomial guarded tau-leaping
- `lem-bounded-rate-reaction-generator-dynkin-identity` · lemma — Dynkin identity for a bounded-rate finite stopped reaction chain
- `lem-poisson-tau-leap-one-step-weak-defect` · lemma — One-step weak defect of finite-state Poisson tau-leaping
- `thm-density-scaled-chemical-langevin-model-error` · theorem — Stopped density-scaled jump versus chemical Langevin weak model error
- `thm-poisson-tau-leap-weak-order-one-with-exit-bound` · theorem — Weak order one for finite-state Poisson tau-leaping with an exit bound
- `cor-mlmc-complexity-for-poisson-tau-leaping` · corollary — MLMC work bound for bounded finite-state Poisson tau-leaping

### `tau-leaping-and-reaction-diffusion-model-error-examples` — Tau leaping and reaction diffusion model error — Examples

- `ex-minimum-intensity-coupling-reduces-one-step-variance` · example — A minimum-intensity coupling reduces a Poisson count correction
- `ex-chemical-langevin-near-empty-poisson-birth` · example — A CLE can assign negative density near an empty population
- `ex-poisson-tau-leap-negative-population-pure-death` · example — A Poisson leap can make a pure-death population negative
- `ex-binomial-guard-prevents-invalid-counts-but-changes-noise` · example — A binomial guard prevents overdraw but changes Poisson noise
- `ex-stiff-reversible-explicit-leap-mean-amplification` · example — A stiff reversible system exposes explicit tau-leap mean instability

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tau-leaping-and-reaction-diffusion-model-error` requires `stochastic-reaction-jump-simulation-and-coupling`
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
