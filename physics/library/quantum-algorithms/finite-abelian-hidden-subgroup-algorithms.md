---
page: finite-abelian-hidden-subgroup-algorithms
title: Finite Abelian Hidden-Subgroup Algorithms
status: published
items:
  - rem-qa-nonabelian-hidden-subgroup-scope
  - lem-qa-annihilator-restriction-cut
  - lem-qa-common-kernel-repetition-bound
  - def-qa-finite-abelian-hidden-subgroup-problem
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - lem-qa-hidden-coset-state-law
  - alg-qa-finite-abelian-hidden-subgroup-reconstruction
  - thm-qa-finite-abelian-hidden-subgroup-sample-law
  - thm-qa-finite-abelian-hidden-subgroup-reconstruction-success
  - thm-qa-finite-abelian-hidden-subgroup-cost
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - finite-abelian-fourier-analysis
  - effective-numberings-reductions-resources-and-randomness
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - reversible-computation-ancillas-and-coherent-oracles
  - registers-tensor-products-and-partial-trace
  - measurements-povms-and-instruments
  - circuit-syntax-denotational-semantics-and-measurement
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
---

This page develops the finite abelian hidden-subgroup problem from an explicitly encoded hiding oracle through Fourier sampling and common-kernel recovery. It uses [[uniform-circuit-families-promise-problems-and-complexity]] for promise-problem and circuit-family context, [[finite-abelian-fourier-analysis]] for characters and annihilators, [[effective-numberings-reductions-resources-and-randomness]] for resources and randomized algorithms, [[finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces]] for finite-dimensional state spaces, [[reversible-computation-ancillas-and-coherent-oracles]] for exact oracle access, [[registers-tensor-products-and-partial-trace]] for registers and discarding, [[measurements-povms-and-instruments]] for outcome probabilities, [[circuit-syntax-denotational-semantics-and-measurement]] for circuit meaning, and [[pure-and-mixed-states-ensembles-and-schmidt-decomposition]] for state mixtures. Its recovery output is an implicit list of character constraints; generator extraction is outside the claim. The procedure assumes exact supplied state-preparation, oracle, and product-QFT circuits. Query counts, gate counts, and classical output costs remain separate, and nonabelian instances are outside the theorem scope.
