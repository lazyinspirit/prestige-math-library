---
page: general-state-mcmc-kernels-and-reversibility-examples
title: "General-state Markov kernels, invariance, and reversibility — Examples"
status: published
items: []
examples:
  - ex-finite-two-state-reversible-markov-kernel
  - ex-continuous-symmetric-random-walk-on-the-circle
  - cex-systematic-composition-of-reversible-kernels-is-not-reversible
---

The examples check detailed balance both for a finite two-state matrix and for
a symmetric random walk on the circle, where the transition law is atomic and
the proof uses the joint flow measure rather than a density. A third example
shows why reversibility is not preserved by every systematic scan: two
reversible deterministic updates with the same uniform invariant probability
compose, in the specified order, to a nonreversible directed three-cycle.
Neither example asserts irreducibility, uniqueness of an invariant law, or
convergence to stationarity.
