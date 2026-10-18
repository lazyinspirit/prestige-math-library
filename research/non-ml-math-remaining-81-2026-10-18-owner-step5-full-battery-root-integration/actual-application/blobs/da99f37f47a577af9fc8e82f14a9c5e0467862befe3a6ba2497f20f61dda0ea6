---
id: lem-jordan-block-automorphism-count
kind: lemma
title: "Automorphism counts for nilpotent Jordan representations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - lem-jordan-quiver-isoclasses-are-partition-indexed
  - def-partition-young-diagram-and-conjugate-partition
  - def-jordan-block-and-jordan-string
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, §2.3, Lemma 2.8"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
---

## Statement

For the nilpotent Jordan representation $I_\lambda$ over $\mathbb F_q$,
write $m_r=\#\{i:\lambda_i=r\}$ and $n(\lambda)=\sum_i(i-1)\lambda_i$.
Then
$$ a_\lambda(q):=|\operatorname{Aut}(I_\lambda)|=q^{|\lambda|+2n(\lambda)}\prod_{r\ge1}\prod_{j=1}^{m_r}(1-q^{-j}). $$
In particular $a_\varnothing(q)=1$.

## Facts & Assumptions

**Given:** A finite field $k$ of cardinality $q$, a partition $\lambda$,
and $I_\lambda$ with its nilpotent operator denoted $T$.

[F1] The representation is the direct sum of blocks $I_r$ with
multiplicities $m_r$
([[lem-jordan-quiver-isoclasses-are-partition-indexed]]).

[F2] Conjugate partition columns have heights $\lambda'_j=\#\{i:\lambda_i\ge j\}$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] In a nilpotent Jordan-string basis $v_1,\ldots,v_r$, the operator
satisfies $Tv_1=0$ and $Tv_j=v_{j-1}$ for $j>1$; its matrix is $J_r(0)$
([[def-jordan-block-and-jordan-string]]).

## Proof

1.1 For the Jordan-string basis $v_1,\ldots,v_r$ of $I_r$, we have $Tv_1=0$ and $Tv_j=v_{j-1}$ for $j>1$. Give $I_r$ the $k[T]$-module structure in which $T$ acts by its nilpotent operator. The linear map $k[T]/(T^r)\to I_r$ sending $T^i$ to $v_{r-i}$ for $0\le i<r$ is a bijection commuting with $T$, hence a module isomorphism. Intertwining linear maps are exactly module homomorphisms. A module homomorphism $k[T]/T^r\to k[T]/T^h$ is determined by the image of $1$, which may be any vector killed by $T^r$; that space has dimension $\min(r,h)$. Thus the endomorphism algebra of $I_\lambda$ has dimension $D=\sum_{r,h}m_rm_h\min(r,h)=\sum_j(\lambda'_j)^2$. Counting each column's ordered pairs of boxes gives $\sum_j(\lambda'_j)^2=|\lambda|+2\sum_i(i-1)\lambda_i$: in a column of height $c$, its square is $c+2\sum_{i=1}^c(i-1)$. [F1, F2, F3, algebra]

2.1 Consider the induced map of an endomorphism $f$ on $I_\lambda/TI_\lambda$. Ordered by block length, its matrix is block triangular: a homomorphism from length $r$ to a larger length $h$ has image of $1$ divisible by $T^{h-r}$ and hence has zero reduction in the target head. Its diagonal blocks are arbitrary matrices $B_r\in\operatorname{Mat}_{m_r}(k)$; all choices occur independently by constant matrices between blocks of the same length. The linear map from the $D$-dimensional endomorphism space to these diagonal blocks is onto, with every fiber of size $q^{D-\sum_r m_r^2}$. [F1, step 1.1, algebra]

3.1 The map $f$ is invertible exactly when all $B_r$ are invertible. Necessity follows from invertibility on the quotient. Conversely those blocks make the triangular head map surjective, so $I_\lambda=f(I_\lambda)+TI_\lambda$. Since $f$ commutes with $T$, iteration gives $I_\lambda=f(I_\lambda)+T^NI_\lambda$ for every $N$, and nilpotence makes the last summand zero for large $N$. Thus $f$ is onto and, on a finite-dimensional vector space, bijective; its inverse commutes with $T$. [F1, step 2.1, algebra]

4.1 Successively choosing linearly independent columns gives $|\operatorname{GL}_m(k)|=\prod_{i=0}^{m-1}(q^m-q^i)=q^{m^2}\prod_{j=1}^m(1-q^{-j})$, including $m=0$. Hence the two preceding steps count the automorphisms as $q^{D-\sum_r m_r^2}\prod_r|\operatorname{GL}_{m_r}(k)|=q^D\prod_r\prod_{j=1}^{m_r}(1-q^{-j})$. Substitute $D$ from step 1.1. For $\lambda=\varnothing$ the space is zero and its sole automorphism is the identity. [step 1.1, step 2.1, step 3.1, algebra] ∎