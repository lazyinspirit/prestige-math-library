---
page: quantum-signal-processing
title: Quantum Signal Processing
status: published
items: [lem-qa-23-polynomial-interval-sign-certificate, lem-qa-23-sturm-root-counting, lem-qa-23-exact-interval-boundedness-decision, alg-qa-23-polynomial-root-isolation, thm-qa-23-polynomial-root-isolation-correctness, alg-qa-23-bounded-height-numerical-roots, thm-qa-23-bounded-height-root-arithmetic-cost, def-qa-23-qsp-signal-sequence, alg-qa-23-certified-phase-approximation, def-qa-23-qsp-admissible-polynomial-pair, lem-qa-23-hermitian-signal-convention-conversion, lem-qa-23-phase-sequence-unitarity, lem-qa-23-positive-polynomial-complement-factorization, thm-qa-23-certified-phase-approximation-correctness, thm-qa-23-qsp-phase-factorization, thm-qa-23-real-polynomial-completion, lem-qa-23-qsp-completion-peel-arithmetic-cost, alg-qa-23-qsp-phase-synthesis, thm-qa-23-qsp-phase-implementation-error, thm-qa-23-qsp-query-cost, thm-qa-23-qsp-synthesis-correctness]
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - hilbert-space-geometry-and-riesz-representation
  - controlled-gates-phase-and-entanglement
  - circuit-syntax-denotational-semantics-and-measurement
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - polynomial-rings-and-roots
  - the-complex-exponential-and-eulers-formula
  - symmetric-polynomials
  - sine-cosine-and-the-definition-of-pi
  - further-trigonometric-identities-and-inverses
  - the-riemann-integral
---

The page fixes the Hermitian-reflection signal matrix, ordered phase product, coefficient-conjugation convention, and controlled scalar convention. It proves the equivalence between admissible polynomial pairs and phase sequences, completes bounded real parity polynomials, and gives a constructive synthesis specification with exact validation, phase extraction, certified numerical approximation, and separate query and implementation costs.

The local prerequisite route supplies Sturm counting, interval sign certification, and exact algebraic root isolation needed by the critical-point validator and complementary-pair construction. The complete modes retain finite root isolation. The efficient numerical mode supplies exact multiplicity/Sturm input validation, bounded-height rational rounding and bounded-grid roots, counted quadratic tower completion and peeling, and buffered certified atan2. It proves polynomial arithmetic count in degree and logarithmic precision in an explicitly charged ideal exact-algebraic field/order tower/DAG model; coefficient encoding/access and implementation bit costs remain separate. No finite-basis phase compilation or polynomial bit-time guarantee is inferred.

An optional supplied-complement branch accepts real coefficient parameters through an explicitly charged ideal-real field/equality/order interface. It validates the full complement identity before use, then constructs positive half-angle root descriptors and applies the same buffered phase loop without algebraic root isolation of those parameters. Its finite termination is conditional on that interface; it does not extend the bare-target arithmetic bound to parameter-oracle implementation.
