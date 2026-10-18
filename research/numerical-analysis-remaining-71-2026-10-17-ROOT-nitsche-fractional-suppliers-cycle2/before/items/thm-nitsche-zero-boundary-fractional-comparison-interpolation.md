---
id: thm-nitsche-zero-boundary-fractional-comparison-interpolation
kind: theorem
title: Zero-boundary fractional interpolation in the Nitsche comparison norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, lem-nitsche-scaled-fractional-simplex-trace, def-nitsche-boundary-penalty-forms, lem-nitsche-h-one-zero-functions-have-zero-facet-traces, def-broken-and-conforming-polynomial-spaces, lem-shape-regular-affine-simplex-scaling, thm-reference-simplex-poincare-wirtinger, lem-reference-polynomial-norm-equivalence, thm-matching-continuous-piecewise-polynomials-are-wkp, thm-zero-boundary-piecewise-polynomials-in-w10p, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Statement

Assume Countable Choice, $d\ge2$, a nonempty connected bounded polyhedral open set $\Omega$, a finite matching shape-regular affine simplicial mesh $\mathcal T_h$, and a polynomial degree $k\ge1$ as in [[def-nitsche-boundary-penalty-forms]]. Put $h:=\max_{K\in\mathcal T_h}h_K$ and $\ell_\Omega:=\operatorname{diam}(\Omega)$. For every $1/2<s\le1$ there is an explicitly defined linear map
$$I_{h,0}:H^{1+s}(\Omega)\cap H^1_0(\Omega)\longrightarrow \mathbb P_1(\mathcal T_h)\cap H^1_0(\Omega)\subseteq Y_h$$
such that
$$\|\zeta-I_{h,0}\zeta\|_{\#,h}\le C h^s\|\zeta\|_{H^{1+s}(\Omega)}=C_D h^s\ell_\Omega^{1-s}\|\zeta\|_{H^{1+s}(\Omega)},\qquad C_D:=C\ell_\Omega^{s-1}.$$
Here $\|\cdot\|_{\#,h}$ and $Y_h=V_h\cap H^1_0(\Omega)$ are exactly those of [[def-nitsche-boundary-penalty-forms]]. The constants are uniform over the mesh family and depend only on $d,s$ and its shape-regularity bound; the displayed conversion to $C_D$ uses the fixed nonempty domain. The construction uses cell means and affine reconstructions, never point values of $\zeta$. Its boundary-value error vanishes exactly. No approximation statement for higher polynomial degree or for nonzero-trace primal data is asserted.

## Facts & Assumptions

**Given:** Countable Choice; $d\ge2$; nonempty connected bounded polyhedral $\Omega$; a finite matching shape-regular affine simplicial mesh; $k\ge1$; and $\zeta\in H^{1+s}(\Omega)\cap H^1_0(\Omega)$ with $1/2<s\le1$.

[F1] On each cell, $H^s$ restriction norms are defined by whole-space Bessel-potential extensions; gradients of $H^{1+s}$ extensions belong to $H^s$ by the Fourier multiplier bound ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F2] The scaled simplex trace estimate and its mean-zero fractional Poincaré consequence hold for $1/2<s\le1$ ([[lem-nitsche-scaled-fractional-simplex-trace]]).

[F3] Shape regularity gives uniform affine scaling, face-height comparability, and comparable diameters for cells sharing a facet ([[lem-shape-regular-affine-simplex-scaling]]). The mesh is the interior of its finite cell union, has disjoint cell interiors, whole-face matching, and exactly one or two incident cells at boundary or interior facets ([[def-matching-affine-simplicial-meshes]]).

[F4] For a fixed finite-dimensional reference polynomial space, face norms and linear evaluation functionals are bounded by the cell $L^2$ norm; in particular, on a physical facet $F$, $|p(z)|\le C|F|^{-1/2}\|p\|_{L^2(F)}$ for every affine $p$ and vertex $z\in F$ ([[lem-reference-polynomial-norm-equivalence]], [[lem-shape-regular-affine-simplex-scaling]]).

[F5] A continuous piecewise polynomial on a matching mesh is in $W^{1,2}(\Omega)$; if its polynomial traces vanish on every boundary facet, it belongs to $W^{1,2}_0(\Omega)$ ([[thm-matching-continuous-piecewise-polynomials-are-wkp]], [[thm-zero-boundary-piecewise-polynomials-in-w10p]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F6] Every function in closure-defined $H^1_0(\Omega)$ has zero $L^2$ trace on each boundary facet ([[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]]).

[F7] The Nitsche comparison seminorm has squared terms $\|\nabla v\|_\Omega^2$, $\sum_{F\in\mathcal F_h^\partial}h_F^{-1}\|v\|_F^2$, and $\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_nv\|_F^2$; $h_F=|K_F|/|F|$ and $Y_h=V_h\cap H^1_0(\Omega)$ ([[def-nitsche-boundary-penalty-forms]]).

[A1] Countable Choice is the only choice principle assumed by the restriction, Sobolev, and finite-dimensional approximation suppliers above ([[def-countable-choice]]).

## Proof


**Given:** The mesh and function $\zeta$ in the Statement and [F1]–[F7].

1.1 For each cell $K$, let $b_K$ be its centroid, let $m_K:=|K|^{-1}\int_K\zeta$, and let $g_K:=|K|^{-1}\int_K\nabla\zeta$. Define the affine polynomial $p_K(x):=m_K+g_K\cdot(x-b_K)$ and set $A_K:=|\nabla\zeta|_{s,K}$, where at $s=1$ this is the cell $L^2$ norm of the weak Hessian. The mean of $\zeta-p_K$ is zero and the mean of its gradient is zero. The mean-zero fractional Poincaré estimate [F2] applied to $\nabla\zeta$ gives $\|\nabla(\zeta-p_K)\|_K\le C h_K^sA_K$; ordinary mean-zero Poincaré applied to $\zeta-p_K$ then gives $\|\zeta-p_K\|_K\le C h_K^{1+s}A_K$. [F1, F2, given]

1.2 We record the required vertex-star geometry. The solid angle of every shape-regular cell at any vertex is at least $c(d,\sigma)>0$: the inscribed ball has radius at least $h_K/\sigma$, its center is at distance at most $h_K$ from the vertex, and rays through that ball contain a spherical cap of radius bounded below in terms of $\sigma$. Disjoint cell interiors give disjoint solid-angle interiors, so at most $N(d,\sigma)$ cells meet at a vertex. In the spherical link of a vertex, facet adjacency is adjacency of cells across a facet containing that vertex. At an interior vertex the link is the full sphere. Its cell-adjacency graph is connected: for $d=2$ the link is a circle divided into arcs; for $d\ge3$, each codimension-two-or-higher link face has dimension at most $d-3$, and the directions of endpoints whose chord from a fixed generic direction meets that face lie in its radial cone, of spherical dimension at most $d-2<d-1$. A finite union of these forbidden sets has measure zero, so choose an intermediate direction outside the forbidden sets for two generic endpoints and join them by two projected chord segments. The resulting path avoids the lower-dimensional skeleton and crosses only facet interiors, proving graph connectivity. At a boundary vertex, every connected component of the graph contains a boundary facet incident to the vertex. Otherwise a path from a cell-interior direction in that component to any generic direction cannot leave the component: each crossing is through a link facet, and the assumed absence of an exposed facet gives a neighboring cell in the same component. Thus every generic direction belongs to that component; its finite closed link is the full sphere, and the finitely many incident simplices then contain a whole ball about the vertex, making it interior, a contradiction. Any shortest path in a component has at most $N-1$ edges; shape regularity makes diameters comparable across each shared facet, so all cells on such a path have diameters comparable by a uniform constant. [F3, given, choose]

2.1 Apply [F2] with exponent $1$ to $\zeta-p_K$ and use step 1.1. This yields $\|T_F(\zeta-p_K)\|_F\le C h_K^{s+1/2}A_K$. Apply [F2] with exponent $s$ to each component of $\nabla(\zeta-p_K)$; its cell $L^2$ norm is bounded by step 1.1 and its fractional seminorm equals $A_K$ for $s<1$, while at $s=1$ its weak derivative is the Hessian. Thus $h_K^{1/2}\|T_F\nabla(\zeta-p_K)\|_F\le C h_K^sA_K$. [F1, F2, step 1.1, algebra]

3.1 For an interior mesh vertex $z$, define $c_z$ as the arithmetic mean of $p_L(z)$ over all incident cells $L$; for a boundary vertex set $c_z:=0$. Let $I_{h,0}\zeta$ be the continuous piecewise-affine function with these nodal coefficients. For neighboring cells $K,L$ sharing a facet $F$ that contains $z$, their $H^1$ traces of $\zeta$ agree on $F$: on compact subfacets this follows by local convolution of the global $H^1(\Omega)$ function in balls contained in $\Omega$, continuity of the two cell trace maps [F2], and exhaustion of the facet. Hence step 2.1 gives $\|p_K-p_L\|_F\le C h_K^{s+1/2}(A_K+A_L)$. The inverse evaluation bound [F4] yields $|p_K(z)-p_L(z)|\le C h_K^{1+s-d/2}(A_K+A_L)$. On a boundary facet containing $z$, [F6] gives zero trace of $\zeta$, so step 2.1 and [F4] give $|p_L(z)|\le C h_L^{1+s-d/2}A_L$. Telescope these bounds along the paths from step 1.2; the interior coefficient is an average over the connected star, and for a boundary vertex use the exposed facet in the component containing $K$. With $\omega_K$ the union of vertex stars of $K$, the bounded valence and local size comparability give $|c_z-p_K(z)|\le C h_K^{1+s-d/2}\left(\sum_{L\in\omega_K}A_L^2\right)^{1/2}.$ [F2, F3, F4, F6, step 2.1, step 1.2, algebra]

4.1 On $K$, the barycentric basis functions satisfy $\|\nabla\phi_z\|_K\le C h_K^{d/2-1}$ by [F3]. Combining step 3.1 with the local volume estimate in step 1.1 gives $\|\nabla(\zeta-I_{h,0}\zeta)\|_K\le C h_K^s\left(\sum_{L\in\omega_K}A_L^2\right)^{1/2}.$ The interpolant has zero polynomial trace on every boundary facet because all its boundary-vertex coefficients vanish; the same is true of $\zeta$ by [F6]. Thus the boundary-value term in the comparison seminorm is exactly zero. Since $\nabla I_{h,0}\zeta$ is constant on each cell, the intrinsic $s$-seminorm of $\nabla(\zeta-I_{h,0}\zeta)$ equals $A_K$ for $s<1$, and its weak derivative is the Hessian of $\zeta$ for $s=1$. Applying [F2] to this gradient and using $h_F\asymp h_K$ from [F3] gives for each boundary facet $F\subset\partial K$ $h_F\|\partial_n(\zeta-I_{h,0}\zeta)\|_F^2\le C h_K^{2s}\sum_{L\in\omega_K}A_L^2.$ [F2, F3, F6, F7, step 1.1, step 3.1, algebra]

5.1 Each $\omega_K$ has at most $(d+1)N$ cells and each cell occurs in at most $(d+1)N$ such patches. Summing the squared bounds from step 4.1 therefore gives $\|\zeta-I_{h,0}\zeta\|_{\#,h}^2\le C h^{2s}\sum_KA_K^2$. If $s<1$, choose a whole-space extension $Z$ of $\zeta$ within $\varepsilon$ of the restriction norm. Nonnegativity of the pair integrand and disjoint cell interiors imply $\sum_K|\nabla\zeta|_{s,K}^2\le|\nabla Z|_{s,\mathbb R^d}^2\le C\|Z\|_{H^{1+s}(\mathbb R^d)}^2$ by [F1] and [F2]; let $\varepsilon\downarrow0$. At $s=1$, the sum of cell Hessian norms is bounded by the global $H^2$ norm of any extension in the same way, then take the infimum. Thus $\sum_KA_K^2\le C\|\zeta\|_{H^{1+s}(\Omega)}^2$. Finally, [F5] puts the continuous zero-boundary affine interpolant in $Y_h$, and the definition of $C_D$ proves the Statement. [F1, F2, F3, F5, F7, A1, step 4.1, algebra] ∎
## Source notes

The construction is a cell-mean affine reconstruction with vertex averaging on interior stars and zero coefficients at boundary vertices. The full comparison seminorm estimate includes the weighted normal-derivative error and works on graded shape-regular meshes; no global quasi-uniformity, vertex values of the input, or $C^1$ trace characterization is used. It supplies the commissioned dual approximation branch while leaving the general higher-order/local primal approximation branch separate.
