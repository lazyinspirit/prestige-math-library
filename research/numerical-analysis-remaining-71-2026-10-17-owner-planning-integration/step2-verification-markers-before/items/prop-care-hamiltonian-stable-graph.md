---
id: prop-care-hamiltonian-stable-graph
kind: proposition
title: "The stabilizing CARE solution is the Hamiltonian stable invariant graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - thm-care-stabilizing-psd-solution-and-value
  - def-standard-continuous-and-discrete-riccati-equations
  - lem-characteristic-polynomial-of-block-triangular-matrix
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - cor-every-complex-polynomial-splits-into-linear-factors
  - cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems, Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Hamiltonian invariant graph and stable solution"
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node116.html"
      locator: "§6.2.4, CARE uniqueness and infinite-horizon LQR"
---

## Statement

Let $X\succeq0$ be the stabilizing CARE solution from [[thm-care-stabilizing-psd-solution-and-value]], let $G=BR^{-1}B^*$, and define
$$H=\begin{bmatrix}A&-G\\-Q&-A^*\end{bmatrix},\qquad A_c=A-GX.$$
Then
$$H\begin{bmatrix}I\\X\end{bmatrix}=\begin{bmatrix}I\\X\end{bmatrix}A_c.$$
Moreover, $H$ has exactly $n$ eigenvalues in the open left half-plane and $n$ in the open right half-plane, none on the imaginary axis, and $\operatorname{Ran}\begin{bmatrix}I\\X\end{bmatrix}$ is its stable invariant subspace.

## Facts & Assumptions

**Given:** The standard CARE data and the Hermitian positive-semidefinite stabilizing solution $X$.

[F1] [[thm-care-stabilizing-psd-solution-and-value]]: $A_c=A-GX$ is Hurwitz and $A^*X+XA-XGX+Q=0$.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: $G=BR^{-1}B^*$ is Hermitian positive semidefinite and $^*$ is the adjoint.

[F3] [[lem-characteristic-polynomial-of-block-triangular-matrix]]: the characteristic polynomial of a block-triangular matrix is the product of those of its diagonal blocks.

[F4] [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]: over $\mathbb C$, eigenvalues are precisely the roots of the characteristic polynomial.

[F5] [[cor-every-complex-polynomial-splits-into-linear-factors]]: each degree-$n$ complex characteristic polynomial has $n$ roots counted with algebraic multiplicity.

[F6] [[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]]: generalized eigenspaces span the complex space and their dimensions equal the corresponding algebraic multiplicities.

## Proof

1.1 Block multiplication gives $H\begin{bmatrix}I\\X\end{bmatrix}=\begin{bmatrix}A-GX\\-Q-A^*X\end{bmatrix}.$ By [F1], $-Q-A^*X=XA-XGX=X(A-GX)$, proving the graph identity. [F1, F2, algebra]


2.1 Set $T_X=\begin{bmatrix}I&0\\X&I\end{bmatrix}$, whose inverse is $\begin{bmatrix}I&0\\-X&I\end{bmatrix}$. Using [F1], $T_X^{-1}HT_X=\begin{bmatrix}A-GX&-G\\0&-(A-GX)^*\end{bmatrix}.$ The eigenvalues of the first diagonal block lie in the open left half-plane by [F1]. If $\lambda$ is a root of its characteristic polynomial, then $-\overline\lambda$ is a root of the characteristic polynomial of $-(A-GX)^*$, since $\det(-\overline\lambda I+(A-GX)^*)=\overline{\det(-\lambda I+(A-GX))}=0$; these reflected roots lie in the open right half-plane. By [F5] each diagonal characteristic polynomial has degree $n$ and splits into $n$ roots counted with algebraic multiplicity. The characteristic polynomial factorization [F3] and root/eigenvalue connection [F4] therefore give exactly $n$ eigenvalues of $H$ in each open half-plane and none on the imaginary axis.  The first coordinate subspace is invariant and its restriction has the stable spectrum of $A-GX$. Any generalized eigenvector of the displayed triangular matrix for a stable eigenvalue has trailing component in the kernel of a power of $(-(A-GX)^* -\lambda I)$; that matrix is invertible because the trailing spectrum is in the open right half-plane, so the trailing component is zero. By [F6] these generalized eigenspaces have total dimension equal to the stable algebraic multiplicity $n$ from [F5], so they fill the first coordinate subspace, which is therefore the stable invariant subspace. Applying $T_X$ maps it to $\operatorname{Ran}\begin{bmatrix}I\\X\end{bmatrix}$. [F1, F3, F4, F5, F6, step 1.1, algebra] ∎

