---
id: lem-qc-orthogonal-error-syndrome-projectors
kind: lemma
title: Orthogonal error restrictions determine syndrome projections
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-non-negative-and-positive-operator, def-orthogonal-projection, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-qc-isometric-encoding-projector, thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $H_L,H_O$ be finite-dimensional complex inner-product spaces, and let
$W_i:H_L\to H_O$ be finitely many isometries with pairwise orthogonal
ranges. Then $P_i=W_iW_i^*$ are pairwise orthogonal projections, their sum
$S=\sum_iP_i$ is an orthogonal projection satisfying $0\le S\le I_{H_O}$,
and $Q=I_{H_O}-S$ is the orthogonal projection onto the residual complement.
The empty family is allowed, with $S=0$ and $Q=I_{H_O}$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H_L,H_O$ and a finite family of isometries $W_i:H_L\to H_O$ with pairwise orthogonal ranges.

[F2] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: a self-adjoint idempotent on a finite-dimensional inner-product space is an orthogonal projection.

[F3] [[def-orthogonal-projection]]: an orthogonal projection selects the component in its range along the orthogonal complement.

[F4] [[prop-adjoint-algebra]]: $(AB)^*=B^*A^*$ and $T^{**}=T$ for compatible finite-dimensional maps.

[F5] [[def-non-negative-and-positive-operator]]: $0\le T$ means $T$ is self-adjoint and $\langle Tx,x\rangle\ge0$ for every $x$.

[F6] [[def-inner-product-space]]: $\langle x,x\rangle=\|x\|^2$ and the inner product is positive definite.

[F7] [[thm-qc-isometric-encoding-projector]]: every finite-dimensional linear isometry $W$ satisfies $W^*W=I$.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: adjoints exist and satisfy $\langle Wx,y\rangle=\langle x,W^*y\rangle$.

## Proof


1.1 By [F7, F8], each $W_i$ has an adjoint and $W_i^*W_i=I$. For each $i$, [F4] gives $P_i^*=(W_iW_i^*)^*=W_iW_i^*$, and $P_i^2=W_i(W_i^*W_i)W_i^*=W_iW_i^*=P_i$ by [F7]. The image of $P_i$ is contained in $\operatorname{ran}W_i$, while $P_iW_ix=W_ix$ for every $x$; hence its image equals $\operatorname{ran}W_i$. By [F2], $P_i$ is the orthogonal projection onto that range. [given, F2, F4, F7, F8, algebra]

2.1 If $i\ne j$, orthogonality of the ranges gives $\langle x,W_i^*W_jy\rangle=\langle W_ix,W_jy\rangle=0$ for all $x,y\in H_L$ by [F8]. Taking $x=W_i^*W_jy$ shows $W_i^*W_j=0$ by [F6]. Hence $P_iP_j=W_i(W_i^*W_j)W_j^*=0$. Thus $S^*=S$ and $S^2=\sum_iP_i^2+\sum_{i\ne j}P_iP_j=S$; [F2] makes $S$ an orthogonal projection. The same calculation gives $(I-S)^*=I-S=(I-S)^2$, so [F2] makes $Q=I-S$ an orthogonal projection. [given, step 1.1, F2, F4, F6, F8, algebra]

3.1 Each $P_i$ fixes its own range and kills the other ranges, so $\operatorname{ran}S$ is exactly the orthogonal sum of the $\operatorname{ran}W_i$. Since $Q=I-S$ is an orthogonal projection, its range is $\ker S$, the orthogonal complement of the range of $S$ by [F3]. For every $x\in H_O$, $\langle Sx,x\rangle=\|Sx\|^2\ge0$ and $\langle Qx,x\rangle=\|Qx\|^2\ge0$, so [F5] gives $0\le S\le I$. For the empty family the sums give $S=0,Q=I$ directly. [step 1.1, step 2.1, F2, F3, F5, F6, algebra] ∎

