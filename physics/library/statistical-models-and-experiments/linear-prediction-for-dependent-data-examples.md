---
page: linear-prediction-for-dependent-data-examples
title: "Finite-history linear prediction — Examples"
status: published
items: []
examples:
  - ex-ar1-one-step-and-multistep-forecast
  - ex-singular-history-covariance-unique-predictor-class
  - ex-nongaussian-conditional-mean-not-best-affine-predictor
---

These examples compute a singular-history forecast whose coefficient vectors
are nonunique but whose predictor class is fixed, and a three-state stationary
cycle whose conditional mean is nonlinear in the observed history. A causal
AR(1) process then gives the $h$-step forecast $\mu+\phi^h(X_n-\mu)$ and its
innovation-sum error variance under centered, uncorrelated finite-variance
innovations.
