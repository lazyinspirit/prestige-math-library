# Step 4 batch reviewer — batch **37**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **37**. Step-5 owning group: **ah**.
Return `group: "ah"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `parabolic-finite-difference-methods` | A | heat-equation-maximum-principles-duhamel-and-smoothing, linear-scheme-stability-and-lax-equivalence, elliptic-finite-difference-methods |
| 37 | `parabolic-finite-difference-methods-examples` | B | parabolic-finite-difference-methods |

## Your content, in full

### `parabolic-finite-difference-methods` — Parabolic finite-difference methods

- `def-parabolic-theta-finite-difference-scheme` · definition — Fully discrete θ heat finite-difference scheme
- `lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint` · lemma — Symmetry and positivity of the rectangular Dirichlet heat operator
- `lem-periodic-heat-difference-amplification-symbol` · lemma — Periodic heat-stencil eigenvalues and θ amplification factor
- `thm-parabolic-theta-scheme-local-truncation-error` · theorem — Local truncation residual for the θ heat scheme
- `lem-parabolic-theta-step-exists-uniquely` · lemma — Unique solvability of an implicit θ heat step
- `thm-forward-euler-heat-cfl-and-nyquist-instability` · theorem — Forward Euler heat CFL stability and sharp Nyquist instability
- `thm-parabolic-theta-l2-stability-for-half-theta` · theorem — Unconditional weighted L2 stability for θ at least one half
- `thm-parabolic-theta-scheme-global-error-bound` · theorem — Global weighted L2 error from the complete parabolic residual
- `thm-theta-scheme-discrete-maximum-principle` · theorem — A boundary-aware discrete maximum principle for the θ scheme

### `parabolic-finite-difference-methods-examples` — Parabolic finite-difference methods — Examples

- `ex-backward-euler-damps-high-frequencies` · example — Backward Euler strongly damps high periodic modes
- `ex-crank-nicolson-preserves-high-frequency-amplitude` · example — Crank–Nicolson is stable but does not strongly damp the highest mode
- `ex-forward-euler-parabolic-cfl-threshold-and-nyquist-growth` · example — Forward Euler at and above the parabolic CFL threshold
- `ex-continuous-and-discrete-heat-maximum-principles` · example — Continuous and discrete heat maximum bounds on sampled data

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `parabolic-finite-difference-methods` requires `linear-scheme-stability-and-lax-equivalence`
- `parabolic-finite-difference-methods` requires `elliptic-finite-difference-methods`
- `hyperbolic-finite-difference-methods` requires `parabolic-finite-difference-methods`
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
