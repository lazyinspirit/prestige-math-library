---
id: lem-jordan-quiver-isoclasses-are-partition-indexed
kind: lemma
title: "Jordan-quiver isomorphism classes are indexed by partitions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-jordan-quiver-nilpotent-representation-category
  - lem-jordan-quiver-category-is-finitary
  - def-partition-young-diagram-and-conjugate-partition
  - def-jordan-block-and-jordan-string
  - thm-nilpotent-jordan-string-basis
  - thm-jordan-form-uniqueness-from-ranks-of-powers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.1"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Theorems 4.2–4.3"
      url: "https://www.math.brown.edu/~streil/papers/LADW/LADW_2017-09-04.pdf"
verification:
  precheck: pass
---

## Statement

Every object of $\mathcal J_k$ is isomorphic to a unique direct sum
$I_\lambda=I_{\lambda_1}\oplus\cdots\oplus I_{\lambda_s}$, where
$\lambda$ is a partition. The unique simple object is $S=I_1$.

## Facts & Assumptions

**Given:** A field $k$ and a finite-dimensional vector space $V$ with a nilpotent endomorphism $x$, defining an object of $\mathcal J_k$.

[F1] Every finite-dimensional nilpotent endomorphism has a basis that is a concatenation of Jordan strings, including the empty basis on the zero space ([[thm-nilpotent-jordan-string-basis]]).

[F2] For a nilpotent endomorphism, the numbers of Jordan blocks of each size are determined by the ranks of its powers ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

[F3] In a Jordan string of length $m$, $xv_1=0$ and $xv_j=v_{j-1}$ for $j>1$; its matrix is $J_m(0)$ ([[def-jordan-block-and-jordan-string]]).

[F4] A partition is a finite weakly decreasing sequence of positive integers; its parts record a multiset uniquely ([[def-partition-young-diagram-and-conjugate-partition]]).

[F5] $\mathcal J_k$ is a category whose objects and morphisms are finite-dimensional nilpotent representations and their intertwiners ([[def-jordan-quiver-nilpotent-representation-category]]).

[F6] Here a **simple object** means a nonzero object whose only subobjects are the zero subobject and the identity subobject.

[F7] Subobjects in $\mathcal J_k$ correspond to invariant subspaces, via their images ([[lem-jordan-quiver-category-is-finitary]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to $x$. The spans of its Jordan strings are invariant, their concatenation is a basis of $V$, and by [F3] each span is isomorphic as a representation to the block $I_m$ whose length is that string's length. Sorting these finitely many positive lengths weakly decreasing gives a partition $\lambda$ by [F4] and an isomorphism $(V,x)\cong I_\lambda$. The zero space gives the empty partition. [F1, F3, F4, F5]

2.1 If $I_\lambda\cong I_\mu$, the intertwining isomorphism conjugates their nilpotent matrices, so the ranks of every power agree. By [F2], the multiplicities of blocks of each length agree; hence the multisets of parts and the partitions are equal. [F2, step 1.1]

3.1 If a string has length $m>1$, the span of its initial vector is a nonzero proper invariant subspace, hence a proper nonzero subobject by [F7]; therefore $I_m$ is not simple by [F6]. The object $I_1=S$ is nonzero and has only the zero and whole subspaces, so it is simple by [F6] and [F7]. Any decomposition in step 1.1 with at least two summands has a proper nonzero invariant summand and hence is not simple. A single summand is simple only when it has length one. Thus $S$ is the unique simple object. [F3, F4, F5, F6, F7, step 1.1] ∎
