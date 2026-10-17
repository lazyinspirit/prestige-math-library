# Step 4 batch reviewer — batch **86**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **86**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["86"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 86 | `constrained-dynamics-shake-and-rattle` | A | hamiltonian-monte-carlo-and-leapfrog, implicit-stiff-time-stepping-and-algebraic-error, differential-algebraic-equations-and-consistent-initialization, geometric-numerical-integration |
| 86 | `constrained-dynamics-shake-and-rattle-examples` | B | constrained-dynamics-shake-and-rattle |

## Your content, in full

### `constrained-dynamics-shake-and-rattle` — Constrained dynamics shake and rattle

- `def-regular-holonomic-phase-space-and-dynamics` · definition — Regular holonomic phase space and constrained dynamics
- `lem-smooth-residual-quotient-extension` · lemma — A $C^{k+r}$ residual vanishing through order $r-1$ has a $C^k$ scaled extension
- `lem-regular-holonomic-phase-space-is-symplectic-cotangent` · lemma — The regular holonomic phase space is a symplectic cotangent bundle
- `lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold` · lemma — Holonomic phase residuals control distance to the consistent phase manifold
- `def-regular-classical-rattle-step-map` · definition — Scaled classical RATTLE step map
- `thm-local-holonomic-constrained-hamiltonian-flow` · theorem — The constrained Hamiltonian vector field has a unique local flow
- `lem-rattle-scaled-position-and-momentum-branches` · lemma — Scaled RATTLE equations have unique local multiplier branches
- `alg-finite-budget-rattle-step-with-scaled-residuals` · algorithm — Finite budget RATTLE solve with scaled constraint residuals
- `thm-rattle-exact-constraint-preservation-and-reversibility` · theorem — Exact RATTLE preserves both constraints and is symmetric
- `thm-rattle-symplecticity-on-regular-constraint-phase-space` · theorem — Exact RATTLE is symplectic on the constrained phase space
- `thm-finite-budget-rattle-solver-returns-status` · theorem — The finite budget RATTLE solver returns a status in finite work
- `thm-rattle-second-order-global-accuracy-on-compact-tubes` · theorem — Exact RATTLE has second order global accuracy on compact tubes
- `thm-rattle-scaled-solve-residual-error-budget` · theorem — Scaled RATTLE residuals bound the finite solve trajectory error

### `constrained-dynamics-shake-and-rattle-examples` — Constrained dynamics shake and rattle — Examples

- `ex-constrained-pendulum-equations-and-multiplier` · example — The constrained pendulum multiplier follows from tangency
- `ex-rigid-bond-rattle-free-rotor` · example — RATTLE gives an exact step and a cubic phase defect for a free rigid bond
- `ex-nearly-dependent-constraints-amplify-rattle-residuals` · example — Nearly dependent constraints make the multiplier solve ill conditioned
- `ex-rattle-residual-budget-and-global-trajectory-drift` · example — A fixed RATTLE residual budget allows an O(epsilon) drift envelope

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `constrained-dynamics-shake-and-rattle` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `constrained-dynamics-shake-and-rattle` requires `differential-algebraic-equations-and-consistent-initialization`
- `constrained-dynamics-shake-and-rattle` requires `geometric-numerical-integration`
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
