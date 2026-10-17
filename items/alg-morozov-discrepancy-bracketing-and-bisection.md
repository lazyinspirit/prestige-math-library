---
id: alg-morozov-discrepancy-bracketing-and-bisection
kind: algorithm
title: Exact-residual Morozov discrepancy bracketing and bisection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 3
deps:
  - def-countable-choice
  - def-compact-spectral-filter-and-qualification
  - lem-tikhonov-data-residual-continuity-monotonicity-and-limits
  - lem-hilbert-tikhonov-normal-operator-invertible
verification:
  precheck: n/a
aliases: []
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, Theorem 4.7 and Chapter 6 on Tikhonov discrepancy selection, PDF pp. 34–35 and 55–63.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slide 8 defines the discrepancy target and discusses dependence on a known noise level.
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Input a compact operator $A:X\to Y$ between real or complex Hilbert spaces,
data $g\in Y$, a declared noise level $\delta>0$, a discrepancy factor
$\tau>1$, an initial parameter $\lambda_0>0$, integer budgets $M,N\ge0$,
an exact residual evaluator for
$r_g(\lambda)=\|A(A^*A+\lambda I)^{-1}A^*g-g\|$,
and exact certified endpoint inputs
$$d=\operatorname{dist}(g,\overline{\operatorname{Ran}A}),\qquad G=\|g\|.$$
The algorithm does not infer an infinite-dimensional range distance from a
finite number of residual evaluations. If the supplied endpoint values fail
$$d<\tau\delta<G,$$
return `incompatible-endpoints`.

Set $q=\tau\delta$, initialize $\lambda_-=\lambda_+=\lambda_0$, and evaluate
$r_g(\lambda_0)$. If it is below $q$, repeatedly double $\lambda_+$, at most
$M$ times, evaluating the residual after each doubling until
$r_g(\lambda_+)\ge q$. If the initial residual is at least $q$, repeatedly
halve $\lambda_-$, at most $M$ times, evaluating the residual after each
halving until $r_g(\lambda_-)<q$. If the selected search exhausts its budget
without a bracket, return `budget-exhausted`; this status is inconclusive.

With a bracket satisfying $r_g(\lambda_-)<q\le r_g(\lambda_+)$, repeat
$N$ times: set $\lambda_m=(\lambda_-+\lambda_+)/2$; if $r_g(\lambda_m)<q$,
replace $\lambda_-$ by $\lambda_m$, and otherwise replace $\lambda_+$ by
$\lambda_m$. Return the bracket $[\lambda_-,\lambda_+]$. The algorithm returns
a bracket, not a universal accuracy guarantee for a finite budget.

