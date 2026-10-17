---
id: ex-natural-parameterization-fails-at-x-squared-fold
kind: example
title: 'The natural parameter fails at the fold $x^2-\lambda=0$'
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-simple-fold-lyapunov-schmidt-parameterization
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The equation $x^2-\lambda=0$ has a simple fold at $(0,0)$. The parameter
$\lambda$ cannot serve as a two-sided local coordinate for its solution set.

## Facts & Assumptions

**Given:** The real equation $x^2-\lambda=0$ near $(0,0)$.

[F1] [[thm-simple-fold-lyapunov-schmidt-parameterization]]: under the simple
fold hypotheses, the normalized curve has $\lambda'(0)=0$ and
$\lambda''(0)=-w^TF_{xx}[v,v]/(w^TF_\lambda)\ne0$.

## Verification

**Proof technique:** direct.

1.1 Solving for the parameter gives exactly $\lambda=x^2$. At $x=0$ its derivative is $d\lambda/dx=0$, and its second derivative is $2$. Thus the projection from the local solution curve to the $\lambda$-axis has zero derivative at the fold. [given, algebra]

2.1 For every $\lambda<0$ there is no real solution, while for every $\lambda>0$ there are two, $x=\sqrt\lambda$ and $x=-\sqrt\lambda$. Hence no open interval about $0$ is the parameter domain of a single-valued local solution graph covering the whole nearby solution set. On either one-sided branch, $|dx/d\lambda|=1/(2\sqrt\lambda)$ is unbounded as $\lambda\downarrow0$. [given, step 1.1, algebra]

3.1 The fold conditions are $F_x(0,0)=0$, $F_\lambda(0,0)=-1\ne0$, and $F_{xx}(0,0)=2\ne0$, so [F1] gives the same nonzero curvature conclusion independently of the explicit graph calculation. [F1, given, algebra] ∎ 