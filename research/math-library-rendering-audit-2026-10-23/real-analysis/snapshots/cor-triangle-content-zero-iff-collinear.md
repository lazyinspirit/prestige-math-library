---
id: cor-triangle-content-zero-iff-collinear
kind: corollary
title: "A triangle has zero Jordan content if and only if its vertices are collinear"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-triangle-content-and-base-height-formula, def-determinant-of-a-square-matrix, def-linear-independence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Statement

A triangle has zero Jordan content if and only if its vertices are collinear.

Here collinear means that the displacement list $(B-A,C-A)$ is linearly dependent.

## Facts & Assumptions

**Given:** Vertices $A,B,C\in\mathbb R^2$.

[L1] Every triangle $T(A,B,C)$ has content $\tfrac12|\det[B-A\ C-A]|$ ([[thm-triangle-content-and-base-height-formula]]).

[L2] For a real square matrix, $|\det M|$ is the ordinary absolute value of its real determinant ([[def-determinant-of-a-square-matrix]]).

[L3] A finite vector list is linearly dependent when a nonzero scalar list has zero linear combination ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication from collinearity to zero content, dependence in [L3] makes one of the two displacement vectors a scalar multiple of the other, including when either is zero; the two columns then have determinant zero, so [L1] and [L2] give content zero. [L1, L2, L3, algebra]

2.1 For the converse implication, suppose the content is zero. By [L1] and [L2], $\det[B-A\ C-A]=0$. If $B-A=0$ the list is dependent by [L3]; otherwise one coordinate of $B-A=(u_1,u_2)$ is nonzero, and the equation $u_1v_2-u_2v_1=0$ for $C-A=(v_1,v_2)$ shows by division in that nonzero coordinate that $C-A$ is a scalar multiple of $B-A$. Thus [L3] gives collinearity. [L1, L2, L3, algebra] ∎
