# Step 3a reader report — batch 99

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-99`)

## Opened assigned inventory

Opened both assigned page files:

- A page: `library/knot-theory/character-varieties-and-the-a-polynomial.md`
- B page: `library/knot-theory/character-varieties-and-the-a-polynomial-examples.md`

Opened all 49 assigned items in supplier-first dependency order. The inventory below is grouped by the manifest's dependency level.

- Level 0: `lem-fixed-field-of-automorphisms-of-c-over-q-is-q`; `lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable`; `lem-sl2-matrix-invariants-by-epsilon-contractions-and-traces`; `lem-equal-irreducible-sl2-traces-determine-conjugacy`; `lem-torus-presentation-irreducible-peripheral-eigenvalue-curves`; `lem-two-generator-sl2-word-traces-reduce-to-three-coordinates`; `lem-absolutely-irreducible-sl2-representations-have-quadratic-trace-field-models`; `lem-finite-homology-kernel-lines-have-rational-rank-charts`; `lem-nonparabolic-adjoint-torus-homology-has-explicit-peripheral-basis`; `lem-partial-projective-resolutions-determine-tensor-homology-in-degree-one`.
- Level 1: `lem-laurent-algebraic-curve-has-principal-equation`; `lem-automorphism-stable-laurent-ideals-descend-to-rational-coefficients`.
- Level 2: `lem-finite-affine-incidence-projection-and-curve-component-selection`.
- Level 4: `def-boundary-slope-of-an-incompressible-surface`; `lem-presentation-complex-computes-twisted-first-homology-and-peripheral-cycles`.
- Level 5: `def-sl-two-abelian-surgery`; `def-sl-two-character-variety-and-peripheral-eigenvalues`; `lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber`; `op-two-boundary-slopes-characterize-torus-knots`.
- Level 6: `lem-sl2-representation-variety-is-affine`; `lem-figure-eight-two-meridian-presentation-and-preferred-longitude-word`.
- Level 7: `def-adjoint-twisted-homology-and-culler-shalen-data`; `lem-knot-boundary-eigenvalue-locus-defined-over-q`; `lem-sl2-trace-functions-are-regular-and-invariant`.
- Level 8: `def-knot-a-polynomial`; `lem-sl2-character-trace-coordinate-algebra`.
- Level 9: `def-enhanced-a-polynomial`; `lem-sl-two-character-trace-coordinate-model`; `op-ordinary-a-polynomial-detects-torus-knots`.
- Level 10: `def-character-variety-logarithmic-slope-invariant`; `lem-figure-eight-character-and-longitude-traces`; `lem-knot-a-polynomial-boundary-elimination`; `lem-torus-knot-enhanced-a-polynomial`; `op-a-polynomial-for-knots-in-other-three-manifolds`; `op-a-polynomial-newton-parallelogram-characterizes-torus-knots`; `lem-irreducible-sl2-character-components-have-specializing-quadratic-models`.
- Level 11: `lem-adjoint-twisted-slope-is-rational-on-a-character-component`; `thm-a-polynomial-boundary-restriction-and-surgery-detector`; `thm-ccgls-newton-edge-slope-is-boundary-slope`.
- Level 12: `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`; `thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope`; `ex-knot-kt-20-worked-cases`.
- Level 13: `thm-benard-florens-rodau-logarithmic-gauss-formula`.
- Level 14: `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`.
- Level 15: `thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots`; `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots`.
- Level 16: `cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots`; `thm-baldwin-sivek-two-boundary-slope-alternative`.
- B-page level 6: `cex-knot-kt-20-boundary-case`.

The cited supplier statements and proof sections needed for these claims were opened in dependency order. In particular, the repair below checked the complement-connectedness and exterior-retraction suppliers; the logarithmic-slope arguments were checked against their adjoint-homology, peripheral-kernel and valuation suppliers; the Newton-edge conclusions were checked against the valued finite-model and lattice-tree construction. The cited Bénard–Florens–Rodau paper was consulted at Theorem 4.1, Remark 4.2 and Theorem 5.2, including the relevant §4–§5 argument and its actual-homology slope convention. Baldwin–Sivek's cited theorem statements and the relevant classification interfaces were consulted directly; their gauge-theoretic proofs are treated as imported results where the items say so.

## Edits and validation

1. In `lem-presentation-complex-computes-twisted-first-homology-and-peripheral-cycles`, the knot-exterior application used finite presentability of the exterior group, while its existing supplier applications established only connectedness and the retraction from the open complement. I corrected this by using the complement's finite CW type and the retraction, recording both in F7, then adding Proof 7.1: a connected finite CW complex has a finite presentation from its finite 1-skeleton and 2-cell attaching maps. This supplies the finite presentation required by the Statement without assuming a presentation complex is homotopy equivalent to the exterior. I updated the proof contract's F1/F7 usages and the new step record. No `verification.judge` record was present.
   - Reflow: `unchanged`.
   - Precheck: `PASS` (1 checked, 0 failing).

2. In `thm-benard-florens-rodau-logarithmic-gauss-formula`, Proof 5.1 referred to itself while claiming to complete the theorem. Steps 3.2 and 4.2 already prove the two clauses on their full stated loci, so I replaced the circular sentence with a direct conclusion citing those steps and the imported all-character theorem used for exceptional admissible points. I updated the F1 contract usage to remove the obsolete self-referential step use. No `verification.judge` record was present.
   - Reflow: `unchanged`.
   - Precheck: `PASS` (1 checked, 0 failing).

The final required layout pass was run once on both changed item paths: `proof-layout: 2 items, 16 steps, 0 defects`. No other assigned item or page was edited. The proof contracts changed only for the two repaired items.

## Uneditable finding

The current-run supplier `thm-nonelliptic-lattice-tree-actions-produce-essential-boundary-surfaces`, Proof 2.1, asserts that the midpoint inverse image of its equivariant PL map is a locally flat surface. The construction only avoids midpoint values at domain vertices. The next sentence infers a local product from the existence of a nonzero affine direction in the least incident simplex, but that does not control how the level meets the links of lower-dimensional simplices: several sheets can meet with branching along a domain edge. No relative equivariant PL transversality or link check is supplied before later smoothing and compression steps use the set as a surface. This leaves the essential-surface conclusion unproved. The proof needs a relative equivariant general-position construction fixing the prescribed boundary collar, or an explicit verification that each midpoint preimage has the local PL 2-manifold link, before smoothing. This producer is outside batch 99's edit scope. The same source defect blocks the assigned consumers `thm-ccgls-newton-edge-slope-is-boundary-slope` and `thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope`; both depend on the claimed surface construction. The finding is fatal to those uses. The source hash recorded at review was `c4a6a78b97b82bfcc48b23dd41197173f837359ca861e7b8ffc1c8b5ea91f071`.

No other confirmed defect remained in the assigned files. No proposed withdrawal was removed or altered.

## Diagram review

Reviewed both diagrams in batch 99. In `thm-a-polynomial-boundary-restriction-and-surgery-detector`, the square's arrows are the two boundary inclusions and the two quotient maps to the filled manifold, matching the stated van Kampen pushout. In `ex-knot-kt-20-worked-cases`, the four crossings encode the stated braid word `σ₁σ₂⁻¹σ₁σ₂⁻¹`; the continuous and interrupted strands match the declared over/under convention. The diagrams agree with their surrounding text, so neither needed repair.

## Page verdicts

- `character-varieties-and-the-a-polynomial` (A): page presentation passes. Its file is YAML frontmatter only with an empty Markdown body and retains its inventory and layout metadata. The page's assigned mathematical content has the uneditable supplier finding recorded above.
- `character-varieties-and-the-a-polynomial-examples` (B): page presentation passes. Its file is YAML frontmatter only with an empty Markdown body and retains its inventory and layout metadata. The assigned counterexample and worked figure-eight example, including the braid diagram, were reviewed; no page-level defect was found.

## Blocker and coverage note

The outstanding blocker is the missing regular-level argument in the out-of-scope current-run lattice-tree supplier. This review did not edit that source. All 49 assigned items and both assigned pages were opened; the supplier gap is the only confirmed uneditable defect. Imported gauge-theoretic classification results were checked at their cited primary theorem interfaces, not reproved locally.
