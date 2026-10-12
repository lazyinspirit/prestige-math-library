# Kazhdan--Lusztig theory, Soergel Hodge theory, and category O

Library supplier scope (owner-authorized 2026-10-07): this Special Topics in Representation Theory scaffold may build on any published or draft content in the library. Record each supplier’s actual status and exact claim/proof; draft status alone is not grounds for duplicating a prerequisite. Unauthored planned inventories are design obligations rather than completed proofs.

Category reconciliation (2026-10-07): KL-1–KL-8 now form the Kazhdan–Lusztig Theory track within `special-topics-in-representation-theory`. Canonical categories and `kazhdan-lusztig-planning/pages.json` reflect this change. Braid Groups remains separate and retains its Soergel/Rouquier application pages.

Prose scaffold, owner-authorised 2026-09-07. This future block supplies the
Kazhdan--Lusztig and parabolic category-O dependencies exposed by the
symmetric-group representation audit. It authors no library item and changes
no publication status.

## 0. Scope and ownership

The first implementation is finite type A, which is exactly the range used by
higher-level Schur--Weyl duality. Generic type-A Hecke multiplication remains
owned by `principal-series-representations-of-gl-n-over-a-finite-field`.
Type-A Soergel generators, light/double leaves, Hom freeness and the split-K0
Hecke isomorphism remain owned by
`type-a-soergel-bimodules-and-hecke-categorification`. Classical category O,
projectives, translation functors and BGG reciprocity remain owned by RL-4 and
RL-5. This block adds the KL basis, Soergel Hodge theorem, the Soergel-functor
bridge, the KL character theorem, its singular/parabolic form, and the exact
category-O/Schur--Weyl categorification route.

This route proves the **degenerate** Ariki analogue. The nondegenerate
root-of-unity theorem is instead supplied by QG-8 plus the symmetric track's
cyclotomic Hecke--KLR isomorphism. The two are stated as separate theorems with
separate parameter hypotheses.

## 1. Pages

| label | A page ID | role |
|---|---|---|
| KL-1 | `kazhdan-lusztig-bases-polynomials-and-cells` | bar basis, recursion, inverse polynomials, cells |
| KL-2 | `soergel-intersection-forms-and-hodge-theory` | Lefschetz/HR induction and Soergel conjecture |
| KL-3 | `projective-functors-and-the-soergel-functor-in-category-o` | coinvariant algebra, wall crossing, Struktursatz |
| KL-4 | `the-kazhdan-lusztig-character-and-multiplicity-theorem` | regular integral category-O multiplicities |
| KL-5 | `singular-and-parabolic-kazhdan-lusztig-theory` | antispherical module and parabolic multiplicities |
| KL-6 | `parabolic-category-o-and-fock-space-bases` | standard/simple/projective/tilting basis dictionary |
| KL-7 | `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` | degenerate affine Hecke action and double centralizer |
| KL-8 | `the-degenerate-ariki-categorification-theorem` | transfer of canonical bases to degenerate cyclotomic Hecke algebras |

Every page has a same-name `-examples` B companion depending only on its A
page. B pages are dependency leaves.

## KL-1 — Kazhdan--Lusztig bases, polynomials, and cells

**Requires:** `principal-series-representations-of-gl-n-over-a-finite-field`,
`bruhat-decomposition-and-flags-over-finite-fields`,
`permutation-statistics-inversions-and-eulerian-numbers`, and
`the-hook-length-formula-and-rsk-correspondence`.  The permutation-statistics
page is an already-published supplier of the rank-inequality Bruhat order; the
finite-field Bruhat page does not silently supply that order.

| proposed item | exact content and proof joint |
|---|---|
| `def-normalized-type-a-hecke-algebra-and-its-bar-involution` | Consume RG-13's planned `def-generic-type-a-hecke-algebra` and `thm-standard-basis-of-the-generic-type-a-hecke-algebra`; fix `H_s^2=1+(v^-1-v)H_s`, standard basis and semilinear bar. Give the exact dictionary to RG-13's `T_s,q`. This page does not re-prove generic freeness. |
| `lem-the-hecke-bar-involution-is-well-defined` | Check quadratic and braid relations, then `bar(H_w)=H_{w^-1}^{-1}`. |
| `def-bruhat-interval-and-r-polynomials` | Consume the published `def-bruhat-order-on-the-symmetric-group`, define finite intervals, and define the coefficients of `bar(H_y)` in the standard basis. |
| `thm-r-polynomial-recursion-and-degree-bounds` | Derive both descent cases and prove support, integrality and degree bounds by induction. |
| `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` | Construct the unique bar-invariant `underline H_w in H_w+sum_{y<w}v Z[v]H_y`; expose the triangular induction. |
| `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization` | Translate coefficients to `P_{y,w}(q)` with parity and degree conventions. |
| `thm-kazhdan-lusztig-polynomial-recursion` | State the full descent recursion including the leading-coefficient correction sum. |
| `def-inverse-kazhdan-lusztig-polynomials` | Define the inverse triangular matrix with exact signs and indices. |
| `thm-kazhdan-lusztig-inversion-formula` | Prove matrix inversion from bar-duality, not by finite examples. |
| `def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells` | Generate preorders from nonzero structure coefficients and quotient by mutual reachability. |
| `lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges` | Define the labelled star operation on the nonmonotone adjacent triples, calculate the two Hecke multiplication cases, and prove that a dual Knuth move stays in one left cell. Inversion gives the right-cell statement. |
| `lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations` | Prove the edge-transport identity for the leading coefficients and show that left equivalence preserves the domains and transported paths. The finite rank-two case check is a proof obligation, not a citation to the name “Knuth”. |
| `lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a` | Use transported Knuth paths and the lexicographically last descent set in a Knuth class to prove the converse: left-equivalent permutations have the same recording tableau. Consume the full Robinson--Schensted correspondence and its inversion symmetry. |
| `thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux` | Combine the preceding inclusions: left cells have fixed recording tableau, right cells fixed insertion tableau, and two-sided cells fixed shape, with the chosen left/right convention displayed. |

**B companion:** `kazhdan-lusztig-bases-polynomials-and-cells-examples`, with
complete `S_2`, `S_3`, a singular interval, and RSK cell computations.

## KL-2 — Soergel intersection forms and Hodge theory

**Requires:** KL-1,
`type-a-soergel-bimodules-and-hecke-categorification`,
`rouquier-complexes-and-categorical-braid-relations`, and elementary finite
dimensional bilinear-form theory from `dual-spaces-bilinear-forms-and-inertia`.

| proposed item | exact content and proof joint |
|---|---|
| `def-real-type-a-soergel-category-and-scalar-extension` | Extend BG-16's standard type-A realization from `Q` to `R`, preserving the internal grading, Bott--Samelson tensor products, forms and the positive dominant chamber. Distinguish the coefficient field `R` from the polynomial ring. |
| `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree` | Use graded Hom freeness and the degree-zero local endomorphism quotient to show that the rational indecomposable `B_w` stays indecomposable after real scalar extension and that support-filtration ranks and characters commute with extension. This is the descent seam from real signatures back to BG-16's rational categorification. |
| `def-soergel-module-and-dominant-lefschetz-operator` | Over the real scalar extension, quotient a Soergel bimodule by positive-degree right polynomials and let a strictly dominant degree-two element act on the left. |
| `def-invariant-intersection-form-on-a-bott-samelson-bimodule` | Build the form recursively from multiplication and Demazure trace; prove symmetry, invariance and nondegeneracy. |
| `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs` | State the centered grading, Lefschetz isomorphisms and exact alternating primitive signs. |
| `lem-hard-lefschetz-implies-primitive-decomposition` | Prove the linear-algebra decomposition and signature formula degree by degree. |
| `def-local-intersection-form-for-a-soergel-summand` | Composition pairing `Hom(B_y,B_xB_s) x Hom(B_xB_s,B_y) -> End(B_y)`. |
| `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character` | Under the lower Bruhat induction, relate ranks to the Hecke bilinear form and prove equivalence to the next character equality. |
| `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms` | Construct the evaluation map and prove it is an isometry up to a positive scalar. |
| `def-the-deformed-lefschetz-operator-on-b-x-b-s` | Define `L_zeta=(rho left) tensor 1 + 1 tensor (zeta rho left)` for `zeta>=0`. |
| `lem-hodge-riemann-for-large-positive-deformation` | Use the two shifted copies and tensor-product HR calculation to fix the large-zeta signature. |
| `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category` | Use BG-16 Krull--Schmidt and HA-24 Gaussian elimination to split contractible isomorphism blocks, define minimal complexes, the radical quotient and the perverse bounds `B_w(j)` in cohomological degree `i`, and prove uniqueness up to isomorphism. Internal and homological shifts remain distinct. |
| `thm-positive-rouquier-complexes-are-delta-split` | For a reduced positive word, take the minimal summand of BG-17's Rouquier complex and prove every Bruhat support subquotient is contractible except the top standard graph bimodule. The proof follows Libedinsky--Williamson Proposition 3.7 and uses BG-16's two-sided freeness to preserve the split exact rows. |
| `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction` | Under the explicit conditional hypothesis `S(y)` for `y<=x`, prove that degree zero is `B_x` and cohomological degree `i>0` is a sum of `B_z(i)` with `z<x`. This is a conditional step inside the simultaneous induction and must not cite the final Soergel theorem circularly. |
| `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs` | Under the lower Bruhat `S` and `HR` hypotheses, embed each linear term into the deleted-subword Bott--Samelson sum, orthogonalize isotypic components, and prove the induced forms have the required global signs. |
| `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons` | For a reduced expression, write the multiplication/Demazure maps `B_S(x) -> direct-sum_i B_S(x-hat-i)(1) -> B_S(x)(2)`, prove that their composite is left multiplication by `rho`, and check every rescaling factor is positive. |
| `lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity` | Identify the preceding maps with the first Rouquier differentials up to the positive rescalings, pass to the minimal linear complex, and prove injectivity in negative degrees from exactness and the radical quotient. Exactness alone is not presented as weak Lefschetz. |
| `thm-deformed-hard-lefschetz-for-b-x-b-s` | Treat `zeta=0` and `zeta>0`, including the `zs<z` splitting, and prove every Lefschetz isomorphism. |
| `thm-hodge-riemann-for-indecomposable-soergel-bimodules` | State the simultaneous Bruhat-ideal induction hypotheses `S`, `HL`, `HR` and the two deformed `HR(z,s)_zeta` cases; carry the signature from large zeta to zero through nondegeneracy and close all of them together. |
| `thm-soergels-character-conjecture` | Combine definite local forms with the detection theorem to prove `ch(B_w)=underline H_w`. |
| `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants` | Read positivity from standard filtrations and tensor decompositions. |

**B companion:** `soergel-intersection-forms-and-hodge-theory-examples`.
Its calculations stop at rank two; examples are not used to prove the general
Hodge induction.

## KL-3 — Projective functors and the Soergel functor in category O

**Requires:** KL-2, `category-o-finiteness-duality-and-blocks`,
`projectives-standard-filtrations-and-bgg-reciprocity`,
`finite-weyl-invariants-bruhat-and-kostant-harmonics`,
`symmetric-polynomials`, `graded-bimodules-and-tensor-functors`,
`lie-algebras-and-infinitesimal-group-schemes`,
`unipotent-solvable-groups-and-borel-fixed-points`, and
`weyl-character-and-multiplicity-formulas`.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-coinvariant-algebra-of-a-finite-weyl-group` | Quotient `S(h)` by positive-degree invariants and retain the grading. |
| `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` | Consume the Phase-2 Lie suppliers `thm-chevalley-shephard-todd-for-finite-weyl-groups` and `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`; prove the remaining harmonic-complement comparison identifying the type-A coinvariant algebra with the regular Weyl-group module and record its graded Hilbert series. Do not duplicate Chevalley--Shephard--Todd here. |
| `def-regular-integral-category-o-block-and-its-antidominant-weight` | Fix dot-dominant and antidominant conventions; generic nonintegral fibers and closed regular integral fibers have different block behavior. |
| `lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots` | Prove the invariant-degree sum needed for the principal-sl2 slice Jacobian. |
| `lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank` | Prove harmonic adjoint multiplicity `dim E_0` from weighted freeness and the explicit root-lattice coefficient limit. |
| `lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle` | Prove the coinvariant Frobenius/socle interface by the regular-sequence Koszul computation. |
| `lem-the-harmonic-complement-of-the-coinvariant-algebra` | Provide the harmonic complement and graded character comparison. |
| `def-the-deformed-category-o-family-and-its-specializations` | Define the universal tensor family and its selected central components precisely. |
| `lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain` | Prove the principal-sl2 slice Jacobian, nilpotent-orbit density and complete-intersection reducedness/domain argument with the actual Borel/commutative-algebra suppliers. |
| `thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules` | Prove the field action isomorphism using PBW growth, the dual Shapovalov pairing, nilpotent-fiber domain and harmonic isotypic rank. |
| `prop-base-change-freeness-and-specialization-in-the-deformed-family` | Retain the full all-T universal claim: finite highest-weight raising matrices have constant rank on every closed fiber, hence locally split kernels and arbitrary base change; harmonic action is a fiberwise isomorphism. Tensor adjunction and summands give the full Hom interface. |
| `thm-lifting-of-indecomposable-projectives-to-the-deformed-family` | Independently construct local-R projectives by finite central CRT, canonical flag peeling and lifted higher-projective removal. Prove uniqueness and Hom base change; ordinary wall-word object generation gives tensor-family membership without the later classifier. |
| `lem-the-central-action-on-the-deformed-antidominant-projective` | Identify the root-local congruence order and its height-one intersection; shifted Harish-Chandra jet interpolation uses the sum divided by stabilizer order. Retain the stated singular invariant interface. |
| `def-projective-functors-on-a-regular-integral-category-o-block` | Consume the published tensor, block and enough-projectives suppliers; define summands of finite tensoring followed by block projection. Distinguish the full tensor family from one selected central component; singular targets retain their true coset labels. |
| `def-wall-crossing-functor-and-unit-counit` | Consume RL-5's `def-translation-functor-between-o-blocks` and `prop-translation-functors-are-exact-and-biadjoint-across-a-wall`; define translation through a simple wall with its biadjunction maps. |
| `lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension` | Prove the two-standard wall flag from exact translations and biadjunction. |
| `lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s` | Freeze right multiplication and composition order. |
| `lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label` | Start with the dominant Verma projective; BGG triangularity and the top coefficient one give each projective as a wall-word summand, before any functor classification. |
| `thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group` | Prove surjectivity of natural-map evaluation on the dominant Verma, its nilpotent kernel on a projective generator, and idempotent/isomorphism lifting. Classification concerns isomorphism classes; evaluation is not asserted faithful. |
| `def-the-antidominant-projective-and-the-soergel-functor` | Construct the antidominant projective-injective by translation from the most singular block; set `V=Hom(P_antidominant,-)` with its endomorphism-ring action. |
| `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra` | Use the local projective/Hom base-change interface and the height-one central congruence order to prove the center/endomorphism isomorphism (and the invariant subalgebra in the stated singular case). The grading belongs to the coinvariant target and its transported Soergel modules; no graded lift of category O is asserted. |
| `thm-soergels-struktursatz-full-faithfulness-on-projectives` | Prove projective full faithfulness from projective-injectivity, the coinvariant Frobenius algebra, quotient adjunction and wall-word generation; the deformed comparison uses explicit root-local Hom tables and height-one intersection. |
| `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule` | Construct the ungraded natural isomorphism with `C tensor_{C^s} C`, identify it after choosing the auxiliary Soergel grading as the right-coinvariant specialization of the polynomial Soergel bimodule, and verify that auxiliary shift. |
| `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules` | Identify `P_w` with the reduced module labelled `w^-1`; prove reduction-of-Hom and indecomposability, use KL-2's actual form/descent clauses, and prove uniqueness of the centered auxiliary grading. Forgetting that grading recovers the category-O projective. |
| `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v` | Consume RL-5's `def-verma-flag-and-its-multiplicities` and `thm-projectives-in-category-o-have-verma-flags`; match a Verma-flag multiplicity with the polynomial/deformed standard-filtration rank at label `y^-1`, evaluated at `v=1`, before origin reduction collapses the graph supports. The polynomial grading is auxiliary Soergel data, not an Ext grading on category O. |

**B companion:** `projective-functors-and-the-soergel-functor-in-category-o-examples`.

## KL-4 — The Kazhdan--Lusztig character and multiplicity theorem

**Requires:** KL-3 and `weyl-character-and-multiplicity-formulas`.

| proposed item | exact content and proof joint |
|---|---|
| `def-regular-integral-dot-orbit-labelling-convention` | Freeze dominant/antidominant base weight, left/right indexing, and Bruhat reversal. |
| `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` | Combine KL-3's Verma-flag/support-rank comparison, Struktursatz and the wall-crossing dictionary. |
| `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one` | Apply KL-2's character theorem with the exact shift-to-q conversion and then forget the auxiliary grading: ordinary Verma multiplicities are `P_{y,w}(1)`, not individual polynomial coefficients. |
| `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` | Consume RL-5's `thm-bgg-reciprocity` and use duality; state the correct pair/order. |
| `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o` | Invert the weighted incidence matrix `P_{y,w}(1)` and write its inverse Verma-character sum. Ordinary Bruhat Möbius coefficients apply only when those KL values are all one; the S4 endpoint value two gives inverse coefficient minus two, not minus one. |
| `rem-the-full-ext-version-requires-the-koszul-grading-of-category-o` | Record that ordinary Soergel-character grading proves the multiplicity theorem but not the full Ext-algebra/Koszul theorem. Reserve that stronger result for the Koszul-duality frontier instead of smuggling it into KL-4. |
| `prop-translation-identifies-regular-integral-blocks` | Construct exact inverse regular-to-regular translations by finite tensoring and block projection. Norm-distance exclusion and extremal multiplicity one identify corresponding Vermas; biadjoint unit/counit are isomorphisms on Vermas, then on flags, projectives and finite presentations. Preserve standard, simple and projective labels and transport the theorem through this categorical equivalence. |

**B companion:** `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples`.

## KL-5 — Singular and parabolic Kazhdan--Lusztig theory

**Requires:** KL-4, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, and
`projectives-standard-filtrations-and-bgg-reciprocity`, and
`parabolic-subgroups-and-double-coset-geometry` (which reaches the Coxeter prerequisite).

Generic definitions, translation and highest-weight structure retain their stated
complex semisimple/arbitrary-integral scope. Numerical KL formulas consume KL-4's
regular type-A theorem; singular and genuine parabolic matrices remain distinct.

| proposed item | exact content and proof joint |
|---|---|
| `def-parabolic-hecke-module-and-antispherical-standard-basis` | Define sign (antispherical) and trivial (spherical) induction from `H_J`, with shortest LEFT representatives and separate standard bases/actions. |
| `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars` | Prove coset bases, boundary actions and triangular compatible bars separately for sign and trivial induction. |
| `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis` | Construct both canonical bases by triangular bar induction and identify their ordinary-KL coefficients. |
| `lem-facet-tensor-weight-exclusion` | Prove the norm-distance/extremal-weight exclusion used by the exact singular translations. |
| `def-parabolic-kazhdan-lusztig-basis-and-polynomials` | Define the proved bar-invariant triangular bases and their polynomial coefficients with exact sign/trivial normalization. |
| `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones` | Project ordinary KL elements to sign induction: the coefficient is the alternating sum over LEFT `W_J` translates. Trivial induction instead uses the longest-parabolic eigenvector and gives spherical coefficients. |
| `def-singular-integral-category-o-block-and-stabilizer` | Label simples by minimal coset representatives for the dot stabilizer. |
| `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` | Prove standard/costandard translation, simple survival on shortest RIGHT coset representatives and projective flags by exactness and biadjunction. The big antidominant projective has each distinct standard once; arbitrary projectives need not. |
| `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` | For the type-A singular antidominant convention, prove spherical multiplicities `m_{k(y),k(w)}(1)` with `k(w)=w_J w^-1 w_0`, using actual translation survival and the ordinary KL matrix. Do not replace this by an antispherical formula. |
| `def-standard-parabolic-and-levi-subalgebras-from-simple-roots` | Use finite Cartan invertibility, root/sl2 and Killing identities to construct the reductive Levi, its semisimple derived algebra and center, and the outside-root nilradical. |
| `def-parabolic-category-o-for-a-standard-parabolic` | Define genuine parabolic local finiteness; finite PBW degree slices prove generalized Vermas lie in it. Prove Serre closure and restricted duality. The maximal locally finite quotient uses the finite-length INTERSECTION of quotient kernels, not their sum. |
| `thm-parabolic-category-o-is-a-highest-weight-category` | For arbitrary integral blocks construct finite truncated induced projectives representing exact Levi Hom, with the central-block weight cutoff explicit. Canonical maximal-standard traces preserve flags under idempotents; prove generalized-standard/costandard Hom and Ext1, then covers, duality and BGG. The canonical standard-to-costandard map has simple image, not an asserted injection. |
| `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` | In a regular type-A ambient block, finite Levi Weyl characters and outside-root PBW denominators give the signed ordinary-Verma character sum. Ordinary KL multiplicities therefore give genuine ANTISPHERICAL `n_{y,x}(1)` for dominant shortest LEFT labels. Antidominant labels reindex by `iota(y)=w_J y w_0`; no singular/parabolic equivalence or Koszul duality is imported. |
| `thm-parabolic-kazhdan-lusztig-character-formula` | Invert the weighted antispherical multiplicity matrix, using character injectivity and Grothendieck bases, to express simple characters in generalized Verma characters with the stated order support. |

**B companion:** `singular-and-parabolic-kazhdan-lusztig-theory-examples`.

## KL-6 — Parabolic category O and Fock-space bases

**Requires:** KL-5, `balanced-triples-and-global-crystal-bases`,
`grothendieck-groups-and-graded-cartan-pairings`, and
`young-diagrams-tableaux-and-permutation-modules`.

All original claims, IDs and the A/B pair are retained. The current scaffold has22A+4B:
the native convention dictionary and four necessary within-pair local suppliers are
included below in dependency order. Quantum finite-Cartan arguments use double cuts
and prove their full semi-infinite limits locally. Genuine category-O structure retains
all admitted integral type-A tableau blocks; numerical matrices use KL5's actual
spherical singular ordinary coefficients inside signed finite-Levi cancellation.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules` | Fix source s, library t=s^-1, unchanged divided E/F and K_h→D_-h, including the full coordinate torus. Fundamental factors have their own normalized bars and crystal charts. |
| `def-higher-level-wedge-tensor-fock-module` | Keep the original nonincreasing charges, strict columns, standard rows, prefix Bruhat order and finite/semi-infinite ground-tail conventions. Infinite weight sums mean a ground weight plus finite changes. |
| `thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis` | Prove the integral sorting basis, primitive antisymmetrizer embedding and compatible double-cut limits. Primitivity does not assert lower-chart basedness inside raw tensor powers; generators shift weights by finite box moves. |
| `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations` | Use QG-5 only on finite ordered products of independently based fundamental factors. Prove new upper/lower boundary quasi-R terms vanish, yielding the full integral triangular bar and compatible semi-infinite limits. |
| `def-dual-canonical-canonical-and-quasi-canonical-fock-bases` | Keep monomial M, source-positive L, source-negative T and quasi-canonical P distinct. Both L/T are ordinary-bar fixed; P is generally not. The two pairings include psi in the second argument and reverse factors, with raw Gram B_psi^-1. |
| `lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map` | Construct the outside-nilradical semiregular bimodule for reductive degree-zero Levi; prove commuting actions, corrected left-PBW filtration and restricted free/cofree adjunction. The exact standard-flag contravariant Psi and covariant D Psi have the computed reverse-column offset shift, matching labels and central characters. |
| `def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category` | Use generic finite highest-weight central summands before connectedness. Prove standard/costandard Ext criteria by maximal heredity removal and Tor detection, summand closure and maximal-support tilting normalization. |
| `lem-type-a-tableau-central-summands-are-single-linkage-blocks` | Before the connected Definition, construct X=Psi Pbar using the generic criterion. Mixed KL/Levi cancellation identifies its coefficients with canonical T; actual CWZ two-column positive-pair coefficients and complete fixed-margin binary switches connect original and opposite summands. Only original sorted heights are used; no future cyclotomic-centre theorem enters. |
| `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality` | Distinguish classical gl_n (finite box count) from the Fock gl_{I+}. Use lambda_j=a_j+j-1 and the published half-sum rho_j=(n+1-2j)/2, so HC coordinates are a_j+(n-1)/2. Retain all admitted integral/repeated-entry blocks, actual generalized standards and the proved single-linkage-block labels. |
| `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` | Fix sorting w_A shortest RIGHT for the entry stabilizer K and d(A)=w_A^-1 shortest LEFT. Prove the full sign/antispherical p_AB(s)=s^(ell(wB)-ell(wA)) sum_z(-1)^ell(z)P_(wAz,wB)(s^-2). At1 the composition matrix is the signed COLUMN-Levi sum of KL5 spherical singular ordinary coefficients P_(d(C)w0,d(A)w0)(1); K and the column Levi J differ. |
| `thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule` | Prove the based reverse highest inclusion and C-adjoint projection with explicit signature/rectification labels. The kernel is the saturated integral span of L_offStd; projected monomials need not vanish there. Standard S and D bases give explicit straightening, integral upper/costandard image lattice and compatible full limits. |
| `def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks` | Define natural/dual tensor block projections with actual general biadjunction. Casimir eigenvalues are i and -n-i; preserve exactness, restricted duality, projectives and injectives, with the distinct classical/Fock weight indices. |
| `lem-residue-casimir-operators-give-local-affine-hecke-actions` | Prove matrix-unit Casimir/place-swap affine-Hecke relations, eigenvalue shifts and multiplicity-free generalized-standard flags. Supply the full positive integrable K0 sl2/Chevalley/Serre action before the head/socle argument, avoiding a forward cycle to KL7/KL8. |
| `lem-the-local-affine-hecke-socle-argument-for-residue-translations` | Prove the completed matrix algebra and partial-idempotent restriction. The centre C[c_1,...,c_i]/(h_(r-i+1),...,h_r) is a finite complete intersection with unique socle, by actual CM/Koszul suppliers. Expand CR extremal/string-height and Kashiwara source-upper leading coefficients to prove the full simple head/socle crystal labels. |
| `thm-residue-translation-functors-give-the-integrable-fock-space-action` | Collect the preceding proved flag/K0 relations, integrability and actual simple-head/socle clauses. All standard classes give the full tensor Fock action; the ground class generates only the highest constituent. |
| `thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module` | Map generalized standards to monomials, with the exact residue action and projective/simple Hom pairing. This is the full ungraded integral K0 module, not a presumed Koszul lift. |
| `thm-the-highest-weight-fock-submodule-has-the-qg-global-bases` | Compare actual QG-5 lower and form-adjoint upper bases through B8=s^-a C0, a=(2Lambda-alpha,alpha)/2. Lower is T_(Aup)=s^-a P_A; upper is s^a D_A with its form-adjoint bar and dual charts. Source D is ordinary-bar fixed; its rescaled library upper vector need not be. |
| `thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o` | Apply the proved semiregular equivalence to opposite projectives and the finite Ext criterion. Prove maximal-label uniqueness, selfduality, direct-sum classification and unchanged partial-ideal tiltings. Retain the full inline Std/prinjective/selfdual/simple-standard-socle criterion and P(A)=T(Aup), with local standard embeddings, residue words, projection-kernel positivity and Cartan duality. |
| `def-the-ringel-dual-of-a-finite-highest-weight-ideal` | Prove characteristic-tilting Ext orthogonality and finite projective dimension. Hom(T,-) identifies costandard flags with Ringel-STANDARD flags and gives the reversed-poset highest-weight category. |
| `thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic` | Use the genuine parabolic outside-nilradical semiregular transport, not unchanged ordinary full-longest Borel twisting. Send opposite standards to costandards and opposite projectives to tiltings with exact labels. A proper target lower Serre ideal pairs with the opposite highest-weight SERRE QUOTIENT by complementary labels, via the projective corner. |
| `thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases` | At1 map simples to L, projectives to P and tiltings to T. Tilting standard coefficients are the opposite/reverse-column composition matrix from actual Ringel reciprocity, not the inverse-transpose of the original matrix. |
| `lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings` | Prove typed sesquilinear/reverse-factor dualities, projective-simple Hom at1 and genuine generalized-standard/costandard Hom. Track the half-sum/Casimir and source/library form rescalings without conflating ordinary and form-adjoint bars. |

**B companion:** `parabolic-category-o-and-fock-space-bases-examples`. Keep all four
native IDs: the two-factor example computes every pairing/global-family matrix at
I={0}, the residue example gives actual flag operators and simple heads/socles, the
opposite-parabolic example computes a genuine two-label lower-ideal/opposite-quotient
Ringel dictionary, and the counterexample distinguishes full canonical/quasi-canonical
families even where rectified highest vectors agree at1.

**Source audit.** Actual Soergel author English PostScript §§1–2/5–7 supplies the
reductive-Levi semiregular construction, with its left-PBW degree-zero shortcut repaired
locally; later English additions and the retrieved-only German version are not assumed.
The actual BK/Brundan tensor and pairing proofs are read with their ordinary-bar
arguments and reciprocal parameters. CR0407205 §§3.2–3.3/4.3/5.1–5.4, Kashiwara1993
printed462–474, BK0508003 §§4.2–4.4 and CWZ0409016 §§2.1–2.2/4.3–4.4 provide the
expanded local socle/crystal and two-wedge coefficient routes. No super duality,
unchanged ordinary longest twisting, nominal Irving criterion, quantum flag algebra,
or future Schur/cyclotomic-centre theorem substitutes for these proofs. Current proof
and source review is scaffold evidence, not an independent authored-item audit;
native22 decisions (19ready/3escalated) remain historical in their preserved archives.
All26 current subjects have genuine current readiness after the guarded pass and root
independent post-verification; this remains scaffold evidence, not authored-item audit.

## KL-7 — Arakawa--Suzuki functors and higher-level Schur--Weyl duality

**Requires:** KL-6, `tensor-products-of-modules`, and
`graded-bimodules-and-tensor-functors`.

The current pair retains all29 native identities and adds exactly two necessary
normality/covariant suppliers, giving26A+5B at1790/1791. Preserve the full true
approved scope. Raw tensor mutual centralizers hold for every complex origin;
ground-category Morita and the central-block corner require admissible origins
(c_i−c_j integral implies c_i=c_j). Arbitrary Hecke root multisets still have
explicit admissible stable charged-pyramid realizations.

| proposed item | exact content and proof joint |
|---|---|
| `def-degenerate-affine-hecke-algebra` | Prove the rational-operator PBW basis and all affine relations. Polynomial degree is a filtration; level-one x_j are shifted Jucys–Murphy operators. |
| `lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties` | Prove chain complete intersection, graded-string dimension/codimension estimates, reduced irreducible normal domain and the actual invariant quotient for every nilpotent type. |
| `def-arakawa-suzuki-casimir-operators-on-tensor-functors` | Fix trace-gl_N x and source-sl_N y with the explicit central/scalar shift, universal Casimir and place permutations. |
| `lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize` | Prove codimension-two extension, finite rational-GL lifting and Schur–Weyl polarization into trace-cycle tensor covariants. |
| `def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character` | Use left-moving e, explicit J/K centralizer indices and the doubled good grading for GG; character vanishing follows from degrees. |
| `thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations` | Check polynomial commutation, all Coxeter and affine cross relations by the matrix-unit infinitesimal braid identity. |
| `def-the-type-a-finite-w-algebra-and-whittaker-category` | Define the tail-shift reduction and its bimodule/right action; distinguish the loop and Kazhdan filtrations. |
| `thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer` | Prove both centralizers for every nilpotent type and tensor degree using Newton identities and the local normality/covariant suppliers; retain longest-string stable faithfulness. |
| `def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra` | Derive the path/Gauss presentation, D1-only truncation and original T=FDE coefficient ranges; keep auxiliary paths distinct and correct the mirrored E/F source typo. |
| `lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading` | Prove the polynomial conjugation decomposition by positive weights, de Rham/CE homotopy and nonzero-invariant detection; degree minus one is zero in the doubled grading. |
| `thm-ordered-monomial-pbw-basis-for-the-shifted-yangian` | Prove RTT/current finite-jet PBW, shifted embedding and finite Gauss Jacobian independence; match the GG slice degrees without importing a PBW theorem. |
| `thm-skryabins-equivalence-for-the-type-a-whittaker-pair` | Prove unit/counit equivalence for all modules using free PBW, CE vanishing and invariant detection; verify coherent ordinary tensor comparison via Taylor/path matrices. |
| `thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e` | Use the original coefficient indices and one-factor path symbols to prove gr_loop W=U(g^e); distinguish the commutative Kazhdan symbols. |
| `def-degenerate-cyclotomic-hecke-algebra` | Prove bounded PBW, full dimension and symmetric top trace for arbitrary complex root multisets via an admissible stable realization; distinguish integer-coset indexing. |
| `lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient` | Prove the exact x1 minimal polynomial using the column flag and leading longest string, including repeated roots; do not assign the same root set to every x_j. |
| `def-deformed-tensor-space-for-the-type-a-finite-w-algebra` | Construct the raw tensor action with its c_col+q_col−n diagonal and cross-column correction; prove both chi-equations, Casimir/flip compatibility and actual associated-graded action. |
| `def-the-whittaker-functor-from-the-relevant-parabolic-o-summand` | Use genuine row-torus duality/continuous coinvariants and local Rees–Baer exactness. Construct typed HC/Ore/coset comparison; Cauchy and the actual16 highest projection determine the offStd kernel. |
| `thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer` | Lift both graded centralizers for every origin. Morita additionally uses admissible origins and the genuine Wh quotient; keep the explicit nonadmissible nonprojective witness. |
| `thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives` | Prove ALL-projective faithfulness via explicit ZA two-term prinjective copresentations. Projective images are asserted on add(T), separately from faithfulness. |
| `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor` | T is the admissible-ground prinjective detector. The exact Hecke quotient has a right-exact left adjoint; recovery holds on add(T). Preserve all ambient O labels. |
| `def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality` | Stable range is q_l≥d. Outside it, admissible origins give a whole central-block corner through stable enlargement and contractible labels; sequence projectors are not central. |
| `def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks` | Derive exact biadjoint residue functors from quotient tensor adjunction, with ordinary duality and actual last-eigenvalue projectors; no arbitrary corner equality or unspecified grading. |
| `thm-higher-level-schur-weyl-endomorphism-isomorphism` | Wh faithfulness on detector endomorphisms and the raw Hecke image give End_g(T)^op=B; identify each central component and the precise stable/corner cases. |
| `thm-higher-level-schur-weyl-double-centralizer` | Collect raw centralizers, admissible Morita/Serre quotient, full-projective and tilting faithfulness and the precise right-exact adjoint; mutual centralizers alone do not imply Morita. |
| `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects` | Prove intrinsic Specht images by the regular-vector row corner and canonical colour fibre. Std gives simple labels and prinjective covers; multiplicities require the simple label in Std. |
| `thm-category-o-translation-intertwines-residue-induction-and-restriction` | Construct the natural residue tensor-Hom isomorphisms, projectors, units/counits and ordinary duality; all stated Grothendieck comparisons are ungraded at parameter one. |

**B companion:** `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples`.
Keep all five native examples. They check universal two-factor relations, the
correctly numbered level-two polynomial, failure of arbitrary tensor double
centralizers, one-column e=0 Vust dimensions and the genuine level-one central
corner outside stable range.

**Source and consumer review.** The authentic Kraft–Procesi original §§1–6 was
read, including rendered §6. Local chain normality, codimension-two extension,
finite rational-GL lifting and polarized Schur–Weyl supply the full Vust proof.
GG is adapted to the doubled good grading; Rees–Baer supplies Wh exactness.
Explicit HC/Ore/coset label comparison, path/PBW/tensor checks, classical Cauchy,
ZA copresentations and the regular-vector Specht corner close the stated routes.
The shifted T series is FDE with its original coefficient indices; the source's
mirrored E/F error is corrected from its preceding formulas. No nominal BG,
Skryabin, finite-W simple classification or KSX import replaces these proofs.

Root completed the bounded two-round scaffold review and retired the current
original-reading escalation, retaining authentic native29 decisions/history.
All31 subjects now have genuine current readiness after the guarded pass and
root independent post-verification at02:58:16–23 UTC. The same supplier owner
checked all affected17 consumers. The later populated KL-8 consumer obligation
is discharged at scaffold-strategy level by the same supplier owner in the
batch18 focused review; this does not claim an authored-item audit. Evidence: owner-category-o-batch17-review.json,
its eight local proof notes and root-final-approval.json. This is scaffold
strategy evidence, not an independent authored-item audit or gate result.

## KL-8 — The degenerate Ariki categorification theorem

**Requires:** KL-7 and `grothendieck-groups-and-graded-cartan-pairings`.

| proposed item | exact content and proof joint |
|---|---|
| `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | Use the supported central cut, arbitrary-dimensional spectral projectors and actual single-block centre proof via a full O generator and all-projective faithfulness. Preserve exact residue functors and level-zero convention. |
| `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | Identify the entire integral projected costandard lattice. Retain rational ground cyclicity and categorical simple reachability; integral costandard ground cyclicity fails by the index-two rank-one witness. |
| `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` | Identify the integral standard divided-power lattice and its inclusion into the costandard lattice, with projected-simple Hom/Shapovalov duality. Use the right-exact Schur adjoint only on projectives. |
| `thm-degenerate-ariki-categorification` | Keep the full simultaneous basis/action/head-socle theorem and arbitrary-consecutive-I extension. Every finite cut contains all charges and required supports; contract common ground tails and absent top entries. |
| `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one` | Use d=p(-s)^-1, with full Col Specht columns and Std simple rows. Keep shortest-right/inverse-left and distinct entry/column stabilizers; diagonal multiplicity applies only to Std. |
| `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | Keep global charge/content reversal and projected Std/Rev rectification. Full Young and signed generators range over ALL Col; use actual reversed-Levi F and the opposite Serre quotient for a proper ideal. |
| `rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges` | Retain the sourced generic xi bridge with Q_j=xi^m_j and its parameter restriction; the level-one xi=-1 radical witness refutes universal root-parameter transport. No new local Hecke-KLR bridge proof is claimed. |

**B companion:** `the-degenerate-ariki-categorification-theorem-examples`.

Current native inventory remains7A+4B, orders1792/1793 and unchanged page requires. The examples retain the full height-two three-block model, projected half-sum dual basis, index-two lattice distinction and all eight ambient labels with genuine Std/Rev sign rectification. Same original supplier reviewers completed the eight recorded consumer-defect repairs in ROUND1; root read the affected contracts and focused proof notes and serially integrated the three example proposals. All actual affected uses are mapped; no outside18 or published literal-ID consumer was found. This is scaffold-strategy repair evidence, not an independent authored-proof audit. Genuine current readiness registration is pending.

## 2. B-companion item inventory

Each item below is computational or diagnostic. It depends on its companion A
page and no B page supplies a later proof.

### KL-1 examples

- `ex-kazhdan-lusztig-bases-for-s-two-and-s-three`
- `ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval`
- `ex-rsk-left-right-and-two-sided-cells-in-s-three`
- `cex-kl-positivity-does-not-follow-from-triangular-existence`

### KL-2 examples

- `ex-intersection-forms-and-lefschetz-decomposition-in-rank-one`
- `ex-local-intersection-form-for-a-rank-two-bott-samelson`
- `ex-deformed-lefschetz-signature-in-type-a-two`
- `cex-hard-lefschetz-without-hodge-riemann-signs`

### KL-3 examples

- `ex-the-type-a-two-coinvariant-algebra`
- `ex-wall-crossing-on-projectives-in-the-sl-two-block`
- `ex-the-soergel-functor-on-a-small-regular-block`
- `cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects`

### KL-4 examples

- `ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block`
- `ex-inverting-kl-multiplicities-to-obtain-simple-characters`
- `ex-translation-between-two-regular-integral-blocks`
- `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity`

### KL-5 examples

- `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two`
- `ex-translation-to-a-singular-wall-in-type-a-two`
- `ex-a-small-parabolic-category-o-character-formula`
- `cex-spherical-and-antispherical-normalizations-give-different-polynomials`

### KL-6 examples

- `ex-four-fock-bases-in-a-small-two-factor-tensor-space`
- `ex-residue-translation-on-small-parabolic-o-standards`
- `ex-opposite-parabolic-ringel-duality-on-a-finite-ideal`
- `cex-canonical-and-quasi-canonical-bases-need-not-coincide`

### KL-7 examples

- `ex-degenerate-affine-hecke-relations-on-two-tensor-factors`
- `ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration`
- `ex-vust-double-centralizer-in-a-small-stable-range`
- `ex-a-block-idempotent-corner-outside-the-stable-range`
- `cex-a-hecke-action-alone-does-not-imply-double-centralizer`

### KL-8 examples

- `ex-degenerate-ariki-decomposition-numbers-in-small-rank`
- `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block`
- `ex-charge-reversal-and-fock-involution-in-a-small-example`
- `cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one`

## 3. Source and proof-control ledger

Primary complete texts currently inspected by root:

| source | verified body | ranges used |
|---|---|---|
| Elias--Williamson, *The Hodge Theory of Soergel Bimodules*, [arXiv:1212.0791v2](https://arxiv.org/abs/1212.0791) | complete final-version 45-page article; SHA-256 `01039f543cdd06f13ed72d56899077a239e3d1d4b43d77f69aa448d792932ddf` | §§1–3 definitions and induction contract; §§4–6 local forms, deformation, weak Lefschetz, HR and Soergel conjecture |
| Libedinsky--Williamson, *Standard Objects in 2-Braid Groups*, [arXiv:1205.4206v2](https://arxiv.org/abs/1205.4206) | complete 25-page article; SHA-256 `138359c27da91978990fb3b41192ca9f0a1e8efd72ceab1997a71a61234088ff` | §§2--3 support-filtration standard objects, especially Proposition 3.7 and Lemma 3.8 for the delta-split Rouquier-complex seam |
| Björner--Brenti, *Combinatorics of Coxeter Groups*, [author-hosted complete PDF](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf) | complete 370-page book inspected through the author-hosted full text | §§5.1, 5.3, 5.5 for Hecke/R/KL recursions; §§6.2--6.5 and Appendix A3.6 for colored KL graphs, Knuth paths, edge transport and the type-A cell classification. Exercise 6.4(5) leaves the edge-transport proof to the reader, so KL-1 retains it as an explicit lemma |
| Casselman, *Notes on Kazhdan--Lusztig Polynomials*, [author-hosted complete PDF](https://personal.math.ubc.ca/~cass/research/pdf/KL.pdf) | complete 18-page notes inspected through the author-hosted full text | §§4--6 give the recursive and star-operation proofs, including Theorem 6.2's full edge-transport calculation; §8 proves the type-A Robinson--Schensted cell classification. This closes the proof-source gap left by Björner--Brenti's exercise |
| Brundan--Kleshchev, *The Degenerate Analogue of Ariki's Categorification Theorem*, [arXiv:0901.0057](https://arxiv.org/abs/0901.0057) | complete 44-page article; SHA-256 `31f6e1bc33cd9d42039dd5a063d2190d1363fabfa02c66d77a56ad813753d325` | §2 four Fock bases/parabolic KL coefficients; §§3.1–3.6 parabolic O, higher-level Schur--Weyl and Theorem 3.10; §4 duality/Young/tilting consequences |
| Brundan, *Dual Canonical Bases and Kazhdan--Lusztig Polynomials*, [arXiv:math/0509700v2](https://arxiv.org/abs/math/0509700) | complete 29-page article; SHA-256 `803ba980109ed6a0b8f58335c58bb583cdb2e202861eb59aa502470f27b83cae` | §§3--5 for tensor-product bars, column monomials and standard monomials; Theorem 26 and Remark 14 for the KL transition matrix |
| Soergel, *Kategorie O, perverse Garben und Moduln über den Koinvarianten zur Weylgruppe*, [MPIM preprint 1989 (46)](https://archive.mpim-bonn.mpg.de/id/eprint/3653/) | complete 32-page author preprint; SHA-256 `2835f638e9dfdb16159390b88c596b7abf0bba9d54df02ac1137356deaa5cda1` | Struktursatz 2/9, Endomorphismensatz 3/7, Theorems 4 and 10--12 for projectives, coinvariants and translation/projective-functor compatibility |
| Brundan--Kleshchev, *Shifted Yangians and Finite W-Algebras*, [arXiv:math/0407012v2](https://arxiv.org/abs/math/0407012) | complete 49-page article; SHA-256 `f3b5031efa53b2522f018c1be94242136eaea664cc1b399cb6443ce3a2d791d3` | §§2, 5--6 and 10 for shifted-Yangian PBW, the finite-W presentation and the loop/Kazhdan filtration distinction |
| Gan--Ginzburg, *Quantization of Slodowy Slices*, [arXiv:math/0105225](https://arxiv.org/abs/math/0105225) | complete 13-page published article inspected through the arXiv full text | §§2 and 4--5 for the contracting decomposition, Kazhdan filtration and cohomology vanishing; §6, especially Theorem 6.1 and its alternative proof, for Skryabin equivalence over a complex semisimple Lie algebra |
| Brundan--Kleshchev, *Schur--Weyl Duality for Higher Levels*, [arXiv:math/0605217](https://arxiv.org/abs/math/0605217) | complete 50-page article; SHA-256 `30c44793414f4b103d3de733d1c904b2f56f9fd5de1fe3e3d3ebaabdab861878` | §§2--3 filtered Vust/finite-W double centralizer and cyclotomic quotient; §4 parabolic O/projectives; §5 Whittaker functor and Theorems 5.10, 5.13; §6 idempotent truncation, Schur equivalence and standard/Specht/simple images |

For KL-3, Soergel's complete preprint is source context, not a substitute for
its imported universal-family endomorphism theorem. The current local proof
suppliers retain that all-T claim: MIT 18.757 §§13, 17 and 18 were inspected for
harmonic rank, the nilpotent central fiber and Duflo--Joseph; the slice/Jacobian,
PBW-growth and finite raising-matrix/base-change steps are expanded locally.
The separate local-R projective construction supports the central order,
Endomorphismensatz, Struktursatz and the polynomial/deformed multiplicity dictionary.
KL-4 proves actual inverse regular-block translations through unit/counit and
finite presentations, and uses the weighted inverse-KL matrix for characters.
KL-5 uses finite Levi Weyl-character cancellation (the inspected Moreau
§§13.1–13.3 and actual published Weyl supplier) for genuine regular parabolic
antispherical multiplicities, while singular multiplicities use the spherical
matrix with the explicit `k` label map. The inspected Mazorchuk--Stroppel
projectively parabolic-presentable, properly stratified category is not identified
with genuine parabolic O; the Ko--Mazorchuk--Mrđen duality route is not imported.
Constructive projectives, maximal traces, Hom/Ext1 and BGG preserve the generic
structural claims without Koszul duality. Owner scaffold readiness is current
29/29, 11/11 and 18/18 for these pairs; these reviews are not independent audits
of authored items.

The complete higher-level
Schur--Weyl paper supplies the filtered Vust/finite-W, Whittaker, idempotent-corner
and parabolic-O chain for KL-7. Its imported finite-W PBW and Skryabin inputs are
now explicit proposed items rather than hidden citations. The cached 40-page
Premet file is a positive-characteristic precursor and is not used as the
Skryabin source. Gan--Ginzburg §6 instead gives a complete characteristic-zero
proof; the preceding proposed lemma exposes the good-grading and reductive-centre
checks needed to apply that proof to the type-A pyramid pair. Full Ext/Koszul
refinements remain a named later frontier and are not claimed by KL-4.

## 4. Hard-gate checklist

- KL basis existence is a triangular induction; positivity comes later from
  Soergel Hodge theory.
- Soergel Hodge theory includes local forms, deformation, weak Lefschetz and
  the signature induction. Merely citing Theorem 1.1 is inadequate. BG-17's
  word-invariance of Rouquier complexes does not imply delta-splitting,
  linearity or weak Lefschetz.
- Hodge--Riemann signatures are proved after the explicit `Q -> R` scalar
  extension. Characters and indecomposable labels must then be carried back
  through the stated finite-free descent seam.
- Struktursatz full faithfulness is proved on projectives before projectives are
  identified with Soergel modules.
- Every category-O multiplicity formula freezes Bruhat and weight conventions.
  Ordinary Verma multiplicities are values `P_{y,w}(1)`; polynomial coefficients
  live in the auxiliary Soergel grading until a later Koszul/Ext enhancement.
- Singular and parabolic polynomials are not conflated.
- The four Fock bases and their category-O images remain distinct.
- QG-5 supplies tensor bars only on finite products of based integrable modules.
  KL-6 separately proves wedge straightening and compatibility with the
  truncation/direct-limit maps.
- Tilting-basis claims pass through an explicit Ringel-duality construction;
  BGG reciprocity alone does not identify them.
- Higher-level Schur--Weyl includes both endomorphism injectivity and the double
  centralizer, plus its finite-W/Whittaker and stable-range inputs; an action
  alone does not suffice.
- KL-7 uses the loop filtration with associated graded `U(g^e)` in the filtered
  double-centralizer argument. It neither identifies that filtration with the
  Kazhdan filtration nor imports the commutative Slodowy-slice geometry.
- Skryabin equivalence uses a separate Kazhdan-filtered Lie-cohomology argument:
  contracting decomposition, affine-unipotent de Rham acyclicity, spectral
  sequence convergence and detection by Whittaker vectors. The type-A pyramid
  good-grading and `gl_N` centre reductions are explicit proof obligations.
- No KL page consumes HA-22/HA-23 cyclic or Hochschild material, BG-19
  Hochschild homology, or a geometric realization. Those remain later frontiers,
  not concealed proof inputs.
- KL-8 is explicitly degenerate. Nondegenerate Ariki is supplied through QG-8
  and the later Hecke--KLR bridge.

## 5. Future-frontier splice contract

Register this block after HA-18--HA-23, the braid/Soergel pages, and QG-1--QG-8,
but before the symmetric-group pages that compare the two Ariki routes. Preserve
KL-1--KL-8 order and place every B companion immediately after its A page. The
16 page rows in `kazhdan-lusztig-planning/pages.json` keep empty `items`; the
141 reviewed proposed identities (108 A items and 33 B examples/counterexamples)
remain in
`kazhdan-lusztig-planning/proposed-items.json` for the later normal scaffold
stage.

The frozen seams are deliberately asymmetric:

- KL-1--KL-5 consume the braid track's type-A Soergel and Rouquier-complex
  suppliers and establish the regular, singular and parabolic KL theorems.
- KL-6 consumes QG-5's finite tensor-product bar, then owns wedge straightening
  and the truncation/direct-limit argument needed to compare the already
  constructed parabolic-KL bases with global bases. It does not replace the
  Soergel proof of the character theorem.
- KL-7--KL-8 supply the degenerate cyclotomic-Hecke/category-O route. They are
  optional comparison suppliers for the symmetric-group track, never a proof
  of the nondegenerate root-of-unity theorem.

The subsequent KL frontier is the Koszul/Ext enhancement explicitly reserved in
KL-4, followed by affine KL theory, p-canonical bases, parity sheaves, cells and
asymptotic algebras beyond finite type A. Those extensions are not prerequisites
of the present character or degenerate-Ariki seam.
