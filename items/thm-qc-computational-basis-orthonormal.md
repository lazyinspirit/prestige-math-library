---
id: thm-qc-computational-basis-orthonormal
kind: theorem
title: "The computational basis is orthonormal"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-register-and-computational-basis
  - prop-standard-coordinate-inner-products
  - lem-standard-basis-of-f-n
justified_by: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For every $d\ge1$, the ordered computational basis $(e_0,\ldots,e_{d-1})$ of
the register $Q_d$ from [[def-qc-register-and-computational-basis]] is an
orthonormal basis for its declared inner product. Separately, the one-dimensional
zero-qubit register has the basis $\{1\}$ by definition.

## Facts & Assumptions

**Given:** A positive integer $d$, the coordinate space $\mathbb C^d$, and its standard pairing.

[F1] The standard pairing on $\mathbb C^d$ is $\langle z,w\rangle_{\rm root}=\sum_{r<d}z_r\overline{w_r}$ and is linear in the first argument ([[prop-standard-coordinate-inner-products]]).

[F2] The standard coordinate vectors form an ordered basis of $\mathbb C^d$, including the empty basis for $\mathbb C^0$ ([[lem-standard-basis-of-f-n]]).

[F3] The register $Q_d$ uses this ordered standard basis and this pairing. Separately, the zero-qubit register is the empty tensor product $\mathbb C$ with basis $\{1\}$, distinct from $\mathbb C^0$ ([[def-qc-register-and-computational-basis]]).

## Proof

1.1 For $j,k<d$, the coordinate formula in [F1] gives $\langle e_j,e_k\rangle_{\rm root}=\sum_{r<d}\delta_{rj}\delta_{rk}$, which equals $1$ when $j=k$ and $0$ when $j\ne k$. Thus the listed vectors are orthonormal. [given, F1, F3, algebra]

2.1 By [F2] the same vectors form a basis, so they are an orthonormal basis of $Q_d$. [step 1.1, F2, F3]

3.1 By [F3], the zero-qubit register is the empty tensor product $\mathbb C$ with basis $\{1\}$, distinct from the zero-dimensional coordinate space $\mathbb C^0$. [F3] ∎
