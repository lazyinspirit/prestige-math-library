---
id: thm-lsqr-residual-minimizes-on-krylov-subspace
kind: theorem
title: A nonbreakdown LSQR iterate minimizes residual on its Krylov space
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-golub-kahan-lsqr-with-givens-and-status
  - def-krylov-subspace-of-a-matrix-and-start-vector
  - prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-euclidean-inner-product
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Christopher C. Paige and Michael A. Saunders, LSQR: An Algorithm for Sparse Linear Equations and Sparse Least Squares"
      url: "https://web.stanford.edu/group/SOL/software/lsqr/lsqr-toms82a.pdf"
      locator: "§§2–4, printed pp. 44–51 / PDF pp. 1–8: orthogonal bidiagonalization, relation AV_k=U_{k+1}B_k, and Givens solution of the projected least-squares problem."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 18–22: Krylov subspace for CGLS/LSQR and least-squares minimization on the generated subspace."
---

## Statement

Let $A\in\mathbb R^{m\times n}$, $b\in\mathbb R^m$, $x_0\in\mathbb R^n$, and
$r_0=b-Ax_0$. Consider a $k$-step run of
[[alg-golub-kahan-lsqr-with-givens-and-status]] with nonzero initial residual
and no bidiagonalization or small-QR breakdown through step $k$. Then its
iterate $x_k$ minimizes $\|Ax-b\|_2$ over
$$x_0+\mathcal K_k(A^TA,A^Tr_0),$$
where $\mathcal K_k(M,v)=\operatorname{span}\{v,Mv,\ldots,M^{k-1}v\}$ is the
Krylov subspace of [[def-krylov-subspace-of-a-matrix-and-start-vector]].
The assertion is exact-arithmetic residual minimization; it is not a
convergence or noise-stability theorem.

## Facts & Assumptions

**Given:** The real matrix $A$, vectors $b,x_0$, and a nonbreakdown $k$-step run of the LSQR algorithm.

[F1] [[alg-golub-kahan-lsqr-with-givens-and-status]]: The recurrences are $\beta_{j+1}u_{j+1}=Av_j-\alpha_ju_j$ and $\alpha_{j+1}v_{j+1}=A^Tu_{j+1}-\beta_{j+1}v_j$. The procedure rotates the lower-bidiagonal $B_j$ and $\beta_1e_1$, solves $R_jz_j=d_j$ by back substitution, and sets $x_j=x_0+V_jz_j$.

[F2] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $\mathcal K_0(M,v)=\{0\}$; for $k\ge1$, a square matrix $M$ and vector $v$, $\mathcal K_k(M,v)=\operatorname{span}\{v,Mv,\ldots,M^{k-1}v\}$.

[F3] [[prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector]]: $\mathcal K_k(M,v)=\{p(M)v:p=0\text{ or }\deg p<k\}$.

[F4] [[thm-least-squares-solutions-and-normal-equation]]: A minimizer of a finite-dimensional least-squares residual exists; a full-column-rank coefficient matrix makes it unique.

[F5] [[def-euclidean-inner-product]]: $\langle u,v\rangle=u^Tv=\sum_i u_iv_i$ on each real coordinate space.

[F6] [[def-matrix-product-and-identity-matrix]]: Matrix multiplication uses the finite row-coordinate sums.

[F7] [[def-transpose-of-a-matrix]]: $(A^T)_{ji}=a_{ij}$, so $\langle Av,u\rangle=\langle v,A^Tu\rangle$ by interchanging the two finite sums.

## Proof

**Given:** The hypotheses above, and write $V_j=[v_1,\ldots,v_j]$ and $U_{j+1}=[u_1,\ldots,u_{j+1}]$.

1.1 If $k=0$, [F2] gives $\mathcal K_0(A^TA,A^Tr_0)=\{0\}$, so the feasible set is $\{x_0\}$ and $x_0$ is its residual minimizer. Henceforth assume $k\ge1$, so the stated nonbreakdown run initializes $u_1,v_1$. The initial vector $u_1=r_0/\|r_0\|_2$ is unit. Suppose $u_1,\ldots,u_j$ and $v_1,\ldots,v_j$ are orthonormal and satisfy the earlier Golub–Kahan recurrences. For $i<j$, $\langle Av_j,u_i\rangle=\langle v_j,A^Tu_i\rangle=0$ by [F5]–[F7], because $A^Tu_i$ lies in $\operatorname{span}\{v_{i-1},v_i\}$; for $i=j$, $\langle Av_j,u_j\rangle=\alpha_j$ by the definition of $\alpha_j$. Therefore $Av_j-\alpha_ju_j$ is orthogonal to $u_1,\ldots,u_j$, and division by the nonzero $\beta_{j+1}$ gives a unit $u_{j+1}$ orthogonal to them. For $i<j$, $\langle A^Tu_{j+1},v_i\rangle=\langle u_{j+1},Av_i\rangle=0$ by [F5]–[F7], since $Av_i=\alpha_i u_i+\beta_{i+1}u_{i+1}$ lies in $\operatorname{span}\{u_1,\ldots,u_j\}$; for $i=j$ the inner product equals $\beta_{j+1}$. Thus $A^Tu_{j+1}-\beta_{j+1}v_j$ is orthogonal to $v_1,\ldots,v_j$, and division by the nonzero $\alpha_{j+1}$ gives a unit $v_{j+1}$ orthogonal to them. Induction proves both orthonormality relations through step $k$. [given, F1, F2, F5, F6, F7, induction, algebra]

2.1 The column recurrences in [F1] assemble as $AV_k=U_{k+1}B_k$. Also $r_0=\beta_1u_1=\beta_1U_{k+1}e_1$. Hence for every $z\in\mathbb R^k$, $$b-A(x_0+V_kz)=r_0-AV_kz=U_{k+1}(\beta_1e_1-B_kz).$$ Orthonormality from [step 1.1] and the Euclidean norm definition [F5] imply $\|b-A(x_0+V_kz)\|_2=\|\beta_1e_1-B_kz\|_2$. [step 1.1, F1, F5, F6, algebra]

3.1 Each Givens rotation in [F1] is orthogonal because $(a/\rho)^2+(b/\rho)^2=1$ when $\rho=(a^2+b^2)^{1/2}>0$. Number the rows and columns here from one. Since $B_k$ is lower-bidiagonal, rotation $i$ annihilates its entry in row $i+1$, column $i$, while preserving the zeros in earlier columns; induction gives $Q B_k=\binom{R_k}{0}$ for the product $Q$ of all $k$ rotations, with $R_k$ upper triangular. Its diagonal entries are the nonzero rotation pivots $\rho$, so back substitution returns $z_k$ with $R_kz_k=d_k$. Write $Q\beta_1e_1=\binom{d_k}{\eta_k}$. Orthogonality gives, for every $z$, $\|\beta_1e_1-B_kz\|_2^2=\|d_k-R_kz\|_2^2+|\eta_k|^2$. The computed $z_k$ attains the lower bound $|\eta_k|^2$, proving its minimizing property directly from the instructions; it is unique by [F4], since the nonzero diagonal of $B_k$ makes it full column rank. Thus $x_k=x_0+V_kz_k$ minimizes the true residual over $x_0+\operatorname{span}\{v_1,\ldots,v_k\}$ by [step 2.1]. [F1, F4, F5, F6, step 2.1, induction, algebra]

4.1 The recurrence gives, for $j\ge1$, $$A^TAv_j=\alpha_j\beta_jv_{j-1}+(\alpha_j^2+\beta_{j+1}^2)v_j+\alpha_{j+1}\beta_{j+1}v_{j+1},$$ with the first term omitted at $j=1$. Every coefficient $\alpha_{j+1}\beta_{j+1}$ is nonzero in a nonbreakdown run, so induction shows $\operatorname{span}\{v_1,\ldots,v_k\}= \operatorname{span}\{v_1,A^TAv_1,\ldots,(A^TA)^{k-1}v_1\}$. Since $v_1=A^Tr_0/(\beta_1\alpha_1)$, [F2]–[F3] identify this span with $\mathcal K_k(A^TA,A^Tr_0)$. Substitution into [step 3.1] proves the Statement. [F1, F2, F3, F6, F7, step 3.1, induction, algebra] ∎
