---
page: markov-kernels-and-markov-chains-examples
title: "Markov Kernels and Markov Chains — Examples"
status: draft
items: []
examples: [ex-iid-sequences-as-markov-chains-with-state-independent-kernel, ex-deterministic-dynamical-system-as-a-markov-kernel, ex-simple-random-walk-transition-kernel, ex-absorbing-gamblers-ruin-chain, ex-gaussian-ar-one-chain, ex-random-mapping-representation-for-a-finite-transition-matrix, cex-identical-one-step-marginals-do-not-determine-a-markov-chain, cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration, cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state]
---

The examples range from constant and Dirac kernels to simple random walk,
absorbing gambler's ruin, Gaussian AR(1), and a random-map realization of every
finite transition matrix. Each construction checks its kernel or conditional
transition calculation, including parameter endpoints and degenerate cases.

The counterexamples separate three distinct data requirements. One-time
marginals do not determine a kernel or two-time law; enlarging a filtration can
destroy a natural-filtration Markov property; and a deterministic
time-inhomogeneous evolution cannot use one kernel until time is adjoined to the
state.

