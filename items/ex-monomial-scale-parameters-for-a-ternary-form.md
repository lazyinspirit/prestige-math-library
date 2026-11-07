---
id: ex-monomial-scale-parameters-for-a-ternary-form
kind: example
title: "Monomial scale parameters in an unequal ternary box"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-anisotropic-box-and-monomial-scale-parameters
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, §1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

For $F(X,Y,Z)=X^2Y+3YZ^2$ in the box $|X|\le2$, $|Y|\le3$,
$|Z|\le5$, the degree is $3$, the box volume is $V=30$, and the monomial
scale parameter is $T=75$. The point $[1:0:1]$ is a rational zero in this box.

## Statement references

[Heath-Brown, anisotropic box and support conventions](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** The form and box in the Statement.

[F1] [[def-anisotropic-box-and-monomial-scale-parameters]]: For a ternary form of degree $d$, $V=B_1B_2B_3$, and $T$ is the maximum of $B_1^{e_1}B_2^{e_2}B_3^{e_3}$ over its nonzero monomials.

## Proof

1.1 The two monomials have exponent vectors $(2,1,0)$ and $(0,1,2)$ and both have total degree $3$. Their scales are $2^2\cdot3=12$ and $3\cdot5^2=75$. Thus [F1] gives $V=2\cdot3\cdot5=30$ and $T=\max(12,75)=75$. [F1, given, algebra]

1.2 The vector $(1,0,1)$ is primitive and normalized, satisfies the three coordinate bounds, and $F(1,0,1)=0$. It therefore represents a rational projective zero counted in this box. [F1, given, algebra] ∎
