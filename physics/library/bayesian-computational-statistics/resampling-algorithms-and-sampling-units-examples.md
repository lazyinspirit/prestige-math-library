---
page: resampling-algorithms-and-sampling-units-examples
title: "Resampling schemes and the sampling-unit contract — Examples"
status: published
items: []
examples:
  - ex-two-point-bootstrap-sample-mean
  - ex-delete-d-and-subsampling
  - ex-cluster-resampling-unit
  - cex-pointwise-bootstrap-does-not-preserve-dependent-pair-law
  - ex-assignment-randomization-versus-bootstrap
---

## Objective

The examples compute an exact conditional bootstrap distribution for a two-point sample mean, enumerate delete-two means on four units, and compare them with size-two subsampling. For the sample mean, complementation makes the two six-point laws equal; their reported outputs remain different, because the delete-two procedure also returns a single uniform average and no variance scaling. A cluster record is resampled as a whole. A stationary binary time-series pair refutes the claim that pointwise IID bootstrap draws reproduce the original joint law. A two-unit Fisher sharp-null design distinguishes known assignment randomization from pointwise bootstrap resampling. None of these calculations alone supplies a general bootstrap-validity theorem.

## Development

The sample-mean calculation enumerates all four ordered size-two bootstrap samples. The four-unit example enumerates six delete-two complement means and the six uniformly weighted two-unit subsets, identifying their complement bijection and the shared finite law. The cluster example applies the resampling-unit contract to vector records. In the stationary dependent-pair counterexample, the original covariance is $1/8$ while the conditional pointwise-bootstrap covariance is $0$. In the assignment example, the known design law has support $\{-2,2\}$, whereas the empirical bootstrap law also has mass at $0$.
