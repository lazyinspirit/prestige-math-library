# Step 3a reader report — batch 2

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: `reader-2`  
Scope: batch `2`

## Opened inventory

Assigned pages:

- A page `registers-tensor-products-and-partial-trace` — page prose and item summary reviewed.
- B page `registers-tensor-products-and-partial-trace-examples` — page prose and example summary reviewed.

Assigned items, reviewed in supplier order:

1. `def-qc-register-and-computational-basis`
2. `lem-qc-trace-pairing-nondegenerate`
3. `def-qc-ordered-bitstring-encoding`
4. `def-qc-tensor-register-and-permutation`
5. `thm-qc-computational-basis-orthonormal`
6. `def-qc-partial-trace`
7. `def-qc-tensor-map`
8. `lem-qc-tensor-product-basis-and-dimension`
9. `thm-qc-bitstring-index-is-bijection`
10. `thm-qc-partial-trace-characterization-and-basis-independence`
11. `thm-qc-tensor-map-composition-and-adjoint`
12. `thm-qc-wire-permutation-is-unitary`
13. `thm-qc-partial-trace-positive-and-trace-preserving`
14. `ex-qc-register-endian-partial-trace`

Published supplier definitions/statements opened to check the cited hypotheses and conventions:

- `def-real-and-complex-inner-product-space`, `def-dimension`, `def-function-space`, `lem-standard-basis-of-f-n`, and `prop-standard-coordinate-inner-products`.
- `def-tensor-product-of-modules-by-generators-and-relations`, `thm-commutative-ring-module-structure-on-a-tensor-product`, `cor-finite-iterated-tensor-products-represent-multilinear-maps`, `thm-tensor-product-basis-from-bases`, and `cor-tensor-products-of-finite-free-modules-and-dimension`.
- `def-linear-map`, `def-coordinate-column-and-matrix-of-a-linear-map`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `thm-matrix-of-a-composite-is-the-product`, `def-matrix-units`, `def-matrix-product-and-identity-matrix`, `def-trace-of-an-endomorphism`, and `def-trace-of-a-square-matrix`.
- `thm-induction-principle`, `def-natural-numbers`, `lem-composition-and-identity-linear-maps`, and `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`.
- `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-non-negative-and-positive-operator`, `def-self-adjoint-and-normal-endomorphism`, and `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`.
- The current-run suppliers `def-qc-dirac-notation-conversion` and `thm-qc-dirac-notation-coordinate-identity`; the latter's proof was read for the example's rank-one matrix calculation.

The batch manifest and relevant proof-contract records were consulted as navigation and citation evidence, not treated as verdicts. For the partial-trace claims, Watrous, *The Theory of Quantum Information*, §2.1.3, p. 68, equations (2.32)–(2.34), states the characterization and coordinate contraction; Example 2.8 on p. 68 gives the Bell-state reduction. [Source](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf)

## Review, edit, and evidence

Reviewed all titles, definitions, claims, constructions, proof steps, facts, boundary cases, computations, citations, and page summaries in the assigned scope. The trace-pairing witness uses the correct matrix unit; the bit-string induction covers `n=0` and partitions the target into disjoint intervals; the tensor-product and partial-trace arguments respect the first-linear inner-product convention and handle empty bases; and the Bell-projector entries and partial-trace contraction are correct.

Repaired `items/thm-qc-computational-basis-orthonormal.md`. Its former step 2.1 identified the zero-qubit register with the `d=1` register `Q_1`. The definition at `items/def-qc-register-and-computational-basis.md:35-40,43-55` defines `Q_d = C^d` and the zero-qubit register separately as the empty tensor product `C` with basis `{1}`; it does not identify `Q_1` with that empty product. I changed the statement's “In particular” to “Separately” and rewrote the proof to establish the `Q_d` claim from the coordinate formula and standard basis, then cite the definition directly for the zero-qubit basis. The theorem no longer infers that the two registers are the same object. The batch-2 proof contract was updated to match the repaired derivation and boundary evidence. No `verification.judge` record was present on the item.

Validation after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qc-computational-basis-orthonormal.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-computational-basis-orthonormal.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-qc-computational-basis-orthonormal.md` — 1 item, 3 steps, 0 defects.

## Unedited defects

None found. No withdrawal is proposed.

## Page verdicts

- `registers-tensor-products-and-partial-trace` (A): sound. The summary matches the assigned definitions and results, including the empty and zero-dimensional cases.
- `registers-tensor-products-and-partial-trace-examples` (B): sound. Its summary accurately describes the three-bit encoding calculation, Bell-projector matrix, and second-factor partial trace.

## Blocker

No batch-2 review blocker. The recomputed run status reports an existing global `1-scaffold` blocker: the prerequisite graph is invalid because construction scheduling item `def-qc-effective-unitary-matrix-input` in batch 12 has invalid identity. This is outside batch 2 and did not prevent this review.

## Coverage note

All assigned pages and items and the item-level suppliers needed to check their mathematical claims were opened. Published suppliers were checked at the relevant definition/statement level; their full proofs were not independently re-audited. No unresolved mathematical uncertainty remains in batch 2.
