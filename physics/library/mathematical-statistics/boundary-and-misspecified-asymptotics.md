---
page: boundary-and-misspecified-asymptotics
title: "Nonregular and Misspecified Limits"
status: published
items:
  - def-pseudo-true-parameter-under-misspecification
  - thm-m-estimator-sandwich-limit-under-misspecification
  - def-fisher-information-metric-distance
  - lem-quadratic-likelihood-optimization-is-fisher-distance
  - thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model
  - cex-uniform-maximum-has-n-rate-not-root-n
examples: []
---

This page covers two limits that require conditions beyond regular interior likelihood theory. Under misspecification, a separated interior population target and explicit score and Hessian laws give the sandwich covariance $H^{-1}JH^{-T}$. At a boundary, a uniform local quadratic likelihood over convergent tangent cones gives a difference of squared Fisher distances. The uniform endpoint MLE supplies a support-changing counterexample: its rate is $n$, its limit is exponential, and the model is not QMD.
