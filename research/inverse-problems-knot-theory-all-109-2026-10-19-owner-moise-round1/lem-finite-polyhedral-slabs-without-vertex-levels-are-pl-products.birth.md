---
id: lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products
kind: lemma
title: "Finite polyhedral slabs without vertex levels have piecewise linear product parameters"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $\mathcal K$ be a finite convex polyhedral cell complex in $\mathbb R^m$, let $P$ be its underlying polyhedron, and let $\ell:\mathbb R^m\to\mathbb R$ be affine. Suppose $a<b$ and no vertex of $\mathcal K$ has height in $[a,b]$. Set $P_t=P\cap\ell^{-1}(t)$ and $P_{[a,b]}=P\cap\ell^{-1}([a,b])$. Then there is a piecewise linear homeomorphism
$$H:P_a\times[a,b]\longrightarrow P_{[a,b]}$$
with piecewise linear inverse, $H(x,a)=x$ and $\ell(H(x,t))=t$. For every cell $C$ of $\mathcal K$ meeting the slab it maps $(C\cap P_a)\times[a,b]$ onto $C\cap P_{[a,b]}$. In particular any union of cells and all their intersections receive compatible product parameters. The construction is finite and introduces no choice hypothesis. If $P_a$ is empty, both sides are empty.

## Facts & Assumptions

**Given:** The finite convex cell complex, affine height and interval avoiding every vertex height.

[F1] Finite convex cell complexes admit compatible triangulations; an already triangulated cell boundary can be extended by coning to an interior point ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The stated data.

1.1 If a cell $C$ meets some level in $[a,b]$, it has vertices strictly below $a$ and strictly above $b$. Indeed the minimum and maximum of the affine function on the convex polytope occur at vertices; a cell meeting the slab cannot have either extremum inside it, by hypothesis. The same holds for every face that meets the slab. Its section $C_t=C\cap\ell^{-1}(t)$ is consequently nonempty for every $t\in[a,b]$ and meets the relative interior of $C$: take an interior point of $C$, and join it to points near the minimum and maximum to obtain interior points below and above $t$, then intersect their segment with the level. In particular no new face begins or ends while the section level traverses this interval. [given, construct]

2.1 More precisely, the faces of $C_t$ correspond to the proper faces $G$ of $C$ meeting the slab, together with $C$ itself: intersect each such face with the level and retain the empty face separately. Every face of the section is of this form because an exposing affine functional on its hyperplane extends to the ambient affine span and its maximizing face on the section is cut out by a collection of the supporting facet equations of $C$. The correspondence is injective: $G_t$ meets the relative interior of $G$ by step 1.1, so its smallest containing face of $C$ is $G$. It preserves inclusions and is independent of $t$. The faces of the truncated cell $\widehat C=C\cap\ell^{-1}([a,b])$ are its bottom and top sections and the truncated faces $\widehat G$ for the same $G$. This follows by adding the two slab inequalities to the facet inequalities of $C$; any proper face not contained in an end hyperplane is obtained from original facet equalities. A face contained in an end hyperplane is a face of that end section. Thus $\widehat C$ has exactly the face incidences of the product prism $C_a\times[a,b]$, with end faces distinguished. These incidences agree on intersections of cells of $\mathcal K$. [step 1.1, construct]

3.1 Construct the maps by induction over these common face incidences. On each bottom face use the identity. On the top faces choose compatible PL maps from their corresponding bottom faces as follows: match vertices using the face correspondence, and extend over each higher-dimensional face by coning its already defined boundary map from an interior point to an interior point. Both faces are convex, so the cones cover them with disjoint relative interiors, proving bijectivity and a PL inverse. For every remaining, vertical face pair choose interior points at height $(a+b)/2$ on both sides; such points exist by step 1.1. The height on the source prism is its second coordinate. Once the boundary map is constructed, triangulate the boundary compatibly and extend over that face by coning between these two interior points. The same convex-cone argument proves that this is a PL homeomorphism on the face. It preserves height: its boundary map already does, its two cone points have the same height, and height is affine on each cone simplex. This induction includes the full truncated cells. Shared faces have only one previously prescribed map, so all maps agree on intersections. Only finitely many cells occur. [F1, step 2.1, construct]

4.1 Paste the maps to obtain $H$. A point in the relative interior of a source prism cell maps to the relative interior of its corresponding target cell, so the pasted map is a bijection. The cellwise inverses agree on intersections and paste to its inverse. Both are PL on finite compatible subdivisions furnished by [F1], hence continuous. The bottom restriction and height identity follow from step 3.1. A union of original cells is a union of the corresponding prism cells, giving the compatibility assertion. If $P_a$ is empty there is no cell meeting the slab by step 1.1, so both sides are empty. All selections involved finite sets of cells and interior points, and require no countable or arbitrary-index choice. [given, F1, step 3.1, construct] ∎
