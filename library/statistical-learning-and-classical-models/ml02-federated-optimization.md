---
page: ml02-federated-optimization
title: "Federated averaging, local SGD, and SCAFFOLD"
status: published
order: 2754
category: machine-learning
companion: ml02-federated-optimization-examples
requires:
  - ml02-differential-privacy
  - ml02-linear-sparse-models
  - probability-spaces-random-variables-and-expectation
  - variance-reduced-finite-sum-and-adaptive-gradient-optimization
items:
  - def-federated-objective-and-client-sampling
  - alg-local-sgd
  - lem-relaxed-euclidean-squared-norm
  - lem-finite-martingale-difference-sum-variance
  - lem-local-sgd-weighted-recursion
  - lem-federated-recursion-averaging
  - lem-smooth-convex-gradient-difference
  - lem-convex-gradient-step-nonexpansive
  - alg-fedavg
  - alg-scaffold
  - lem-uniform-client-sampling-moments
  - lem-local-sgd-virtual-progress
  - lem-local-sgd-sampling-variance
  - lem-local-sgd-client-drift
  - lem-perturbed-strong-convexity
  - thm-local-sgd-convex-round-complexity
  - def-bounded-client-gradient-dissimilarity
  - lem-standard-client-dissimilarity-implies-gap-form
  - lem-fedavg-one-round-progress
  - lem-fedavg-local-drift
  - def-scaffold-analysis-trajectory-and-errors
  - thm-fedavg-under-gradient-dissimilarity
  - lem-scaffold-control-tracking-identity
  - lem-scaffold-convex-server-variance
  - lem-scaffold-convex-control-lag
  - lem-scaffold-convex-client-drift
  - lem-scaffold-convex-round-progress
  - lem-scaffold-nonconvex-server-variance
  - lem-scaffold-nonconvex-client-drift
  - lem-scaffold-nonconvex-control-lag
  - lem-scaffold-nonconvex-round-progress
  - thm-scaffold-convex-and-nonconvex-rates
  - fs-scaffold-general-convex-uniform-output-round-headline
examples: []
page_layout: compact-v1
---
