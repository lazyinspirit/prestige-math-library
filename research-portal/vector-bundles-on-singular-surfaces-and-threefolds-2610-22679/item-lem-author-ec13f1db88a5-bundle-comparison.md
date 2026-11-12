---
title: Agreement with the existing projective-relation and virtual bundle first
  classes
status: published
research_item: lem-author-ec13f1db88a5-bundle-comparison
dependency_level: 24
---

PDF p. 8: Proposition3.2, perfect-complex first class and determinant

## Prerequisites

- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [def-total-chern-class](item-def-total-chern-class)
- [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection)
- [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences)
- [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern, Picard and flag constructions. For any field $k$ and qcqs $X/k$, the supplied projective-relation first class of an actual bundle $E$ satisfies $c_1(E)=\gamma_X(\det E)$, where $\gamma_X:\operatorname{Pic}(X)\to H^{2,1}(X)$ is the actual EM orientation. The same holds for the existing virtual first class on $K^0_{\rm vb}(X)$. This statement neither assumes nor concludes that $K^0_{\rm vb}(X)\to K_0(\operatorname{Perf}(X))$ is surjective.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site and universe bounds of the Statement. Use compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the field, scheme and bundle data; the scheme categories and covering diagrams are small in the universes required by the suppliers, with their derived enhancements in a larger ambient universe. The closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Existence of these universes is a separate size assumption, not a consequence of Choice. These premises are inherited by the Whitney, projective-relation, flag, derived-sheaf and virtual-series inputs in [F1]–[F5] at steps 1.1–3.1. The finite rank partition and finite-product calculation introduce no additional arbitrary choice.

[F0] A vector bundle is a finite locally free $\mathcal O_X$-module, with its well-defined locally constant finite rank as in [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The qcqs hypothesis means quasi-compact and quasi-separated as in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). Write $H^{i,j}(T)=H^i(\mathbb Z(j)_{\rm mot}(T))$ for integral motivic cohomology, with the complex and restriction maps of [def-motivic-cohomology](item-def-motivic-cohomology). Only weight one is used in the detection calculation below.

[F1] [prop-chern-whitney-identities](item-prop-chern-whitney-identities) supplies actual filtered-root Whitney and normalization $c_1(L)=\gamma_T([L])$ on lines for every qcqs field-scheme $T$; [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1) supplies the natural group homomorphism $\gamma_T:\operatorname{Pic}(T)\to H^{2,1}(T)$, including $\gamma_T([\mathcal O_T])=0$ and compatibility with tensor inverses.

[F2] [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) defines the determinant on a constant-rank bundle as its top exterior power, including $\det 0=\mathcal O_T$, and supplies its pullback compatibility. [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences) extends this construction over the open rank loci and gives its natural exact-sequence isomorphism on every scheme. Iterating this isomorphism identifies the determinant of a line-filtered bundle with the tensor product of its line quotients. The group of line-bundle isomorphism classes, with tensor product, identity $[\mathcal O_T]$ and inverse $[L^\vee]$, is [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme). Only the arbitrary-scheme determinant isomorphism is used here, not the supplier's separately stated locally Noetherian $K^0$ assertion.

[F3] The abstract constant-rank detection statement in [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) applies to the actual theory of [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) over every field: the latter supplies the additively oriented projective-bundle contract on qcqs $k$-schemes. The tower lies in that category, has global line-quotient filtrations for constant positive rank, and has injective cohomological pullback. No unconditional all-field varying-rank assertion is taken from the flag supplier.

[F4] [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata) supplies the finite clopen rank partition, its qcqs strata and componentwise flag constructions, including rank zero and the empty scheme. For every field $k$, [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the actual homotopy-coherent derived Nisnevich sheaf $\mathbb Z(1)_{\rm mot}$ on qcqs $k$-schemes by restriction from the prime field, under [A1]. [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent) gives its finite-clopen product equivalence, including value zero on the empty scheme. [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products) identifies cohomology of that finite product with the product of the cohomology groups, with coordinate maps the restrictions. These interfaces, rather than the field-restricted motivic clause of the flag supplier, are used for varying rank in step 2.1.

[F5] [def-motivic-chern-classes](item-def-motivic-chern-classes) supplies the constant-rank projective-relation coefficients and their pullback naturality, with $c_1(0)=0$. [def-total-chern-class](item-def-total-chern-class) supplies their gluing on clopen rank strata and the representative-independent natural virtual series $c_t([V]-[W])=c_t(V)c_t(W)^{-1}$. Its group $K^0_{\rm vb}(X)$ is the abelian group on finite locally free bundle isomorphism classes with the relations $[E]=[E']+[E'']$ for short exact sequences $0\to E'\to E\to E''\to0$. This presentation is used on every qcqs $X$, without identifying it with all perfect classes.

## Proof
**Given:** $E$ or a virtual bundle class on a qcqs scheme over an arbitrary field $k$, with AC and the stated compatible size bounds.

**Goal:** Prove agreement with the original actual and virtual first coefficients in the full stated field and rank scope.

1.1 For an actual bundle $E$ of positive constant rank, take the flag tower $q:Y\to X$ of [F3]. Pullback is injective in bidegree $(2,1)$. On $Y$, [F1] and [F5] make $q^*c_1(E)$ the sum of the first classes of its line quotients, and [F2] makes $q^*\det E$ their tensor product. The line normalization and additivity of $\gamma_Y$ in [F1] identify these expressions. Naturality in [F1], [F2] and [F5], followed by injectivity, therefore gives $c_1(E)=\gamma_X([\det E])$ on $X$. This uses only the abstract constant-rank flag statement and the all-field projective-bundle contract. [A1, F0, F1, F2, F3, F5]

2.1 For arbitrary rank, use the finite clopen partition $X=\coprod_\alpha X_\alpha$ of [F4]. Put $C_1(T)=\mathbb Z(1)_{\rm mot}(T)$, the actual derived Nisnevich sheaf supplied there over this arbitrary field $k$. Every stratum, its inclusion and its iterated intersections lie in the qcqs category: each intersection is a stratum or the empty scheme. Thus the clopen-descent hypotheses in [F4] apply and give $C_1(X)\simeq\prod_\alpha C_1(X_\alpha)$. The finite-product cohomology comparison in [F4], with the definition in [F0], gives the restriction isomorphism $H^{2,1}(X)\cong\prod_\alpha H^{2,1}(X_\alpha)$. On a positive-rank stratum the equality is step 1.1. On a rank-zero stratum [F5] gives $c_1(0)=0$, while [F2] gives determinant $\mathcal O$ and [F1] gives its zero orientation class. Both sides restrict naturally by [F1], [F2] and [F5], so joint injectivity gives the equality globally. If $X$ is empty, the product is empty and $C_1(X)=0$ by [F4], proving the same equality. [A1, F0, F1, F2, F4, F5, step 1.1]

3.1 Every class of the presented group in [F5] is a difference $[V]-[W]$: its generators occur in finite sums, and the split exact-sequence relations identify sums with direct sums. The linear coefficient of $c_t(V)c_t(W)^{-1}$ is $c_1(V)-c_1(W)$, since the linear coefficient of the inverse of $1+a_1t+\cdots$ is $-a_1$. The assignment $[E]\mapsto[\det E]$ kills every relation of that presented group by the exact-sequence isomorphism in [F2], so it descends to a homomorphism with value $[\det V\otimes(\det W)^{-1}]$ on $[V]-[W]$. This uses no locally Noetherian hypothesis. Step 2.1 and the homomorphism property of $\gamma_X$ in [F1] identify the first coefficient with $\gamma_X([\det V\otimes(\det W)^{-1}])$. The equality is natural by the supplied pullback compatibilities, and makes no identification with all perfect classes. [A1, F0, F1, F2, F5, step 2.1, algebra] ∎
