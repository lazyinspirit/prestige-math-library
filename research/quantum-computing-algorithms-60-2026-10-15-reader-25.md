# Step 3a reader report — batch 25

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Review date: 2026-10-16

## Opened inventory

Assigned pages opened:

- A: `computational-problems-promises-and-cost-models`
- B: `computational-problems-promises-and-cost-models-examples`

All 15 assigned items were opened and reviewed. Within-batch items were handled in dependency-level order:

`def-qa-expected-query-cost`, `def-qa-task-and-promise-domain`, `def-qa-input-encoding-and-size`, `def-qa-finite-branch-output-law`, `def-qa-promise-query-instance`, `def-qa-classical-query-algorithm`, `def-qa-quantum-query-algorithm`, `def-qa-bounded-error-promise-correctness`, `def-qa-classical-bit-cost`, `def-qa-exact-promise-correctness`, `def-qa-nonoracle-gate-cost`, `def-qa-classical-query-complexity`, `def-qa-quantum-query-complexity`, `thm-qa-promise-preserving-query-reduction-composition`, and `ex-qa-promise-and-cost-models`.

The nine declared prerequisite page summaries were opened: `uniform-circuit-families-promise-problems-and-complexity`, `the-polynomial-hierarchy-and-relativization`, `finite-probability-spaces-and-random-variables`, `reversible-computation-ancillas-and-coherent-oracles`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `circuit-syntax-denotational-semantics-and-measurement`, `measurements-povms-and-instruments`, and `effective-numberings-reductions-resources-and-randomness`.

Process limitation: initial orientation opened `def-qa-expected-query-cost` and `def-qa-task-and-promise-domain` before their direct external suppliers. Those supplier statements were checked before final mathematical assessment, but the strict supplier-first reading order was not preserved for those initial reads.

Supporting local items opened to verify cited interfaces and used proofs:

- Promise, probability, and machine interfaces: `def-promise-problem`, `def-promise-preserving-reduction`, `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `lem-finite-sum-reindexing-and-fubini`, `thm-induction-principle`, `def-probabilistic-polynomial-time-machine-interface`, and `def-multitape-and-nondeterministic-machines`.
- Register, circuit, and oracle suppliers: `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `lem-qc-tensor-product-basis-and-dimension`, `def-qc-ordered-bitstring-encoding`, `thm-qc-bitstring-index-is-bijection`, `def-qc-tensor-register-and-permutation`, `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-promise-computation-model`, `lem-qc-local-gate-wire-embedding`, `lem-qc-disjoint-layer-order-independence`, `def-qc-tensor-map`, `thm-qc-tensor-map-composition-and-adjoint`, and `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`.
- State, trace, and instrument suppliers: `def-real-and-complex-inner-product-space`, `def-qc-density-operator`, `def-non-negative-and-positive-operator`, `def-trace-of-an-endomorphism`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-self-adjoint-and-normal-endomorphism`, `prop-adjoint-algebra`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `thm-finite-dimensional-isometry-characterisations`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-qc-unit-vector-projector-is-density`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-qc-completely-positive-map`, `lem-qc-finite-ancilla-amplification-is-block-map`, `def-qc-instrument-and-conditional-state`, `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-instrument-conditional-state-is-density`, `thm-non-negative-operator-characterisations`, `prop-trace-is-linear`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, and `thm-of-square-roots`.
- Query costs and worked-example suppliers: `def-qc-coherent-function-oracle`, `thm-qc-reversible-xor-oracle-unitary`, `def-qc-dirac-notation-conversion`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-circuit-cost-model`, `def-qc-elementary-circuit-resources`, `def-qc-uniform-circuit-family`, `def-qc-clifford-t-gate-library`, and `def-matrix-product-and-identity-matrix`.

## Review and repair

The expected-query-cost definition and its finite-prefix proof are sound: finite histories normalize by induction, projection preserves prefix weights, and the finite-prefix expectations are monotone. The decision/search task, encoding, total XOR-oracle, classical/quantum query interfaces, correctness and cost definitions preserve their declared promises and resource coordinates. The reduction-composition theorem's access, initialization, witness-lifting, branchwise query bounds, and separate bit/gate costs follow from its explicit hypotheses. The finite worked reductions and two query circuits verify as stated.

One proof omission was repaired in `def-qa-finite-branch-output-law`. Its frontier induction covered a finite tree with leaves at different depths but did not specify how zero-weight terminal branches were treated during padding. Steps 2.1–3.1 now explicitly extend positive-weight terminal leaves by identity-unitary edges while preserving their states and weights, and carry zero-weight terminal leaves at weight zero without assigning states. This reaches a common maximum depth without adding outcome branches or changing terminal outputs. The item’s proof-contract derivations for steps 2.1 and 3.1 were updated. No `verification.judge` record was present to remove.

Validation after the final item edit: `reflow.mts` reported unchanged; `precheck.mts` passed the induction proof; `proof-layout.mjs` reported 1 item, 7 steps, 0 defects.

No defect requiring an uneditable finding was identified in the assigned items or the supplier interfaces used by their claims.

## Page verdicts

- `computational-problems-promises-and-cost-models` (A): pass. Its summary accurately describes the promise, encoding, query, branch-law, expected-cost, and resource interfaces covered by its 14 listed items.
- `computational-problems-promises-and-cost-models-examples` (B): pass. Its summary matches the reductions, total two-address oracle, and separate query/gate/readout costs in its listed example.

## Blocker and coverage limit

The current autopilot status reports a pre-existing run-level stage-spec blocker: `1-scaffold` rejects construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. This is outside batch 25 and did not prevent this review or its local validation.

This review checked every assigned item and page, the nine required page summaries, and the direct local suppliers and supporting proofs listed above. It is not a full audit of every transitive foundational item behind those suppliers, and I did not re-fetch the listed external lecture-note sources. No uncertainty about an assigned mathematical claim remained after checking the local arguments and interfaces.
