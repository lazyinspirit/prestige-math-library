---
page: tau-leaping-and-reaction-diffusion-model-error
title: Tau Leaping and Reaction Diffusion Model Error
status: draft
items:
  - lem-shared-minimum-poisson-count-coupling
  - alg-explicit-poisson-tau-leaping
  - def-density-scaled-jump-and-chemical-langevin-generators
  - lem-bounded-rate-reaction-generator-dynkin-identity
  - lem-poisson-tau-leap-moment-and-covariance-identities
  - lem-poisson-tau-leap-one-step-weak-defect
  - thm-density-scaled-chemical-langevin-model-error
  - thm-minimum-intensity-tau-leap-level-variance
  - thm-poisson-tau-leap-weak-order-one-with-exit-bound
  - alg-critical-reaction-binomial-guarded-tau-leaping
  - cor-mlmc-complexity-for-poisson-tau-leaping
examples: []
---

Explicit Poisson tau leaping freezes each channel propensity over a step and draws independent Poisson counts. The local moment and one-step weak-defect results lead to a bounded finite-state weak-order-one theorem with the probability of leaving the physical state set stated separately. The theorem does not cover unbounded rates or erase the invalid-state warning.

For adjacent time levels, a shared-minimum Poisson count with independent rate-difference residuals gives the stated marginal laws. Under bounded propensities on the integer lattice, the proof propagates the coupled state discrepancy and obtains an order-one correction variance. T16's exact event-time reaction-path coupling is a distinct procedure; the fixed-step count coupling is proved locally here.

The density-scaled model uses jump size $\nu/V$ at rate $Va(x)$. A stopped finite-state Dynkin identity and a third-order generator expansion give an $O(V^{-2})$ jump-versus-CLE weak term under a separate smooth backward-solution assumption. Exit probabilities are an additional term, so this is model error rather than time-discretization error.

The critical-reaction SSA/binomial method has a finite step budget and explicit infeasible or inconclusive statuses. Its binomial count protects the sequential state update, changes the Poisson variance, and receives no Poisson weak-order or MLMC guarantee.
