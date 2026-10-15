---
page: dirichlet-process-priors-and-finite-partition-updates
title: "Dirichlet-process priors and finite-partition updates"
status: draft
items:
  - def-poisson-random-measure
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - lem-dirichlet-aggregation-under-coarsening
  - thm-dirichlet-process-posterior-update
  - thm-dirichlet-process-polya-urn-predictive-law
  - rem-dirichlet-process-support-does-not-imply-density-contraction
examples: []
---

This page defines the Dirichlet process as a probability law on
evaluation-measurable probability measures and proves a countably additive
normalized-gamma construction from a stripwise Poisson random measure. It
then establishes finite-partition posterior updating under conditionally IID
sampling and derives the Pólya-urn predictive formula.

The hypotheses retain zero-base cells and prior-predictive null fibers
explicitly. Finite-partition conjugacy supplies neither a topology-dependent
weak-support statement nor a density-posterior contraction theorem.
