---
id: thm-qc-unit-vector-projector-is-density
kind: theorem
title: A unit-vector outer product is a density operator
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-density-operator
  - def-qc-dirac-notation-conversion
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-non-negative-and-positive-operator
  - def-trace-of-an-endomorphism
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-bessel-inequality-and-finite-parseval-identity
justified_by: []
proof_strategy: direct
axiom_use: "None; only a finite orthonormal basis and Parseval's identity are used."
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
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space with the root pairing linear in its first argument, and let $u\in H$ satisfy $\|u\|=1$. Define $P_u:=|u\rangle\langle u|$ by the root-linear-first Dirac convention. Then $P_u$ is self-adjoint and idempotent, has one-dimensional range, is non-negative, and has trace one. In particular, $P_u$ is a density operator.

## Facts & Assumptions

**Given:** The finite-dimensional complex inner-product space $H$ and a unit vector $u\in H$.

[F1] [[def-real-and-complex-inner-product-space]]: the root pairing is linear in the first argument, conjugate-linear in the second, and conjugate-symmetric.

[F2] [[def-inner-product-norm]]: $\|u\|^2=\langle u,u\rangle$.

[F3] [[def-qc-dirac-notation-conversion]]: $P_u z=\langle z,u\rangle_{\rm root}u$ for every $z\in H$.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $T^*$ satisfies $\langle Tz,w\rangle=\langle z,T^*w\rangle$.

[F5] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear endomorphism of $H$ has a unique adjoint.

[F6] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form on every vector.

[F7] [[def-trace-of-an-endomorphism]]: trace is the sum of the diagonal entries in any basis.

[F8] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F9] [[thm-bessel-inequality-and-finite-parseval-identity]]: for an orthonormal basis $(e_j)$, $\sum_j|\langle v,e_j\rangle|^2=\|v\|^2$.

[L1] [[def-qc-density-operator]]: a density operator is a non-negative endomorphism of trace one on a nonzero finite-dimensional space.

## Proof

1.1 For every $z\in H$, [F2] and [F3] give $P_u^2z=\langle z,u\rangle\langle u,u\rangle u=\langle z,u\rangle u=P_uz$, since $\langle u,u\rangle=\|u\|^2=1$. Thus $P_u$ is idempotent. [given, F2, F3, algebra]

1.2 For all $z,w\in H$, [F1] and [F3] give $\langle P_uz,w\rangle=\langle z,u\rangle\langle u,w\rangle=\langle z,\langle w,u\rangle u\rangle=\langle z,P_uw\rangle$. The outer product is linear by [F3], so [F4] and [F5] imply $P_u^*=P_u$. [given, F1, F3, F4, F5, algebra]

2.1 The image of $P_u$ lies in $\mathbb C u$, and [F2] and [F3] give $P_uu=\langle u,u\rangle u=u$, so its range is exactly the one-dimensional span of $u$. Also [F1] and [F3] give $\langle P_uz,z\rangle=\langle z,u\rangle\langle u,z\rangle=|\langle z,u\rangle|^2\ge0$. With self-adjointness from step 1.2, [F6] makes $P_u$ non-negative. [given, F1, F2, F3, F6, step 1.2, algebra]

3.1 Choose an orthonormal basis $(e_j)_{j<n}$ of $H$ using [F8]. By [F3] and [F7], $\operatorname{tr}(P_u)=\sum_{j<n}\langle P_ue_j,e_j\rangle=\sum_{j<n}|\langle e_j,u\rangle|^2=\|u\|^2=1$, where [F9] gives the Parseval equality. Thus [L1] makes $P_u$ a density operator, using non-negativity from step 2.1. The basis is finite, so no choice axiom is used. [given, F2, F3, F7, F8, F9, L1, step 2.1, choose, algebra] ∎
