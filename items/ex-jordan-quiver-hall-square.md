---
id: ex-jordan-quiver-hall-square
kind: example
title: "The degree-two Jordan-quiver Hall product"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - def-jordan-quiver-nilpotent-representation-category
  - lem-jordan-quiver-category-is-finitary
  - lem-jordan-quiver-isoclasses-are-partition-indexed
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.2, Example 2.2"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $k=\mathbb F_q$, let $S=I_1$ be the simple Jordan-quiver
representation, and let $I_2$ be the indecomposable length-two Jordan block.
Then
$$ [S]*[S]=(q+1)[I_{(1,1)}]+[I_2]. $$

## Facts & Assumptions

**Given:** A finite field $k=\mathbb F_q$, the nilpotent Jordan-quiver category $\mathcal J_k$, and its untwisted Hall product.

[F1] The middle isomorphism classes are indexed by partitions and $I_\lambda=\bigoplus_j I_{\lambda_j}$ ([[lem-jordan-quiver-isoclasses-are-partition-indexed]]).

[F2] $[M]*[N]$ counts subobjects isomorphic to $N$ with quotient isomorphic to $M$ ([[def-untwisted-hall-algebra]]).

[F3] The Jordan-quiver category over a finite field is finitary, and its subobjects are invariant subspaces ([[lem-jordan-quiver-category-is-finitary]]).

## Verification

**Proof technique:** direct.

1.1 The category is finitary by [F3], so its Hall product is defined. Any middle object contributing to $[S]*[S]$ has vector-space dimension two. By [F1], its type is either $(1,1)$ or $(2)$. [F1, F2, F3]

1.2 In $I_{(1,1)}=S\oplus S$, the nilpotent operator is zero, so every one-dimensional subspace is an invariant subobject by [F3], and its quotient is $S$. There are $(q^2-1)/(q-1)=q+1$ such lines. [F1, F2, F3]

1.3 In $I_2$, an invariant one-dimensional subspace must be annihilated by the nilpotent operator, so it is contained in $\ker x$. This kernel is one-dimensional, hence it is the unique such subobject by [F3], and the quotient is $S$. [F1, F2, F3]

2.1 The two possible middle types and their counts from steps 1.1–1.3 yield the displayed Hall product. [step 1.1, step 1.2, step 1.3] ∎
