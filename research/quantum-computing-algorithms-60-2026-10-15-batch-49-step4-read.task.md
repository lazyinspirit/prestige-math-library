# Step 4 batch reviewer — batch **49**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **49**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `qubitization-and-optimal-hamiltonian-simulation` | A | hamiltonian-simulation-and-product-formulas, quantum-singular-value-transformation, block-encodings, quantum-signal-processing, controlled-gates-phase-and-entanglement, uniform-circuit-families-promise-problems-and-complexity, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, continuous-time-quantum-walks, the-complex-exponential-and-eulers-formula, the-polynomial-hierarchy-and-relativization, reversible-computation-ancillas-and-coherent-oracles, state-preparation-isometry-synthesis-and-limits, lcu-oblivious-amplitude-amplification-and-taylor-simulation |
| 49 | `qubitization-and-optimal-hamiltonian-simulation-examples` | B | qubitization-and-optimal-hamiltonian-simulation |

## Your content, in full

### `qubitization-and-optimal-hamiltonian-simulation` — Qubitization and Near-Optimal Hamiltonian Simulation

- `lem-qa-25-isometry-error-implies-trace-distance` · lemma — Clean-input isometry error bounds output trace distance
- `lem-qa-25-parity-path-transfer` · lemma — Sparse parity-path transfer and norm
- `def-qa-25-qubitization-access-model` · definition — Qubitization access model
- `def-qa-25-hamiltonian-simulation-polynomial` · definition — Hamiltonian-simulation polynomial target
- `lem-qa-25-hermitian-block-encoding-signal-subspaces` · lemma — Hermitian block-encoding signal subspaces
- `thm-qa-25-qubitization-signal-sequence` · theorem — Qubitization lifts scalar QSP
- `thm-qa-25-bounded-error-parity-query-lower-bound` · theorem — Bounded-error parity query lower bound
- `alg-qa-25-qubitized-hamiltonian-simulation` · algorithm — Qubitized Hamiltonian simulator
- `lem-qa-25-sorted-xor-sparse-access-isometries` · lemma — Clean sparse-state preparation from sorted XOR locations
- `lem-qa-25-clean-subspace-unitary-hybrid` · lemma — Unitary hybrids on a preserved clean-work subspace
- `alg-qa-25-sparse-hamiltonian-block-encoding` · algorithm — Sparse Hermitian block encoding
- `thm-qa-25-sparse-no-fast-forwarding-lower-bound` · theorem — Sparse Hamiltonian no-fast-forwarding
- `alg-qa-25-small-time-aware-simulator` · algorithm — Small-time-aware qubitized simulator
- `thm-qa-25-sparse-hamiltonian-block-encoding-correctness` · theorem — Correctness and access cost of sparse block encoding
- `lem-qa-25-jacobi-anger-truncation` · lemma — Jacobi–Anger Chebyshev truncation
- `thm-qa-25-qubitized-simulation-correctness` · theorem — Near-optimal simulation correctness
- `thm-qa-25-small-time-aware-simulator-correctness` · theorem — Correctness of the small-time-aware simulator
- `thm-qa-25-qubitized-simulation-resource-bound` · theorem — Qubitization query and gate resources

### `qubitization-and-optimal-hamiltonian-simulation-examples` — Qubitization and Near-Optimal Hamiltonian Simulation — Examples

- `ex-qa-25-two-dimensional-block-encoding` · example — Two-dimensional Hermitian block-encoding signal
- `ex-qa-25-parity-no-fast-forwarding` · example — Two-bit parity path and sparse normalization
- `ex-qa-25-chebyshev-truncation` · example — Low-degree Chebyshev simulation polynomial

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qubitization-and-optimal-hamiltonian-simulation` requires `hamiltonian-simulation-and-product-formulas`
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-singular-value-transformation`
- `qubitization-and-optimal-hamiltonian-simulation` requires `block-encodings`
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-signal-processing`
- `qubitization-and-optimal-hamiltonian-simulation` requires `controlled-gates-phase-and-entanglement`
- `qubitization-and-optimal-hamiltonian-simulation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `qubitization-and-optimal-hamiltonian-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qubitization-and-optimal-hamiltonian-simulation` requires `continuous-time-quantum-walks`
- `qubitization-and-optimal-hamiltonian-simulation` requires `reversible-computation-ancillas-and-coherent-oracles`
- `qubitization-and-optimal-hamiltonian-simulation` requires `state-preparation-isometry-synthesis-and-limits`
- `qubitization-and-optimal-hamiltonian-simulation` requires `lcu-oblivious-amplitude-amplification-and-taylor-simulation`
- `hhl-phase-estimation-linear-systems` requires `qubitization-and-optimal-hamiltonian-simulation`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `qubitization-and-optimal-hamiltonian-simulation`
- `quantum-optimization-sdp-and-variational-algorithms` requires `qubitization-and-optimal-hamiltonian-simulation`
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
