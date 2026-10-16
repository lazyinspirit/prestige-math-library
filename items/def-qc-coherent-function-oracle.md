---
id: def-qc-coherent-function-oracle
kind: definition
title: "Coherent XOR function oracle"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - def-qc-elementary-circuit-resources
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-controlled-unitary-access
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by:
  - thm-qc-reversible-xor-oracle-unitary
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, equation (5.27), printed p.15: the reversible XOR embedding."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.4, printed p.17: the XOR oracle and its query convention."
---

## Definition

Let $n,m\ge0$ and let $f:\{0,1\}^n\to\{0,1\}^m$ be a total Boolean function on ordered bit strings. Its coherent XOR oracle is the linear extension of
$$
O_f|x,y\rangle=|x,y\oplus f(x)\rangle
$$
on the ordered input and target computational basis, where XOR is componentwise. The declared access contract states how many invocations count as queries and whether a controlled invocation is supplied. A query to this declared black box is counted separately from elementary gate size, depth, and width.

If $f$ is supplied instead by an explicit Boolean circuit, implementing $O_f$ means compiling that circuit and paying its reversible elementary-gate and workspace costs; the function description alone is not a free query. For this XOR oracle, its inverse is the same map, as proved in [[thm-qc-reversible-xor-oracle-unitary]]. Controlled access remains a separate capability unless the contract explicitly provides it.

