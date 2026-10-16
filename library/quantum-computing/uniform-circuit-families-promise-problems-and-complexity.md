---
page: uniform-circuit-families-promise-problems-and-complexity
title: "Uniform Circuit Families, Promise Problems, and Complexity"
status: published
requires:
  - approximate-universality-and-solovay-kitaev
  - boolean-circuits-and-nonuniform-complexity
  - circuit-syntax-denotational-semantics-and-measurement
  - clifford-t-exact-and-approximate-synthesis
  - continuous-gate-universality-and-exact-synthesis
  - effective-numberings-reductions-resources-and-randomness
  - finite-probability-spaces-and-random-variables
  - formal-languages-encodings-and-decision-problems
  - hilbert-space-geometry-and-riesz-representation
  - inner-product-spaces-and-orthogonality
  - logarithmic-space-nl-and-reachability
  - measurements-povms-and-instruments
  - randomized-complexity-and-amplification
  - registers-tensor-products-and-partial-trace
  - reversible-computation-ancillas-and-coherent-oracles
  - the-polynomial-hierarchy-and-relativization
  - trace-distance-fidelity-and-information-limits
items:
  - def-qc-promise-computation-model
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
  - def-qc-quantum-acceptance-probability
  - lem-qc-acceptance-probability-phase-invariance
  - def-qc-bqp-promise-class
  - lem-qc-uniform-family-size-bound
  - def-qc-oracle-full-list-circuit-family
  - alg-qc-bounded-error-amplification
  - thm-qc-output-acceptance-law-normalizes
  - thm-qc-bounded-error-amplification-correct
  - thm-qc-bqp-error-robustness
examples: []
---

This page fixes full-list polynomial-time generation: one deterministic machine prints each complete circuit description from unary input length. It makes no indexed-gate conversion claim. A finite promise computation uses disjoint YES and NO sets, an ordered computational-basis input, zero-initialized auxiliary wires, a distinct ordered output tuple, and a total terminal predicate. No correctness requirement is imposed off the promise, and no intermediate measurement is part of the base model.

Acceptance sums over every unmeasured wire. The local proof identifies these weights with the normalized computational-basis POVM law on the named output register. The cost record separates full-description length, gate count, layered depth, total width, generator time, classical predicate time and space, named oracle queries, and approximate-task precision bits. When the computation interface declares an exact clean or dirty ancilla contract, its wire count is recorded separately; every inapplicable coordinate is marked not applicable rather than treated as zero.

The BQP interface uses exactly $H,T,T^\dagger,\mathrm{CNOT}$ with entries in $\mathbb Q(i,\sqrt2)$, acceptance at least $2/3$ on YES and at most $1/3$ on NO, and no off-promise condition. The thresholds use [[thm-qc-output-acceptance-law-normalizes]], which identifies the finite output weights with a normalized acceptance-event law. It asserts no BQP-versus-classical separation. Repetition amplification copies only a classical-basis input, evaluates independent terminal runs, and applies one exact rational threshold; the error and full-list resource bounds are proved separately. The argument does not clone arbitrary superpositions or use coherent amplitude amplification.
