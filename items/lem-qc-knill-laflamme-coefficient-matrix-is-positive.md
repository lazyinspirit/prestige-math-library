---
id: lem-qc-knill-laflamme-coefficient-matrix-is-positive
kind: lemma
title: The Knill–Laflamme coefficient matrix is positive
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-quantum-code-isometry-and-code-projector, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-qc-isometric-encoding-projector]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $H_L,H_P,H_O$ be finite-dimensional complex inner-product spaces,
$V:H_L\to H_P$ an isometric encoding of nonzero logical space, and
$P=VV^*$. For a finite family of linear error operators
$E_1,\ldots,E_m:H_P\to H_O$, suppose scalars $C_{ab}$ satisfy
$PE_a^*E_bP=C_{ab}P$ for all $a,b$. Then the matrix $C=(C_{ab})$ is
Hermitian positive semidefinite.

## Facts & Assumptions

**Given:** The finite-dimensional encoding and error family in the Statement,
and the displayed Knill–Laflamme scalar-compression identities.

[F2] [[thm-qc-isometric-encoding-projector]]: $V^*V=I_{H_L}$,
$P^*=P=P^2$, and $PV=V$.

[F3] [[def-inner-product-space]]: the complex inner product is linear in its
first argument and conjugate-linear in its second.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: finite-dimensional
maps have unique adjoints satisfying $\langle Tu,v\rangle=\langle u,T^*v\rangle$.

## Proof


1.1 By [F2], $PV=V$, $V^*P=V^*$ and $V^*V=I_{H_L}$. Multiplying $PE_a^*E_bP=C_{ab}P$ by $V^*$ and $V$ therefore gives $V^*E_a^*E_bV=C_{ab}I_{H_L}$. Choose a unit vector $\psi\in H_L$, possible because $H_L\ne\{0\}$. The adjoint identity [F4] yields $C_{ab}=\langle E_a^*E_bV\psi,V\psi\rangle =\langle E_bV\psi,E_aV\psi\rangle$. [given, F2, F4, choose, algebra]

2.1 For any $z=(z_1,\ldots,z_m)\in\mathbb C^m$, the first-argument linearity and conjugate symmetry in [F3] give $$z^*Cz=\sum_{a,b}\overline{z_a}z_b\langle E_bV\psi,E_aV\psi\rangle =\left\|\sum_b z_bE_bV\psi\right\|^2\ge0.$$ Also $C_{ba}=\overline{C_{ab}}$, so $C$ is Hermitian. The nonnegative quadratic form is exactly positive semidefiniteness. [step 1.1, F3, algebra] ∎

