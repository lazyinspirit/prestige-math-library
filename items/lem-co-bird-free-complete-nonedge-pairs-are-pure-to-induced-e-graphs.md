---
id: lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs
title: "Complete nonedge pairs force purity on induced E graphs"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges", "lem-co-bird-free-edge-plus-isolate-witness-obstruction", "lem-co-bird-free-path-plus-isolate-witness-obstruction", "def-e-graph-and-co-e-graph", "def-comb-in-a-graph"]
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
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.2"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. Then $u$ is pure to $S$. In particular, in an $(\ell,w)$-comb with an outside vertex $v$ complete to all blocks and anticomplete to all teeth, each $u\in B_k$, $k\ne i$, is pure to every induced $E$ in $B_i$.

## Facts & Assumptions

[F1] [[lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. If $u$ is mixed on $S$, it is nevertheless pure to both terminal edges $\{p_1,p_2\}$ and $\{p_4,p_5\}$.

[F2] [[lem-co-bird-free-edge-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

[F3] [[lem-co-bird-free-path-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

[F4] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

[F5] [[def-comb-in-a-graph]] supplies the following definition: Let $\ell\in\mathbb N$ with $\ell\geq1$, and let $w>0$. An **$(\ell,w)$-comb** in a graph $G$ is a sequence of pairs $((a_i,B_i):i\in[\ell])$ satisfying the conditions below. Here a vertex $a$ is **complete to** (respectively, **anticomplete to**) a set $B$ when the pair $(\{a\},B)$ is complete (respectively, anticomplete) in the sense of def-edges-between-sets-and-pure-mixed-pairs. 1. $(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade; 2. the vertices $a_1,\dots,a_\ell$ are distinct; 3. the set $\{a_1,\dots,a_\ell\}$ is disjoint from every block $B_i$; and 4. for every $i\in[\ell]$, the vertex $a_i$ is complete to $B_i$; and 5. for all distinct $i,j\in[\ell]$, the vertex $a_i$ is anticomplete to $B_j$. The vertices $a_i$ are the **teeth** of the comb.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 Write $P=\{p_1,\ldots,p_5\}$ using the five-edge definition. If $u$ is complete to $P$ but misses $q$, the path $q-p_3-p_4$ and isolate $p_1$ violate the second obstruction. If $u$ is anticomplete to $P$ but sees $q$, the edge $p_3q$ and isolate $p_1$ violate the first. Thus purity on $P$ implies purity on $S$. [F2, F3, F4]

1.2 It remains to exclude mixing on $P$. By terminal-edge purity, the adjacency values on $p_1,p_2$ agree and those on $p_4,p_5$ agree. [F1]

1.3 If both terminal pairs are complete to $u$, mixing on $P$ forces $up_3$ absent. The path $p_3-p_2-p_1$ and isolate $p_5$ violate the second obstruction. If both are anticomplete, mixing forces $up_3$ present, and the edge $p_2p_3$ with isolate $p_5$ violates the first. [F2, F3]

1.4 In the remaining case reflect the path so $u$ sees $p_1,p_2$ and misses $p_4,p_5$. The edge $p_2p_3$ with isolate $p_5$ forces $up_3$ present. The path $q-p_3-p_4$ with isolate $p_1$ forces $uq$ absent. But then the edge $p_3q$ with isolate $p_5$ violates the first obstruction. This exhausts the possibilities and proves purity on $S$. [F2, F3, F4]

2.1 For the comb assertion substitute $(x,y)=(v,a_i)$. These are distinct nonadjacent vertices outside $B_i$, both complete to it; $u\in B_k$ is outside $B_i$ and both teeth and is adjacent to $v$ but not to $a_i$. All hypotheses of the proved assertion hold. [F5, given] ∎
