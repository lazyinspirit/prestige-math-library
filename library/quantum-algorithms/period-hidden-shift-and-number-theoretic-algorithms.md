---
page: period-hidden-shift-and-number-theoretic-algorithms
title: Period, Hidden-Shift, and Number-Theoretic Algorithms
status: draft
items:
  - alg-qa-euclidean-modular-inverse
  - rem-qa-number-theoretic-extension-scope
  - thm-qa-euclidean-modular-inverse-correctness-cost
  - lem-qa-dihedral-sieve-pair-combination
  - lem-qa-dihedral-coset-state-fourier-law
  - def-qa-finite-abelian-hidden-shift-problem
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - thm-qa-hidden-shift-generalized-dihedral-reduction
  - alg-qa-dihedral-hidden-subgroup-sieve
  - lem-qa-controlled-cyclic-multiplication-clean
  - lem-qa-cyclic-dlp-hidden-subgroup
  - thm-qa-dihedral-sieve-scope
  - lem-qa-cyclic-dlp-annihilator-equation
  - alg-qa-cyclic-group-power-evaluation
  - thm-qa-cyclic-group-power-evaluation-correctness
  - alg-qa-finite-cyclic-discrete-logarithm
  - thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost
examples: []
requires:
  - quantum-order-finding-and-rational-reconstruction
  - finite-abelian-hidden-subgroup-algorithms
  - divisibility-gcd-and-bezout
  - circuit-syntax-denotational-semantics-and-measurement
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - measurements-povms-and-instruments
  - registers-tensor-products-and-partial-trace
  - controlled-gates-phase-and-entanglement
  - reversible-computation-ancillas-and-coherent-oracles
  - the-structure-of-finite-abelian-groups
  - finite-abelian-fourier-analysis
  - uniform-circuit-families-promise-problems-and-complexity
---

This page treats finite cyclic discrete logarithm with explicit encodings and costed operation interfaces, the finite abelian hidden-shift promise and its generalized-dihedral left-coset reduction, and Kuperberg's power-of-two dihedral sieve. It supplies the modular-inverse recurrence, cyclic power evaluation, Fourier-sample equations, and the local shortened-final-width list-size and error analysis. Oracle queries, ideal gates, circuit compilation, classical bit operations, and workspace are kept as separate resources. The sieve is proved only for powers of two; arbitrary-order and arbitrary finite-abelian extensions, elliptic-curve group laws, and number-field/Pell algorithms remain outside its claims.
