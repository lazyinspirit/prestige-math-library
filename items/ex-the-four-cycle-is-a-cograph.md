---
id: ex-the-four-cycle-is-a-cograph
kind: example
title: "The four-cycle is a cograph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-complete-connection-of-two-disjoint-graphs,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Example

The four-cycle $C_4$ is a cograph.

## Facts & Assumptions

**Given:** The cycle $C_4$ on vertices $0,1,2,3$.

[L1] Any graph built from one-vertex graphs by repeated disjoint unions and complete connections is a cograph ([[def-cograph-by-singletons-disjoint-union-and-complete-connection]]).

[L2] In $C_4$, the edges are exactly $01,12,23,30$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] The complete connection of two vertex-disjoint graphs is obtained by keeping all internal edges and adding every possible cross edge ([[def-complete-connection-of-two-disjoint-graphs]]).

## Verification

**Proof technique:** direct construction.

1.1 Let $A:=\{0,2\}$ and $B:=\{1,3\}$. By [L2], there is no edge inside $A$ and no edge inside $B$, while every cross pair $0$-$1$, $1$-$2$, $2$-$3$, and $3$-$0$ is an edge. Thus the induced graphs on $A$ and $B$ are two edgeless two-vertex graphs. [L2]

2.1 Each edgeless two-vertex graph is a cograph, because it is the disjoint union of two one-vertex graphs. Step 1.1 and [L3] show that $C_4$ is the complete connection of those two cographs. Therefore [L1] makes $C_4$ a cograph. [step 1.1, L1, L3]

3.1 Hence the four-cycle is a cograph. [step 2.1] ∎
