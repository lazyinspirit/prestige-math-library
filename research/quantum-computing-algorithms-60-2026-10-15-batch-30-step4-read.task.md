# Step 4 batch reviewer — batch **30**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **30**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `quantum-fourier-transform-circuits` | A | approximate-universality-and-solovay-kitaev, finite-fourier-analysis-and-the-fast-fourier-transform, roots-and-rational-powers, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, registers-tensor-products-and-partial-trace, finite-probability-spaces-and-random-variables, controlled-gates-phase-and-entanglement, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, circuit-syntax-denotational-semantics-and-measurement, the-spectral-theorem-and-singular-value-decomposition, inner-product-spaces-and-orthogonality, trigonometric-and-oscillatory-examples-in-one-variable |
| 30 | `quantum-fourier-transform-circuits-examples` | B | quantum-fourier-transform-circuits |

## Your content, in full

### `quantum-fourier-transform-circuits` — Quantum Fourier-Transform Circuits

- `thm-qa-projective-operator-closeness-bounds-output-distribution` · theorem — Projective operator closeness bounds output distributions
- `lem-qa-pi-over-two-exceeds-sqrt-two` · lemma — The half-turn constant exceeds $\sqrt2$
- `def-qa-cyclic-quantum-fourier-transform` · definition — Positive-sign cyclic quantum Fourier transform
- `lem-qa-binary-qft-product-factorization` · lemma — Binary factorization of QFT basis output
- `lem-qa-tensor-extension-preserves-operator-norm` · lemma — Operator Norm Is Unchanged by Spectator Registers
- `lem-qa-swap-is-three-cnot-circuit` · lemma — A SWAP Is Three CNOTs
- `def-qa-qft-gate-cost-model` · definition — QFT ideal and finite-set gate-cost models
- `alg-qa-exact-binary-qft-circuit` · algorithm — Exact binary QFT circuit
- `thm-qa-exact-binary-qft-circuit-correct` · theorem — Exact binary QFT circuit correctness
- `thm-qa-exact-binary-qft-gate-count` · theorem — Exact binary QFT ideal gate count
- `alg-qa-truncated-binary-qft-circuit` · algorithm — Truncated binary QFT
- `thm-qa-truncated-qft-operator-norm-error` · theorem — Operator-norm error of QFT truncation
- `thm-qa-truncated-qft-gate-count` · theorem — Truncated QFT ideal gate count
- `thm-qa-qft-finite-gate-set-compile-cost` · theorem — Finite universal-gate compilation cost for the truncated QFT

### `quantum-fourier-transform-circuits-examples` — Quantum Fourier-Transform Circuits — Examples

- `ex-qa-qft-fourier-circuit-order-and-truncation` · example — QFT circuit order and truncation examples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-fourier-transform-circuits` requires `approximate-universality-and-solovay-kitaev`
- `quantum-fourier-transform-circuits` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-fourier-transform-circuits` requires `registers-tensor-products-and-partial-trace`
- `quantum-fourier-transform-circuits` requires `controlled-gates-phase-and-entanglement`
- `quantum-fourier-transform-circuits` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-fourier-transform-circuits` requires `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-phase-estimation` requires `quantum-fourier-transform-circuits`
- `quantum-optimization-sdp-and-variational-algorithms` requires `quantum-fourier-transform-circuits`
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
