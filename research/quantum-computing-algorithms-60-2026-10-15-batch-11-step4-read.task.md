# Step 4 batch reviewer — batch **11**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **11**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `continuous-gate-universality-and-exact-synthesis` | A | circuit-syntax-denotational-semantics-and-measurement, controlled-gates-phase-and-entanglement, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, registers-tensor-products-and-partial-trace, reversible-computation-ancillas-and-coherent-oracles, root-systems-dynkin-diagrams-and-cartan-killing-classification, sard-theorem-and-transversality, the-spectral-theorem-and-singular-value-decomposition, reeb-stability-and-global-foliation-constructions, haar-measure-existence-and-uniqueness |
| 11 | `continuous-gate-universality-and-exact-synthesis-examples` | B | continuous-gate-universality-and-exact-synthesis |

## Your content, in full

### `continuous-gate-universality-and-exact-synthesis` — Continuous-Gate Universality and Exact Synthesis

- `def-qc-global-phase-equivalence` · definition — Global Phase Equivalence
- `lem-qc-two-unitary-block-demultiplexing` · lemma — Demultiplexing a Two-Block Unitary
- `lem-qc-unitary-group-cayley-charts` · lemma — Cayley Charts on the Unitary Matrix Group
- `thm-qc-cosine-sine-block-decomposition` · theorem — Cosine-Sine Block Decomposition
- `def-qc-two-level-unitary` · definition — Two-Level Unitary
- `alg-qc-two-level-unitary-elimination` · algorithm — Exact Two-Level Elimination of a Unitary
- `thm-qc-two-level-unitary-elimination-correct` · theorem — Correctness and Termination of Two-Level Elimination
- `thm-qc-one-qubit-euler-decomposition` · theorem — One-Qubit Euler Decomposition
- `thm-qc-two-qubit-cartan-decomposition` · theorem — Exact Two-Qubit Cartan Decomposition
- `lem-qc-global-phase-under-control` · lemma — Global Phase Under Control
- `lem-qc-generic-cnot-parameter-count` · lemma — Parameter Count for a Fixed CNOT Skeleton
- `lem-qc-multiplexed-axis-rotation-gray-code` · lemma — Gray-Code Synthesis of a Multiplexed Axis Rotation
- `thm-qc-one-control-unitary-two-cnot` · theorem — Exact Controlled One-Qubit Unitary with Two CNOTs
- `thm-qc-two-qubit-unitary-three-cnot-synthesis` · theorem — Exact Three-CNOT Synthesis of Two-Qubit Unitaries
- `lem-qc-terminal-diagonal-migration` · lemma — Two-CNOT Synthesis up to a Migrating Terminal Diagonal
- `lem-qc-recursive-qsd-central-cz-absorption` · lemma — Exact Central Controlled-Z Absorption at a QSD Node
- `thm-qc-generic-unitary-cnot-lower-bound` · theorem — Generic No-Ancilla CNOT Lower Bound
- `lem-qc-borrowed-bit-multicontrolled-x-linear` · lemma — Linear Multicontrolled X with One Borrowed Wire
- `thm-qc-exact-arbitrary-unitary-qsd-upper-bound` · theorem — Exact QSD CNOT Upper Bound
- `thm-qc-multicontrolled-ancilla-resource-tradeoff` · theorem — Multicontrolled Unitaries with and without a Clean Work Bit
- `alg-qc-two-level-gate-to-elementary-gates` · algorithm — Gray-Path Synthesis of a Two-Level Gate
- `thm-qc-two-level-gate-synthesis-correct` · theorem — Correctness of Gray-Path Two-Level Synthesis

### `continuous-gate-universality-and-exact-synthesis-examples` — Continuous-Gate Universality and Exact Synthesis — Examples

- `ex-qc-two-level-unitary-synthesis` · example — A Two-Level Rotation on Two Qubits

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `continuous-gate-universality-and-exact-synthesis` requires `circuit-syntax-denotational-semantics-and-measurement`
- `continuous-gate-universality-and-exact-synthesis` requires `controlled-gates-phase-and-entanglement`
- `continuous-gate-universality-and-exact-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `continuous-gate-universality-and-exact-synthesis` requires `registers-tensor-products-and-partial-trace`
- `continuous-gate-universality-and-exact-synthesis` requires `reversible-computation-ancillas-and-coherent-oracles`
- `approximate-universality-and-solovay-kitaev` requires `continuous-gate-universality-and-exact-synthesis`
- `clifford-t-exact-and-approximate-synthesis` requires `continuous-gate-universality-and-exact-synthesis`
- `uniform-circuit-families-promise-problems-and-complexity` requires `continuous-gate-universality-and-exact-synthesis`
- `graph-states-and-measurement-based-computation` requires `continuous-gate-universality-and-exact-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `continuous-gate-universality-and-exact-synthesis`
- `state-preparation-isometry-synthesis-and-limits` requires `continuous-gate-universality-and-exact-synthesis`
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
