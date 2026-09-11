---
id: "lem-geodesic-triangles-in-trees-are-tripods"
kind: "lemma"
title: "Geodesic triangles in trees are tripods"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.2 metric trees"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In the unit-edge realization of a connected graph with no cycles, there is a unique geodesic between any two points. The three geodesics between any three points form a tripod, allowing legs of length zero. In particular every geodesic triangle is $0$-slim.

Here connected means that every pair of vertices is joined by a finite edge path; a cycle is a nonempty simple closed edge path (including loops and pairs of parallel edges).

## Facts & Assumptions

**Given:** Such a graph and its edge-length path metric; three points $a,b,c$ in its realization.

[F1] Segments are isometric real-interval parametrizations and slimness includes degenerate triangles, as in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]].

## Proof

1.1 Subdivide at the at most three interior-edge points among $a,b,c$. This preserves connectivity, edge lengths and absence of cycles: contracting the finitely many new degree-two vertices in a cycle would produce a cycle in the original graph. Remove closed subwalks from any finite path until a simple path remains. Two distinct simple paths with the same endpoints would have a first divergence and a first subsequent reunion, and the intervening arcs form a cycle. Hence there is exactly one finite simple path between any two of the specified points. [given]

2.1 Every finite edge route reduces to that simple path by deleting closed subwalks, so its length is at least the simple-path length. Consequently the latter attains the path distance and, parametrized by length, is isometric on every subinterval. It is also the only geodesic image: if a path leaves this simple path through an edge, it must return through the same attaching point (otherwise the finite routes to the two attaching points form a cycle). A geodesic cannot revisit a point. An interior point of any edge of the simple path separates its endpoints, so every continuous joining path must traverse that edge; thus no alternative geodesic can skip part of the simple path. [step 1.1, F1]

3.1 The intersection of the finite paths $[a,b]$ and $[a,c]$ is an initial path $[a,m]$. Indeed if a point belongs to both, their subpaths from $a$ to that point coincide by uniqueness. Since the two paths are finite unions of closed edge intervals, this common initial path has a last point $m$. After subdivision at $m$, their tails $[m,b]$ and $[m,c]$ meet only at $m$; their concatenation is the simple path from $b$ to $c$. Hence the three pairwise paths have precisely the three legs from $m$, and distances are sums of leg lengths. [step 1.1, step 2.1]

4.1 Each side is a union of two legs, each also on another side; hence every side lies in the union of the other two. This gives $0$-slimness. If points coincide or $m$ is a vertex of the triangle, the corresponding legs have length zero and the same union identities hold. Only finitely many paths and subdivisions were needed, including in an infinite graph. [step 3.1, F1] ∎
