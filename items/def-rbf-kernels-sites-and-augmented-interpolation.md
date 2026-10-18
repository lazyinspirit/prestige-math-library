---
id: def-rbf-kernels-sites-and-augmented-interpolation
kind: definition
title: "Radial kernels, polynomial augmentation, and site geometry"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: [lem-rbf-augmented-system-is-invertible]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), §§1 and 3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter 4"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix an integer $d\ge1$. An admitted domain $\Omega\subset\mathbb R^d$ is a nonempty bounded Lipschitz domain (its boundary is locally the graph of a Lipschitz function, with $\Omega$ on one side) with fixed $r_0>0$ and $0<\theta<\pi/2$ such that for every $x\in\overline\Omega$ there is an orthogonal map $Q_x$ for which
$$x+Q_x\{z\in\mathbb R^d:0<|z|<r_0,\ z_1>|z|\cos\theta\}\subset\Omega.$$
An orthogonal map is a real linear map with $Q_x^{\mathsf T}Q_x=I$, equivalently one preserving the Euclidean inner product. The map $Q_x$ may depend on $x$; no simultaneous selection of the maps is part of this definition.

A real radial kernel on $\mathbb R^d$ has the form $K(x,y)=\phi(|x-y|)$ for a function $\phi:[0,\infty)\to\mathbb R$. For a finite ordered list of distinct sites $X=(x_1,\ldots,x_N)$, its Gram matrix is $K_X=(K(x_i,x_j))_{i,j=1}^N$. The kernel is **strictly positive definite** if $c^{\mathsf T}K_Xc>0$ for every such $X$ and every nonzero $c\in\mathbb R^N$; the nonstrict positive-semidefinite condition replaces $>$ by $\ge$. Only strict positivity is used for the ordinary interpolation solve below.

For an integer $m\ge1$, let $\Pi_{m-1}(\mathbb R^d)$ be the real polynomials of total degree at most $m-1$, with an ordered basis $p_1,\ldots,p_J$, where $J=\dim\Pi_{m-1}(\mathbb R^d)$. The evaluation matrix on $X$ is $P_X=(p_j(x_i))_{i,j}$. The sites are **$m$-unisolvent** for this polynomial space when $P_X$ has linearly independent columns. A kernel is **strictly conditionally positive definite of order $m$** when, for every finite distinct $X$ and this evaluation matrix, $c^{\mathsf T}K_Xc>0$ for every nonzero $c\in\mathbb R^N$ satisfying $P_X^{\mathsf T}c=0$. Thus strict conditional positivity is a strict inequality on the moment-null subspace; it is stronger than the corresponding nonstrict inequality.

For data $y\in\mathbb R^N$, the strictly positive definite interpolation system is $K_Xa=y$. For an order-$m$ strictly conditionally positive definite kernel and $m$-unisolvent sites, the polynomially augmented interpolation system is
$$\begin{bmatrix}K_X&P_X\\P_X^{\mathsf T}&0\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\begin{bmatrix}y\\0\end{bmatrix}.$$
Whenever the relevant system has a unique solution, its kernel-plus-polynomial function $x\mapsto\sum_i a_iK(x,x_i)+\sum_j b_jp_j(x)$ is called the interpolant. Invertibility for the stated strict hypotheses is supplied by [[lem-rbf-augmented-system-is-invertible]].

For a finite nonempty site set $X\subset\Omega$, the **fill distance** is $h_X=\sup_{x\in\Omega}\min_{x_i\in X}|x-x_i|$. If $N\ge2$, the **separation radius** and **mesh ratio** are $q_X=\tfrac12\min_{i\ne j}|x_i-x_j|$ and $\rho_X=h_X/q_X$, respectively. These are exact geometric quantities, independent of any floating-point solver.
