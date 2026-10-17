---
id: thm-sylvester-unique-solvability-spectral-separation
kind: theorem
title: "A Sylvester equation is uniquely solvable exactly when the spectra are disjoint"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sylvester-operator-and-separation-number
  - lem-sylvester-vectorization-isometry-and-kronecker-identity
  - thm-schur-triangularisation
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $F\in\{\mathbb R,\mathbb C\}$, $m,n\ge1$, $A\in F^{m\times m}$ and $B\in F^{n\times n}$. Spectra of real matrices are taken over $\mathbb C$. The map $\mathcal S_{A,B}$ of [[def-sylvester-operator-and-separation-number]] is invertible if and only if

$$
\sigma(A)\cap(-\sigma(B))=\varnothing.
$$

Equivalently, for every $C\in F^{m\times n}$, the equation $AX+XB=C$ has a unique solution if and only if this spectral condition holds. The same condition is equivalent to $\operatorname{sep}(A,-B)>0$.

## Facts & Assumptions

**Given:** The fields, dimensions and matrices in the statement.

[F1] [[lem-sylvester-vectorization-isometry-and-kronecker-identity]]: $\operatorname{vec}(AX+XB)=(I_n\otimes A+B^T\otimes I_m)\operatorname{vec}(X)$, and $\operatorname{vec}$ preserves the Frobenius norm.

[F2] [[thm-schur-triangularisation]]: If a finite-dimensional complex endomorphism has a characteristic polynomial that splits, an orthonormal basis makes its matrix upper triangular.

[F3] [[def-sylvester-operator-and-separation-number]]: $\operatorname{sep}(A,-B)$ is the smallest singular value of $\mathcal S_{A,B}$ under the Frobenius inner product.

[F4] [[thm-singular-value-decomposition]]: A linear map between finite-dimensional inner product spaces has orthonormal singular directions; its smallest singular value is positive exactly when its kernel is zero.

## Proof


1.1 First let $F=\mathbb C$. By [F2], choose unitary $U,V$ and upper triangular $T,S$ with $A=UTU^*$ and $B=VSV^*$. Set $Y=U^*XV$ and $D=U^*CV$; multiplying $AX+XB=C$ on the left by $U^*$ and right by $V$ gives $TY+YS=D$, and this change of variables is invertible. [given, F2, construct, algebra]

1.2 By [F1], the vectorized map for $Y\mapsto TY+YS$ is $K=I_n\otimes T+S^T\otimes I_m$. Viewed in $m$-entry column blocks, $K$ is block lower triangular because $S^T$ is lower triangular; its $j$th diagonal block is $T+s_{jj}I_m$, which is upper triangular with diagonal entries $t_{ii}+s_{jj}$. A block triangular matrix is invertible exactly when all its diagonal blocks are invertible, so $K$ is invertible exactly when every $t_{ii}+s_{jj}\ne0$. [F1, algebra]

2.1 Similarity preserves characteristic polynomials, so $\{t_{ii}\}=\sigma(A)$ and $\{s_{jj}\}=\sigma(B)$. Thus step 1.2 says that $\mathcal S_{A,B}$ is invertible exactly when $\sigma(A)\cap(-\sigma(B))=\varnothing$. [step 1.2, algebra]

3.1 For real $A,B$, the matrix $K=I_n\otimes A+B^T\otimes I_m$ has real entries, and its real determinant is nonzero exactly when it is nonzero over $\mathbb C$. Applying the complex criterion from step 2.1 to this same real matrix viewed over $\mathbb C$ therefore gives the same spectral condition for invertibility over $\mathbb R$. [F1, step 2.1, algebra]

4.1 A square finite-dimensional linear map is bijective exactly when every right-hand side has one solution. By [F3] and [F4], its smallest singular value is positive exactly when it is invertible. This proves all equivalences. [F3, F4, step 2.1, step 3.1, algebra] ∎
