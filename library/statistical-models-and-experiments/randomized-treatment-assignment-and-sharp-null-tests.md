---
page: randomized-treatment-assignment-and-sharp-null-tests
title: "Assignment randomization and sharp-null tests"
status: published
items:
  - lem-finite-weighted-upper-tail-pvalues-and-randomized-ties
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - def-finite-population-average-treatment-effect-and-weak-null
  - thm-fisher-sharp-null-randomization-pvalues-are-valid
examples: []
---

This page treats the finite assignment law as the source of probability while
experimental units and their potential-outcome schedule remain fixed. The
Fisher sharp null makes each unit's response imputable under every allowed
assignment. A finite weighted-rank argument proves validity for the actual
assignment probabilities, including unequal weights; an independent uniform
randomizer fills tied score masses to produce an exactly uniform p-value.
Two-sided orderings are fixed in advance by comparing an absolute score to a
declared null center. The result is design-based and does not assert a
Gaussian response law or validity under the weak null
[[def-finite-population-average-treatment-effect-and-weak-null]].
