---
id: lem-qc-knill-laflamme-orthogonal-error-basis
kind: lemma
title: A unitary error-basis change gives orthogonal error ranges
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-quantum-code-isometry-and-code-projector, lem-qc-knill-laflamme-coefficient-matrix-is-positive, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-of-square-roots, thm-qc-isometric-encoding-projector]
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

Let $V:H_L\to H_P$ be an isometry with $H_L\ne\{0\}$ and $P=VV^*$.
Let $E_1,\ldots,E_m:H_P\to H_O$ be a finite family satisfying
$PE_a^*E_bP=C_{ab}P$, and let $C$ be the resulting positive matrix.
There is a unitary matrix $U$ such that for
$F_i=\sum_aE_aU_{ai}$ one has
$\sum_iF_iXF_i^*=\sum_aE_aXE_a^*$ for every $X$, and
$V^*F_i^*F_jV=\delta_{ij}\lambda_iI_{H_L}$ with $\lambda_i\ge0$.
If $\lambda_i=0$, then $F_iV=0$; if $\lambda_i>0$, then
$W_i=F_iV/\sqrt{\lambda_i}$ is an isometry and the ranges of the $W_i$
are pairwise orthogonal.

## Facts & Assumptions

**Given:** The finite-dimensional isometry and error family in the Statement.

[F2] [[thm-qc-isometric-encoding-projector]]: $V^*V=I_{H_L}$ and
$P^*=P=P^2$, so $PV=V$ and $V^*P=V^*$.

[F3] [[lem-qc-knill-laflamme-coefficient-matrix-is-positive]]: the scalar
matrix $C$ in $PE_a^*E_bP=C_{ab}P$ is Hermitian positive semidefinite.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a Hermitian
endomorphism of a finite-dimensional complex inner-product space has an
orthonormal eigenbasis.

[F5] [[thm-of-square-roots]]: each nonnegative real number has a unique
nonnegative square root.

[F6] [[prop-adjoint-algebra]]: $(AB)^*=B^*A^*$ and
$(\lambda A)^*=\overline{\lambda}A^*$ for compatible finite-dimensional
maps.

[F7] [[def-inner-product-space]]: the inner product is linear in its first
argument and defines the norm by $\|x\|^2=\langle x,x\rangle$.

## Proof


1.1 By [F3], $C$ is Hermitian positive semidefinite. Apply [F4] to obtain a unitary $U$ with $U^*CU=\operatorname{diag}(\lambda_1,\ldots,\lambda_m)$. For each eigenvector $u_i$, positivity gives $\lambda_i=u_i^*Cu_i\ge0$, and [F5] supplies $\sqrt{\lambda_i}$. [F3, F4, F5, algebra]

1.2 Expand the transformed operator sum. Unitarity and [F6] give $\sum_iF_iXF_i^*=\sum_{a,b}\left(\sum_iU_{ai}\overline{U_{bi}}\right)E_aXE_b^*=\sum_aE_aXE_a^*.$ Thus mixing preserves the represented map, including every zero-on-code error. [given, F6, algebra]

2.1 Compress the transformed products by $V$. The scalar-compression identities and [F2] give $V^*F_i^*F_jV=(U^*CU)_{ij}I_{H_L}=\delta_{ij}\lambda_iI_{H_L}$. [given, F2, step 1.1, algebra]

3.1 If $\lambda_i=0$, then for every $x\in H_L$, $\|F_iVx\|^2=\lambda_i\|x\|^2=0$, so $F_iV=0$. If $\lambda_i>0$, then [F5] and step 2.1 give $W_i^*W_j=\delta_{ij}I$ for positive eigenvalues. Hence each $W_i$ is isometric, and for $i\ne j$ its range is orthogonal to the range of $W_j$. [step 2.1, F5, F7, algebra] ∎

