---
id: thm-ores-hamiltonicity-theorem
kind: theorem
title: "Ore's theorem: an $n$-vertex graph with $n\\ge3$ and $\\deg(u)+\\deg(v)\\ge n$ for every nonadjacent pair is Hamiltonian"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bondy-chvatal-closure-theorem, def-bondy-chvatal-closure, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph on $n\ge3$ vertices. If
$\deg(u)+\deg(v)\ge n$ for every pair of nonadjacent vertices $u,v$, then $G$
is Hamiltonian.

## Facts & Assumptions

**Given:** An $n$-vertex graph $G$ satisfying Ore's condition, with $n\ge3$.

[F1] The Bondy-Chvatal procedure adds every currently eligible nonedge until none remains ([[def-bondy-chvatal-closure]]).

[L1] A graph is Hamiltonian exactly when its closure is Hamiltonian ([[thm-bondy-chvatal-closure-theorem]]).

[F2] The complete graph $K_n$ contains every edge between distinct vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F3] Degrees count neighbours and cannot decrease when edges are added ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 Every nonedge of $G$ is eligible by hypothesis. Eligibility persists as edges are added because degrees cannot decrease, so the closure procedure adds all missing edges and $\operatorname{cl}(G)=K_n$. [given, F1, F2, F3]

1.2 Label the vertices of $K_n$ as $v_1,\ldots,v_n$. Since $n\ge3$, the cycle $v_1,v_2,\ldots,v_n,v_1$ is a Hamilton cycle in $K_n$. [F2, given]

2.1 Thus the closure of $G$ is Hamiltonian, and [L1] implies that $G$ is Hamiltonian. [step 1.1, step 1.2, L1] ∎
