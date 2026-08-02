---
id: thm-gallai-matching-edge-cover-identity
kind: theorem
title: "Gallai's identity: $\\nu(G)+\\rho(G)=|V(G)|$ when $G$ has no isolated vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matching-maximum-perfect-and-matching-number, def-vertex-and-edge-covers-and-covering-numbers, def-graph-adjacency-incidence-neighbourhood-and-degree, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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

If a finite graph $G=(V,E)$ has no isolated vertex, then its matching and
edge-cover numbers satisfy $\nu(G)+\rho(G)=|V|$.

## Facts & Assumptions

**Given:** A finite graph $G=(V,E)$ without isolated vertices and a maximum matching $M$.

[F1] A matching has pairwise endpoint-disjoint edges, and $|M|=\nu(G)$ when $M$ is maximum ([[def-matching-maximum-perfect-and-matching-number]]).

[F2] An edge cover meets every vertex and $\rho(G)$ is the least cardinality of one ([[def-vertex-and-edge-covers-and-covering-numbers]]).

## Proof

**Proof technique:** constructive.

1.1 The $M$-exposed vertices are independent, or an edge between two would enlarge $M$; choose one incident edge for each exposed vertex and adjoin them to $M$, obtaining an edge cover of $|M|+(|V|-2|M|)=|V|-|M|$ edges. [F1, F2, construct]

1.2 Thus $\rho(G)\le|V|-\nu(G)$. [F2]

1.3 Let $F$ be an inclusion-minimal edge cover. Its graph has no cycle, since a cycle edge could be deleted, and no path of length three, since its middle edge could be deleted; hence every component is a star and choosing one edge from each component is a matching of $|V|-|F|$ edges. [F1]

2.1 Therefore $\nu(G)\ge|V|-\rho(G)$ by step 1.3, while step 1.2 gives the reverse inequality, proving $\nu(G)+\rho(G)=|V|$. [step 1.2, step 1.3, discharge-construct] ∎

## Remarks

- The no-isolated-vertex hypothesis is load-bearing: an isolated vertex has no incident edge, so no edge cover exists.
