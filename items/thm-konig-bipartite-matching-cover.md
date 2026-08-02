---
id: thm-konig-bipartite-matching-cover
kind: theorem
title: "König's theorem: $\\nu(G)=\\tau(G)$ for every finite bipartite graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-konig-alternating-reachability-cover, def-matching-maximum-perfect-and-matching-number, def-vertex-and-edge-covers-and-covering-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Statement

For every finite bipartite graph $G$, its matching number and vertex-cover
number agree: $\nu(G)=\tau(G)$.

## Facts & Assumptions

**Given:** A finite bipartite graph $G$ and a maximum matching $M$.

[L1] Alternating reachability from a maximum matching constructs a vertex cover with exactly $|M|$ vertices ([[lem-konig-alternating-reachability-cover]]).

## Proof

**Proof technique:** direct.

1.1 Every vertex cover has at least $|M|$ vertices, because distinct edges of the matching $M$ require distinct cover vertices. [given]

1.2 By [L1], some vertex cover has exactly $|M|$ vertices. [L1]

2.1 The lower bound and exhibited cover show $\tau(G)=|M|=\nu(G)$. [step 1.1, step 1.2] ∎
