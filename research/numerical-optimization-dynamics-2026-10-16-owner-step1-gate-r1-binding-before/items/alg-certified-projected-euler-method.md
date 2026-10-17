---
id: alg-certified-projected-euler-method
kind: algorithm
title: Projected Euler with certified inexact projection solves
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-projected-contact-dynamics-and-euler-step
  - lem-projected-euler-projection-residual-certificate
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; projected dynamical-system formulation and projection steps.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 301–303; finite projected iteration and variational-inequality projection condition.
---

## Definition

Input a nonempty compact convex set $C\subseteq\mathbb R^d$, $d\ge1$, an exact force evaluator $f:[0,T]\times C\to\mathbb R^d$, $T>0$, integer step count $N\ge1$, initial state $x_0\in C$, tolerances $\varepsilon_k\ge0$, and finite solver budgets $B_k\in\mathbb N$ for $k=0,\ldots,N-1$. Set $h=T/N$ and $t_k=kh$. At step $k$, form
$$y_k=x_k+h f(t_k,x_k).$$
Ask the projection solver for $p_{k+1}\in C$ and a certificate that
$$\sup_{z\in C}\langle y_k-p_{k+1},z-p_{k+1}\rangle\le\varepsilon_k^2.$$
If the solver does not return a feasible candidate and a valid certificate within budget $B_k$, stop and return `unresolved` with the valid prefix $x_0,\ldots,x_k$. Otherwise set $x_{k+1}=p_{k+1}$ and continue. After all $N$ steps, return `complete`, the nodes, their affine interpolant, and the per-step tolerances. The definition assumes exact force evaluations and exact verification of the displayed residual; arithmetic and force-evaluation errors are not included. With $\varepsilon_k=0$, a successful step satisfies the exact projection-Euler recurrence by [[lem-projected-euler-projection-residual-certificate]].

The algorithm makes at most $N$ solver calls and uses the stated per-call budgets. Failure to certify a projection is reported; no convergence or accuracy is inferred from a solver's unverified stopping tolerance.
