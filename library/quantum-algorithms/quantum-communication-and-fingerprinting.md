---
page: quantum-communication-and-fingerprinting
title: Quantum Communication and Fingerprinting
status: draft
items:
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-qa-35-log-tangent-bound
  - lem-qa-35-kl-event-separation
  - lem-qa-35-smp-prior-message-decomposition
  - lem-qa-35-smp-entropy-drop
  - def-qa-35-swap-test-effect
  - lem-qa-35-identity-matrix-packing
  - lem-qa-35-trace-norm-tensor-density-identity
  - thm-qa-35-swap-test-measurement-effect
  - def-qa-35-finite-communication-protocol
  - def-qa-35-equality-promise
  - def-qa-35-code-fingerprint-state
  - lem-qa-35-private-coin-error-reduction
  - thm-qa-35-deterministic-smp-equality-lower-bound
  - thm-qa-35-quantum-fingerprint-message-lower-bound
  - lem-qa-35-random-code-existence-nonuniform
  - thm-qa-35-code-fingerprint-state-properties
  - thm-qa-35-private-coin-equality-lower-bound
  - alg-qa-35-swap-test-fingerprint
  - rem-qa-35-private-coin-lower-bound-unresolved
  - thm-qa-35-fingerprint-correctness-and-cost
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - measurements-povms-and-instruments
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - the-polynomial-hierarchy-and-relativization
  - registers-tensor-products-and-partial-trace
  - trace-distance-fidelity-and-information-limits
  - reversible-computation-ancillas-and-coherent-oracles
  - finite-probability-spaces-and-random-variables
  - randomized-complexity-and-amplification
---

This page develops finite simultaneous-message protocols, their resource declarations, and equality fingerprints. It uses [[uniform-circuit-families-promise-problems-and-complexity]] for promise and circuit context, [[pure-and-mixed-states-ensembles-and-schmidt-decomposition]] for state terminology, [[measurements-povms-and-instruments]] for outcome laws, [[finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces]] for operators and norms, [[the-polynomial-hierarchy-and-relativization]] as the assigned complexity context, [[registers-tensor-products-and-partial-trace]] for register order, [[trace-distance-fidelity-and-information-limits]] for distinguishability, [[reversible-computation-ancillas-and-coherent-oracles]] for Fredkin gates, [[finite-probability-spaces-and-random-variables]] for finite probability, and [[randomized-complexity-and-amplification]] for repeated trials. The local proofs state all communication models and shared resources explicitly. Quantum fingerprints use no shared resource; the quantum message lower bound assumes neither shared entanglement nor shared randomness. The private-coin lower bound is proved by a finite entropy and matrix-packing argument. Random-code existence supplies only a nonuniform codebook; an efficient uniform protocol requires a separately supplied code construction. Local preparation and referee gate costs remain separate from transmitted qubits. No physical postulate or choice axiom is used.
