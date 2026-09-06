---
id: thm-the-tensor-product-in-a-multitensor-category-is-biexact
kind: theorem
title: "Tensor product in a multitensor category is biexact"
status: published
origin: pipeline
deps: [def-tensor-and-multitensor-category, thm-duality-yields-adjunctions-of-tensoring-functors, thm-right-adjoints-preserve-limits, cor-left-adjoints-preserve-colimits, thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Proposition 4.2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

In a multitensor category, $X\otimes-$ and $-\otimes X$ are exact for every
object $X$. Hence the tensor product is biexact.

## Facts & Assumptions

**Given:** A multitensor category and an object $X$.

[F1] Every object has left and right duals ([[def-tensor-and-multitensor-category]]).

[L1] A dual supplies the relevant adjunctions of tensoring functors ([[thm-duality-yields-adjunctions-of-tensoring-functors]]).

[L2] Right adjoints preserve limits and left adjoints preserve colimits ([[thm-right-adjoints-preserve-limits]], [[cor-left-adjoints-preserve-colimits]]).

[L3] An additive functor between abelian categories is exact iff it preserves kernels and cokernels ([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] choose left and right duals of $X$. By [L1], each of $X\otimes-$ and $-\otimes X$ is both a left and a right adjoint (using the appropriate dual). [F1, L1, given]

1.2 Thus each tensoring functor preserves kernels and cokernels by [L2]. It is additive because the tensor product is $k$-bilinear. [L2, F1]

2.1 By [L3] both functors are exact. Since $X$ was arbitrary, tensoring is exact in either variable. [step 1.2, L3] ∎
