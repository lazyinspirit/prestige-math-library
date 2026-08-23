---
id: cex-cone-level-set-has-a-rank-drop-at-the-apex
kind: counterexample
title: 'The cone $x^2+y^2=z^2$ has a rank drop at its apex'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-regular-critical-points-values-and-level-sets, cor-regular-level-set-local-graph-theorem, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement refuted

A level set of a smooth map need not have constant derivative rank. For $F(x,y,z)=x^2+y^2-z^2$, the zero level is regular away from its apex and has derivative rank $0$ at the apex.

## Facts & Assumptions

**Given:** The smooth map $F:\mathbb R^3\to\mathbb R$, $F(x,y,z)=x^2+y^2-z^2$.

[L1] The power rule and derivative algebra give the continuous Jacobian row $(2x,2y,-2z)$, which is the total derivative by the continuous-partials theorem, and polynomial coordinate expressions are smooth ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L2] A point is regular exactly when its derivative is surjective, and the regular-level graph theorem requires that hypothesis ([[def-regular-critical-points-values-and-level-sets]], [[cor-regular-level-set-local-graph-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 The equation $F=0$ is $x^2+y^2=z^2$, the double cone, and [L1] gives $DF(0,0,0)=0$. Thus the derivative rank at the apex is $0$. [given, L1]

1.2 If $(x,y,z)\ne0$ lies on the cone, then the row $(2x,2y,-2z)$ is nonzero, so the derivative has rank $1$ and is surjective. [given, L1]

2.1 The rank therefore drops at the apex. Moreover the cone contains the rays with directions $(1,0,1)$, $(1,0,-1)$, and $(0,1,1)$, which span $\mathbb R^3$; no single two-dimensional tangent plane at the apex contains all their velocities, so [L2] cannot supply a regular graph there. [step 1.1, step 1.2, L2, algebra]

3.1 This explicit smooth map refutes constant rank on its level and isolates the failure at the critical apex. [step 2.1] ∎
