---
id: lem-fixed-pivot-barycentric-identities
kind: lemma
title: Fixed-pivot weights are nonnegative and reproduce number and mass
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-conservative-fixed-pivot-redistribution
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the cell index is the least index whose right endpoint contains the product.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

For every $z\in[x_i,x_{i+1}]$, the two weights in [[def-conservative-fixed-pivot-redistribution]] are nonnegative, sum to $1$, and have weighted pivot mass $z$. Their expected absolute displacement is at most $\Delta/2$, and their weighted second moment satisfies

$$\int u^2\,P_\Delta(z)(du)-z^2=(z-x_i)(x_{i+1}-z)\le\frac{\Delta^2}{4}.$$

At a grid endpoint the same conclusions hold for the single-pivot endpoint rule, with zero second-moment excess.

## Facts & Assumptions

**Given:** A strictly increasing positive grid and $z\in[x_i,x_{i+1}]$.

[F1] [[def-conservative-fixed-pivot-redistribution]]: the weights are $(x_{i+1}-z)/(x_{i+1}-x_i)$ and $(z-x_i)/(x_{i+1}-x_i)$, with single-node assignment at grid endpoints.

## Proof

1.1 Since $x_i\le z\le x_{i+1}$ and $x_{i+1}-x_i>0$, both fractions in [F1] are nonnegative. Their sum is $((x_{i+1}-z)+(z-x_i))/(x_{i+1}-x_i)=1$. [given, F1, algebra]

2.1 Their weighted mass is $\frac{(x_{i+1}-z)x_i+(z-x_i)x_{i+1}}{x_{i+1}-x_i}=z$ after expanding and cancelling terms. [step 1.1, F1, algebra]

2.2 Writing $h_i=x_{i+1}-x_i$, the weighted second moment is $\frac{x_{i+1}-z}{h_i}x_i^2+\frac{z-x_i}{h_i}x_{i+1}^2$. Subtracting $z^2$ and factoring gives $(z-x_i)(x_{i+1}-z)$, which is nonnegative and at most $h_i^2/4\le\Delta^2/4$ because $(z-x_i)+(x_{i+1}-z)=h_i$. [given, F1, step 1.1, algebra]

3.1 At a grid endpoint the single pivot has mass $z$ and second moment $z^2$, so the excess is zero; this proves the endpoint clauses too. [given, F1, step 2.1, step 2.2]

4.1 In an interior cell, the expected absolute displacement is $$\frac{x_{i+1}-z}{h_i}(z-x_i)+\frac{z-x_i}{h_i}(x_{i+1}-z)=\frac{2(z-x_i)(x_{i+1}-z)}{h_i}\le\frac{h_i}{2}\le\frac\Delta2,$$ by step 2.2. At a node the displacement is zero by [F1]. [given, F1, step 2.2, algebra] ∎

