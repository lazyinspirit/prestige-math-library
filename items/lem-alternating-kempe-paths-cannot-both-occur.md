---
id: lem-alternating-kempe-paths-cannot-both-occur
kind: lemma
title: "For five cyclically ordered neighbours of a plane vertex, alternating Kempe paths between the first and third and between the second and fourth cannot both occur"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-kempe-chain, thm-polygonal-jordan-curve, def-plane-graph-face-and-boundary, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 5.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $v_1,\ldots,v_5$ be the five distinct neighbours of a vertex $v$ in cyclic order in a plane graph ([[def-plane-graph-face-and-boundary]]), and suppose they have distinct colours $1,\ldots,5$. In the coloured graph with $v$ deleted, an alternating $1$-$3$ Kempe path from $v_1$ to $v_3$ and an alternating $2$-$4$ Kempe path from $v_2$ to $v_4$ cannot both exist ([[def-kempe-chain]]). Paths use [[def-graph-walk-trail-path-and-cycle]].

## Facts & Assumptions

**Given:** The plane configuration and proper colouring in the Statement.

[L1] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

[F1] A path is a walk in which the vertices are distinct ([[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose both paths exist. Choose a simple $1$-$3$ path $P$ from $v_1$ to $v_3$. Together with the plane edges $vv_1$ and $vv_3$, it forms a polygonal cycle $C$. [assume-contra, F1]

2.1 The cyclic order at $v$ places $v_2$ and $v_4$ on opposite local sides of $C$. By [L1] they lie in different regions of $\mathbb R^2\setminus C$, so every plane path between them meets $C$. In particular the supposed $2$-$4$ Kempe path meets $P$ or one of the two edges incident with $v$. [step 1.1, L1, F1]

3.1 The $2$-$4$ path avoids $v$ and has only colours $2,4$, whereas $P$ has only colours $1,3$; proper plane edges cannot cross in their interiors and the two paths cannot share a vertex. This contradicts step 2.1, so both Kempe connections cannot occur. [step 2.1, discharge-contradiction] ∎

