---
id: cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free
kind: corollary
title: "Groups acting freely without inversions on trees are torsion-free"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-edge-inversion-and-action-without-inversions, def-free-group-action, lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

If a group acts freely and without inversions on a simplicial tree, then the
group is torsion-free.

## Facts & Assumptions

**Given:** A group $G$ acting freely and without inversions on a simplicial tree $T$.

[L1] A free action has no nonidentity element fixing a point. ([[def-free-group-action]])

[L2] An action without inversions sends no oriented edge to its reverse. ([[def-edge-inversion-and-action-without-inversions]])

[L3] A finite group acting on a tree fixes a vertex after barycentric subdivision. ([[lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision]])

## Proof

**Proof technique:** direct.

1.1 Let $g\in G$ have finite order. Then the cyclic subgroup $\langle g\rangle$ is finite, so [L3] gives a fixed vertex for its action on the barycentric subdivision of $T$. [L3, given]

2.1 Let $p$ be the fixed vertex from step 1.1 in the barycentric subdivision. If $p$ is an original vertex of $T$, then [L1] forces $g=e$. If $p$ is the midpoint of an original geometric edge, then $g$ preserves that edge setwise. Because the original action is without inversions by [L2], $g$ cannot swap its two orientations, so it fixes both endpoints of that edge. Now [L1] again gives $g=e$. Hence no nonidentity torsion element exists. [L1, L2, step 1.1, algebra] ∎
