---
page: coalgebras-counits-and-the-fundamental-coalgebra-theorem
title: "Coalgebras, Counits, and the Fundamental Coalgebra Theorem"
status: published
items:
  - def-hh-coalgebra-and-coalgebra-map
  - lem-hh-finite-spanning-list-contains-a-basis
  - lem-hh-counit-uniqueness-and-finite-sweedler-calculus
  - def-hh-subcoalgebras-coideals-and-quotient-coalgebras
  - lem-hh-finite-comatrix-coalgebra-exists
  - def-hh-group-like-and-primitive-elements
  - thm-hh-coalgebra-quotient-and-kernel-descent
  - thm-hh-fundamental-theorem-of-coalgebras
examples: []
---

Work over a field $k$ with algebraic tensor products. The associator and unit maps from [[tensor-coherence-and-algebraic-descent]] make the coalgebra equations equalities of linear maps with fixed tensor types. This page defines coalgebras and coalgebra maps, treats counit uniqueness and finite Sweedler contractions, and defines subcoalgebras, coideals, and quotient coalgebras.

The proof order is explicit. The choice-free [[lem-hh-finite-spanning-list-contains-a-basis]] supports finite-dimensional constructions. The [[lem-hh-finite-comatrix-coalgebra-exists]] supplies concrete coalgebras. [[thm-hh-coalgebra-quotient-and-kernel-descent]] proves quotient descent, the kernel criterion, and closure under sums of subcoalgebras under AC, with the exact tensor-injection assumption inherited from HH-1. The [[thm-hh-fundamental-theorem-of-coalgebras]] then proves that every finite subset of a coalgebra lies in a finite-dimensional subcoalgebra. Its arbitrary-dimensional proof uses AC through the actual HH-1 coefficient-separation and tensor-kernel suppliers; it does not assert global extension of coordinate functionals.

The companion [[coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples]] computes group-like and relative primitive elements, a comatrix quotient, and the failure caused by omitting the counit condition.
