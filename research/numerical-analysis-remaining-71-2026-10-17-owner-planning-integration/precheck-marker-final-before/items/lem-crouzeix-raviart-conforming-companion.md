---
id: lem-crouzeix-raviart-conforming-companion
kind: lemma
title: A conforming averaging companion for Crouzeix–Raviart functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - def-matching-affine-simplicial-meshes
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - lem-affine-simplex-gauss-green-formula
  - lem-crouzeix-raviart-face-jump-estimate
  - lem-compact-support-zero-extension-in-wkp
  - lem-oriented-facet-cancellation-on-matching-meshes
  - lem-shape-regular-affine-simplex-scaling
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - thm-continuity-from-above-for-measures
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.9, PDF pp. 7–8: local averaging and jump control for CR functions."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–350: the CR space, broken norm, and conformity defect."
---

## Statement

Assume Countable Choice. Let $\Omega$ be the bounded connected Lipschitz polyhedral domain and
$\mathcal T_h$ a finite matching shape-regular simplicial mesh of
[[def-crouzeix-raviart-global-space]]. For every $v_h\in V_h^{CR,0}$ there is
a continuous piecewise affine function $E_hv_h$ with zero boundary trace
such that
$$\|\nabla E_hv_h\|_{L^2(\Omega)} \le C\|\nabla_hv_h\|_{L^2(\Omega)},\qquad \|v_h-E_hv_h\|_{L^2(\Omega)} \le C h\|\nabla_hv_h\|_{L^2(\Omega)},$$
where $h=\max_{K\in\mathcal T_h}h_K$. In particular,
$E_hv_h\in H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice and a finite matching shape-regular triangulation of a bounded connected Lipschitz polyhedral domain and $v_h\in V_h^{CR,0}$.

[A1] Countable Choice is required by the affine shape-scaling and simplex Green interfaces used below. ([[def-countable-choice]], [[lem-shape-regular-affine-simplex-scaling]], [[lem-affine-simplex-gauss-green-formula]])

[F1] Shape regularity makes neighboring cell diameters comparable and bounds below the solid angle of every cell at each of its vertices; therefore each vertex star has a uniformly bounded number of cells. ([[lem-shape-regular-affine-simplex-scaling]])

[F2] On a shared facet, the two face means of $v_h$ agree; on a boundary facet the face mean is zero. ([[def-crouzeix-raviart-global-space]])

[F3] Cellwise Gauss–Green holds on every affine simplex, and opposite interior facet orientations cancel in a matching mesh. ([[lem-affine-simplex-gauss-green-formula]], [[lem-oriented-facet-cancellation-on-matching-meshes]])

[F4] $H^1_0(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$; compactly supported $W^{1,2}$ functions extend by zero, and compactly supported $W^{1,2}(\mathbb R^d)$ functions admit smooth compactly supported approximants. ([[def-wkp-zero-as-a-sobolev-closure]], [[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F5] A decreasing sequence of measurable subsets of a bounded set has measures tending to the measure of its intersection. ([[thm-continuity-from-above-for-measures]])

[F6] Smooth multipliers preserve $W^{1,2}$, a unit-mass mollifier smooths locally integrable functions, and its convolution derivative is obtained by differentiating the kernel. ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

## Proof
1.1 Vertex stars are facet-connected. Fix a mesh vertex $z$. For a sufficiently small sphere centered at $z$, the incident cells cut out a finite face-to-face triangulation of the local spherical link of $\Omega$ at $z$. The link is connected: at an interior vertex it is the whole sphere; at a boundary vertex the local Lipschitz graph description makes the set of inward directions a connected spherical region. Any two top-dimensional pieces of a connected finite triangulation can be joined by a path perturbed away from its codimension-two skeleton, so the path crosses only codimension-one faces. Thus the incident cells form a connected graph using facets containing $z$, and a boundary vertex star reaches a boundary facet. The number of cells in this graph is uniformly bounded by [F1]. [A1, F1, given]

2.1 For an interior mesh vertex $z$, define $(E_hv_h)(z)$ as the arithmetic mean of the values $v_K(z)$ over cells $K$ incident to $z$. For a boundary vertex set $(E_hv_h)(z)=0$. On each cell define $E_hv_h$ as the affine polynomial with these vertex values. Adjacent cell restrictions agree at every vertex of their common facet, hence agree on the whole facet, so $E_hv_h$ is continuous and piecewise affine. Every boundary facet has all its vertices assigned zero, so its polynomial trace is identically zero. [A1, F2, step 1.1, given]

3.1 If cells $K,L$ share a facet $F$ containing a vertex $z$, then the face mean of each affine restriction equals its value at the facet barycenter $b_F$. By [F2] these values agree, and therefore $|v_K(z)-v_L(z)|\le h_F(|\nabla v_K|+|\nabla v_L|)$. If $F$ is a boundary facet containing $z$, its mean is zero, so $|v_K(z)|\le h_F|\nabla v_K|$. Following the bounded facet paths of step 1.1 gives, for every cell $K$ and vertex $z\in K$, $|v_K(z)-(E_hv_h)(z)|\le C h_K\sum_{L\ni z}|\nabla v_L|$, where adjacent diameters are comparable by [F1]. The affine barycentric formula on $K$ now gives $\|v_h-E_hv_h\|_{L^2(K)}\le C h_K\sum_{L\cap K\text{ shares a vertex}}\|\nabla v_L\|_{L^2(L)}$ and $\|\nabla(E_hv_h-v_K)\|_{L^2(K)}\le C\sum_{L\cap K\text{ shares a vertex}}\|\nabla v_L\|_{L^2(L)}$. Each patch contains a uniformly bounded number of cells and overlaps only a uniformly bounded number of times by [F1]; summing the squared inequalities proves both displayed norm bounds, except for $H^1_0$ membership. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 It remains to prove $E_hv_h\in H^1_0(\Omega)$. Extend $E_hv_h$ by zero to $\widetilde E$ on $\mathbb R^d$. Apply [F3] cellwise to $E_hv_h\,\varphi e_i$ for any $\varphi\in C_c^\infty(\mathbb R^d)$. Interior fluxes cancel because the traces of $E_hv_h$ agree, and boundary fluxes vanish because its boundary-facet trace is zero. Thus the zero extension has the cellwise gradient as its weak gradient and belongs to $W^{1,2}(\mathbb R^d)$. Let $M$ be the maximum of the finitely many cellwise gradient magnitudes. Restricting $\widetilde E$ to a line segment partitions the segment into finitely many cell/exterior pieces; on each piece it is affine with slope at most $M$, and continuity at the endpoints gives $|\widetilde E(x)-\widetilde E(y)|\le M|x-y|$. If a segment lies in a mesh face, its restriction is affine there with the same bound. Hence $\widetilde E$ is globally Lipschitz, and because it vanishes outside $\Omega$, $|E_hv_h(x)|\le M\,d_\Omega(x)$ for $d_\Omega(x)=\operatorname{dist}(x,\mathbb R^d\setminus\Omega)$. Choose a nonnegative unit-mass smooth bump $\rho$ supported in the unit ball, let $\theta(t)=0$ for $t\le1$, $\theta(t)=1$ for $t\ge2$, and define $\eta_\epsilon=(\theta(d_\Omega/\epsilon))*\rho_{\epsilon/4}$. The distance is 1-Lipschitz, so $\eta_\epsilon$ is smooth, supported in $\{d_\Omega\ge\epsilon/2\}\Subset\Omega$, equals one on $\{d_\Omega\ge9\epsilon/4\}$, and $\|\nabla\eta_\epsilon\|_\infty\le C/\epsilon$. The differences $\widetilde E-\eta_\epsilon\widetilde E$ and their gradients are supported in the boundary layer $S_\epsilon=\{x\in\Omega:d_\Omega(x)<9\epsilon/4\}$. On this layer $|E_hv_h|\le C M\epsilon$ and $|E_hv_h\nabla\eta_\epsilon|\le CM$. The sets $S_{1/n}$ decrease to the empty set and $\Omega$ has finite measure, so [F5] implies their measures tend to zero; hence $\eta_\epsilon E_hv_h\to E_hv_h$ in $W^{1,2}(\Omega)$. Each product has compact support in $\Omega$; [F4] and [F6] approximate it in $W^{1,2}$ by members of $C_c^\infty(\Omega)$. The closure definition in [F4] proves $E_hv_h\in H^1_0(\Omega)$. [A1, F3, F4, F5, F6, step 2.1, step 3.1] ∎