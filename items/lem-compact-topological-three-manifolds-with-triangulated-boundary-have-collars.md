---
id: lem-compact-topological-three-manifolds-with-triangulated-boundary-have-collars
kind: lemma
title: "Compact topological three-manifolds with triangulated boundary have collars"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "No choice premise: the boundary triangulation is supplied. Compactness gives a finite local collar cover, all subsequent selections are finite, and the continuous height-rescaling map is displayed. A later boundary-triangulation supplier retains its own full-AC premise."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Printed pp.24–26, local-push collar construction. The proof below separately gives the TOP version with a supplied finite boundary structure; its final height function is only continuous and is rescaled by an actual continuous formula."
---

## Statement

Let $M$ be a compact topological three-manifold with boundary $P$. Suppose a finite combinatorial PL surface $P_0$ and a homeomorphism $P_0\to P$ are given. Then there is a TOP embedding $c:P\times[0,1]\to M$ with $c(x,0)=x$ such that $c(P\times[0,1))$ is a relatively open neighborhood of $P$ in $M$. If $P$ is empty the empty embedding has this property.

The boundary PL structure is used to organize finitely many local pushes only. No PL structure on $M$, and no PL or smooth property of the resulting collar, is asserted or assumed.

## Facts & Assumptions

**Given:** The compact TOP manifold, its boundary, and the supplied finite boundary surface parameter.

[F1] Corresponding finite convex cell-face decompositions admit compatible triangulations and face-cone PL maps with finite inverses. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Proof

1.1 Suppose $P$ nonempty and use its supplied parameter to regard it as a finite PL surface. Boundary half-space charts of $M$ give local TOP collars of open subsets of $P$. Choose finitely many such open boundary domains covering $P$, with their actual collar maps. Refine the finite boundary triangulation until every closed vertex star lies in one of those domains. Here is a finite justification independent of a PL ambient structure: the realization metric makes $P$ compact, and for the finite open cover the maximum of the distances to its closed complements is a continuous positive function, hence has a positive minimum. After enough barycentric subdivisions every closed star has diameter smaller than that minimum. The mesh decreases by at most the factor $2/3$ on each triangular subdivision, by the affine vertex-average formula. Choose a local collar for each of the finitely many stars. Its compactness gives one short positive collar width on that star, rescaled below to length one. The relative interiors of the vertex stars cover $P$. Each star is a parametrized PL disk, with its central vertex mapped to an interior point of a convex polygon: its link is a PL circle, and coning an ordered polygon parameter of that link gives the disk parameter. [given, F1, construct]

2.1 Attach an external collar $P\times[0,1]$ to $M$ along $P\times\{1\}=P\subset M$, obtaining $M^+$. It is compact Hausdorff: the two compact Hausdorff pieces are glued along the given closed boundary by a homeomorphism, the identifying relation is closed, and local original collar charts describe the topology at the seam. For a star $S_a$ from step 1.1, the external collar and its chosen internal local collar identify $S_a\times[0,2]$ with a closed neighborhood block in $M^+$, with the original boundary at height1. In the convex disk parameter of $S_a$ this is a convex prism. Triangulate its boundary and cone to $(a,1)$. Move this cone point to $(a,1/2)$ and extend affinely over every cone simplex. Both are interior cone points, so the maps are a homeomorphism with the inverse cone-simplex maps. It fixes the whole boundary of the prism, including the lateral faces. Transfer it to the local TOP block and extend by the identity to $M^+$, obtaining $u_a$. This is a TOP homeomorphism; its coordinate formula need not be PL in any separate ambient structure. [F1, step 1.1, construct]

3.1 On the external collar each $u_a$ preserves the actual point $x\in P$ and weakly decreases height. In its convex-star coordinates, a point with cone-vertex coefficient $\lambda$ changes by the vector $(0,-\lambda/2)$, so its first coordinate is unchanged. For a point over the relative interior of that star at a height strictly between0 and2, the decrease is strict. Outside the star it is the identity. Each vertical external interval is mapped monotonically, since the map is injective and preserves its endpoints' order. Compose the finitely many maps in a fixed order to get $u$. Every point $(x,1)$ is sent to $(x,t(x))$, with $0<t(x)<1$: at least one of the covering stars gives a strict decrease, none increases height, and height zero is fixed and cannot be reached by another point. The function $t$ is continuous, by the external product coordinates and continuity of $u$. The restriction of $u$ to the external collar maps its fiber $\{x\}\times[0,1]$ onto $\{x\}\times[0,t(x)]$. Indeed every push preserves that fiber and is strictly increasing there. As $M^+$ is the union of the original $M$ and that collar, and their intersection is their height-one seam, bijectivity now gives $$u(M)=M\cup\{(x,s):t(x)\le s\le1\}.$$ In particular this image contains the original $M$, and its intersection with the external collar is exactly the displayed upper region. [step 2.1, construct]

4.1 On that upper region define $$v(x,s)=\left(x,\frac{s-t(x)}{1-t(x)}\right).$$ It is a homeomorphism to $P\times[0,1]$ with inverse $(x,r)\mapsto(x,t(x)+(1-t(x))r)$. The denominator is everywhere positive; compactness even gives a uniform positive lower bound, though pointwise continuity suffices. At height1 the formula is the identity. Thus it pastes with the identity on the original $M$ to a homeomorphism $v:u(M)\to M^+$. The composite $w=v\circ u|_M:M\to M^+$ is a homeomorphism with $w(x)=(x,0)$ for $x\in P$. Pull back the external product: $c(x,s)=w^{-1}(x,s)$. It is a TOP embedding of the closed product, has the required bottom value, and its half-open image is open because $P\times[0,1)$ is an open neighborhood of the bottom boundary in $M^+$. The finite pushes used TOP local charts and the given boundary triangulation; the generally non-PL continuous function $t$ was never claimed PL. All choices were finite. [given, step 3.1, construct] ∎
