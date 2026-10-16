# Step 4 batch reviewer — batch **13**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **13**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `clifford-t-exact-and-approximate-synthesis` | A | algebraic-extensions-degree-and-finite-fields, approximate-universality-and-solovay-kitaev, chain-conditions-and-semisimple-modules, circuit-syntax-denotational-semantics-and-measurement, continuous-gate-universality-and-exact-synthesis, controlled-gates-phase-and-entanglement, cyclotomic-arithmetic-and-reciprocity-via-frobenius, dirichlets-unit-theorem-regulators-and-s-units, inner-product-spaces-and-orthogonality, number-fields-rings-of-integers-and-discriminants, polynomial-rings-and-roots, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, reversible-computation-ancillas-and-coherent-oracles, the-spectral-theorem-and-singular-value-decomposition |
| 13 | `clifford-t-exact-and-approximate-synthesis-examples` | B | clifford-t-exact-and-approximate-synthesis |

## Your content, in full

### `clifford-t-exact-and-approximate-synthesis` — Clifford+T Exact and Approximate Synthesis

- `def-qc-dyadic-cyclotomic-ring` · definition — Dyadic cyclotomic ring for Clifford+T synthesis
- `lem-qc-modular-square-root-expected-polynomial` · lemma — Exact randomized modular square roots in expected polynomial time
- `def-qc-cyclotomic-bullet-automorphism` · definition — The nontrivial real-conjugation automorphism of the eighth cyclotomic field
- `lem-qc-dyadic-coefficient-encoding` · lemma — Canonical dyadic coefficient encoding
- `lem-qc-sqrt-two-divisibility-criterion` · lemma — Square root of two divisibility criterion in the eighth cyclotomic ring
- `lem-qc-denominator-exponent-well-defined` · lemma — Denominator exponent is a well-defined integer
- `lem-qc-dyadic-cyclotomic-conjugate-norm` · lemma — Conjugate norms from the dyadic eighth-cyclotomic ring are real dyadics
- `lem-qc-dyadic-cyclotomic-unit-circle` · lemma — Unit-modulus elements of the dyadic cyclotomic ring
- `lem-qc-cyclotomic-euclidean-factorization-and-units` · lemma — Constructive cyclotomic factorization and real unit squares
- `lem-qc-cyclotomic-one-dimensional-grid-enumeration` · lemma — One-dimensional quadratic grid enumeration and counting
- `lem-qc-paired-ellipse-grid-uprighting` · lemma — Effective simultaneous grid uprighting of paired ellipses
- `def-qc-denominator-exponent` · definition — Smallest square root of two denominator exponent
- `thm-qc-cyclotomic-norm-equation-decision` · theorem — Constructive decision of the dyadic cyclotomic norm equation
- `alg-qc-rz-efficient-scaled-grid-iterator` · algorithm — Efficient exact-denominator Rz grid iterator
- `lem-qc-cyclotomic-scaled-grid-finiteness` · lemma — Finite coefficient bounds for the scaled cyclotomic grid
- `lem-qc-squared-entry-denominator-bound` · lemma — Squared entry denominator bound
- `cor-qc-cyclotomic-prime-norm-solvability` · corollary — Prime norm numerators congruent to one modulo eight are solvable
- `thm-qc-factored-cyclotomic-norm-equation-efficient` · theorem — Efficient exact cyclotomic norm solving with a supplied integer factorization
- `lem-qc-rz-scaled-grid-growth` · lemma — Exponent growth of the Rz scaled grid
- `lem-qc-rz-candidate-norm-integer` · lemma — Size and residue of the Rz candidate norm integer
- `thm-qc-rz-efficient-scaled-grid-enumeration` · theorem — Complete scaled-grid enumeration with expected polynomial prefix cost
- `lem-qc-rz-prime-model-stopping-bounds` · lemma — Conditional stopping bounds for prime-tested Rz candidates
- `def-qc-clifford-t-gate-library` · definition — Clifford+T gate library and exact matrices
- `alg-qc-controlled-t-clean-ancilla-circuit` · algorithm — Controlled T using a clean ancilla
- `def-qc-ancilla-free-rz-approximation-problem` · definition — Ancilla-free Rz approximation problem and T-count
- `lem-qc-clifford-t-determinant-phase` · lemma — Determinants of one-qubit Clifford+T words are eighth roots
- `lem-qc-clifford-t-entry-ring` · lemma — Clifford+T circuit entries lie in the dyadic cyclotomic ring
- `lem-qc-hadamard-reduced-word-denominators` · lemma — Reduced Hadamard words and their exact denominators
- `alg-qc-cyclotomic-scaled-grid-and-norm-solver` · algorithm — Cyclotomic scaled grid and norm-equation solver
- `lem-qc-clifford-t-determinant-one-approximants` · lemma — Determinant-one Clifford+T words are dense in SU(2)
- `lem-qc-rz-epsilon-region-equivalence` · lemma — The exact operator-norm epsilon region for determinant-one Rz candidates
- `lem-qc-single-qubit-ring-unitary-form` · lemma — Normal form of a single-qubit ring unitary
- `prop-qc-controlled-t-clean-ancilla-correct` · proposition — Clean ancilla controlled T circuit is exact
- `thm-qc-controlled-t-two-qubit-obstruction` · theorem — Two-qubit determinant obstruction to controlled T
- `thm-qc-rz-synthesis-up-to-phase` · theorem — Two-phase reduction for Clifford+T Rz synthesis up to phase
- `lem-qc-clifford-t-denominator-descent-and-base` · lemma — Clifford+T denominator descent and finite base table
- `lem-qc-rz-scaled-grid-norm-solution-exists` · lemma — Every Rz epsilon region contains an exact norm-solvable grid point
- `lem-qc-rz-determinant-one-reduction` · lemma — Determinant-one reduction for optimal Rz approximation
- `lem-qc-capped-prime-norm-attempt-success` · lemma — Certified capped norm attempts succeed on prime residuals
- `thm-qc-single-qubit-exact-clifford-t-characterization` · theorem — Exact single-qubit Clifford+T ring characterization
- `alg-qc-exact-single-qubit-clifford-t-synthesis` · algorithm — Exact single-qubit Clifford+T synthesis
- `alg-qc-rz-clifford-t-approximation` · algorithm — Ancilla-free Clifford+T Rz approximation
- `thm-qc-exact-clifford-t-synthesis-optimality` · theorem — H-count and T-count optimality of exact Clifford+T synthesis
- `thm-qc-exact-single-qubit-synthesis-correct` · theorem — The exact single-qubit compiler returns the input matrix
- `thm-qc-rz-approximation-correct-on-termination` · theorem — The Rz approximation procedure is correct when it returns
- `lem-qc-su-two-denominator-t-count` · lemma — Denominator exponent and optimal T count for determinant-one unitaries
- `thm-qc-rz-clifford-t-tcount` · theorem — T-count guarantees for Clifford+T Rz synthesis

### `clifford-t-exact-and-approximate-synthesis-examples` — Clifford+T Exact and Approximate Synthesis — Examples

- `ex-qc-clifford-t-exact-period-and-phase` · example — Exact T period and a non-exact Rz phase

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `clifford-t-exact-and-approximate-synthesis` requires `approximate-universality-and-solovay-kitaev`
- `clifford-t-exact-and-approximate-synthesis` requires `circuit-syntax-denotational-semantics-and-measurement`
- `clifford-t-exact-and-approximate-synthesis` requires `continuous-gate-universality-and-exact-synthesis`
- `clifford-t-exact-and-approximate-synthesis` requires `controlled-gates-phase-and-entanglement`
- `clifford-t-exact-and-approximate-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `clifford-t-exact-and-approximate-synthesis` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-complexity-classes-and-oracle-separations` requires `clifford-t-exact-and-approximate-synthesis`
- `uniform-circuit-families-promise-problems-and-complexity` requires `clifford-t-exact-and-approximate-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `clifford-t-exact-and-approximate-synthesis`
- `state-preparation-isometry-synthesis-and-limits` requires `clifford-t-exact-and-approximate-synthesis`
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
