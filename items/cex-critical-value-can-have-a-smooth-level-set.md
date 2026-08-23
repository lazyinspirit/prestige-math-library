---
id: cex-critical-value-can-have-a-smooth-level-set
kind: counterexample
title: 'A critical value can have a smooth level set'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-regular-critical-points-values-and-level-sets, ex-graph-as-a-regular-level-set, lem-derivative-of-a-power, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability]
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

## Statement refuted

A critical value need not have a singular level set. For $F(x,y)=x^2$, the value $0$ is critical although $F^{-1}(0)$ is the vertical line.

## Facts & Assumptions

**Given:** The polynomial map $F:\mathbb R^2\to\mathbb R$, $F(x,y)=x^2$.

[L1] The power rule gives the continuous Jacobian row $(2x,0)$, and the continuous-partials theorem identifies it with $DF(x,y)$ ([[lem-derivative-of-a-power]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] A value is critical when some point of its fibre has nonsurjective derivative ([[def-regular-critical-points-values-and-level-sets]]), while the graph of a $C^1$ map is a regular level set for a suitable defining map ([[ex-graph-as-a-regular-level-set]]).

## Counterexample

**Proof technique:** direct.

1.1 The equation $F(x,y)=0$ is equivalent to $x=0$, so $F^{-1}(0)=\{(0,y):y\in\mathbb R\}$, the graph of the zero function over the $y$-axis. [given, algebra]

2.1 By [L1], $DF(0,y)=0$ for every point of this fibre, so it is not surjective and [L2] makes $0$ a critical value of $F$. [step 1.1, L1, L2]

3.1 The same underlying set is a smooth line and, after swapping coordinates, is the graph covered by [L2]. Thus criticality of this defining function does not force singularity of the set. [step 1.1, step 2.1, L2] ∎
