---
id: def-fv-regular-simplicial-companion-family
kind: definition
title: "Finite-volume families with a regular simplicial companion"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-fv-admissible-cell-face-mesh]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "Complete 38-page PDF retrieved and extracted; inspected section 1.2 and sections 4–4.1. The explicit companion construction and parabolic proof are supplied locally."
---

## Definition

Let $\Omega\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz polyhedral domain, $d\ge1$. A **regular simplicial companion family** consists of refining uniformly regular boundary-anchored cell-face meshes in [[def-fv-admissible-cell-face-mesh]], and, for each mesh, a matching simplicial subdivision $\mathcal S_h$ of its cells with the following finite geometric data and uniform constants $c,C,J>0$.

Each cell is subdivided into at most $J$ closed nondegenerate $d$-simplices. Each simplex has diameter at most $Ch$ and inradius at least $ch$, and the chosen cell point $x_K$ is a subdivision vertex. The subdivision of each cell is a fan from $x_K$ over a triangulation of its boundary, and subdivisions agree on shared faces. Each original face is a union of at most $J$ subdivision facets. In dimension one these mean the two subintervals from $x_K$ to the endpoints.

For each subdivision vertex $z$, let $\mathcal K(z)$ consist of the original cells whose closures contain $z$. This set has at most $J$ elements. For any $K,L\in\mathcal K(z)$ there is a path of at most $J$ cells in $\mathcal K(z)$, from $K$ to $L$, consecutive cells sharing an original face whose closure contains $z$. If $z\in\partial\Omega$, every $K\in\mathcal K(z)$ has such a path to a cell with a boundary face whose closure contains $z$. These are connectivity checks on finite vertex stars, not an assumption of an analytic inequality.

For shared face values $v_F$, cell values $v_K$, and homogeneous boundary values $v_F=0$, define the piecewise constant state $\Pi_hv|_K=v_K$ and
$$D_{h,p}(v)^p=\sum_K\sum_{F\subset\partial K}|F|d_{K,F}^{1-p}|v_F-v_K|^p\qquad(1<p<\infty).$$
The mean interpolator $I_hv$ has cell and face values equal to the corresponding means of a Sobolev function, with face means interpreted by the simplex trace; for $v\in W_0^{1,p}(\Omega)$ its boundary face means are zero. Define $E_hv$ to be continuous and affine on each subdivision simplex, with nodal value $|\mathcal K(z)|^{-1}\sum_{K\in\mathcal K(z)}v_K$ at an interior vertex $z$ and zero at a boundary vertex. Thus $E_h$ is an explicit linear function of the cell values; its definition does not assume its stability.

These conditions allow nonorthogonal cells. A nonempty example in every dimension is the uniform cubical partition of $(0,1)^d$, with cell centers, a fixed matching barycentric subdivision of every face, and the cones from cell centers to those face simplices. Scaling leaves finitely many simplex shapes and bounded vertex stars; coordinate adjacency connects each interior star and connects each boundary star to a boundary face. In dimension one use equal subintervals and their midpoints. Hence all the displayed constants can be chosen independently of refinement.
