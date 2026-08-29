---
id: thm-smooth-dependence-of-ode-solutions-on-parameters
kind: theorem
title: "Smooth dependence of ODE solutions on parameters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-dependence-of-solutions-on-initial-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Theorem 10.7"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.3-§4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $F(t,x,\lambda)$ be smooth in $(x,\lambda)$ on an open time-state-parameter
domain. Near any base data $(t_0,x_0,\lambda_0)$ there are a compact time
interval $I$ and a neighbourhood $W$ of $(x_0,\lambda_0)$ such that, for every
$(y,\lambda)\in W$, the solution of

$$x'(t)=F(t,x(t),\lambda),\qquad x(t_0)=y,$$

is defined on $I$, and the resulting solution map is smooth in the pair
$(y,\lambda)$.

## Facts & Assumptions

**Given:** A smooth parameter-dependent vector field $F(t,x,\lambda)$ and base data $(t_0,x_0,\lambda_0)$.

[L1] Solutions depend smoothly on initial data for smooth systems on a common compact interval ([[thm-smooth-dependence-of-solutions-on-initial-data]]).

## Proof

**Proof technique:** direct.

1.1 Introduce the augmented variable $(x,\lambda)\in\mathbb R^{n+m}$ and define the autonomous-in-parameter system below. [given, construct]

$$\begin{pmatrix}x\\ \lambda\end{pmatrix}' =\begin{pmatrix}F(t,x,\lambda)\\ 0\end{pmatrix}.$$

Along every solution the parameter component remains constant, so solving this augmented system is equivalent to solving the original parameter-dependent ODE with fixed parameter $\lambda$.
[given, construct]

2.1 The augmented right-hand side is smooth in the initial data $(y,\lambda)$, so [L1] applies on a common compact local time interval and makes the augmented solution map smooth in $(y,\lambda)$. Projecting to the $x$-component preserves that smoothness, which gives the claimed smooth dependence of solutions on initial state and parameter. [L1, step 1.1] ∎
