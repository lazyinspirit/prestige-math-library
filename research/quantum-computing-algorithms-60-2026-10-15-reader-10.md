# Step 3a reader report — batch 10

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `10`

## Opened inventory

Assigned pages:

- `reversible-computation-ancillas-and-coherent-oracles` (`library/quantum-computing/`, draft)
- `reversible-computation-ancillas-and-coherent-oracles-examples` (`library/quantum-computing/`, draft)

Assigned items, read in dependency order:

- `def-qc-clean-and-dirty-ancillas`
- `def-qc-toffoli-and-fredkin`
- `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`
- `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`
- `alg-qc-reversible-embedding`
- `lem-qc-fresh-target-not-and-or-gadgets`
- `lem-qc-toffoli-clean-target-and-uncomputation`
- `thm-qc-clean-uncomputation-restores-workspace`
- `thm-qc-reversible-embedding-cost`
- `def-qc-coherent-function-oracle`
- `thm-qc-reversible-embedding-parallel-depth`
- `thm-qc-reversible-xor-oracle-unitary`
- `thm-qc-phase-kickback-from-xor-oracle`
- `thm-qc-oracle-phase-query-cost-boundary`
- `ex-qc-reversible-and-oracle-compute-copy-uncompute`

The batch 10 proof-contract file was checked for all 11 proof-bearing items: citations, derivations, routine-step records, boundaries, unresolved supplier excerpts, axioms, and finite checks. The ancilla-identity contract's Step 2.1 derivation was updated with the repair below.

The six page prerequisites named by the assigned A page were opened: `boolean-circuits-and-nonuniform-complexity`, `circuit-syntax-denotational-semantics-and-measurement`, `controlled-gates-phase-and-entanglement`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, and `turing-machines-configurations-and-computation`. The two assigned page summaries were also checked.

Draft item suppliers from this run were read before their consumers, using the current batch manifests:

- Batch 1: `def-qc-dirac-notation-conversion`, `thm-qc-dirac-notation-coordinate-identity`.
- Batch 2: `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`, `thm-qc-computational-basis-orthonormal`, `def-qc-tensor-map`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-bitstring-index-is-bijection`, `thm-qc-tensor-map-composition-and-adjoint`.
- Batch 3: `def-qc-density-operator`, `thm-qc-density-operator-existence`, `def-qc-pure-state-and-ray`, `thm-qc-ray-projector-well-defined-and-bijective`.
- Batch 7: `def-qc-qubit-and-bloch-representation`, `def-qc-pauli-matrices`, `def-qc-bloch-coordinate-map`, `thm-qc-pauli-algebra`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `thm-qc-bloch-coordinate-existence-and-uniqueness`, `thm-qc-axis-rotation-pauli-formula`.
- Batch 8: `def-qc-controlled-unitary-access`, `def-qc-cnot-and-control-target-order`, `def-qc-inverse-unitary-access`.
- Batch 9: `def-qc-circuit-syntax-and-register-order`, `lem-qc-local-gate-wire-embedding`, `lem-qc-disjoint-layer-order-independence`, `def-qc-circuit-denotational-semantics`, `def-qc-elementary-circuit-resources`, `thm-qc-circuit-inverse-reversal`.

Relevant published prerequisite interfaces were opened for: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-finite-iterated-tensor-products-represent-multilinear-maps`, `cor-linear-maps-with-finite-dimensional-domain-are-bounded`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `cor-tensor-products-of-finite-free-modules-and-dimension`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-boolean-circuit-size-depth-fanin-and-basis`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-coordinate-column-and-matrix-of-a-linear-map`, `def-dimension`, `def-function-space`, `def-kernel-and-image-of-a-linear-map`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-linear-map`, `def-linear-subspace`, `def-matrix-product-and-identity-matrix`, `def-natural-numbers`, `def-non-negative-and-positive-operator`, `def-orthogonal-projection`, `def-rank-and-nullity`, `def-real-and-complex-inner-product-space`, `def-self-adjoint-and-normal-endomorphism`, `def-sine-and-cosine-by-power-series`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-trace-of-a-square-matrix`, `def-trace-of-an-endomorphism`, `def-transpose-of-a-matrix`, `lem-composition-and-identity-linear-maps`, `lem-exponential-series-of-a-bounded-operator`, `lem-standard-basis-of-f-n`, `prop-adjoint-algebra`, `prop-standard-coordinate-inner-products`, `prop-trace-is-linear`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-commutative-ring-module-structure-on-a-tensor-product`, `thm-finite-dimensional-isometry-characterisations`, `thm-induction-principle`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-tensor-product-basis-from-bases`, and `thm-unique-coordinates-with-respect-to-an-ordered-basis`.

## Edit and evidence

- Edited `items/lem-qc-ancilla-identities-stable-under-reference-and-mixtures.md`, Proof 2.1. The earlier text applied the operator on `R⊗D⊗A` to vectors from `R⊗D`; it also compressed the adjoint-pairing equality. The proof now applies the rank-one identity to `e_i⊗|0_A⟩` and `e_j⊗|0_A⟩` in the full space and displays the conjugate-symmetry/adjoint calculation. The mathematical claim is unchanged.
- Updated the corresponding Step 2.1 derivation in `research/quantum-computing-algorithms-60-2026-10-15-batch-10.proof-contracts.json`. The item had no `verification.judge` record to remove.
- Validation: `node tools/tsx-run.mjs tools/reflow.mts items/lem-qc-ancilla-identities-stable-under-reference-and-mixtures.md` reported unchanged; `node tools/tsx-run.mjs tools/precheck.mts items/lem-qc-ancilla-identities-stable-under-reference-and-mixtures.md` passed; the final `node tools/proof-layout.mjs` run reported 1 item, 3 steps, 0 defects.

## Uneditable findings

- `thm-qc-density-operator-existence` (batch 3), Proof 1.1: the proof asserts that the identity is self-adjoint but does not show `I_H^*=I_H` or cite the finite-dimensional existence/uniqueness result needed to infer it from the adjoint relation. The only cited Fact on non-negativity defines self-adjointness; the theorem's dependencies do not include `thm-adjoint-exists-and-is-unique-in-finite-dimension`. A short calculation of the identity's adjoint together with that result (or a local uniqueness proof) closes the gap. The assigned consumer `def-qc-toffoli-and-fredkin` reaches this source through the Pauli/qubit/density definition closure. Severity: nonfatal.
- `def-qc-tensor-map` (batch 2), Facts & Assumptions [F1] and Proof 2.1: its Definition covers arbitrary finite-dimensional complex vector spaces, but the cited `def-qc-tensor-register-and-permutation` is scoped to inner-product spaces with specified orthonormal bases. The zero-factor argument needs the generic algebraic-tensor fact that elementary tensors span; `def-tensor-product-of-modules-by-generators-and-relations` supplies that exact fact and should be cited (or the Definition narrowed). Assigned consumer: `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`. Severity: nonfatal.
- Published page `boolean-circuits-and-nonuniform-complexity`, summary opening sentence: its frontmatter says `status: published`, while the summary calls it “This draft page”. The summary status description is stale. This page is required by the assigned A page; no page edit was authorized. Severity: nonfatal.

## Page verdicts

- `reversible-computation-ancillas-and-coherent-oracles`: pass. Its title, item list, prerequisites, and summary accurately describe the reviewed content. No page prose edit was needed. The uneditable prerequisite findings above are recorded separately.
- `reversible-computation-ancillas-and-coherent-oracles-examples`: pass. The summary matches the full eight-row AND-oracle computation and its cost/resource comparison. No page prose edit was needed.

## Blocker and coverage note

No batch 10 blocker was found. At status time `2026-10-16T00:58:21Z`, the run remained in `3a-read` with no in-flight workers and reported a run-level specification blocker from `1-scaffold`: invalid construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. That blocker is outside this assignment and was not changed.

No rendered evidence bundle for batch 10 was present in the run state, so the source carriers were read directly. The relevant definition/statement interfaces of 44 published prerequisites were checked, but their own proofs were not independently re-proved. The reversible-circuit calculations here were self-contained, so no web search was needed.
