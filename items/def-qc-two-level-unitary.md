---
id: def-qc-two-level-unitary
kind: definition
title: Two-Level Unitary
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-finite-dimensional-orthogonal-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-16}}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---
## Definition

Let a finite ordered register have an orthonormal computational basis $(|z\rangle)_{z\in\mathcal X}$, using the root convention that the inner product is linear in its first argument. For distinct labels $x,y\in\mathcal X$, choose $V\in U(2)$, where $U(2)=\{M\in M_2(\mathbb C):M^*M=MM^*=I_2\}$. The **two-level unitary** $T_{x,y}(V)$ acts by the matrix $V$ in the ordered basis $(|x\rangle,|y\rangle)$ and acts as the identity on $\operatorname{span}\{|x\rangle,|y\rangle\}^{\perp}$. Its action is exact matrix equality: any scalar phase contained in $V$ is retained.

## Facts & Assumptions

**Given:** The finite-dimensional complex inner-product space, its ordered orthonormal computational basis, distinct labels $x,y$, and $V\in U(2)$.

[F1] [[thm-finite-dimensional-orthogonal-decomposition]]: a subspace $S$ of a finite-dimensional inner-product space has the orthogonal direct sum decomposition $H=S\oplus S^\perp$.

[F2] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary endomorphism is an invertible linear isometry.

[F3] [[thm-qc-computational-basis-orthonormal]]: the computational basis vectors of the finite ordered register form an orthonormal basis.

## Verification


1.1 Put $S=\operatorname{span}\{|x\rangle,|y\rangle\}$. By [F3], the selected pair is orthonormal. By [F1], $H=S\oplus S^\perp$, and relative to this sum the defined operator is $V\oplus I_{S^\perp}$. [given, F1, F3, algebra]

2.1 The direct sum preserves norms because $V$ is unitary on $S$ and the identity preserves norms on $S^\perp$. Its inverse is $V^*\oplus I_{S^\perp}$, so it is an invertible isometry and hence unitary by [F2]. The scalar phase in $V$ is part of this exact direct-sum matrix. [step 1.1, F2, algebra] ∎
