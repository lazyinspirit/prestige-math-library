---
id: lem-qa-17-invariant-eigenplane
kind: lemma
title: "Szegedy walk invariant subspaces from discriminant eigenvectors"
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
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-linear-combination-and-span
  - def-qa-17-finite-stochastic-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For any eigenpair $Dv=\lambda v$ with $v\ne0$ and $\lambda\in[-1,1]$, put $a:=Tv$ and $b:=STv$. Then $\operatorname{span}\{a,b\}$ is invariant under $U$, and

$$U a=b,\qquad U b=-a+2\lambda b.$$

All eigenvalues of $D$ satisfy the displayed interval hypothesis by [[thm-qa-17-discriminant-self-adjoint]]. If $\lambda=1$ or $\lambda=-1$, then $b=\lambda a$ and the span is one-dimensional. If $-1<\lambda<1$, the two vectors are linearly independent and the invariant subspace is two-dimensional.

## Facts & Assumptions

**Given:** A finite row-stochastic kernel, a nonzero vector $v$ with $Dv=\lambda v$ and real $\lambda\in[-1,1]$, and $T,S,D,U,\Pi$ as defined in [[def-qa-17-szegedy-transition-isometry]] and [[def-qa-17-szegedy-walk]].

[F1] [[thm-qa-17-discriminant-self-adjoint]]: $D=T^*ST$ is self-adjoint with $\|D\|\le1$, and $T^*T=I$.

[F2] [[def-qa-17-szegedy-walk]]: $U=S(2\Pi-I)$ and $\Pi=TT^*$.

[F3] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: $Dv=\lambda v$ is an eigenpair when $v\ne0$.

[F4] [[def-linear-combination-and-span]]: $\operatorname{span}\{a,b\}$ consists of all linear combinations of $a,b$.

[F5] [[def-qa-17-szegedy-transition-isometry]]: the ordered-product basis is orthonormal and $S|x,y\rangle=|y,x\rangle$.

## Proof

1.1 Since $\Pi Tv=Tv$, [F2] gives $Ua=SR_A Tv=STv=b$. [F1, F2, given]

2.1 The adjoint identity gives $\Pi b=TT^*STv=T(T^*ST)v=TDv=\lambda Tv=\lambda a$. Hence $Ub=S(2\Pi-I)STv=S(2\lambda a-b)=2\lambda b-a$, because [F5] gives $S^2=I$. [F1, F2, F5, step 1.1, algebra]

3.1 Steps 1.1–2.1 and [F4] show the span is invariant. Since $T$ is an isometry by [F1], $\|a\|=\|v\|$. Write $Tv=\sum_{x,y}c_{xy}|x,y\rangle$ in the orthonormal product basis. By [F5], $S$ bijectively permutes that basis, so $\|b\|^2=\sum_{x,y}|c_{xy}|^2=\|Tv\|^2$ and $\|b\|=\|v\|$. The adjoint identity gives $\langle a,b\rangle=\langle v,Dv\rangle=\lambda\|v\|^2$, which is real. If $\lambda=\pm1$, expansion gives $\|b-\lambda a\|^2=0$, hence $b=\lambda a$. If $|\lambda|<1$ and $b=ca$, equality of norms gives $|c|=1$, while $\langle a,b\rangle=\overline c\|v\|^2=\lambda\|v\|^2$ gives $|c|=|\lambda|<1$, a contradiction; thus $a,b$ are independent. [F1, F2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
