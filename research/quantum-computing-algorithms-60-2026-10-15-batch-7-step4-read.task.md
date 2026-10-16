# Step 4 batch reviewer — batch **7**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **7**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | A | finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, pure-and-mixed-states-ensembles-and-schmidt-decomposition, registers-tensor-products-and-partial-trace, the-spectral-theorem-and-singular-value-decomposition, strongly-continuous-semigroups-and-hille-yosida |
| 7 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples` | B | qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates |

## Your content, in full

### `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` — Qubits, Bloch Sphere, Pauli Algebra, and One-Qubit Gates

- `def-qc-qubit-and-bloch-representation` · definition — Qubit spaces and states
- `def-qc-pauli-matrices` · definition — The Pauli matrices
- `thm-qc-pauli-algebra` · theorem — Pauli matrix algebra and trace identities
- `def-qc-bloch-coordinate-map` · definition — Bloch coordinate maps
- `def-qc-one-qubit-gate-alphabet-and-rotations` · definition — Exact one-qubit gates and rotations
- `thm-qc-bloch-coordinate-existence-and-uniqueness` · theorem — Existence and uniqueness of Bloch coordinates
- `thm-qc-axis-rotation-pauli-formula` · theorem — Pauli formula for an axis rotation
- `thm-qc-hadamard-pauli-conjugation` · theorem — Hadamard conjugation of the Pauli matrices
- `thm-qc-bloch-positivity-ball` · theorem — The Bloch ball is exactly the qubit density-state space
- `thm-qc-bloch-purity-sphere` · theorem — Purity is the boundary of the Bloch ball

### `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples` — Qubits, Bloch Sphere, Pauli Algebra, and One-Qubit Gates — Examples

- `ex-qc-zero-plus-bloch-and-hadamard` · example — Bloch coordinates of |0> and H|0>

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `registers-tensor-products-and-partial-trace`
- `reversible-arithmetic-and-oracle-conversion` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `exact-oracle-algorithms` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-fourier-transform-circuits` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `grover-search-and-invariant-plane-rotations` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `amplitude-estimation-and-counting` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-optimization-sdp-and-variational-algorithms` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-optimization-sdp-and-variational-algorithms-examples` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `qma-verification-and-local-hamiltonian` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `controlled-gates-phase-and-entanglement` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `reversible-computation-ancillas-and-coherent-oracles` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `continuous-gate-universality-and-exact-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `approximate-universality-and-solovay-kitaev` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `clifford-t-exact-and-approximate-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `pauli-and-clifford-groups-binary-symplectic-tableaux` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `bell-states-teleportation-and-dense-coding` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-css-codes-syndromes-and-procedures` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `graph-states-and-measurement-based-computation` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `state-preparation-isometry-synthesis-and-limits` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
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
