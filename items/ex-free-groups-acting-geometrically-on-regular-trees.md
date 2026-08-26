---
id: ex-free-groups-acting-geometrically-on-regular-trees
kind: example
title: "Free groups act geometrically on regular trees"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-action-on-a-metric-space, thm-svarc-milnor-lemma, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Example

Let $F_r$ be a free group of rank $r \ge 2$, and let $T_X$ be its Cayley graph
with respect to a free basis $X$. Then $T_X$ is a regular tree, and the left
translation action of $F_r$ on its vertex set is geometric. Consequently
$F_r$ is quasi-isometric to that tree.

## Facts & Assumptions

**Given:** A free basis $X$ of a free group $F_r$ with $r \ge 2$, and the Cayley graph $T_X$.

[L1] The Cayley graph of a free group with respect to a free basis is a tree ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[L2] A geometric action is isometric, proper, and cobounded ([[def-geometric-action-on-a-metric-space]]).

[L3] Under a geometric action on a geodesic metric space, every orbit map is a quasi-isometry ([[thm-svarc-milnor-lemma]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the graph $T_X$ is a tree, hence geodesic in its path metric. Left translation sends edges to edges, so the action is isometric. It is free and transitive on vertices, hence proper and cobounded. Therefore the action is geometric by [L2]. [L1, L2, algebra]

2.1 Applying [L3] to the action of step 1.1 shows that the orbit map from $F_r$ to the vertex set of $T_X$ is a quasi-isometry. [L3, step 1.1] ∎
