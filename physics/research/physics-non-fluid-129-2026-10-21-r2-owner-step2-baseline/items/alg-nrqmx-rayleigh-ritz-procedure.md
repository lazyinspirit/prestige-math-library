---
id: alg-nrqmx-rayleigh-ritz-procedure
kind: algorithm
domain: mathematics
library: mathematics
title: Conforming Rayleigh–Ritz procedure
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_roles:
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Phan Thành Nam, Functional Analysis II, lecture notes, Winter 2020–2021, Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.3, printed pp.17–18: complete min–max treatment for lower-bounded self-adjoint operators. This is independent variational context; the exact matrix procedure is specified locally."
---

## Definition

Let $H$ be a nonzero complex Hilbert space whose inner product is linear in its first argument. Let $Q\subseteq H$ be a dense linear subspace, and let $q:Q\times Q\to\mathbb C$ be a symmetric sesquilinear form, linear in its first argument. Write $q[u]=q(u,u)$. Assume $q[u]\ge-c\|u\|^2$ for some real $c\ge0$, and assume $Q$ is complete in the form norm $\|u\|_{q,c}^2=q[u]+(c+1)\|u\|^2$; this is the meaning of a closed semibounded form here.

For an integer $n\ge1$, let $\phi_1,\ldots,\phi_n\in Q$ be linearly independent. The exact input matrices are the Gram matrix $G$ and form matrix $A$ with entries

$$G_{ij}=\langle\phi_j,\phi_i\rangle,\qquad A_{ij}=q(\phi_j,\phi_i)\qquad(1\le i,j\le n).$$

For every nonzero coefficient vector $z\in\mathbb C^n$, $z^*Gz=\|\sum_jz_j\phi_j\|^2>0$, so $G$ is positive definite; the symmetry of $q$ makes $A$ Hermitian.

The procedure is:

1. Form $G$ and $A$ from the supplied vectors and form, using exact entries.
2. Diagonalize the positive definite Hermitian matrix $G$ and form its unique positive inverse square root $G^{-1/2}$. Set $B=G^{-1/2}AG^{-1/2}$.
3. Diagonalize the Hermitian matrix $B$, listing its real eigenvalues $\rho_1\le\cdots\le\rho_n$ with multiplicity and selecting an orthonormal eigenbasis $y_1,\ldots,y_n$. For each $j$, set $c_j=G^{-1/2}y_j$ and return $(\rho_j,c_j)$.

Each returned vector satisfies $Ac_j=\rho_jGc_j$ and $c_j^*Gc_k=\delta_{jk}$. Repeated eigenvalues may return any orthonormal basis of the corresponding eigenspace. The procedure uses trial vectors in $Q$ and does not require them to lie in the operator domain of an associated self-adjoint operator. It operates on exact matrix entries: if quadrature or an approximate eigensolver supplies numerical data, this procedure alone supplies no error enclosure or certification for those approximations.

## Definition references

[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

## Remarks

Conformity means exactly that each trial vector lies in the stated form domain. A nonconforming grid vector is not automatically an element of that continuum form domain. The procedure returns the exact eigenvalues of its supplied matrices; any certified numerical Ritz interval must enclose integration error in both $G$ and $A$ and include the numerical eigensolver error separately.
