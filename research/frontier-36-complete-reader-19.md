# Step 5a reader report — batch 19

Run: `frontier-36-complete`  
Batch: `19`  
Reader scope: the two manifest pages, all 21 assigned items, and the current published statements and source passages needed for the checked arguments.

## Opened assigned inventory

Pages:

- `library/differential-geometry/chern-weil-theory-and-characteristic-forms.md` (A page)
- `library/differential-geometry/chern-weil-theory-and-characteristic-forms-examples.md` (B page)

Assigned items:

- `items/def-invariant-polynomial-on-a-matrix-lie-algebra.md`
- `items/def-complex-linear-and-compatible-bundle-connections.md`
- `items/lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles.md`
- `items/def-evaluation-of-an-invariant-polynomial-on-curvature.md`
- `items/lem-invariant-polynomials-annihilate-covariant-commutators.md`
- `items/lem-an-invariant-polynomial-of-curvature-is-closed.md`
- `items/def-the-chern-weil-homomorphism.md`
- `items/lem-transgression-between-two-connections-is-exact.md`
- `items/thm-chern-weil-homomorphism-is-independent-of-connection-and-natural.md`
- `items/def-chern-pontryagin-and-euler-characteristic-forms.md`
- `items/lem-second-countable-smooth-manifolds-have-cw-homotopy-type.md`
- `items/lem-first-chern-form-agrees-with-the-topological-line-class.md`
- `items/lem-oriented-real-two-plane-splitting-with-injective-real-pullback.md`
- `items/lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback.md`
- `items/thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals.md`
- `items/prop-chern-weil-forms-obey-direct-sum-and-pullback-formulas.md`
- `items/rem-integral-torsion-is-not-detected-by-real-characteristic-forms.md`
- `items/ex-curvature-and-first-chern-form-of-a-line-bundle.md`
- `items/ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes.md`
- `items/ex-pontryagin-forms-from-a-real-connection.md`
- `items/cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class.md`

The four published prerequisite pages listed by the A-page manifest were also opened:

- `library/differential-geometry/riemann-curvature-and-riemannian-submanifolds.md`
- `library/differential-geometry/lie-groups-invariant-fields-and-the-exponential-map.md`
- `library/algebraic-topology/chern-and-pontryagin-classes-by-splitting-and-complexification.md`
- `library/differential-geometry/the-de-rham-theorem-and-degree.md`

## Dependency and source checks

Current published statements needed for the arguments were checked, including the bundle-curvature structure equation and second Bianchi identity; pullback and local connection transformation rules; Chern and Pontryagin class conventions; the top-Chern/Euler comparison; complexification, conjugation, mod-two reduction, and the two-torsion conclusion for odd Chern classes; the Pontryagin Whitney product away from 2 and the top Pontryagin square formula; Thom classes, Euler naturality and Whitney product; the projective-bundle and Leray–Hirsch statements; the projective-fiber generator and projective-space cohomology; numerable-fibration hypotheses; the long exact sequence of a pair; the universal coefficient sequence; Stokes; and the de Rham comparison. These statements were used at the hypotheses stated in the corresponding arguments.

Two cited mathematical sources were opened at their relevant full passages:

- Milnor and Stasheff, *Characteristic Classes*, Appendix C, printed pp. 315–317, [PDF](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/milnor-stasheff2.pdf). The hyperbolic-surface construction on pp. 316–317 lifts the circle bundle through a two-fold cover, halves its Euler class, lifts the structure group to `SL(2,R)`, and retains a discrete structure group; the resulting flat plane bundle has Euler number `1-g`. This directly supports the genus-two value `-1` and the flat witness in the assigned example. The related tangent-bundle Euler-number statement is in Chapter 11, §11.5, Corollary 11.12, printed p. 138.
- Stefan Haller, *Advanced Smooth Integration Theory*, §II.4.5, Example II.4.5, printed pp. 91–92 (PDF pp. 90–91), [PDF](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf). The local-frame calculation gives the stated curvature normalization and the integral over `CP^1`, supporting the assigned first-Chern-form example.

## Review results

No confirmed mathematical defect was found in the current assigned item prose. In particular, the Chern–Weil normalization, graded commutator signs, transgression formula, naturality and connection-independence argument, characteristic-form conventions, the two splitting constructions, and the direct-sum/pullback claims are consistent with their stated hypotheses. The distinction between strict form-level direct-sum identities for the metric connections and cohomological identities for arbitrary real connections is preserved. The flat genus-two witness is supported by the source passage above. No item or page prose was edited; therefore no proof contract changed, no `verification.judge` record was removed, and reflow/precheck were not run.

Uneditable mathematical defects: none identified.

## Page verdicts

- **A page, `chern-weil-theory-and-characteristic-forms`:** no defect identified in its current summary. Its stated progression and qualifications match the reviewed item claims.
- **B page, `chern-weil-theory-and-characteristic-forms-examples`:** no defect identified in its current summary. The examples are consistent with the reviewed item statements and conventions.

These are reader findings, not a workflow judge record or self-certification.

## Blocker and coverage note

The requested live state directory `.autopilot/frontier-36-complete` is absent. Recomputing status for run `frontier-36-complete` reports that the workflow revision differs, says there is no configured run and no `status.md`, and requires a fresh run/state directory. The only inspected frontier state directory is `.autopilot/frontier-36-twelve-categories`; its on-disk status is stalled at `1-drift` with no in-flight item and a failed gate. It does not match this dispatch run. The assigned files are present as new authoring files marked for `frontier-36-complete`, so their mathematical review was completed, but the live run provenance/state could not be verified.

Coverage limitation: all assigned pages and all 21 assigned items were read, along with the prerequisite pages and the relevant current dependency statements and source passages listed above. I did not independently re-audit the complete transitive proof closure of every published dependency. No claim of live-run certification is made.
