---
page: mcmc-ergodicity-and-mixing
title: General-state MCMC ergodicity and mixing
status: draft
items:
  - def-petite-set-for-markov-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - lem-countably-generated-kernel-lebesgue-decomposition
  - lem-positive-triple-set-yields-uniform-overlap
  - def-general-state-aperiodic-markov-chain
  - def-harris-recurrent-markov-chain
  - lem-bivariate-drift-minorization-coupling-rate
  - lem-drift-sublevel-union-is-petite
  - lem-invariant-law-integrates-bounded-set-drift
  - lem-invariant-law-positive-set-and-almost-sure-hitting
  - lem-iterated-kernel-density-convolution-bounds
  - thm-uniform-ergodicity-from-whole-space-minorization
  - lem-aperiodic-minorization-times-are-cofinite
  - lem-phi-irreducible-chain-has-small-set
  - lem-aperiodic-petite-set-with-accessible-small-set-is-small
  - lem-small-set-coupling-converges-from-almost-every-start
  - lem-geometric-drift-minorization-reduces-to-bounded-small-set
  - thm-general-state-markov-chain-convergence-under-recurrence-conditions
  - thm-geometric-ergodicity-under-drift-and-minorization
examples: []

---

## Summary

This page separates invariance from convergence for a general-state Markov kernel. It defines irreducibility, aperiodicity, small and petite sets, drift, and Harris recurrence; proves the measurable-density and small-set results needed on countably generated spaces; and establishes stationary almost-everywhere convergence, the Harris all-start upgrade, uniform ergodicity from whole-space minorization, and a V(x)-weighted geometric rate.

Without Harris recurrence the convergence conclusion is only for pi-almost every start. The drift theorem gives a common geometric rate weighted by V(x): globally finite drift functions yield the bound from every state, while extended drift certificates finite pi-almost everywhere yield it on the full-measure absorbing set {V<infinity}. The bounded-set reduction explicitly supplies the improved drift needed to integrate V under the invariant law. Invariance alone gives neither irreducibility nor convergence. The companion page records periodicity, null-set starts, reducible Gibbs dynamics, sticky chains, and mixing-rate limitations.
