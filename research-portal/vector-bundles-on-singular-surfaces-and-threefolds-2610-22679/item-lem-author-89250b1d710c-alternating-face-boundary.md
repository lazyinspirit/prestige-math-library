---
title: Alternating face boundaries square to zero
status: draft
research_item: lem-author-89250b1d710c-alternating-face-boundary
dependency_level: 2
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)
- [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)
- [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)


## Statement
Let $C_n$ be abelian groups for $n\geq0$ and let $d_i^n:C_n\to C_{n-1}$, $0\leq i\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ for $i<j$ and $n\geq2$. Put $C_n=0$ for $n<0$, $\partial_n=0:C_n\to C_{n-1}$ for every $n\leq0$, and $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$ for $n\geq1$. Then $\partial_{n-1}\partial_n=0$ for every integer $n$, and $H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}$ is defined and vanishes for $n<0$. This applies to the admissible cycle face maps for smooth finite-type schemes over fields.

## Facts & Assumptions

**Given:** The groups and face identities in the Statement.

**Goal:** Prove the chain identity and justify the homology quotient.

[F1] The admissible cycle face maps satisfy these identities. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] A chain complex has consecutive differential composites zero; its homology is cycles modulo boundaries. [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

## Proof

1.1 For $n\geq2$, expand $\partial_{n-1}\partial_n=\sum_{a=0}^{n-1}\sum_{b=0}^{n}(-1)^{a+b}d_a^{n-1}d_b^n$. Pair $(a,b)$ with $a<b$ to $(b-1,a)$. This is a bijection onto the pairs whose first coordinate is at least the second, with inverse $(c,d)\mapsto(d,c+1)$. [given, construct, algebra]

2.1 The two maps in each pair agree by the face identity, while their signs are opposite. All terms cancel. For $n=1$ the composite is zero because $\partial_0=0$; for $n\leq0$ it is zero because $\partial_n$ is the explicitly defined zero map. [given, step 1.1, algebra]

3.1 Therefore boundaries lie in kernels, and [F2] defines the displayed homology quotient. For $n<0$ the group itself is zero. Substitution of [F1] gives the cycle-complex application, completing the proof. [F1, F2, step 2.1] ∎
