---
id: def-nonlinear-two-point-bvp-and-boundary-residual
kind: definition
title: "Square nonlinear two-point boundary-value problems and endpoint residuals"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-interval]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/tpbvp/"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix $a<b$, an integer $d\ge1$, an open set $\Omega\subseteq\mathbb R\times\mathbb R^d$ containing $[a,b]\times$ the states under consideration, and a vector field $f:\Omega\to\mathbb R^d$. Let $D_B\subseteq\mathbb R^d\times\mathbb R^d$ be open and let $B:D_B\to\mathbb R^d$. A **square nonlinear two-point boundary-value problem (BVP)** is

$$y'(t)=f(t,y(t))\quad(a\le t\le b),\qquad B(y(a),y(b))=0,$$

where $y$ is a continuously differentiable curve whose graph lies in $\Omega$, whose endpoint pair lies in $D_B$, and where the $d$ scalar components of $B$ give exactly $d$ boundary equations. A **BVP solution** is such a curve satisfying both the differential equation and endpoint equation. No existence or uniqueness is part of this definition.

If the IVP from initial state $s\in\mathbb R^d$ has a unique solution $\phi(\cdot;s)$ on $[a,b]$, the **exact shooting residual** is $R(s):=B(s,\phi(b;s))$ whenever $(s,\phi(b;s))\in D_B$. For a mesh $a=t_0<\cdots<t_N=b$ and segment initial states $s_0,\ldots,s_N$, the **exact multiple-shooting residual** has rows $\phi_i(t_{i+1};s_i)-s_{i+1}$ for $0\le i<N$ and final row $B(s_0,s_N)$, where $\phi_i$ denotes the unique segment IVP solution when it exists. These residuals are defined only on their admissible IVP and boundary domains.
