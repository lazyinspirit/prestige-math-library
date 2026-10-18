# Step 4 batch reviewer — batch **66**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **66**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["66"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 66 | `phase-field-and-energy-dissipative-discretization` | A | finite-volume-diffusion-and-mimetic-fluxes, imex-and-operator-splitting-methods, nonlinear-parabolic-compactness-and-monotone-evolution |
| 66 | `phase-field-and-energy-dissipative-discretization-examples` | B | phase-field-and-energy-dissipative-discretization |

## Your content, in full

### `phase-field-and-energy-dissipative-discretization` — Phase-field and dissipative gradient-flow computation

- `def-phase-field-gradient-flow-and-double-well` · definition — Allen–Cahn and Cahn–Hilliard double-well gradient flows
- `def-phase-field-discrete-realizations` · definition — No-flux finite-volume and conforming realizations for phase fields
- `lem-phase-field-neumann-laplacian-kernel-and-gauge` · lemma — Kernel, range, and mean-zero inverse for the no-flux Laplacian
- `lem-phase-field-interval-p1-projector-stability` · lemma — Uniform interval stability of the phase-field L2 projector
- `def-phase-field-stabilized-semi-implicit-variant` · definition — Stabilized semi-implicit phase-field step
- `alg-phase-field-sav-cahn-hilliard-step` · algorithm — First-order scalar-auxiliary-variable Cahn–Hilliard step
- `alg-phase-field-convex-splitting-backward-euler` · algorithm — Backward-Euler convex splitting for Allen–Cahn and Cahn–Hilliard
- `thm-phase-field-sav-modified-energy-law` · theorem — The SAV step is uniquely solvable and dissipates a modified energy
- `thm-phase-field-convex-splitting-step-existence-and-energy` · theorem — Existence, uniqueness, mass conservation, and energy decay of a convex-splitting step
- `thm-phase-field-convex-splitting-ac-ch-time-error` · theorem — First-order time error under smooth fixed-mesh solutions
- `thm-phase-field-convex-splitting-mesh-time-convergence` · theorem — One-dimensional mesh and time convergence of convex-splitting phase flows

### `phase-field-and-energy-dissipative-discretization-examples` — Phase-field and dissipative gradient-flow computation — Examples

- `ex-phase-field-allen-cahn-stationary-front` · example — The one-dimensional Allen–Cahn double-well front
- `ex-phase-field-interface-width-and-grid-resolution` · example — Interface width and a grid that misses the transition
- `cex-phase-field-sav-modified-energy-not-physical-energy` · counterexample — Modified-energy decay alone does not imply physical-energy decay
- `ex-phase-field-ch-two-cell-energy-ledger` · example — A two-cell Cahn–Hilliard mass and energy ledger

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `phase-field-and-energy-dissipative-discretization` requires `finite-volume-diffusion-and-mimetic-fluxes`
- `phase-field-and-energy-dissipative-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
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
