---
id: lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
kind: lemma
title: "A compact locally collared polyhedron has a piecewise linear collar"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Theorem 2.25 and Corollary 2.26, printed pp.24–26; complete finite local-push proof"
---

## Statement

Let $P$ be a compact subpolyhedron of a polyhedron $Q$. Suppose $P$ is locally piecewise linearly collared in $Q$: each point has a product neighborhood in which $P$ is the bottom of a piecewise linear product with $[0,1)$. Then there is a piecewise linear embedding $c:P\times[0,1]\to Q$ with $c(x,0)=x$ such that $c(P\times[0,1))$ is an open neighborhood of $P$ in $Q$. In particular the boundary of every compact piecewise linear manifold has such a collar.

## Statement references

[[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Facts & Assumptions

**Given:** $P\subset Q$ and the compactness and local collar hypotheses above.

[F1] Finite compatible polyhedral subdivisions admit compatible triangulations; piecewise linear maps and subpolyhedra admit finite compatible subdivisions on compact parts ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

## Proof

**Given:** The stated pair. The empty case has the empty collar, so assume $P$ is nonempty.

1.1 Attach an external collar and denote the resulting polyhedron by $Q^+=(Q\times\{1\})\cup(P\times[0,1])$, identifying $P\subset Q$ with $P\times\{1\}$. This is a polyhedron: triangulate the compact marked part of $Q$ with $P$ a subcomplex, triangulate its product prisms compatibly, and glue the equal marked faces. Outside this compact part keep the original locally finite triangulation. A local collar chart about $a\in P$, shrunk to the closed star $S_a=a*L_a$ of a vertex in a finite triangulation of $P$, identifies $S_a\times[1,2]$ with a neighborhood in $Q$ of that star. Combining it with the external collar gives $S_a\times[0,2]\subset Q^+$. The product is the cone from $(a,1)$ over $(L_a\times[0,2])\cup(S_a\times\{0,2\})$. Triangulate that boundary and cone it to $(a,1)$. Moving the cone vertex to $(a,1/2)$ and extending linearly on the cone simplices defines a piecewise linear homeomorphism of this product fixed on the displayed cone base, which is the relative frontier of the local neighborhood in $Q^+$. The remaining sides, if the star meets the boundary of $P$, may move along the boundary of $Q^+$. Both cone decompositions cover the product: on every radial line in the star factor the product has a single interval in each height direction, so each ray from either vertex has a unique final boundary point. Extend this map by the identity to $Q^+$ and call it $h_a$. [given, F1, construct]

2.1 On the external collar, $h_a$ preserves the $P$ coordinate and decreases the height weakly. In a cone simplex this follows directly from affine coordinates: only the cone vertex changes, by the vertical displacement $-1/2$, so a point with cone-vertex coefficient $\lambda$ has the same first coordinate and height reduced by $\lambda/2$. The decrease is strict for points over the relative interior $S_a\setminus L_a$ with height strictly between $0$ and $2$. Compactness provides finitely many such star interiors covering $P$. Compose their pushes in any fixed order to obtain a piecewise linear homeomorphism $h'$ of $Q^+$. Every point $(x,1)$ is then sent to $(x,t(x))$ with $0<t(x)<1$: at least one selected star contains $x$ in its interior, that push strictly decreases the height, subsequent pushes cannot increase it, and all pushes fix height zero and are injective. Since each push preserves the ordered vertical intervals in the external collar, $h'(Q)\cap(P\times[0,1])$ is exactly the region $T=\{(x,s):t(x)\le s\le1\}$. Also $h'(Q)$ contains all of $Q\times\{1\}$, since the inverse of every push increases height on any point at height at least one in its local chart. [step 1.1, construct]

3.1 The function $t$ is piecewise linear on a finite subdivision of $P$: the graph $h'(P)$ is a finite polyhedron projecting bijectively to $P$, and subdividing the projection gives an affine bijection on every simplex with affine inverse on its image. Refine its projected cells compatibly using [F1]. For each simplex $A$ in this subdivision, $T\cap(A\times[0,1])$ is a convex prism cut out by the affine bottom $s=t(x)$ and the constant top $s=1$. Its faces correspond exactly to the faces of $A\times[0,1]$. Construct compatible piecewise linear homeomorphisms between these prisms by induction over their faces: prescribe the identity on the top, the projection $(x,t(x))\mapsto(x,0)$ on the bottom, use the already constructed face maps on the vertical sides, and cone from interior points to extend over each remaining cell. The finite convex cell triangulation argument in [F1] verifies bijectivity and a piecewise linear inverse. These maps paste to $g:T\to P\times[0,1]$, fixed on the top and sending the graph to the bottom by its first coordinate. Extend $g$ by the identity on $Q\times\{1\}$ to obtain a piecewise linear homeomorphism $h'(Q)\to Q^+$. [F1, step 2.1, construct]

4.1 The composite $h=g\circ h'|_Q:Q\to Q^+$ is a piecewise linear homeomorphism and sends each $x\in P$ to $(x,0)$. Pull back the external collar by $h$: put $c(x,s)=h^{-1}(x,s)$. This is a piecewise linear embedding with the required bottom restriction, and its half-open image is an open neighborhood because $P\times[0,1)$ is an open neighborhood of $P\times\{0\}$ in $Q^+$. A piecewise linear boundary chart is a local product chart of the required kind, so the manifold assertion follows. Only the finite local cover and finite subdivisions were selected; no countable or arbitrary-index choice assumption is used. [given, step 3.1, construct] ∎
