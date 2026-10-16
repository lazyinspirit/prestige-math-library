---
id: thm-qc-density-spectral-ensemble
kind: theorem
title: Density operators have an orthogonal spectral ensemble
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-qc-density-operator, thm-non-negative-operator-characterisations, def-trace-of-an-endomorphism, thm-qc-ray-projector-well-defined-and-bijective, def-rank-and-nullity]
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

Let $\rho$ be a density operator on a nonzero finite-dimensional complex-inner-product space $H$. Then there are $m=\operatorname{rank}(\rho)\ge1$, positive numbers $\lambda_1,\ldots,\lambda_m$ with $\sum_{j=1}^m\lambda_j=1$, and orthonormal unit vectors $e_1,\ldots,e_m$ such that

$$\rho=\sum_{j=1}^m\lambda_j|e_j\rangle\langle e_j|.$$

The eigenvectors with eigenvalue zero are omitted; the displayed pure-state projectors are pairwise orthogonal.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$ and a density operator $\rho$ on $H$.

[F1] [[def-qc-density-operator]]: $\rho$ is non-negative and has trace one.

[F2] [[thm-non-negative-operator-characterisations]]: a non-negative operator has an orthonormal eigenbasis and all eigenvalues are nonnegative real numbers.

[F3] [[def-trace-of-an-endomorphism]]: trace is the sum of the diagonal entries of a representing matrix in any ordered basis.

[F4] [[thm-qc-ray-projector-well-defined-and-bijective]]: a unit vector's ray projector is a rank-one orthogonal projection, and hence is the operator $|e\rangle\langle e|$ used for its pure-state representative.

[F5] [[def-rank-and-nullity]]: $\operatorname{rank}(\rho)=\dim(\operatorname{im}\rho)$ for the finite-dimensional endomorphism $\rho$.

## Proof

1.1 By [F1]–[F2], choose an orthonormal eigenbasis $e_1',\ldots,e_d'$ with $\rho e_k'=\mu_ke_k'$ and $\mu_k\ge0$. In this basis the representing matrix is diagonal, so [F1] and [F3] give $\sum_{k=1}^d\mu_k=\operatorname{tr}(\rho)=1$. Thus the index set $J=\{k:\mu_k>0\}$ is nonempty, and omitting its complement removes exactly the zero eigenvalues. [F1, F2, F3, choose, algebra]

2.1 List the finite set $J$ in increasing order as $k_1,\ldots,k_m$ and put $\lambda_j=\mu_{k_j}$ and $e_j=e_{k_j}'$. By [F4], each unit eigenvector has a rank-one projector $|e_j\rangle\langle e_j|$; the eigenbasis gives $\rho=\sum_{j=1}^m\lambda_j|e_j\rangle\langle e_j|$, with positive weights summing to one. The operator maps each $e'_{k_j}$ to the nonzero vector $\mu_{k_j}e'_{k_j}$ and maps every other eigenbasis vector to zero, so its image is exactly the span of the $e'_{k_j}$. Thus [F5] gives $\operatorname{rank}(\rho)=m$. Distinct basis vectors give orthogonal projectors. [F2, F4, F5, step 1.1, algebra] ∎
## Remarks

The proof uses one finite-dimensional orthonormal eigenbasis and the increasing enumeration of a finite set of its indices; no arbitrary-index choice is used.
