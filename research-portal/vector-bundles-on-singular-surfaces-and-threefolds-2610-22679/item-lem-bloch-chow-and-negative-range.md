---
title: Degree zero and negative homology of the cycle complex
status: published
research_item: lem-bloch-chow-and-negative-range
dependency_level: 7
---

PDF p. 13: Proof of Proposition 6.1: ordinary CH3 identification and degree-seven vanishing

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)
- [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology)
- [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)
- [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)


## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$. With ordinary Chow group $\mathrm{CH}^r(X)$ defined as codimension-$r$ cycles modulo principal-divisor rational equivalence as specified by the classical relation comparison, the identity on cycles induces $H_0z^r(X,\bullet)\cong\mathrm{CH}^r(X)$, and $H_nz^r(X,\bullet)=0$ for $n<0$. Consequently, if for every integer $p$ there is an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$, then $H^{2r,r}(X)\cong\mathrm{CH}^r(X)$ and $H^{p,r}(X)=0$ for $p>2r$. The existence of the comparison isomorphisms is not asserted.

## Statement references

[lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

## Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement; for the final conditional assertion, the stated comparison isomorphisms.

**Goal:** Identify degree-zero homology and derive the negative and reindexed vanishing statements.

[F1] Degree-zero homology is $Z^r(X)/B^r(X)$. [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)

[F2] The local graph-and-norm comparison identifies $B^r(X)$ with the subgroup of principal-divisor relations defining $\mathrm{CH}^r(X)$. [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[F3] Negative homology vanishes, and the stated higher-Chow comparison reindexes degree $2r$ to degree zero and $p>2r$ to negative homological degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F4] Higher Chow groups are defined as homology of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

## Proof

1.1 The two relation subgroups agree by [F2], so the identity on $Z^r(X)$ identifies the quotient in [F1] with the ordinary Chow group. This identification commutes with open restriction: a cycle restricts to its intersection with the open, and the face-length coefficients are unchanged there, so the common boundary/relation subgroup is preserved and the induced quotient maps agree. [F1, F2, F4]

2.1 Negative homology vanishes by [F3]. Under the additional comparison isomorphisms, [F3] identifies the degree-$2r$ group with degree-zero homology and gives zero for $p>2r$; composing the former identification with step 1.1 gives the asserted Chow-group isomorphism. [given, F3, F4, step 1.1] ∎
