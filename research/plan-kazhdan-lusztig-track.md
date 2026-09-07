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
`bruhat-decomposition-and-flags-over-finite-fields`, and
`the-hook-length-formula-and-rsk-correspondence`.

| proposed item | exact content and proof joint |
|---|---|
| `def-normalized-type-a-hecke-algebra-and-its-bar-involution` | Fix `H_s^2=1+(v^-1-v)H_s`, standard basis and semilinear bar. Give the exact dictionary to RG-13's `T_s,q`. |
| `lem-the-hecke-bar-involution-is-well-defined` | Check quadratic and braid relations, then `bar(H_w)=H_{w^-1}^{-1}`. |
| `def-bruhat-interval-and-r-polynomials` | Define finite intervals and the coefficients of `bar(H_y)` in the standard basis. |
| `thm-r-polynomial-recursion-and-degree-bounds` | Derive both descent cases and prove support, integrality and degree bounds by induction. |
| `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` | Construct the unique bar-invariant `underline H_w in H_w+sum_{y<w}v Z[v]H_y`; expose the triangular induction. |
| `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization` | Translate coefficients to `P_{y,w}(q)` with parity and degree conventions. |
| `thm-kazhdan-lusztig-polynomial-recursion` | State the full descent recursion including the leading-coefficient correction sum. |
| `def-inverse-kazhdan-lusztig-polynomials` | Define the inverse triangular matrix with exact signs and indices. |
| `thm-kazhdan-lusztig-inversion-formula` | Prove matrix inversion from bar-duality, not by finite examples. |
| `def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells` | Generate preorders from nonzero structure coefficients and quotient by mutual reachability. |
| `thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux` | Left cells have fixed recording tableau, right cells fixed insertion tableau, two-sided cells fixed shape. Consume Schensted explicitly. |

**B companion:** `kazhdan-lusztig-bases-polynomials-and-cells-examples`, with
complete `S_2`, `S_3`, a singular interval, and RSK cell computations.

## KL-2 — Soergel intersection forms and Hodge theory

**Requires:** KL-1,
`type-a-soergel-bimodules-and-hecke-categorification`,
`rouquier-complexes-and-categorical-braid-relations`, and elementary finite
dimensional bilinear-form theory from `dual-spaces-bilinear-forms-and-inertia`.

| proposed item | exact content and proof joint |
|---|---|
| `def-soergel-module-and-dominant-lefschetz-operator` | Quotient a Soergel bimodule by positive-degree right polynomials and let a strictly dominant degree-two element act on the left. |
| `def-invariant-intersection-form-on-a-bott-samelson-bimodule` | Build the form recursively from multiplication and Demazure trace; prove symmetry, invariance and nondegeneracy. |
| `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs` | State the centered grading, Lefschetz isomorphisms and exact alternating primitive signs. |
| `lem-hard-lefschetz-implies-primitive-decomposition` | Prove the linear-algebra decomposition and signature formula degree by degree. |
| `def-local-intersection-form-for-a-soergel-summand` | Composition pairing `Hom(B_y,B_xB_s) x Hom(B_xB_s,B_y) -> End(B_y)`. |
| `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character` | Under the lower Bruhat induction, relate ranks to the Hecke bilinear form and prove equivalence to the next character equality. |
| `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms` | Construct the evaluation map and prove it is an isometry up to a positive scalar. |
| `def-the-deformed-lefschetz-operator-on-b-x-b-s` | Define `L_zeta=(rho left) tensor 1 + 1 tensor (zeta rho left)` for `zeta>=0`. |
| `lem-hodge-riemann-for-large-positive-deformation` | Use the two shifted copies and tensor-product HR calculation to fix the large-zeta signature. |
| `lem-the-rouquier-complex-supplies-weak-lefschetz-injectivity` | From the exact Rouquier complex construct the degree-one map into lower Bruhat summands and prove injectivity in negative degrees. |
| `thm-deformed-hard-lefschetz-for-b-x-b-s` | Treat `zeta=0` and `zeta>0`, including the `zs<z` splitting, and prove every Lefschetz isomorphism. |
| `thm-hodge-riemann-for-indecomposable-soergel-bimodules` | Carry the signature from large zeta to zero through nondegeneracy and close the Bruhat induction. |
| `thm-soergels-character-conjecture` | Combine definite local forms with the detection theorem to prove `ch(B_w)=underline H_w`. |
| `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants` | Read positivity from standard filtrations and tensor decompositions. |

**B companion:** `soergel-intersection-forms-and-hodge-theory-examples`.
Its calculations stop at rank two; examples are not used to prove the general
Hodge induction.

## KL-3 — Projective functors and the Soergel functor in category O

**Requires:** KL-2, `category-o-finiteness-duality-and-blocks`,
`projectives-standard-filtrations-and-bgg-reciprocity`,
`symmetric-polynomials`, and `graded-bimodules-and-tensor-functors`.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-coinvariant-algebra-of-a-finite-weyl-group` | Quotient `S(h)` by positive-degree invariants and retain the grading. |
| `thm-chevalley-shephard-todd-freeness-and-the-coinvariant-regular-module` | In finite type A and characteristic zero, prove polynomial-invariant freeness and identify the coinvariant algebra with the regular Weyl-group module, including its graded Hilbert series. |
| `def-projective-functors-on-a-regular-integral-category-o-block` | Direct summands of finite-dimensional tensoring followed by block projection. |
| `def-wall-crossing-functor-and-unit-counit` | Define translation through a simple wall with its biadjunction maps. |
| `thm-projective-functors-are-generated-by-wall-crossing` | Use translation to/from walls and indecomposable summands; state indexing by Weyl-group elements. |
| `def-the-antidominant-projective-and-soergel-functor` | Set `V=Hom(P_antidominant,-)` with its endomorphism-ring action. |
| `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra` | Establish the center/endomorphism map and prove bijectivity, including grading. |
| `thm-soergels-struktursatz-full-faithfulness-on-projectives` | Prove `V` is fully faithful on projectives via standard filtrations, adjunction and translation induction. |
| `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule` | Construct the natural isomorphism with `C tensor_{C^s} C`, identify it as the right-coinvariant specialization of the polynomial Soergel bimodule, and verify the grading shift. |
| `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules` | Identify labels and normalizations by induction from the antidominant projective. |
| `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v` | Match the flag filtration with the Bruhat support filtration. |

**B companion:** `projective-functors-and-the-soergel-functor-in-category-o-examples`.

## KL-4 — The Kazhdan--Lusztig character and multiplicity theorem

**Requires:** KL-3 and `weyl-character-and-multiplicity-formulas`.

| proposed item | exact content and proof joint |
|---|---|
| `def-regular-integral-dot-orbit-labelling-convention` | Freeze dominant/antidominant base weight, left/right indexing, and Bruhat reversal. |
| `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` | Combine Struktursatz and the wall-crossing dictionary. |
| `thm-projective-verma-multiplicities-are-kazhdan-lusztig-coefficients` | Apply KL-2's character theorem with the exact shift-to-q conversion. |
| `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` | Use BGG reciprocity and duality; state the correct pair/order. |
| `thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o` | Invert the triangular multiplicity matrix and write the signed inverse-KL Verma-character sum. |
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
| `def-dual-canonical-canonical-and-quasi-canonical-fock-bases` | Define all four through one fixed pairing/bar convention; none are synonyms. |
| `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` | Match tableau permutations and Deodhar polynomials exactly. |
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
| `thm-the-finite-w-algebra-pbw-theorem-and-skryabin-equivalence` | Prove the Kazhdan-filtered PBW isomorphism and the equivalence between finite-W modules and Whittaker modules via the generalized Gelfand--Graev bimodule. These may not be treated as unnamed infrastructure. |
| `def-deformed-tensor-space-for-the-type-a-finite-w-algebra` | Construct the filtered tensor space and commuting finite-W/degenerate-Hecke actions whose associated graded object is Vust tensor space. |
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
| Brundan--Kleshchev, *The Degenerate Analogue of Ariki's Categorification Theorem*, [arXiv:0901.0057](https://arxiv.org/abs/0901.0057) | complete 44-page article; SHA-256 `31f6e1bc33cd9d42039dd5a063d2190d1363fabfa02c66d77a56ad813753d325` | §2 four Fock bases/parabolic KL coefficients; §§3.1–3.6 parabolic O, higher-level Schur--Weyl and Theorem 3.10; §4 duality/Young/tilting consequences |
| Soergel, *Kategorie O, perverse Garben und Moduln über den Koinvarianten zur Weylgruppe*, [MPIM preprint 1989 (46)](https://archive.mpim-bonn.mpg.de/id/eprint/3653/) | complete 32-page author preprint; SHA-256 `2835f638e9dfdb16159390b88c596b7abf0bba9d54df02ac1137356deaa5cda1` | Struktursatz 2/9, Endomorphismensatz 3/7, Theorems 4 and 10--12 for projectives, coinvariants and translation/projective-functor compatibility |
| Brundan--Kleshchev, *Schur--Weyl Duality for Higher Levels*, [arXiv:math/0605217](https://arxiv.org/abs/math/0605217) | complete 50-page article; SHA-256 `30c44793414f4b103d3de733d1c904b2f56f9fd5de1fe3e3d3ebaabdab861878` | §§2--3 filtered Vust/finite-W double centralizer and cyclotomic quotient; §4 parabolic O/projectives; §5 Whittaker functor and Theorems 5.10, 5.13; §6 idempotent truncation, Schur equivalence and standard/Specht/simple images |

The primary Soergel preprint now supplies Endomorphismensatz, Struktursatz and
translation compatibility for KL-3 through KL-5. The complete higher-level
Schur--Weyl paper supplies the filtered Vust/finite-W, Whittaker, idempotent-corner
and parabolic-O chain for KL-7. Its imported finite-W PBW and Skryabin inputs are
now explicit proposed items rather than hidden citations. Full Ext/Koszul
refinements remain a named later frontier and are not claimed by KL-4.

## 4. Hard-gate checklist

- KL basis existence is a triangular induction; positivity comes later from
  Soergel Hodge theory.
- Soergel Hodge theory includes local forms, deformation, weak Lefschetz and
  the signature induction. Merely citing Theorem 1.1 is inadequate.
- Struktursatz full faithfulness is proved on projectives before projectives are
  identified with Soergel modules.
- Every category-O multiplicity formula freezes Bruhat and weight conventions.
- Singular and parabolic polynomials are not conflated.
- The four Fock bases and their category-O images remain distinct.
- Tilting-basis claims pass through an explicit Ringel-duality construction;
  BGG reciprocity alone does not identify them.
- Higher-level Schur--Weyl includes both endomorphism injectivity and the double
  centralizer, plus its finite-W/Whittaker and stable-range inputs; an action
  alone does not suffice.
- KL-8 is explicitly degenerate. Nondegenerate Ariki is supplied through QG-8
  and the later Hecke--KLR bridge.

## 5. Future-frontier splice contract

Register this block after HA-18--HA-23, the braid/Soergel pages, and QG-1--QG-8,
but before the symmetric-group pages that compare the two Ariki routes. Preserve
KL-1--KL-8 order and place every B companion immediately after its A page. The
16 page rows in `kazhdan-lusztig-planning/pages.json` keep empty `items`; the
126 reviewed proposed identities (93 A items and 33 B examples/counterexamples)
remain in
`kazhdan-lusztig-planning/proposed-items.json` for the later normal scaffold
stage.

The frozen seams are deliberately asymmetric:

- KL-1--KL-5 consume the braid track's type-A Soergel and Rouquier-complex
  suppliers and establish the regular, singular and parabolic KL theorems.
- KL-6 consumes QG-5 only to compare already constructed parabolic-KL bases
  with global bases; it does not replace the Soergel proof of the character
  theorem.
- KL-7--KL-8 supply the degenerate cyclotomic-Hecke/category-O route. They are
  optional comparison suppliers for the symmetric-group track, never a proof
  of the nondegenerate root-of-unity theorem.

The subsequent KL frontier is the Koszul/Ext enhancement explicitly reserved in
KL-4, followed by affine KL theory, p-canonical bases, parity sheaves, cells and
asymptotic algebras beyond finite type A. Those extensions are not prerequisites
of the present character or degenerate-Ariki seam.
