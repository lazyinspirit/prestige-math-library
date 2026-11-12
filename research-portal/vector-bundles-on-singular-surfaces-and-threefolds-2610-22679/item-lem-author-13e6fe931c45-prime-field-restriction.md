---
title: Restriction of the base field for weight one
status: published
research_item: lem-author-13e6fe931c45-prime-field-restriction
dependency_level: 9
---

PDF p. 4: Property (2)

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)
- [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms](item-lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$ containing the field and scheme data, as in the motivic-complex input; their existence is a separate size assumption.

Let $k$ be a field with prime subfield $F$, and let $X$ be a quasi-compact quasi-separated $k$-scheme. Here $F$ is the smallest subfield of $k$, and the $F$-structure on $X$ is the composite with the morphism $\operatorname{Spec}k\to\operatorname{Spec}F$ induced by inclusion. Then $X$ is a quasi-compact quasi-separated $F$-scheme, and the weight-one complex assigned to $X$ by the motivic-cohomology definition is the value at this same scheme of the Elmanto–Morrow prime-field functor. The small Nisnevich site of $X$ and its sheaf of units depend on $X$, not on which of these two structure maps is retained.

For this identification use the same full category of étale $X$-schemes with data in $U$ in both descriptions, regarded as $V$-small, containing $X$ and all open subschemes of its objects and closed under the relevant fibre products. Use $U$-small Nisnevich covering families and their associated Grothendieck topology. This is the small Nisnevich site with the scheme-site conventions applied using site universe $V$ and section universe $W$. Its structure presheaf is $\mathcal O_{\rm Nis}(U)=\Gamma(U,\mathcal O_U)$, with restriction along $h:V\to U$ induced by the structure-sheaf homomorphism $h^\sharp$. Its units presheaf is $\mathbb G_m(U)=\Gamma(U,\mathcal O_U)^\times$, with the restrictions induced by those same unital ring homomorphisms; $A^\times$ means the multiplicatively invertible elements of a ring $A$. This is a sheaf of abelian groups, and the site and this sheaf are identical for the two retained base structures.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)

[lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms](item-lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms)

## Facts & Assumptions

**Given:** Choice, the stated universe bounds, $k$, its prime subfield $F$, the qcqs $k$-scheme $X$, and the common small site in the statement.

**Goal:** Identify the scheme, motivic value, small Nisnevich site and its sheaf of units after forgetting the base structure.

[A1] The Choice and universe assumptions are inherited from [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), which uses Choice in its supplied derived enhancement, including resolution and model constructions. Choice has the meaning in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), and universe closure has the meaning in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Choice also permits selection of representative indices when replacing a Zariski cover by a small refinement; the base-map and units arguments require no further choice.

[F1] The motivic complex over $k$ is defined by restricting the Elmanto–Morrow functor on qcqs $F$-schemes ([def-motivic-cohomology](item-def-motivic-cohomology), [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)).

[F2] The prime subfield is the smallest subfield, and is canonically isomorphic to $\mathbb Q$ or $\mathbb F_p$ as appropriate ([math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield), [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)). A ring inclusion induces a morphism of affine spectra, and a scheme over a base has a specified structure morphism ([math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)). Quasi-compactness is the finite-subcover condition on the underlying space, and quasi-separatedness means that intersections of affine opens are quasi-compact ([math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)).

[F3] Use the small Nisnevich site and its étale objects, morphisms over $X$, and residue-field-preserving covering families from [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface), with the size, topology, presheaf and sheaf conventions of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Fix the same full category of all $U$-data étale $X$-schemes and the same $U$-small Nisnevich covering-family presentation before and after forgetting the base structure; this includes $X$, open subobjects and the relevant fibre products. Étaleness is the scheme-morphism condition of [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). Open immersions identify their sources with open subschemes, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), and are étale by [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion). A scheme morphism carries its structure-sheaf homomorphism and local stalk maps as in [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes).

[F4] The structure-presheaf assertion of [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input) requires a covering-family presentation satisfying the isomorphism, composition and base-change axioms, and applies to a full scheme site over a base $B$ when $B/B$ is an object, every Zariski covering of an object is refined by a site covering, and every specified site covering is an fpqc covering family. Its conclusion is that $U\mapsto\Gamma(U,\mathcal O_U)$, with the induced ring homomorphisms, is a sheaf. The same supplier states that every jointly surjective family of étale morphisms is an fpqc covering family. Only these two assertions of that external input are used here.

[F5] The units of a sheaf of commutative unital rings, with restriction induced by its ring homomorphisms, form a sheaf of abelian groups ([lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)). This includes the zero ring.

[F6] Under [A1], [lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms](item-lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms) proves that the $U$-small Nisnevich families on this full category satisfy those three covering axioms, with fibre products in the category, and that every Zariski open cover has a $U$-small Nisnevich refinement. Its proof uses étale stability and an explicit residue-field-preserving lift after arbitrary base change. The empty family covers the empty scheme. In particular, the covering presentation required by [F4] is established, not inferred merely from the existence of a generated topology.

## Proof

1.1 Under [A1], by [F2], inclusion $F\hookrightarrow k$ induces $\operatorname{Spec}k\to\operatorname{Spec}F$. Composing with the given structure morphism makes the same scheme $X$ an $F$-scheme. Its underlying space, structure sheaf and affine opens have not changed, so the two compactness conditions in [F2] have not changed either. Use the canonical identification of $F$ with $\mathbb Q$ or $\mathbb F_p$ in [F2] when applying the prime-field input [F1]. By the definition of restriction in [F1], the weight-one value over $k$ is therefore the original functor evaluated on this same $F$-scheme. [A1, F1, F2, given]

2.1 In the common category fixed in [F3], objects are étale over $X$ and morphisms commute with maps to $X$. Neither condition uses the retained map from $X$ to a field spectrum. The étale covering maps and their induced residue-field homomorphisms are likewise unchanged, so the generating Nisnevich coverings and the topology are identical. By [F6] their specified $U$-small families form a covering-family presentation: isomorphisms cover, composites cover, and pullbacks along category arrows exist in the category and cover. Its associated topology is exactly the topology fixed in [F3]. To apply [F4] with $B=X$, the category is full over $X$ and contains $X/X$. Every Zariski open cover has the small refinement proved in [F6]; its arrows are étale by the open-immersion assertion in [F3] and preserve residue fields because their structure sheaves are restricted from the target. Every specified Nisnevich covering is jointly surjective by its point-lifting condition and has étale arrows, hence is fpqc by [F4]. Thus the covering-family prerequisite and all four hypotheses of the structure-presheaf theorem hold, and $\mathcal O_{\rm Nis}$ is a sheaf for this topology. By [F5], its explicitly specified units presheaf is a sheaf of abelian groups. Its rings of sections and their restriction homomorphisms, induced by the scheme morphisms in [F3], depend only on the objects and morphisms over $X$, so the units sheaf is the same in both descriptions. Together with step 1.1, this proves all the identifications. [A1, F3, F4, F5, F6, step 1.1] ∎
