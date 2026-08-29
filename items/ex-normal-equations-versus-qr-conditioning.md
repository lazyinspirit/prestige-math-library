---
id: ex-normal-equations-versus-qr-conditioning
kind: example
title: "Normal equations square the conditioning compared with QR on a badly scaled least-squares problem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normal-equations-square-the-spectral-condition-number, thm-gram-schmidt-orthonormalisation]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 18 and Lecture 19"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Example

For $\varepsilon=10^{-8}$ the badly scaled least-squares matrix

$$A=\begin{pmatrix}1&0\\0&\varepsilon\\0&0\end{pmatrix}$$

has $\kappa_2(A)=10^{8}$, while its normal-equation matrix
$A^{\mathsf T}A=\operatorname{diag}(1,\varepsilon^{2})$ has
$\kappa_2(A^{\mathsf T}A)=10^{16}=\kappa_2(A)^{2}$. A Gram–Schmidt (QR) route
works with the upper triangular $R$ whose singular values equal those of $A$,
so it keeps the conditioning at $\kappa_2(A)=10^{8}$ instead of squaring it.

## Facts & Assumptions

**Given:** The matrix $A=\begin{pmatrix}1&0\\0&\varepsilon\\0&0\end{pmatrix}$ with $\varepsilon=10^{-8}>0$, and the least-squares problem of minimising $\lVert Ax-b\rVert_2$.

[L1] For full-column-rank $A$ with singular values $\sigma_1\ge\cdots\ge\sigma_n>0$, the normal-equation matrix satisfies $\kappa_2(A^{\mathsf T}A)=\kappa_2(A)^{2}$ where $\kappa_2(A)=\sigma_1/\sigma_n$ ([[thm-normal-equations-square-the-spectral-condition-number]]).

[L2] Gram–Schmidt orthonormalisation applied to the independent columns of $A$ produces orthonormal columns $q_1,q_2$ spanning the same column space ([[thm-gram-schmidt-orthonormalisation]]).

## Verification

**Proof technique:** direct.

1.1 The columns of $A$ are orthogonal and have norms $1$ and $\varepsilon$.
Writing $A=U\Sigma V^{\mathsf T}$ with
$U=[e_1\ e_2]$, $V=I_2$, and the $2\times2$ matrix
$\Sigma=\operatorname{diag}(1,\varepsilon)$ shows that the singular values are the
diagonal entries $1$ and $\varepsilon$ of $\Sigma$. [algebra]

1.2 By [L2], Gram-Schmidt applied to the columns $a_1=(1,0,0)^{\mathsf T}$ and $a_2=(0,\varepsilon,0)^{\mathsf T}$ returns the already orthogonal unit vectors $q_1=(1,0,0)^{\mathsf T}$ and $q_2=(0,1,0)^{\mathsf T}$ after scaling by their norms. Writing $Q=[q_1\ q_2]$, one has $A=QR$ with $R=Q^{\mathsf T}A=\operatorname{diag}(1,\varepsilon)$. [L2, algebra, construct]

2.1 Hence $\kappa_2(A)=1/\varepsilon=10^{8}$, and $A^{\mathsf T}A$ is the $2\times 2$ diagonal matrix $\operatorname{diag}(1,\varepsilon^{2})$, whose singular values are $1$ and $\varepsilon^{2}$. [step 1.1, algebra]

2.2 By step 1.2, $R=\operatorname{diag}(1,\varepsilon)$, so its singular values are $1$ and $\varepsilon$ and therefore $\kappa_2(R)=1/\varepsilon=10^{8}$. [step 1.2, algebra]

3.1 By [L1], $\kappa_2(A^{\mathsf T}A)=\kappa_2(A)^{2}=10^{16}$: forming the normal equations squares the conditioning of the least-squares problem. [L1, step 2.1]

4.1 Steps 3.1 and 2.2 compare the two routes on the same badly scaled problem: the normal-equation matrix carries condition number $10^{16}$, the square of $\kappa_2(A)$, while the Gram–Schmidt triangular factor $R$ carries $10^{8}$, the original conditioning of the problem. [step 3.1, step 2.2] ∎
