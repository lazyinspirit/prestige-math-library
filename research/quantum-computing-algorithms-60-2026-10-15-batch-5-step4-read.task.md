# Step 4 batch reviewer — batch **5**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **5**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["5"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 5 | `channels-kraus-choi-and-stinespring-representations` | A | finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, inner-product-spaces-and-orthogonality, linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, measurements-povms-and-instruments, pure-and-mixed-states-ensembles-and-schmidt-decomposition, registers-tensor-products-and-partial-trace, the-spectral-theorem-and-singular-value-decomposition |
| 5 | `channels-kraus-choi-and-stinespring-representations-examples` | B | channels-kraus-choi-and-stinespring-representations |

## Your content, in full

### `channels-kraus-choi-and-stinespring-representations` — Channels, Kraus, Choi, and Stinespring Representations

- `def-qc-kraus-representation` · definition — Finite Kraus representation
- `lem-qc-linear-isometry-adjoint-identities` · lemma — Finite-dimensional linear isometries satisfy the adjoint identity
- `def-qc-unitary-conjugation-channel` · definition — Unitary conjugation map
- `thm-qc-trace-preserving-kraus-normalization` · theorem — Trace preservation is Kraus normalization
- `prop-qc-unitary-conjugation-global-phase-invariant` · proposition — Unitary conjugation is invariant under a global phase
- `def-qc-choi-matrix` · definition — Choi matrix with input factor first
- `def-qc-isometric-stinespring-representation` · definition — Isometric Stinespring representation
- `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis` · lemma — Tensor products of operator matrix units form a basis
- `lem-qc-positive-choi-matrix-yields-kraus-operators` · lemma — A positive Choi matrix yields finite Kraus operators
- `def-qc-quantum-channel` · definition — Finite-dimensional quantum channel
- `lem-qc-complete-positivity-implies-choi-positivity` · lemma — Complete positivity implies Choi positivity
- `thm-qc-kraus-map-completely-positive` · theorem — A finite Kraus sum is completely positive
- `thm-qc-isometry-partial-trace-is-channel` · theorem — An isometry followed by partial trace is a channel
- `thm-qc-kraus-choi-equivalence` · theorem — Kraus and Choi characterizations of complete positivity
- `prop-qc-unitary-conjugation-is-channel` · proposition — Unitary conjugation is a channel
- `thm-qc-channels-compose-and-tensor` · theorem — Finite-dimensional channels compose and tensor
- `thm-qc-choi-trace-preservation-condition` · theorem — The Choi partial trace characterizes trace preservation
- `thm-qc-finite-stinespring-dilation` · theorem — Every finite-dimensional channel has a finite isometric dilation
- `thm-qc-finite-kraus-choi-stinespring-equivalence` · theorem — Finite channel, Kraus, Choi, and Stinespring equivalence

### `channels-kraus-choi-and-stinespring-representations-examples` — Channels, Kraus, Choi, and Stinespring Representations — Examples

- `ex-qc-dephasing-channel-kraus-choi` · example — Qubit dephasing channel in Kraus and Choi forms

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `channels-kraus-choi-and-stinespring-representations` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `channels-kraus-choi-and-stinespring-representations` requires `measurements-povms-and-instruments`
- `channels-kraus-choi-and-stinespring-representations` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `channels-kraus-choi-and-stinespring-representations` requires `registers-tensor-products-and-partial-trace`
- `quantum-optimization-sdp-and-variational-algorithms` requires `channels-kraus-choi-and-stinespring-representations`
- `algorithm-composition-precision-and-dequantization` requires `channels-kraus-choi-and-stinespring-representations`
- `trace-distance-fidelity-and-information-limits` requires `channels-kraus-choi-and-stinespring-representations`
- `circuit-syntax-denotational-semantics-and-measurement` requires `channels-kraus-choi-and-stinespring-representations`
- `knill-laflamme-recovery-and-subsystem-codes` requires `channels-kraus-choi-and-stinespring-representations`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `channels-kraus-choi-and-stinespring-representations`
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
