---
id: alg-certified-convex-polygon-overlap
kind: algorithm
title: "Exact certified clipping of convex rational polygons"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-intersection-volume-conservative-remapping
  - alg-certified-dyadic-geometric-predicate
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: n/a
---

## Definition

Input two cyclic vertex lists for positive-area convex polygons in $\mathbb R^2$, with rational coordinates. The closing edge is implicit; if the last listed vertex repeats the first, delete that final copy. Delete consecutive duplicate vertices, including across the cyclic endpoint, then return unresolved if a list has fewer than three vertices, any remaining repeated vertex, a zero-length edge, or zero signed shoelace area. Reverse a negatively oriented list so both polygons are counterclockwise. For each list, certify convexity as follows: for every directed edge, evaluate the orientation of that edge with every listed vertex and require every sign to be nonnegative; if three consecutive vertices are collinear, require the middle one to lie between the other two; and for every pair of nonadjacent closed edges, certify that they do not intersect. Test the latter exactly using the four orientation signs: two segments $AB,CD$ intersect if the signs for $C,D$ against $AB$ are strictly opposite and the signs for $A,B$ against $CD$ are strictly opposite, or if one of these signs is zero and its point lies in the closed coordinatewise bounding rectangle of the corresponding segment. Return unresolved if any certificate check fails. These finite checks certify that each normalized list is the simple counterclockwise boundary of its convex hull, allowing redundant collinear vertices.

For every rational orientation test, clear one common positive denominator from the coordinates of its three points and call [[alg-certified-dyadic-geometric-predicate]] on the resulting integer (hence dyadic) points. Propagate any result other than an exact positive, zero, or negative sign as unresolved. For each directed edge of $Q$, clip the current cyclic list of $P$ to that edge's closed left half-plane, treating a point $X$ as inside exactly when $s(X)\ge0$, where $s(X)$ is its signed edge determinant. Traverse cyclically by setting $S$ to the last current vertex and then taking each current vertex in list order as $E$. Apply exactly one of these branches:

- If $s(S)\ge0$ and $s(E)\ge0$, append $E$.
- If $s(S)\ge0>s(E)$, append $S+t(E-S)$.
- If $s(S)<0\le s(E)$, append $S+t(E-S)$ and then $E$.
- If $s(S)<0$ and $s(E)<0$, append nothing.

In either crossing branch set $t=s(S)/(s(S)-s(E))$. The strict sign inequalities make this denominator nonzero and give $t\in[0,1]$; when an endpoint sign is zero the intersection is that endpoint. No division is performed in either noncrossing branch. Remove consecutive duplicate output vertices after each pass, including a duplicate across the cyclic endpoint, and continue with the next edge of $Q$. If the current list is empty, it remains empty. Return the final rational cyclic list and area zero when it has fewer than three noncollinear vertices; otherwise return its exact shoelace area. No floating tolerance is used.

## Failure behavior

The input polygons represent convex cells in the intersection-volume remap of [[def-intersection-volume-conservative-remapping]]. A failed convexity check or uncertified predicate sign returns unresolved; it is never guessed. A negative crossing denominator is valid and is used as written. All constructions after the exact dyadic predicate calls use exact rational arithmetic.
