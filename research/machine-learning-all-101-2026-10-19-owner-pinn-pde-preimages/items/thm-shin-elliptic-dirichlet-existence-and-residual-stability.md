---
id: thm-shin-elliptic-dirichlet-existence-and-residual-stability
kind: theorem
title: "Exterior-sphere elliptic Dirichlet existence and residual stability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-shin-elliptic-divergence-form-operator
  - lem-shin-elliptic-residual-stability
  - cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  precheck: blocked
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Theorem D.1 and Lemma D.2, PDF pp. 25–26"
---

## Statement

Let $0<\alpha<1$ and let $U\subset\mathbb R^d$ be bounded and satisfy an exterior sphere condition at every boundary point. Let $a_{ij}=a_{ji}\in C^{1,\alpha}(U)$ be uniformly elliptic with minimum eigenvalue at least $\lambda_0>0$, let $b_i\in C^{1,\alpha}(U)$ and $c_i,d\in C^\alpha(U)$, and define
$$L[u]=\sum_{i,j=1}^dD_i(a_{ij}D_j u+b_i u)+\sum_{i=1}^d c_iD_i u+du.$$
Assume $\sum_{i,j}|a_{ij}(x)|^2\le\Lambda$ and $\lambda_0^{-2}(\|b(x)\|^2+\|c(x)\|^2)+\lambda_0^{-1}|d(x)|\le v^2$ on $U$, and use the expanded coefficients $\widetilde b_j=\sum_iD_i a_{ij}+b_j+c_j$ and $\widetilde c=\sum_iD_i b_i+d\le0$. For every $f\in C^{0,\alpha}(U)$ and $g\in C^0(\partial U)$, the source assertion is that the Dirichlet problem $L[u]=f$ in $U$, $u=g$ on $\partial U$ has a unique solution $u\in C^{2,\alpha}(U)\cap C^0(\bar U)$. For any $h\in C^0(U)$ with $L[h]\in C^{0,\alpha}(U)$ and $h\in C^{0,\alpha}(\partial U)$, the source further asserts
$$\|u-h\|_{C^0(U)}\le C\bigl(\|f-L[h]\|_{C^0(U)}+\|g-h\|_{C^0(\partial U)}\bigr),$$
where $C$ depends only on the domain and the displayed coefficient bounds.

## Statement references
[Shin et al., Theorem D.1 and Lemma D.2: elliptic existence and residual stability claim](https://arxiv.org/pdf/2004.01806)

[Shin et al., Theorem D.1, PDF p.25: existence assertion refuted by the sector example](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The exterior sphere, ellipticity, coefficient, sign, forcing, boundary-data, and trial-function assumptions in the Statement. For the refutation, temporarily assume the full existence assertion stated there. The claim is tested under the library's global bounded $C^{2,\alpha}(U)$ norm.

[A1] Assume for contradiction that the existence assertion in the Statement holds for all data satisfying its hypotheses.

[F1] On a bounded exterior-sphere sector, the Laplace Dirichlet problem with smooth forcing and zero data has a unique classical solution in $C^2(U)\cap C^0(\bar U)$ whose second derivatives are unbounded near the corner ([[cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain]]).

[F2] A zero-boundary harmonic function in $C^2(U)\cap C^0(\bar U)$ on a bounded domain vanishes by the local maximum-principle estimate ([[lem-shin-elliptic-residual-stability]]).

[F3] The library's $C^{2,\alpha}(U)$ norm includes global suprema of second derivatives over all of $U$ ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]).

## Proof

**Proof strategy:** contradict the asserted existence and uniqueness with the explicit sector problem.

1.1 Use the sector, Laplacian, smooth forcing, and zero boundary data from [F1]. The coefficient matrix is the identity, all lower-order coefficients vanish, and $\widetilde c=0$; the coefficient bounds hold with $\Lambda=d$ and $v=0$. The sector's exterior-sphere property and bounded Lipschitz geometry are proved in [F1]. Thus the hypotheses of [A1] hold. [given, A1, F1]

1.2 By [A1], the sector problem has a solution $u^*\in C^{2,\alpha}(U)\cap C^0(\bar U)$. The function $u$ from [F1] is another solution in $C^2(U)\cap C^0(\bar U)$. Their difference is zero-boundary harmonic, so [F2] gives $u^*=u$. [given, A1, F1, F2]

2.1 By [F1], $u$ has an unbounded second directional derivative at the vertex; by [F3], this excludes $u$ from the asserted global $C^{2,\alpha}(U)$ class. This contradicts step 1.2. Therefore the source existence claim, with the library's global Hölder convention and stated exterior-sphere hypotheses, is false. The residual stability estimate remains valid in the weaker classical class by the separate barrier proof, but it cannot restore the false existence claim. [step 1.2, F1, F3, contradiction] ∎

