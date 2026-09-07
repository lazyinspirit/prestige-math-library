---
id: ex-co-bird-e-neighbourhood-case-table
title: "All E neighbourhood patterns under a complete nonedge pair"
kind: example
status: draft
origin: pipeline
deps: ["lem-co-bird-free-edge-plus-isolate-witness-obstruction", "lem-co-bird-free-path-plus-isolate-witness-obstruction", "lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs", "def-e-graph-and-co-e-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.2, explicit finite expansion"
      url: https://arxiv.org/html/2606.06258v2
---

## Example

Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. The 64 subsets $N(u)\cap S$, encoded by six adjacency bits, reduce to the empty and full subsets after imposing the two local obstruction tests. The table gives a witness for each of the 62 mixed subsets.

## Facts & Assumptions

[F1] [[lem-co-bird-free-edge-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

[F2] [[lem-co-bird-free-path-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

[F3] [[lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. Then $u$ is pure to $S$. In particular, in an $(\ell,w)$-comb with an outside vertex $v$ complete to all blocks and anticomplete to all teeth, each $u\in B_k$, $k\ne i$, is pure to every induced $E$ in $B_i$.

[F4] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

## Verification

**Given:** The graph, vertices, sets and hypotheses in the example.

1.1 For any row of type I the five-edge list verifies an induced edge-plus-isolate with adjacency bits $(1,0,0)$; type II verifies an induced path-plus-isolate with bits $(0,1,1,1)$. The respective obstruction forbids that row under the common complete-nonedge-pair hypotheses. All witness vertices lie in $S$, so the required outside vertices remain outside. [F1, F2, F4]

1.2 The symbolic proof of induced-$E$ purity also groups these possibilities exhaustively: constant adjacency on the five-vertex path forces the matching value at $q$; mixing on either terminal edge is impossible; equal terminal-pair values force the middle value; opposite terminal-pair values give the final contradiction. Consequently every mixed six-bit assignment is excluded without relying on a smoke test. The table supplies one direct witness for each such assignment. [F3]

2.1 For mask $0$, type I lacks its required neighbour and type II lacks three required neighbours. For mask $63$, type I lacks its two required nonneighbours and type II lacks its required nonneighbour. Hence neither local test rejects either constant mask, and exactly these two of the 64 subsets survive the tests. This is a statement about the two tests, not a sufficiency assertion for freeness of an arbitrary ambient graph. [given] ∎

## Adjacency table

Each mask is $m=\sum_{j=0}^5 2^j\epsilon_j$ in order $(p_1,p_2,p_3,p_4,p_5,q)$. Type I lists $(a,b,c)$: edge $ab$, isolate $c$, adjacency bits $(1,0,0)$. Type II lists $(a,b,c,d)$: path $a-b-c$, isolate $d$, bits $(0,1,1,1)$. Thus every row is an explicit prohibited induced configuration, checkable against the five-edge list.

| Mask | Type | Ordered witness |
| --- | --- | --- |
| 1 | I | $(p_1,p_2,p_4)$ |
| 2 | I | $(p_2,p_1,p_4)$ |
| 3 | I | $(p_2,p_3,p_5)$ |
| 4 | I | $(p_3,p_2,p_5)$ |
| 5 | I | $(p_1,p_2,p_4)$ |
| 6 | I | $(p_2,p_1,p_4)$ |
| 7 | I | $(p_3,q,p_5)$ |
| 8 | I | $(p_4,p_3,p_1)$ |
| 9 | I | $(p_1,p_2,p_5)$ |
| 10 | I | $(p_2,p_1,p_5)$ |
| 11 | I | $(p_2,p_3,p_5)$ |
| 12 | I | $(p_3,p_2,p_5)$ |
| 13 | I | $(p_1,p_2,p_5)$ |
| 14 | I | $(p_2,p_1,p_5)$ |
| 15 | I | $(p_3,q,p_5)$ |
| 16 | I | $(p_5,p_4,p_1)$ |
| 17 | I | $(p_1,p_2,p_4)$ |
| 18 | I | $(p_2,p_1,p_4)$ |
| 19 | I | $(p_5,p_4,q)$ |
| 20 | I | $(p_3,p_4,p_1)$ |
| 21 | I | $(p_1,p_2,p_4)$ |
| 22 | I | $(p_2,p_1,p_4)$ |
| 23 | I | $(p_5,p_4,q)$ |
| 24 | I | $(p_4,p_3,p_1)$ |
| 25 | I | $(p_1,p_2,q)$ |
| 26 | I | $(p_2,p_1,q)$ |
| 27 | II | $(p_3,p_2,p_1,p_5)$ |
| 28 | I | $(p_3,q,p_1)$ |
| 29 | I | $(p_1,p_2,q)$ |
| 30 | I | $(p_2,p_1,q)$ |
| 31 | II | $(q,p_3,p_2,p_5)$ |
| 32 | I | $(q,p_3,p_1)$ |
| 33 | I | $(p_1,p_2,p_4)$ |
| 34 | I | $(p_2,p_1,p_4)$ |
| 35 | I | $(p_2,p_3,p_5)$ |
| 36 | I | $(p_3,p_2,p_5)$ |
| 37 | I | $(p_1,p_2,p_4)$ |
| 38 | I | $(p_2,p_1,p_4)$ |
| 39 | II | $(p_4,p_3,q,p_1)$ |
| 40 | I | $(p_4,p_3,p_1)$ |
| 41 | I | $(p_1,p_2,p_5)$ |
| 42 | I | $(p_2,p_1,p_5)$ |
| 43 | I | $(p_2,p_3,p_5)$ |
| 44 | I | $(p_3,p_2,p_5)$ |
| 45 | I | $(p_1,p_2,p_5)$ |
| 46 | I | $(p_2,p_1,p_5)$ |
| 47 | II | $(p_5,p_4,p_3,p_1)$ |
| 48 | I | $(p_5,p_4,p_1)$ |
| 49 | I | $(p_1,p_2,p_4)$ |
| 50 | I | $(p_2,p_1,p_4)$ |
| 51 | II | $(p_3,p_2,p_1,p_5)$ |
| 52 | I | $(p_3,p_4,p_1)$ |
| 53 | I | $(p_1,p_2,p_4)$ |
| 54 | I | $(p_2,p_1,p_4)$ |
| 55 | II | $(p_4,p_3,q,p_1)$ |
| 56 | I | $(p_4,p_3,p_1)$ |
| 57 | II | $(p_3,p_4,p_5,p_1)$ |
| 58 | I | $(p_4,p_3,p_1)$ |
| 59 | II | $(p_3,p_2,p_1,p_5)$ |
| 60 | II | $(p_2,p_3,q,p_5)$ |
| 61 | II | $(p_2,p_3,q,p_5)$ |
| 62 | II | $(p_1,p_2,p_3,p_5)$ |
