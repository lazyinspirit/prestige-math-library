---
id: def-qc-register-and-computational-basis
kind: definition
title: "Finite registers and their ordered computational bases"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-real-and-complex-inner-product-space
  - def-dimension
  - def-function-space
  - lem-standard-basis-of-f-n
  - prop-standard-coordinate-inner-products
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-commutative-ring-module-structure-on-a-tensor-product
  - cor-finite-iterated-tensor-products-represent-multilinear-maps
justified_by:
  - thm-qc-computational-basis-orthonormal
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
verification:
  precheck: n/a
---

## Definition

For an integer $d\ge 1$, the $d$-level register is the complex inner-product
space $Q_d=\mathbb C^d$ with the standard pairing
$\langle z,w\rangle_{\rm root}=\sum_{j<d}z_j\overline{w_j}$, linear in the
first argument as in [[def-real-and-complex-inner-product-space]] and
[[prop-standard-coordinate-inner-products]]. Its **computational basis** is the
ordered standard basis $(e_0,\ldots,e_{d-1})$ of [[lem-standard-basis-of-f-n]].
The register's alphabet is the ordered set $\{0,\ldots,d-1\}$.

For $n\ge0$, the $n$-qubit register is the ordered tensor product over
$\mathbb C$ of $n$ copies of $Q_2$. Here $\otimes_{\mathbb C}$ is the algebraic
module tensor product ([[def-tensor-product-of-modules-by-generators-and-relations]]),
with its complex-module structure and finite iterated/empty-product conventions
from [[thm-commutative-ring-module-structure-on-a-tensor-product]] and
[[cor-finite-iterated-tensor-products-represent-multilinear-maps]]. The tuple of
bit positions is ordered lexicographically, with the first wire as the most
significant position; the product-basis theorem below establishes the
corresponding elementary tensors as a basis. For $n=0$, the empty tensor
product is $\mathbb C$ with basis $\{1\}$. This one-dimensional trivial
register is distinct from the zero vector space $\mathbb C^0$. By definition a
register has positive dimension; a zero-dimensional space may still occur as a
factor in the more general tensor-space construction below.

