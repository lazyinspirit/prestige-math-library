# Step 3a reader report — batch 26

Run: `quantum-computing-algorithms-60-2026-10-15`  
Review date: 2026-10-16

## Opened inventory

Assigned pages:

- `library/quantum-algorithms/reversible-arithmetic-and-oracle-conversion.md`
- `library/quantum-algorithms/reversible-arithmetic-and-oracle-conversion-examples.md`

Assigned items reviewed:

- `def-qa-binary-field-f2`
- `def-qa-binary-dot-product`
- `alg-qa-reversible-binary-dot-product`
- `thm-qa-reversible-binary-dot-product-correct-and-cost`
- `def-qa-standard-bit-query`
- `def-qa-phase-query`
- `thm-qa-phase-kickback`
- `thm-qa-compute-copy-uncompute-clean-query`
- `thm-qa-global-phase-under-control`
- `thm-qa-bit-query-to-phase-query`
- `thm-qa-controlled-phase-query-to-bit-query`
- `ex-qa-oracle-conversion-and-uncomputation`

Direct item suppliers opened:

- Published: `def-congruence-modulo-an-integer`, `def-integers-modulo-n`, `def-addition-and-multiplication-modulo-n`.
- Current-run drafts: `def-qa-input-encoding-and-size`, `def-qc-clean-and-dirty-ancillas`, `def-qc-register-and-computational-basis`, `def-qc-dirac-notation-conversion`, `def-qc-toffoli-and-fredkin`, `def-qc-cnot-and-control-target-order`, `def-qc-elementary-circuit-resources`, `thm-qc-computational-basis-orthonormal`, `lem-qc-tensor-product-basis-and-dimension`, `def-qa-promise-query-instance`, `def-qc-coherent-function-oracle`, `thm-qc-reversible-xor-oracle-unitary`, `def-qc-ordered-bitstring-encoding`, `def-qc-pure-state-and-ray`, `alg-qc-reversible-embedding`, `thm-qc-reversible-embedding-cost`, `def-qc-inverse-unitary-access`, `def-qc-controlled-unitary-access`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `thm-qc-standalone-global-phase-invariance`, `thm-qc-controlled-global-phase-is-relative-phase`, and `def-qa-nonoracle-gate-cost`.

For the controlled-global-phase citation, I also opened `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, and `def-complex-exponential`. I opened the frontmatter and summaries of the nine pages required by the assigned A-page. I reviewed the batch-26 proof-contract derivations and boundary summaries, plus the relevant entries in the batch-26 cross-batch dependency record.

During initial inventory I opened `def-qa-binary-field-f2` before its three published number-theory suppliers; I read those suppliers before completing the proof assessment of that item.

## Review findings that I could not edit

1. `def-qc-toffoli-and-fredkin`, Definition, opening sentence (line 38): the gate actions use addition `\oplus` and multiplication `ab` on `\mathbb F_2`, but this supplier has no dependency on `def-qa-binary-field-f2` and gives no operation table locally. Those operations determine the stated Toffoli action. The assigned consumer `alg-qa-reversible-binary-dot-product` depends on this supplier. Define the bit operations in the item or add an exact local supplier for them. This is an in-run dependency in batch 10, outside batch 26's edit scope.

2. `thm-qc-controlled-global-phase-is-relative-phase`, Proof, step 4.1 (line 109): `[F2]` is `thm-finite-dimensional-isometry-characterisations`, which does not imply `z^2=e^{i\theta}` or `z^{-1}=e^{-i\theta/2}`. `[F4]` gives the real-angle Euler formula and modulus but does not state the exponential addition law. `thm-complex-exponential-addition-and-real-extension` supplies that law and should be cited for these identities. The claimed probability formula is correct; the cited support is inaccurate. This is an in-run dependency in batch 8, reached by assigned consumer `thm-qa-global-phase-under-control`, and is outside batch 26's edit scope.

## Edits

No assigned item or page was edited. Both confirmed findings are on current-run suppliers in other batches. No item reflow, precheck, or proof-layout pass was triggered.

## Page verdicts

- `reversible-arithmetic-and-oracle-conversion`: the page summary accurately describes the query conventions, explicit access and cost assumptions, parity construction, and controlled-phase caveat.
- `reversible-arithmetic-and-oracle-conversion-examples`: the summary accurately describes the one-bit and two-bit calculations, uncomputation comparison, and controlled constant-phase example.

## Blocker and coverage limit

The batch-26 review itself had no blocker. The run status reports a separate scaffold specification blocker: invalid construction-scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. I did not independently audit every transitive proof dependency of the direct suppliers; the findings above are based on the source items and exact supporting claims opened for this review.
