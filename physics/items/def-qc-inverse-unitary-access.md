---
id: def-qc-inverse-unitary-access
kind: definition
title: Inverse Unitary Access
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-unitary-access
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - thm-finite-dimensional-isometry-characterisations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
dependency_level: 7
---

## Definition

For a finite-dimensional unitary $U$, **inverse access** is the explicitly granted operation $U^\dagger=U^{-1}$. Its availability and query or gate charge are recorded separately from forward access, including any controlled access in [[def-qc-controlled-unitary-access]]. For a chronological sequence of length $k\ge0$ that applies $U_1$ first and $U_k$ last, the total operator is $W=U_k\cdots U_1$ when $k>0$ and $W=I_H$ when $k=0$. For $k>0$, the inverse sequence applies $U_k^\dagger$ first, then $U_{k-1}^\dagger$, down to $U_1^\dagger$; for $k=0$ it is the empty sequence.

## Facts & Assumptions

**Given:** Finite-dimensional unitaries $U_1,\ldots,U_k$ and an explicit access model for the operations named in the Definition.

[L1] [[def-qc-controlled-unitary-access]] fixes the target unitary whose forward and controlled capabilities are explicitly declared. Its carrier is present in this batch.

[F1] [[thm-finite-dimensional-isometry-characterisations]]: for a finite-dimensional endomorphism, preserving norms implies $U^*U=UU^*=I$ and $U^{-1}=U^*$.

[F2] [[prop-adjoint-algebra]]: for composable finite-dimensional maps, $(ST)^*=T^*S^*$.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint is characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$.

## Verification

1.1 Each $U_j$ is an invertible isometry by the unitary convention in [L1] and [F1]. Thus its adjoint exists in finite dimension and is its inverse, so the inverse call specified in the Definition has the stated mathematical meaning. [given, L1, F1, F3]

1.2 For $k>0$, repeated application of [F2] gives $(U_k\cdots U_1)^*=U_1^*\cdots U_k^*$. Acting on a vector from right to left, this applies $U_k^*$ first and $U_1^*$ last, exactly reversing the original chronology. [given, F2, algebra]

1.3 For $k=0$, the specified total map is $I_H$ and its inverse is also $I_H$; there are no calls or operations in either sequence. This covers the empty-sequence endpoint without interpreting an undefined product. [given, algebra]

2.1 The matrix identity determines the inverse map but says nothing about whether the access model grants or charges its calls. The Definition therefore records inverse availability and cost explicitly instead of inferring either from forward access. [L1, step 1.2] ∎
