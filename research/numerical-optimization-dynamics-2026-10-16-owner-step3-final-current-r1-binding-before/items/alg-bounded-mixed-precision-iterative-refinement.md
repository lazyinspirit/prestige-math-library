---
id: alg-bounded-mixed-precision-iterative-refinement
kind: algorithm
title: "Bounded mixed-precision iterative refinement"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
    - title: "Higham and Mary, Mixed Precision Algorithms in Numerical Linear Algebra"
      url: https://eprints.maths.manchester.ac.uk/2841/1/paper_eprint.pdf
---

## Definition

Input nonsingular real $A\in\mathbb R^{n\times n}$, $n\ge1$, exact data $b\in\mathbb R^n$, and an initial iterate $x_0$ stored at solve/update precision $u_w$. Also input stored triangular factors $\widehat L,\widehat U$ formed at factorization precision $u_f$, where $\widehat L$ is lower triangular, $\widehat U$ is upper triangular, both have nonzero diagonals, and $\widehat A:=\widehat L\widehat U$ is the exact real product; thus $\widehat A$ is nonsingular. Input residual precision $u_r$, solve/update precision $u_w$, finite update budget $N\ge0$, tolerance $\tau\ge0$, a stagnation window $K_{\rm stag}\ge1$, nonnegative constants $\eta_r,\xi_r,\eta_w,\xi_w$, and a proposed contraction upper bound $0\le q_{\rm cert}<1$. Let $x_*=A^{-1}b$. Use the operationwise model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] at each stated precision. Entries of the exact data $A,b$ are available as real operands to the residual operations; the stored factors, iterates, residuals, and corrections are used as their exact represented values in those operations.

Certificates have the following fixed format: one real matrix $B\in\mathbb R^{n\times n}$ before iteration, nonnegative real scalars $\rho_k$ for $0\le k\le N$, and nonnegative real scalars $\omega_k$ for $0\le k<N$. Each entry may instead be marked missing. All certificate checks use exact real addition, subtraction, multiplication, division by a positive number, nonnegative square roots, and comparisons; they are not rounded operations at $u_r$ or $u_w$. Evaluate finite sums and products in increasing index order. In particular, evaluate $\|v\|_2=\sqrt{\sum_i v_i^2}$ and $\|M\|_F=\sqrt{\sum_{i,j}M_{ij}^2}$ by these exact operations. This is an ideal exact-real certificate verifier, not a claim that arbitrary real inputs admit a finite-bit implementation.

Before iterating, check triangularity and nonzero diagonals of the factors; on failure return `inconclusive` with $x_0$. A missing or incorrectly shaped $B$ returns `inconclusive` with $x_0$. Form $\widehat A=\widehat L\widehat U$ exactly and check $B\widehat A=I$ entrywise. If this fails, return `inconclusive` with $x_0$. Set
$$a_+=\|A\|_F,\qquad a_-=a_+/\sqrt n,\qquad h=\|B\|_F,\qquad d=\|I-BA\|_F.$$
Accept the initial certificate precisely when
$$d+h\bigl((1+\eta_w)\eta_r+\eta_w\bigr)a_+\le q_{\rm cert}<1;$$
otherwise return `inconclusive` with $x_0$. Here $B=\widehat A^{-1}$, and the inequalities $a_-\le\|A\|_2\le a_+$ and $\|M\|_2\le\|M\|_F$ from [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]] make this a sufficient certificate for
$$q=\|I-\widehat A^{-1}A\|_2+\|\widehat A^{-1}\|_2\bigl((1+\eta_w)\eta_r+\eta_w\bigr)\|A\|_2\le q_{\rm cert}.$$
These conservative tests may reject data for which sharper norm certificates exist.

Before entering the iteration loop, initialize the consecutive-equality counter $c_{\rm stag}=0$ and mark the preceding residual as undefined. Retain this counter and preceding residual across iterations; do not reinitialize them inside the loop. The counter records the number of consecutive equalities between adjacent successfully certified computed residual vectors.

For each $k=0,\ldots,N$, compute the residual by rows in increasing $i$: initialize $s_i=0$, then for $j=1,\ldots,n$ in increasing order compute $p_{ij}=\operatorname{fl}_{u_r}(A_{ij}x_{k,j})$ and $s_i=\operatorname{fl}_{u_r}(s_i+p_{ij})$; finally set $\widehat r_{k,i}=\operatorname{fl}_{u_r}(b_i-s_i)$. Any operationwise range failure returns `inconclusive` with the current iterate and the first failing row, column, and operation. Define the exact residual defect $\delta_{r,k}=\widehat r_k-(b-Ax_k)$, so $\widehat r_k=A(x_*-x_k)+\delta_{r,k}$. Check that $\rho_k$ is present and nonnegative and that
$$\sum_i\delta_{r,k,i}^2\le\rho_k^2,\qquad \rho_k\le\eta_r(a_-\|x_k\|_2+\|b\|_2)+\xi_r.$$
A missing scalar or failed comparison returns `inconclusive` with the current iterate. These exact tests imply $\|\delta_{r,k}\|_2\le\eta_r(\|A\|_2\|x_k\|_2+\|b\|_2)+\xi_r$.
Use the retained consecutive-equality counter and preceding residual. Use the exact Euclidean norm of the stored residual vector for the status comparison; this is a comparison of the already computed vector, not an additional rounded arithmetic operation. If $\|\widehat r_k\|_2\le\tau$, return `residual-tolerance` with $x_k$. If a preceding residual exists, compare its components exactly with those of $\widehat r_k$: if all are equal, increment $c_{\rm stag}$ by one; otherwise reset it to zero. If $c_{\rm stag}=K_{\rm stag}$, return `successful-stagnation` with $x_k$. This status certifies only that the last $K_{\rm stag}$ successful updates produced identical computed residual vectors, with all range and contraction certificates accepted; it certifies neither a small exact error nor convergence. Before any further update, store $\widehat r_k$ as the preceding residual.

If $k=N$ and neither status above was returned, return `budget-exhausted` with $x_k$. Otherwise solve $\widehat L y_k=\widehat r_k$ by forward substitution, then $\widehat U\widehat z_k=y_k$ by backward substitution, using precision $u_w$. For forward substitution, visit rows $i=1,\ldots,n$ in increasing order, initialize $s_i=0$, and for $j=1,\ldots,i-1$ in increasing order compute $p_{ij}=\operatorname{fl}_{u_w}(\widehat L_{ij}y_{k,j})$ and $s_i=\operatorname{fl}_{u_w}(s_i+p_{ij})$, then $t_i=\operatorname{fl}_{u_w}(\widehat r_{k,i}-s_i)$ and $y_{k,i}=\operatorname{fl}_{u_w}(t_i/\widehat L_{ii})$. For backward substitution, visit rows $i=n,\ldots,1$ in decreasing order, initialize $s_i=0$, and for $j=i+1,\ldots,n$ in increasing order compute $p_{ij}=\operatorname{fl}_{u_w}(\widehat U_{ij}\widehat z_{k,j})$ and $s_i=\operatorname{fl}_{u_w}(s_i+p_{ij})$, then $t_i=\operatorname{fl}_{u_w}(y_{k,i}-s_i)$ and $\widehat z_{k,i}=\operatorname{fl}_{u_w}(t_i/\widehat U_{ii})$. Update components in increasing order by $x_{k+1,i}=\operatorname{fl}_{u_w}(x_{k,i}+\widehat z_{k,i})$. A failed operation returns `inconclusive` with the current iterate and first failing operation location.

After a successful update, define the exact residual-equivalent update defect
$$\delta_{w,k}:=\widehat A(x_{k+1}-x_k)-\widehat r_k,$$
so $x_{k+1}=x_k+\widehat A^{-1}(\widehat r_k+\delta_{w,k})$. Check that $\omega_k$ is present and nonnegative and that $\sum_i\delta_{w,k,i}^2\le\omega_k^2$ and $\omega_k\le\eta_w\|\widehat r_k\|_2+\xi_w$; otherwise return `inconclusive` with $x_{k+1}$. These tests imply $\|\delta_{w,k}\|_2\le\eta_w\|\widehat r_k\|_2+\xi_w$. Continue until one of the stated statuses is returned. All loops are finite. The procedure does not claim exact termination or unconditional convergence.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 The certificate checks use finite matrix products and sums, square roots of nonnegative sums of squares, and division by $\sqrt n>0$. They compare exact real expressions and return `inconclusive` on a missing certificate or failed test. The residual, substitution and update loops have the stated finite bounds. [given, algebra]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎
