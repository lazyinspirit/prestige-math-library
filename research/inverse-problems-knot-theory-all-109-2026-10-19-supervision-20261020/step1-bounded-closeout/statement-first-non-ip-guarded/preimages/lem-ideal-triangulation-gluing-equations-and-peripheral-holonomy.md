---
id: lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy
kind: lemma
title: "Ideal gluing equations and trivial peripheral linear holonomy give a complete structure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-pared-hyperbolic-structures-and-volume
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-tetrahedron-shape-parameter-relations
  - lem-ideal-torus-cusp-holonomy-criterion
  - lem-horocusp-truncation-has-finite-volume
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.1–4.5, ideal tetrahedra, edge equations and cusp completeness"
    - title: "Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem"
      url: "https://arxiv.org/pdf/math/9901045"
      locator: "Theorem 0.1 and §§1–3, ideal triangulations, edge equations, cusp completeness and finite volume"
verification:
  precheck: pending
---

## Statement

Let an oriented finite ideal triangulation of the interior of a compact connected orientable three-manifold have $k\ge1$ ideal vertices, each with torus link. Assign a positive ideal-tetrahedron shape to every tetrahedron. Suppose that around every finite edge the product of its incident complex shape parameters is $1$ and the sum of its dihedral angles is $2\pi$. For each ideal vertex $v$, choose a basis $(\alpha_v,\beta_v)$ of the fundamental group of its torus link and suppose the cusp multipliers satisfy $H(\alpha_v)=H(\beta_v)=1$. Then the face gluings define a complete finite-volume hyperbolic metric on the manifold interior, with one rank-two cusp for each ideal vertex.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)

## Diagram

Opposite edges of a normalized ideal tetrahedron carry the same shape parameter. The wire drawing records that convention only; all edge classes, products and angle sums in the proof are computed from the given face pairings, not from the drawing.

```tikz
\begin{tikzpicture}[scale=1.0,line cap=round,line join=round]
  \coordinate (a) at (0,0);
  \coordinate (b) at (2,0);
  \coordinate (c) at (1,1.7);
  \coordinate (d) at (1,0.65);
  \draw[thick] (a)--(b)--(c)--cycle;
  \draw[thick,dashed] (d)--(a) (d)--(b) (d)--(c);
  \node[below left] at (a) {$0$};
  \node[below right] at (b) {$1$};
  \node[above] at (c) {$\infty$};
  \node[right] at (d) {$z$};
  \node at (1,-0.35) {$z$ on $01,\infty z$};
  \node at (2.9,0.95) {$z'$ on $0\infty,1z$};
  \node at (1.0,2.05) {$z''$ on $1\infty,0z$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite face-paired ideal triangulation, its positive shapes, all edge equations and angle sums, and a homology basis on each torus vertex link.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]]: a positive shape determines a nondegenerate ideal tetrahedron in $\mathbb H^3$, its corner factors, and the cusp multiplier $H(\gamma)$ along a path in a torus vertex link.

[F2] [[lem-ideal-tetrahedron-shape-parameter-relations]]: the argument of each positive shape parameter is the corresponding dihedral angle.

[F3] [[lem-ideal-torus-cusp-holonomy-criterion]]: for one torus vertex, edge products $1$, angle sums $2\pi$, and cusp multipliers $1$ on a fundamental-group basis imply a complete hyperbolic cusp.

[F4] [[lem-horocusp-truncation-has-finite-volume]]: a rank-two translation-lattice horocusp with Euclidean cross-section area $A$ has volume $A/2$.

[F5] [[def-pared-hyperbolic-structures-and-volume]]: a hyperbolic structure is a curvature $-1$ metric on the manifold interior, and a torus cusp is a horoball quotient by its peripheral subgroup.

## Proof

1.1 For each tetrahedron, [F1] supplies a nondegenerate ideal simplex, and the assigned face maps are hyperbolic isometries because their three corresponding ideal vertices have the same cross-ratio shape. Around a finite edge, the product equation makes the accumulated complex similarity the identity, while the angle sum $2\pi$ makes the total rotation one full turn. Thus the simplices glue to a smooth curvature $-1$ metric away from the ideal vertices. [given, F1, F2, construct]

2.1 Truncate the ideal vertices by sufficiently small horospheres. Each link triangle is Euclidean, and face identifications restrict to Euclidean similarities. Around each vertex, the same edge conditions remove the truncation singularities; the two basis multipliers being $1$ imply trivial linear holonomy on its torus link, since every loop is a word in that basis. Apply [F3] to the neighborhood of each vertex separately: each end is a complete rank-two horoball quotient. There are finitely many vertices, so this proves completeness at every end. [given, F1, F2, F3, step 1.1, construct]

3.1 A horospherical truncation of each ideal tetrahedron is compact and has finite volume because its smooth hyperbolic volume density is bounded on that compact region. Each removed vertex tail is contained in a rank-two horocusp and has finite volume by [F4]. There are finitely many tetrahedra and vertices, so the glued manifold has finite total volume. [given, F1, F4, step 2.1, algebra]

4.1 The part remaining after all cusp neighborhoods are removed is a compact union of truncated tetrahedra. Let $(x_n)$ be a Cauchy sequence. If infinitely many terms lie in that compact part, a subsequence converges there and the Cauchy property forces the whole sequence to the same limit. Otherwise the sequence eventually lies in the union of the finitely many disjoint cusp ends; sufficiently deep points in distinct ends have positive separation through the compact core, so the Cauchy property forces it eventually into one end, where it converges by step 2.1. Thus the full metric is complete. Together with step 3.1 and the curvature $-1$ charts from step 1.1, this is a complete finite-volume hyperbolic structure as defined in [F5]. [F3, F5, step 1.1, step 2.1, step 3.1, construct] ∎

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)
