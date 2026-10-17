---
id: def-semi-explicit-index-one-dae-and-consistent-initial-data
title: "Semi-explicit index-one DAEs and consistent initial data"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
justified_by:
  - thm-index-one-dae-implicit-function-reduction
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 372–381, especially pp. 374 and 379: semi-explicit form, invertible g_z, IFT reduction, consistent initial values."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10, §§10.0–10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 161–170: DAE form, consistent initial values, index-one Jacobian condition, and reduction."
---

## Definition

Let $d,m\ge1$, let $\Omega\subseteq\mathbb R\times\mathbb R^d\times\mathbb R^m$ be open, and let $f:\Omega\to\mathbb R^d$ and $g:\Omega\to\mathbb R^m$. A **semi-explicit differential-algebraic equation (DAE)** on $\Omega$ is

$$
x'(t)=f(t,x(t),z(t)),\qquad 0=g(t,x(t),z(t)).
$$

The $x$-coordinates are the **differential variables** because their derivatives occur in the first equation. The $z$-coordinates are the **algebraic variables** because their derivatives do not occur. A solution on an interval $I$ is a pair of functions $x:I\to\mathbb R^d$, $z:I\to\mathbb R^m$ whose graph lies in $\Omega$, with $x$ differentiable, satisfying both displayed equations at every $t\in I$. An initial pair $(x_0,z_0)$ at $t_0$ is **algebraically consistent** when $g(t_0,x_0,z_0)=0$. On the regular index-one branch below this is the algebraic initial condition used for reduction. For higher-index systems, algebraic consistency is only necessary: differentiated constraints may impose additional initial conditions.

At a point with $g(t_*,x_*,z_*)=0$, the presentation is **regular index one** when $f,g$ are $C^1$ near the point and the square Jacobian $g_z(t_*,x_*,z_*)=D_zg(t_*,x_*,z_*)$ is invertible. The [[thm-index-one-dae-implicit-function-reduction]] then supplies a unique local branch $z=\psi(t,x)$ through that point. Only that selected branch is used in local numerical claims. Higher-index systems and points with singular $g_z$ are outside this index-one interface.
