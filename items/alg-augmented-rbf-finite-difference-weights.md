---
id: alg-augmented-rbf-finite-difference-weights
kind: algorithm
title: "Exact augmented RBF-FD weights for a local differential functional"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - lem-rbf-augmented-system-is-invertible
  - thm-reals-field
justified_by: [thm-rbf-fd-polynomial-reproduction-and-local-truncation]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Accelerated Training of Physics-Informed Neural Networks (PINNs) using Meshless Discretizations"
      url: "https://proceedings.neurips.cc/paper_files/paper/2022/file/0764db1151b936aca59249e2c1386101-Paper-Conference.pdf"
      locator: "Section 2.2, equations (8)–(11)"
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
verification:
  precheck: n/a
---

## Definition

The **exact augmented RBF finite-difference weight procedure** has the following inputs: a dimension $d\ge1$; an integer polynomial degree $r\ge0$; a finite ordered stencil $Y=(y_1,\ldots,y_N)\subset\mathbb R^d$ of distinct sites that is $(r+1)$-unisolvent for $\Pi_r(\mathbb R^d)$; a real kernel $K$ strictly conditionally positive definite of order $r+1$; an ordered basis $p_1,\ldots,p_J$ of $\Pi_r(\mathbb R^d)$; a center $x\in\mathbb R^d$; a homogeneous constant-coefficient differential functional $L=\sum_{|\alpha|=t}c_\alpha D^\alpha$ with $0\le t\le r$; and a neighborhood of $x$ on which every section $z\mapsto K(z,y_i)$ has continuous derivatives through order $t$. Here $\alpha\in\mathbb N_0^d$, $|\alpha|=\sum_j\alpha_j$, and $D^\alpha$ is the corresponding partial derivative. All arithmetic in this procedure is exact real arithmetic.

The input is supplied with total, correct oracles for admissibility and exact evaluation. The admissibility oracle returns whether all the stated input conditions hold, including the polynomial-basis condition, global strict conditional positive definiteness, and continuous section differentiability on the supplied neighborhood. On an affirmative answer, the evaluation oracles return the exact real values $K(y_i,y_j)$, $p_j(y_i)$, $(L_zK(z,y_i))|_{z=x}$, and $(Lp_j)(x)$ for the finitely many requested indices. Oracle calls are primitive operations in this model; neither global kernel admissibility nor differentiation is claimed to be decidable by real arithmetic alone.

Query the admissibility oracle. If it returns false, return `inadmissible-input`. Otherwise use the evaluation oracles to form $P_{ij}=p_j(y_i)$, $b_i=(L_zK(z,y_i))|_{z=x}$, $\ell_j=(Lp_j)(x)$, and
$$M=\begin{bmatrix}K_Y&P\\P^{\mathsf T}&0\end{bmatrix},\qquad g=\begin{bmatrix}b\\ell\end{bmatrix}.$$
Solve $Mz=g$ by exact Gaussian elimination with deterministic nonzero-pivot row selection: set $A=M$, $c=g$, and $n=N+J$. For $k=1,\ldots,n$, choose the least $i\ge k$ with $A_{ik}\ne0$; if none exists, return `singular-system`. Swap rows $i$ and $k$ in both $A$ and $c$. For each $j=k+1,\ldots,n$ in increasing order, set $\mu=A_{jk}/A_{kk}$, replace row $j$ by row $j-\mu\,\mathrm{row}_k$ in $A$ and $c$, and set $A_{jk}=0$. After all pivots, set $z_n=c_n/A_{nn}$; then, for $k=n-1,n-2,\ldots,1$ in decreasing order, set $z_k=(c_k-\sum_{j=k+1}^n A_{kj}z_j)/A_{kk}$. Return `success` with the first $N$ coordinates $w$ of $z$ and the remaining $J$ polynomial multipliers. The stated strict hypotheses imply that `singular-system` is unreachable, as proved by [[lem-rbf-augmented-system-is-invertible]].

The returned $w$ is an exact mathematical weight vector. The nonsingularity lemma [[lem-rbf-augmented-system-is-invertible]] makes `singular-system` unreachable for every input that passes the stated strict hypotheses. This definition makes no floating-point stability or solver-error claim.
