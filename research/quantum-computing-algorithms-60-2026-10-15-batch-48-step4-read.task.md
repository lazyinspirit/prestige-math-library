# Step 4 batch reviewer — batch **48**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **48**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `quantum-singular-value-transformation` | A | block-encodings, quantum-signal-processing, the-spectral-theorem-and-singular-value-decomposition, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, inner-product-spaces-and-orthogonality, controlled-gates-phase-and-entanglement, circuit-syntax-denotational-semantics-and-measurement, uniform-circuit-families-promise-problems-and-complexity |
| 48 | `quantum-singular-value-transformation-examples` | B | quantum-singular-value-transformation |

## Your content, in full

### `quantum-singular-value-transformation` — Quantum Singular-Value Transformation

- `def-qa-24-pue-svd-data` · definition — Projected-unitary encoding and singular vectors
- `lem-qa-24-pue-svd-invariant-subspaces` · lemma — PUE singular-space invariant decomposition
- `def-qa-24-singular-value-transform` · definition — Odd and even singular-value transforms
- `alg-qa-24-qsvt` · algorithm — Quantum singular-value transformation circuit
- `lem-qa-24-singular-transform-basis-independence` · lemma — Singular-value transform is independent of SVD choices
- `thm-qa-24-projector-phase-implementation` · theorem — Projector phase operations from controlled reflections
- `thm-qa-24-qsvt-query-count` · theorem — QSVT signal and reflection query counts
- `thm-qa-24-qsvt-singular-space-action` · theorem — QSVT action on singular subspaces
- `lem-qa-24-qsvt-robustness-amplitude-bound` · lemma — Operator perturbation bound for QSVT
- `thm-qa-24-real-polynomial-extraction` · theorem — Real bounded polynomial extraction in QSVT
- `thm-qa-24-qsvt-error-and-resource-bound` · theorem — QSVT robustness, approximation error, and resources

### `quantum-singular-value-transformation-examples` — Quantum Singular-Value Transformation — Examples

- `cex-qa-24-parity-violation` · counterexample — Parity violation makes singular-value action basis dependent
- `ex-qa-24-rank-one-pue` · example — Rank-one PUE singular-plane calculation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-singular-value-transformation` requires `block-encodings`
- `quantum-singular-value-transformation` requires `quantum-signal-processing`
- `quantum-singular-value-transformation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-singular-value-transformation` requires `controlled-gates-phase-and-entanglement`
- `quantum-singular-value-transformation` requires `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-singular-value-transformation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-singular-value-transformation`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `quantum-singular-value-transformation`
- `quantum-spectral-estimation-and-matrix-functions` requires `quantum-singular-value-transformation`
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
