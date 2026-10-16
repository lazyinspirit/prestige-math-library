# Step 4 batch reviewer — batch **18**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **18**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["18"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 18 | `classical-and-quantum-error-correcting-codes` | A | algebraic-extensions-degree-and-finite-fields, congruences-and-the-chinese-remainder-theorem, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, registers-tensor-products-and-partial-trace, vector-spaces-and-subspaces |
| 18 | `classical-and-quantum-error-correcting-codes-examples` | B | classical-and-quantum-error-correcting-codes |

## Your content, in full

### `classical-and-quantum-error-correcting-codes` — Classical and Quantum Error-Correcting Codes

- `thm-qc-full-column-rank-matrix-image-has-dimension` · theorem — A full-column-rank matrix has image dimension equal to its number of columns
- `lem-qc-linear-isometry-preserves-inner-products` · lemma — Finite complex linear isometries preserve inner products
- `def-qc-classical-linear-code-over-finite-field` · definition — Classical linear code over a finite field
- `def-qc-dual-of-a-finite-field-linear-code` · definition — Bilinear dual of a finite-field linear code
- `def-qc-hamming-weight-distance-and-linear-code-distance` · definition — Hamming weight and distance of a finite-field linear code
- `def-qc-quantum-code-isometry-and-code-projector` · definition — Quantum code as an isometric encoding and its code projector
- `thm-qc-dual-code-dimension-and-double-dual` · theorem — Dimension and double-dual identity for finite-field code duals
- `thm-qc-hamming-distance-is-a-metric-and-code-distance` · theorem — Hamming distance is a metric and linear-code distance is minimum nonzero weight
- `thm-qc-isometric-encoding-projector` · theorem — An isometric quantum encoding gives an orthogonal code projector
- `def-qc-generator-and-parity-check-matrices` · definition — Generator and parity-check matrices over a finite field
- `def-qc-local-operator-support-and-weight` · definition — Support and weight of an operator on a finite register
- `lem-qc-classical-code-distance-disjoint-error-balls` · lemma — Hamming balls below half the code distance are disjoint
- `def-qc-quantum-code-distance-and-error-detection` · definition — Detectable operators and distance of a finite-register quantum code
- `lem-qc-local-operator-support-is-permutation-invariant` · lemma — Operator support weight is invariant under wire permutation
- `thm-qc-generator-and-parity-check-matrix-existence` · theorem — Every finite-field linear code has generator and parity-check matrices
- `def-qc-classical-error-syndrome` · definition — Syndrome of a received word over a finite field
- `lem-qc-detectability-is-linear-and-encoding-invariant` · lemma — Detectable operators form a subspace and quantum distance is well defined
- `lem-qc-classical-syndrome-is-error-only` · lemma — A received-word syndrome depends only on the error vector
- `lem-qc-equal-syndrome-errors-differ-by-a-codeword` · lemma — Equal classical syndromes imply a codeword difference
- `thm-qc-quantum-distance-detects-low-weight-errors` · theorem — Every operator below the quantum code distance is detectable
- `thm-qc-classical-distance-correction-and-erasure-radius` · theorem — Classical distance gives error detection, unique decoding, and erasure recovery
- `ex-qc-binary-repetition-code-syndrome-table` · example — Binary three-bit repetition code and its syndrome table

### `classical-and-quantum-error-correcting-codes-examples` — Classical and Quantum Error-Correcting Codes — Examples

- `ex-qc-quantum-repetition-projector-and-distance-boundary` · example — Quantum repetition subspace projector and a distance-one boundary error
- `ex-qc-binary-hamming-code-syndrome-table` · example — The binary [7,4,3] Hamming code and its single-error syndromes
- `ex-qc-repetition-three-syndrome-table` · example — Repetition-code syndrome, known erasures, and unlocated errors
- `ex-qc-short-reed-solomon-syndrome-table` · example — A short Reed–Solomon code over $F_5$ and its symbol-error syndromes

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `classical-and-quantum-error-correcting-codes` requires `registers-tensor-products-and-partial-trace`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `classical-and-quantum-error-correcting-codes`
- `knill-laflamme-recovery-and-subsystem-codes` requires `classical-and-quantum-error-correcting-codes`
- `stabilizer-css-codes-syndromes-and-procedures` requires `classical-and-quantum-error-correcting-codes`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `classical-and-quantum-error-correcting-codes`
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
