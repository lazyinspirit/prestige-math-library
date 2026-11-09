---
title: Chern-compatible presentation transports the exact fibers
status: published
research_item: lem-author-9b282fc59773-compatible-presentation-fibers
dependency_level: 14
---

## Prerequisites

- [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)
- [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

## Statement
Let $C_X:V\to T=\operatorname{Pic}(X)\times\mathrm{CH}^2(X)$ be the defined map. Suppose $M,N$ are sets, $v:V\to M$ and $b:N\to T$ are bijections, and $t:M\to N$ is a map satisfying $b\circ t\circ v=C_X$. For $y=(L,a)\in T$, let $n$ be its unique preimage under $b$. The restriction of $v$ is a bijection from $V_{L,a}$ onto $t^{-1}(n)$.

## Statement references
[def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)

[lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

## Facts & Assumptions
**Given:** The sets and maps in the Statement, including the actual equality $b t v=C_X$.

**Goal:** Produce the asserted fiber bijection.

[F1] The fiber of $C_X$ over $(L,a)$ is $V_{L,a}$. [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

## Proof
1.1 If $e\in V_{L,a}$, then $b(t(v(e)))=C_X(e)=y=b(n)$. Injectivity of $b$ yields $t(v(e))=n$. Conversely, if $m\in t^{-1}(n)$, its unique preimage $e$ under $v$ satisfies $C_X(e)=b(t(m))=y$, so $e\in V_{L,a}$. [F1, given]

2.1 The restrictions of $v$ and its inverse therefore map the two specified subsets into each other. Their composites remain the respective identity maps because they were inverse on the ambient sets. This proves the bijection of fibers. Mere abstract bijections of the ambient sets without the compatibility equality would not imply this conclusion. [step 1.1, given] ∎
