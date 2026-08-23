---
id: fs-a-critical-value-has-a-singular-level-set
kind: false-statement
title: 'FALSE: a critical value must have a singular level set'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-critical-points-values-and-level-sets, ex-graph-as-a-regular-level-set, lem-derivative-of-a-power, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, critical-value discussion'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement

If $c$ is a critical value of a smooth map, then the level set over $c$ is singular.

## Facts & Assumptions

**Given:** The smooth map $F(x,y)=x^2$.

[L1] The power rule gives the continuous Jacobian row $(2x,0)$, the continuous-partials theorem identifies it with $DF(x,y)$, and the polynomial map is smooth; a value is critical when its fibre contains a point where the derivative is not surjective ([[lem-derivative-of-a-power]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-regular-critical-points-values-and-level-sets]]).

[L2] A graph of a $C^1$ map is a regular level set for an appropriate defining map ([[ex-graph-as-a-regular-level-set]]).

## Refutation

**Proof technique:** direct.

1.1 The zero level of $F$ is the vertical line $\{(0,y):y\in\mathbb R\}$. By [L1], $DF$ vanishes at every point of this fibre, so $0$ is a critical value. [given, L1]

2.1 The same line is the graph of the zero function over the $y$-axis and hence is smooth by [L2]. [step 1.1, L2]

3.1 Therefore a critical value can have a smooth level set; criticality records a failure of this defining map, not necessarily a singularity of the underlying subset. [step 1.1, step 2.1] ∎
