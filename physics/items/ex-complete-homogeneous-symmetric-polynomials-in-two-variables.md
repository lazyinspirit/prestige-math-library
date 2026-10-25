---
id: ex-complete-homogeneous-symmetric-polynomials-in-two-variables
kind: example
title: "Complete homogeneous symmetric polynomials and their recurrence in two variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-elementary-and-complete-generating-series-identity, cor-complete-homogeneous-symmetric-polynomials-freely-generate]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Section 7.1"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Example

In two variables $x,y$,

$$h_0=1,\quad h_1=x+y,\quad h_2=x^2+xy+y^2,\quad h_3=x^3+x^2y+xy^2+y^3.$$

For $k\ge2$ they satisfy

$$h_k=e_1h_{k-1}-e_2h_{k-2},$$

and $e_1=h_1$, $e_2=h_1^2-h_2$.

## Facts & Assumptions

**Given:** Two variables over a commutative ring.

[L1] The identity $E(-t)H(t)=1$ gives the coefficient recurrence among the $e_i$ and $h_i$ ([[prop-elementary-and-complete-generating-series-identity]]).

[L2] The complete homogeneous polynomials $h_1,h_2$ freely generate the two-variable symmetric-polynomial ring ([[cor-complete-homogeneous-symmetric-polynomials-freely-generate]]).

## Verification

**Proof technique:** direct.

1.1 Listing all monomials of total degrees $0,1,2,3$ gives the displayed values of $h_0,h_1,h_2,h_3$. [given, algebra]

1.2 Here $E(-t)=1-e_1t+e_2t^2$. Comparing the coefficient of $t^k$ in [L1] gives $h_k-e_1h_{k-1}+e_2h_{k-2}=0$ for $k\ge2$. [L1, algebra]

2.1 At $k=1$ the same identity gives $h_1=e_1$, and at $k=2$ it gives $h_2=e_1h_1-e_2$, hence $e_2=h_1^2-h_2$. This explicitly realizes the free-generation statement [L2]. [step 1.2, L1, L2, algebra] ∎
