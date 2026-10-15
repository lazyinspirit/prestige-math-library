---
page: mcmc-ergodicity-and-mixing-examples
title: General-state MCMC ergodicity and mixing — Examples
status: draft
items:
  []
examples:
  - ex-null-set-start-fails-total-variation-convergence
  - ex-periodic-finite-chain-fails-time-convergence
  - ex-uniformly-ergodic-chains-can-mix-arbitrarily-slowly
  - ex-gibbs-chain-invariant-but-reducible
  - ex-sticky-general-state-chain-is-not-geometrically-ergodic
  - ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain

---

## Summary

These examples isolate the hypotheses behind general-state MCMC convergence. An invariant Gibbs target may have reducible dynamics; a periodic chain oscillates in total variation; a non-Harris chain can fail from a pi-null start; a Harris chain may converge without a geometric rate; and drift plus minorization gives a geometric certificate. A two-state near-lazy family shows that a qualitative uniform rate need not give a useful common mixing time across a family.
