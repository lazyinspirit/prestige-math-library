---
id: thm-hlr-approximate-factorization-residual-and-inverse-error
kind: theorem
title: "Compressed block LU factors have a residual and inverse certificate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - alg-hlr-compress-exact-lu-factors
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - thm-hlr-blockwise-error-propagation
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - thm-best-rank-k-frobenius-matrix-approximation
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
  - thm-invertible-matrices-correspond-to-linear-isomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§6.2, 7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.5"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Statement

Let $A\in\mathbb F^{n\times n}$ be invertible over $\mathbb F\in\{\mathbb R,\mathbb C\}$, $n\ge1$, and let $A=LU$ be an exact block lower-upper factorization. Suppose [[alg-hlr-compress-exact-lu-factors]] returns $\widehat L,\widehat U$ and exact local discarded-tail errors $e_b^L,e_c^U$. All operations and norms in this theorem are exact. Put $\epsilon_L=(\sum_b(e_b^L)^2)^{1/2}$, $\epsilon_U=(\sum_c(e_c^U)^2)^{1/2}$, $\widehat A=\widehat L\widehat U$, and $\eta=\epsilon_L\|U\|_F+\|\widehat L\|_F\epsilon_U$. Then

$$\|A-\widehat A\|_F\le\eta\qquad\text{and}\qquad\|A-\widehat A\|_2\le\eta.$$

If $q=\|A^{-1}\|_2\eta<1$, then $\widehat A$ is invertible and

$$\|\widehat A^{-1}-A^{-1}\|_2\le\frac{\|A^{-1}\|_2^2\eta}{1-q}.$$

## Facts & Assumptions

**Given:** The exact factorization $A=LU$, a successful blockwise compression of $L,U$, and the finite-dimensional real or complex matrix norms.

[F1] [[alg-hlr-compress-exact-lu-factors]]: near and diagonal blocks are copied exactly; each admissible factor block is replaced by the factors returned by core-SVD recompression with its local error certificate.

[F2] [[thm-hlr-core-svd-recompression-is-best-rank-tolerance]]: each returned recompression has Frobenius residual exactly its reported discarded singular-value tail.

[F3] [[thm-hlr-blockwise-error-propagation]]: on a disjoint block partition, local Frobenius residual bounds combine by the root sum of their squares.

[F4] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius norm is the Euclidean norm of the finite entry list and $M^*$ is conjugate transpose.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$ in every real or complex inner-product space.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2$ is the maximum of $\|Tx\|_2$ over unit vectors.

[F7] [[thm-operator-norm-is-the-largest-singular-value]]: $\|T\|_2$ is the largest singular value of a finite-dimensional operator.

[F8] [[thm-best-rank-k-frobenius-matrix-approximation]]: the Frobenius norm squared is the sum of squared singular values, by taking rank cap zero in the stated truncation formula.

[F9] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, dimension equals nullity plus rank.

[F10] [[thm-dimension-of-a-linear-subspace]]: a subspace of an $n$-dimensional space with dimension $n$ is the whole space.

[F11] [[thm-invertible-matrices-correspond-to-linear-isomorphisms]]: a square matrix is invertible exactly when its multiplication map is a linear isomorphism.

## Proof

1.1 The factor compression in [F1] copies every near and diagonal block and gives local discarded-tail errors on the disjoint admissible blocks. By [F2] these are the actual local Frobenius residuals, so [F3] gives $\|L-\widehat L\|_F\le\epsilon_L$ and $\|U-\widehat U\|_F\le\epsilon_U$. [F1, F2, F3]

2.1 Write $A-\widehat A=LU-\widehat L\widehat U=(L-\widehat L)U+\widehat L(U-\widehat U)$. For conformable $X,Y$, entrywise Cauchy–Schwarz [F5] gives $|(XY)_{ij}|^2\le(\sum_\ell|X_{i\ell}|^2)(\sum_\ell|Y_{\ell j}|^2)$; summing over $i,j$ gives $\|XY\|_F^2\le\|X\|_F^2\|Y\|_F^2$. Also $\|X+Y\|_F^2=\|X\|_F^2+\|Y\|_F^2+2\operatorname{Re}\langle X,Y\rangle_F\le(\|X\|_F+\|Y\|_F)^2$ by [F4,F5], so the Frobenius triangle inequality follows. Together with step 1.1 this yields $\|A-\widehat A\|_F\le\epsilon_L\|U\|_F+\|\widehat L\|_F\epsilon_U=\eta$. [F4, F5, step 1.1, algebra]

3.1 For any matrix $R$, [F7] gives $\|R\|_2=\sigma_1(R)$, while [F8] at rank cap zero gives $\|R\|_F=(\sum_j\sigma_j(R)^2)^{1/2}$. Hence $\|R\|_2\le\|R\|_F$. Applying this to $R=A-\widehat A$ and using step 2.1 proves $\|A-\widehat A\|_2\le\eta$. [F7, F8, step 2.1, algebra]

4.1 Let $E=\widehat A-A$ and $q=\|A^{-1}\|_2\eta<1$. For every $x$, the operator-norm definition [F6] gives $\|A^{-1}Ex\|_2\le\|A^{-1}\|_2\|E\|_2\|x\|_2\le q\|x\|_2$ by step 3.1. If $\widehat A x=0$, then $x=-A^{-1}Ex$, so $\|x\|_2\le q\|x\|_2$ and therefore $x=0$. Thus $\widehat A$ is injective. By [F9], its image has dimension $n$; [F10] makes that image all of $\mathbb F^n$, so its multiplication map is an isomorphism and [F11] gives invertibility. [F6, F9, F10, F11, step 3.1, algebra]

5.1 Set $F=A^{-1}E$. The definition [F6] gives $\|F\|_2\le q$ by the same estimate as in step 4.1. Since $\widehat A=A(I+F)$ is invertible, so is $I+F$. For $z=(I+F)^{-1}y$, the vector triangle inequality from [F5] gives $\|z\|_2\le\|y\|_2+\|Fz\|_2\le\|y\|_2+q\|z\|_2$, hence $\|(I+F)^{-1}\|_2\le(1-q)^{-1}$. Since $\widehat A^{-1}=(I+F)^{-1}A^{-1}$ and $(I+F)^{-1}-I=-(I+F)^{-1}F$, operator-norm submultiplicativity follows from [F6] and gives $\|\widehat A^{-1}-A^{-1}\|_2\le q\|A^{-1}\|_2/(1-q)=\|A^{-1}\|_2^2\eta/(1-q)$. [F5, F6, step 4.1, algebra] ∎

## Remarks

The certificate is conditional on exact factor compression and exact norm values. No finite-precision residual enclosure or method for constructing the initial exact $L,U$ is asserted.
