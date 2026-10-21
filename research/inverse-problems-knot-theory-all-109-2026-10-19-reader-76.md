# Step 3a reader report — batch 76

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader · Batch: `76`

## Result

I made no changes to assigned items or pages. I found one uneditable proof defect in a batch-74 in-run dependency. It affects the locally flat sliceness implication and the assigned corollary and counterexample that depend on it. The remaining assigned algebraic proofs and computations are supported by their inspected suppliers.

## Opened inventory

Assigned pages:

- `library/knot-theory/fox-milnor-factorization-and-slice-obstructions.md`
- `library/knot-theory/fox-milnor-factorization-and-slice-obstructions-examples.md`

Assigned items, read in the manifest's dependency order:

- `lem-metabolic-seifert-form-implies-fox-milnor-factorization`
- `thm-locally-flat-slice-implies-fox-milnor-factorization`
- `cor-nonfactorization-obstructs-sliceness`
- `thm-metabolizer-implies-levine-tristram-signature-vanishing`
- `ex-knot-kt-23-worked-cases`
- `cex-knot-kt-23-boundary-case`

The four A-page prerequisite pages were also opened: `alexander-polynomial-from-seifert-matrices`, `levine-tristram-signatures-and-arf-invariant`, `smooth-and-topological-knot-concordance`, and `algebraic-knot-concordance-and-metabolic-forms`.

Opened item suppliers used by the assigned arguments included `def-axiom-of-choice`, `def-countable-choice`, `def-knot-connected-sum-and-prime-knot`, `def-knot-seifert-pairing-and-matrix`, `def-reverse-mirror-of-oriented-knot`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-seifert-surface`, `def-metabolic-seifert-form-and-algebraic-knot-concordance`, `lem-knot-connected-sum-well-defined`, `lem-slice-disk-induces-seifert-metabolizer`, `lem-locally-flat-slice-surface-bounds-seifert-hypersurface`, `lem-metabolic-seifert-form-implies-fox-milnor-factorization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-square-seifert-presentation-and-alexander-normalization`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-positive-hopf-plumbing-has-trefoil-seifert-matrix`, `lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form`, `lem-general-knot-reverse-mirror-sum-is-ribbon`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-seifert-pairing-well-defined`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-rational-isotropic-subspace-saturates-to-integral-metabolizer`, and `lem-linking-number-equals-four-dimensional-intersection-number`.

For the slice-to-metabolizer dependency path, I additionally opened `def-oriented-intersection-number`, `thm-poincare-lefschetz-duality`, `thm-poincare-duality-for-oriented-topological-manifolds`, `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`, `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `thm-smooth-singular-chains-compute-singular-homology`, and `thm-compact-topological-three-manifolds-admit-finite-pl-triangulations`.

The current batch manifest, dependency map, coverage record, proof contracts, and author notes were consulted as navigation/evidence only. No batch-76 rendered evidence bundle was found by the run-local filename search. The active autopilot status was checked; it showed batch 76 in the Step 3a read stage. The reported `collect-49` and `split-57` failures were unrelated to this batch.

## Mathematical review

- `lem-metabolic-seifert-form-implies-fox-milnor-factorization`: the adapted basis gives the zero upper-left block; swapping row blocks and transposing the lower-left block yields the stated exact identity, including the rank-zero case.
- `thm-locally-flat-slice-implies-fox-milnor-factorization`: the algebraic implication follows from the preceding matrix lemma and the determinant normalization. Its locally flat branch depends on the slice-metabolizer supplier and the issue recorded below.
- `cor-nonfactorization-obstructs-sliceness`: the contrapositive is valid conditional on the supplier theorem.
- `thm-metabolizer-implies-levine-tristram-signature-vanishing`: the nonroot determinant condition gives a nonsingular Hermitian matrix; the adapted metabolizer block then reduces by congruence to a hyperbolic form of signature zero.
- `ex-knot-kt-23-worked-cases`: the two trefoil blocks, graph metabolizer, determinant, and reciprocal norm calculation are consistent with the inspected matrix and ribbon suppliers.
- `cex-knot-kt-23-boundary-case`: the determinant at `-1` has absolute value `3`, which is not a square; the displayed Hermitian matrix is negative definite with signature `-2`. These computations refute the algebraic sliceness conditions. Its claimed locally flat nonsliceness conclusion also depends on the issue below.

The A page has the expected four items and prerequisite edges; its body is empty and `page_layout: compact-v1` is present. The B page has the expected two examples, requires the A page, has an empty body, and preserves `page_layout: compact-v1`. Neither page contains a summary. Both page verdicts are **no page defect found**.

The six assigned items contain no TikZ/tikzcd diagrams. The opened dependency schematics were consistent with their captions and were not used as proof premises.

## Uneditable finding

`lem-linking-number-equals-four-dimensional-intersection-number` is a draft item in current-run batch 74, outside this reader's write scope. Its Statement permits finite rational 2-chains, but the opened `def-oriented-intersection-number` defines intersections for smooth maps from compact oriented smooth manifolds and for complementary-dimensional smooth submanifolds; it does not define intersection of the stated finite rational chains. In Proof 1.1, after obtaining a finite rational singular 3-chain `Z` with boundary `P-P'`, the proof says to put `Z` and `Q` in general position and then treats `Z∩Q` as a compact oriented 1-chain. No chain model, relative smoothing/approximation result, or relative chain-level general-position theorem is among this supplier's hypotheses or dependencies. This leaves the intersection number used to prove independence undefined or unjustified for the stated inputs.

The smallest repair is to define the allowed chains and their intersection product, then prove or cite a relative general-position/chain-intersection result preserving the boundary collars; alternatively, restrict the statement to a chain class for which that result is supplied. The finding is routed to assigned consumers `thm-locally-flat-slice-implies-fox-milnor-factorization`, `cor-nonfactorization-obstructs-sliceness`, and `cex-knot-kt-23-boundary-case`.

The local smooth and topological branches in `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` were checked against their cited inputs. Freedman–Quinn, *Topology of 4-Manifolds*, 2013 reformatted §9.5, Theorem 9.7, printed pp. 144–145/PDF pp. 158–159, supplies a relative normal bundle; its erratum notes a stronger local-`π₂` condition, which the item's local chart model also checks. Quinn, “Topological transversality holds in all dimensions,” Theorem on printed p. 145, supplies the strongly relative transversality operation used for the TOP fiber. These sources support those geometric steps; they do not fill the separate chain-intersection gap above.

Fox–Milnor, §2, Theorem 2, printed pp. 262–263, states the reciprocal-norm condition for its locally flat PL slice setting. Livingston, §2.2, Theorem 2.6, printed p. 323, is explicitly in the survey's smooth-setting section; §3.3, printed p. 326, gives the metabolic reciprocal-norm factorization. Conway, §2.1 and Remark 2.10, printed pp. 3–6, gives the Hermitian-form convention and metabolic vanishing discussion. The local assigned proofs retain the needed category and nonroot qualifications.

## Edits, validation, and blockers

- Edits: none. No assigned defect was confirmed that could be repaired within batch 76.
- No item changed, so reflow, precheck, and proof-layout were not run.
- Blocker: repair/review of the batch-74 chain-intersection supplier is needed before the assigned locally flat sliceness implication, its corollary, and the counterexample's topological conclusion can be treated as fully supported by that dependency path.
- Coverage limitation: I checked all assigned carriers, their direct declared item suppliers, the four A-page prerequisite pages, the key batch-74 slice/hypersurface path, and the cited source passages listed above. I did not independently audit every recursive proof closure beneath every supplier. The Rolfsen PDF search result exposed the cited matrix passage, but a full-page open timed out; the current local trefoil-matrix proof and its computation were reviewed directly.
