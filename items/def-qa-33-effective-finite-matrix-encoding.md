---
id: def-qa-33-effective-finite-matrix-encoding
kind: definition
title: Effective finite matrix encodings for local Hamiltonians
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-effective-binary-encoding-and-decoder
  - def-deterministic-one-tape-turing-machine
  - def-partial-function-computed-by-a-machine
  - def-worst-case-time-and-space-complexity
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §2, local matrix encodings, PDF pp. 3–4
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.2, PDF pp. 116–118
---

## Definition

A finite-dimensional complex matrix input of dimension $d$ is **effectively encoded** if its complete binary description specifies $d$ and conforms to one fixed deterministic entry-approximation machine. Given the description, an entry index, and unary precision request $1^p$, that machine returns rational real and imaginary parts within $2^{-p}$ of the exact entry in time bounded by one fixed polynomial in the total description length plus $p$, uniformly over all valid encodings. Rational entries use their exact binary numerator and denominator; algebraic entries use a finite encoding compatible with this same evaluator and bound. A **uniform matrix family** has one fixed deterministic algorithm which, given the unary family index $1^n$ and any explicitly encoded family parameters, outputs the complete description of that member in time bounded by one fixed polynomial in $n$ plus the parameter length, uniformly over all valid indices and parameters. Hermiticity, dimensions, and norm bounds are promises on the exact matrices, not conclusions inferred from a finite approximation.

This interface includes finite output size and all approximation bit costs. It does not supply a matrix oracle, exact comparisons on arbitrary computable reals, or a free unitary implementation.
