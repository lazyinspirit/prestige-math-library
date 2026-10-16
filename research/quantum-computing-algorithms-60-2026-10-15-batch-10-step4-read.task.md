# Step 4 batch reviewer — batch **10**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **10**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `reversible-computation-ancillas-and-coherent-oracles` | A | boolean-circuits-and-nonuniform-complexity, circuit-syntax-denotational-semantics-and-measurement, controlled-gates-phase-and-entanglement, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, registers-tensor-products-and-partial-trace, turing-machines-configurations-and-computation |
| 10 | `reversible-computation-ancillas-and-coherent-oracles-examples` | B | reversible-computation-ancillas-and-coherent-oracles |

## Your content, in full

### `reversible-computation-ancillas-and-coherent-oracles` — Reversible Computation, Ancillas, and Coherent Oracles

- `def-qc-clean-and-dirty-ancillas` · definition — Clean and dirty ancillas
- `def-qc-toffoli-and-fredkin` · definition — Toffoli and Fredkin gates
- `lem-qc-ancilla-identities-stable-under-reference-and-mixtures` · lemma — Clean and dirty ancilla identities extend to references and mixed states
- `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions` · lemma — X, CNOT, Toffoli, and Fredkin are involutions
- `alg-qc-reversible-embedding` · algorithm — Reversible embedding of a Boolean circuit
- `lem-qc-fresh-target-not-and-or-gadgets` · lemma — Fresh-target NOT and OR gadgets
- `lem-qc-toffoli-clean-target-and-uncomputation` · lemma — Toffoli computes into a clean target and uncomputes it
- `thm-qc-clean-uncomputation-restores-workspace` · theorem — Compute-copy-uncompute restores clean workspace
- `thm-qc-reversible-embedding-cost` · theorem — Gate, workspace, and serial-depth costs of reversible embedding
- `def-qc-coherent-function-oracle` · definition — Coherent XOR function oracle
- `thm-qc-reversible-embedding-parallel-depth` · theorem — Parallel depth of reversible Boolean embedding
- `thm-qc-reversible-xor-oracle-unitary` · theorem — A total Boolean XOR oracle is unitary and involutive
- `thm-qc-phase-kickback-from-xor-oracle` · theorem — Phase kickback from an XOR oracle
- `thm-qc-oracle-phase-query-cost-boundary` · theorem — Oracle phase queries and compiled gate costs are distinct

### `reversible-computation-ancillas-and-coherent-oracles-examples` — Reversible Computation, Ancillas, and Coherent Oracles — Examples

- `ex-qc-reversible-and-oracle-compute-copy-uncompute` · example — A reversible AND oracle with clean work

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `reversible-computation-ancillas-and-coherent-oracles` requires `circuit-syntax-denotational-semantics-and-measurement`
- `reversible-computation-ancillas-and-coherent-oracles` requires `controlled-gates-phase-and-entanglement`
- `reversible-computation-ancillas-and-coherent-oracles` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `reversible-computation-ancillas-and-coherent-oracles` requires `registers-tensor-products-and-partial-trace`
- `computational-problems-promises-and-cost-models` requires `reversible-computation-ancillas-and-coherent-oracles`
- `reversible-arithmetic-and-oracle-conversion` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-order-finding-and-rational-reconstruction` requires `reversible-computation-ancillas-and-coherent-oracles`
- `finite-abelian-hidden-subgroup-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles`
- `amplitude-amplification` requires `reversible-computation-ancillas-and-coherent-oracles`
- `adversary-methods-and-quantum-query-complexity` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-walk-search-and-element-distinctness` requires `reversible-computation-ancillas-and-coherent-oracles`
- `continuous-time-quantum-walks` requires `reversible-computation-ancillas-and-coherent-oracles`
- `hamiltonian-simulation-and-product-formulas` requires `reversible-computation-ancillas-and-coherent-oracles`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `reversible-computation-ancillas-and-coherent-oracles`
- `block-encodings` requires `reversible-computation-ancillas-and-coherent-oracles`
- `qubitization-and-optimal-hamiltonian-simulation` requires `reversible-computation-ancillas-and-coherent-oracles`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-optimization-sdp-and-variational-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles`
- `period-hidden-shift-and-number-theoretic-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-complexity-classes-and-oracle-separations` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-communication-and-fingerprinting` requires `reversible-computation-ancillas-and-coherent-oracles`
- `continuous-gate-universality-and-exact-synthesis` requires `reversible-computation-ancillas-and-coherent-oracles`
- `clifford-t-exact-and-approximate-synthesis` requires `reversible-computation-ancillas-and-coherent-oracles`
- `uniform-circuit-families-promise-problems-and-complexity` requires `reversible-computation-ancillas-and-coherent-oracles`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `reversible-computation-ancillas-and-coherent-oracles`
- `state-preparation-isometry-synthesis-and-limits` requires `reversible-computation-ancillas-and-coherent-oracles`
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
