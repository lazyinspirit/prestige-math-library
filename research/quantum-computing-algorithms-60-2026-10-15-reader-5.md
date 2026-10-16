# Step 3a Reader Report — Batch 5

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `5`  
Role: reader

## Opened inventory

Assigned pages:

- `library/quantum-computing/channels-kraus-choi-and-stinespring-representations.md` (A)
- `library/quantum-computing/channels-kraus-choi-and-stinespring-representations-examples.md` (B)

Assigned items, read in manifest dependency order (`items/<id>.md`):

- Level 0: `def-qc-kraus-representation`; `lem-qc-linear-isometry-adjoint-identities`.
- Level 1: `def-qc-unitary-conjugation-channel`; `thm-qc-trace-preserving-kraus-normalization`.
- Level 2: `prop-qc-unitary-conjugation-global-phase-invariant`.
- Level 3: `def-qc-choi-matrix`; `def-qc-isometric-stinespring-representation`; `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis`.
- Level 4: `lem-qc-positive-choi-matrix-yields-kraus-operators`.
- Level 5: `def-qc-quantum-channel`; `lem-qc-complete-positivity-implies-choi-positivity`; `thm-qc-kraus-map-completely-positive`.
- Level 6: `thm-qc-isometry-partial-trace-is-channel`; `thm-qc-kraus-choi-equivalence`; `prop-qc-unitary-conjugation-is-channel`.
- Level 7: `thm-qc-channels-compose-and-tensor`; `thm-qc-choi-trace-preservation-condition`; `thm-qc-finite-stinespring-dilation`.
- Level 8: `thm-qc-finite-kraus-choi-stinespring-equivalence`.
- Level 9: `ex-qc-dephasing-channel-kraus-choi`.

Opened all 31 distinct direct item dependencies declared by the batch manifest (`items/<id>.md`):

`def-real-and-complex-inner-product-space`, `def-dimension`, `def-linear-map`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`, `thm-jordan-von-neumann-polarization`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`, `lem-qc-trace-pairing-nondegenerate`, `prop-trace-is-linear`, `prop-adjoint-algebra`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `def-qc-partial-trace`, `def-coordinate-column-and-matrix-of-a-linear-map`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `lem-qc-tensor-product-basis-and-dimension`, `def-matrix-product-and-identity-matrix`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `def-qc-completely-positive-map`, `def-non-negative-and-positive-operator`, `prop-standard-coordinate-inner-products`, `thm-qc-tensor-map-composition-and-adjoint`, `thm-qc-partial-trace-characterization-and-basis-independence`, and `def-qc-density-operator`.

Also opened the indirect supplier `items/lem-qc-finite-ancilla-amplification-is-block-map.md`, required by the complete-positivity definition.

Opened the eight page requirements listed by the A page:

- `library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md`
- `library/linear-algebra/inner-product-spaces-and-orthogonality.md`
- `library/linear-algebra/linear-maps-rank-nullity-and-quotient-spaces.md`
- `library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md`
- `library/quantum-computing/measurements-povms-and-instruments.md`
- `library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md`
- `library/quantum-computing/registers-tensor-products-and-partial-trace.md`
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`

Read `research/quantum-computing-algorithms-60-2026-10-15-batch-5.proof-contracts.json` and `research/quantum-computing-algorithms-60-2026-10-15-batch-5.cross-batch-dependencies.json`. The contract statements were checked against current item text, not treated as verdicts.

## Mathematical review and page verdicts

The finite-dimensional Kraus, Choi, and Stinespring arguments preserve the stated domains, the first-linear inner-product convention, and the input-first/output-second Choi order. The proofs cover zero-dimensional spaces, empty Kraus families, and zero Choi rank where needed. The phase-flip calculation gives the stated multiplier `2p-1`, Choi eigenvalues `2p` and `2(1-p)`, and output partial trace `I`.

- **A page — pass after the repairs below.** Its summary accurately describes the finite-dimensional scope, factor order, trace-preservation condition, and controlled-phase caveat.
- **B page — pass.** Its summary agrees with the worked qubit example and the stated Choi convention.

Watrous, *The Theory of Quantum Information*, §2.2.2, Theorem 2.22 (book pp. 82–84), states the finite-dimensional complete-positivity, Choi, Kraus, and Stinespring equivalences. Theorem 2.26 (book pp. 87–88) gives the trace-preservation and Choi partial-trace characterization. Watrous uses the output-first Choi order; the local proofs explicitly handle the repository's input-first order. Source: <https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf>.

## Edits and evidence

- `items/def-qc-choi-matrix.md`, Definition, final paragraph: corrected the zero-output case. The displayed sum is indexed by input basis indices, so when `dim(H_out)=0` and the input dimension is positive the sum is a sum of zero terms, not an empty sum. The text now distinguishes an empty input sum from the zero-dimensional output case. This also corrects the six proof-contract quotations that cite this definition.
- `items/thm-qc-finite-kraus-choi-stinespring-equivalence.md`, Proof 2.1: replaced the prose self-reference “and 2.1” with “and 1.3”; steps 1.1–1.3 establish each equivalence with condition 1. Updated the matching proof-contract derivation and removed its self-step input. The item had no `verification.judge` record.

No defects remained that were outside this reader's edit scope. No adjudication or verification stamp was added.

## Validation

- Reflow: the Choi definition was unchanged by reflow; the equivalence theorem was reflowed.
- Precheck: Choi definition, 0 proof sections and 0 failures; equivalence theorem, pass, 1 proof checked and 0 failures.
- `node tools/proof-layout.mjs items/def-qc-choi-matrix.md items/thm-qc-finite-kraus-choi-stinespring-equivalence.md`: 2 items, 4 steps, 0 defects.

## Blocker

The live run status reports a pre-existing stage-spec blocker outside batch 5: `1-scaffold` has an invalid unit prerequisite graph because construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12 is invalid. No batch-5 mathematical blocker was found.

## Coverage limits

Both assigned pages, all 20 assigned items, all 31 direct item dependencies, the additional CP block-amplification supplier, and all eight page requirements were opened. The cited Watrous theorems were checked; the Preskill references were not separately inspected, and this review did not recursively audit every transitive foundation behind imported published dependencies.
