---
id: alg-householder-bidiagonalization
kind: algorithm
title: "Householder bidiagonalization and its finite precision status"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-scaled-complex-householder-and-givens-updates, def-householder-reflector, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries, def-frobenius-matrix-norm]
dependency_level: 2
verification:
  precheck: n/a
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2, Algorithm 3.2.6"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, §1"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Definition

Let $A\in\mathbb F^{m\times n}$, where $\mathbb F=\mathbb R$ or $\mathbb C$. Put $p=\min(m,n)$ and $M=\max(m,n)$. If $m\ge n$, set $C=A$; if $m<n$, set $C=A^*$. Thus $C\in\mathbb F^{M\times p}$.

Save the input as $C_0=C$ and initialize $U=I_M$, $V=I_p$, and empty ordered lists of stored local left and right transformations. For $k=1,\ldots,p$, in this order:

1. Let $x=C_{k:M,k}$. If $x=0$, use the identity left transformation. Otherwise choose $\phi=x_1/|x_1|$ when $x_1\ne0$ and $\phi=1$ when $x_1=0$, set $\alpha=-\phi\|x\|_2$, $v=x-\alpha e_1$, and $h=v/\|v\|_2$. Use the Householder reflector $H=I-2hh^*$ on rows $k:M$. Update $C\leftarrow H^*C$ on those rows and append this local transformation to the left list. In exact arithmetic update $U\leftarrow U\operatorname{diag}(I_{k-1},H)$. In finite precision update columns $k:M$ of the dense accumulator $U$ by right application of the same stored local reflector data, using the separate-block branch of [[alg-scaled-complex-householder-and-givens-updates]] and making no target-zero write to $U$.
2. If $k<p$, let $y=C_{k,k+1:p}^*$. If $y=0$, use the identity right transformation. Otherwise apply the same phase and normalization rule to $y$ to form the Householder reflector $G$, then apply $C\leftarrow C\operatorname{diag}(I_k,G)$ and append this local transformation to the right list. In exact arithmetic update $V\leftarrow V\operatorname{diag}(I_k,G)$. In finite precision update columns $k+1:p$ of the dense accumulator $V$ by right application of the same stored local reflector data, using the separate-block branch of [[alg-scaled-complex-householder-and-givens-updates]] and making no target-zero write to $V$.

Set $B$ to the leading $p\times p$ block of the final work matrix $C$, and return $B,U,V$ together with the ordered local transformation lists.

In finite precision, each left/right reflector uses [[alg-scaled-complex-householder-and-givens-updates]], including its real/complex scaled formation, range checks and exact target-column/row zero writes. This is the arithmetic realization of the exact steps above. A zero active vector takes the identity branch. Any helper `range-failure`, invalid operation, nonfinite value, or nonzero exact intermediate outside the normal range returns `range-failure` with the partial factors and stored local transformations; otherwise return `success`, $B,U,V$, the ordered stored local transformations, the reconstruction residual $\|C_0-U\begin{bmatrix}B\\0\end{bmatrix}V^*\|_F$, and the two orthogonality residuals $\|U^*U-I\|_F$ and $\|V^*V-I\|_F$. The reconstruction uses the saved input $C_0$, not the overwritten work matrix. The exact products of the stored unitary representatives are the theoretical factors; the dense finite-precision accumulators are rounded and their residuals are computed quantities, not certified bounds by themselves. Matrix residuals use the Frobenius norm defined in [[def-frobenius-matrix-norm]].
