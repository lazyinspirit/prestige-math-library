# Step 4 batch reviewer — batch **45**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **45**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["45"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 45 | `lcu-oblivious-amplitude-amplification-and-taylor-simulation` | A | state-preparation-isometry-synthesis-and-limits, hamiltonian-simulation-and-product-formulas, reversible-computation-ancillas-and-coherent-oracles, controlled-gates-phase-and-entanglement, uniform-circuit-families-promise-problems-and-complexity, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, the-spectral-theorem-and-singular-value-decomposition, registers-tensor-products-and-partial-trace, the-complex-exponential-and-eulers-formula, classical-and-quantum-error-correcting-codes |
| 45 | `lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples` | B | lcu-oblivious-amplitude-amplification-and-taylor-simulation |

## Your content, in full

### `lcu-oblivious-amplitude-amplification-and-taylor-simulation` — Linear Combinations of Unitaries and Taylor Simulation

- `lem-qa-21-pure-state-trace-distance-from-vector-error` · lemma — Pure-state trace distance is bounded by vector error
- `def-qa-21-clean-ancilla-postselection` · definition — Clean-ancilla zero-branch postselection
- `lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians` · lemma — Partial trace contracts the trace norm on Hermitian operators
- `thm-qa-21-clean-ancilla-postselection-probability-law` · theorem — Clean-ancilla postselection has normalized branch weights
- `def-qa-21-lcu-input-and-access-model` · definition — LCU decomposition and access model
- `alg-qa-21-lcu-block-encoding` · algorithm — LCU block encoding
- `def-qa-21-oblivious-reflection` · definition — Oblivious ancilla reflection
- `def-qa-21-truncated-taylor-lcu` · definition — Finite Taylor LCU polynomial
- `thm-qa-21-lcu-block-correctness` · theorem — LCU projected-block and postselection correctness
- `alg-qa-21-one-step-oblivious-amplification` · algorithm — One-step oblivious amplitude amplification
- `thm-qa-21-taylor-tail-bound` · theorem — Taylor simulation tail bound
- `thm-qa-21-oblivious-amplification-block-identity` · theorem — Oblivious-amplification block identity
- `lem-qa-21-robust-one-step-oaa-isometry` · lemma — Robust one-step OAA including ancilla leakage
- `alg-qa-21-segmented-taylor-simulation` · algorithm — Segmented Taylor LCU simulator
- `thm-qa-21-taylor-simulation-error-and-cost` · theorem — Segmented Taylor error and resources

### `lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples` — Linear Combinations of Unitaries and Taylor Simulation — Examples

- `ex-qa-21-cancelling-normalization-padding` · example — Cancelling identity padding fixes the LCU scale
- `cex-qa-21-unknown-input-reflection` · counterexample — A preserved unknown state cannot program its own reflection
- `ex-qa-21-two-term-lcu-postselection` · example — Two-term LCU postselection is input dependent

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `state-preparation-isometry-synthesis-and-limits`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `hamiltonian-simulation-and-product-formulas`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `reversible-computation-ancillas-and-coherent-oracles`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `controlled-gates-phase-and-entanglement`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `registers-tensor-products-and-partial-trace`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `classical-and-quantum-error-correcting-codes`
- `qubitization-and-optimal-hamiltonian-simulation` requires `lcu-oblivious-amplitude-amplification-and-taylor-simulation`
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
