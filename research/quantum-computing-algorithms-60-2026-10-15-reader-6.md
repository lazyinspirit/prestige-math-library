# Step 3a reader report — batch 6

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `6`

## Opened inventory

Opened both assigned pages:

- `library/quantum-computing/trace-distance-fidelity-and-information-limits.md` (A page).
- `library/quantum-computing/trace-distance-fidelity-and-information-limits-examples.md` (B page).

Opened all 35 A-page items in manifest dependency-level order:

- Level 0: `thm-qc-unitary-group-compact`.
- Level 1: `def-qc-diamond-norm`, `def-qc-fidelity`, `def-qc-trace-distance`, `lem-qc-faithful-state-dominates-positive-operator`.
- Level 2: `def-qc-symmetric-subspace-projector`, `lem-qc-fidelity-root-formula-equivalence`.
- Level 3: `lem-qc-trace-norm-tensor-product`, `lem-qc-pure-state-trace-distance`, `lem-qc-symmetric-subspace-average-is-projector`, `thm-qc-helstrom-binary-discrimination`, `thm-qc-trace-distance-range-and-equality`.
- Level 4: `lem-qc-positive-marginals-imply-joint-support`, `thm-qc-diamond-norm-ancilla-dimension-bound`, `lem-qc-symmetric-power-irreducible`, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-fidelity-purification-characterization`.
- Level 5: `thm-qc-symmetric-subspace-dimension-and-haar-moment`, `lem-qc-fidelity-classical-measurement-minimum`, `thm-qc-fidelity-range-equality-and-products`.
- Level 6: `def-qc-broadcasting-family`, `lem-qc-optimal-cloner-attains-bound`.
- Level 7: `lem-qc-optimal-cloning-worst-case-upper-bound`, `thm-qc-channel-diamond-norm-one`, `thm-qc-trace-distance-channel-contractivity`.
- Level 8: `thm-qc-channel-composition-hybrid-bound`, `thm-qc-fidelity-data-processing-and-equality`, `thm-qc-fuchs-van-de-graaf`, `thm-qc-optimal-universal-pure-state-cloning-bound`, `thm-qc-pure-state-no-cloning`, `thm-qc-channel-tensor-error-bound`.
- Level 9: `thm-qc-exact-mixed-state-cloning-fidelity-criterion`, `thm-qc-full-rank-pair-no-broadcasting`.
- Level 10: `thm-qc-singular-pair-no-broadcasting`.
- Level 11: `thm-qc-state-family-no-broadcasting-iff-commuting`.

Opened the assigned B-page item `ex-qc-orthogonal-state-trace-distance`.

Opened current-run supplier interfaces needed by the batch proofs:

- Batch 1: `def-qc-dirac-notation-conversion`, `def-qc-trace-norm`, `thm-qc-trace-norm-duality-and-norm-properties`, `thm-qc-trace-norm-spectral-formula`, `thm-qc-hermitian-trace-norm-positive-negative-parts`.
- Batch 2: `def-qc-tensor-register-and-permutation`, `def-qc-partial-trace`, `def-qc-tensor-map`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-tensor-map-composition-and-adjoint`, `thm-qc-wire-permutation-is-unitary`.
- Batch 3: `def-qc-density-operator`, `thm-qc-density-operator-existence`, `def-qc-pure-state-and-ray`, `thm-qc-ray-projector-well-defined-and-bijective`, `thm-qc-schmidt-decomposition`.
- Batch 4: `def-qc-povm-and-outcome-law`, `def-qc-completely-positive-map`, `thm-qc-povm-probabilities-normalize`.
- Batch 5: `def-qc-kraus-representation`, `def-qc-isometric-stinespring-representation`, `def-qc-quantum-channel`, `lem-qc-linear-isometry-adjoint-identities`, `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-kraus-map-completely-positive`, `thm-qc-kraus-choi-equivalence`, `thm-qc-finite-stinespring-dilation`, `thm-qc-isometry-partial-trace-is-channel`.

Opened the relevant published dependency statements/definitions:

- `def-dimension`, `def-real-and-complex-inner-product-space`, `def-non-negative-and-positive-operator`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-orthogonal-projection`, `prop-orthogonal-projection-formula-and-linearity`, `def-self-adjoint-and-normal-endomorphism`, `def-trace-of-an-endomorphism`, `def-matrix-product-and-identity-matrix`.
- `def-compact-space`, `def-hausdorff-space`, `def-topological-group`, `def-group`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-axiom-of-choice`, `cor-normalized-haar-probability-on-a-compact-group`.
- `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-matrix-multiplication-laws`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `thm-finite-dimensional-isometry-characterisations`, `thm-heine-borel-rn`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-singular-value-decomposition`, `thm-polar-decomposition`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`.

Read the relevant authoritative quantum-information source passages:

- John Watrous, *The Theory of Quantum Information*, [PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf): Proposition 3.44 and Theorem 3.46 (diamond-norm properties and ancilla reduction, §§3.3.2–3.3.4, PDF pp.170–180); Theorem 3.33 (Fuchs–van de Graaf, §3.2, PDF p.168); Theorem 7.28 and its proof (universal pure-state cloning, §7.2, PDF pp.432–434).
- H. Barnum, C. M. Caves, C. A. Fuchs, R. Jozsa, and B. Schumacher, “Noncommuting Mixed States Cannot Be Broadcast,” [arXiv:quant-ph/9511010](https://arxiv.org/pdf/quant-ph/9511010): pair broadcasting statement and construction, and the fidelity/equality argument Eqs. (4)–(31), PDF pp.2–9.

The batch 6 proof-contract scope and each assigned item's citation/derivation/boundary summary were checked; detailed derivation rows relevant to the repairs were reviewed and the affected row was updated. The authors’ boundary assessments were treated as evidence only.

## Edits

- `items/thm-qc-fidelity-data-processing-and-equality.md`: changed the title to “Fidelity Data Processing.” Its statement proves monotonicity and explicitly says that no general equality characterization is asserted, so the previous title promised content the statement excludes. Inserted the required blank line between its two proof steps. No mathematical statement or proof argument changed.
- `items/lem-qc-symmetric-power-irreducible.md`: added the (d=1) case to step 2.1. In that case step 1.1 gives the single weight vector, which step 2.1 puts in every nonzero invariant subspace; the subsequent transfer step requires distinct indices (i\ne j), unavailable when (d=1). Updated the batch-6 proof contract’s derivation for step 2.1 to match the repair, and inserted blank lines between the numbered proof paragraphs.
- Neither changed item contained a `verification.judge` record.
- Reflow: both items reported `unchanged` after the final edit. Precheck: both passed (`1 checked, 0 failing` each). Final proof-layout command on both changed paths: `2 items, 7 steps, 0 defects`.

No other item or page prose was edited.

## Unedited defects

None confirmed in the assigned pages or items, and none found in the relied-on current-run supplier interfaces. The reader findings array is empty.

## Page verdicts

- `trace-distance-fidelity-and-information-limits` (A): the page summary accurately states the root-fidelity and half-trace-distance conventions and describes the reviewed information, cloning, and broadcasting results. No page-prose repair was needed.
- `trace-distance-fidelity-and-information-limits-examples` (B): the summary matches the assigned orthogonal-qubit example and its unit trace-distance and total-variation calculations. No page-prose repair was needed.

## Blocker

The batch 6 review has no mathematical blocker. The autopilot status for the run reports a run-level stage-spec blocker: `1-scaffold` has an invalid unit prerequisite graph because construction scheduling item identity `def-qc-effective-unitary-matrix-input` is invalid in batch 12. This is outside batch 6 and was not changed.

## Coverage note

All assigned pages and items were opened, and the relevant current-run supplier interfaces were checked against the uses in the consumer proofs. The assigned consumer items were first read in manifest dependency-level order before the cross-batch supplier files were opened; the supplier interfaces were then reviewed and the consumer arguments reassessed against them, so the literal supplier-first reading order was not maintained across batch boundaries. No unresolved mathematical uncertainty remains in the reviewed claims.
