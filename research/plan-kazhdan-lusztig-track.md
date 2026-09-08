# Kazhdan--Lusztig theory, Soergel Hodge theory, and category O

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

## KL-6 — Parabolic category O and Fock-space bases

**Requires:** KL-5, `balanced-triples-and-global-crystal-bases`,
`grothendieck-groups-and-graded-cartan-pairings`, and
`young-diagrams-tableaux-and-permutation-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-higher-level-wedge-tensor-fock-module` | Fix finite type-A tensor factors, column-strict tableaux, charge, and the standard monomial basis. |
| `thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis` | Construct each finite wedge quotient and, in the unbounded case, the stabilized direct limit; prove the normally ordered wedges and their column tensor products are a basis and that the quantum-group action is well defined weightwise. |
| `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations` | Consume QG-5's `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`: its scope is finite tensor products of based integrable finite-weight-space type-A modules, with weightwise finite quasi-R action, involutive compatible bar, integral-lattice preservation, parenthesization independence, and locally finite dominance triangularity. Prove here that the column monomials meet those hypotheses and that the truncation embeddings commute with bar, so the unbounded direct limit carries a well-defined compatible bar. QG-5 does not supply this semi-infinite/direct-limit step. |
| `def-dual-canonical-canonical-and-quasi-canonical-fock-bases` | Define all four through one fixed pairing/bar convention; none are synonyms. |
| `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` | Match tableau permutations and Deodhar polynomials exactly. |
| `thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule` | Project the column monomial basis to the highest-weight constituent, prove the straightening/standard-monomial theorem in bounded type A, and pass through the truncation direct limit. This may not be inferred from the dimension of the category-O Grothendieck group. |
| `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality` | Specify `gl_N`, standard parabolic/Levi, integral block, and its tableau labels. |
| `def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks` | Split tensoring with the natural and dual modules by generalized central character, and specify the residue/weight indexing and adjunction shifts. |
| `thm-residue-translation-functors-give-the-integrable-fock-space-action` | Verify the Chevalley and Serre relations on Grothendieck groups from their action on generalized Verma flags, then prove integrability and identify the highest vector. An action on labels alone is insufficient. |
| `thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module` | Standards map to monomials; functor action matches Chevalley operators. |
| `def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category` | Define tiltings by simultaneous standard and costandard filtrations, with the highest-weight-poset support conditions needed for uniqueness. |
| `thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o` | Construct the unique indecomposable tilting of each highest weight by successive universal extensions and duality; prove every tilting splits as their sum. |
| `def-the-ringel-dual-of-a-finite-highest-weight-ideal` | Take the opposite endomorphism algebra of a full tilting generator and prove the reversed-poset highest-weight structure before using Ringel duality. |
| `thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic` | Use Arkhipov's longest-element twisting functor to identify standard-filtered objects in the opposite parabolic category with costandard-filtered objects in the original one, send opposite projectives to tiltings, and pass compatibly through finite block ideals. This is the supplier for the canonical/quasi-canonical exchange. |
| `thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases` | Use KL-5, BGG reciprocity and the preceding proved Ringel self-duality to map simples to dual-canonical, projectives to quasi-canonical, and tiltings to canonical. |
| `lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings` | Track all dual and bar normalizations. |
| `thm-the-highest-weight-fock-submodule-has-the-qg-global-bases` | Compare the KL-defined bases to QG-5 by bar invariance, triangularity and pairing uniqueness. |

**B companion:** `parabolic-category-o-and-fock-space-bases-examples`.

## KL-7 — Arakawa--Suzuki functors and higher-level Schur--Weyl duality

**Requires:** KL-6, `tensor-products-of-modules`, and
`graded-bimodules-and-tensor-functors`.

| proposed item | exact content and proof joint |
|---|---|
| `def-degenerate-affine-hecke-algebra` | Give symmetric-group and commuting polynomial generators with all cross relations. |
| `def-degenerate-cyclotomic-hecke-algebra` | Quotient by the exact level/charge polynomial relation on the first Jucys--Murphy generator. |
| `def-arakawa-suzuki-casimir-operators-on-tensor-functors` | Construct simple transpositions and tensor Casimir operators on `M tensor V^tensor d`. |
| `thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations` | Verify braid, commuting-polynomial and cross relations directly. |
| `lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient` | Compute the cyclotomic polynomial on the highest-weight filtration. |
| `def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character` | From the level composition construct the nilpotent `e`, good grading, Premet subalgebra `m`, and character `chi`; prove the character vanishes on commutators. |
| `def-the-type-a-finite-w-algebra-and-whittaker-category` | Define `U(g,e)` as Whittaker invariants and the Whittaker-module category on which `x-chi(x)` acts locally nilpotently. |
| `lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading` | Adapt Gan--Ginzburg §§2, 4--6 from the Dynkin grading to the chosen type-A pyramid good grading, as Brundan--Kleshchev explicitly permit: choose the Lagrangian in `g(-1)`, prove the contracting-action decomposition and `gr_K Q ~= C[N] tensor gr_K U(g,e)`, identify the Lie-cohomology complex with the algebraic de Rham complex of the affine unipotent group, deduce higher-cohomology vanishing by the filtered spectral sequence, and prove that zero Whittaker vectors force a locally nilpotent module to vanish. Pass from `sl_N` to `gl_N` by splitting off the reductive centre. None of this follows from the loop PBW theorem. |
| `thm-skryabins-equivalence-for-the-type-a-whittaker-pair` | Use the preceding cohomology vanishing to prove that tensoring with the generalized Gelfand--Graev `(U(g),U(g,e))` bimodule and taking Whittaker vectors are quasi-inverse between finitely generated left `U(g,e)`-modules and finitely generated `U(g)`-modules in the stated locally nilpotent Whittaker category; prove exactness of Whittaker vectors from the same vanishing. This is a separate theorem from every PBW statement. |
| `thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e` | Using the explicit type-A shifted-Yangian generators and their ordered-monomial PBW theorem, prove `gr_loop U(g,e) ~= U(g^e)`. Do not call this the Kazhdan filtration: the latter has commutative Slodowy-slice associated graded and is not used by the double-centralizer argument. |
| `def-deformed-tensor-space-for-the-type-a-finite-w-algebra` | Construct the loop-filtered tensor space and commuting finite-W/degenerate-Hecke actions whose associated graded object is Vust tensor space. |
| `thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer` | Lift Vust's graded double centralizer through the separated filtration, proving both centralizers and faithfulness in the stable range. |
| `def-the-whittaker-functor-from-the-relevant-parabolic-o-summand` | Define Whittaker coinvariants/completion with the exact block truncation and its natural compatibility with tensoring. |
| `thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives` | Prove exactness, identify its projective images, and establish the Hom isomorphism on the additive generator. This is the bridge from the finite-W centralizer to category O. |
| `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor` | Define `T^Lambda_alpha` and `Hom_g(T,-)` with the correct opposite endomorphism action. |
| `def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality` | State when the Hecke action is faithful, when only its image occurs, and the central idempotent/corner required outside the stable range. |
| `thm-higher-level-schur-weyl-endomorphism-isomorphism` | Prove `End_g(T)^op` is the relevant degenerate cyclotomic Hecke block or declared idempotent corner, including surjectivity and dimension/injectivity. |
| `thm-higher-level-schur-weyl-double-centralizer` | Prove the second centralizer and full faithfulness on projectives, using the preceding Whittaker and stable-range statements rather than asserting it from the Hecke action. |
| `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects` | Standards become the chosen Specht modules; simples become the labelled simple or zero; projectives become covers; give the tilting/Young image. |
| `thm-category-o-translation-intertwines-residue-induction-and-restriction` | Construct the natural isomorphisms and preserve adjunction/grading conventions. |

**B companion:** `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples`.

## KL-8 — The degenerate Ariki categorification theorem

**Requires:** KL-7 and `grothendieck-groups-and-graded-cartan-pairings`.

| proposed item | exact content and proof joint |
|---|---|
| `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | Direct sum over ranks/blocks with exact induction and restriction summands. |
| `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | Transfer the category-O action across Schur--Weyl and prove generation. |
| `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` | Use projective/simple perfect pairing and adjunction. |
| `thm-degenerate-ariki-categorification` | Under the bounded-below charge hypotheses, simples map to dual-canonical basis and indecomposable projectives to canonical/quasi-canonical basis in the source's precise normalization. |
| `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one` | Use the exact Schur image of standards and the transition matrix. |
| `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | State the charge reversal, conjugation and basis involution exactly. |
| `rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges` | Point to QG-8 plus the cyclotomic Hecke--KLR isomorphism for the nondegenerate theorem; assert no implication between parameter regimes. |

**B companion:** `the-degenerate-ariki-categorification-theorem-examples`.

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

The primary Soergel preprint now supplies Endomorphismensatz, Struktursatz and
translation compatibility for KL-3 through KL-5. The complete higher-level
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
