---
id: def-pe26-scalar-substructuring-model
kind: definition
title: Scalar finite-element substructuring model
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-matching-affine-simplicial-meshes, def-broken-and-conforming-polynomial-spaces, def-reference-finite-element-and-unisolvent-dofs]
justified_by: []
aliases: []
axiom_use: "None; the definitions use finite meshes and finite-dimensional real vector spaces."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37, 83–89"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2, §§2.1–2.4"
      url: "https://d-nb.info/983219192/34"
verification:
  precheck: n/a
---

## Definition

Fix a bounded, connected polygonal open set $Ω\subset\mathbb R^2$ with a nonempty Dirichlet boundary segment. A finite **subdomain partition** is a family of connected polygonal open sets $Ω_i$, $1\le i\le N$, whose closures cover $\overline\Omega$, whose interiors are disjoint, and for which $\overline\Omega_i\cap\overline\Omega_j$ ($i\ne j$) is a whole common side, a common vertex, or empty. The outer Dirichlet segment is a union of mesh boundary sides. The edge-adjacency graph of each triangulated subdomain is connected, and the subdomain adjacency graph is connected to the Dirichlet boundary. Each subdomain has a matching affine simplicial triangulation; the triangulations match on every shared side. The family has a fixed shape-regularity bound, quasiuniform mesh size $h_i$, uniformly bounded polygon side count, corner angles bounded below, inradius comparable to $H_i$, and a uniform interior-cone parameter. Write $H_i=\operatorname{diam}(\Omega_i)$ and $H/h=\max_i H_i/h_i$.

Use continuous piecewise-affine ($P_1$) scalar functions on each triangulation. The reference-element and face-matching conventions are those of [[def-reference-finite-element-and-unisolvent-dofs]], [[def-matching-affine-simplicial-meshes]], and [[def-broken-and-conforming-polynomial-spaces]]: local polynomials are affine, their nodal values determine them, and conforming functions have equal traces across a shared side. For each subdomain choose a coefficient $\rho_i>0$, constant on $\Omega_i$ but allowed to jump across interfaces. Its local energy is

$$a_i(v,w)=\rho_i\sum_{K\subset\Omega_i}\int_K\nabla v\cdot\nabla w\,dx.$$

The global finite-element space consists of the continuous piecewise-affine functions on the subdomain meshes that vanish on the outer Dirichlet boundary, with energy $a(v,w)=\sum_i a_i(v|_{\Omega_i},w|_{\Omega_i})$. Local interior degrees of freedom are the mesh vertices strictly inside $\Omega_i$; local boundary degrees of freedom are its remaining vertices, with outer Dirichlet values fixed to zero. A **floating local block** means the same local energy before any outer-boundary values are fixed. A **subdomain corner** is a vertex of its polygonal boundary.

For uniform estimates, the fixed polygon-shape parameters include the scaled Lipschitz character: after rescaling each subdomain to diameter one, its boundary has a graph-chart cover with uniformly bounded chart count and Lipschitz constants and a uniformly positive neighborhood radius. The scaled mean-zero Poincaré constants are also included among these fixed shape parameters. A pointwise interior-cone bound alone is not a substitute for this uniform boundary-chart data. All constants in later two-dimensional estimates may depend on these polygon-shape, side-count, and mesh shape-regularity bounds, but not on $h$, $H$, the number of subdomains, or the positive numbers $\rho_i$.
