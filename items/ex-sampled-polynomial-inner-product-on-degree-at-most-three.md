---
id: ex-sampled-polynomial-inner-product-on-degree-at-most-three
kind: example
title: "Evaluation at four distinct real points gives an inner product on polynomials of degree at most three"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-inner-product-space, def-monoid-finite-product, thm-root-bound-for-polynomials-over-a-domain]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On the real vector space $P_3(\mathbb R)$ of polynomials of degree at most $3$, evaluation at four distinct real points $t_0,t_1,t_2,t_3$ defines an inner product by

$$\langle p,q\rangle=\sum_{k<4}p(t_k)q(t_k).$$

For example, the points may be $0,1,2,3$.

## Facts & Assumptions

**Given:** Four distinct real scalars $t_0,t_1,t_2,t_3$ and polynomials $p,q\in P_3(\mathbb R)$.

[L1] An inner product is a symmetric bilinear form whose diagonal is nonnegative and vanishes only at zero ([[def-inner-product-space]]).

[L2] A nonzero polynomial over a domain has at most as many distinct roots as its degree ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L3] Finite sums are compatible with the additive and multiplicative laws of the scalar field ([[def-monoid-finite-product]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], the displayed formula is bilinear and symmetric. Also $\langle p,p\rangle=\sum_{k<4}p(t_k)^2\ge0$. [L1, L3]

2.1 If $\langle p,p\rangle=0$, every real square in the sum is zero, so $p(t_k)=0$ for four distinct $t_k$. If $p$ were nonzero, [L2] would give at most three roots because $\deg p\le3$. Thus $p=0$, proving definiteness and hence [L1]. [step 1.1, L1, L2] ∎
