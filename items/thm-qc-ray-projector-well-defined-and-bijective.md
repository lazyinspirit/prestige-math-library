---
id: thm-qc-ray-projector-well-defined-and-bijective
kind: theorem
title: Ray-to-projector is well-defined and bijective
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: [def-qc-pure-state-and-ray, def-qc-dirac-notation-conversion, def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, def-trace-of-a-square-matrix, def-orthogonal-projection, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-real-and-complex-inner-product-space, def-dimension, def-rank-and-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For nonzero finite-dimensional complex-inner-product $H$, the map sending a ray $[u]$ to the rank-one projector $P_u=|u\rangle\langle u|$ of any unit representative is well-defined and bijective onto the rank-one orthogonal projections on $H$. Each $P_u$ is non-negative and has trace one.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$, the pure-state ray convention, and the root inner product linear in its first argument.

[F1] [[def-qc-pure-state-and-ray]]: a ray is the equivalence class of a nonzero vector under multiplication by a nonzero complex scalar; a pure state is such a ray represented by a unit vector.

[F2] [[def-qc-dirac-notation-conversion]]: the root inner product is linear in its first argument and $|u\rangle\langle u|$ acts by $z\mapsto\langle z,u\rangle u$.

[F3] [[def-orthogonal-projection]]: the orthogonal projection onto $W$ returns the $W$ component in $H=W\oplus W^\perp$; its residual is in $W^\perp$.

[F4] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form.

[F5] [[def-trace-of-an-endomorphism]] and [[def-trace-of-a-square-matrix]]: trace is the matrix trace in a basis, and matrix trace is the sum of diagonal entries.

[F6] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F7] [[def-rank-and-nullity]]: $\operatorname{rank}(P)=\dim(\operatorname{im}P)$; rank one means that the image is one-dimensional.

## Proof


1.1 Let $u$ be unit and suppose $v=\alpha u$ is another unit representative of the same ray. Then $1=\|v\|^2=|\alpha|^2\|u\|^2$, so $|\alpha|=1$. By [F2], $P_vz=\langle z,\alpha u\rangle\alpha u=\overline\alpha\alpha\langle z,u\rangle u=P_uz$ for every $z$. Thus the projector does not depend on the unit representative. [given, F1, F2, algebra]

1.2 By [F2], $P_u^2z=\langle z,u\rangle\langle u,u\rangle u=P_uz$. Its range is $\mathbb C u$, a one-dimensional subspace, so [F7] gives rank one. For every $z$, $P_uz\in\mathbb C u$ and $$\langle z-P_uz,u\rangle=\langle z,u\rangle-\langle z,u\rangle\langle u,u\rangle=0,$$ so the residual is in $(\mathbb C u)^\perp$; by the residual characterization in [F3], $P_u$ is the orthogonal projection onto $\mathbb C u$. Also, for all $z,w$, $\langle P_uz,w\rangle=\langle z,u\rangle\langle u,w\rangle=\langle z,P_uw\rangle$ and $\langle P_uz,z\rangle=|\langle z,u\rangle|^2\ge0$. Hence $P_u$ is non-negative by [F4]. Choose an orthonormal basis $(e_j)$ by [F6] and write $u=\sum_jc_je_j$; then $\langle P_ue_j,e_j\rangle=|c_j|^2$, so [F5] gives $\operatorname{tr}(P_u)=\sum_j|c_j|^2=\langle u,u\rangle=1$ by orthonormality. [F2, F3, F4, F5, F6, F7, choose, algebra]

2.1 Conversely, let $P$ be a rank-one orthogonal projection onto $W$. By [F7], $\dim W=1$, so choose a unit $u\in W$. For every $z$, write $Pz=\alpha u$; [F3] gives $z-Pz\in W^\perp$, so $\langle z,u\rangle=\langle Pz,u\rangle=\alpha$. Therefore $Pz=\langle z,u\rangle u=P_uz$, proving surjectivity. If $P_u=P_v$, their ranges are equal, so $u$ and $v$ span the same line and represent the same ray. This proves injectivity and the claimed bijection. [given, F1, F2, F3, F7, step 1.2, algebra, choose] ∎

