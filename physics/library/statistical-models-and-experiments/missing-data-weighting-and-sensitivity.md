---
page: missing-data-weighting-and-sensitivity
title: "Missingness weights and sensitivity"
status: published
items:
  - lem-missing-at-random-integrable-factorization
  - alg-response-probability-weighting
  - thm-missing-at-random-weighting-identity
  - def-pattern-mixture-sensitivity-parameter
examples: []
---

This page defines the response-probability weighted sample mean, proves the
population inverse-weighting identity under the explicit MAR conditional
independence condition, and specifies a location-shift pattern-mixture
sensitivity family. The identity assumes the true positive response
probability and an integrable outcome. It does not establish finite-sample
stability, estimated-weight inference, or a joint treatment and response
weighting result.

The sensitivity function constrains the full conditional distribution among
nonrespondents. It is a modeling assumption, not a consequence of the observed
data. Its mean target requires a separate integrability condition, and any
range over sensitivity values is not itself a confidence interval.
