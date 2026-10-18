---
id: thm-rbf-fd-polynomial-reproduction-and-local-truncation
kind: theorem
title: "Augmented RBF-FD weights reproduce polynomials and obey a local Taylor bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - lem-rbf-augmented-system-is-invertible
  - alg-augmented-rbf-finite-difference-weights
  - thm-multivariable-taylor-formula-with-lagrange-remainder
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Accelerated Training of Physics-Informed Neural Networks (PINNs) using Meshless Discretizations"
      url: "https://proceedings.neurips.cc/paper_files/paper/2022/file/0764db1151b936aca59249e2c1386101-Paper-Conference.pdf"
      locator: "Section 2.2, equations (8)–(11)"
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
verification:
  precheck: pass
---

## Statement

Let $p\ge0$ be an integer, let $Y=(y_1,\ldots,y_N)$ be distinct and $(p+1)$-unisolvent for $\Pi_p(\mathbb R^d)$, and let $K$ be a real strictly conditionally positive-definite kernel of order $p+1$. Fix a center $x$, an ordered basis $p_1,\ldots,p_J$ of $\Pi_p$, and a homogeneous constant-coefficient differential functional $L$ of order $t\le p$ for which all section derivatives in [[alg-augmented-rbf-finite-difference-weights]] exist. Let $(w,v)$ be the exact output of that procedure and put $r_Y=\max_i|y_i-x|$. Then the procedure returns success, and for every $q\in\Pi_p$,
$$\sum_{i=1}^Nw_iq(y_i)=Lq(x).$$
If $f\in C^{p+1}(U)$ on an open convex set $U$ containing the compact convex hull $H=\operatorname{conv}\{x,y_1,\ldots,y_N\}$, then
$$\left|\sum_iw_if(y_i)-Lf(x)\right|\le C_{d,p}\left(\sum_i|w_i|\right)r_Y^{p+1}\max_{|\alpha|=p+1}\sup_{z\in H}|D^\alpha f(z)|.$$
Consequently, when $r_Y>0$, a separately proved bound $\sum_i|w_i|\le C_wr_Y^{-t}$ yields the order $C_{d,p}C_wr_Y^{p+1-t}$ truncation bound. Unisolvence alone is not asserted to provide this weight-norm bound.

## Facts & Assumptions

**Given:** The sites, kernel, polynomial basis, center, functional, and function hypotheses in the Statement.

[F1] The exact algorithm forms the augmented matrix with blocks $K_Y,P,P^{\mathsf T},0$, right side $(b,\ell)$, and applies deterministic Gaussian elimination with row pivoting; the lower block of any solution is $P^{\mathsf T}w=\ell$. ([[alg-augmented-rbf-finite-difference-weights]])

[F2] Under strict conditional positive definiteness of order $p+1$ and $(p+1)$-unisolvence, the augmented matrix is invertible for every right-hand side. ([[lem-rbf-augmented-system-is-invertible]], [[def-rbf-kernels-sites-and-augmented-interpolation]])

[F3] Taylor's theorem gives a degree-$p$ polynomial $T_pf$ at $x$ whose value remainder at $y$ is bounded by $C_{d,p}|y-x|^{p+1}$ times the supremum of all order-$(p+1)$ partial derivatives on the segment. ([[thm-multivariable-taylor-formula-with-lagrange-remainder]])




## Proof

**Proof technique:** exact elimination, moment equations, and Taylor cancellation.

**Given:** The hypotheses above. All linear algebra and arithmetic in the algorithm are exact.

1.1 Let $M$ be the augmented matrix and $g$ its right side in [F1]. It is square and invertible by [F2]. Initially the leading $0\times0$ pivot block is invertible. Inductively suppose the first $k-1$ pivots have been nonzero. After their row swaps and elimination, the row-equivalent matrix has block form $\begin{bmatrix}U&B\\0&S\end{bmatrix}$ with $U$ invertible and $S$ the remaining Schur complement. The block matrix is invertible, so $S$ is invertible: if $Sz=0$, then $(-U^{-1}Bz,z)$ would be a nonzero vector in its kernel. If the first column of $S$ were zero, its first coordinate vector would be a nonzero kernel vector. Thus the finite set of remaining entries in column $k$ contains a nonzero entry, and the algorithm's least-index rule finds a nonzero pivot. Row swaps and adding multiples of pivot rows are invertible elementary row operations, so they preserve the solution set. After $N+J$ pivots the matrix is upper triangular with nonzero diagonal, and descending substitution returns the unique solution. Therefore the singular-system status is unreachable under the hypotheses. [F1, F2, induction, algebra]

2.1 Writing the returned vector as $(w,v)$, its lower block equation is $P^{\mathsf T}w=\ell$. For each basis polynomial $p_j$, this says $\sum_iw_ip_j(y_i)=Lp_j(x)$. Every $q\in\Pi_p$ is a linear combination $q=\sum_ja_jp_j$, so multiplying these identities by $a_j$ and summing, using linearity of $L$, gives $\sum_iw_iq(y_i)=Lq(x)$. [F1, step 1.1, algebra]

3.1 Let $T_pf$ be the Taylor polynomial of $f$ at $x$ of total degree at most $p$. Since $t\le p$, its derivatives at $x$ through order $t$ agree with those of $f$, so $LT_pf(x)=Lf(x)$. Applying step 2.1 to $T_pf$ gives $\sum_iw_iT_pf(y_i)=Lf(x)$. [F3, step 2.1, algebra]

4.1 Subtract the identity in step 3.1 from the sampled sum for $f$. For every $i$, [F3] bounds $|f(y_i)-T_pf(y_i)|$ by $C_{d,p}|y_i-x|^{p+1}$ times the derivative supremum on $H$, since each segment lies in the convex hull $H$. The triangle inequality and $|y_i-x|\le r_Y$ now give the stated truncation estimate. When $r_Y>0$, the additional weight bound yields the final conditional rate. [F3, step 3.1, algebra] ∎
