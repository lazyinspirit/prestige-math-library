# Step 4 batch reviewer — batch **2**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **2**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `registers-tensor-products-and-partial-trace` | A | finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, tensor-products-of-modules, the-spectral-theorem-and-singular-value-decomposition |
| 2 | `registers-tensor-products-and-partial-trace-examples` | B | registers-tensor-products-and-partial-trace |

## Your content, in full

### `registers-tensor-products-and-partial-trace` — Registers, Tensor Products, and Partial Trace

- `def-qc-register-and-computational-basis` · definition — Finite registers and their ordered computational bases
- `lem-qc-trace-pairing-nondegenerate` · lemma — The trace pairing on a finite endomorphism space is nondegenerate
- `def-qc-ordered-bitstring-encoding` · definition — Big-endian encoding of ordered bit strings
- `def-qc-tensor-register-and-permutation` · definition — Ordered tensor registers, their inner product, and wire permutations
- `thm-qc-computational-basis-orthonormal` · theorem — The computational basis is orthonormal
- `def-qc-partial-trace` · definition — Partial trace over a finite tensor factor
- `def-qc-tensor-map` · definition — Tensor products of finitely many linear maps
- `lem-qc-tensor-product-basis-and-dimension` · lemma — The product basis is orthonormal and tensor dimensions multiply
- `thm-qc-bitstring-index-is-bijection` · theorem — Big-endian bit-string indices are bijective
- `thm-qc-partial-trace-characterization-and-basis-independence` · theorem — The partial trace is characterized by the trace pairing and is basis-independent
- `thm-qc-tensor-map-composition-and-adjoint` · theorem — Tensor maps preserve composition, identities, and adjoints
- `thm-qc-wire-permutation-is-unitary` · theorem — Finite wire permutations are unitary basis permutations
- `thm-qc-partial-trace-positive-and-trace-preserving` · theorem — The partial trace preserves non-negativity and total trace

### `registers-tensor-products-and-partial-trace-examples` — Registers, Tensor Products, and Partial Trace — Examples

- `ex-qc-register-endian-partial-trace` · example — Register endianness and a two-qubit partial trace

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `registers-tensor-products-and-partial-trace` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `computational-problems-promises-and-cost-models` requires `registers-tensor-products-and-partial-trace`
- `reversible-arithmetic-and-oracle-conversion` requires `registers-tensor-products-and-partial-trace`
- `exact-oracle-algorithms` requires `registers-tensor-products-and-partial-trace`
- `quantum-fourier-transform-circuits` requires `registers-tensor-products-and-partial-trace`
- `quantum-phase-estimation` requires `registers-tensor-products-and-partial-trace`
- `quantum-order-finding-and-rational-reconstruction` requires `registers-tensor-products-and-partial-trace`
- `finite-abelian-hidden-subgroup-algorithms` requires `registers-tensor-products-and-partial-trace`
- `grover-search-and-invariant-plane-rotations` requires `registers-tensor-products-and-partial-trace`
- `quantum-query-lower-bounds-and-search-optimality` requires `registers-tensor-products-and-partial-trace`
- `adversary-methods-and-quantum-query-complexity` requires `registers-tensor-products-and-partial-trace`
- `discrete-quantum-walks-and-szegedy-theory` requires `registers-tensor-products-and-partial-trace`
- `quantum-walk-search-and-element-distinctness` requires `registers-tensor-products-and-partial-trace`
- `continuous-time-quantum-walks` requires `registers-tensor-products-and-partial-trace`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `registers-tensor-products-and-partial-trace`
- `block-encodings` requires `registers-tensor-products-and-partial-trace`
- `hhl-phase-estimation-linear-systems` requires `registers-tensor-products-and-partial-trace`
- `quantum-sampling-expectation-and-monte-carlo` requires `registers-tensor-products-and-partial-trace`
- `quantum-optimization-sdp-and-variational-algorithms` requires `registers-tensor-products-and-partial-trace`
- `period-hidden-shift-and-number-theoretic-algorithms` requires `registers-tensor-products-and-partial-trace`
- `quantum-complexity-classes-and-oracle-separations` requires `registers-tensor-products-and-partial-trace`
- `qma-verification-and-local-hamiltonian` requires `registers-tensor-products-and-partial-trace`
- `quantum-communication-and-fingerprinting` requires `registers-tensor-products-and-partial-trace`
- `adiabatic-computation-and-circuit-equivalence` requires `registers-tensor-products-and-partial-trace`
- `pure-and-mixed-states-ensembles-and-schmidt-decomposition` requires `registers-tensor-products-and-partial-trace`
- `measurements-povms-and-instruments` requires `registers-tensor-products-and-partial-trace`
- `channels-kraus-choi-and-stinespring-representations` requires `registers-tensor-products-and-partial-trace`
- `trace-distance-fidelity-and-information-limits` requires `registers-tensor-products-and-partial-trace`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `registers-tensor-products-and-partial-trace`
- `controlled-gates-phase-and-entanglement` requires `registers-tensor-products-and-partial-trace`
- `circuit-syntax-denotational-semantics-and-measurement` requires `registers-tensor-products-and-partial-trace`
- `reversible-computation-ancillas-and-coherent-oracles` requires `registers-tensor-products-and-partial-trace`
- `continuous-gate-universality-and-exact-synthesis` requires `registers-tensor-products-and-partial-trace`
- `uniform-circuit-families-promise-problems-and-complexity` requires `registers-tensor-products-and-partial-trace`
- `pauli-and-clifford-groups-binary-symplectic-tableaux` requires `registers-tensor-products-and-partial-trace`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `registers-tensor-products-and-partial-trace`
- `bell-states-teleportation-and-dense-coding` requires `registers-tensor-products-and-partial-trace`
- `classical-and-quantum-error-correcting-codes` requires `registers-tensor-products-and-partial-trace`
- `knill-laflamme-recovery-and-subsystem-codes` requires `registers-tensor-products-and-partial-trace`
- `stabilizer-css-codes-syndromes-and-procedures` requires `registers-tensor-products-and-partial-trace`
- `graph-states-and-measurement-based-computation` requires `registers-tensor-products-and-partial-trace`
- `state-preparation-isometry-synthesis-and-limits` requires `registers-tensor-products-and-partial-trace`
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
