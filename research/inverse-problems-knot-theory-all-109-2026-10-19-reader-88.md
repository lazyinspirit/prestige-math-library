# Step 3a reader report — batch 88

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader (reader-88)  
Date: 2026-10-21

## Opened inventory

Assigned pages:

- library/knot-theory/kontsevich-integral-and-universal-finite-type-invariants.md (A, draft, compact-v1).
- library/knot-theory/kontsevich-integral-and-universal-finite-type-invariants-examples.md (B, draft, compact-v1).

Both assigned page files contain YAML frontmatter only. Their item/example lists match the batch manifest; neither has a Markdown body or summary. I also opened the required A page library/knot-theory/vassiliev-invariants-and-chord-diagrams.md; it is likewise frontmatter-only.

Assigned items, read in manifest dependency order:

1. items/def-conway-polynomial.md
2. items/def-kontsevich-integral-on-parenthesized-braids.md
3. items/lem-kontsevich-configuration-space-compactification-faces.md
4. items/lem-kontsevich-morse-isotopy-decomposition.md
5. items/lem-kz-connection-flatness-and-braid-relations.md
6. items/thm-conway-second-coefficient-is-type-two.md
7. items/lem-kontsevich-configuration-integral-convergence-needle-estimates.md
8. items/lem-kontsevich-morse-tangle-composition.md
9. items/lem-kontsevich-long-knot-closure-and-connected-sum.md
10. items/lem-kontsevich-critical-point-normalization-and-associator.md
11. items/lem-kontsevich-braid-and-knot-isotopy-invariance.md
12. items/lem-kontsevich-regularization-and-associator-coherence.md
13. items/thm-kontsevich-universal-associated-graded-proof.md
14. items/lem-kontsevich-integral-finite-type-truncation.md
15. items/thm-kontsevich-integral-is-universal.md
16. items/cex-knot-kt-35-boundary-case.md
17. items/ex-knot-kt-35-worked-cases.md

Dependency context opened included the singular-knot and chord-diagram definitions; the oriented crossing-sign and oriented-link definitions; countable choice; the Vassiliev weight-system theorem and its 4T/1T suppliers; parametric transversality, the smooth inverse theorem, and isotopy extension; and the oriented Reidemeister, braid closure, smoothing, and Markov suppliers used by the assigned items.

## Repairs and evidence

- **def-conway-polynomial:** Replaced the proof's existence input from a coefficient-sequence theorem with Lickorish's Seifert-determinant construction. I read the full relevant argument in An Introduction to Knot Theory, Chapter 8, printed pp. 79–83: Theorems 8.2 and 8.4–8.6 and their proofs establish spanning surfaces, S-equivalence, determinant independence, and the skein formula. Theorem 8.6 gives the substitution z = u^{-1/2} - u^{1/2}, the unknot normalization, and the positive-minus-negative skein relation. Figures 1.11 and 3.2 were checked against the assigned determinant crossing convention. Source: [Springer, An Introduction to Knot Theory](https://link.springer.com/book/10.1007/978-1-4612-0691-0), locator: Chapter 8, Theorems 8.5–8.6, printed pp. 82–83; the full relevant chapter pages were read from /tmp/lickorish-ick.pdf. The local finite unlink and descending-diagram argument still proves uniqueness and the separate empty-link extension.

- **lem-kontsevich-configuration-space-compactification-faces:** Replaced the literal FENCETIKZ/FENCE sentinels with a valid fenced TikZ block. The diagram matches its text: the triangle is t2 < t1, the diagonal is the equal-level face, the outer edges are the lower/upper endpoint faces, and the dashed lines mark critical levels.

- **lem-kontsevich-configuration-integral-convergence-needle-estimates:** Removed a cancellation step that compared opposite needle-branch choices without showing their chord diagrams agree. The replacement estimates each long-chord term absolutely in the Morse parameter: its denominator stays bounded away from zero, so its one-form is bounded by C ds. A highest short chord with no endpoint above it is isolated and vanishes by 1T. Any surviving chain of short chords therefore has a higher long-chord endpoint; integrating that endpoint over 0 < s < delta_k supplies O(delta_k), which cancels the closest d(delta_k)/delta_k singularity. The nested estimate gives O(epsilon), and a finite cover of the critical charts establishes degreewise absolute convergence. Source comparison: Chmutov–Duzhin–Mostovoy, *Introduction to Vassiliev Knot Invariants*, [full PDF](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf), §8.5, printed pp. 231–232, and §8.6.2, printed pp. 235–237. The local rewrite uses absolute long-chord bounds rather than the source's branch-pairing estimate.

- **lem-kontsevich-long-knot-closure-and-connected-sum** and **lem-kontsevich-braid-and-knot-isotopy-invariance:** Added the missing Stokes-boundary justification for front faces introduced by blowing up collision centers of codimension at least two. On the no-critical tangle pieces, the branch form extends smoothly to the unblown closed chamber; the blowdown restricted to a front face times the deformation interval has rank at most m-1, so the pulled-back m-form vanishes there. Codimension-one adjacent-level faces are the cases already handled by the 4T/Arnold calculation. The equal-level calculation was compared with Chmutov–Duzhin–Mostovoy, *Introduction to Vassiliev Knot Invariants*, [full PDF](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf), §8.6.1, printed pp. 233–235; the additional front-face argument is local. The braid-isotopy proof's step numbering was also put into the canonical phase sequence requested by precheck, with all step references updated.

The batch-88 proof-contract derivations were refreshed for the four material proof/source repairs above, and their stored statement quote was updated to match the repaired TikZ fence. None of the changed items had a stale verification.judge record to remove.

Required validation after final edits:

- reflow.mts: unchanged for all five changed items.
- precheck.mts: PASS for all five changed items.
- node tools/proof-layout.mjs on all changed item paths in one command: 5 items, 29 steps, 0 defects.

## Diagram review

I checked all 12 TikZ diagrams in the assigned items. The positive Artin crossing, its parenthesized endpoints, and the KZ pentagon/braid labels match the stated stacking and crossing conventions. The Conway coefficient diagrams show the alternating and nonalternating endpoint patterns correctly; the singular crossing and its two resolutions preserve the arrows and positive-sign convention. The convergence needle, closure/cap, horizontal deformation, and isolated-chord diagrams agree with their captions. The compactification simplex diagram was mathematically consistent and its invalid fence was repaired. No other diagram was incorrect or missing.

## Findings not repaired

- items/ex-knot-kt-35-worked-cases.md, Example statement, displayed recovery formula at line 34: the statement defines w2 as a weight system on the rational degree-two module, then applies it to I2(K), which lies in the complexification. The proof later uses the complex-linear extension, but the Statement does not define that extension at the point where the formula is asserted. This is a nonfatal domain/notation defect; define w2-tilde as the complex-linear extension and use it in the formula. The item is on the assigned B page, whose prose is outside reader write scope, so it remains for the owner.

## Page verdicts

- **A page — kontsevich-integral-and-universal-finite-type-invariants:** Frontmatter inventory and prerequisite are correct; body is empty. Its assigned A items are sound after the repairs recorded above. No A-page prose defect remains.
- **B page — kontsevich-integral-and-universal-finite-type-invariants-examples:** Frontmatter inventory and A-page prerequisite are correct; body is empty. The counterexample is sound. The worked example has the one unedited scalar-extension notation defect recorded above.

## Blockers and coverage limits

Batch 88 has no mathematical blocker after the repairs. At the latest disk-recomputed status (2026-10-21 10:03:42 UTC), the run was active and 3a-read showed 96/109 with batch 88 not yet ingested; separate blockers were 3a-collect collect-71 and 3a-split split-83. No out-of-scope batch was edited.

All 17 assigned item carriers and both assigned pages were read, along with the direct supplier contexts listed above. Some external supplier files were opened after their first consumer while establishing the exact dependency closure, so strict supplier-first file-opening order was not maintained for every external context. I do not claim recursive audit of every transitive foundational dependency or of the unused Garaev and Polyak–Viro source arguments.
