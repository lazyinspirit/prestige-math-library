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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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
with respect to a free basis $X$. Give its geometric realization unit-length
edges and the induced path metric. Then $T_X$ is a regular metric tree, and the
left translation action of $F_r$ on that tree is geometric. Consequently
$F_r$ is quasi-isometric to that tree.

## Facts & Assumptions

**Given:** A free basis $X$ of a free group $F_r$ with $r \ge 2$, the geometric realization of its Cayley graph $T_X$ with unit-length edges, and the identity vertex $x_0$.

[L1] The Cayley graph of a free group with respect to a free basis is a tree ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[L2] A geometric action is isometric, proper, and cobounded ([[def-geometric-action-on-a-metric-space]]).

[L3] Under a geometric action on a geodesic metric space, every orbit map is a quasi-isometry ([[thm-svarc-milnor-lemma]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the geometric realization $T_X$ is a tree with unit-length edges, so the unique arc between any two points is a geodesic in its path metric. Left translation extends linearly across edges and preserves lengths. If bounded sets $B,C\subseteq T_X$ satisfy $gB\cap C\ne\varnothing$, choose $x\in B$ with $gx\in C$. Then $d(x_0,gx_0)\le d(x_0,x)+d(x_0,gx)$, which is bounded by constants depending only on $B,C$. Finite valence makes the vertex ball of that radius finite, and the free vertex action has a distinct orbit vertex for each $g$; hence only finitely many $g$ can carry $B$ into $C$. Thus the action is proper. The vertex orbit is all vertices, and every point of an edge lies within $1/2$ of a vertex, so the action is cobounded. It is geometric by [L2]. [L1, L2, algebra]

2.1 Applying [L3] to the action on the geodesic metric tree in step 1.1 shows that the orbit map from $F_r$ into $T_X$ is a quasi-isometry. [L3, step 1.1] ∎
