# Step 4 batch reviewer — batch **14**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **14**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `uniform-circuit-families-promise-problems-and-complexity` | A | approximate-universality-and-solovay-kitaev, boolean-circuits-and-nonuniform-complexity, circuit-syntax-denotational-semantics-and-measurement, clifford-t-exact-and-approximate-synthesis, continuous-gate-universality-and-exact-synthesis, effective-numberings-reductions-resources-and-randomness, finite-probability-spaces-and-random-variables, formal-languages-encodings-and-decision-problems, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, logarithmic-space-nl-and-reachability, measurements-povms-and-instruments, randomized-complexity-and-amplification, registers-tensor-products-and-partial-trace, reversible-computation-ancillas-and-coherent-oracles, the-polynomial-hierarchy-and-relativization, trace-distance-fidelity-and-information-limits |
| 14 | `uniform-circuit-families-promise-problems-and-complexity-examples` | B | uniform-circuit-families-promise-problems-and-complexity |

## Your content, in full

### `uniform-circuit-families-promise-problems-and-complexity` — Uniform Circuit Families, Promise Problems, and Complexity

- `def-qc-circuit-cost-model` · definition — Circuit-family and computation cost model
- `def-qc-promise-computation-model` · definition — Finite quantum promise-computation model
- `def-qc-uniform-circuit-family` · definition — Full-list uniform quantum circuit family
- `def-qc-quantum-acceptance-probability` · definition — Quantum acceptance probability for a finite promise computation
- `lem-qc-uniform-family-size-bound` · lemma — A full-list uniform generator bounds circuit size and width
- `def-qc-oracle-full-list-circuit-family` · definition — Oracle-aware full-list quantum circuit family
- `alg-qc-bounded-error-amplification` · algorithm — Bounded-error repetition amplification
- `lem-qc-acceptance-probability-phase-invariance` · lemma — Acceptance is invariant under an unconditional global phase
- `thm-qc-output-acceptance-law-normalizes` · theorem — The partial-output acceptance law is a finite probability law
- `def-qc-bqp-promise-class` · definition — BQP for promise problems in the fixed QC14 model
- `thm-qc-bounded-error-amplification-correct` · theorem — Bounded-error repetition amplification is correct and uniform
- `thm-qc-bqp-error-robustness` · theorem — BQP is unchanged by polynomially small bounded error

### `uniform-circuit-families-promise-problems-and-complexity-examples` — Uniform Circuit Families, Promise Problems, and Complexity — Examples

- `ex-qc-bqp-promise-off-domain` · example — A BQP promise pair with unrestricted off-promise inputs

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `uniform-circuit-families-promise-problems-and-complexity` requires `approximate-universality-and-solovay-kitaev`
- `uniform-circuit-families-promise-problems-and-complexity` requires `circuit-syntax-denotational-semantics-and-measurement`
- `uniform-circuit-families-promise-problems-and-complexity` requires `clifford-t-exact-and-approximate-synthesis`
- `uniform-circuit-families-promise-problems-and-complexity` requires `continuous-gate-universality-and-exact-synthesis`
- `uniform-circuit-families-promise-problems-and-complexity` requires `measurements-povms-and-instruments`
- `uniform-circuit-families-promise-problems-and-complexity` requires `registers-tensor-products-and-partial-trace`
- `uniform-circuit-families-promise-problems-and-complexity` requires `reversible-computation-ancillas-and-coherent-oracles`
- `uniform-circuit-families-promise-problems-and-complexity` requires `trace-distance-fidelity-and-information-limits`
- `computational-problems-promises-and-cost-models` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-phase-estimation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-order-finding-and-rational-reconstruction` requires `uniform-circuit-families-promise-problems-and-complexity`
- `shors-factoring-algorithm` requires `uniform-circuit-families-promise-problems-and-complexity`
- `finite-abelian-hidden-subgroup-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity`
- `grover-search-and-invariant-plane-rotations` requires `uniform-circuit-families-promise-problems-and-complexity`
- `amplitude-amplification` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-query-lower-bounds-and-search-optimality` requires `uniform-circuit-families-promise-problems-and-complexity`
- `polynomial-method-and-approximate-degree` requires `uniform-circuit-families-promise-problems-and-complexity`
- `adversary-methods-and-quantum-query-complexity` requires `uniform-circuit-families-promise-problems-and-complexity`
- `discrete-quantum-walks-and-szegedy-theory` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-walk-search-and-element-distinctness` requires `uniform-circuit-families-promise-problems-and-complexity`
- `continuous-time-quantum-walks` requires `uniform-circuit-families-promise-problems-and-complexity`
- `hamiltonian-simulation-and-product-formulas` requires `uniform-circuit-families-promise-problems-and-complexity`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `block-encodings` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-signal-processing` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-singular-value-transformation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `qubitization-and-optimal-hamiltonian-simulation` requires `uniform-circuit-families-promise-problems-and-complexity`
- `hhl-phase-estimation-linear-systems` requires `uniform-circuit-families-promise-problems-and-complexity`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-spectral-estimation-and-matrix-functions` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-sampling-expectation-and-monte-carlo` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-optimization-sdp-and-variational-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity`
- `period-hidden-shift-and-number-theoretic-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-complexity-classes-and-oracle-separations` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-complexity-classes-and-oracle-separations-examples` requires `uniform-circuit-families-promise-problems-and-complexity`
- `qma-verification-and-local-hamiltonian` requires `uniform-circuit-families-promise-problems-and-complexity`
- `algorithm-composition-precision-and-dequantization` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-communication-and-fingerprinting` requires `uniform-circuit-families-promise-problems-and-complexity`
- `adiabatic-computation-and-circuit-equivalence` requires `uniform-circuit-families-promise-problems-and-complexity`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `uniform-circuit-families-promise-problems-and-complexity`
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
