---
id: def-isogeometric-galerkin-patch-space-and-refinement
kind: definition
title: Conforming isogeometric Galerkin spaces and h/p/k refinement
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
  - alg-single-new-b-spline-knot-insertion
  - def-sobolev-space-wkp-and-its-norm
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry
  - lem-isogeometric-pullback-energy-norm-equivalence
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Definition

For one admissible patch map $F:\widehat\Omega\to\Omega$, let $S_h$ be a finite tensor-product B-spline space on a knot grid refining the geometry grid, and let $W$ be the positive denominator of the geometry representation. The parametric rational analysis space is
$$\widehat V_h:=\{s/W:s\in S_h\}.$$
Its physical push-forward is $\{\,\widehat v\circ F^{-1}:\widehat v\in\widehat V_h\,\}$. The homogeneous-Dirichlet conforming space is the subspace of these functions that belongs to $H^1_0(\Omega)$; the unconstrained conforming version is the subspace belonging to $H^1(\Omega)$. These spaces are finite dimensional because the tensor B-spline coefficient set is finite.

For vector-valued elasticity in $\mathbb R^d$, use the componentwise product $\widehat V_h^{\,d}:=(\widehat V_h)^d$, push it forward component by component, and intersect with $H^1(\Omega;\mathbb R^d)$ or $H^1_0(\Omega;\mathbb R^d)$ as appropriate. This remains finite dimensional because it is a subspace of the finite product of scalar coefficient spaces. Trace equality is required componentwise on each shared full face.

For finitely many matching patches, use one such local rational space on each patch. A global trial function is a piecewise physical function whose traces agree pointwise on every shared full face and which belongs to the chosen global $H^1$ or $H^1_0$ space. Under [[def-countable-choice|Countable Choice]], the vector-valued trace-matching lemma [[lem-matching-nurbs-patch-traces-give-h1-conformity]] proves the H1 part of this interface rule componentwise, including the Cartesian product used for elasticity. Nonmatching interfaces are excluded; a mortar or Nitsche method requires a separate stability and consistency result.

The refinement labels have the following meanings.

- **h-refinement** inserts a new knot into a nonempty span at fixed degree and updates homogeneous control data by [[alg-single-new-b-spline-knot-insertion]]. Theorem [[thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry]] proves exact map preservation for this operation.
- **p-refinement** raises a coordinate degree and replaces the homogeneous representation only when an exact representation with positive new weights is supplied. A degree label alone does not certify geometry preservation or an approximation rate.
- **k-refinement** raises degree and chooses knot multiplicities to obtain a declared continuity, commonly the maximal $C^{p_r-1}$ continuity at simple interior knots. Exact geometry preservation requires the same positive homogeneous representation check as p-refinement.

On each cell, the pullback of scalar gradients and of the linear-elasticity strain is computed using [[lem-isogeometric-pullback-energy-norm-equivalence]]. Exact geometry does not assert exact quadrature. A discretization using an approximate map or quadrature must retain its separate form and load defects.
