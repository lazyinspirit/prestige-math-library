---
page: linear-prediction-for-dependent-data
title: "Finite-history linear prediction"
status: published
items:
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - def-best-linear-forecast-from-a-finite-history
  - thm-finite-history-best-linear-predictor-exists-uniquely
  - alg-durbin-levinson-forecast-recursion
  - thm-forecast-normal-equations-and-error
  - thm-gaussian-best-linear-forecast-equals-conditional-expectation
  - thm-durbin-levinson-solves-the-prediction-equations
examples: []
---

For a weakly stationary real process, the finite-history best linear forecast
is the $L^2$ projection onto the affine span of the observed history. Its
existence and uniqueness hold even when history covariance is singular. When
that covariance is nonsingular, the normal equations express its coefficients
through lagged covariances, give the mean adjustment, and yield the
forecast-error variance.

The page separates the general affine forecast from the Gaussian conditional
mean result, whose proof uses the residual's zero cross-covariance with the
history. It also defines the Durbin–Levinson recursion for positive-definite
leading covariance blocks and proves by induction that it solves the
successive one-step prediction equations and returns their error variances.
