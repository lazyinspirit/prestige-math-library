# Step 4 batch reviewer — batch **32**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `high-resolution-tvd-eno-and-weno-methods` | A | polynomial-interpolation-and-remainder, monotone-finite-volume-entropy-convergence, riemann-solvers-for-hyperbolic-systems |
| 32 | `high-resolution-tvd-eno-and-weno-methods-examples` | B | high-resolution-tvd-eno-and-weno-methods |

## Your content, in full

### `high-resolution-tvd-eno-and-weno-methods` — High-resolution TVD, ENO and WENO reconstruction

- `def-na-high-resolution-reconstruction` · definition — Finite-volume MUSCL, nodal ENO2 and WENO5 reconstruction conventions
- `thm-na-linear-monotone-first-order-barrier` · theorem — A monotone linear one-step advection scheme cannot be second order at noninteger CFL
- `lem-na-eno2-reconstruction-third-order` · lemma — The selected nodal ENO2 quadratic reconstructs the face to third order
- `lem-na-weno5-optimal-linear-reconstruction` · lemma — The WENO5 ideal linear weights reproduce quartics at the right face
- `thm-na-musc-minmod-second-order-on-smooth-data` · theorem — MUSCL/minmod face states are second order on smooth monotone data
- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl` · theorem — Direct forward-Euler MUSCL/minmod is TVD under the sharp two-thirds CFL bound
- `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one` · counterexample — The specified direct MUSCL/minmod flux update is not TVD at CFL one
- `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction` · theorem — Fixed-epsilon WENO-JS and WENO-Z face reconstructions are fifth order

### `high-resolution-tvd-eno-and-weno-methods-examples` — High-resolution TVD, ENO and WENO reconstruction — Examples

- `ex-na-minmod-extremum-clipping` · example — Minmod clips the slope at a smooth quadratic maximum
- `cex-na-unlimited-centered-reconstruction-overshoots` · counterexample — Unlimited centered reconstruction creates new extrema on a step
- `ex-na-smooth-linear-advection-reconstruction` · example — MUSCL and WENO reconstruct a translating affine profile exactly
- `ex-na-weno-js-critical-point-epsilon-scaling` · example — A first-order critical point exposes WENO-JS epsilon scaling
- `ex-na-burgers-godunov-musc-shock` · example — Positive-state Burgers shock and the monotone finite-volume baseline

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `high-resolution-tvd-eno-and-weno-methods` requires `monotone-finite-volume-entropy-convergence`
- `high-resolution-tvd-eno-and-weno-methods` requires `riemann-solvers-for-hyperbolic-systems`
- `invariant-domain-and-entropy-stable-conservative-schemes` requires `high-resolution-tvd-eno-and-weno-methods`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
