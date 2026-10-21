# Step 3a reader report — batch 79

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader  
Live state: autopilot status still listed batch 79 as missing from 3a-read and 3a-split; no worker was in flight.

## Opened inventory

Pages opened:

- library/knot-theory/smooth-sliceness-and-four-ball-genus-obstructions.md — draft, compact-v1 YAML frontmatter only; no Markdown body or summary.
- library/knot-theory/smooth-sliceness-and-four-ball-genus-obstructions-examples.md — draft, compact-v1 YAML frontmatter only; no Markdown body or summary.

Assigned items opened in manifest dependency order:

- Level 0: def-integral-intersection-lattice-of-a-simply-connected-four-manifold; lem-full-rank-unimodular-sublattice-has-index-one.
- Level 1: lem-integral-intersection-pairing-is-unimodular; def-asd-moduli-fredholm-index-and-lattice-setup; def-intersection-lattice-of-a-four-manifold-with-boundary; def-e8-root-lattice.
- Level 2: thm-asd-deformation-complex-index-formula; lem-boundary-intersection-pairing-well-defined-and-nondegenerate; thm-e8-lattice-is-even-unimodular-and-nondiagonal; lem-taubes-positive-definite-instanton-existence.
- Level 3: thm-freedman-e8-topological-realization; lem-asd-regularity-perturbation-and-orientability.
- Level 4: lem-uhlenbeck-compactness-and-removable-singularities.
- Level 5: lem-donaldson-reducible-ends-and-one-instanton-compactification.
- Level 6: thm-donaldson-definite-diagonalization; lem-slice-branched-cover-produces-definite-four-manifold.
- Level 7: cor-lattice-obstruction-to-smooth-sliceness.
- Assigned examples: ex-knot-kt-26-worked-cases; cex-knot-kt-26-boundary-case.

## Review evidence

Opened the direct algebraic and topological interfaces used by the lattice and gluing arguments, including def-middle-dimensional-intersection-form; cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant; Poincare duality; the universal-coefficient theorem; first Hurewicz; finite-CW and Poincare–Lefschetz results; the rational-homology-ball branched-cover lemma; Seifert–van Kampen; Mayer–Vietoris; rationalization; and the collar theorem.

Read the local gauge-theory dependencies needed for the assigned Donaldson chain, including the constructed critical-drift inverse, Euclidean and curved weak-ASD regularity, Neumann and normal-boundary estimates, small-curvature gauges, Green-weighted correction, annular gauges, finite-energy point removal, Coulomb transition compactness, Sobolev slices, transversality, determinant-line orientability, the charge-one sphere classification, neck decay, reducible links, and the small-instanton end. The E8 diagram in def-e8-root-lattice matches its stated edge set: the branch is at vertex 3, with arms of lengths 2, 4, and 1.

The proof interfaces support the uses made of them in the assigned items. The E8 determinant, positivity, evenness, and nonembedding calculations are correct. The sign-fixed Fredholm index is consistent with F_A^- = 0 and c2(P)[X] = -1. The sliceness corollary remains explicitly conditional on boundary normal generation; its proof does not infer that hypothesis from rational homology.

I opened Donaldson's primary paper, *An Application of Gauge Theory to the Topology of 4-Manifolds*: Theorem 1, printed p. 280, and the method-of-proof passage, printed pp. 280–281, state the smooth-category conclusion and the compact 5-manifold/signature argument with initially undetermined CP2-link signs. Its bundle-classification discussion is on printed p. 282. I also downloaded and read Freedman's *The Topology of Four-Dimensional Manifolds*, Theorem 1.5 and its existence proof, printed pp. 368–369, and Theorem 1.7, printed p. 371. The existence clause gives a closed simply connected almost-smooth topological realization of the E8 form, with no smooth structure asserted at its exceptional point. The local E8 arithmetic supplies the remaining counterexample inference.

The current batch-79 proof-contract file retains unresolved-prerequisite records for the Donaldson theorem. I treated those records as review leads, not verdicts, and did not edit the contracts or claim a gate result.

## Edits and defects

No assigned item or page prose was edited. I confirmed no defect requiring an uneditable finding. No reflow, precheck, or proof-layout run was required because no item changed.

## Page verdicts

- Smooth sliceness and four-ball genus obstructions: metadata-only A page; its assigned inventory matches the manifest and it contains no forbidden summary.
- Smooth sliceness and four-ball genus obstructions — Examples and Counterexamples: metadata-only B page; its examples inventory matches the manifest and it contains no forbidden summary.

## Blocker and coverage limit

The final autopilot status still showed batch 79 missing from 3a-read and 3a-split. A global 3a-split blocker was reported for batch 71 failing three times; that blocker is outside this assignment. No batch-79 worker was active.

All 19 assigned items and both assigned pages were opened. The transitive dependency closure is much larger than this batch; I did not audit every proof in that closure. In particular, I checked the statement interfaces and the five-bordism proof for the topological finite-projective L2-signature branch, but did not independently re-prove the finite-projective duality and von Neumann inertia suppliers. The Taubes primary article was not accessible through the web source tool; the local Taubes construction and the cited Donaldson interface were reviewed, but this source-reading limit remains.
