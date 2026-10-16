# Step 4 batch reviewer — batch **26**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **26**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["26"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 26 | `reversible-arithmetic-and-oracle-conversion` | A | computational-problems-promises-and-cost-models, congruences-and-the-chinese-remainder-theorem, reversible-computation-ancillas-and-coherent-oracles, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, registers-tensor-products-and-partial-trace, controlled-gates-phase-and-entanglement, pure-and-mixed-states-ensembles-and-schmidt-decomposition, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, circuit-syntax-denotational-semantics-and-measurement |
| 26 | `reversible-arithmetic-and-oracle-conversion-examples` | B | reversible-arithmetic-and-oracle-conversion |

## Your content, in full

### `reversible-arithmetic-and-oracle-conversion` — Reversible Arithmetic and Oracle Conversion

- `def-qa-binary-field-f2` · definition — Binary residue carrier and operations
- `def-qa-binary-dot-product` · definition — Binary dot product as parity
- `alg-qa-reversible-binary-dot-product` · algorithm — Reversible binary dot-product query
- `thm-qa-reversible-binary-dot-product-correct-and-cost` · theorem — Reversible binary dot product: correctness and exact cost
- `def-qa-standard-bit-query` · definition — Standard bit-flip query convention
- `def-qa-phase-query` · definition — Binary phase-query convention
- `thm-qa-phase-kickback` · theorem — Phase kickback from the standard bit query
- `thm-qa-compute-copy-uncompute-clean-query` · theorem — Compute-copy-uncompute yields a clean coherent function query
- `thm-qa-global-phase-under-control` · theorem — A constant phase query is invisible alone and relative under control
- `thm-qa-bit-query-to-phase-query` · theorem — One standard query implements one phase query
- `thm-qa-controlled-phase-query-to-bit-query` · theorem — Controlled phase access implements a standard bit query

### `reversible-arithmetic-and-oracle-conversion-examples` — Reversible Arithmetic and Oracle Conversion — Examples

- `ex-qa-oracle-conversion-and-uncomputation` · example — Oracle conversion and uncomputation examples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `reversible-arithmetic-and-oracle-conversion` requires `computational-problems-promises-and-cost-models`
- `reversible-arithmetic-and-oracle-conversion` requires `reversible-computation-ancillas-and-coherent-oracles`
- `reversible-arithmetic-and-oracle-conversion` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `reversible-arithmetic-and-oracle-conversion` requires `registers-tensor-products-and-partial-trace`
- `reversible-arithmetic-and-oracle-conversion` requires `controlled-gates-phase-and-entanglement`
- `reversible-arithmetic-and-oracle-conversion` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `reversible-arithmetic-and-oracle-conversion` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `reversible-arithmetic-and-oracle-conversion` requires `circuit-syntax-denotational-semantics-and-measurement`
- `exact-oracle-algorithms` requires `reversible-arithmetic-and-oracle-conversion`
- `simon-algorithm-and-finite-field-recovery` requires `reversible-arithmetic-and-oracle-conversion`
- `grover-search-and-invariant-plane-rotations` requires `reversible-arithmetic-and-oracle-conversion`
- `amplitude-estimation-and-counting` requires `reversible-arithmetic-and-oracle-conversion`
- `quantum-query-lower-bounds-and-search-optimality` requires `reversible-arithmetic-and-oracle-conversion`
- `polynomial-method-and-approximate-degree` requires `reversible-arithmetic-and-oracle-conversion`
- `adversary-methods-and-quantum-query-complexity` requires `reversible-arithmetic-and-oracle-conversion`
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
