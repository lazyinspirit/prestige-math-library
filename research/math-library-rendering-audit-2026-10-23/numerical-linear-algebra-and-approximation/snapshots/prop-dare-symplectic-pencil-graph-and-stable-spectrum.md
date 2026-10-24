---
id: prop-dare-symplectic-pencil-graph-and-stable-spectrum
kind: proposition
title: "The stabilizing DARE solution is the stable deflating graph of a regular
  symplectic pencil"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - thm-dare-stabilizing-psd-solution-and-value
  - def-standard-continuous-and-discrete-riccati-equations
  - def-regular-generalized-eigenvalue-pencil
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - lem-block-upper-triangular-pencil-determinant-factorizes
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
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, DARE graph and symplectic matrix"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, invariant-subspace/pencil identity and infinite eigenvalues"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $X\succeq0$ be the stabilizing DARE solution, $G=BR^{-1}B^*$, and
$$N=\begin{bmatrix}A&0\\-Q&I\end{bmatrix},\qquad M=\begin{bmatrix}I&G\\0&A^*\end{bmatrix},\qquad A_c=A-B(R+B^*XB)^{-1}B^*XA.$$
Then
$$N\begin{bmatrix}I\\X\end{bmatrix}=M\begin{bmatrix}I\\X\end{bmatrix}A_c.$$
The pencil $(N,M)$ is regular. Its homogeneous determinant has n roots strictly inside the unit disk and n roots strictly outside the closed unit disk, with infinite roots counted in the latter group. Thus it has no unit-circle roots, even if $A$ is singular, and $\operatorname{Ran}\begin{bmatrix}I\\X\end{bmatrix}$ is its stable deflating graph.

## Facts & Assumptions

**Given:** The DARE data and stabilizing solution from [[thm-dare-stabilizing-psd-solution-and-value]].

[F1] [[thm-dare-stabilizing-psd-solution-and-value]]: $X=X^*\succeq0$, $S=R+B^*XB\succ0$, and $A_c=A-BS^{-1}B^*XA$ is Schur stable.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: $G=BR^{-1}B^*$ and the DARE residual is $Q+A^*XA-A^*XB S^{-1}B^*XA-X$.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: each finite-dimensional non-negative self-adjoint matrix has a non-negative square root.

[F4] [[def-regular-generalized-eigenvalue-pencil]]: a square pencil is regular when its homogeneous determinant is not the zero polynomial.

[F5] [[thm-determinant-multiplicative]]: determinants multiply under finite square matrix products, so the determinant is unchanged by the determinant-one shears used below.

[F6] [[thm-determinant-of-a-triangular-matrix]]: the determinant of a triangular matrix is the product of its diagonal entries; in particular, the two unit-triangular shears below have determinant one.

[F7] [[lem-block-upper-triangular-pencil-determinant-factorizes]]: the homogeneous determinant of a block upper-triangular pencil factors across its diagonal blocks.

[F8] [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]: finite eigenvalues of a matrix are exactly the roots of its characteristic polynomial.

[F9] [[cor-every-complex-polynomial-splits-into-linear-factors]]: each complex characteristic polynomial of degree $n$ has $n$ roots counted with algebraic multiplicity.

[F10] [[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]]: generalized eigenvectors span a complex finite-dimensional space, with total dimension counted by algebraic multiplicity.

## Proof

1.1 The matrix $I+GX$ is invertible. Indeed, if $(I+GX)v=0$, multiplication by $v^*X$ gives $v^*Xv+(Xv)^*G(Xv)=0.$ Both summands are nonnegative. By [F3], $v^*Xv=0$ implies $Xv=0$, and the original equation then gives $v=0$. Also $S=R+B^*XB\succ0$ by [F1]. The identity $(I+GX)^{-1}=I-BS^{-1}B^*X$ is verified by multiplying the right side by $I+GX$: the extra term is $B[R^{-1}-S^{-1}-S^{-1}(B^*XB)R^{-1}]B^*X=0$, since $S=R+B^*XB$. Therefore $A_c=(I+GX)^{-1}A$. [F1, F2, F3, algebra]

2.1 The DARE and the identity in step 1.1 imply $X-Q=A^*X(I+GX)^{-1}A=A^*XA_c$. Consequently, $N\begin{bmatrix}I\\X\end{bmatrix}=\begin{bmatrix}A\\X-Q\end{bmatrix} =\begin{bmatrix}I+GX\\A^*X\end{bmatrix}A_c =M\begin{bmatrix}I\\X\end{bmatrix}A_c.$ This proves the deflating graph identity. [F1, F2, step 1.1, algebra]

3.1 Put $T_X=\begin{bmatrix}I&0\\X&I\end{bmatrix}$ and $L_X=\begin{bmatrix}I&0\\-A^*X(I+GX)^{-1}&I\end{bmatrix}$. By [F6] both are block triangular with identity diagonal and determinant one. For arbitrary homogeneous coordinates $[\alpha:\beta]$, $L_X(\beta N-\alpha M)T_X= \begin{bmatrix} (I+GX)(\beta A_c-\alpha I)&-\alpha G\\ 0&\beta I-\alpha A_c^* \end{bmatrix}.$ The lower-left block vanishes by $X-Q=A^*XA_c$; the lower-right block uses $(I+GX)^{-1}G=G(I+XG)^{-1}$ and $I-X(I+GX)^{-1}G=(I+XG)^{-1}$. Taking determinants and using [F5] and [F7] gives $\det(\beta N-\alpha M)=\det(I+GX)\det(\beta A_c-\alpha I)\det(\beta I-\alpha A_c^*).$ The first homogeneous factor has $n$ roots, counted with multiplicity; all are finite and equal to eigenvalues of $A_c$, hence strictly inside the disk by [F1] and [F8]. The roots of $A_c^*$ are the conjugates of those of $A_c$, since $\det(\mu I-A_c^*)=\overline{\det(\overline\mu I-A_c)}$; hence each nonzero eigenvalue of $A_c^*$ has modulus less than one. The second factor has $n$ roots, counted with multiplicity: each finite root is the reciprocal of a nonzero eigenvalue of $A_c^*$ and therefore has modulus greater than one, while every zero eigenvalue of $A_c^*$ contributes a root at $\beta=0$, which is infinite. The root counts follow from [F9], with finite eigenvalues identified by [F8]. Neither factor vanishes on $|\alpha|=|\beta|$, so the pencil is regular with the stated root split. The homogeneous determinant is invariant under these transforms because [F5] gives multiplicativity and both shear determinants equal one by [F6]. Finally, $(I+GX)$ is invertible by step 1.1, so $M[I;X]$ has full column rank. A Jordan basis of $A_c$ from [F10], together with $N[I;X]=M[I;X]A_c$ from step 2.1, shows that the graph carries all $n$ stable finite root chains; the determinant factorization shows there are exactly $n$ stable roots in total, so this is the stable deflating graph. This uses no inverse of $A$. [F1, F4, F5, F6, F7, F8, F9, F10, step 1.1, step 2.1, algebra] ∎
