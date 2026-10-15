---
page: state-space-filtering-and-predictive-laws-examples
title: State-space models and exact Bayesian filtering — Examples
status: published
items: []
examples:
  - ex-finite-hidden-markov-filtering-and-smoothing
  - ex-scalar-gaussian-state-space-filter
  - ex-impossible-observation-zero-evidence-fiber
---

## Overview

The finite hidden Markov example computes two filtering steps and a smoothed
marginal by exact finite sums. The scalar Gaussian example derives the
prediction and posterior directly by convolution and completing the square.
The impossible-observation example shows why a zero-evidence history cannot
be normalized and why a conditional law records only a filler on that
observation-null fiber. These cases illustrate exact model calculations, not
finite-particle algorithms or empirical guarantees.
