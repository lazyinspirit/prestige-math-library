# Step 3a reader report — batch 19

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Review basis: current authored files, checked independently of the manifest and author decisions.

## Opened inventory

Assigned pages:

- `library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes.md` (A)
- `library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes-examples.md` (B)

Assigned items, read in dependency order:

- A: `lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement`; `lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis`; `def-qc-first-factor-partial-trace`; `lem-qc-knill-laflamme-coefficient-matrix-is-positive`; `lem-qc-knill-laflamme-orthogonal-error-basis`; `def-qc-exact-recovery-of-a-quantum-code`; `lem-qc-kraus-operators-of-the-identity-channel-are-scalars`; `lem-qc-orthogonal-error-syndrome-projectors`; `lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form`; `thm-qc-knill-laflamme-explicit-recovery`; `thm-qc-knill-laflamme-necessity`; `cor-qc-distance-corrects-t-errors-and-erasures`; `def-qc-correctable-subsystem-and-gauge-factor`; `ex-qc-degenerate-code-kl-matrix`; `thm-qc-subsystem-knill-laflamme`.
- B: `ex-qc-knill-laflamme-orthogonal-error-recovery`.

The batch 19 proof-contract file was opened for all 13 proof-bearing items. Its citations and derivation claims were compared with the current item proofs. The boundary note for `ex-qc-degenerate-code-kl-matrix` has one inaccurate fact label; see the finding below. Embedded boundary-review hashes were treated as historical author evidence, not as a substitute for this review of current item bytes.

Direct external dependency statements/definitions opened:

- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`; `cor-finite-iterated-tensor-products-represent-multilinear-maps`.
- `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `def-inner-product-space`; `def-linear-map`; `def-non-negative-and-positive-operator`; `def-orthogonal-projection`.
- `def-qc-kraus-representation`; `def-qc-local-operator-support-and-weight`; `def-qc-partial-trace`; `def-qc-quantum-channel`; `def-qc-quantum-code-distance-and-error-detection`; `def-qc-quantum-code-isometry-and-code-projector`; `def-qc-register-and-computational-basis`; `def-qc-tensor-map`; `def-qc-tensor-register-and-permutation`.
- `lem-qc-tensor-product-basis-and-dimension`; `prop-adjoint-algebra`.
- `thm-adjoint-exists-and-is-unique-in-finite-dimension`; `thm-complex-spectral-theorem-for-normal-endomorphisms`; `thm-finite-dimensional-orthogonal-decomposition`; `thm-of-square-roots`; `thm-qc-channels-compose-and-tensor`; `thm-qc-isometric-encoding-projector`; `thm-qc-kraus-choi-equivalence`; `thm-qc-kraus-map-completely-positive`; `thm-qc-partial-trace-characterization-and-basis-independence`; `thm-qc-quantum-distance-detects-low-weight-errors`; `thm-qc-tensor-map-composition-and-adjoint`; `thm-qc-trace-preserving-kraus-normalization`; `thm-qc-wire-permutation-is-unitary`; `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`; `thm-tensor-product-basis-from-bases`; `thm-unique-coordinates-with-respect-to-an-ordered-basis`.

Relevant transitive suppliers opened to verify draft dependency arguments:

- `def-qc-completely-positive-map`; `def-qc-choi-matrix`.
- `lem-qc-complete-positivity-implies-choi-positivity`; `lem-qc-positive-choi-matrix-yields-kraus-operators`; `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis`; `lem-qc-detectability-is-linear-and-encoding-invariant`; `lem-qc-linear-isometry-preserves-inner-products`; `lem-qc-linear-isometry-adjoint-identities`; `lem-qc-finite-ancilla-amplification-is-block-map`; `lem-qc-local-operator-support-is-permutation-invariant`.

The listed draft supplier proofs were checked where they establish facts used by batch 19. Their relevant claims support the assigned arguments; no supplier defect requiring an in-run dependency finding was confirmed.

## Item review

| Assigned item | Verdict and evidence |
|---|---|
| `lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement` | Pass. Polarization recovers all rank-one matrix units under the linear-first convention, and the product-basis argument establishes the finite-reference extension, including zero-dimensional cases. |
| `lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis` | Pass. The displayed operators are exactly the product matrix-unit columns; spanning, independence, and empty-factor cases are established. |
| `def-qc-first-factor-partial-trace` | Pass. The coordinate contraction is the second-factor partial trace conjugated by the declared wire swap; the cited characterization gives basis independence and preserves the residual factor order. |
| `lem-qc-knill-laflamme-coefficient-matrix-is-positive` | Pass. Compression by the isometry yields the Gram matrix of the error images of a nonzero logical vector; its quadratic form is nonnegative. |
| `lem-qc-knill-laflamme-orthogonal-error-basis` | Pass. Unitary mixing preserves the Kraus sum, diagonalizes the coefficient matrix, and gives mutually orthogonal normalized error ranges, including zero eigenvalues. |
| `def-qc-exact-recovery-of-a-quantum-code` | Pass. The definition preserves the full linear-map equality and correctly relates pure-state checks to all operators and finite references. |
| `lem-qc-kraus-operators-of-the-identity-channel-are-scalars` | Pass. Positivity on vectors orthogonal to each pure input forces each Kraus image to be collinear; superpositions force a single scalar on the whole space. |
| `lem-qc-orthogonal-error-syndrome-projectors` | Pass. The individual range projections are mutually orthogonal; their sum and residual complement are orthogonal projections with the stated operator bounds. |
| `lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form` | Pass. Pure logical marginals force each Kraus image of a product vector to retain its logical factor; linearity gives `A_j ⊗ I`, and the normalization, reference extension, and gauge-reset channel are verified. |
| `thm-qc-knill-laflamme-explicit-recovery` | Pass. The recovery includes inverse decoding on each positive syndrome and a trace-preserving complement branch; the corrected map and the `C_ba` off-diagonal action follow from the Kraus formulas. |
| `thm-qc-knill-laflamme-necessity` | Pass. A Kraus representation of any exact recovery composes with the encoding and channel; the identity-channel Kraus lemma yields the scalar compression condition. |
| `cor-qc-distance-corrects-t-errors-and-erasures` | Pass. Unknown supports are combined by union, giving weight at most `2t`; a common known support remains fixed. Both cases satisfy the strict distance hypothesis before invoking recovery. |
| `def-qc-correctable-subsystem-and-gauge-factor` | Pass. The reference-system quantifiers, factor order, decoded recovery, and gauge reset are consistent with the cited marginal-preservation result. |
| `ex-qc-degenerate-code-kl-matrix` | Mathematical example passes. The channel normalization, coefficient matrix, eigenvectors, mixed Kraus operators, syndrome ranges, and recovery computations check out. Its proof-contract boundary note contains the citation mismatch described below. |
| `thm-qc-subsystem-knill-laflamme` | Pass. Necessity follows from the gauge-only Kraus form; sufficiency reduces the operator-valued condition to an ordinary KL condition on the scaled family and proves logical-marginal preservation on a matrix-unit basis, then extends to references. The physical compression and gauge matrix-unit criteria are equivalent as stated. |
| `ex-qc-knill-laflamme-orthogonal-error-recovery` | Pass. The two error restrictions are orthogonal, the recovery Kraus operators sum to the identity, and the corrected channel returns every logical operator. |

## Pages

- `knill-laflamme-recovery-and-subsystem-codes` (A): **Pass.** The summary matches the proved ordinary recovery criterion, trace-preserving syndrome recovery, protected-subsystem criterion, and distance corollary. The linear-first convention and factor-order caveats agree with the items.
- `knill-laflamme-recovery-and-subsystem-codes-examples` (B): **Pass.** The summary accurately describes the explicit orthogonal-error recovery example.

## Unedited finding

The boundary evidence for the degenerate-code example in `research/quantum-computing-algorithms-60-2026-10-15-batch-19.proof-contracts.json:2420` calls the recovery construction `[F1]`. In the current item, `[F1]` is the code/projector definition, while `[F3]` is `thm-qc-knill-laflamme-explicit-recovery`; verification step 6.1 also cites `[F3]` for that construction. The current proof citation is correct, so no item edit was made. The contract note is outside the allowed edit scope and is reported as a nonfatal citation mismatch.

## Edits and blocker

- No item or page prose was edited. No repair evidence, proof-contract update, reflow, precheck, or proof-layout run was applicable.
- At review time, the live run status reported a pre-existing stage-spec blocker at `1-scaffold`: invalid unit prerequisite graph, `def-qc-effective-unitary-matrix-input` in batch 12. This blocker is outside batch 19 and was not changed.
