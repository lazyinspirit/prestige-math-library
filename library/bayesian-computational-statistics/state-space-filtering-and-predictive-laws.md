---
page: state-space-filtering-and-predictive-laws
title: State-space models and exact Bayesian filtering
status: published
items:
  - def-state-space-filtering-laws
  - thm-state-space-filtering-and-smoothing-laws-exist
  - alg-recursive-bayesian-filter
  - thm-dominated-state-space-filtering-recursion
examples: []
---

## Overview

For a finite-horizon state-space model on standard-Borel state and observation
spaces, this page defines filtering, predictive, and full-path smoothing laws
as conditional kernels. AC supplies the finite-horizon model law and the
regular conditional distributions. When each observation kernel has a
jointly measurable density against a sigma-finite reference measure, the
recursive procedure first propagates the previous state law through the
transition kernel and then applies the dominated Bayes update. The theorem
proves that its outputs are conditional-law kernels. Evidence is normalized
only when it is finite and positive; zero or infinite fibers receive the
predictive law as a conditional-version filler and carry no pointwise posterior
interpretation. The results are finite-horizon conditional identities. They
make no particle approximation, convergence, or long-time stability claim.
