# Step 4 batch reviewer — batch **44**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **44**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `hamiltonian-simulation-and-product-formulas` | A | continuous-time-quantum-walks, uniform-circuit-families-promise-problems-and-complexity, controlled-gates-phase-and-entanglement, the-spectral-theorem-and-singular-value-decomposition, reversible-computation-ancillas-and-coherent-oracles |
| 44 | `hamiltonian-simulation-and-product-formulas-examples` | B | hamiltonian-simulation-and-product-formulas |

## Your content, in full

### `hamiltonian-simulation-and-product-formulas` — Hamiltonian Simulation and Product Formulas

- `def-qa-20-simulation-error-and-cost-model` · definition — Hamiltonian simulation error and resources
- `def-qa-20-term-list-access-model` · definition — Term-list Hamiltonian access
- `def-qa-20-sparse-hamiltonian-oracle-model` · definition — Sparse Hamiltonian row and value oracles
- `def-qa-20-first-order-product-formula` · definition — First-order Lie product formula
- `def-qa-20-symmetric-second-order-formula` · definition — Symmetric second-order product formula
- `rem-qa-20-higher-order-formula-proof-obligations` · remark — Scope of higher-order Suzuki claims
- `thm-qa-20-first-order-commutator-error` · theorem — First-order commutator error
- `alg-qa-20-first-order-term-list-simulation` · algorithm — First-order term-list simulator
- `thm-qa-20-second-order-conservative-error` · theorem — Conservative second-order error
- `alg-qa-20-suzuki-recursive-product-formula` · algorithm — Finite higher-order Suzuki product formula
- `thm-qa-20-first-order-resource-bound` · theorem — First-order query and gate cost
- `lem-qa-20-suzuki-order-cancellation` · lemma — Suzuki recursive cancellation of error terms
- `thm-qa-20-suzuki-conservative-error-and-resources` · theorem — Higher-order product-formula error with explicit term counts

### `hamiltonian-simulation-and-product-formulas-examples` — Hamiltonian Simulation and Product Formulas — Examples

- `ex-qa-20-commuting-two-term-simulation` · example — Exact simulation of two commuting terms
- `cex-qa-20-sparse-oracle-does-not-give-term-list` · counterexample — Sparse access need not give a short term list
- `ex-qa-20-noncommuting-pauli-error` · example — First-order error for two Pauli terms

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hamiltonian-simulation-and-product-formulas` requires `continuous-time-quantum-walks`
- `hamiltonian-simulation-and-product-formulas` requires `uniform-circuit-families-promise-problems-and-complexity`
- `hamiltonian-simulation-and-product-formulas` requires `controlled-gates-phase-and-entanglement`
- `hamiltonian-simulation-and-product-formulas` requires `reversible-computation-ancillas-and-coherent-oracles`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `hamiltonian-simulation-and-product-formulas`
- `qubitization-and-optimal-hamiltonian-simulation` requires `hamiltonian-simulation-and-product-formulas`
- `hhl-phase-estimation-linear-systems` requires `hamiltonian-simulation-and-product-formulas`
- `quantum-spectral-estimation-and-matrix-functions` requires `hamiltonian-simulation-and-product-formulas`
- `adiabatic-computation-and-circuit-equivalence` requires `hamiltonian-simulation-and-product-formulas`
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
