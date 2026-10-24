---
id: lem-qa-17-walk-reflection-unitarity
kind: lemma
title: "Szegedy reflections and walk operators are unitary"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-17-szegedy-walk
  - def-qa-17-szegedy-transition-isometry
  - thm-qa-17-discriminant-self-adjoint
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-self-adjoint-and-normal-endomorphism
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
  - def-qc-reflection
  - def-orthogonal-complement
  - def-qa-17-finite-stochastic-kernel
  - def-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §§18.2–18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For the projection $\Pi=TT^*$ onto $A=\operatorname{ran}(T)$, the operators $R_A=2\Pi-I$ and $S$ are self-adjoint involutions. Hence $U=SR_A$ and $W=U^2$ are unitary. On $A^\perp$, $\Pi=0$ and therefore $U=-S$.

## Facts & Assumptions

**Given:** The finite row-preparation isometry $T$, its adjoint, the swap $S$, and the definitions of $\Pi,R_A,U,W$ in [[def-qa-17-szegedy-transition-isometry]] and [[def-qa-17-szegedy-walk]].

[F1] [[thm-qa-17-discriminant-self-adjoint]]: $T^*T=I$, so $T$ is an isometry.

[F2] [[def-qa-17-szegedy-walk]]: $\Pi=TT^*$, $R_A=2\Pi-I$, and $U=SR_A$.

[F3] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: a self-adjoint idempotent is the orthogonal projection onto its image.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator is an invertible linear isometry on a finite-dimensional complex inner-product space.

[F5] [[def-inner-product-space]]: the inner product is positive definite and uses the root's linear-first convention.

[F6] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Au,v\rangle=\langle u,A^*v\rangle$ for an adjoint.

[F7] [[def-qa-17-szegedy-transition-isometry]]: $S|x,y\rangle=|y,x\rangle$ on the orthonormal product basis.

## Proof

1.1 From [F1], $\Pi^2=TT^*TT^*=T(T^*T)T^*=TT^*=\Pi$. For all $u,v$, [F6] and conjugate symmetry give $\langle\Pi u,v\rangle=\langle T^*u,T^*v\rangle=\langle u,\Pi v\rangle$, so $\Pi^*=\Pi$. By [F3], $\Pi$ is the orthogonal projection onto its image, which is $A=\operatorname{ran}(T)$ because it fixes every $Tv$. [F1, F2, F3, F6, algebra]

2.1 Since $\Pi^2=\Pi$ and $\Pi^*=\Pi$, $R_A^*=2\Pi^*-I=R_A$ and $R_A^2=4\Pi^2-4\Pi+I=I$. Thus $\lVert R_Aw\rVert^2=\langle R_Aw,R_Aw\rangle=\langle w,R_A^*R_Aw\rangle=\lVert w\rVert^2$ for every $w$. By [F7], $S$ permutes the orthonormal product basis by the transposition $(x,y)\mapsto(y,x)$, so its permutation matrix is its own inverse and adjoint: $S^2=I$ and $S^*=S$. It is therefore an invertible isometry and is unitary. [F2, F4, F5, F7, step 1.1, algebra]

3.1 If $w\in A^\perp$, then [F6] gives $\langle v,T^*w\rangle=\langle Tv,w\rangle=0$ for every $v$, so taking $v=T^*w$ and using positive definiteness [F5] gives $T^*w=0$ and $\Pi w=0$; hence $Uw=S(2\Pi-I)w=-Sw$. Both $S$ and $R_A$ are invertible norm-preserving maps by step 2.1, so $U=SR_A$ and $W=U^2$ are unitary. [F1, F2, F4, F5, F6, F7, step 2.1, algebra] ∎
