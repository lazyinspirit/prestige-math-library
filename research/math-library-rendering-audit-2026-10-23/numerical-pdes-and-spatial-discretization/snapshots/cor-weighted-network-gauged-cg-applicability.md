---
id: cor-weighted-network-gauged-cg-applicability
kind: corollary
title: "Exact-arithmetic CG after grounding or a Neumann gauge"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-finite-weighted-network-diffusion-data
  - lem-weighted-network-energy-kernel-and-mass-balance
  - thm-rank-nullity
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; the arguments are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the
        Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient
        Method Without the Agonizing Pain, complete lecture note"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
      locator: "Complete 64-page lecture note; §§2, 7.1 and 7.3, printed pp. 5–7 and
        24–26."
verification:
  precheck: pass
---

## Statement

Use the weighted network data of
[[def-finite-weighted-network-diffusion-data]]. The exact-arithmetic
conjugate-gradient result
[[thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error]]
applies to each of the following systems:

1. $M+\tau L_D$ for every $\tau>0$;
2. the grounded steady matrix $L_D$ if every positive-conductance component
   containing a free vertex also meets the Dirichlet set $D$;
3. the closed Neumann matrix $L_C$ restricted to $K^\perp$, where
   $K=\ker L_C$, for every compatible right-hand side $b\in K^\perp$.

In case 3 the gauge $u\in K^\perp$ gives the unique solution of $L_Cu=b$.
Here $K^\perp$ uses the standard Euclidean inner product
$\langle x,y\rangle=x^{\mathsf T}y$. If a stated unknown space is
zero-dimensional, its solver claim is vacuous.
These are exact-arithmetic applicability claims only; no finite-precision
stability claim is made.

## Facts & Assumptions

**Given:** Positive diagonal masses, nonnegative edge conductances, a finite
oriented graph, Dirichlet set $D$, and the matrices $M,L_D,L_C$.

[F1] $L_D$ is symmetric positive semidefinite. Its energy is zero exactly
for vectors whose zero extensions are constant on every positive-conductance
component, with constant zero on components meeting $D$; these are precisely
the vectors in $\ker L_D$. In the closed case $D=\varnothing$, $L_D=L_C$
and $\ker L_C$ consists of all positive-conductance componentwise constants,
with no Dirichlet constraint
([[def-finite-weighted-network-diffusion-data]],
[[lem-weighted-network-energy-kernel-and-mass-balance]]).

[F2] A linear endomorphism of a finite-dimensional vector space with trivial
kernel is onto by rank-nullity
([[thm-rank-nullity]]).

[F3] For a real symmetric positive-definite system $Ax=b$, the
exact-arithmetic CG iterates satisfy the published Krylov Galerkin and
energy-minimization theorem
([[thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error]]).

[F4] $M$ is diagonal with strictly positive entries
([[def-finite-weighted-network-diffusion-data]]).

[F5] Every finite-dimensional real inner-product space has an orthonormal
basis, including the empty basis in dimension zero
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

**Proof technique:** positive-definite restriction.

**Given:** The weighted graph matrices and the exact-arithmetic CG interface
of [F3].

1.1 Under the grounded condition, suppose $x\in\mathbb R^I$ and $x^{\mathsf T}L_Dx=0$. By [F1], the zero extension of $x$ is constant on each positive-conductance component and zero on each such component meeting $D$. The grounded condition says every component containing a free vertex meets $D$, so every free coordinate is zero. Thus $L_D$ has trivial kernel; it is symmetric positive semidefinite by [F1], hence positive definite. [F1, given, algebra]

1.2 In the closed case, let $K=\ker L_C$. Symmetry implies $L_C(K^\perp)\subseteq K^\perp$: for $x\in K^\perp$ and $k\in K$, $k^{\mathsf T}L_Cx=(L_Ck)^{\mathsf T}x=0$. If a vector $x\in K^\perp$ has $x^{\mathsf T}L_Cx=0$, [F1] puts $x$ in $K$; hence $x=0$. Therefore the restriction $L_C|_{K^\perp}$ is positive definite. It has trivial kernel and is an endomorphism of the finite-dimensional space $K^\perp$, so [F2] makes it onto. Thus each $b\in K^\perp$ has one gauged solution $u\in K^\perp$. By [F5], an orthonormal basis of $K^\perp$ identifies this restriction with a real symmetric positive definite matrix, including the zero-dimensional case. [F1, F2, F5, given, algebra]

1.3 For $\tau>0$ and any nonzero $x$, [F1] and [F4] give $x^{\mathsf T}(M+\tau L_D)x=x^{\mathsf T}Mx+\tau x^{\mathsf T}L_Dx \ge\sum_i m_ix_i^2>0$. Thus $M+\tau L_D$ is positive definite. [F1, F4, given, algebra]

2.1 The grounded matrix from step 1.1, the restricted Neumann matrix in the orthonormal coordinates constructed in the preceding argument, and the shifted mass matrix from step 1.3 are all real symmetric positive definite on their stated spaces. Each therefore has trivial kernel and is onto by [F2] on its finite-dimensional domain, so each right-hand side has a unique solution. Applying [F3] gives the exact-arithmetic CG Krylov Galerkin and energy-minimization conclusions. [F2, F3, step 1.1, step 1.2, step 1.3, given] ∎

