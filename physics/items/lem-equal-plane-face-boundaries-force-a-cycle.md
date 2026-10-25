---
id: lem-equal-plane-face-boundaries-force-a-cycle
kind: lemma
title: "If two distinct faces of a connected plane graph have the same boundary subgraph, then the graph is a cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-plane-edge-face-incidence, thm-polygonal-jordan-curve, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.2.5"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

If two distinct faces of a connected plane graph have the same boundary subgraph, then the whole graph is a cycle in the sense of [[def-graph-walk-trail-path-and-cycle]] and [[def-connected-graph-and-connected-component]].

## Facts & Assumptions

**Given:** A connected plane graph $G$ and distinct faces $f_1,f_2$ with the same boundary subgraph $H$.

[L1] A cycle edge borders two faces and a bridge borders one face ([[lem-plane-edge-face-incidence]]).

[L2] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

## Proof

**Proof technique:** direct.

1.1 No edge of the common boundary $H$ is a bridge, because [L1] gives a bridge only one incident face. Hence every boundary edge lies on a cycle, and $H$ contains a cycle $C$. [L1]

2.1 By [L2], $C$ has exactly two complementary regions. Since both $f_1$ and $f_2$ have all of $H$ as boundary, they lie on opposite sides of $C$. Any edge, vertex, chord or attached component of $H$ outside $C$ would lie on only one side of $C$ and could not lie in the frontier of the face on the other side. Thus $H=C$. [step 1.1, L2]

3.1 If $G$ contained an edge or vertex outside $H=C$, connectedness would attach it through one side of $C$ and alter only that face boundary, contradicting the assumed equality. Therefore $G=C$. [step 2.1] ∎

