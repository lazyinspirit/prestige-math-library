---
id: thm-gohberg-semencul-inverse-identity-and-cost
kind: theorem
title: "The Hermitian positive-definite Gohberg–Semencul formula is exact and
  quadratic"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve
  - def-displacement-rank-generators-and-lower-shift
  - def-matrix-product-and-identity-matrix
  - def-toeplitz-circulant-and-displacement-notation
  - lem-complex-hermitian-toeplitz-reflection-recursion
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Labahn and Tamir Shalom, Inversion of Toeplitz Matrices with Only
        Two Standard Equations, Theorem 1.1"
      url: "https://cs.uwaterloo.ca/~glabahn/Papers/tamir-george-1.pdf"
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, §§2–3.1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
verification:
  precheck: pass
---

## Statement

Let $T_n=(t_{i-j})_{0\le i,j<n}$ be Hermitian positive definite, and let $b\in\mathbb C^n$. Run [[alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve]] in exact arithmetic. It returns $x=T_n^{-1}b$. If $u=T_n^{-1}e_0$ and $v=T_n^{-1}e_{n-1}$ are the first and last inverse columns, then
$$T_n^{-1}=\frac1{u_0}\left(L(u)L(u)^*-L(Z_nv)L(Z_nv)^*\right),\qquad u_0>0.$$
The recursion and four triangular Toeplitz products use $O(n^2)$ complex arithmetic operations and $O(n)$ storage beyond the input, output, and lag vector. This is an exact-arithmetic cost statement and makes no finite-precision stability claim.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a Hermitian positive-definite Toeplitz matrix $T_n$, its lag sequence, and an arbitrary $b\in\mathbb C^n$.

[F1] $T_{ij}=t_{i-j}$, Hermitian symmetry is $t_{-r}=\overline{t_r}$, and $J_n$ reverses coordinates. [[def-toeplitz-circulant-and-displacement-notation]]

[F2] The conjugate-reversal recursion produces $T_k\phi_k=g_k$ and $\nu_k=t_0-g_k^*\phi_k>0$ for $0\le k<n$. [[lem-complex-hermitian-toeplitz-reflection-recursion]]

[F3] The algorithm forms $v=(-J_{n-1}\overline{\phi_{n-1}}/\nu_{n-1},1/\nu_{n-1})^T$, $u=J_n\overline v$, and applies the displayed triangular Toeplitz expression to $b$. [[alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve]]

[F4] Hermitian positive-definite matrices are invertible. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]

[F5] Matrix products use the finite entrywise convention of [[def-matrix-product-and-identity-matrix]]. Here the adjoint is the conjugate transpose, $(M^*)_{ij}=\overline{M_{ji}}$.

## Proof

1.1 If $n=1$, then $T_1=[t_0]$ with $t_0>0$, $\phi_0$ is empty, $\nu_0=t_0$, and $u=v=(1/t_0)$. Also $Z_1v=0$ and $L(u)=[1/t_0]$, so the algorithm returns $b/t_0=T_1^{-1}b$. Hence assume $n\ge2$. [given, F2, F3, F4, algebra]

2.1 Put $g=(t_1,\ldots,t_{n-1})^T$, $c=J_{n-1}\overline g$, and $\phi=\phi_{n-1}$. Then $T_n=\begin{pmatrix}T_{n-1}&c\\c^*&t_0\end{pmatrix}$ and $T_{n-1}\phi=g$ by [F1]–[F2]. The reversal identity gives $T_{n-1}^{-1}c=J_{n-1}\overline\phi$. Moreover, $c^*T_{n-1}^{-1}c=g^T\overline\phi=\overline{g^*\phi}=g^*\phi$, because $T_{n-1}^*=T_{n-1}$ implies $(T_{n-1}^{-1})^*=(T_{n-1}^*)^{-1}=T_{n-1}^{-1}$. Thus the Schur complement is $t_0-c^*T_{n-1}^{-1}c=\nu_{n-1}>0$. In $T_nv=e_{n-1}$, the top block equation gives $v_{0:n-2}=-T_{n-1}^{-1}c\,v_{n-1}=-J_{n-1}\overline\phi\,v_{n-1}$; substituting this in the last equation gives $\nu_{n-1}v_{n-1}=1$. Hence $v=\binom{-J_{n-1}\overline\phi/\nu_{n-1}}{1/\nu_{n-1}}$. Thus $v=T_n^{-1}e_{n-1}$. [given, F1, F2, F4, step 1.1, algebra]

3.1 Entrywise, $J_n\overline{T_n}J_n=T_n$ because $\overline{t_{j-i}}=t_{i-j}$. Also $X^*=(T_n^{-1})^*=(T_n^*)^{-1}=T_n^{-1}=X$. Taking inverses in the reversal identity gives $X=J_n\overline XJ_n$, so $u=J_n\overline v=T_n^{-1}e_0$. Since $v_{n-1}=1/\nu_{n-1}$ is positive real, $u_0=v_{n-1}=1/\nu_{n-1}>0$. The first-column block equation $g u_0+T_{n-1}u_{1:n-1}=0$ gives $u_{1:n-1}=-u_0\phi$, and step 2.1 gives $v_{0:n-2}=-u_0J_{n-1}\overline\phi$. [given, F1, F2, step 2.1, algebra]

4.1 Set $X=T_n^{-1}$ and $D=X-Z_nXZ_n^*$. By step 3.1, $X$ is Hermitian and $T_nX=I_n$. Since the first row and column of $Z_n$ and $Z_n^*$ vanish, $D_{0j}=X_{0j}=\overline{u_j}$ and $D_{i0}=X_{i0}=u_i$; these are the corresponding first row and column of $(u u^*-(Z_nv)(Z_nv)^*)/u_0$. For $1\le i,j<n$, subtract $(T_nX)_{i-1,j-1}=I_{i-1,j-1}$ from $(T_nX)_{ij}=I_{ij}$. The identity entries agree because $i=j$ exactly when $i-1=j-1$. Reindexing the second finite sum gives $$\sum_{k=1}^{n-1}t_{i-k}\bigl(X_{k,j}-X_{k-1,j-1}\bigr) =-t_iX_{0j}+t_{i-n}X_{n-1,j-1}.$$ The coefficient matrix is $T_{n-1}$, while $X_{0j}=\overline{u_j}$ and $X_{n-1,j-1}=\overline{v_{j-1}}$. [given, F1, F4, F5, step 2.1, step 3.1, algebra]

5.1 The right side in step 4.1 is $-g\,\overline{u_j}+(J_{n-1}\overline g)\,\overline{v_{j-1}}$. Applying $T_{n-1}^{-1}$ and using [F2] and the reversal identity gives $D_{ij}=-\phi_{i-1}\overline{u_j}+(J_{n-1}\overline\phi)_{i-1}\overline{v_{j-1}}$. By step 3.1, $u_i=-u_0\phi_{i-1}$ and $v_{i-1}=-u_0(J_{n-1}\overline\phi)_{i-1}$. Therefore, for every $i,j\ge1$, $D_{ij}=(u_i\overline{u_j}-v_{i-1}\overline{v_{j-1}})/u_0$. Together with the boundary entries in step 4.1, this proves $$D=\frac{u u^*-(Z_nv)(Z_nv)^*}{u_0}.$$ [F2, step 3.1, step 4.1, algebra]

6.1 The shift is nilpotent, $Z_n^n=0$. Summing $Z_n^qD(Z_n^*)^q$ for $q=0,\ldots,n-1$ telescopes to $X-Z_n^nX(Z_n^*)^n=X$. The columns of $L(u)$ are $Z_n^q u$, and the columns of $L(Z_nv)$ are $Z_n^q(Z_nv)$, so substituting the identity of step 5.1 into the telescoping sum yields the stated Gohberg–Semencul formula. The algorithm’s output is therefore $Xb=T_n^{-1}b$. [F3, F5, step 5.1, algebra]

7.1 The reflection recursion costs $O(n^2)$ operations and $O(n)$ workspace by [F2]. Each triangular Toeplitz product in step 6.1 evaluates at most $n(n+1)/2$ products and a comparable number of additions; the four products therefore cost $O(n^2)$. The two generator vectors and intermediate vectors require $O(n)$ storage, and the algorithm never materializes an $n\times n$ triangular factor. [F2, F3, step 6.1, algebra] ∎

## Remarks

The proof identifies an exact inverse representation. It does not establish that finite-precision Levinson or Gohberg–Semencul evaluation is backward stable; pivot and cancellation growth require separate analysis.
