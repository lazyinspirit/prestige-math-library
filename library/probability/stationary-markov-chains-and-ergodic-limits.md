---
page: stationary-markov-chains-and-ergodic-limits
title: "Stationary Markov Chains and Ergodic Limits"
status: draft
items:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-every-finite-transition-matrix-has-a-stationary-distribution
  - def-positive-recurrent-and-null-recurrent-state
  - lem-return-cycle-occupation-measure-and-minimality
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-kac-return-time-formula-for-a-state
  - cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain
  - def-reversible-measure-and-detailed-balance
  - lem-detailed-balance-implies-invariance
  - thm-time-reversal-of-a-stationary-markov-chain
  - thm-kac-return-time-formula-for-a-positive-mass-set
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - lem-aperiodic-return-times-are-eventually-positive
  - thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains
  - thm-markov-chain-ergodic-theorem
  - thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
  - def-stationary-process-and-canonical-shift
  - thm-stationary-process-birkhoff-ergodic-limit
  - cor-stationary-irreducible-markov-shift-is-ergodic
  - rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages
examples: []
---

This page develops stationary laws for Markov chains and the limits that the
stationary law governs. An invariant probability is defined by the kernel
identity $\pi K=\pi$, and stationarity of the process is proved from it rather
than assumed: invariance of the initial law makes every finite-dimensional law
shift-invariant. Every transition matrix on a nonempty finite state space is
shown to have an invariant probability, so no irreducibility or aperiodicity is
needed for existence.

For irreducible countable chains the page separates recurrence into positive
and null recurrence, builds the return-cycle occupation measure, proves that
existence of an invariant probability is equivalent to positive recurrence, and
computes the stationary mass of a state as the reciprocal of its expected
return time. Two Kac formulas are given, one for a single state and one for a
set of positive stationary mass, which is proved by running the stationary
chain backwards. The positive-recurrence theorem supplies existence; the
statewise Kac formula gives uniqueness, which is recorded in a corollary. No
later item is used to justify an earlier one.

Reversibility is treated separately: detailed balance implies invariance, and a
stationary chain admits a reversed kernel that runs its stationary dynamics
backwards. The page then turns to limits. After total variation is defined and
identified with the half-$\ell^1$ sum on countable spaces, eventual positivity
of aperiodic return times yields convergence of the $n$-step laws to
$\pi$ for irreducible aperiodic positive-recurrent chains. Ordinary-time
convergence genuinely needs aperiodicity, and the companion page exhibits the
periodic obstruction, while the Cesàro and almost-sure ergodic theorems hold
without it. The final section places the Markov shift among the general ergodic
theorems: a stationary irreducible countable chain has an ergodic shift, and
Birkhoff's ergodic theorem applies to its path law. The closing remark records
exactly which of the three convergence statements needs aperiodicity and which
do not.

Choice is declared wherever it is used: the canonical chain law, the strong
Markov property, the stationary-marginal extension, the coupling and meeting
arguments, and the ergodic theorems all consume AC in this library, and each
item states the assumption and identifies the step that spends it.
