---
page: misspecified-posterior-consistency-examples
title: "Posterior consistency at a KL projection — Examples"
status: draft
items: []
examples:
  - ex-unique-kl-projection-finite-model
  - ex-nonunique-kl-projection-set
  - ex-distant-alternatives-without-uniform-tests
  - ex-likelihood-tilt-can-have-mass-below-one
  - ex-likelihood-tilt-can-have-mass-above-one
  - cex-weak-tilted-tests-do-not-imply-almost-sure-consistency
---

## Objective

These examples calculate a unique and a nonunique KL projection, show that
parameter-distant alternatives can defeat uniform testability even when
every KL neighborhood has positive prior mass, and compute finite likelihood
tilts whose total masses lie below and above one. The examples keep posterior
concentration on the whole minimizer set distinct from selection of one
parameter label.

The final counterexample has a unique finite KL minimizer, positive prior
mass at it, and uniformly weakly consistent tests against sigma-finite
likelihood tilts, yet posterior mass outside its discrete neighborhood has
almost-sure limes superior one. It distinguishes weak expected test errors
from the sufficient almost-sure type-I and exponential type-II interface.
