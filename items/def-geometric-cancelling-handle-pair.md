---
id: def-geometric-cancelling-handle-pair
kind: definition
title: "Geometrically cancelling adjacent handle pair"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps: [def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-handle-decomposition-relative-to-the-incoming-boundary, def-transverse-complementary-dimensional-intersection-set, def-transverse-embedded-submanifolds]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Definition of a complementary pair, §5.4, printed p. 147 (a-sphere of the second meets b-sphere of the first transversely in one point)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Cancellation Lemma 1.12, Ch. 1 §1.1, printed pp. 6-7 (transverse sphere met in exactly one point)"
verification:
  precheck: pass
---

## Statement

Let $(W;M_0,M_1)$ be a compact collared triad and let $h^k,h^{k+1}$ be consecutive handles of a finite handle decomposition relative to $M_0$ ($0\le k\le n-1$). If the pair occupies positions $i,i+1$, write $M=\partial_+W_i=\partial_+(W_{i-1}\cup h^k)$ for the outgoing boundary after the lower handle, where $W_j$ is the stage after the first $j$ handles ($1\le i<r$). The pair is **geometrically cancelling** when the attaching sphere $A\subset M$ of $h^{k+1}$ and the belt sphere $B\subset M$ of $h^k$ meet transversely in exactly one point. For $1\le k\le n-2$ both spheres are positive-dimensional, $\dim A=k$ and $\dim B=n-k-1$, so $\dim A+\dim B=\dim M$ and transversality is the usual complementary-dimensional condition. Endpoint conventions, which are part of the definition: for $k=0$ the belt sphere $B$ is the new boundary sphere $S^{n-1}$ of the attached $0$-handle (disconnected when $n=1$), the attaching sphere $A$ of the $1$-handle is a $0$-sphere, and "meets transversely in one point" means that exactly one of the two points of $A$ lies in $B$ (transversality is then automatic); for $k=n-1$ the roles are dual: $A$ is an embedded boundary sphere $S^{n-1}$ in $M$ (an entire connected component when $n\ge2$) and exactly one of the two points of the $0$-sphere $B$ lies in $A$. The definition asserts no cancellation; it only fixes the configuration.

The intersection in the definition is the transverse complementary-dimensional intersection of [[def-transverse-complementary-dimensional-intersection-set]] in the closed $(n-1)$-manifold $M$, so it is a finite set of points whenever the two spheres are transverse; the middle cases $1\le k\le n-2$ are the ones for which the attaching-belt intersection matrix is defined. No orientation is used and no choice principle enters.
