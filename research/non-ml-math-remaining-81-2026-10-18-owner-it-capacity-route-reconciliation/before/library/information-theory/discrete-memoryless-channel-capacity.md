---
page: discrete-memoryless-channel-capacity
title: "Discrete Memoryless Channel Capacity"
status: draft
requires: [f-divergences-renyi-and-hypothesis-testing]
items:
  - def-channel-sequence
  - def-discrete-memoryless-channel
  - lem-discrete-memoryless-channel-block-kernels-are-stochastic
  - def-discrete-memoryless-channel-information-capacity
  - def-fixed-length-channel-code
  - def-discrete-memoryless-channel-information-density
  - lem-discrete-memoryless-channel-capacity-is-attained
  - lem-discrete-memoryless-channel-n-letter-information-bound
  - def-fixed-length-channel-code-errors
  - lem-discrete-memoryless-channel-iid-information-density-converges
  - lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound
  - def-discrete-memoryless-channel-operational-capacity
  - lem-discrete-memoryless-channel-average-to-maximal-expurgation
  - thm-discrete-memoryless-channel-random-coding-achievability
  - lem-discrete-memoryless-channel-information-density-concentration
  - thm-discrete-memoryless-channel-average-error-converse
  - thm-discrete-memoryless-channel-alphabet-scoped-strong-converse
  - thm-discrete-memoryless-channel-capacity-formula
examples: []
---

This page begins with a general sequence of measurable channel kernels whose input and output spaces may vary by blocklength, then specializes to a fixed finite DMC with product transition law. Codes use a uniform message for average error and also record maximal error; rates are in nats per use. No feedback or input-cost constraint is imposed. The capacity proof gives finite-alphabet random-coding achievability, an entropy/Fano converse, and the strong converse using a capacity-achieving output law and a likelihood threshold.

The diagram denotes the conditional kernel carrying an input word to an output law. For a DMC, its exact probabilities are $W^n(y^n\mid x^n)=\prod_iW(y_i\mid x_i)$ as defined and proved above; the arrow is not a deterministic map.

```tikzcd
\mathcal X^n \arrow[r, "W^n"] & \mathcal Y^n
```
