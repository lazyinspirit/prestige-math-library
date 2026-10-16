---
page: computational-problems-promises-and-cost-models
title: "Computational Problems, Promises, and Cost Models"
status: draft
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - the-polynomial-hierarchy-and-relativization
  - finite-probability-spaces-and-random-variables
  - reversible-computation-ancillas-and-coherent-oracles
  - registers-tensor-products-and-partial-trace
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - circuit-syntax-denotational-semantics-and-measurement
  - measurements-povms-and-instruments
  - effective-numberings-reductions-resources-and-randomness
items:
  - def-qa-expected-query-cost
  - def-qa-task-and-promise-domain
  - def-qa-input-encoding-and-size
  - def-qa-finite-branch-output-law
  - def-qa-promise-query-instance
  - def-qa-classical-query-algorithm
  - def-qa-quantum-query-algorithm
  - def-qa-bounded-error-promise-correctness
  - def-qa-classical-bit-cost
  - def-qa-exact-promise-correctness
  - def-qa-nonoracle-gate-cost
  - def-qa-classical-query-complexity
  - def-qa-quantum-query-complexity
  - thm-qa-promise-preserving-query-reduction-composition
examples: []
---

This page fixes the interfaces used to state promise-query algorithms and compare their resources. A decision task uses a disjoint yes/no promise pair; a search task requires a witness relation only on its declared domain. Input encoding and input length are explicit. The encoding labels the hidden oracle instance; the algorithms receive only the task's declared public data and access capabilities. At fixed public data, all other dependence on the hidden instance is through its oracle calls. Every promised query instance selects a total function on all addresses, and its standard quantum query is the coherent XOR action.

Quantum and classical algorithms may adapt their queries to the information they receive, but query counts are worst-case over promised inputs and execution branches. The local finite-branch law assigns weights to instrument outcomes and terminal computational-basis outputs, and proves normalization by finite induction. Finite-prefix expectations define expected query cost for sequential procedures without assigning a probability measure to an unbounded history space. Exact and bounded-error guarantees are per instance. Nonoracle quantum gates, preparation, measurements, classical bit transitions, and oracle calls occupy separate cost coordinates.

Promise-preserving reductions transfer correctness only when the source access contract supplies the target oracle or gives an exact, charged simulation of each target call, and an admissible protocol initializes the target solver and lifts its outputs. The $T$ and $sT$ query bounds require no additional source queries for this work; a version with $u$ initialization and $v$ lifting queries has the respective bounds $u+T+v$ and $u+sT+v$. For search reductions, the instance and witness maps must also be computable; target-input preparation and witness lifting are charged separately. For the standard XOR query, the inverse is the same ordinary query; controlled access remains an explicit capability. The companion page works through decision and search reductions, off-promise completions, and two circuits with equal query count and different gate cost.
