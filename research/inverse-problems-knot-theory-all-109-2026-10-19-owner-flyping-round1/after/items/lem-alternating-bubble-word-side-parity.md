---
id: lem-alternating-bubble-word-side-parity
kind: lemma
title: "Alternating bubble words satisfy the side-parity rule"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-alternating-link-diagram
  - lem-connected-regular-link-diagram-has-checkerboard-coloring
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - def-flype-crossing-ball-and-alternating-tangle-data
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the coloring, crossing sectors and parity computations involve only the supplied finite diagram."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, printed p.40, property (*) and Figure 6"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Let $D$ be a connected alternating regular link diagram with at least one crossing on an oriented projection sphere. Use crossing balls in the explicit quadrilateral saddle model and orient each shifted sphere by its projection to the given sphere. Let $C$ be an oriented simple circle on the upper shifted sphere, transverse to the link outside the crossing balls, meeting each upper hemisphere in at most one proper arc, each such arc being one of the upper boundary arcs of a model saddle. Record a cyclic word with $P$ for each link intersection and $S$ for each hemisphere arc.

For two successive bubble visits along $C$, with $k$ punctures between them, the two upper overpasses lie on opposite sides of $C$ if $k$ is even and on the same side if $k$ is odd. More exactly, if $\delta_i=1$ when the overpass in visit $i$ lies on the left side of $C$ and $\delta_i=0$ when it lies on the right, then
$$\delta_{i+1}=\delta_i+k+1\pmod2.$$
Successive visits are read cyclically, including a word with just one visit. Every such bubble word has even length. The same conclusions hold on the lower shifted sphere after exchanging upper and lower passes. Reducedness is not required.

## Statement references

[[def-reduced-alternating-link-diagram]]

[[def-flype-crossing-ball-and-alternating-tangle-data]]

## Facts & Assumptions

**Given:** The finite connected alternating diagram, oriented projection sphere and specified normal circle with at most one arc in each hemisphere.

[F1] Alternation means that the two crossing visits at the ends of each projection edge are one overpass and one underpass. ([[def-reduced-alternating-link-diagram]])

[F2] The connected projection has a checkerboard coloring, with opposite sectors at a crossing of the same color and crossing an edge changing color. ([[lem-connected-regular-link-diagram-has-checkerboard-coloring]])

[F3] The model's upper saddle arcs lie around the positive and negative underpass directions. In oriented coordinates with overpass horizontal and underpass vertical, either upper arc projects to an arc crossing the vertical branch once and avoiding the horizontal branch. Each equatorial corner lies in an open quadrant. Reflection $(x,y,z)\mapsto(y,x,-z)$ exchanges the two hemisphere models. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F4] Bubble words use the letters $P$ and $S$ for the link intersections and saddle visits respectively. ([[def-flype-crossing-ball-and-alternating-tangle-data]])

## Proof

1.1 Fix the checkerboard coloring in [F2], with black represented by $1$ and white by $0$. At each crossing choose positively oriented coordinates $(x,y)$ with overpass horizontal and underpass vertical. Let $\epsilon_v$ be the color of its northeast sector; the southwest sector has the same color, and the other two have color $1-\epsilon_v$. Relative to an outward-pointing over half-edge, its left face has color $\epsilon_v$: this is northeast for $+x$ and southwest for $-x$. Relative to an outward-pointing under half-edge, the left face has color $1-\epsilon_v$: this is northwest for $+y$ and southeast for $-y$. This is the complete four-half-edge table. [given, F1, F2, construct]

2.1 Along a projection edge joining crossings $v,w$, the left-face colors relative to the outward directions at the two ends are opposite, since those directions are opposite along that edge. By alternation [F1], one end is an over half-edge and the other an under half-edge. The table in step 1.1 therefore gives $\epsilon_v=\epsilon_w$. Connectedness of the projection implies one common value $\epsilon$ for all crossings, including loop edges, whose endpoint equality is automatic. [given, step 1.1, F1, F2, construct]

3.1 Collapse each upper hemisphere homeomorphically onto its equatorial disk by vertical projection, leaving the rest of the projection sphere fixed. The image of $C$ is still a simple circle. For a positive-$y$ saddle arc traversed left to right, the initial sector is northwest, of color $1-\epsilon$, and the overpass is on the right of the oriented arc. Reversing this traversal starts in northeast, of color $\epsilon$, and puts the overpass on the left. For the negative-$y$ arc traversed left to right, the initial sector is southwest, of color $\epsilon$, and the overpass is on the left; reversing it starts in southeast, of color $1-\epsilon$, and puts the overpass on the right. By [F3] each projected arc crosses just the under branch, once. Thus in all four cases the colors immediately before and after the bubble visit are $\epsilon+1+\delta_i$ and $\epsilon+\delta_i$, modulo two. The side of the overpass in this local table is its side relative to the whole circle: there is no other arc of that circle in the hemisphere, so the connected overpass can be joined to that local side without crossing $C$. [step 1.1, step 2.1, F3, construct]

4.1 Between successive bubble visits the circle lies on the unchanged projection face and crosses diagram edges exactly at the $k$ punctures, so its region color changes $k$ times by [F2]. Its color before the next visit is therefore $\epsilon+\delta_i+k$. By step 3.1 it is also $\epsilon+1+\delta_{i+1}$. Equating these gives $\delta_{i+1}=\delta_i+k+1$ modulo two. This means opposite overpass sides for even $k$ and the same side for odd $k$, exactly as asserted. [step 3.1, F2, F4, algebra]

5.1 Each puncture changes projected region color once, and each saddle visit changes it once by step 3.1. A complete traversal returns to its starting region, so the total number of letters is even. This argument also covers no saddle visits; for one visit the cyclic formula in step 4.1 says that its puncture count is odd. Finally the coordinate reflection in [F3] interchanges upper and lower hemispheres and their over-under roles, and the same four-sector argument applies. All computations are finite and use no choice principle. [step 3.1, step 4.1, F2, F3, F4] ∎
