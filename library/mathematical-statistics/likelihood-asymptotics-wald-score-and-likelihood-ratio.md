---
page: likelihood-asymptotics-wald-score-and-likelihood-ratio
title: "Likelihood Theory and Classical Calibration"
status: draft
items:
  - def-qmd-path
  - lem-parametric-qmd-score-has-mean-zero
  - def-wald-score-likelihood-ratio-statistics
  - thm-regular-mle-asymptotic-linearity-and-normality
  - thm-wald-score-likelihood-ratio-asymptotic-chi-square
  - cor-wald-score-lr-asymptotic-equivalence
examples: []
---

Quadratic-mean differentiability gives an $L^2$ notion of smoothness for a
dominated model, with a score vector and Fisher information that remain
meaningful when pointwise derivatives are unavailable. Under a correct iid
model, an interior true parameter, nonsingular information, a consistent
measurable MLE, and a square-integrable local log-density Lipschitz envelope,
the MLE has the usual asymptotic linear representation and covariance
$I(\theta_0)^{-1}$.

For a regular interior equality null whose local tangent has codimension $q$,
the Wald, efficient-score, and likelihood-ratio statistics share the same
first-order quadratic form and converge to $\chi_q^2$. The calibration is
asymptotic and uses the stated local likelihood and score expansions. It does
not apply when the null has a boundary tangent cone; the examples page works
that distinction out in a normal location model.

