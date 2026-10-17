---
id: alg-ssprk33
kind: algorithm
title: "The three-stage third-order SSP Runge–Kutta step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Sigal Gottlieb, Chi-Wang Shu, and Eitan Tadmor, Strong Stability-Preserving High-Order Time Discretization Methods, SIAM Review 43(1) (2001), §4.1"
      url: "https://www.math.umd.edu/~tadmor/pub/linear-stability/Gottlieb-Shu-Tadmor.SIREV-01.pdf"
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Definition

Input an initial pair $(t,y)$, a step $h>0$, an open time-state domain $D$, and a right-hand-side evaluator for $f:D\to\mathbb R^d$. Before each query, check that its time-state pair is in $D$; return domain-failure with that stage index if it is not. If the evaluator reports failure, return evaluation-failure with that stage index. Execute:

1. Query $f(t,y)$. On success set $Y_1=y+h f(t,y)$.
2. Query $f(t+h,Y_1)$. On success set $Y_2=\frac34y+\frac14\bigl(Y_1+h f(t+h,Y_1)\bigr)$.
3. Query $f(t+h/2,Y_2)$. On success set $y^+=\frac13y+\frac23\bigl(Y_2+h f(t+h/2,Y_2)\bigr)$.
4. If $(t+h,y^+)\notin D$, return output-domain-failure; otherwise return success with $(t+h,y^+)$.

The procedure uses only explicit function evaluations; it has no implicit stage solve. If a numerical evaluator can fail even at a domain point, its failure is returned unchanged with the corresponding stage index. The exact mathematical method assumes all queried values exist.

