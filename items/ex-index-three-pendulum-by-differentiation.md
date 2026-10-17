---
id: ex-index-three-pendulum-by-differentiation
title: "The constrained pendulum has differentiation index three"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - def-regular-differentiation-index
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375: the semi-explicit DAE and consistent initial-data convention; the index-three pendulum calculation is proved locally below."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §§10.0 and 10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 163–165 and 169–171: planar and spherical pendulum formulations and differentiated constraints."
---

## Example

For $q,v\in\mathbb R^2$, multiplier $\lambda\in\mathbb R$, length $\ell>0$, and gravitational acceleration $g_0>0$, consider

$$
q'=v,\qquad v'=-g_0 e_2-\lambda q,\qquad 0=\frac12(q^\mathsf Tq-\ell^2),
$$

where $e_2=(0,1)^\mathsf T$. The position constraint, tangency condition, and acceleration constraint determine the allowed initial position, velocity, and multiplier. On the constraint manifold the multiplier is

$$
\lambda=\frac{\|v\|_2^2-g_0q_2}{\ell^2}.
$$

This is a regular index-three DAE in the convention of [[def-regular-differentiation-index]].

## Facts & Assumptions

**Given:** The pendulum equations, $\ell>0$, and $g_0>0$.

[F1] [[def-semi-explicit-index-one-dae-and-consistent-initial-data]]: a DAE solution must satisfy its algebraic position constraint at every time.

[F2] [[def-regular-differentiation-index]]: the index is the least number of differentiations of the algebraic constraint needed locally to determine the first derivative of the algebraic variable through a regular prolonged equation.

[A1] The variables have the derivatives used below, the constraint satisfies $q^\mathsf Tq=\ell^2$ along the trajectory, and $\ell>0$.



## Verification

1.1 Differentiating $q^\mathsf Tq=\ell^2$ once and using $q'=v$ gives $q^\mathsf Tv=0$, the tangency condition. Differentiating a second time gives $0=\|v\|_2^2+q^\mathsf Tv'=\|v\|_2^2-g_0q_2-\lambda q^\mathsf Tq$. Using [A1], this equation solves uniquely for $\lambda=(\|v\|_2^2-g_0q_2)/\ell^2$. [given, F1, A1, algebra]

2.1 Differentiate $\|v\|_2^2-g_0q_2-\lambda\ell^2=0$, the second-derivative constraint from step 1.1. Since $q'=v$ and $v'=-g_0e_2-\lambda q$, this gives $0=2v^\mathsf Tv'-g_0v_2-\lambda'\ell^2=-3g_0v_2-2\lambda q^\mathsf Tv-\lambda'\ell^2=-3g_0v_2-\lambda'\ell^2,$ where the last equality uses the tangency condition in step 1.1. Since $\ell>0$, this determines $\lambda'=-3g_0v_2/\ell^2$ with nonzero coefficient $-\ell^2$ on the highest algebraic derivative. [given, A1, step 1.1, algebra]

3.1 The original constraint does not contain $\lambda$; its first derivative yields tangency but not $\lambda$, its second derivative determines $\lambda$, and its third derivative determines $\lambda'$. The prolonged equations are regular because the multiplier coefficients are $-\ell^2$ at each of these latter solves. Therefore the least differentiation count in [F2] is three. [F2, step 1.1, step 2.1, algebra]

4.1 For example, $q_0=(\ell,0)$, $v_0=(0,s)$, and $\lambda_0=s^2/\ell^2$ satisfy the position and tangency constraints, and the multiplier formula in step 1.1 gives $\lambda_0$. Thus this tuple satisfies the initial conditions exposed by the first two differentiations. [given, A1, step 1.1, algebra] ∎
