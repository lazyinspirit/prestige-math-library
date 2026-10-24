---
id: fs-every-level-set-of-a-smooth-map-is-a-graph
kind: false-statement
title: 'FALSE: every level set of a smooth map is locally a graph'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-critical-points-values-and-level-sets, cor-regular-level-set-local-graph-theorem, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Regular Level Set Theorem and examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Every level set of a smooth Euclidean map is locally a $C^1$ graph.

## Facts & Assumptions

**Given:** The smooth map $F(x,y,z)=x^2+y^2-z^2$.

[L1] The power rule and derivative algebra give the continuous Jacobian row $(2x,2y,-2z)$, the continuous-partials theorem identifies it with $DF$, and polynomial coordinate expressions are smooth ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L2] The regular-level graph theorem assumes surjectivity of the derivative at every point of the fibre ([[def-regular-critical-points-values-and-level-sets]], [[cor-regular-level-set-local-graph-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 The zero level is the double cone $x^2+y^2=z^2$, and [L1] gives $DF(0,0,0)=0$, so the apex is critical and [L2] does not apply there. [given, L1, L2]

1.2 The cone contains rays from the apex in the linearly independent directions $(1,0,1)$, $(1,0,-1)$, and $(0,1,1)$. If it were a $C^1$ graph near the apex, all these curve velocities would lie in its single two-dimensional tangent plane, which is impossible. [given, algebra]

2.1 Thus this smooth polynomial has a level set that is not locally a $C^1$ graph at the apex, refuting the statement. [step 1.1, step 1.2] ∎
