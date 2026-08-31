---
id: prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets
kind: proposition
title: "An equidimensional $C^1$ map sends null sets to null sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-countable-chart-cover-detects-manifold-null-sets,
       lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets,
       thm-lipschitz-images-of-null-sets-in-rn-are-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M^m\to N^m$ be a $C^1$ map between smooth manifolds of the same
dimension. If $E\subseteq M$ is null, then $F(E)\subseteq N$ is null.

## Facts & Assumptions

**Given:** A $C^1$ map $F:M^m\to N^m$ and a null subset $E\subseteq M$.

[L1] A countable chart cover detects manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]]).

[L2] On compact coordinate pieces a $C^1$ map is locally Lipschitz, and Lipschitz maps send Euclidean null sets to Euclidean null sets ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]], [[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

## Proof
**Proof technique:** direct.

1.1 Choose countable smooth atlases on $M$ and $N$ detecting nullity by [L1]. Refine the source atlas so that each relatively compact chart domain lies inside the inverse image of one target chart domain. [L1, given, choose]
2.1 For each source chart piece $U_j$, the set $\varphi_j(E\cap U_j)$ is null in $\mathbb R^m$. Cover $\overline{U_j}$ by finitely many smaller coordinate neighbourhoods on which the coordinate representative of $F$ is Lipschitz by [L2]. Applying [L2] on each such piece shows that the corresponding target-chart image of $F(E\cap U_j)$ is null. [L2, step 1.1, algebra]
3.1 The set $F(E)$ is the countable union of the sets $F(E\cap U_j)$. Since each has null image in every target chart from step 2.1, [L1] implies that $F(E)$ is null in $N$. [L1, step 2.1, algebra] ∎