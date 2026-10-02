---
page: stationary-markov-chains-and-ergodic-limits-examples
title: "Stationary Markov Chains and Ergodic Limits — Examples"
status: draft
items: []
examples:
  - ex-stationary-law-of-a-two-state-chain
  - ex-stationary-distribution-of-a-finite-birth-and-death-chain
  - ex-random-walk-on-a-finite-undirected-graph-is-reversible
  - ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law
  - ex-empirical-state-frequencies-converge-to-stationary-masses
  - ex-periodic-chain-has-cesaro-but-not-ordinary-convergence
  - cex-a-null-recurrent-chain-has-no-stationary-probability
  - cex-a-stationary-chain-need-not-be-ergodic
  - cex-invariance-does-not-imply-reversibility
  - cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence
---

The examples compute stationary laws explicitly: the two-state chain solves its
two stationarity equations and confirms uniqueness through the
irreducible-positive-recurrent theorem; a finite birth–death chain solves the
detailed-balance recursion; random walk on a finite undirected graph is checked
to be reversible with respect to the degree weights; and a doubly stochastic
transition matrix is shown to have the uniform law as a stationary law, with
irreducibility needed for uniqueness. The final two examples compute an
empirical state frequency through the chain ergodic theorem, and follow the
deterministic two-cycle whose Cesàro laws converge to $\pi$ even though its
ordinary-time transition probabilities alternate and never settle.

The counterexamples mark the boundaries of the positive results. Simple
symmetric random walk on $\mathbb Z$ is recurrent and has no stationary
probability, so it is null recurrent. The identity chain on two states with the
uniform law is stationary but not ergodic, and reducibility is exactly why the
ergodicity theorem does not apply. An invariant law need not be reversible: the
directed three-cycle has a uniform invariant law but fails detailed balance at
every edge. And positive recurrence without aperiodicity does not give
total-variation convergence: the directed three-cycle keeps its $n$-step law at
distance $2/3$ from $\pi$ while its Cesàro averages still converge.
