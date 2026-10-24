---
page: quantum-sampling-expectation-and-monte-carlo-examples
title: "Quantum Sampling, Expectation, and Monte Carlo — Examples"
status: published
requires:
  - quantum-sampling-expectation-and-monte-carlo
items:
  []
examples:
  - cex-qa-29-unavailable-coherent-sampler
  - ex-qa-29-bernoulli-expectation
---
The Bernoulli example identifies its mean with the QAE good probability and records the controlled-query cost. The counterexample shows that a classical sample-only interface does not itself supply the coherent preparation, inverse, controlled calls, or reflections required by the quantum estimators; a separately costed coherent implementation may still be added.
