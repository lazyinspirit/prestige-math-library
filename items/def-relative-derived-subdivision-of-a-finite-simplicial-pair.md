---
id: def-relative-derived-subdivision-of-a-finite-simplicial-pair
kind: definition
title: "Relative derived subdivision of a finite simplicial pair"
status: draft
origin: pipeline
deps: ["lem-barycentric-face-chains-triangulate-a-geometric-simplex", "def-barycentric-subdivision-of-an-abstract-simplicial-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Definition

For a finite Euclidean simplicial pair $A\subseteq K$, define the **relative derived subdivision** $D_AK$ by keeping $A$ unchanged and processing the other simplices by increasing dimension: triangulate their boundaries using the already processed faces, then cone that boundary from the simplex barycenter. A vertex outside $A$ stays its own barycenter. Include all faces. Write $T_0=K$, $T_r=D_A T_{r-1}$, also denoted $D_A^rK$.

The coning triangulates a simplex because every ray from its interior barycenter meets its boundary in a unique point: in barycentric coordinates the ray stops when the first decreasing coordinate reaches zero. Cones over boundary simplices intersect in cones over their intersections; the apex is not in the affine hull of a proper face, so the new simplices are affinely independent. This is the radial version of [[lem-barycentric-face-chains-triangulate-a-geometric-simplex]]. Since adjacent original simplices have the same already triangulated common face, the construction is compatible and preserves the underlying polyhedron. It restricts to $D_{A\cap P}P$ on each subcomplex $P$. If $A$ has no vertices, the result is the ordinary barycentric subdivision of [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]; if $A=K$, it is $K$ itself.

The simplex description is a face $\alpha\in A$ (possibly empty), followed by barycenters of a strict chain of faces outside $A$ that strictly contain $\alpha$. Repeated coning proves both directions of this description: adjoining an outer barycenter extends the face chain, and every chain is built by successively coning its shorter initial chain.

## Remarks

In Maunder 2.5.9 (pp.50–51), take the three triangles $012,023,234$ with all faces and fix the full triangle $012$. It remains one triangle. Triangle $023$ has its edge $02$ fixed and edges $03,23$ bisected, so coning its subdivided boundary gives $1+2+2=5$ triangles. Triangle $234$ has all three edges bisected, giving $6$ triangles. Thus the relative subdivision has exactly $1+5+6=12$ triangles, as in the source example. The common edge $23$ has the same midpoint on both sides.

## Source locators

2.5.7–2.5.8 pp.49–50.

