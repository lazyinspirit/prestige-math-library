---
page: tau-leaping-and-reaction-diffusion-model-error-examples
title: Tau Leaping and Reaction Diffusion Model Error — Examples
status: draft
items: []
examples:
  - ex-minimum-intensity-coupling-reduces-one-step-variance
  - ex-poisson-tau-leap-negative-population-pure-death
  - ex-chemical-langevin-near-empty-poisson-birth
  - ex-stiff-reversible-explicit-leap-mean-amplification
  - ex-binomial-guard-prevents-invalid-counts-but-changes-noise
---

The examples show a pure-death Poisson leap with a positive probability of a negative population, a finite-capacity binomial guard with altered noise, and a reversible system whose explicit leap has an unstable mean amplification factor for large steps. A one-channel shared-minimum count example compares coupled and independent correction variances. The immigration marginal example separates nonnegative Poisson support from Gaussian CLE support near an empty population; its unbounded cubic payoff calculation is explicitly outside the general bounded-payoff theorem.
