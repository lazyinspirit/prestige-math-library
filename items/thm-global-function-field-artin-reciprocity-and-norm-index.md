---
id: thm-global-function-field-artin-reciprocity-and-norm-index
kind: theorem
title: Global Artin reciprocity and norm index for finite abelian function-field extensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- thm-function-field-second-norm-index-inequality
- thm-global-function-field-brauer-hasse-sequence
- thm-local-artin-reciprocity-and-norm-index
- def-local-artin-reciprocity-map
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- def-idele-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- lem-unramified-local-unit-norms-and-cohomology
- thm-fundamental-theorem-of-finite-galois-theory
- thm-field-norm-and-trace-by-embeddings
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: The original Statement choice assumptions are retained. AC implies DC and Countable
  Choice when an invoked supplier states them; ordinary/complete-resolution data are used exactly
  in the untensored Tate–Nakayama application.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: AppendixA.7–A.11, printed131–135, full relevant passages read. Source assertions
      of cd2/global comparison are replaced by the explicit local reconstruction and the bound
      suppliers.
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterVII2 Propositions2.2–2.6, printed203–207, full actual finite-idelic/norm
      proofs read; ChapterII3 untensored Tate–Nakayama is used through its separately proved
      scoped library corollary. No global CFT theorem imported.
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC.

Let $L/F$ be a finite Galois extension of global function fields with finite
exact constant fields and abelian Galois group. With local reciprocity normalized so that a
uniformizer in an unramified local extension maps to arithmetic Frobenius,
the product of the local reciprocity maps on ideles induces a continuous
surjective homomorphism
$$\operatorname{Art}_{L/F}:C_F\longrightarrow\operatorname{Gal}(L/F)$$
whose kernel is $N_{L/F}C_L$. Thus
$C_F/N_{L/F}C_L\simeq\operatorname{Gal}(L/F)$ and the norm index is $[L:F]$.

## Statement references

[[thm-function-field-second-norm-index-inequality]]

[[thm-global-function-field-brauer-hasse-sequence]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-local-artin-reciprocity-map]]

[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

## Facts & Assumptions

**Given:** Exactly the choices, finite abelian $L/F$ and arithmetic-Frobenius local normalization in the Statement. Write $G=\operatorname{Gal}(L/F)$.

[F1] The proved exact-cardinality Remark of the second inequality gives $[C_E:N_{T/E}C_T]=|\operatorname{Gal}(T/E)^{\mathrm{ab}}|$ for every finite Galois function-field extension, with the actual idelic norm. It is proved without any global Artin map.
[[thm-function-field-second-norm-index-inequality]]

[F2] The named canonical local Artin map is continuous and onto each finite abelian local quotient, has its actual norm kernel, and for a finite character $\chi$ satisfies $\chi(\operatorname{rec}(a))=\operatorname{inv}(a\smile\delta\chi)$ with the standard Brauer sign $b=-o$. Its finite unramified action is arithmetic Frobenius.
[[def-local-artin-reciprocity-map]]
[[thm-local-artin-reciprocity-and-norm-index]]
[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F3] Standard finite and continuous Brauer comparison preserves restriction and the positive scalar carry cocycle. The actual function-field Brauer row has finite-support localizations with sum of normalized invariants zero.
[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]
[[thm-global-function-field-brauer-hasse-sequence]]

[F4] The idèles are the restricted product, class groups are their quotient by principal elements, and tensor completion gives local decomposition groups. The direct idelic calculation proves finite ramification and the stabilizer/local-Galois identification. Unramified local units are norms.
[[def-idele-group-of-a-global-field]]
[[def-idele-class-group-of-a-global-field]]
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]
[[lem-unramified-local-unit-norms-and-cohomology]]

[F5] Finite Galois correspondence gives the fixed extension of every subgroup of $G$. Field norms by embeddings and their products define the idelic norm.
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[thm-field-norm-and-trace-by-embeddings]]
[[def-idele-class-group-of-a-global-field]]

[A1] AC, Countable Choice and DC are literal assumptions. In particular AC supplies the countable place choices in the completely split norm calculation and all stated cohomology conventions.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** construct the actual local product, kill principals by finite character carries and Brauer–Hasse, then use norm cardinality and the completely split contradiction.

**Given:** The data above; the local maps are the distinguished named maps [F2], not arbitrary maps normalized only on a uniformizer.

1.1 For every $v$, choose $w\mid v$ and identify $D_w=\operatorname{Gal}(L_w/F_v)$ with its subgroup of $G$ by [F4]. Since $G$ is abelian, conjugate choices give the same map $F_v^\times\to G$. Define $P(a)=\prod_v\operatorname{rec}_{L_w/F_v}(a_v)$. Only finitely many places ramify by [F4]; away from these and the finitely many nonunit components of $a$, [F4]'s unit norm result and [F2]'s norm kernel make the factor one. Thus the product is well defined and multiplicative. For continuity, at the finitely many ramified places choose an open local kernel, and take the full unit group elsewhere. Their product is an open restricted-product neighborhood killed by $P$. Therefore $P$ is continuous to finite discrete $G$. [A1, F2, F4, given, construct, algebra]

2.1 Let $a\in F^\times$ and $\chi:G\to\mathbb Q/\mathbb Z$ be any character. Choose rational lifts $r(g)$ of its finitely many values, with $r(1)=0$. The positive scalar carry $c(g,h)=a^{r(g)+r(h)-r(gh)}$ is a multiplicative $2$-cocycle with values in $L^\times$: its exponent is an integer and the cocycle identity is the telescoping Bockstein identity. Inflate it to $G_F$ and take its standard Brauer class $\alpha$ by [F3]. At $v$, restriction and coefficient inclusion give exactly the cocycle $a\smile\delta\chi_v$ for the local character on $D_w$. Hence [F2] gives $\operatorname{inv}_v(\alpha_v)=\chi(\operatorname{rec}_{L_w/F_v}(a))$. This is the actual finite-cochain principal-idele bridge, with positive standard-comparison sign, not an identification of abstract Tate–Nakayama with Artin reciprocity. [F2, F3, step 1.1, construct, algebra]

3.1 Sum step 2.1. The actual Brauer–Hasse row [F3] gives $\chi(P(a))=\sum_v\operatorname{inv}_v(\alpha_v)=0$. Characters separate a finite abelian group: decompose it into finite cyclic factors, or extend a character of a cyclic subgroup one generator at a time by solving its finite integer relation in the divisible group $\mathbb Q/\mathbb Z$. In the latter construction, if $m x\in H$ and a character is defined on $H$, choose a rational class $z$ with $m z=\chi(mx)$ and define $\chi(h+jx)=\chi(h)+jz$; the relation makes it well defined. Iterating over the finite group extends a character nonzero on any prescribed nonzero element. Thus $P(a)=1$. It follows that $P$ descends to a continuous homomorphism $\operatorname{Art}_{L/F}:C_F\to G$ by the quotient topology. [F3, step 1.1, step 2.1, construct, algebra]

4.1 The map kills the actual idelic norm. Its component at $v$ is a product of local norms $N_{L_w/F_v}(b_w)$, and every factor lies in the same local norm subgroup for the conjugate completion fields, whose canonical map has kernel that subgroup by [F2]. Thus $N_{L/F}C_L\subset\ker\operatorname{Art}_{L/F}$. It induces a homomorphism from the finite quotient of cardinality $|G|$ supplied by the proved exact-cardinality Remark [F1]. [F1, F2, F5, step 3.1, algebra]

5.1 Suppose its image is a proper subgroup $H<G$ and set $E=L^H$. The image of the full idèle map contains each local decomposition subgroup, because [F2] is onto and an idèle may be supported at one place. Therefore every $D_w$ is contained in $H$. Finite Galois correspondence [F5] and tensor completion [F4] show that every place of $F$ splits completely in the nontrivial abelian extension $E/F$: its local decomposition groups are the images $D_w/(D_w\cap H)=1$, so all completion degrees are one. For any idèle of $F$, choose one place above each $v$, put its component there through the completion isomorphism, and put $1$ at the other places. AC supplies the place choices. This is an idèle of $E$ because units remain units, and its norm is the original idèle. Thus $N_{E/F}C_E=C_F$. But [F1] gives its index as $|\operatorname{Gal}(E/F)|>1$, a contradiction. Hence the actual product map is onto. No nonsplit-prime or global class-field existence theorem was used. [A1, F1, F2, F4, F5, step 1.1, step 4.1, construct, algebra]

6.1 The induced onto map in step 4.1 has source and target of the same finite cardinality $|G|$, so is bijective. Consequently its kernel on $C_F$ is exactly $N_{L/F}C_L$ and its norm index is $|G|=[L:F]$. All maps here are the actual product with arithmetic-Frobenius local convention. This proves every original clause. It asserts no global realization of arbitrary open subgroups, no number-field or real-place analogue, and no Lubin–Tate action comparison. [F1, step 4.1, step 5.1, algebra] ∎
