---
page: stochastic-approximation-and-stochastic-gradient-methods
title: Stochastic approximation and stochastic gradient methods
status: published
requires:
  - proximal-gradient-and-accelerated-composite-optimization
  - numerical-optimization-globalization-and-inexact-certificates
  - martingale-inequalities-and-convergence
items:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - lem-robbins-siegmund-almost-supermartingale
  - thm-robbins-monro-strongly-monotone-root-convergence
  - thm-stochastic-gradient-nonconvex-randomized-iterate-bound
  - thm-stochastic-gradient-biased-noise-floor
  - lem-strong-convexity-implies-strong-monotonicity-of-gradient
  - thm-stochastic-gradient-strong-convex-diminishing-step-rate
  - def-projected-stochastic-gradient-update
  - thm-projected-stochastic-gradient-strong-convex-a-s-convergence
  - thm-projected-stochastic-gradient-convex-average-bound
examples: []
---

This page defines filtration-adapted Robbins–Monro, SGD, and projected SGD, with conditional unbiasedness, bias, variance, and moment hypotheses stated separately. It proves the almost-supermartingale lemma locally from the published Doob convergence interface, then applies it to strongly monotone root finding and projected strongly convex optimization. The finite-time results give an averaged convex $O(N^{-1/2})$ bound, a last-iterate strongly convex $O(k^{-1})$ bound, and a nonconvex randomized-iterate stationarity bound. Biased or constant-step noise leaves the explicit weighted terms shown in the corresponding theorem. Almost-sure claims assume AC for the conditional-expectation and Doob interfaces. These are optimization guarantees only; convergence supplies no central-limit or inferential guarantee.
