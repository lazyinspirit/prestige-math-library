---
id: cor-metric-equidistribution-on-nondegenerate-analytic-curves
kind: corollary
title: Metric equidistribution on nondegenerate analytic curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-countable-choice
  - thm-metric-equidistribution-for-analytic-functions
  - def-real-analytic-function
  - def-scattered-sequence
  - def-delta-scattered-sequence
  - def-uniform-distribution-mod-one-in-k-dimensions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Theorem 1.9, §1, nondegenerate-curve alternative"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.9, §1, nondegenerate-curve alternative; full relevant passage inspected"
---

## Statement

Assume the Axiom of Countable Choice. Let $k$ be a positive integer and let $\Gamma:\mathbb R\to\mathbb R^k$ be a parametrization whose coordinates are real analytic, meaning locally represented by convergent real power series. Assume there are no real $c_0,c_1,\ldots,c_k$ with $(c_1,\ldots,c_k)\ne0$ and $c_0+\sum_i c_i\Gamma_i(t)=0$ for every $t$; equivalently, the image of $\Gamma$ is not contained in a proper affine hyperplane. Let $a_1(n),\ldots,a_k(n)$ be scattered real sequences indexed by $n\ge1$, meaning each satisfies the scattered pair-sum bound for every $0<\delta\le1$. Then for Lebesgue-almost every parameter $t\in\mathbb R$, the sequence

$$\bigl(a_1(n)\Gamma_1(t),\ldots,a_k(n)\Gamma_k(t)\bigr)_{n\ge1}$$

is uniformly distributed in $\mathbb T^k$.

## Statement references

[Bergelson–Moreira, Theorem 1.9, nondegenerate-curve alternative](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real-analytic parametrization $\Gamma=(\Gamma_1,\ldots,\Gamma_k)$ with image not contained in a proper affine hyperplane, and scattered real sequences $a_i$.

[F1] If every coordinate function $f_i$ is nonconstant and $1,f_1,\ldots,f_k$ are linearly independent, then scattered sequences $a_i$ give uniform distribution for almost every parameter ([[thm-metric-equidistribution-for-analytic-functions]]).

[F2] Scattered means the normalized pair sum with $w_\delta$ is $O((\log N)^{-1-\eta})$ for every $0<\delta\le1$, with $\eta>0$ allowed to depend on $\delta$ ([[def-scattered-sequence]], [[def-delta-scattered-sequence]]).

[F3] Real analytic means locally a convergent real power series ([[def-real-analytic-function]]).

[F4] Uniform distribution in $\mathbb T^k$ means convergence of every half-open box frequency to its product volume ([[def-uniform-distribution-mod-one-in-k-dimensions]]).

## Proof

1.1 If $1,\Gamma_1,\ldots,\Gamma_k$ were linearly dependent, there would be real coefficients, not all zero, with $c_0+\sum_i c_i\Gamma_i(t)=0$ for every $t$; since some $c_i\ne0$, the image of $\Gamma$ would lie in the proper affine hyperplane $c_0+\sum_i c_ix_i=0$. Thus these functions are linearly independent. This also makes every $\Gamma_i$ nonconstant, because a constant coordinate gives such a hyperplane relation. [given, algebra]

2.1 Apply [F1] to $f_i=\Gamma_i$ using the linear-independence alternative. It gives the stated uniform distribution for Lebesgue-almost every parameter $t$. [F1, step 1.1] ∎
