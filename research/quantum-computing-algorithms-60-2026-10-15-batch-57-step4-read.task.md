# Step 4 batch reviewer — batch **57**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **57**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["57"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 57 | `qma-verification-and-local-hamiltonian` | A | uniform-circuit-families-promise-problems-and-complexity, the-spectral-theorem-and-singular-value-decomposition, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, the-polynomial-hierarchy-and-relativization, pure-and-mixed-states-ensembles-and-schmidt-decomposition, measurements-povms-and-instruments, registers-tensor-products-and-partial-trace, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, approximate-universality-and-solovay-kitaev, randomized-complexity-and-amplification, matrices-and-the-matrix-of-a-linear-map, effective-numberings-reductions-resources-and-randomness |
| 57 | `qma-verification-and-local-hamiltonian-examples` | B | qma-verification-and-local-hamiltonian |

## Your content, in full

### `qma-verification-and-local-hamiltonian` — QMA Verification and Local Hamiltonian

- `def-qa-33-effective-finite-matrix-encoding` · definition — Effective finite matrix encodings for local Hamiltonians
- `lem-qa-33-bernstein-square-root-bound` · lemma — Bernstein approximation to the square root
- `lem-qa-33-near-unitary-polar-correction` · lemma — Polar correction of a near-unitary matrix
- `lem-qa-33-projection-lemma` · lemma — Projection lemma for a large penalty
- `lem-qa-33-normalized-clifford-t-su2-package-dense` · lemma — Dense normalized one-qubit Clifford–T package
- `def-qa-33-k-local-hamiltonian-promise` · definition — Encoded k-local Hamiltonian promise problem
- `def-qa-33-witness-verifier-interface` · definition — Uniform verifier interface with a quantum witness
- `lem-qa-33-finite-dimensional-unitary-synthesis` · lemma — Effective synthesis of fixed-dimensional unitaries
- `lem-qa-33-algebraic-term-rationalization` · lemma — Rational encoding preserves a promised local-Hamiltonian gap
- `lem-qa-33-fixed-arity-local-measurement-synthesis` · lemma — Uniform finite-arity local-energy measurement synthesis
- `lem-qa-33-uniform-programmed-circuit-interpreter` · lemma — Uniform interpretation of an input-generated quantum circuit
- `lem-qa-33-witness-acceptance-effect` · lemma — A finite verifier induces an effect on its witness
- `def-qa-33-qma-promise-class` · definition — QMA promise class with a verifier effect on witnesses
- `alg-qa-33-qma-parallel-majority-amplification` · algorithm — QMA parallel repetition with a midpoint threshold
- `def-qa-33-feynman-kitaev-history-hamiltonian` · definition — Feynman–Kitaev history Hamiltonian
- `def-qa-33-qma-completeness` · definition — QMA completeness under promise-preserving reductions
- `thm-qa-33-pure-witness-suffices` · theorem — A pure witness suffices for a QMA completeness threshold
- `lem-qa-33-feynman-propagation-path-gap` · lemma — Propagation kernel and path-Laplacian gap
- `lem-qa-33-kkr-legal-clock-restriction` · lemma — KKR restriction to legal unary clocks
- `thm-qa-33-qma-amplification-entangled-witness-soundness` · theorem — Parallel QMA amplification remains sound for entangled witnesses
- `lem-qa-33-feynman-input-output-penalties` · lemma — Input and output penalties on history states
- `lem-qa-33-kkr-one-qubit-propagation-restriction` · lemma — KKR restriction to correct one-qubit propagation
- `thm-qa-33-local-hamiltonian-in-qma` · theorem — The encoded Local Hamiltonian problem belongs to QMA
- `lem-qa-33-geometric-soundness-bound` · lemma — Geometric soundness bound for a history Hamiltonian
- `lem-qa-33-kkr-two-qubit-propagation-restriction` · lemma — KKR restriction to correct two-qubit propagation
- `lem-qa-33-unary-clock-locality` · lemma — Unary clock legality and 5-locality
- `lem-qa-33-kkr-initial-state-restriction` · lemma — KKR restriction to correctly initialized witness histories
- `thm-qa-33-5-local-hamiltonian-qma-complete` · theorem — 5-Local Hamiltonian is QMA-complete
- `thm-qa-33-2-local-hamiltonian-qma-complete` · theorem — 2-Local Hamiltonian is QMA-complete

### `qma-verification-and-local-hamiltonian-examples` — QMA Verification and Local Hamiltonian — Examples

- `ex-qa-33-one-qubit-history-energy` · example — One-gate history Hamiltonian energy check

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qma-verification-and-local-hamiltonian` requires `uniform-circuit-families-promise-problems-and-complexity`
- `qma-verification-and-local-hamiltonian` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qma-verification-and-local-hamiltonian` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `qma-verification-and-local-hamiltonian` requires `measurements-povms-and-instruments`
- `qma-verification-and-local-hamiltonian` requires `registers-tensor-products-and-partial-trace`
- `qma-verification-and-local-hamiltonian` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `qma-verification-and-local-hamiltonian` requires `approximate-universality-and-solovay-kitaev`
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
