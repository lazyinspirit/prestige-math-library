---
page: gaussian-process-priors-and-posterior-laws-examples
title: "Gaussian-process priors and finite posterior laws — Examples"
status: draft
items: []
examples:
  - ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise
  - ex-singular-gaussian-process-prior-and-predictive-covariances
  - ex-gaussian-process-extrapolation-retains-independent-index-uncertainty
---

The examples calculate a nonzero-mean posterior with correlated observation
noise, show how noise makes an observed covariance positive definite despite
a singular prior block while the predictive covariance remains singular, and
show that an independent unobserved index retains its prior uncertainty.
Each pointwise calculation uses the stated Gaussian conditional-kernel
version; values on observation-null sets are not uniquely fixed by the
regular conditional law.
