---
id: lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing
title: "A separated anticonnected block pair forbids mixing in one direction"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-co-bird-free-edge-plus-isolate-witness-obstruction", "lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge", "def-edges-between-sets-and-pure-mixed-pairs"]
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
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.3, nonedge obstruction"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Let $G$ be finite simple and co-Bird-free. Let $D_1,D_2$ be disjoint nonempty vertex sets, with $D_2$ anticonnected. Suppose distinct $x,y,z\notin D_1\cup D_2$ satisfy $xy\notin E(G)$, both $x,y$ are complete to $D_1\cup D_2$, $zx\in E(G)$, $zy\notin E(G)$, and $z$ is complete to $D_1$ and anticomplete to $D_2$. Then no vertex of $D_1$ is mixed on $D_2$.

## Facts & Assumptions

[F1] [[lem-co-bird-free-edge-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

[F2] [[lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge]] supplies the following statement: Let $G$ be a finite graph, let $A\subseteq V(G)$ be anticonnected, and let $v\in V(G)\setminus A$ be mixed on $A$. Then there exist distinct vertices $b,b'\in A$ such that $bb'\notin E(G),\qquad vb\in E(G),\qquad vb'\notin E(G).$

[F3] [[def-edges-between-sets-and-pure-mixed-pairs]] supplies the following definition: Let $G$ be a finite simple graph and let $A,B\subseteq V(G)$ be disjoint. An **edge between $A$ and $B$** is an edge $ab$ with $a\in A$ and $b\in B$. The pair $(A,B)$ is: - **complete** when every $a\in A$ is adjacent to every $b\in B$; - **anticomplete** when no $a\in A$ is adjacent to any $b\in B$; - **pure** when it is complete or anticomplete; and - **mixed** when it is neither complete nor anticomplete. Adjacency is the symmetric edge relation of $G$ (def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree). If $A=\varnothing$ or $B=\varnothing$, the pair is both complete and anticomplete, hence pure and not mixed.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 If $b_1\in D_1$ mixes on $D_2$, the anticonnected witness lemma gives distinct $b_2,b_2^{\prime}\in D_2$ with $b_2b_2^{\prime}$ absent, $b_1b_2$ present and $b_1b_2^{\prime}$ absent. Thus these three vertices induce exactly an edge and an isolate. [F2, given]

2.1 The vertices $x,y$ are outside this triple and complete to it. The outside vertex $z$ sees the edge endpoint $b_1$ and misses the other endpoint $b_2$ and isolate $b_2^{\prime}$. This violates the edge-plus-isolate obstruction. Hence such a $b_1$ cannot exist. [F1, F3] ∎
