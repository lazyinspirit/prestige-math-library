---
id: thm-higher-dimensional-spheres-are-simply-connected
kind: theorem
title: '$S^n$ is simply connected for every $n\ge2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-cover-loop-generation, lem-antipodal-sphere-cover,
       def-simply-connected, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.14"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For every natural number $n\ge2$, the unit sphere $S^n\subseteq\mathbb R^{n+1}$ is simply connected ([[def-simply-connected]]).

## Facts & Assumptions

**Given:** A natural number $n\ge2$ and an arbitrary basepoint $x_0\in S^n$.

[L1] For either of two distinct coordinate axes, the complements of its antipodal coordinate poles are open and simply connected, cover $S^n$, and have path-connected overlap ([[lem-antipodal-sphere-cover]]).

[L2] For a two-set open cover whose two members and overlap are path-connected and contain the basepoint, the inclusion-images of the two fundamental groups generate the fundamental group of the union ([[lem-open-cover-loop-generation]]).

[F1] A space is simply connected when it is nonempty and path-connected and has a one-element fundamental group at every basepoint ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 The point $x_0$ cannot be a pole on both the first and second coordinate axes. Choose the first axis unless $x_0$ is one of its two poles, and choose the second axis otherwise. For that axis, [L1] supplies an antipodal open cover $S^n=U\cup V$ with $x_0\in U\cap V$, with $U$ and $V$ simply connected and $U\cap V$ path-connected. Any two points of $S^n$ can be joined by going inside their respective cover members to a point of the nonempty overlap and then inside the overlap, so $S^n$ is path-connected. [L1]

2.1 By [L2], every element of $\pi_1(S^n,x_0)$ is a product of classes induced from $\pi_1(U,x_0)$ and $\pi_1(V,x_0)$. Both groups have one element by [L1], so every factor, and hence every such product, is the identity. Thus $\pi_1(S^n,x_0)$ has one element. [step 1.1, L1, L2]

3.1 The sphere is nonempty, step 1.1 makes it path-connected, and step 2.1 applies to the arbitrary basepoint $x_0$. Therefore every basepoint has a one-element fundamental group, so [F1] makes $S^n$ simply connected. [step 1.1, step 2.1, F1] ∎
