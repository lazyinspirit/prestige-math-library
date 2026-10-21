---
id: lem-ideal-torus-cusp-holonomy-criterion
kind: lemma
title: "Cusp multipliers detect completeness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-tetrahedron-shape-parameter-relations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§4.3, Proposition 4.15 and its proof, printed pp.76–77"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.2–4.4, edge and cusp completeness equations"
---

## Statement

Let an orientable finite ideal triangulation have exactly one ideal vertex, whose link is a torus. Suppose its tetrahedra carry positive shapes whose edge products equal $1$ and whose dihedral angles sum to $2\pi$ around every edge. If the cusp multipliers $H(\alpha)$ and $H(\beta)$ are $1$ for a basis $\alpha,\beta$ of the torus fundamental group, then the glued hyperbolic metric is complete at that cusp.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Proposition 4.15](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Facts & Assumptions

**Given:** The finite face-glued ideal triangulation, its positive shapes, the edge equations, and a basis of loops on the torus vertex link.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] defines the upper half-space metric, the shape at each corner of a truncated ideal vertex, and the product $H(\gamma)$ recording the linear scale and rotation accumulated around a cusp path.

[F2] [[lem-ideal-tetrahedron-shape-parameter-relations]] identifies the argument of each positive shape with its dihedral angle.

## Proof

1.1 The positive shapes determine nondegenerate ideal tetrahedra. The face maps are hyperbolic isometries. Around each finite edge, the edge product $1$ makes the accumulated complex similarity the identity, and the $2\pi$ angle sum removes a cone angle. Thus the tetrahedra glue to a smooth hyperbolic metric away from the ideal vertex. Horospherical truncations give Euclidean triangles on the torus link; their face identifications are Euclidean similarities, maps of the form $x\mapsto aRx+b$ with $a>0$, $R$ a rotation, and have no cone singularities. They define a Euclidean similarity structure: an atlas with these transition maps. Its linear holonomy, the product $aR$ accumulated around a loop, need not yet be trivial. [given, F1, F2, construct]

1.2 For a loop $\gamma$ on the link, the linear part of its similarity holonomy is $H(\gamma)$: transporting a tangent vector across each corner multiplies it by the corner parameter or its reciprocal according to the side used. The basis loops have multiplier $1$, so the linear holonomy is trivial on $\pi_1(T)$, since every loop is a word in that basis. [F1, given, construct]

2.1 Trivial linear holonomy lets a Euclidean metric in one similarity chart be transported consistently to every chart: two transport paths differ by a loop, whose linear holonomy is the identity by step 1.2. The local Euclidean metrics therefore agree on overlaps and give a global flat metric on the compact torus link. A compact Riemannian manifold is complete. [given, step 1.2, construct]

3.1 Lift the flat metric of step 2.1 to the simply connected universal cover and integrate its Euclidean charts along paths to obtain a local isometry into $\mathbb R^2$; simple connectivity makes this construction path-independent up to one rigid motion. Completeness lets the local isometry extend along every straight segment, so it is a covering onto $\mathbb R^2$ and hence an isometry. Its deck group acts by Euclidean isometries. Every deck transformation has identity linear part by step 1.2, so acts by translation; compactness of the quotient makes this group a rank-two lattice. The cusp is the corresponding horoball quotient. [given, step 1.2, step 2.1, construct]

4.1 In horospherical coordinates the quotient end has metric $ds^2=dr^2+e^{-2r}g_T$ for $r\ge0$, where $g_T$ is the complete flat torus metric from step 2.1. A path escaping toward the ideal vertex has $r\to\infty$ and length at least the change in $r$, hence infinite length. Thus the glued metric is complete at its only end, the torus cusp. [given, step 2.1, step 3.1] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Proposition 4.15](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
