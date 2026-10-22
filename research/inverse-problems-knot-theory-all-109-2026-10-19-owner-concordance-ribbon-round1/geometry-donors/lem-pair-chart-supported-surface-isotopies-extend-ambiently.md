---
id: lem-pair-chart-supported-surface-isotopies-extend-ambiently
kind: lemma
title: Surface isotopies supported in one pair chart extend ambiently
status: draft
origin: session
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles Livingston, Connected sums of codimension two locally flat submanifolds
      url: https://doi.org/10.1017/prm.2022.87
      locator: Section 3, elementary local motions in Lemma 3.3
---

## Statement

Let $A$ be a locally flat surface in a four-manifold $M$, and let $q:(U,U\cap A)\to(\mathbb R^2\times\mathbb R^2,\mathbb R^2\times\{0\})$ be a pair chart. Suppose $h_t:\mathbb R^2\to\mathbb R^2$, $0\le t\le1$, is an isotopy from the identity, supported in one compact subset $K\subset\mathbb R^2$. Its action on $U\cap A$, conjugated by $q$, extends to an ambient isotopy of $M$, supported in a compact subset of $U$, preserving $A$ setwise. No normal neighborhood of all of $A$ is assumed.

## Facts & Assumptions

**Given:** The pair chart and isotopy, with its jointly continuous inverse family, and one compact set supporting every $h_t$.

## Proof

1.1 Choose a continuous function $\chi:\mathbb R^2\to[0,1]$ with compact support and $\chi(0)=1$. On the chart model define $H_t(x,z)=(h_{t\chi(z)}(x),z)$. Its inverse is $H_t^{-1}(x,z)=(h_{t\chi(z)}^{-1}(x),z)$. Both are jointly continuous in their space and time variables. Thus this is an ambient isotopy of $\mathbb R^4$, preserving the zero plane and inducing exactly $h_t$ there. [given, construct]

2.1 The isotopy is the identity outside $K\times\operatorname{supp}\chi$, a compact subset of the chart model. Conjugate it by $q$ on $U$ and extend by the identity on $M\setminus U$. Its nonidentity set is contained in the compact subset $q^{-1}(K\times\operatorname{supp}\chi)$ of $U$, so the formulas and their inverses are continuous across the complement of $U$. They give the required ambient isotopy and the asserted preservation of $A$. [step 1.1, given, construct] ∎

## Remarks

This is a local construction using an already supplied pair chart. It does not assert that pair charts at different points have compatible normal projections.
