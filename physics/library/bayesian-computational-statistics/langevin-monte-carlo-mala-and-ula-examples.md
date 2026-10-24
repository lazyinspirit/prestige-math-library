---
page: langevin-monte-carlo-mala-and-ula-examples
title: "Langevin algorithms: ULA bias and MALA exactness — Examples"
status: published
items: []
examples:
  - ex-ula-critical-step-has-no-invariant-law
  - ex-ula-gaussian-target-stationary-bias
  - ex-mala-gaussian-target-acceptance-correction
---

The examples exhibit three complementary outcomes: the quadratic ULA chain
has no invariant probability at its critical step size $\gamma=2$; at the
interior step size $\gamma=1$ it has invariant law $N(0,2)$ instead of the
standard Gaussian target; and MALA corrects the same Gaussian proposal with
the forward/reverse Hastings ratio while preserving the target exactly.
