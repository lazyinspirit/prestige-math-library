---
id: def-carter-saito-euclidean-local-movie-moves
kind: definition
title: "The fifteen Euclidean local movie moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hoel Queffelec and Kevin Walker, Movie moves for framed foams from multijet transversality"
      url: "https://arxiv.org/pdf/2205.14947"
      locator: "The unframed smooth-sheet cases in §§4.4–4.5, pp.22–25,30–32,43–54,59–62."
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Figures11–13, printed p.1476, and their three classes in §8.3."
---

## Definition

Use coordinates $(x,y,z,t)$ on Euclidean space-time, with projection $(x,y,z,t)\mapsto(x,y,t)$; $z$ records the crossing order. A local movie move replaces the movies on the two sides of an isolated value $\lambda=0$ in a one-parameter deformation of a projected surface, with the surface and its collars unchanged outside the indicated region. Coordinates and cutoffs are chosen so the two movies have identical boundary frames. The following list specifies the fifteen Carter–Saito types, with their usual numbering. Include both directions, reflections, all compatible strand orientations, and every crossing order allowed by distinct $z$-coordinates. The quadratic and higher-order formulas specify the local topological models; sufficiently small perturbations with the same nonzero derivative signs give the same type.

| Type | Local change of the movie |
|---|---|
| MM1, MM2 | A pair of inverse R1 events is created or removed. In regular-height source coordinates $(v,t)$ the projected curve has local form $(v^2,(t^2-\lambda)v+c v^3)$, $c\ne0$; the two signs of $c$ relative to the quadratic term give the two types. |
| MM3, MM4 | A pair of inverse R2 events is created or removed. After the two projected branches are made graphs, their normal difference is $x^2+t^2-\lambda$ or $x^2-t^2-\lambda$. |
| MM5 | A pair of inverse R3 events is created or removed. With the intersection of two strands continued as the reference point, the signed displacement of the third strand is $t^2-\lambda$. |
| MM6 | An R3 event passes an R2 event: at the projected triple point exactly two projected tangents become parallel, with nonzero quadratic contact and nonzero relative deformation velocity. |
| MM7 | An R2 event meets a branch endpoint of the double-curve locus of an R1 picture. In projected coordinates use $(v^2,tv+\lambda v^3+v^5)$; its double pairs have $r=v^2\ge0$ and $t=-\lambda r-r^2$, so a critical point of the double-curve height enters or leaves through $r=0$. |
| MM8 | A third strand passes the branch point of an R1 picture; superpose a transverse strand on the ordinary cusp unfolding and move its displacement across zero. |
| MM9 | Two R2 critical levels merge and disappear, or are created, at a cubic inflection of the double curve: the branch-difference model is $x^3+\lambda x-t$. |
| MM10 | Four sheets meet at one projected point, with distinct omitted heights. Resolving the quadruple point in the two deformation directions gives the tetrahedral pair of R3 movies. |
| MM11 | A cancelling pair of surface Morse critical points is born or dies. The surface-height model is $u^2+v^3-\lambda v$, allowing both signs of the nondegenerate square and time reversal. |
| MM12 | At an extremum of surface height the projection of its tangent plane has rank one. A local embedded model is $(u,uv+\lambda v,v,u^2+v^2)$; the two movies interchange the extremum with its adjacent R1 picture. |
| MM13 | The corresponding interaction at a saddle, with embedded model $(u,uv+\lambda v,v,u^2-v^2)$. |
| MM14 | A projected strand passes a surface minimum or maximum: superpose an independently displaced regular sheet on the extremum picture. |
| MM15 | The corresponding projected strand passage across a saddle band. |

A **distant interchange** exchanges the order of two elementary movie events with disjoint spatial supports, including Reidemeister events and Morse events; it is not restricted to two critical points of the smooth surface-height function. A planar isotopy of a whole movie and the insertion or removal of stationary frames do not count as additional local types. Sweep-around is a separate spherical operation, absent from this Euclidean list.

## Definition references

[Queffelec–Walker, unframed smooth-sheet local calculations](https://arxiv.org/pdf/2205.14947)

[Bar-Natan, Figures11–13 and §8.3](https://arxiv.org/pdf/math/0410495v2)
