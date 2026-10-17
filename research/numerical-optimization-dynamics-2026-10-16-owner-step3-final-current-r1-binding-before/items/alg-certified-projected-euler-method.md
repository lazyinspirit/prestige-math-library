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

Input a nonempty compact, closed, and convex set $C\subseteq\mathbb R^d$, $d\ge1$, an exact force evaluator $f:[0,T]\times C\to\mathbb R^d$, $T>0$, integer step count $N\ge1$, initial state $x_0\in C$, tolerances $\varepsilon_k\ge0$, finite budgets $B_k\in\mathbb N$ for $k=0,\ldots,N-1$, and a projection-certificate provider $S$. The explicit closedness condition matches [[def-projected-contact-dynamics-and-euler-step]]. An admissible provider, queried with $(C,y,\varepsilon,B)$, returns either `unresolved` after at most $B$ candidate checks or `certified(p,\Pi)` with a finite exact certificate $\Pi$ proving $p\in C$ and

$$\sup_{z\in C}\langle y-p,z-p\rangle\le\varepsilon^2.$$

Set $h=T/N$, $t_k=kh$, and start with the given $x_0$. For $k=0,\ldots,N-1$, form $y_k=x_k+h f(t_k,x_k)$ and call $S(C,y_k,\varepsilon_k,B_k)$. If the response is `unresolved` or is not a sound `certified(p,\Pi)` response of the stated form, stop and return `unresolved` with the valid prefix $x_0,\ldots,x_k$. Otherwise set $x_{k+1}=p$ and continue. After all $N$ calls succeed, return `complete`, the nodes, their affine interpolant, and the per-step tolerances. The procedure assumes exact force evaluations and sound exact certificates; arithmetic and force-evaluation errors are not included. With $\varepsilon_k=0$, a successful step satisfies the exact projection-Euler recurrence by [[lem-projected-euler-projection-residual-certificate]].

The algorithm makes at most $N$ provider calls, each with its stated finite candidate-check budget. Failure to certify a projection is reported; no convergence or accuracy is inferred from an unverified stopping tolerance. The provider is an explicit input: this definition does not construct a solver for arbitrary compact convex sets.
