---
page: general-state-mcmc-kernels-and-reversibility
title: "General-state Markov kernels, invariance, and reversibility"
status: published
items:
  - def-general-state-reversibility-by-symmetric-flow-measure
  - thm-general-state-reversibility-implies-invariance
examples: []
---

For a probability measure $\pi$ and a pointwise probability kernel $P$ on any
measurable state space, the joint flow defined in
[[def-general-state-reversibility-by-symmetric-flow-measure]] is a probability
measure on the product sigma-algebra. Reversibility means that this measure is
symmetric under swapping its coordinates; it does not require a density or
assume invariance in advance. Integrating its nonnegative indicator functions
over the two coordinate marginals proves that reversible kernels preserve
$\pi$ ([[thm-general-state-reversibility-implies-invariance]]). The existing
detailed-balance and convergence results on the stationary Markov-chain page
remain countable-state statements; this page makes no general-state
ergodicity or convergence claim.
