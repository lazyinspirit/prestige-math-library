---
id: ex-lagrange-multipliers-on-the-sphere
kind: example
title: 'Lagrange multipliers locate the extrema of a linear functional on a sphere'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-lagrange-multiplier-rule-for-one-regular-constraint, ex-sphere-as-a-regular-level-set, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product]
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 2.8'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html'
pipeline_run: null
---

## Example

Let $m\ge1$, let $R>0$, and let $a\in\mathbb R^m$. On the sphere $\|x\|_2=R$, the linear functional $f(x)=\langle a,x\rangle$ has maximum $R\|a\|_2$ and minimum $-R\|a\|_2$. If $a\ne0$, they occur uniquely at $x=Ra/\|a\|_2$ and $x=-Ra/\|a\|_2$ respectively; if $a=0$, every point is both a maximum and a minimum.

## Facts & Assumptions

**Given:** A natural $m\ge1$, the radius $R>0$, vector $a\in\mathbb R^m$, objective $f(x)=\langle a,x\rangle$, and constraint $G(x)=\|x\|_2^2-R^2$.

[L1] The sphere constraint is regular, and the one-constraint multiplier rule gives $\nabla f(x)=\lambda\nabla G(x)$ at every constrained local extremum ([[ex-sphere-as-a-regular-level-set]], [[cor-lagrange-multiplier-rule-for-one-regular-constraint]]).

[L2] Cauchy-Schwarz gives $|\langle a,x\rangle|\le\|a\|_2\|x\|_2$, with equality precisely for linearly dependent vectors ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 If $a\ne0$, [L1] gives $a=2\lambda x$. The constraint forces $x=\pm Ra/\|a\|_2$, and direct substitution gives the values $\pm R\|a\|_2$. [given, L1, algebra]

2.1 By [L2], every constrained point satisfies $-R\|a\|_2\le f(x)\le R\|a\|_2$, with equality only at the two points from step 1.1. [given, L2]

3.1 Hence those points are the unique global extrema when $a\ne0$. When $a=0$, $f$ is identically zero, so every constrained point is both an extremum. [step 1.1, step 2.1] ∎
