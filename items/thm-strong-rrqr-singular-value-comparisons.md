---
id: thm-strong-rrqr-singular-value-comparisons
kind: theorem
title: "Strong RRQR block singular values compare to the full matrix spectrum"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-strong-rank-revealing-qr-with-finite-swaps, lem-singular-value-product-bound, lem-singular-values-lipschitz-in-spectral-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
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

Let $A\in\mathbb F^{m\times n}$ have full column rank, $m\ge n$, and let the exact-arithmetic version of [[alg-strong-rank-revealing-qr-with-finite-swaps]] return `success` with full QR factorization
$$A\Pi=Q\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix},$$
where $Q\in\mathbb F^{m\times m}$ is unitary and the displayed $R$ is upper trapezoidal with $m$ rows. Let the target satisfy $0\le k<n$ and the factor satisfy $f\ge1$. For $1\le k<n$, assume $R_{11}\in\mathbb F^{k\times k}$ is nonsingular and put $X=R_{11}^{-1}R_{12}$. Put $g=(1+f^2k(n-k))^{1/2}$. Then
$$\sigma_i(R_{11})\ge\frac{\sigma_i(A)}{g}\quad(1\le i\le k),\qquad \sigma_j(R_{22})\le g\,\sigma_{k+j}(A)\quad(1\le j\le n-k).$$
For $k=0$, the second comparison is the equality $R_{22}=Q^*A\Pi$ with $g=1$. These conclusions use the combined score in the algorithm; the bound on $X$ alone is not used as a substitute for control of $R_{22}$. For a computed candidate $\widehat R$ with the algorithm's verified certificate $(W,(b_{ij}),\varepsilon)$, put $\widetilde A=W\widehat R\Pi^*$. No full-column-rank assumption on $\widetilde A$ is required beyond nonsingularity of $\widehat R_{11}$ when $k>0$. Then the corresponding residual-adjusted bounds are
$$\sigma_i(\widehat R_{11})\ge\frac{\sigma_i(A)-\varepsilon}{g}\quad(1\le i\le k),\qquad \sigma_j(\widehat R_{22})\le g\bigl(\sigma_{k+j}(A)+\varepsilon\bigr)\quad(1\le j\le n-k).$$
For $k=0$, these reduce to $\sigma_j(\widehat R)\le\sigma_j(A)+\varepsilon$. Computed scores alone do not certify either conclusion.

## Facts & Assumptions

**Given:** A full-column-rank matrix and a successful factorization returned by the finite-swap algorithm.

[F1] In the exact-arithmetic version of [[alg-strong-rank-revealing-qr-with-finite-swaps]], success means $|X_{ij}|^2+(\omega_i\gamma_j)^2\le f^2$ for every $i,j$, where $\omega_i=\|e_i^*R_{11}^{-1}\|_2$ and $\gamma_j=\|R_{22}(:,j)\|_2$. The finite-precision branch tests computed scores and is not used here.

[F2] [[lem-singular-value-product-bound]]: $\sigma_i(XY)\le\sigma_i(X)\|Y\|_2$ for compatible matrices.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: the spectral and Frobenius norms are unitarily invariant, $\|M\|_2=\sigma_1(M)$, and $\|M\|_2\le\|M\|_F$.

[F4] [[lem-singular-values-lipschitz-in-spectral-norm]] bounds each singular-value change by the spectral norm of the perturbation.

## Proof

1.1 First, square unitary factors preserve every ordered singular value: [F3] gives $\|T\|_2=\|T^*\|_2=1$ for a positive-dimensional unitary $T$, and applying both inequalities of [F2] to $PMT$ gives $\sigma_i(PMT)\le\sigma_i(M)$; applying them to $M=P^*(PMT)T^*$ gives the reverse inequality. Thus if $k=0$, $R_{22}=Q^*A\Pi$ has the singular values of $A$, proving that case. Assume henceforth $1\le k<n$. Write $A_0=R_{11}$, $C=R_{22}$, and $X=A_0^{-1}R_{12}$. Summing the $k(n-k)$ inequalities in [F1] gives
$$\|X\|_F^2+\|A_0^{-1}\|_F^2\|C\|_F^2\le f^2k(n-k).$$
Indeed, $\sum_i\omega_i^2=\|A_0^{-1}\|_F^2$ and $\sum_j\gamma_j^2=\|C\|_F^2$. [F1, F2, F3, algebra]

2.1 Since $A$ has full column rank and $k<n$, $C$ has full column rank: if $Cz=0$ for nonzero $z$, then $R\binom{-A_0^{-1}R_{12}z}{z}=0$, contradicting full column rank of $R=Q^*A\Pi$, since $Q$ and $\Pi$ are invertible. Thus $\alpha=\|C\|_2/\sigma_k(A_0)>0$. Since $\sigma_k(A_0)=1/\|A_0^{-1}\|_2$, one has $\alpha^2=\|C\|_2^2\|A_0^{-1}\|_2^2\le\|C\|_F^2\|A_0^{-1}\|_F^2$, so step 1.1 gives $\|X\|_F^2+\alpha^2\le f^2k(n-k)$. [step 1.1, F1, F3, algebra]

3.1 By step 1.1, $R=Q^*A\Pi$ has the same singular values as $A$. Define $D_1=\operatorname{diag}(A_0,C/\alpha)$ and $W_1=\begin{bmatrix}I_k&X\\0&\alpha I_{n-k}\end{bmatrix}$, so $R=D_1W_1$. For vectors $x,y$, $\|W_1(x,y)\|_2^2=\|x+Xy\|_2^2+\alpha^2\|y\|_2^2$ is bounded by the quadratic form of $M_1=\begin{bmatrix}1&\|X\|_2\\\|X\|_2&\|X\|_2^2+\alpha^2\end{bmatrix}$ at $(\|x\|_2,\|y\|_2)$. For scalars $u,v$ its quadratic form is $(u+\|X\|_2v)^2+\alpha^2v^2\ge0$, so it is positive semidefinite and its largest eigenvalue is at most its trace; thus $\|W_1\|_2^2\le1+\|X\|_F^2+\alpha^2\le g^2$. Since $\|C/\alpha\|_2=\sigma_k(A_0)$, the ordered first $k$ singular values of $D_1$ are those of $A_0$. By [F2], $\sigma_i(R)\le\sigma_i(D_1)\|W_1\|_2$, proving $\sigma_i(A_0)\ge\sigma_i(A)/g$ for $i\le k$. [step 1.1, step 2.1, F2, F3, algebra]

3.2 Define $D_2=\operatorname{diag}(\alpha A_0,C)$ and $W_2=\begin{bmatrix}\alpha I_k&-X\\0&I_{n-k}\end{bmatrix}$, so $D_2=RW_2$. For vectors $x,y$, $\|W_2(x,y)\|_2^2=\|\alpha x-Xy\|_2^2+\|y\|_2^2$ is bounded by the quadratic form of $M_2=\begin{bmatrix}\alpha^2&\alpha\|X\|_2\\\alpha\|X\|_2&\|X\|_2^2+1\end{bmatrix}$ at $(\|x\|_2,\|y\|_2)$. Its determinant is $\alpha^2>0$ and its diagonal entries are positive, so it is positive semidefinite; its largest eigenvalue is at most its trace. Thus $\|W_2\|_2^2\le1+\|X\|_F^2+\alpha^2\le g^2$. The smallest singular value of $\alpha A_0$ is $\|C\|_2$, so the first $k$ singular values of $D_2$ are those of $\alpha A_0$ and its remaining $n-k$ singular values are those of $C$. Therefore $\sigma_j(C)=\sigma_{k+j}(D_2)\le\sigma_{k+j}(R)\|W_2\|_2\le g\sigma_{k+j}(A)$ by [F2] and step 1.1. [step 1.1, step 2.1, F2, F3, algebra]

4.1 The preceding block proof also applies to any upper trapezoidal $R$ whose $R_{11}$ is nonsingular and whose exact combined scores are at most $f$, even when $R$ is rank deficient. If $C\ne0$, $\alpha>0$ and steps 2.1–3.2 apply without the full-column-rank argument. If $C=0$, write $R=\operatorname{diag}(A_0,0)\begin{bmatrix}I&X\\0&I\end{bmatrix}$. Directly $R=A_0[I\;X]$ with zero lower rows and $\|[I\;X]\|_2^2=1+\|X\|_2^2\le g^2$. The product bound proves the first comparison, and the second is $0\le g\sigma_{k+j}(R)$. Thus the certificate gives both comparisons with $A$ replaced by $\widetilde A$ and blocks $\widehat R_{11},\widehat R_{22}$. Since $\|A-\widetilde A\|_2\le\varepsilon$, [F4] gives $\sigma_i(\widetilde A)\ge\sigma_i(A)-\varepsilon$ and $\sigma_{k+j}(\widetilde A)\le\sigma_{k+j}(A)+\varepsilon$. Combining proves the computed bounds. The $k=0$ case follows directly from unitary invariance and [F4]. [step 1.1, step 2.1, step 3.1, step 3.2, F2, F3, F4, algebra] ∎
