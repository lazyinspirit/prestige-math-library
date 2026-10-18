# Reader report — batch 37

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: Step 3a reader  
Review date: 2026-10-18

## Opened inventory

Opened both assigned pages:

- A page `spin-geometry-dirac-and-index-theory`: `library/differential-geometry/spin-geometry-dirac-and-index-theory.md`.
- B page `spin-geometry-dirac-and-index-theory-examples`: `library/differential-geometry/spin-geometry-dirac-and-index-theory-examples.md`.

Opened all 23 assigned items in supplier order, including the lower-level example suppliers before their consumers:

- A page: `def-ahat-and-relative-chern-character-forms`; `lem-good-cover-nerve-computes-singular-cohomology`; `def-graded-hermitian-clifford-module-and-geometric-dirac`; `lem-geometric-dirac-operator-is-well-defined`; `lem-lichnerowicz-formula-for-geometric-dirac-operators`; `lem-dirac-maximal-domain-is-h1`; `lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel`; `lem-dirac-heat-trace-and-mckeen-singer-index`; `lem-dirac-heat-parametrix-has-graph-norm-remainder`; `def-spin-lift-of-oriented-orthonormal-frame-bundle`; `def-even-dimensional-spinor-bundle-chirality-and-spin-connection`; `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`; `lem-spinor-and-clifford-associated-bundles-are-well-defined`; `lem-getzler-radial-gauge-oscillator-leading-term`; `prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero`; `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character`; `thm-geometric-clifford-module-dirac-index-formula`; `cor-spin-dirac-index-formula-with-arbitrary-twist`.
- B page: `cex-dirac-on-euclidean-space-is-not-fredholm`; `ex-complex-projective-plane-has-nonspin-tangent-bundle`; `ex-flat-even-torus-spin-dirac-has-index-zero`; `ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel`; `ex-twisted-sphere-dirac-index-and-curvature-term`.

Opened the relevant supplier statements and proofs needed to check the reviewed claims, including `lem-good-cover-nerve-computes-singular-cohomology`, `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`, `thm-cellular-homology-computes-singular-homology`, `thm-cellular-approximation-for-maps-of-cw-pairs`, `thm-covering-space-lifting-criterion`, `thm-oriented-real-vector-bundles-are-classified-by-bso`, `cor-euclidean-spin-is-universal-cover`, `thm-real-pin-spin-topological-double-covers`, `thm-naturality-of-stiefel-whitney-classes`, `thm-whitney-sum-formula-for-stiefel-whitney-classes`, `thm-mod-two-reduction-of-chern-classes`, `thm-first-chern-class-classifies-complex-line-bundles`, `lem-cohomology-ring-of-infinite-complex-projective-space`, `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`, the Sobolev/Fourier and compact elliptic/Hodge suppliers, the Clifford-module and compatible-connection suppliers, the sphere-curvature supplier, and the characteristic-form and top-form integration suppliers.

External source checks used:

- Hatcher, *Algebraic Topology*, Corollary 4G.3, printed p. 459, for the good-cover nerve comparison: <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>.
- Wernli, *Lecture Notes on Spin Geometry*, §§2.3, 3.3 and 4.4, for spin structures, the Lichnerowicz formula, and the local oscillator/Mehler calculation: <https://arxiv.org/pdf/1911.09766>.
- Melrose, *Analysis, Loops and Spin*, §1.15, printed pp. 31–33, for transition lifts and the central-sign cocycle: <https://math.mit.edu/~rbm/Loops2024/AnLoSp.pdf>. Melrose leaves the identification with (w_2) and the (H^1)-torsor details to the reader; those claims were checked in the assigned proof rather than attributed to that section.

The Nicolaescu PDF appears in item/source metadata but its full relevant text was not independently read for this review. No conclusion below relies exclusively on that source.

## Repairs made

No page prose was edited. Repairs were limited to assigned in-flight items.

- Removed the malformed stray `erification: precheck:n/a` metadata fragment from `def-ahat-and-relative-chern-character-forms`, `def-graded-hermitian-clifford-module-and-geometric-dirac`, and `def-spin-lift-of-oriented-orthonormal-frame-bundle`.
- In `lem-lichnerowicz-formula-for-geometric-dirac-operators`, scoped the formal symmetry/Laplace-type conclusion to the compact boundaryless case of dimension at least two, matching the exact domain of the cited Laplace-type definition. Retained the principal-symbol assertion in all dimensions and stated the zero-dimensional case separately. Updated the matching proof contract.
- In `lem-dirac-heat-trace-and-mckeen-singer-index`, replaced the invalid eigenvalue-counting estimate: an operator-norm bound on point evaluation does not bound the Hilbert–Schmidt norm or the dimension of the low-energy eigenspace. The revised step uses finitely many local cell averages, the (H^1) energy bound from the Lichnerowicz identity, and Poincaré estimates to obtain an injective finite-rank map on each low-energy space, hence polynomial eigenvalue counting. The associated eigenfunction bounds then give the required trace and kernel convergence. Updated the proof contract for step 1.1.
- In `lem-getzler-radial-gauge-oscillator-leading-term` and `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character`, made explicit that the relative curvature term acts by exterior multiplication and wrote it as (F^{V/S}\wedge). Updated the corresponding proof contracts.
- In `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`, added the covering-space lifting criterion for transition maps on contractible overlaps; made the pullback/refinement naturality step explicit; and completed the universal cellular obstruction comparison. The proof now checks the (H^2(BSO(n);\mathbb F_2)\cong\mathbb F_2) calculation, defines the two-cell sign obstruction, explains how changes on the one-skeleton alter it by a cellular coboundary, checks the three-cell cocycle condition, and compares the class on the good-cover nerve with the lifted-transition sign cocycle. Added the required cellular homology, cellular approximation and covering-criterion suppliers to its facts/dependencies and synchronized its proof contract.
- Made choice hypotheses explicit where the reviewed claims use them: the cohomological interpretation of `def-ahat-and-relative-chern-character-forms`; the geometric Dirac well-definedness lemma; the even-dimensional spinor definition; and the assigned projective-plane, torus, positive-curvature sphere, and twisted-sphere examples. Added the corresponding assumptions to the relevant `Given` clauses, proof tags and proof-contract inputs, including an explicit AC fact on the positive-curvature sphere example. `cex-dirac-on-euclidean-space-is-not-fredholm` now states Countable Choice and includes the Sobolev-space supplier; its Fourier-multiplier step proves both directions of the (H^1) domain characterization.
- Updated the affected source statements and derivations in `research/non-ml-math-remaining-81-2026-10-18-batch-37.proof-contracts.json`. No edited item contained a stale `verification.judge` record.

## Unedited defect

The published dependency `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` has an ill-formed ending in Proof step 4.1: `[step 3.1, step 2.2]. [step 3.1, step 2.2]`. It has duplicated tags, and the punctuation follows the first tag group instead of preceding the single final tag group. The mathematics of the step is unaffected. This published item is outside the edit scope; assigned consumer `lem-good-cover-nerve-computes-singular-cohomology` depends on it directly. It is recorded in the findings JSON.

## Page verdicts

- `spin-geometry-dirac-and-index-theory` (A): reviewed all 18 assigned items and the page summary. The identified in-scope defects were repaired; no unresolved defect was found in the assigned page or assigned items. The published dependency formatting defect above remains reported.
- `spin-geometry-dirac-and-index-theory-examples` (B): reviewed all five assigned examples and the page summary. The identified assumption and domain gaps were repaired; no unresolved defect was found in the assigned page or assigned examples.

## Validation and blocker

Reflow and precheck completed with exit code 0 for all 16 edited items. Precheck reported `PASS` for 13 items and `0 checked, 0 failing` for the three definitions that have no proof to check. After the final item edits and reflow, one batched proof-layout run checked all 16 paths: 16 items, 51 steps, 0 defects. No test suite was run; the dispatch required the item validators and formatter, not tests.

The recomputed autopilot status remains `running`. At this report snapshot it still lists batch 37 as not yet counted in `3a-read` coverage, although this report and findings file are present; no autopilot state transition or dispatch result record was written by this reader. The recorded blocker is separate: `3a-collect` / `collect-18` failed three times for batch 18. This is a workflow-accounting state, not a mathematical review blocker for batch 37.
