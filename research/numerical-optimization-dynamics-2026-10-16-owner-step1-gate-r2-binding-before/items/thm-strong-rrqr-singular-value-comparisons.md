---
id: thm-strong-rrqr-singular-value-comparisons
kind: theorem
title: "Strong RRQR block singular values compare to the full matrix spectrum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-strong-rank-revealing-qr-with-finite-swaps, lem-singular-value-product-bound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, Theorem 3.2"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $A\in\mathbb F^{m\times n}$ have full column rank, $m\ge n$, and let the successful output of [[alg-strong-rank-revealing-qr-with-finite-swaps]] be
$$A\Pi=Q\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix},$$
with target $1\le k<n$, $R_{11}\in\mathbb F^{k\times k}$ nonsingular, $X=R_{11}^{-1}R_{12}$, and factor $f\ge1$. Put $g=(1+f^2k(n-k))^{1/2}$. Then
$$\sigma_i(R_{11})\ge\frac{\sigma_i(A)}{g}\quad(1\le i\le k),\qquad \sigma_j(R_{22})\le g\,\sigma_{k+j}(A)\quad(1\le j\le n-k).$$
For $k=0$, the second comparison is the equality $R_{22}=Q^*A\Pi$ with $g=1$. These conclusions use the combined score in the algorithm; the bound on $X$ alone is not used as a substitute for control of $R_{22}$.

## Facts & Assumptions

**Given:** A full-column-rank matrix and a successful factorization returned by the finite-swap algorithm.

[F1] [[alg-strong-rank-revealing-qr-with-finite-swaps]]: at success $|X_{ij}|^2+(\omega_i\gamma_j)^2\le f^2$ for every $i,j$, where $\omega_i=\|e_i^*R_{11}^{-1}\|_2$ and $\gamma_j=\|R_{22}(:,j)\|_2$.

[F2] [[lem-singular-value-product-bound]]: $\sigma_i(XY)\le\sigma_i(X)\|Y\|_2$ for compatible matrices.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: left or right unitary multiplication preserves the ordered singular values.

## Proof

1.1 If $k=0$, then $R_{22}=Q^*A\Pi$ and both $Q$ and $\Pi$ are unitary, so they preserve singular values; the stated case follows. Assume henceforth $1\le k<n$. Write $A_0=R_{11}$, $C=R_{22}$, and $X=A_0^{-1}R_{12}$. Summing the $k(n-k)$ inequalities in [F1] gives
$$\|X\|_F^2+\|A_0^{-1}\|_F^2\|C\|_F^2\le f^2k(n-k).$$
Indeed, $\sum_i\omega_i^2=\|A_0^{-1}\|_F^2$ and $\sum_j\gamma_j^2=\|C\|_F^2$. [F1, F3, algebra]

2.1 Since $A$ has full column rank and $k<n$, $C$ has full column rank: if $Cz=0$ for nonzero $z$, then $R\binom{-A_0^{-1}R_{12}z}{z}=0$, contradicting full column rank of $R=Q^*A\Pi$, which has the same rank as $A$ by [F3]. Thus $\alpha=\|C\|_2/\sigma_k(A_0)>0$. Since $\sigma_k(A_0)=1/\|A_0^{-1}\|_2$, one has $\alpha^2=\|C\|_2^2\|A_0^{-1}\|_2^2\le\|C\|_F^2\|A_0^{-1}\|_F^2$, so step 1.1 gives $\|X\|_F^2+\alpha^2\le f^2k(n-k)$. [step 1.1, F1, F3, algebra]

3.1 By [F3], $R=Q^*A\Pi$ has the same singular values as $A$. Define $D_1=\operatorname{diag}(A_0,C/\alpha)$ and $W_1=\begin{bmatrix}I_k&X\\0&\alpha I_{n-k}\end{bmatrix}$, so $R=D_1W_1$. For vectors $x,y$, $\|W_1(x,y)\|_2^2=\|x+Xy\|_2^2+\alpha^2\|y\|_2^2$ is bounded by the quadratic form of $M_1=\begin{bmatrix}1&\|X\|_2\\\|X\|_2&\|X\|_2^2+\alpha^2\end{bmatrix}$ at $(\|x\|_2,\|y\|_2)$. For scalars $u,v$ its quadratic form is $(u+\|X\|_2v)^2+\alpha^2v^2\ge0$, so it is positive semidefinite and its largest eigenvalue is at most its trace; thus $\|W_1\|_2^2\le1+\|X\|_F^2+\alpha^2\le g^2$. Since $\|C/\alpha\|_2=\sigma_k(A_0)$, the ordered first $k$ singular values of $D_1$ are those of $A_0$. By [F2], $\sigma_i(R)\le\sigma_i(D_1)\|W_1\|_2$, proving $\sigma_i(A_0)\ge\sigma_i(A)/g$ for $i\le k$. [step 1.1, step 2.1, F2, F3, algebra]

3.2 Define $D_2=\operatorname{diag}(\alpha A_0,C)$ and $W_2=\begin{bmatrix}\alpha I_k&-X\\0&I_{n-k}\end{bmatrix}$, so $D_2=RW_2$. For vectors $x,y$, $\|W_2(x,y)\|_2^2=\|\alpha x-Xy\|_2^2+\|y\|_2^2$ is bounded by the quadratic form of $M_2=\begin{bmatrix}\alpha^2&\alpha\|X\|_2\\\alpha\|X\|_2&\|X\|_2^2+1\end{bmatrix}$ at $(\|x\|_2,\|y\|_2)$. Its determinant is $\alpha^2>0$ and its diagonal entries are positive, so it is positive semidefinite; its largest eigenvalue is at most its trace. Thus $\|W_2\|_2^2\le1+\|X\|_F^2+\alpha^2\le g^2$. The smallest singular value of $\alpha A_0$ is $\|C\|_2$, so the first $k$ singular values of $D_2$ are those of $\alpha A_0$ and its remaining $n-k$ singular values are those of $C$. Therefore $\sigma_j(C)=\sigma_{k+j}(D_2)\le\sigma_{k+j}(R)\|W_2\|_2\le g\sigma_{k+j}(A)$ by [F2] and [F3]. [step 2.1, F2, F3, algebra]

4.1 Steps 3.1 and 3.2 prove both block comparisons for $k\ge1$, and step 1.1 proves the $k=0$ case. [step 1.1, step 3.1, step 3.2, F3] ∎
