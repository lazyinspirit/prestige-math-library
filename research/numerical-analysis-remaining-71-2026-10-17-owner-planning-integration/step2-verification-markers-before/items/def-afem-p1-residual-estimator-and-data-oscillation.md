---
id: "def-afem-p1-residual-estimator-and-data-oscillation"
kind: "definition"
title: "Residual indicators and data oscillation for P1 AFEM"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 0
deps:
  - "def-matching-affine-simplicial-meshes"
  - "def-broken-and-conforming-polynomial-spaces"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-countable-choice"
  - "thm-matching-continuous-piecewise-polynomials-are-wkp"
  - "thm-zero-boundary-piecewise-polynomials-in-w10p"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound, PDF pp. 1–5."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
---
## Definition

Assume Countable Choice for the $L^2$ and Sobolev conventions of [[def-countable-choice]].

All functions and data are real-valued. Let $\Omega\subset\mathbb R^2$ be a bounded polygon and let $\mathcal T$ be a finite conforming matching triangulation by nondegenerate affine triangles, with maximum shape-regularity constant $\Gamma$. Write $h_K=\operatorname{diam}K$ and $h_E=\operatorname{diam}E$. Let $V(\mathcal T)$ be the continuous, piecewise-affine zero-boundary subspace of [[def-broken-and-conforming-polynomial-spaces]], which lies in $H_0^1(\Omega;\mathbb R)$ by [[thm-matching-continuous-piecewise-polynomials-are-wkp]] and [[thm-zero-boundary-piecewise-polynomials-in-w10p]]. The exact weak model is
$$-\Delta u+b\cdot\nabla u=f,\qquad u\in H_0^1(\Omega;\mathbb R),\quad f\in L^2(\Omega;\mathbb R),\quad b\in\mathbb R^2\ \text{constant}.$$
The weak form is $\int_\Omega\nabla u\cdot\nabla v+(b\cdot\nabla u)v\,dx=\int_\Omega fv\,dx$ for every $v\in H_0^1(\Omega;\mathbb R)$. The case $b=0$ is the symmetric Laplace model. Given $U\in V(\mathcal T)$, its cell residual is $R_K(U)=f|_K-b\cdot\nabla(U|_K)$; this is $f+\Delta U-b\cdot\nabla U$ because $\Delta U=0$ on each cell. For an interior edge $E=K^+\cap K^-$ define the outward flux jump
$$J_E(U)=\nabla U|_{K^+}\cdot n_{K^+}+\nabla U|_{K^-}\cdot n_{K^-},$$
where $n_{K^\pm}$ are the unit outward normals. Set
$$\eta_K(U)^2=h_K^2\|R_K(U)\|_{L^2(K)}^2+\frac12\sum_{E\subset\partial K,\ E\ {\rm interior}}h_E\|J_E(U)\|_{L^2(E)}^2,$$
and $\eta(U,\mathcal S)^2=\sum_{K\in\mathcal S}\eta_K(U)^2$ for $\mathcal S\subset\mathcal T$. The factor $1/2$ assigns each interior-edge contribution once globally. Let $\Pi_K^0$ be the $L^2(K)$ projection onto constants. The cell data oscillation is
$$\operatorname{osc}_K(U)^2=h_K^2\|R_K(U)-\Pi_K^0R_K(U)\|_{L^2(K)}^2,\qquad \operatorname{osc}(U,\mathcal S)^2=\sum_{K\in\mathcal S}\operatorname{osc}_K(U)^2.$$
Since $b\cdot\nabla U$ is constant on $K$, this oscillation equals $h_K^2\|f-\Pi_K^0f\|_2^2$.

For a separate definitional interface, consider the symmetric diffusion model $-\operatorname{div}(A\nabla u)=f$, where $A$ is a symmetric uniformly elliptic matrix field in the sense of [[def-uniformly-elliptic-divergence-form-operator]] and is Lipschitz on each cell. Its cell residual for a piecewise-affine $U$ is $R_K^A(U)=f+\operatorname{div}(A\nabla U)$, and its outward conormal-flux jump is the sum of $A\nabla U\cdot n_K$ from the two incident cells. Let $\Pi_E^0$ be the $L^2(E)$ projection onto constants. The projected edge term $h_E\|J_E^A-\Pi_E^0J_E^A\|_{L^2(E)}^2$ records nonconstant conormal flux. The reliability, contraction, and complexity results authored here concern $A=I$ only; this extension supplies notation and no coefficient-dependent theorem.

## Prerequisite interface

The matching affine mesh and continuous broken-polynomial conventions are those of [[def-matching-affine-simplicial-meshes]] and [[def-broken-and-conforming-polynomial-spaces]]. The proof of the weak representation uses [[thm-reference-simplex-trace-and-gauss-green]] and [[lem-oriented-facet-cancellation-on-matching-meshes]].
