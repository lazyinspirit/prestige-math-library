---
title: Cycle-complex degree translation
status: draft
research_item: lem-author-91088613574d-cycle-reindex
dependency_level: 4
---

PDF p. 4: Property (4): higher Chow indexing

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-author-91088613574d-chain-cochain](item-lem-author-91088613574d-chain-cochain)
- [lem-author-91088613574d-even-shift](item-lem-author-91088613574d-even-shift)


## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $j\geq0$. Regard Bloch's homological cycle complex $z^j(X,\bullet)$ as a cochain complex by placing its degree-$n$ group in cochain degree $-n$. Then
$$H^i(z^j(X,\bullet)[-2j])\cong\mathrm{CH}^j(X,2j-i)$$
for every integer $i$, where the right side is higher Chow homology and is zero in negative homological degrees.

## Facts & Assumptions
**Given:** $k,X,j,i$ as stated.

**Goal:** Translate the shift into higher Chow indexing.

[F1] Bloch's complex and higher Chow groups are the specified chain complex and its homology; the complex is zero in negative degrees. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] Chain-to-cochain reindexing identifies degree-$q$ cohomology with degree-$(-q)$ homology. [lem-author-91088613574d-chain-cochain](item-lem-author-91088613574d-chain-cochain)

[F3] The even shift changes cohomological degree $i$ to $i-2j$. [lem-author-91088613574d-even-shift](item-lem-author-91088613574d-even-shift)

## Proof
1.1 By [F3], degree-$i$ cohomology of the shifted complex is degree-$(i-2j)$ cohomology of the reindexed cycle complex. [F3, given]

2.1 By [F2] this is homology in degree $2j-i$, which is the higher Chow group by [F1]. If that degree is negative it is zero by the same definition. [F1, F2, step 1.1] ∎
