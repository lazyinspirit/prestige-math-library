# Step 4 batch reviewer — batch **49**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **49**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `projection-and-pressure-correction-for-incompressible-flow` | A | preconditioner-algorithms-and-residual-metrics, energy-stable-incompressible-navier-stokes-discretization |
| 49 | `projection-and-pressure-correction-for-incompressible-flow-examples` | B | projection-and-pressure-correction-for-incompressible-flow |

## Your content, in full

### `projection-and-pressure-correction-for-incompressible-flow` — Projection, pressure correction and saddle-point solvers

- `def-na-periodic-staggered-grid-stokes-operators` · definition — Periodic staggered-grid velocity and pressure spaces
- `def-na-symmetric-saddle-point-system-and-block-preconditioners` · definition — Symmetric saddle-point system, Schur complement, and block preconditioners
- `lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare` · lemma — Periodic pressure Laplacian gauge, solvability, and uniform Poincare bound
- `lem-na-periodic-staggered-grid-smooth-sampling-consistency` · lemma — Second-order consistency of staggered periodic sampling
- `thm-na-saddle-point-exact-schur-solve` · theorem — Exact Schur solve for a full-row-rank symmetric saddle system
- `thm-na-pressure-schur-spectral-equivalence-from-infsup` · theorem — Pressure Schur equivalence from inf-sup, continuity, and stiffness scaling
- `alg-na-periodic-incremental-pressure-correction` · algorithm — Backward-Euler incremental pressure correction on a periodic staggered grid
- `alg-na-bdf2-incremental-and-rotational-pressure-correction` · algorithm — BDF2 standard and rotational incremental pressure-correction variants
- `thm-na-symmetrically-preconditioned-saddle-point-spectrum` · theorem — Spectrum of a symmetrically pressure-mass-preconditioned saddle system
- `thm-na-periodic-pressure-correction-solves-well-defined` · theorem — Well-definedness of the periodic pressure-correction solves
- `thm-na-periodic-discrete-helmholtz-projection` · theorem — Mass-orthogonal periodic discrete Helmholtz projection and exact incompressibility
- `thm-na-periodic-pressure-correction-modified-energy-identity` · theorem — Modified velocity-pressure energy identity for periodic pressure correction
- `thm-na-periodic-pressure-correction-first-order-velocity-error` · theorem — First-order velocity accuracy for smooth periodic Stokes data
- `cor-na-mini-element-pressure-mass-schur-bounds` · corollary — Steady MINI Stokes pressure-mass Schur bounds
- `cor-na-mini-element-pressure-mass-block-spectrum` · corollary — MINI Stokes block-preconditioned spectral intervals

### `projection-and-pressure-correction-for-incompressible-flow-examples` — Projection, pressure correction and saddle-point solvers — Examples

- `ex-na-wall-pressure-correction-tangential-velocity-defect` · example — A Neumann pressure correction can break tangential no-slip
- `cex-na-collocated-central-difference-checkerboard-pressure-mode` · counterexample — A collocated central gradient misses an alternating pressure mode
- `ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum` · example — A scalar saddle system has golden-ratio preconditioned eigenvalues
- `ex-na-periodic-single-mode-pressure-correction` · example — One staggered Fourier mode is removed exactly by pressure correction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `projection-and-pressure-correction-for-incompressible-flow` requires `energy-stable-incompressible-navier-stokes-discretization`
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
