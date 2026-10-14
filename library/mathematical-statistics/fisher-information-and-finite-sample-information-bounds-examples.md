---
page: fisher-information-and-finite-sample-information-bounds-examples
title: "Scores and Information Bounds — Examples"
status: draft
items: []
examples: [ex-bernoulli-score-fisher-information-and-cramer-rao-attainment,
           ex-normal-location-score-information-and-cramer-rao-attainment,
           cex-uniform-moving-support-invalidates-naive-cramer-rao-bound]
---

The Bernoulli and known-variance normal location models have regular common
support, and their natural estimators attain the scalar information bound.
The uniform endpoint model has moving support: its formal score is not
mean-zero, the estimator-score covariance is not the target derivative, and
the resulting naive inequality is false. This example marks the role of the
regularity identities in the theorem.
