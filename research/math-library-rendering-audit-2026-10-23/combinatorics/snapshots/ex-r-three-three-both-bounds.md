---
id: ex-r-three-three-both-bounds
kind: example
title: "$R(3,3)=6$ in both directions: the six-vertex argument and the red $5$-cycle whose blue complement is another $5$-cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-r-three-three-equals-six, thm-the-strong-pigeonhole-principle, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
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
    - title: "Douglas West, Combinatorial Game Theory, Ramsey example"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Example

The equality in [[thm-r-three-three-equals-six]] can be read directly on labelled complete graphs. Complete graphs are those of [[def-standard-complete-bipartite-path-and-cycle-graphs]], and the blue graph in the lower witness is the complement in the sense of [[def-graph-isomorphism-and-complement]].

## Facts & Assumptions

**Given:** Vertices $0,\ldots,5$ for the upper witness and $0,\ldots,4$ for the lower witness; finite pigeonhole is [[thm-the-strong-pigeonhole-principle]].

[L1] The Ramsey number satisfies $R(3,3)=6$ ([[thm-r-three-three-equals-six]]).

## Verification

**Proof technique:** direct.

1.1 At vertex $0$ of a red-blue $K_6$, three incident edges share a colour. If they are $01,02,03$ and red, then a red edge among $12,13,23$ closes a red triangle, while the absence of such an edge makes $123$ a blue triangle. Exchanging colours covers the other case. [L1]

2.1 On $K_5$, colour $01,12,23,34,40$ red and the other edges blue. The red graph is the cycle $0,1,2,3,4,0$; the blue graph is the cycle $0,2,4,1,3,0$. Neither cycle has a triangle. This gives a five-vertex avoidance colouring and, together with step 1.1, verifies both sides of [L1]. [step 1.1, L1, construct] ∎
