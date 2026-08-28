---
id: lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision
kind: lemma
title: "Finite groups acting on trees have a global fixed vertex after subdivision"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-barycentric-subdivision-removes-edge-inversions, lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

Let a finite group $G$ act on a simplicial tree $T$. Then the induced action on
the barycentric subdivision $T'$ fixes a vertex.

## Facts & Assumptions

**Given:** A finite group $G$ acting on a simplicial tree $T$.

[L1] Barycentric subdivision preserves the tree and removes edge inversions. ([[lem-barycentric-subdivision-removes-edge-inversions]])

[L2] The path metric on a simplicial tree is geodesic and integer-valued. ([[lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]])

## Proof

**Proof technique:** direct.

1.1 Replace $T$ by its barycentric subdivision $T'$ using [L1]. Choose a vertex $v$ of $T'$. Because $G$ is finite, the orbit $G\cdot v$ is finite, and the union of the geodesics joining pairs of orbit vertices is therefore a finite $G$-invariant subtree $U\subseteq T'$. [L1, L2, given, construct]

2.1 Let $D$ be the diameter of $U$, choose vertices $x,y\in U$ with $d(x,y)=D$, and let $m$ be the midpoint of the unique geodesic from $x$ to $y$. In a finite tree every diameter geodesic has the same midpoint: if two diameters had different midpoints, the unique path joining those midpoints would extend one of them past length $D$, contradicting maximality. So $m$ depends only on $U$, not on the chosen diameter. [L2, step 1.1, algebra]

3.1 Any automorphism of $U$ sends diameter geodesics to diameter geodesics, so it fixes the intrinsic midpoint $m$ from step 2.1. If $D$ is even, $m$ is a vertex of $U$ and is fixed. If $D$ is odd, $m$ is the midpoint of a unique geometric edge of $U$, so every element of $G$ preserves that edge setwise. The action on $T'$ is without inversions by [L1], hence no element can swap the two endpoints; both endpoints are fixed. In either case the induced action on $T'$ fixes a vertex. [L1, L2, step 2.1, algebra] ∎
