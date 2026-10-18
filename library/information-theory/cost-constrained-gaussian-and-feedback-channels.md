---
page: cost-constrained-gaussian-and-feedback-channels
title: "Cost-Constrained, Gaussian, and Feedback Channels"
status: draft
requires:
  - discrete-memoryless-channel-capacity
  - gaussian-orthogonal-decomposition-and-quadratic-forms
  - mixed-effects-and-longitudinal-models
items:
  - def-parallel-gaussian-channel-with-power-constraint
  - lem-cost-pruned-random-code
  - lem-density-channel-threshold-random-coding-bound
  - lem-finite-simplex-entropy-continuity-and-concavity
  - lem-gaussian-maximum-differential-entropy-under-variance
  - lem-jensen-for-integrable-cost-random-variable
  - lem-standard-normal-fourth-moment
  - lem-water-filling-optimal-allocation
  - def-countable-dmc-zero-cost-information-capacity
  - def-parallel-awgn-feedback-code
  - lem-gaussian-noise-orthogonalization
  - lem-parallel-awgn-single-use-information-bound
  - lem-parallel-awgn-information-density-convergence
  - def-finite-dmc-cost-model
  - lem-parallel-awgn-cost-constrained-achievability
  - def-cost-constrained-dmc-code-and-capacity
  - def-finite-dmc-feedback-code
  - lem-cost-constrained-dmc-information-capacity-properties
  - lem-finite-message-fano-for-density-observation
  - lem-cost-constrained-dmc-achievability
  - lem-cost-constrained-dmc-mutual-information-under-average-cost
  - thm-parallel-awgn-feedback-capacity-water-filling
  - thm-cost-constrained-dmc-capacity-formula
  - cor-inactive-dmc-cost-constraint-recovers-capacity
  - thm-feedback-does-not-increase-cost-constrained-dmc-capacity
examples: []
---

This page develops finite-DMC capacity under a nonnegative letter cost, including the boundary budget equal to the minimum letter cost. It then treats finite-dimensional additive Gaussian channels under expected average squared power, diagonalizes correlated Gaussian noise by an orthogonal change of coordinates, and proves the water-filling formula for both ordinary and causal-feedback codes. All logarithms and rates are in natural nats; the Gaussian law and its orthogonal invariance are used under AC. The random-coding arguments use threshold decoding and explicitly prune codewords that violate the per-codeword cost. A separate countable-input, finite-output, zero-cost DMC definition supports the companion example about nonattainment; it does not alter the finite-alphabet capacity theorem.

The diagram records the causal interface at a single use. The encoder receives the finite message and the history of outputs from earlier uses; the channel kernel then produces the current output. In the Gaussian case the kernel is translation by fresh independent noise, while in a finite DMC it is the row $W(\cdot\mid X_t)$. The feedback arrow represents that past history, not the current output, and the proofs establish the capacity bounds without relying on the diagram.

```tikzcd
M \arrow[r, "f_t(M,Y^{t-1})"] & X_t \arrow[r, "\text{channel kernel}"] & Y_t \\
\mathcal Y^{t-1} \arrow[ur, "\text{past-output history}"'] &&
```
