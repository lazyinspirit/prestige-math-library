# Step 4 batch reviewer — batch **50**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **50**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["50"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 50 | `hhl-phase-estimation-linear-systems` | A | quantum-phase-estimation, amplitude-amplification, hamiltonian-simulation-and-product-formulas, the-spectral-theorem-and-singular-value-decomposition, inner-product-spaces-and-orthogonality, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, registers-tensor-products-and-partial-trace, pure-and-mixed-states-ensembles-and-schmidt-decomposition, controlled-gates-phase-and-entanglement, uniform-circuit-families-promise-problems-and-complexity, amplitude-estimation-and-counting, qubitization-and-optimal-hamiltonian-simulation, trigonometric-and-oscillatory-examples-in-one-variable |
| 50 | `hhl-phase-estimation-linear-systems-examples` | B | hhl-phase-estimation-linear-systems |

## Your content, in full

### `hhl-phase-estimation-linear-systems` — Phase-Estimation Linear-System Algorithms

- `def-qa-26-hhl-reciprocal-filter` · definition — Odd-well and even-ill reciprocal filter
- `def-qa-26-hhl-sine-window` · definition — Finite sine-window phase state
- `lem-qa-26-hermitian-dilation` · lemma — Hermitian dilation for a rectangular linear system
- `lem-qa-26-hhl-filter-geometry` · lemma — The reciprocal filter defines valid three-outcome amplitudes
- `def-qa-26-qlsp-task` · definition — Quantum linear-systems state-output task
- `lem-qa-26-hhl-filter-perturbation` · lemma — Relative stability of the HHL filter on supported eigenvalues
- `lem-qa-26-hhl-sine-window-prefix-masses` · lemma — Sine-window normalization and positive prefix weights
- `lem-qa-26-qlsp-target-is-well-defined` · lemma — The QLSP target is nonzero
- `lem-qa-26-hhl-prefix-table-synthesis-error` · lemma — Operator error for the finite sine-prefix rotation table
- `def-qa-26-hhl-access-model` · definition — HHL state-preparation and simulation access model
- `lem-qa-26-hhl-sine-window-kernel-moment` · lemma — Second moment of the signed sine-window phase kernel
- `lem-qa-26-phase-to-eigenvalue-unwrapping` · lemma — Signed phase decoding has no alias on the promised spectrum
- `lem-qa-26-hhl-capped-amplification` · lemma — Finite capped amplification succeeds with a supplied lower bound
- `alg-qa-26-hhl-phase-estimation` · algorithm — HHL finite sine-window phase-estimation algorithm
- `lem-qa-26-hhl-success-amplitude` · lemma — Ideal inverse amplitude and HHL postselection probability
- `thm-qa-26-hhl-amplified-postselection-cost` · theorem — HHL capped postselection amplification cost
- `thm-qa-26-hhl-simulator-cost` · theorem — HHL cost under direct controlled-simulation access
- `lem-qa-26-postselection-normalization-bound` · lemma — Normalization is stable under a small flagged-vector error
- `thm-qa-26-hhl-state-correctness` · theorem — OP5 HHL returns the QLSP state within the requested error
- `thm-qa-26-hhl-query-cost` · theorem — HHL sparse-query and state-preparation cost

### `hhl-phase-estimation-linear-systems-examples` — Phase-Estimation Linear-System Algorithms — Examples

- `cex-qa-26-hhl-classical-vector-output` · counterexample — State preparation does not print all coordinates
- `ex-qa-26-diagonal-hhl` · example — Two-eigenvalue HHL inversion

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hhl-phase-estimation-linear-systems` requires `quantum-phase-estimation`
- `hhl-phase-estimation-linear-systems` requires `amplitude-amplification`
- `hhl-phase-estimation-linear-systems` requires `hamiltonian-simulation-and-product-formulas`
- `hhl-phase-estimation-linear-systems` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `hhl-phase-estimation-linear-systems` requires `registers-tensor-products-and-partial-trace`
- `hhl-phase-estimation-linear-systems` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `hhl-phase-estimation-linear-systems` requires `controlled-gates-phase-and-entanglement`
- `hhl-phase-estimation-linear-systems` requires `uniform-circuit-families-promise-problems-and-complexity`
- `hhl-phase-estimation-linear-systems` requires `amplitude-estimation-and-counting`
- `hhl-phase-estimation-linear-systems` requires `qubitization-and-optimal-hamiltonian-simulation`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `hhl-phase-estimation-linear-systems`
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
