## KL-3 — Projective functors and the Soergel functor in category O

**Requires:** KL-2, `category-o-finiteness-duality-and-blocks`,
`projectives-standard-filtrations-and-bgg-reciprocity`,
`finite-weyl-invariants-bruhat-and-kostant-harmonics`,
`symmetric-polynomials`, and `graded-bimodules-and-tensor-functors`.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-coinvariant-algebra-of-a-finite-weyl-group` | Quotient `S(h)` by positive-degree invariants and retain the grading. |
| `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` | Consume the Phase-2 Lie suppliers `thm-chevalley-shephard-todd-for-finite-weyl-groups` and `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`; prove the remaining harmonic-complement comparison identifying the type-A coinvariant algebra with the regular Weyl-group module and record its graded Hilbert series. Do not duplicate Chevalley--Shephard--Todd here. |
| `def-projective-functors-on-a-regular-integral-category-o-block` | Consume the published `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` and RL-5's planned `thm-category-o-has-enough-projectives`; define direct summands of finite-dimensional tensoring followed by block projection. |
| `def-wall-crossing-functor-and-unit-counit` | Consume RL-5's `def-translation-functor-between-o-blocks` and `prop-translation-functors-are-exact-and-biadjoint-across-a-wall`; define translation through a simple wall with its biadjunction maps. |
| `thm-projective-functors-are-generated-by-wall-crossing` | Use RL-5's `thm-translation-to-and-from-a-wall-on-standard-modules`, translation to/from walls and indecomposable summands; state indexing by Weyl-group elements. |
| `def-the-antidominant-projective-and-soergel-functor` | Set `V=Hom(P_antidominant,-)` with its endomorphism-ring action. |
| `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra` | Establish the center/endomorphism map and prove the ungraded algebra isomorphism. The grading belongs to the coinvariant target and its transported Soergel modules; no graded lift of category O is asserted. |
| `thm-soergels-struktursatz-full-faithfulness-on-projectives` | Prove `V` is fully faithful on projectives via standard filtrations, adjunction and translation induction. |
| `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule` | Construct the ungraded natural isomorphism with `C tensor_{C^s} C`, identify it after choosing the auxiliary Soergel grading as the right-coinvariant specialization of the polynomial Soergel bimodule, and verify that auxiliary shift. |
| `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules` | Identify labels and the unique auxiliary grading normalization by induction from the antidominant projective, then state explicitly that the category-O projective is recovered after forgetting this grading. |
| `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v` | Consume RL-5's `def-verma-flag-and-its-multiplicities` and `thm-projectives-in-category-o-have-verma-flags`; match a Verma-flag multiplicity with the total graded Bruhat-support rank, i.e. evaluation at `v=1`. The polynomial grading is auxiliary Soergel data, not an Ext grading on category O. |

**B companion:** `projective-functors-and-the-soergel-functor-in-category-o-examples`.

## KL-4 — The Kazhdan--Lusztig character and multiplicity theorem

**Requires:** KL-3 and `weyl-character-and-multiplicity-formulas`.

| proposed item | exact content and proof joint |
|---|---|
| `def-regular-integral-dot-orbit-labelling-convention` | Freeze dominant/antidominant base weight, left/right indexing, and Bruhat reversal. |
| `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` | Combine KL-3's Verma-flag/support-rank comparison, Struktursatz and the wall-crossing dictionary. |
| `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one` | Apply KL-2's character theorem with the exact shift-to-q conversion and then forget the auxiliary grading: ordinary Verma multiplicities are `P_{y,w}(1)`, not individual polynomial coefficients. |
| `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` | Consume RL-5's `thm-bgg-reciprocity` and use duality; state the correct pair/order. |
| `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o` | Invert the triangular multiplicity matrix and write the signed inverse-KL Verma-character sum evaluated at `q=1`. |
| `rem-the-full-ext-version-requires-the-koszul-grading-of-category-o` | Record that ordinary Soergel-character grading proves the multiplicity theorem but not the full Ext-algebra/Koszul theorem. Reserve that stronger result for the Koszul-duality frontier instead of smuggling it into KL-4. |
| `prop-translation-identifies-regular-integral-blocks` | Transport the theorem between regular integral central characters with conventions preserved. |

**B companion:** `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples`.

## KL-5 — Singular and parabolic Kazhdan--Lusztig theory

**Requires:** KL-4, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, and
`projectives-standard-filtrations-and-bgg-reciprocity`.

| proposed item | exact content and proof joint |
|---|---|
| `def-parabolic-hecke-module-and-antispherical-standard-basis` | Induce the sign module from `H_J`; specify left/right module convention and minimal coset representatives. |
| `def-parabolic-kazhdan-lusztig-basis-and-polynomials` | Bar-invariant triangular basis with exact Deodhar normalization. |
| `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones` | Prove by the induced-module quotient and uniqueness. |
| `def-singular-integral-category-o-block-and-stabilizer` | Label simples by minimal coset representatives for the dot stabilizer. |
| `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` | Give zero/nonzero cases, flags and projective multiplicities. |
| `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` | Translate regular projectives to the wall and compare with the antispherical basis. |
| `def-standard-parabolic-and-levi-subalgebras-from-simple-roots` | Construct the standard parabolic and its Levi/nilradical decomposition from a subset of simple roots before using parabolic local finiteness. |
| `def-parabolic-category-o-for-a-standard-parabolic` | Modules locally finite for the parabolic, with generalized Verma standards. |
| `thm-parabolic-category-o-is-a-highest-weight-category` | Prove finite ideals have projective covers, standard filtrations, duality and BGG reciprocity. |
| `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` | Relate the Serre quotient/subcategory to singular translation and state the exact longest-coset shifts. |
| `thm-parabolic-kazhdan-lusztig-character-formula` | Invert the parabolic matrix to express simple characters in generalized Verma characters. |

**B companion:** `singular-and-parabolic-kazhdan-lusztig-theory-examples`.

