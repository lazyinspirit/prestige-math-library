---
id: fs-van-kampen-with-disconnected-intersection
kind: false-statement
title: "FALSE: the two-set van Kampen conclusion needs no path-connectedness hypothesis on the overlap"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-of-the-circle,
       def-pushout-of-group-homomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, discussion preceding Theorem 1.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $X=U\cup V$ with $U,V$ open and path-connected, and let $x_0\in U\cap V$. Even when $U\cap V$ is not path-connected, if $C$ is its path component containing $x_0$, then $\pi_1(X,x_0)$ is the pushout of

$$\pi_1(U,x_0)\longleftarrow\pi_1(C,x_0)\longrightarrow\pi_1(V,x_0).$$

## Facts & Assumptions

**Given:** The quotient circle $Q=\mathbb R/\mathbb Z$, its quotient map $p$, the open arcs $U=p((-1/8,5/8))$ and $V=p((3/8,9/8))$, and the basepoint $[0]$.

[F1] The quotient map is open, and every interval shorter than one maps homeomorphically to its image in $Q$ ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[F2] Every nonempty convex subset of a Euclidean space is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F3] The degree map is an isomorphism $\pi_1(Q,[0])\cong(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

[F4] A pointed homeomorphism induces a fundamental-group isomorphism ([[thm-induced-fundamental-group-map-functoriality]]).

## Refutation

**Proof technique:** direct.

1.1 Both defining intervals have length $3/4<1$, so [F1] makes $U$ and $V$ open arcs. Their displayed lifts show $U\cup V=Q$, while $$U\cap V=p((-1/8,1/8))\,\sqcup\,p((3/8,5/8)),$$ a disjoint union of two nonempty open arcs. The basepoint lies in the first component $C=p((-1/8,1/8))$. [F1, algebra]

2.1 The three arcs $U,V,C$ are homeomorphic to open intervals, which are nonempty and convex. Hence [F2] and [F4] make all three fundamental groups trivial. [step 1.1, F2, F4]

3.1 The pushout of the two homomorphisms from the trivial group to the two trivial factor groups is itself the trivial group: for every target group there is exactly one compatible pair of homomorphisms and exactly one homomorphism from the trivial group. [step 2.1]

4.1 The actual group $\pi_1(Q,[0])$ is isomorphic to $\mathbb Z$ by [F3], so it is nontrivial and cannot be the pushout computed in step 3.1. Thus the false claim fails for this cover, and path-connectedness of the full overlap cannot be omitted from the two-set theorem. [step 3.1, F3] ∎

