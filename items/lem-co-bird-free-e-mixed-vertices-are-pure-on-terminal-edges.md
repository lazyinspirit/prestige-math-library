---
id: lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges
title: "A mixed vertex on E is pure on both terminal edges"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-co-bird-free-edge-plus-isolate-witness-obstruction", "lem-co-bird-free-path-plus-isolate-witness-obstruction", "def-e-graph-and-co-e-graph"]
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
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.2, terminal-edge cases"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. If $u$ is mixed on $S$, it is nevertheless pure to both terminal edges $\{p_1,p_2\}$ and $\{p_4,p_5\}$.

## Facts & Assumptions

[F1] [[lem-co-bird-free-edge-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

[F2] [[lem-co-bird-free-path-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

[F3] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 Use the exact five-edge description of $S$. Suppose $u$ mixes on $p_1p_2$. Each of $q,p_4,p_5$ is isolated from this edge; the edge-plus-isolate obstruction forces all three to be neighbours of $u$. [given, F1, F3]

1.2 If $up_1$ is present and $up_2$ absent, then $up_3$ must be present: otherwise the path $p_3-p_4-p_5$ with isolate $p_1$ has precisely the prohibited neighbourhood. Now the path $p_2-p_3-q$ with isolate $p_5$ has that same prohibited pattern, a contradiction. [F2]

1.3 If $up_2$ is present and $up_1$ absent, the edge $p_3q$ with isolate $p_1$ forces $up_3$ to be present. The path $p_1-p_2-p_3$ with isolate $p_5$ then violates the path-plus-isolate obstruction. [F1, F2]

2.1 The two possibilities exhaust mixing on $p_1p_2$. Reflection $p_j\mapsto p_{6-j}$ fixing $q$ preserves all five edges and the external hypotheses, and proves the same conclusion for $p_4p_5$. [F3] ∎
