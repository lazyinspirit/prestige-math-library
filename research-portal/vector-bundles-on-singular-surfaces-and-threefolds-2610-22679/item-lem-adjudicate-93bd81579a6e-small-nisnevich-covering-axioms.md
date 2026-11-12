---
title: Covering axioms for the common small Nisnevich site
status: draft
research_item: lem-adjudicate-93bd81579a6e-small-nisnevich-covering-axioms
dependency_level: 7
---

## Prerequisites

- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition)
- [math:lem-field-valued-points-of-schemes](https://alphabetamath.cc/item/lem-field-valued-points-of-schemes)
- [math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V$ with $\omega\in U$ and a scheme $X$ with data in $U$; existence of these universes is a size assumption. Let $\mathcal C_X$ be the full category of all étale $X$-schemes with data in $U$, regarded as $V$-small, with all $X$-morphisms. A family $\{T_i\to T\}_{i\in I}$ is specified as covering when $I\in U$, its arrows are étale, and each $t\in T$ has a lift $t_i\in T_i$ for which $\kappa(t)\to\kappa(t_i)$ is an isomorphism. Here $\kappa(t)$ is the residue field of the local ring at $t$.

These specified families satisfy the covering-family axioms: every isomorphism is a singleton covering, composites of covering families are covering, and pullbacks of covering families along arbitrary arrows in $\mathcal C_X$ exist in that category and are covering. The empty family covers the empty scheme. The category contains $X/X$ and every open subscheme of each of its objects. Every Zariski open cover of an object has a specified covering refinement. The category and collection of specified families are $V$-small, so they give a covering-family presentation of the generated Nisnevich topology on this category.

## Statement references
[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition)

[math:lem-field-valued-points-of-schemes](https://alphabetamath.cc/item/lem-field-valued-points-of-schemes)

[math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Facts & Assumptions

**Given:** Choice, the universes, $X$, $\mathcal C_X$ and specified families in the Statement.

**Goal:** Establish the three covering axioms, size bounds and Zariski-refinement property for exactly this category and these families.

[A1] Choice has the meaning in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and is assumed in the étale-stability supplier below. It also selects representative indices for a small refinement of an arbitrarily indexed Zariski open cover. Universe closure means transitivity, pairing, power sets and indexed unions as in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); it gives products, subsets, function sets and quotients of $U$-small sets in $U$. This is not a proof that such universes exist.

[F1] A scheme over $X$ has a structure morphism and an $X$-morphism commutes with these maps, as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Scheme morphisms have their structure-sheaf and local stalk maps as in [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes). Nisnevich families and their generated topology have the meaning in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). Small categories, sieves and the Grothendieck topology have the conventions of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), using $V$ as the site universe here. A covering-family presentation means exactly the three axioms listed in the Statement.

[F2] Étaleness is defined in [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). Under Choice it is preserved by arbitrary base change and composition, by [math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition). Open immersions, including isomorphisms and empty open immersions, are étale by [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion). An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), so it induces isomorphisms of local rings and residue fields at corresponding points.

[F3] Scheme fibre products have the universal property in [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) and exist by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist). The latter constructs them from affine tensor-product charts and gluing along open subschemes. For $U$-data diagrams this construction can be performed with data in $U$: use $U$-small affine covers; tensor rings, their spectra, open subsets and the gluing quotients are obtained from $U$-small sets by the closure operations in [A1]. Its scheme universal property restricts to the full category over $X$ whenever the resulting structure map is étale.

[F4] By [math:lem-field-valued-points-of-schemes](https://alphabetamath.cc/item/lem-field-valued-points-of-schemes), a map $\operatorname{Spec}K\to T$ from a field corresponds to a point $t$ and a field embedding $\kappa(t)\hookrightarrow K$. In particular, $\operatorname{Spec}\kappa(t)\to T$ is canonical and compatible with scheme morphisms. A scheme morphism induces its residue-field homomorphism by quotienting its local stalk map, as in [math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map). These maps respect composition, since the stalk homomorphisms and their quotient maps do. No common-overfield construction from the field-valued-point supplier is used.

## Proof

1.1 An isomorphism is an open immersion, hence is étale and preserves residue fields by [F2], so its singleton family covers. The identity gives $X/X$, and any open subscheme of an object is étale over $X$ by [F2]; restricting its sheaf keeps its data in $U$ by [A1]. For a cover $\{T_i\to T\}_{i\in I}$ and covers $\{T_{ij}\to T_i\}_{j\in J_i}$, the composite arrows are étale by [F2]. Given $t\in T$, first take a residue-field-preserving lift $t_i$, then such a lift $t_{ij}$ of $t_i$. Their composite residue-field map is an isomorphism by [F4], proving the point-lifting condition. The set of pairs $(i,j)$ belongs to $U$ by [A1], so this is a specified covering family. No simultaneous choice of lifts at all points is needed. The empty scheme is an open subscheme, and its empty family covers by the vacuous point condition. The collection of object and arrow encodings is a subset of the set $U$, hence is in $V$ by [A1]; each specified family has an encoding in $U$, so the collection of such families is also $V$-small. For a Zariski open cover of $T$, the distinct open subsets form a subset of the $U$-small topology of $T$ and hence a $U$-small set. For each distinct open choose a representing cover index using [A1]; the corresponding open subobjects of $T$ give a refinement, with a map to that representative. These arrows are étale and preserve residue fields by [F2], so they are a specified covering, including the empty cover of the empty object. [A1, F1, F2, F4, given]

2.1 Let $\{T_i\to T\}_{i\in I}$ be a specified covering and $S\to T$ any category arrow. By [F3], choose $U$-data products $P_i=T_i\times_T S$. The projection $P_i\to S$ is étale by [F2], and its composite with $S\to X$ is étale, so $P_i$ belongs to $\mathcal C_X$; the scheme universal property gives the category pullback. For $s\in S$, put $t$ equal to its image and choose $t_i$ above $t$ with $a:\kappa(t)\to\kappa(t_i)$ an isomorphism. The inverse of $a$ followed by $\kappa(t)\to\kappa(s)$ gives an embedding $\kappa(t_i)\to\kappa(s)$. By [F4] it defines a map $\operatorname{Spec}\kappa(s)\to T_i$ compatible over $T$ with the canonical map $\operatorname{Spec}\kappa(s)\to S$. The universal property [F3] gives a map to $P_i$, with image $p$ over $s$, and [F4] gives an embedding $e:\kappa(p)\hookrightarrow\kappa(s)$. If $b:\kappa(s)\to\kappa(p)$ is induced by the projection, compatibility gives $eb=\operatorname{id}_{\kappa(s)}$. For any $z\in\kappa(p)$, injectivity of $e$ and $e(b(e(z)))=e(z)$ give $b(e(z))=z$. Thus $b$ and $e$ are inverse isomorphisms, proving the required lift after base change. The index set remains $I\in U$, so this is a specified cover. These pullbacks, the composition and isomorphism assertions of step 1.1 establish the covering axioms. Their generated Grothendieck topology is precisely the Nisnevich topology of [F1], and all size and refinement assertions were proved in step 1.1. [A1, F1, F2, F3, F4, step 1.1] ∎
