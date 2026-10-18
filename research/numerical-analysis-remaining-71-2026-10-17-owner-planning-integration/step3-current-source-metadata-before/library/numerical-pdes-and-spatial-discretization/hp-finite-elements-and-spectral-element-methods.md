---
page: hp-finite-elements-and-spectral-element-methods
title: hp finite elements and spectral elements
status: draft
items:
  - def-hp-integrated-legendre-projector
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-legendre-gauss-lobatto-nodes-are-distinct
  - lem-reference-jacobi-weighted-endpoint-kernel
  - thm-hp-simplex-weighted-spectral-projection
  - lem-hp-triangle-degree-uniform-strong-edge-lift
  - lem-hp-unweighted-legendre-derivative-tail
  - lem-hp-analytic-polynomial-approximation-on-a-triangle
  - lem-hp-weighted-analytic-corner-pointwise-control
  - def-legendre-gauss-lobatto-rule-on-affine-boxes
  - lem-hp-corner-uniform-degree-dof-count
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-hp-analytic-p-convergence-on-fixed-tensor-mesh
  - thm-hp-reference-interval-integrated-legendre-projection
  - thm-hp-simplex-p-dependent-face-trace-inverse
  - thm-hp-triangle-unweighted-smooth-approximation
  - lem-hp-simplex-p-explicit-conforming-interpolant
  - thm-hp-galerkin-energy-error-on-fixed-mesh
  - thm-hp-gll-top-mode-and-puniform-energy-equivalence
  - thm-hp-corner-exponential-energy-convergence
  - thm-hp-galerkin-h-p-regularity-energy-bound
  - thm-hp-gll-strang-error-with-aliasing-defect
examples: []
requires:
  - spectral-collocation-and-galerkin-methods
  - curved-mesh-geometry-and-conservative-mesh-transfer
---

This page defines variable-degree spaces on matching affine simplicial and tensor-box meshes. It proves the p-explicit simplex inverse trace estimate, an ordinary Sobolev triangle projector, a degree-uniform strong-edge lift, and the resulting varying-degree conforming interpolant with its actual lowest shared-edge degree dependence. It also proves analytic fixed-mesh box p convergence, GLL p-uniform norm equivalence with the exact Strang defect retained, weighted pointwise corner bounds, and the full two-dimensional geometric hp energy rate. The corner proof uses its direct weighted and edge-lift suppliers and does not assume H2 regularity on singular caps. The local estimates concern affine cells. The declared same-frontier curved-mesh prerequisite supplies a separate geometric framework with its own mapping and transfer hypotheses; affine approximation and quadrature claims here do not assert curved-cell consistency.

The diagram records the trace-matching convention for two cells with unequal local degrees. The shared trace lies in the lower-degree face space; geometric adjacency alone does not impose conformity.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) rectangle (2,1.4);
  \draw[thick] (2,0) rectangle (4,1.4);
  \draw[dashed] (2,0) -- (2,1.4);
  \node at (1,0.75) {$K_1,\ p_1=3$};
  \node at (3,0.75) {$K_2,\ p_2=5$};
  \node[rotate=90] at (2.28,0.7) {$p_F=\min(p_1,p_2)$};
  \draw[<->] (0,-0.25) -- (4,-0.25) node[midway,below] {$h$-refinement changes cell sizes};
\end{tikzpicture}
```

For a fixed tensor mesh, the integrated Legendre projector gives an explicit coefficient-based p estimate, and a reference-cell analytic derivative bound yields exponential p convergence. For polygonal corner singularities, the proved 2D branch uses nested matching shape-regular geometric corner meshes, at most $O(k)$ triangles, and uniform total degree $p_k\simeq ck$; it yields an $e^{-bN^{1/3}}$ best-approximation and Galerkin energy rate for the stated weighted-analytic class. The general varying-degree Galerkin theorem now carries the local triangle comparison estimates through Céa, retaining each cell diameter, the minimum incident shared-edge degree, the Sobolev regularity and the actual continuity/coercivity constants. For arbitrary degrees at least one, piecewise H2 data already give an explicit first-order h energy estimate; more generally integer regularity $s\ge2$ gives $h^{s-1}$ when the effective trace degree is at least $s-1$. For cellwise integer regularity $r\ge5$, the additional p-dependent bound has $h^{r-1}$ times the proved factorial factor, bounded at sufficiently high trace degree $m$ by $(4/m)^{r-4}$. Both the H1 norm and zero-Dirichlet gradient norm are covered. No optimal p rate or growth estimate for the $r$-dependent constant is asserted.
