---
id: cex-manipulating-the-euler-product-without-summability
kind: counterexample
title: "Ignoring summability in the Euler product leads to illegal coefficient manipulations"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [rem-euler-product-agrees-with-the-published-multiset-corollary,
       thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

One may compute the coefficient of $x^3$ in the Euler product by the naive rule

$$[x^3]\prod_{m \ge 1}(1-x^m)^{-1}=\sum_{m \ge 1}[x^3](1+x^m+x^{2m}+\cdots).$$

## Facts & Assumptions

**Given:** the formal factors $(1-x^m)^{-1}=1+x^m+x^{2m}+\cdots$.

[F1] The coefficient of $x^3$ in the true Euler product counts partitions of $3$, so it is $3$.

[L1] A locally finite product may be rearranged only by genuine regrouping of the same summable family; the infinite product is defined by stabilization of its finite partial products modulo each $x^N$ ([[thm-summable-families-and-rearrangement]]).

## Counterexample

**Proof technique:** direct.

1.1 On the right-hand side, only the $m=1$ and $m=3$ summands contribute a nonzero $x^3$ coefficient, so the naive calculation gives $1+1=2$. [given, algebra]

2.1 But [F1] gives the true coefficient as $3$, corresponding to the partitions $3$, $2+1$, and $1+1+1$. The naive rule loses the mixed contribution $x \cdot x^2$ coming from two different factors, so it is not a genuine regrouping of the locally finite product expansion licensed by [L1]. Therefore the displayed identity is false, and the missing summability control is exactly what permits the legal coefficientwise product. [step 1.1, F1, L1] ∎
