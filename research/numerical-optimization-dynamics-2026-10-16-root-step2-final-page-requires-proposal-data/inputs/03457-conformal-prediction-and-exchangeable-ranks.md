---
page: conformal-prediction-and-exchangeable-ranks
title: "Conformal Prediction and Exchangeable Ranks"
status: published
items:
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - lem-regular-conditional-kernels-push-forward-under-measurable-random-maps
  - def-exchangeable-random-elements
  - def-conformal-nonconformity-score-and-rank-pvalue
  - lem-finite-order-statistic-and-rank-maps-are-measurable
  - lem-permutation-equivariant-score-map-preserves-exchangeability
  - alg-split-conformal-prediction-set
  - alg-full-conformal-prediction-set
  - thm-conformal-rank-superuniformity-under-exchangeability
  - thm-split-conformal-marginal-coverage
  - thm-full-conformal-marginal-coverage
examples: []
---

Exchangeability means invariance of the joint law under coordinate permutations; it is weaker than independent identical sampling. Conformal prediction converts measurable nonconformity scores into finite-sample prediction sets by ranking a candidate together with calibration data. This page defines split scores fixed after training and full scores recomputed on each augmented candidate sample, with permutation-equivariance required in the full method.

Ties matter. Counting all scores equal to the candidate in an upper-rank p-value gives conservative validity, while an independent uniform variable spreads the candidate across its whole tie block and makes the rank exactly uniform. The split quantile uses the ceiling-adjusted index and the $+\infty$ sentinel when that index exceeds the calibration sample size. Under conditional exchangeability given training, split conformal has conditional and marginal coverage at least $1-\alpha$; full conformal has the same marginal guarantee under exchangeability. These results do not give coverage conditional on features or subgroups and do not survive arbitrary distribution shift.
