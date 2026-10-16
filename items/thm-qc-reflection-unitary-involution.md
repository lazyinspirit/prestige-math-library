---
id: thm-qc-reflection-unitary-involution
kind: theorem
title: Projector Reflections Are Hermitian Unitary Involutions
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-reflection
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-qc-controlled-unitary-access
  - def-qc-pauli-matrices
  - prop-adjoint-algebra
  - thm-finite-dimensional-isometry-characterisations
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
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
dependency_level: 9
---

## Statement

Let $H$ be a finite-dimensional complex-inner-product space and let $\Pi$ be an orthogonal projection. The operators $R_\Pi=2\Pi-I$ and $S_\Pi=I-2\Pi$ are self-adjoint unitary involutions, with $R_\Pi=-S_\Pi$. On $\operatorname{ran}\Pi$ they act as $+I$ and $-I$, respectively; on $\ker\Pi$ they act as $-I$ and $+I$. In control-first order,

$$C(S_\Pi)=(Z_C)C(R_\Pi),\qquad Z_C:=\operatorname{diag}(I_H,-I_H)=Z\otimes I_H.$$

## Facts & Assumptions

**Given:** The finite-dimensional complex-inner-product space and orthogonal projection in the Statement.

[L1] [[def-qc-reflection]] fixes $R_\Pi=2\Pi-I$ and $S_\Pi=I-2\Pi=-R_\Pi$, and requires explicit control access. Its carrier is present in this batch.

[L2] [[def-qc-controlled-unitary-access]] defines the control-first block operator $C(U)=\operatorname{diag}(I_H,U)$. Its carrier is present in this batch.

[L3] [[def-qc-pauli-matrices]] defines the exact control-$Z$ matrix. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft.

[F1] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: an orthogonal projection satisfies $\Pi^*=\Pi$ and $\Pi^2=\Pi$, and its range is orthogonal to its kernel.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] defines the adjoint by $\langle Tv,w\rangle=\langle v,T^*w\rangle$.

[F3] [[prop-adjoint-algebra]]: adjoints are conjugate-linear in scalars, preserve sums, and reverse products.

[F4] [[thm-finite-dimensional-isometry-characterisations]]: for an endomorphism of a finite-dimensional inner-product space, $T^*T=I$ implies that $T$ is an invertible isometry and $TT^*=I$.

## Proof

1.1 By [F1], $\Pi^*=\Pi$ and $\Pi^2=\Pi$. The adjoint rules [F2] and [F3] give $R_\Pi^*=2\Pi-I=R_\Pi$ and $S_\Pi^*=I-2\Pi=S_\Pi$. [given, F1, F2, F3]

2.1 Expanding with $\Pi^2=\Pi$ gives $R_\Pi^2=4\Pi^2-4\Pi+I=I$ and $S_\Pi^2=I-4\Pi+4\Pi^2=I$, and the definitions give $R_\Pi=-S_\Pi$. Hence $R_\Pi^*R_\Pi=S_\Pi^*S_\Pi=I$, so both are unitary by [F4]. [step 1.1, F1, F4, algebra]

3.1 If $x=\Pi y\in\operatorname{ran}\Pi$, then $\Pi x=\Pi^2y=x$, so $R_\Pi x=x$ and $S_\Pi x=-x$. If $x\in\ker\Pi$, then $\Pi x=0$, so $R_\Pi x=-x$ and $S_\Pi x=x$. Every $v$ splits as $\Pi v+(I-\Pi)v$ with the first term in the range and the second in the kernel; [F1] says these subspaces are orthogonal. [given, F1, step 2.1, algebra]

4.1 By [L2], $C(S_\Pi)=\operatorname{diag}(I_H,S_\Pi)=\operatorname{diag}(I_H,-R_\Pi)$. In the declared control-first order, $Z_C=\operatorname{diag}(I_H,-I_H)$, so $Z_CC(R_\Pi)=\operatorname{diag}(I_H,-I_H)\operatorname{diag}(I_H,R_\Pi)=\operatorname{diag}(I_H,-R_\Pi)=C(S_\Pi)$. [L1, L2, L3, step 2.1, step 3.1, algebra] ∎
