---
id: ex-fixed-pivot-redistributes-between-adjacent-pivots
kind: example
title: A product between pivots is split without changing number or mass
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-conservative-fixed-pivot-redistribution
  - lem-fixed-pivot-barycentric-identities
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; this is a direct substitution into the pivot formula.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

On the grid $(1,2,4)$, the product size $z=3$ is replaced by $P_\Delta(3)=\tfrac12\delta_2+\tfrac12\delta_4$. It remains one particle in expectation, has mass $3$, and its second moment is $10$, an excess of $1$ over $z^2=9$.

## Facts & Assumptions

**Given:** The fixed-pivot rule on a grid containing adjacent nodes $2$ and $4$.

[F1] [[def-conservative-fixed-pivot-redistribution]]: at $z\in[x_i,x_{i+1}]$, the pivot weights are $(x_{i+1}-z)/(x_{i+1}-x_i)$ and $(z-x_i)/(x_{i+1}-x_i)$.

[F2] [[lem-fixed-pivot-barycentric-identities]]: the weights sum to one and reproduce first moment $z$.

## Proof

1.1 Substituting $x_i=2$, $x_{i+1}=4$, and $z=3$ in [F1] gives both weights equal to $(4-3)/(4-2)=1/2$. Thus the replacement is exactly $\tfrac12\delta_2+\tfrac12\delta_4$. [given, F1, algebra]

2.1 The weights sum to $1$, their weighted mass is $(2+4)/2=3$, and their weighted second moment is $(2^2+4^2)/2=10$. Hence the number and mass statements agree with [F2], and the second-moment excess is $10-3^2=1$. [F2, step 1.1, algebra] ∎

