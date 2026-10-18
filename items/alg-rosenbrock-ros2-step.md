---
id: alg-rosenbrock-ros2-step
kind: algorithm
title: Two-stage ROS2 linearly implicit step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: []
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "KPP 2.6 documentation, Numerical methods, Rosenbrock methods and ROS-2 coefficient table"
      url: "https://kpp.readthedocs.io/en/2.6.0/tech_info/07_numerical_methods.html"
verification:
  precheck: n/a
---

## Definition

Let $f:[t_0,T]\times U\to\mathbb R^d$ be twice continuously differentiable, with $U\subseteq\mathbb R^d$ open. The inputs are $t\in[t_0,T)$, $y\in U$, $h>0$ with $t+h\le T$, and a matrix $W\in\mathbb R^{d\times d}$ used in place of the Jacobian. Put $\gamma=1+1/\sqrt2$ and $M=I-\gamma hW$. If $M$ is singular, return `linear-solve-failure`. Otherwise solve, in exact real arithmetic,
$$
Mk_1=f(t,y)+\gamma h\,\partial_t f(t,y),\qquad Mk_2=f(t+h,y+hk_1)-2k_1-\gamma h\,\partial_t f(t,y),
$$
and return `success` with $y^+=y+\frac h2(3k_1+k_2)$. Both stages use the same matrix $M$. The exact-Jacobian method sets $W=D_yf(t,y)$; a W-method may instead use a bounded approximate matrix $W$. The partial derivative $\partial_tf$ in both right-hand sides is exact; no result here covers an approximate time derivative. This definition makes no finite-precision or inexact-solve claim.
