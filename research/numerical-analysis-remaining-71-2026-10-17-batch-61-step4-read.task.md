# Step 4 batch reviewer — batch **61**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **61**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["61"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 61 | `particle-in-cell-and-particle-mesh-kinetic-methods` | A | interacting-particle-mean-field-and-vortex-blob-error, elliptic-finite-difference-methods, spectral-collocation-and-galerkin-methods |
| 61 | `particle-in-cell-and-particle-mesh-kinetic-methods-examples` | B | particle-in-cell-and-particle-mesh-kinetic-methods |

## Your content, in full

### `particle-in-cell-and-particle-mesh-kinetic-methods` — Particle in cell and particle mesh kinetic methods

- `def-periodic-pic-grid-and-inner-product` · definition — Periodic uniform PIC grid and inner product
- `lem-periodic-composite-trapezoid-error` · lemma — Composite periodic trapezoidal error in a uniform tensor grid
- `def-periodic-pic-shape-assignment-and-gather` · definition — Periodic PIC deposition shape and gather operators
- `thm-periodic-centered-difference-poisson-zero-mode-and-gauge` · theorem — Periodic centered-difference Poisson solvability and zero-mean gauge
- `thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint` · theorem — The periodic Poisson mean-zero pseudoinverse is linear and self-adjoint
- `alg-periodic-pic-zero-mean-poisson-solver` · algorithm — Fourier diagonal solver for the periodic centered-difference Poisson equation
- `thm-periodic-pic-charge-conservation-and-neutralized-source` · theorem — Periodic PIC deposition conserves charge and satisfies Poisson compatibility
- `thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth` · theorem — Periodic PIC regularization gives a smooth compatible Poisson solution
- `thm-periodic-pic-deposition-potential-gather-adjointness` · theorem — Periodic PIC deposition and potential gather are adjoint
- `lem-periodic-pic-smooth-assignment-weights` · lemma — Smooth periodic PIC assignment weights have bounded derivatives
- `thm-periodic-pic-poisson-residual-to-gathered-force-bound` · theorem — Periodic Poisson residual controls the gathered particle force
- `def-periodic-pic-regularized-grid-interaction-kernel` · definition — Fixed-regularization periodic PIC pair kernel
- `lem-periodic-pic-shape-partition-and-quadrature-bound` · lemma — Partition and quadrature bounds for a periodic PIC shape
- `thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution` · theorem — The periodic PIC Poisson algorithm returns the unique gauged solution
- `alg-periodic-pic-classical-rk4-step` · algorithm — Classical RK4 step for the fixed-grid regularized PIC particle ODE
- `def-periodic-pic-separable-hamiltonian-grid-model` · definition — Matched variational Hamiltonian branch for periodic PIC
- `thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz` · theorem — Fixed-regularization periodic PIC kernels are globally Lipschitz
- `thm-periodic-pic-smooth-density-grid-force-consistency` · theorem — Fixed-regularization periodic PIC force consistency on a smooth density
- `thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy` · theorem — The matched periodic PIC grid force is a gradient and its ODE conserves energy
- `thm-periodic-pic-mean-field-error-with-force-defect` · theorem — Periodic PIC particle and force errors under a prescribed initial coupling
- `thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube` · theorem — Fourth-order RK4 trajectory error for the fixed-grid periodic PIC ODE
- `thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error` · theorem — Leapfrog geometry and finite-time order for the matched periodic PIC Hamiltonian
- `thm-periodic-pic-staged-fixed-regularization-error-budget` · theorem — Staged fixed-regularization PIC error budget

### `particle-in-cell-and-particle-mesh-kinetic-methods-examples` — Particle in cell and particle mesh kinetic methods — Examples

- `ex-periodic-high-frequency-pic-sampling-alias` · example — A high Fourier mode aliases to a different periodic PIC grid force
- `cex-periodic-nonneutral-source-has-no-poisson-solution` · counterexample — A periodic Poisson source without neutralization is incompatible
- `ex-periodic-one-dimensional-pic-cic-charge-deposition` · example — One-dimensional periodic CIC deposition and adjoint potential gather
- `ex-cold-two-stream-stipulated-pic-experiment` · example — A stipulated cold two-stream periodic PIC experiment
- `ex-periodic-smooth-density-poisson-grid-force-error` · example — A manufactured smooth periodic density for the PIC grid-force estimate
- `ex-periodic-pic-leapfrog-energy-drift-for-a-harmonic-mode` · example — Leapfrog changes the energy of an exact harmonic test mode

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
