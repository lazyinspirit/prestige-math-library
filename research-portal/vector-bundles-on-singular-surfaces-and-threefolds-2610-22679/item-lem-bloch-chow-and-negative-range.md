---
title: Degree zero and negative homology of the cycle complex
status: published
research_item: lem-bloch-chow-and-negative-range
dependency_level: 8
---

PDF p. 13: Proof of Proposition 6.1: ordinary CH3 identification and degree-seven vanishing

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)
- [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology)
- [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)
- [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)
- [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)


## Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$ an integer. With ordinary Chow group $\mathrm{CH}^r(X)$ defined as codimension-$r$ cycles modulo principal-divisor rational equivalence as specified by the classical relation comparison, the identity on cycles induces $H_0z^r(X,\bullet)\cong\mathrm{CH}^r(X)$, and $H_nz^r(X,\bullet)=0$ for integers $n<0$. The degree-zero identification commutes with restriction to every open subscheme $V\subset X$. Consequently, if for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$, then $H^{2r,r}(X)\cong\mathrm{CH}^r(X)$ and $H^{p,r}(X)=0$ for $p>2r$. The existence of the comparison isomorphisms is not asserted.

## Statement references

[lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Facts & Assumptions

**Given:** The Axiom of Choice and $k$, $X$ and $r$ as in the statement; for the final conditional assertion, the stated groups and comparison isomorphisms.

**Goal:** Identify degree-zero homology, prove its compatibility with open restriction, and derive the negative and reindexed vanishing statements.

[A1] Choice meets the explicit construction assumption of the Bloch-complex definition and the hypotheses of the classical relation comparison and comparison-reindexing suppliers. The quotient and index arguments below make no further choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F1] Degree-zero homology is $Z^r(X)/B^r(X)$, where $Z^r(X)$ is the group of codimension-$r$ cycles and $B^r(X)=\operatorname{im}\partial_1$. [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)

[F2] The local graph-and-norm comparison identifies $B^r(X)$ with the subgroup $R^r(X)$ of principal-divisor relations defining $\mathrm{CH}^r(X)=Z^r(X)/R^r(X)$. This applies to every smooth finite-type $k$-scheme, without a separatedness hypothesis, including the case $r=0$. [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[F3] Negative homology vanishes, and the stated higher-Chow comparison reindexes degree $2r$ to degree zero and $p>2r$ to negative homological degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F4] Higher Chow groups are defined as homology of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F5] For an open subscheme $V\subset X$, the open-restriction supplier verifies that $V$ is smooth of finite type over $k$ and that cycle restriction gives a chain map $j^*:z^r(X,\bullet)\to z^r(V,\bullet)$, sending an empty restriction to zero. A chain map commutes with the differentials. [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[F6] The field and scheme-over-base interfaces fix the meaning of $k$ and $X$; smoothness and finite type refer to the structure morphism $X\to\operatorname{Spec}k$. An open immersion identifies its source with an open subscheme of the target. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[F7] Quotient groups have cosets as elements and the induced addition of representatives. All cycle groups here are abelian, so their subgroups are normal. A group isomorphism is a bijective group homomorphism. [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group), [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Proof

1.1 Under [A1], the two relation subgroups agree by [F2], so the identity on $Z^r(X)$ identifies the quotient in [F1] with the ordinary Chow group: the map $[a]_{B^r(X)}\mapsto[a]_{R^r(X)}$ is a bijective homomorphism by [F7]. For an open immersion $j:V\hookrightarrow X$, [F5] verifies the smooth finite-type hypotheses on $V$, so [F1] and [F2] also apply to $V$. Since $j^*$ is a chain map, $j_0^*(\partial_1 b)=\partial_1(j_1^*b)$; thus it sends $B^r(X)$ into $B^r(V)$. Equality with $R^r$ on both schemes shows that cycle restriction also preserves principal-divisor relations. Hence the quotient maps are well-defined: changing $a$ by a boundary changes $j_0^*a$ by a boundary, and the same holds for rational equivalence. Starting with either quotient, both composites send a cycle class to the class of the same restricted cycle. This proves compatibility of the identity-on-cycles identification with open restriction, including empty opens. [A1, F1, F2, F5, F6, F7]

2.1 Negative homology vanishes by [F3]. Under the additional comparison isomorphisms and [A1], [F3] identifies the degree-$2r$ group with degree-zero homology and gives zero for $p>2r$; here the higher Chow index is $2r-p<0$ by [F4]. Composing the degree-zero identification with step 1.1 gives the asserted ordinary Chow-group isomorphism. [given, A1, F3, F4, F7, step 1.1] ∎
