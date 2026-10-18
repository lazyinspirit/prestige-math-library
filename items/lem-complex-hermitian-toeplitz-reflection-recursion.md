---
id: lem-complex-hermitian-toeplitz-reflection-recursion
kind: lemma
title: "Complex Hermitian Toeplitz bordering yields reflection coefficients and
  positive pivots"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-durbin-levinson-forecast-recursion
  - def-matrix-product-and-identity-matrix
  - def-toeplitz-circulant-and-displacement-notation
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT OpenCourseWare 6.341, Discrete-Time Signal Processing, Lecture 13:
        The Levinson-Durbin Recursion"
      url: "https://users.utcluj.ro/~cmuresan/PSM/6-341-fall-2005/contents/lecture-no\
        tes/lec13.pdf"
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.5.3"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $n\ge1$ and let $T_n=(t_{i-j})_{0\le i,j<n}$ be Hermitian positive definite, so $t_{-r}=\overline{t_r}$. For $0\le k\le n$, set $T_k=(t_{i-j})_{0\le i,j<k}$, with $T_0$ empty, and for $0\le k<n$ set $g_k=(t_1,\ldots,t_k)^T$, with $g_0$ empty. Define $\phi_0$ empty and $\nu_0=t_0$. For each $0\le k\le n-2$, let $J_k$ reverse $k$ coordinates, put $c_k=J_k\overline{g_k}$, and set
$$\alpha_{k+1}:=\frac{t_{k+1}-c_k^*\phi_k}{\nu_k},\qquad \phi_{k+1}:=\begin{pmatrix}\phi_k-J_k\overline{\phi_k}\,\alpha_{k+1}\\ \alpha_{k+1}\end{pmatrix},\qquad \nu_{k+1}:=\nu_k(1-|\alpha_{k+1}|^2).$$
Every denominator used is strictly positive; $T_k\phi_k=g_k$ and $\nu_k=t_0-g_k^*\phi_k>0$ for $0\le k<n$. Computing through order $n-1$ takes $O(n^2)$ complex arithmetic operations and $O(n)$ working storage. This is the complex matrix-bordering extension; the real ACVF forecast procedure remains [[alg-durbin-levinson-forecast-recursion]].

## Facts & Assumptions

**Given:** A finite Hermitian positive-definite Toeplitz matrix $T_n$, its lags, and the displayed recursively defined vectors and scalars.

[F1] The zero-based Toeplitz convention is $(T_k)_{ij}=t_{i-j}$, and Hermitian symmetry is $t_{-r}=\overline{t_r}$. [[def-toeplitz-circulant-and-displacement-notation]]

[F2] A Hermitian positive-definite square matrix admits a Cholesky factorization with positive diagonal, and hence is invertible. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]

[F3] Matrix products are defined by finite sums over the shared index; $x^*=\overline{x}^{\,T}$. [[def-matrix-product-and-identity-matrix]] [[def-toeplitz-circulant-and-displacement-notation]]

## Proof

1.1 Each leading block $T_k$ is positive definite: if $y\ne0$ in $\mathbb C^k$, append zeros to obtain $\widetilde y\ne0$ in $\mathbb C^n$; then $y^*T_ky=\widetilde y^*T_n\widetilde y>0$ by [F1]. Thus every nonempty $T_k$ is invertible by [F2], and $t_0>0$ by testing the first coordinate vector. The empty case has the stated empty solution. [given, F1, F2, algebra, construct]

2.1 Reversal is an involutive real permutation, so $J_k^T J_k=I_k$. Reversal and Hermitian symmetry give $J_k\overline{T_k}J_k=T_k$: its $(i,j)$ entry is $\overline{t_{(k-1-i)-(k-1-j)}}=\overline{t_{j-i}}=t_{i-j}$. Taking inverses also gives $J_k\overline{T_k^{-1}}J_k=T_k^{-1}$, and the same identity implies $T_kJ_k\overline y=J_k\overline{T_ky}$ for every $y\in\mathbb C^k$. [F1, step 1.1, algebra]

2.2 At order $k=0$, both $T_0\phi_0=g_0$ and $\nu_0=t_0-g_0^*\phi_0$ are the empty identity and $t_0>0$ by step 1.1. This is the induction base. [given, step 1.1, base]

2.3 For $k=0$, the formula gives $\alpha_1=t_1/t_0$ and $\phi_1=(\alpha_1)$, so $T_1\phi_1=g_1$ directly. [given, F1, step 1.1, algebra]

3.1 Fix $1\le k\le n-2$ and assume $T_k\phi_k=g_k$, $\nu_k=t_0-g_k^*\phi_k>0$. By step 2.1 and $T_k\phi_k=g_k$, $T_k^{-1}c_k=J_k\overline{\phi_k}$. Since $T_k$ is Hermitian and invertible, $(T_k^{-1})^*=(T_k^*)^{-1}=T_k^{-1}$, so $g_k^*\phi_k=g_k^*T_k^{-1}g_k=\overline{g_k^*T_k^{-1}g_k}$ is real. Therefore $c_k^*T_k^{-1}c_k=(J_k\overline{g_k})^*(J_k\overline{\phi_k})=g_k^T\overline{\phi_k}=\overline{g_k^*\phi_k}=g_k^*\phi_k$. Thus the Schur pivot of $T_{k+1}$ after $T_k$ is $\nu_k$. It is positive by evaluating the positive quadratic form of $T_{k+1}$ at $(-T_k^{-1}c_k,1)^T$. [given, F1, step 1.1, step 2.1, ih, algebra]

4.1 Fix $1\le k\le n-2$. The first $k$ rows of $T_{k+1}\phi_{k+1}=g_{k+1}$ follow from $T_k\phi_k=g_k$ and $T_kJ_k\overline{\phi_k}=c_k$ (step 2.1). The last row is $c_k^*\phi_k+(t_0-c_k^*T_k^{-1}c_k)\alpha_{k+1}=t_{k+1}$ by the definition of $\alpha_{k+1}$ and the pivot identity in step 3.1. Thus $T_{k+1}\phi_{k+1}=g_{k+1}$. [given, F1, F3, step 2.1, step 3.1, algebra]

5.1 For every update $0\le k\le n-2$, expansion gives $g_{k+1}^*\phi_{k+1}=g_k^*\phi_k+\alpha_{k+1}\overline{(t_{k+1}-c_k^*\phi_k)}=g_k^*\phi_k+\nu_k|\alpha_{k+1}|^2$, since $\nu_k$ is real; hence $\nu_{k+1}=t_0-g_{k+1}^*\phi_{k+1}$. By step 2.3 when $k=0$ and step 4.1 when $k\ge1$, $T_{k+1}\phi_{k+1}=g_{k+1}$. Set $c_{k+1}=J_{k+1}\overline{g_{k+1}}$; step 2.1 gives $T_{k+1}^{-1}c_{k+1}=J_{k+1}\overline{\phi_{k+1}}$, and Hermitian symmetry gives $c_{k+1}^*T_{k+1}^{-1}c_{k+1}=g_{k+1}^*\phi_{k+1}$. Thus $\nu_{k+1}$ is the Schur complement of $T_{k+1}$ in $T_{k+2}$. This leading block is HPD by step 1.1; evaluating its quadratic form at $(-T_{k+1}^{-1}c_{k+1},1)^T$ proves $\nu_{k+1}>0$, including the terminal case $k+2=n$. [given, F1, F3, step 1.1, step 2.1, step 2.3, step 4.1, algebra]

6.1 At stage $k$, one inner product and one vector update use $O(k+1)$ operations; summing these costs over $0\le k\le n-2$ gives $O(n^2)$. The input lags and current and next coefficient vectors require $O(n)$ storage, and no earlier coefficient vector is needed after its update. [given, step 2.3, step 4.1, step 5.1, algebra, discharge-induction] ∎
