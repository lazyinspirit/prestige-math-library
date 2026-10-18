---
id: ex-small-fill-distance-can-have-poor-rbf-conditioning
kind: example
title: "A small fill distance can coexist with poor separation and conditioning"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - lem-matern-spectral-integral-and-normalization
  - lem-separated-sites-matern-gram-bound
  - cor-rayleigh-quotient-extreme-eigenvalue-characterisation
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-condition-number-of-a-nonsingular-linear-system
  - def-induced-matrix-p-norm
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter 4, equations (4.5)–(4.8)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
verification:
---

## Example

Assume Countable Choice. For fixed $d\ge1$, $\nu>0$, and $a>0$, let $X_m$ be the midpoint grid in $\Omega=(0,1)^d$ for each odd $m\ge3$. There are $0<\delta_m<1/(4m^2)$ such that the augmented sets $Z_m=X_m\cup\{x_0+\delta_me_1\}$, with $x_0=(1/2,\ldots,1/2)$, satisfy $h_{Z_m}\to0$, $\rho_{Z_m}\to\infty$, and $\kappa_2(K_{Z_m})\to\infty$ for the normalized Matérn kernel.

## Facts & Assumptions

**Given:** Countable Choice, odd integers $m\ge3$, the midpoint grid
$$X_m=\left\{\left(\frac{i_1+1/2}{m},\ldots,\frac{i_d+1/2}{m}\right):0\le i_j<m\right\},$$
its central site $x_0=(1/2,\ldots,1/2)$, and the normalized Matérn kernel $k$.

[F1] An admitted domain is nonempty, bounded and Lipschitz and has the uniform cone condition; $h_X=\sup_{x\in\Omega}\min_{y\in X}|x-y|$, $q_X=\tfrac12\min_{i\ne j}|x_i-x_j|$, and $\rho_X=h_X/q_X$. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

[F2] The normalized Matérn kernel is continuous and satisfies $k(0)=1$. ([[lem-matern-spectral-integral-and-normalization]])

[F3] For distinct sites with $q_X\le1$, the exact Gram matrix is positive definite; its smallest eigenvalue is the minimum Rayleigh quotient, and a real symmetric matrix has an orthonormal eigenbasis. ([[lem-separated-sites-matern-gram-bound]], [[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]])

[F4] The condition number is $\kappa_2(K)=\|K\|_2\|K^{-1}\|_2$, and the induced 2-norm is the supremum of $\|Kv\|_2$ over unit vectors. ([[def-condition-number-of-a-nonsingular-linear-system]], [[def-induced-matrix-p-norm]])

## Verification

**Proof technique:** add a near-duplicate and test its normalized difference vector.

**Given:** The data above.

1.1 The cube is bounded and Lipschitz. At a boundary point $p$, let $I$ be the nonempty set of active coordinates ($p_j=0$ or $1$), with inward signs $\sigma_j=1$ at $0$ and $-1$ at $1$. Put $u_j=\sigma_j/\sqrt{|I|}$ for $j\in I$ and $u_j=0$ otherwise. In the orthogonal coordinates $x=p+y+tu$ with $y\perp u$, a sufficiently small neighborhood has no constraints from inactive coordinates, and the active inequalities reduce to $$t>\max_{j\in I}(-\sqrt{|I|}\,\sigma_j y_j).$$ This is the epigraph of a finite maximum of linear functions, hence a local Lipschitz graph with the cube on one side. The cube also satisfies the uniform cone condition. For $x\in[0,1]^d$, choose signs $\sigma_j=1$ if $x_j\le1/2$ and $-1$ otherwise, and put $u=(\sigma_1,\ldots,\sigma_d)/\sqrt d$. If $u=e_1$ take $Q_x=I$; otherwise put $v=(e_1-u)/|e_1-u|$ and $Q_x=I-2vv^{\mathsf T}$, which is orthogonal and sends $e_1$ to $u$. Choose $0<\theta<\pi/2$ with $\cos\theta/\sqrt d-\sin\theta>0$, and set $r_0=1/2$. For any cone vector $z$, $z_1>|z|\cos\theta$ and $|z-z_1e_1|<|z|\sin\theta$. Hence $\sigma_j(Q_xz)_j\ge z_1/\sqrt d-|z-z_1e_1|>|z|(\cos\theta/\sqrt d-\sin\theta)>0$ for each coordinate. Each coordinate moves toward the cube's interior by less than $r_0$, so $x+Q_xz\in(0,1)^d$. [F1, given, construct, algebra]

1.2 Distinct midpoint sites have fill distance at most $\sqrt d/(2m)$. Since $m$ is odd, $x_0\in X_m$. By continuity in [F2], choose $\epsilon_m>0$ so that $|1-k(\delta e_1)|<1/m$ whenever $0<\delta<\epsilon_m$, then choose $0<\delta_m<\min\{\epsilon_m,1/(4m^2)\}$. Strict positive definiteness for $x_0$ and $x_0+\delta_me_1$ makes $1-k(\delta_me_1)>0$, so $0<1-k(\delta_me_1)<1/m$. Put $Z_m=X_m\cup\{x_0+\delta_me_1\}$. The new site is inside the cube because $\delta_m<1/(4m^2)<1/2$. Every other grid site is at distance at least $1/m$ from $x_0$, while $\delta_m<1/(4m^2)<1/(2m)$, so the new site is distinct from all grid sites. At the boundary corner $0$, the nearest grid point is $\left(1/(2m),\ldots,1/(2m)\right)$, at distance $\sqrt d/(2m)$; the new site has squared distance $d/4+\delta_m+\delta_m^2>d/(4m^2)$, so $\min_{z\in Z_m}|z|=\sqrt d/(2m)$. For $D_m(x)=\min_{z\in Z_m}|x-z|$, the triangle inequality gives $|D_m(x)-D_m(y)|\le|x-y|$. Since $x_n=(1/n,\ldots,1/n)\in\Omega$ for $n\ge2$ and $x_n\to0$, $D_m(x_n)\to D_m(0)$; the fill-distance supremum therefore satisfies $h_{Z_m}\ge\sqrt d/(2m)\ge1/(2m)$. Adding a site cannot increase fill distance, so also $h_{Z_m}\le\sqrt d/(2m)\to0$. The separation radius satisfies $0<q_{Z_m}\le\delta_m/2<1/(8m^2)$; consequently $\rho_{Z_m}=h_{Z_m}/q_{Z_m}>4m\to\infty$. [F1, F2, F3, given, choose, algebra]

2.1 Let $u$ be the unit vector with entries $1/\sqrt2$ and $-1/\sqrt2$ at the new site and $x_0$, and zero elsewhere. The corresponding Rayleigh quotient is $$u^{\mathsf T}K_{Z_m}u=\tfrac12(1+1-2k(\delta_me_1))=1-k(\delta_me_1).$$ Hence [F3] gives $0<\lambda_{\min}(K_{Z_m})\le1-k(\delta_me_1)<1/m$. By [F3] choose an orthonormal eigenbasis $Q$ and write $K_{Z_m}=Q\Lambda Q^{\mathsf T}$. Since every diagonal entry is $1$, $$\operatorname{tr}K_{Z_m}=|Z_m|=\sum_{i,j}q_{ij}^2\lambda_j=\sum_j\lambda_j,$$ so $\lambda_{\max}(K_{Z_m})$ is at least the average eigenvalue, namely $1$. For a unit vector $v=Qc$, orthogonality gives $\|K_{Z_m}v\|_2^2=\sum_j\lambda_j^2c_j^2\le\lambda_{\max}(K_{Z_m})^2$, with equality at a top eigenvector; the same calculation for $K_{Z_m}^{-1}$ gives induced 2-norm $1/\lambda_{\min}(K_{Z_m})$. Thus [F4] gives $\kappa_2(K_{Z_m})=\lambda_{\max}(K_{Z_m})/\lambda_{\min}(K_{Z_m})>m$. Together with step 1.2, this gives $h_{Z_m}\to0$, $\rho_{Z_m}\to\infty$, and condition number tending to infinity. [F2, F3, F4, step 1.2, algebra] ∎
