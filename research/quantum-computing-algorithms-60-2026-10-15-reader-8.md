# Step 3a reader report — batch 8

Run: quantum-computing-algorithms-60-2026-10-15  
Batch: 8  
Role: reader

## Opened inventory

- Control materials: CLAUDE.md, README.md, briefs/reader.md, SCHEMA.md sections on item metadata, algorithms, verification fields and item bodies, research/quantum-computing-algorithms-60-2026-10-15-batch-8.pages.json, and research/quantum-computing-algorithms-60-2026-10-15-batch-8.proof-contracts.json.
- Assigned pages: library/quantum-computing/controlled-gates-phase-and-entanglement.md and library/quantum-computing/controlled-gates-phase-and-entanglement-examples.md.
- Required page context: library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md; library/linear-algebra/inner-product-spaces-and-orthogonality.md; library/quantum-computing/measurements-povms-and-instruments.md; library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md; library/quantum-computing/qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates.md; library/quantum-computing/registers-tensor-products-and-partial-trace.md; and library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md.
- Assigned items, reviewed in dependency order: thm-qc-unit-vector-projector-is-density; def-qc-pure-state-entanglement; thm-qc-standalone-global-phase-invariance; def-qc-controlled-unitary-access; def-qc-relative-phase; def-qc-inverse-unitary-access; def-qc-controlled-phase-rotation; thm-qc-controlled-global-phase-is-relative-phase; def-qc-cnot-and-control-target-order; def-qc-multicontrol-activation; def-qc-controlled-z-and-swap; thm-qc-cnot-creates-bell-entanglement; def-qc-reflection; thm-qc-reflection-unitary-involution; thm-qc-rank-one-reflection-phase-and-control-sign; ex-qc-controlled-global-phase-witness.
- Dependency item sources opened: def-qc-density-operator; def-qc-dirac-notation-conversion; def-real-and-complex-inner-product-space; def-inner-product-norm; def-adjoint-of-a-linear-map-between-inner-product-spaces; thm-adjoint-exists-and-is-unique-in-finite-dimension; def-non-negative-and-positive-operator; def-trace-of-an-endomorphism; cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases; thm-bessel-inequality-and-finite-parseval-identity; def-qc-tensor-register-and-permutation; thm-qc-schmidt-decomposition; def-qc-pure-state-and-ray; thm-singular-value-decomposition; cor-matrix-rank-equals-the-rank-of-its-linear-map; cor-rank-equals-number-of-nonzero-singular-values; def-row-space-column-space-nullspace-and-matrix-ranks; thm-row-rank-equals-column-rank; def-qc-povm-and-outcome-law; thm-qc-povm-probabilities-normalize; def-qc-one-qubit-gate-alphabet-and-rotations; def-linear-isometry-and-orthogonal-or-unitary-operator; thm-qc-dirac-notation-coordinate-identity; prop-adjoint-algebra; thm-finite-dimensional-isometry-characterisations; cor-complex-exponential-cartesian-form-modulus-and-eulers-identity; thm-complex-exponential-addition-and-real-extension; thm-qc-axis-rotation-pauli-formula; thm-qc-computational-basis-orthonormal; thm-kernel-and-fibres-of-complex-exponential; def-qc-tensor-map; def-qc-pauli-matrices; lem-qc-tensor-product-basis-and-dimension; thm-self-adjoint-idempotents-are-exactly-orthogonal-projections; thm-complex-spectral-theorem-for-normal-endomorphisms; thm-matrix-of-the-adjoint-is-the-conjugate-transpose; def-qc-register-and-computational-basis; def-qc-qubit-and-bloch-representation; def-qc-bloch-coordinate-map; thm-qc-pauli-algebra; prop-standard-coordinate-inner-products; lem-standard-basis-of-f-n; cor-finite-dimensional-normed-spaces-are-banach; cor-linear-maps-with-finite-dimensional-domain-are-bounded; lem-exponential-series-of-a-bounded-operator; def-sine-and-cosine-by-power-series; and thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions.

## Review

The batch-8 proof-contract file contains contracts for the 15 proof-bearing assigned items; I compared their cited sources, step references, and boundary cases with the current item text. The assigned definition def-qc-reflection has no phase proof contract and was reviewed directly. The statements and constructions in the assigned items preserve their stated domains and conventions. In particular, the phase witness assumes separate controlled access, the Bell-state computation uses control-first order, and the reflection statements distinguish the two signs and state the inverse-access caveat.

One uneditable dependency finding remains. In the current batch-7 draft def-qc-one-qubit-gate-alphabet-and-rotations, Verification step 1.1 prints a false matrix product for Y*Y. The source explicitly cites the conjugate-transpose rule; with Y = [[0,-i],[i,0]], Y* = Y, whereas the displayed first factor is the entrywise conjugate of Y and its product with Y is -I. The matrix Y is unitary, but the printed calculation does not establish that fact. The correct direct computation is Y*Y = Y² = I. The exact current source hash is recorded in the findings JSON. Batch 8 cannot edit this batch-7 supplier.

No assigned item or page prose was edited. No item repair was needed; therefore no proof contract, verification.judge record, reflow, precheck, or proof-layout run was changed or requested.

## Page verdicts

- controlled-gates-phase-and-entanglement: no page-prose defect found. Its objective accurately describes the assigned control-first conventions, global-versus-relative phase result, gate definitions, and access caveats. The batch-7 supplier calculation above is reported separately as an in-run dependency finding.
- controlled-gates-phase-and-entanglement-examples: no page-prose defect found. Its summary matches the two-qubit witness, including the separate-access assumption and the absence of a cost inference.

## Blocker

Autopilot status for the named run was “running,” with no worker in flight. It reported an existing 1-scaffold prerequisite-graph blocker: invalid construction-scheduling item identity def-qc-effective-unitary-matrix-input in batch 12. This is outside batch 8 and does not change the review above.

## Edits and remaining defects

Edits: none.

Uneditable defect: the batch-7 Y*Y calculation at Verification step 1.1 described above and routed in research/quantum-computing-algorithms-60-2026-10-15-reader-findings-8.json.
