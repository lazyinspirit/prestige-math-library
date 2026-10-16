# Step 4 batch reviewer — batch **31**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **31**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `quantum-phase-estimation` | A | uniform-circuit-families-promise-problems-and-complexity, quantum-fourier-transform-circuits, the-complex-exponential-and-eulers-formula, field-extensions-and-the-complex-numbers, registers-tensor-products-and-partial-trace, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, pure-and-mixed-states-ensembles-and-schmidt-decomposition, controlled-gates-phase-and-entanglement, circuit-syntax-denotational-semantics-and-measurement, measurements-povms-and-instruments, finite-fourier-analysis-and-the-fast-fourier-transform, the-spectral-theorem-and-singular-value-decomposition, trigonometric-and-oscillatory-examples-in-one-variable |
| 31 | `quantum-phase-estimation-examples` | B | quantum-phase-estimation |

## Your content, in full

### `quantum-phase-estimation` — Quantum Phase Estimation

- `lem-qa-phase-estimation-geometric-sum` · lemma — Finite geometric sum for phase-estimation amplitudes
- `lem-qa-phase-estimation-sine-chord-bounds` · lemma — Sine chord and linear bounds
- `def-qa-circular-phase-distance` · definition — Circular phase distance modulo one
- `def-qa-eigenphase-estimation-model` · definition — Eigenphase estimation access model
- `alg-qa-quantum-phase-estimation` · algorithm — Quantum phase estimation
- `lem-qa-phase-estimation-outcome-kernel` · lemma — Phase-estimation finite outcome law
- `thm-qa-phase-estimation-access-cost` · theorem — Phase-estimation query and gate costs
- `lem-qa-phase-estimation-nearest-grid-bound` · lemma — Nearest-grid probability in phase estimation
- `lem-qa-phase-estimation-tail-bound` · lemma — Circular-distance tail bound in phase estimation
- `thm-qa-phase-estimation-exact-grid` · theorem — Exact phase recovery on the QPE grid
- `thm-qa-phase-estimation-superposition-law` · theorem — Phase estimation on a superposition of eigenspaces
- `thm-qa-phase-estimation-success-and-tail` · theorem — Phase-estimation nearest-grid and tail bounds

### `quantum-phase-estimation-examples` — Quantum Phase Estimation — Examples

- `ex-qa-exact-phase-estimation` · example — Exact estimation of a binary phase
- `ex-qa-phase-estimation-nearest-grid-and-tail` · example — Nearest-grid and tail estimates in phase estimation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-phase-estimation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-phase-estimation` requires `quantum-fourier-transform-circuits`
- `quantum-phase-estimation` requires `registers-tensor-products-and-partial-trace`
- `quantum-phase-estimation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-phase-estimation` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-phase-estimation` requires `controlled-gates-phase-and-entanglement`
- `quantum-phase-estimation` requires `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-phase-estimation` requires `measurements-povms-and-instruments`
- `quantum-order-finding-and-rational-reconstruction` requires `quantum-phase-estimation`
- `amplitude-estimation-and-counting` requires `quantum-phase-estimation`
- `adversary-methods-and-quantum-query-complexity` requires `quantum-phase-estimation`
- `quantum-walk-search-and-element-distinctness` requires `quantum-phase-estimation`
- `hhl-phase-estimation-linear-systems` requires `quantum-phase-estimation`
- `quantum-spectral-estimation-and-matrix-functions` requires `quantum-phase-estimation`
- `quantum-optimization-sdp-and-variational-algorithms` requires `quantum-phase-estimation`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

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
