# Step 3a reader report — batch 66

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Coverage: batch `66`

## Opened inventory

Assigned pages:

- `library/category-o-and-geometric-representation-theory/category-o-klr-and-hecke-categorification-route.md` (A page)
- `library/category-o-and-geometric-representation-theory/category-o-klr-and-hecke-categorification-route-examples.md` (B page)

Assigned items:

- `items/def-category-o-klr-and-hecke-route-conventions.md`
- `items/ex-category-o-degenerate-tensor-functor-on-trivial-sl2-module.md`
- `items/ex-level-one-e2-hecke-klr-block.md`
- `items/cex-place-permutation-is-not-a-nondegenerate-hecke-generator.md`

The batch manifest and `research/non-ml-math-remaining-81-2026-10-18-batch-66.proof-contracts.json` were opened. The contract file covers the three proof-bearing examples; the route-convention definition has no proof contract. Both page prerequisites were opened: `library/abstract-algebra/algebraic-representation-and-tensor-symmetry-map.md` and `library/hecke-algebras-and-categorification/ariki-categorification-and-graded-decomposition-numbers.md`.

Direct item suppliers were opened for the claims reviewed:

- Category O, Lie algebra, and degenerate action: `def-axiom-of-choice`, `def-bgg-category-o`, `def-degenerate-affine-hecke-algebra`, `def-arakawa-suzuki-casimir-operators-on-tensor-functors`, `thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations`, `thm-higher-level-schur-weyl-double-centralizer`, `thm-higher-level-schur-weyl-endomorphism-isomorphism`, `thm-category-o-translation-intertwines-residue-induction-and-restriction`, `def-special-linear-lie-algebra-sl-two`, `def-simple-semisimple-and-reductive-lie-algebras`, `def-semisimple-lie-algebra-by-vanishing-radical`, `def-radical-of-a-finite-dimensional-lie-algebra`, `def-derived-series-and-solvable-lie-algebra`, `prop-verma-and-finite-dimensional-modules-lie-in-category-o`, `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality`, `def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks`, and `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor`.
- Hecke and KLR conventions: `def-affine-and-cyclotomic-type-a-hecke-algebras`, `def-nondegenerate-root-of-unity-level-one-hecke-regime`, `def-cyclic-affine-type-a-cartan-datum`, `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`, `def-cyclotomic-klr-quotient-at-a-dominant-weight`, `def-klr-grading-and-diagrammatic-composition`, `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`, and `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`.
- Graded categorification and the route summary: `def-graded-module-and-projective-grothendieck-groups-for-klr-towers`, `thm-klr-categorification-of-the-negative-quantum-half`, `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`, `thm-ariki-canonical-basis-theorem-in-characteristic-zero`, `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`, `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`, `thm-murphy-tableau-elements-form-a-cellular-basis`, `thm-soergels-character-conjecture`, `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`, and `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`.
- The counterexample's nonzero tensor vector: `thm-tensor-product-basis-from-bases`.
- The shifted-Yangian result linked only as an excluded route boundary, `thm-ordered-monomial-pbw-basis-for-the-shifted-yangian`, was opened to inspect the linked carrier; it is not a logical dependency of this batch.

## Primary-source checks

- Arakawa–Suzuki, [*Lie algebras and degenerate affine Hecke algebras of type A*](https://arxiv.org/pdf/q-alg/9710037), §2.2, formulas (2.2.1)–(2.2.2) and Theorem 2.2.2, printed pp. 6–7: the source-normalized dot and the degenerate action on the BGG category side.
- Brundan–Kleshchev, [*Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras*](https://arxiv.org/pdf/0808.2032), Introduction, Main Theorem, printed pp. 2–3; §§3.5 and 4.5, printed pp. 18 and 26: the separate degenerate and nondegenerate cases of the block isomorphism.
- Brundan–Kleshchev, [*Graded decomposition numbers for cyclotomic Hecke algebras*](https://arxiv.org/pdf/0901.4450), §5.5, Theorem 5.14 and Corollary 5.15, printed pp. 50–51; Theorem 5.17, printed pp. 52–53: the characteristic-zero basis/decomposition statements and the positive-characteristic adjustment factorization.
- Brundan–Kleshchev, [*Schur-Weyl duality for higher levels*](https://arxiv.org/pdf/math/0605217), Introduction, Theorems A and B, printed pp. 3–4; §5.3, Theorem 5.13, printed p. 30: the image algebra, double centralizer, and parabolic-category comparison.
- Brundan–Kleshchev, [*The degenerate analogue of Ariki’s categorification theorem*](https://arxiv.org/pdf/0901.0057), §3.1, Theorems 3.6–3.7, printed pp. 26–27: the Schur functor and its compatibility with residue induction.
- Elias–Williamson, [*The Hodge theory of Soergel bimodules*](https://arxiv.org/pdf/1212.0791), §1.1, Theorem 1.1, printed p. 5: the general-Coxeter characteristic-zero theorem. The local supplier used by this route is explicitly type A and makes no positive-characteristic claim.

## Review and edits

The two finite examples and the counterexample are sound. For the trivial module, the source-normalized dot is zero plus zero plus one-half, hence one-half, and the quotient kernel is generated by y_1 minus one-half. At e=2 and weight Lambda_0, the cyclotomic Hecke quotient and standard KLR quotient are both the scalar field C; the residue sector is nonzero, and the KLR grading is concentrated in degree zero. The stated Brundan–Kleshchev hypotheses hold. In the counterexample, the permutation P fixes e_1 tensor e_1, which is nonzero. The required relation at parameter xi=-1 would force v=-3v and leaves residual 4v, which is nonzero over C. The proof-contract citations, derivations, finite checks, and boundary records match these calculations.

Two A-page passages were clarified against their cited theorem statements:

1. In the Schur–Weyl paragraph, the text now says that full support identifies the selected central cuts only; the whole-algebra equality is the separate stable-range conclusion. The local higher-level endomorphism theorem gives the image algebra as a central corner outside stable range, and the translation theorem's full-support clause applies to selected contents.
2. The natural-isomorphism sentence now describes the image-algebra functor square without making it conditional on full support. This follows the translation theorem, which gives the natural isomorphisms for the image functors and states the support conditions only for identifying them with full cyclotomic functors or the relevant central cuts.

The A page called the linked shifted-Yangian theorem partial, and the definition item described its current proof as partial and noneligible. The linked carrier has a theorem statement and a multi-step proof through a final QED step, but I did not independently certify that unrelated proof. I removed the unsupported status assessment from both assigned carriers and retained only the verified scope fact that the result is not used as a supplier here.

No B-page prose or B item was edited. No defect remains that this reader was unable to edit.

## Page verdicts

- A page `category-o-klr-and-hecke-categorification-route`: accepted after the above clarifications. Its route statements retain the cited parameter, support, characteristic, and Axiom-of-Choice boundaries.
- B page `category-o-klr-and-hecke-categorification-route-examples`: accepted. The three computations are consistent with the stated one-strand and quadratic relations.

## Blocker

There is no blocker for batch 66. The run status snapshot also showed an unrelated `3a-collect` blocker: `collect-18` had failed three times for batch 18. That blocker is outside this reader assignment.

## Coverage note

The assigned pages, all four assigned items, the proof contracts for the three proof-bearing examples, both page prerequisites, and the direct item statements needed for the route and calculations were opened. Primary passages were checked for the parameter, support, and characteristic distinctions listed above. I did not re-audit the proof bodies of all published suppliers or the unrelated shifted-Yangian theorem; no finding about their independent correctness is claimed.
