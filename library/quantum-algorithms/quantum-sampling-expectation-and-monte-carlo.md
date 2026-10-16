---
page: quantum-sampling-expectation-and-monte-carlo
title: "Quantum Sampling, Expectation, and Monte Carlo"
status: published
requires:
  - amplitude-estimation-and-counting
  - independence-borel-cantelli-and-zero-one-laws
  - probability-spaces-random-variables-and-expectation
  - registers-tensor-products-and-partial-trace
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - controlled-gates-phase-and-entanglement
  - measurements-povms-and-instruments
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - finite-probability-spaces-and-random-variables
  - uniform-circuit-families-promise-problems-and-complexity
items:
  - def-qa-29-expectation-estimation-task
  - lem-qa-29-independent-trial-median-bound
  - alg-qa-29-certified-natural-logarithm-enclosure
  - lem-qa-29-certified-natural-logarithm-series
  - lem-qa-29-dyadic-parameters-terminate
  - thm-qa-29-classical-mc-chebyshev-baseline
  - thm-qa-29-counting-is-indicator-expectation
  - def-qa-29-coherent-sampler
  - lem-qa-29-coherent-sampler-outcome-law
  - alg-qa-29-amplitude-counting-consumer
  - alg-qa-29-quantum-expectation-estimation
  - alg-qa-29-variance-aware-monte-carlo
  - thm-qa-29-quantum-expectation-error-cost
  - lem-qa-29-positive-mean-dyadic-estimator
  - thm-qa-29-variance-aware-guarantee
  - thm-qa-29-coherent-query-cost-translation
examples:
  []
---
This page fixes a finite probability law, an exactly encoded bounded observable, and the success event for estimating its expectation. It specifies the coherent sampler as a supplied unitary interface with explicit inverse, controlled access, value computation, rotations, and cost, then proves its measurement law. The classical sample mean has variance at most $(b-a)^2/(4n)$ and the corresponding Chebyshev failure bound. The quantum bounded-mean estimator reduces the rescaled expectation to a good-state probability and consumes QA13 amplitude estimation. The variance-aware estimator uses a finite coarse centering step, positive/negative decomposition, dyadic bins, an explicit omitted-tail bound, one-sided concentration for the finite medians, certified rational logarithm cutoffs, and separately counted state copies and reflections. A uniform Boolean indicator is the counting special case; coherent preparation and ordinary sampling costs remain distinct.
