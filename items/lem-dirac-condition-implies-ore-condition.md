---
id: lem-dirac-condition-implies-ore-condition
kind: lemma
title: "The minimum-degree condition $\\delta(G)\\ge n/2$ implies Ore's degree-sum condition"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
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

Let $G$ be a finite simple graph on $n\ge1$ vertices. If
$\delta(G)\ge n/2$, then every nonadjacent pair $u,v$ satisfies
$\deg(u)+\deg(v)\ge n$.

## Facts & Assumptions

**Given:** A nonempty finite simple graph $G$ on $n$ vertices with $\delta(G)\ge n/2$.

[F1] The minimum degree satisfies $\delta(G)\le\deg(w)$ for every vertex $w$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] The order $n$ is the finite cardinality of the vertex set ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 For any nonadjacent vertices $u,v$, [F1] and the hypothesis give $\deg(u)+\deg(v)\ge2\delta(G)\ge n$. [given, F1, F2, algebra]

2.1 Since the pair was arbitrary, Ore's degree-sum condition holds for every nonadjacent pair. [step 1.1] ∎
