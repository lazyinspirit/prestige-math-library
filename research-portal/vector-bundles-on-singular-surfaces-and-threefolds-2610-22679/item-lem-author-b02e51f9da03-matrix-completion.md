---
title: Matrix completion detects the actual nontrivial bundle
status: published
research_item: lem-author-b02e51f9da03-matrix-completion
dependency_level: 2
---

## Prerequisites

- [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. For $q:A^{r+N}\to A^N$ with right inverse as above, say that $q$ is **completable** if it is the last $N$ rows of an invertible $(r+N)\times(r+N)$ matrix $B$, equivalently $q=\operatorname{pr}_2 B$ under $A^{r+N}=A^r\oplus A^N$. The associated rank-$r$ kernel bundle is trivial if and only if $q$ is completable. Thus failure of completion is a precise obstruction to trivializing this bundle, even though its displayed free stabilization is trivial.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, AC and the article's fixed universe bounds where its K-theory is used.

**Goal:** Establish the stated conclusion.

[F1] The kernel is finite projective and the actual free stabilization is explicit. [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)

[F2] The affine equivalence detects isomorphisms with finite free modules. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

1.1 If $q=\operatorname{pr}_2 B$ and $B$ is invertible, restriction of $B$ identifies $\ker q$ with $\ker\operatorname{pr}_2=A^r\oplus0$. Thus the kernel is free and its associated bundle is trivial by [F2]. [F1, F2, given]

2.1 Conversely suppose $\ker q$ is free, and choose an isomorphism $u:A^r\to\ker q$. The map $T:A^r\oplus A^N\to A^{r+N}$, $T(v,w)=u(v)+j(w)$, is an isomorphism by [F1] and satisfies $qT=\operatorname{pr}_2$. Hence $B=T^{-1}$ is invertible and $q=\operatorname{pr}_2B$. This supplies the completion and proves the equivalence with actual triviality. [F1, F2, step 1.1, construct] ∎
