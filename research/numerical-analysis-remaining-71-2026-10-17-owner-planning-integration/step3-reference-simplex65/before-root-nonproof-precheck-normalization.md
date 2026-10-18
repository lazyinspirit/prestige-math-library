---
id: def-matching-affine-simplicial-meshes
kind: definition
title: Matching affine simplicial meshes and shape regularity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 8, “Meshes”
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap08.pdf
      locator: "§§8.1–8.2, printed pp. 83–88: reference maps, simplicial and matching meshes, faces and interfaces."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§§5–7, mesh size, inradius, affine simplex map, and shape-regular scaling."
verification:
  precheck: pass
  repair: research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step3-reference-simplex65/local-published-repair.json
---

## Definition

Fix an integer $d\ge2$. The underlying coordinate index set of $\mathbb R^d$
is $I_d=\{0,\ldots,d-1\}$. In this definition the conventional labels
$1\le i\le d$ are relabeled by $i\mapsto i-1$: write
$\widehat x_i:=\widehat x(i-1)$, and let $e_i\in\mathbb R^d$ be the function
on $I_d$ with $e_i(i-1)=1$ and $e_i(k)=0$ for $k\ne i-1$.
The vertex and barycentric labels $0,\ldots,d$ are distinct from these
underlying coordinate indices. The **reference open simplex** is
$$\widehat S_d:=\{\widehat x\in\mathbb R^d:\widehat x_i>0\ (1\le i\le d),\ \sum_{i=1}^d\widehat x_i<1\},$$
with closure $\overline{\widehat S_d}=\operatorname{conv}\{0,e_1,\ldots,e_d\}$.

A **matching affine simplicial mesh** of a bounded polyhedral open set
$\Omega\subset\mathbb R^d$ is a finite set $\mathcal T$ of closed,
nondegenerate $d$-simplices such that their union is $\overline\Omega$,
their interiors are pairwise disjoint, $\Omega$ is the interior of their
union, and the intersection of two distinct cells is either empty or a
whole face of each. Thus no lower-dimensional crack is omitted from
$\Omega$ while its surrounding cells are retained. Every interior facet is
incident to exactly two cells and every boundary facet to one. The faces of
a cell are the convex hulls of its vertex subsets. A facet means a face of
dimension $d-1$.

For each cell $K\in\mathcal T$, an affine bijection
$$F_K:\overline{\widehat S_d}\to K,\qquad F_K(\widehat x)=b_K+A_K\widehat x,$$
with invertible $A_K\in\mathbb R^{d\times d}$ is a **reference map**.
Choose the vertex order so $\det A_K>0$; this is the orientation convention
used for Piola formulas. Write $h_K:=\operatorname{diam}(K)$ and let
$\rho_K$ be the radius of the largest Euclidean ball contained in $K$.
A family $\{\mathcal T_h\}_{h\in H}$ is **shape regular** if there is a
finite $\sigma$ such that $h_K/\rho_K\le\sigma$ for every
$h\in H$ and $K\in\mathcal T_h$. This universal condition is vacuous for
an empty family.
This definition uses radius; references using the diameter of the inscribed
ball differ by a factor of two.

An affine image of the reference square is a parallelogram. A general
quadrilateral requires a nonaffine map and is outside this affine definition;
curved-cell approximation is not included here.
