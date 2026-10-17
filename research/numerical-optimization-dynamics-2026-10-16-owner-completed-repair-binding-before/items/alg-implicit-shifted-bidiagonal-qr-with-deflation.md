---
id: alg-implicit-shifted-bidiagonal-qr-with-deflation
kind: algorithm
title: "Finite budget implicit shifted QR for bidiagonal singular values"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-scaled-complex-householder-and-givens-updates, alg-householder-bidiagonalization, def-real-and-complex-givens-transformations, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries, def-frobenius-matrix-norm]
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §6.3"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, §§2–5"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Definition

Input the original $A\in\mathbb F^{m\times n}$, its bidiagonal reduction $U_B^*CV_B=\begin{bmatrix}B\\0\end{bmatrix}$ from [[alg-householder-bidiagonalization]] (where $C=A$ if $m\ge n$ and $C=A^*$ otherwise), a deflation tolerance $\tau\ge0$, and a finite nonnegative integer sweep budget $N$. Initialize sweep accumulators $U_\Sigma,V_\Sigma$ to identities and $B$ to the supplied upper bidiagonal matrix. Write its diagonal as $d_i$ and superdiagonal as $e_i$, and set $e_0=0$.

Before each sweep, set $e_i$ to zero and record its old value whenever $|e_i|\le\tau(|d_i|+|d_{i+1}|)$. The zero entries split the active blocks. For each active block $[\ell,r]$ of size at least two, form only the tridiagonal entries of $T=B^*B$: $T_{ii}=|d_i|^2+|e_{i-1}|^2$ and $T_{i,i+1}=\overline{d_i}e_i$. Choose $\mu$ to be the eigenvalue of the trailing Hermitian block $\begin{bmatrix}T_{r-1,r-1}&T_{r-1,r}\\T_{r,r-1}&T_{rr}\end{bmatrix}$ closest to $T_{rr}$, resolving a tie by the smaller eigenvalue. If the leading pivot $d_\ell$ is zero or has magnitude at most $\tau\max(|e_{\ell-1}|,|e_\ell|)$, use the zero-shift branch $\mu=0$; in that branch start with a right Givens rotation that maps the row pair $(d_\ell,e_\ell)$ to $(\rho,0)$, avoiding division by the small or zero diagonal.

In the ordinary branch choose the first right Givens factor $G_\ell$ so that $G_\ell^*(T_{\ell\ell}-\mu,T_{\ell+1,\ell})^T=(\rho,0)^T$, where $T_{\ell+1,\ell}=\overline{e_\ell}d_\ell$. Apply $B\leftarrow BG_\ell$ and update the right accumulator. For $j=\ell,\ldots,r-1$, choose a left Givens factor $H_j$ so that $H_j^*(B_{j,j},B_{j+1,j})^T=(\rho,0)^T$; apply it to rows $j,j+1$ and update the left accumulator. If $j<r-1$, choose a right Givens factor $G_{j+1}$ so that $(B_{j,j+1},B_{j,j+2})G_{j+1}=(\rho,0)$; apply it to columns $j+1,j+2$ and update the right accumulator. Continue until the bulge reaches the active block endpoint. A zero annihilation vector uses the identity rotation. In finite precision each Givens formation/update uses [[alg-scaled-complex-householder-and-givens-updates]], conjugate-transposed as needed for the stated left/right orientation. Its exact representative is canonical unitary; target zero writes are included in its error bound. The initial shift-vector rotation does not zero an unrelated entry of $B$. Each Givens factor is chosen using [[def-real-and-complex-givens-transformations]] and its annihilation guarantee in [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]].

Count one sweep for each processed active block. Stop successfully when every active block has size one. If the total budget is exhausted first, return `budget-exhausted` with the current diagonal candidates, accumulated factors, discarded-entry list, triplet residuals, and orthogonality residuals. Return `range-failure` if any nonzero exact intermediate is outside the normal range, or if an operation, norm or pivot is invalid or nonfinite. On success return `converged`, candidate singular values obtained by the scaled two-component modulus evaluation of each $d_i$ (real absolute value is exact), and the accumulated triplet vectors. For a nonconverged block, the candidates are estimates only and carry no accuracy claim.

In tall orientation set $\widehat U=U_BU_\Sigma$ and $\widehat V=V_BV_\Sigma$; in wide orientation swap these roles when mapping back from $A^*$. For each $d_i\ne0$, multiply the corresponding left column by $d_i/|d_i|$ so the candidate singular value is nonnegative. For every candidate triplet $(\widehat\sigma_i,\widehat u_i,\widehat v_i)$, report $\|A\widehat v_i-\widehat\sigma_i\widehat u_i\|_2$ and $\|A^*\widehat u_i-\widehat\sigma_i\widehat v_i\|_2$. Also report $\|\widehat U^*\widehat U-I\|_F$ and $\|\widehat V^*\widehat V-I\|_F$. The reports expose finite-budget and rounding behavior; they do not certify convergence by themselves. Matrix residuals use the Frobenius norm defined in [[def-frobenius-matrix-norm]].

The theoretical factors in backward-error conclusions are exact products of the stored local unitary representatives. Rounded dense accumulators are reported with their own orthogonality residuals and are not asserted exactly unitary. Any additional sparsity cleanup is recorded as a separate discarded-entry perturbation.
