---
page: kriging-as-best-linear-prediction
title: "Kriging"
status: draft
items:
  - def-simple-ordinary-and-universal-kriging
  - thm-kriging-systems-and-l2-optimality
  - thm-gaussian-simple-kriging-equals-conditional-mean
examples: []
---

Kriging chooses a linear predictor from finitely many field observations.
With a known mean and positive-definite observation covariance, the simple
weights solve the covariance normal equations and minimize mean-square
prediction error. When the mean is an unknown constant or a specified trend,
unbiasedness imposes linear constraints and the unique predictor solves an
augmented covariance system under explicit rank and invertibility
hypotheses. Under AC and Gaussianity, the simple predictor is a conditional
mean. For finite-second-moment fields, the covariance theorem establishes
best-affine optimality; conditional-mean equality requires a separate
argument. Plug-in estimates and variogram systems require their own conditions.
