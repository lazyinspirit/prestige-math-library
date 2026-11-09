---
title: Reindexing commutes with shifts
status: published
research_item: lem-author-80e2d7bee57f-chain-shift-reindex
dependency_level: 1
---

PDF p. 4: Shift [2j] in equation (2.1)

## Prerequisites

- [lem-author-80e2d7bee57f-cochain-to-chain](item-lem-author-80e2d7bee57f-cochain-to-chain)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

## Statement
Let $D_n=C^{-n}$ be the chain complex associated to a cochain complex $C$. For an integer $k$, define the chain shift by $D[k]_n=D_{n-k}$ and differential $(-1)^k\partial_{n-k}$. The chain complex associated to $C[k]$ is exactly $D[k]$.

## Facts & Assumptions
**Given:** $C$, $D$, and $k$ as stated.

**Goal:** Compare the shifted chain complexes.

[F1] [lem-author-80e2d7bee57f-cochain-to-chain](item-lem-author-80e2d7bee57f-cochain-to-chain) specifies the cochain-to-chain reindexing.

[F2] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) specifies the cochain shift.

## Proof
1.1 In degree $n$, the chain group associated to $C[k]$ is $C[k]^{-n}=C^{-n+k}=D_{n-k}$. [F1, F2, given]

2.1 Its differential is $(-1)^k d_C^{-n+k}$, which is precisely $(-1)^k\partial_{n-k}$. Thus the identification is an equality of chain complexes, natural in $C$. [F1, F2, step 1.1] ∎
