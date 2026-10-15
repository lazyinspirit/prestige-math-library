---
page: kriging-as-best-linear-prediction-examples
title: "Kriging — Examples"
status: draft
items: []
examples:
  - ex-singular-covariance-simple-kriging
  - ex-rank-deficient-universal-kriging-design
  - ex-ordinary-kriging-larger-error-than-simple
---

Three finite cases isolate the assumptions in the covariance systems.
Duplicated observations give a singular simple-kriging covariance and
nonunique coefficients for one exact predictor. A quadratic trend observed
at only two sites can make the design rank deficient and the universal
unbiasedness constraint impossible even when observation covariance is
nonsingular. With two independent unit-variance observations, simple kriging
with known mean can have smaller error than the unbiased ordinary predictor.
