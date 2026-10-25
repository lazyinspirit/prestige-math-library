---
id: ex-co-bird-e-free-comb-singleton-partition
title: "The no-E-copy boundary case of the comb partition"
kind: example
status: published
origin: pipeline
deps: ["thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition", "def-comb-in-a-graph", "def-e-graph-and-co-e-graph", "def-bird-graph-and-co-bird-graph"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5, singleton boundary adaptation"
      url: https://arxiv.org/html/2606.06258v2
---

## Example

Let $V(G)=\{a,b,v\}$ and $E(G)=\{ab,vb\}$. The one-tooth $(1,1)$-comb $((a,\{b\}))$ has special vertex $v$. In the structural partition take $X=\{b\}$, $Y=\varnothing$ and the singleton blockade $(\{b\})$.

## Facts & Assumptions

[F1] [[thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition]] supplies the following statement: Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. For every $i\in[\ell]$ there exist disjoint sets $X_i,Y_i$ with $B_i=X_i\cup Y_i$ such that $G[Y_i]$ is $E$-free, and $X_i$ has a partition into a nonempty ordered sequence $(A^i_1,\ldots,A^i_{t_i})$ of nonempty sets satisfying: the sequence is a pure blockade, its pattern is $E$-free, and each individual vertex of every other comb block is pure to each $A^i_j$. The blocks $A^i_j$ may additionally be chosen anticonnected.

[F2] [[def-comb-in-a-graph]] supplies the following definition: Let $\ell\in\mathbb N$ with $\ell\geq1$, and let $w>0$. An **$(\ell,w)$-comb** in a graph $G$ is a sequence of pairs $((a_i,B_i):i\in[\ell])$ satisfying the conditions below. Here a vertex $a$ is **complete to** (respectively, **anticomplete to**) a set $B$ when the pair $(\{a\},B)$ is complete (respectively, anticomplete) in the sense of def-edges-between-sets-and-pure-mixed-pairs. 1. $(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade; 2. the vertices $a_1,\dots,a_\ell$ are distinct; 3. the set $\{a_1,\dots,a_\ell\}$ is disjoint from every block $B_i$; and 4. for every $i\in[\ell]$, the vertex $a_i$ is complete to $B_i$; and 5. for all distinct $i,j\in[\ell]$, the vertex $a_i$ is anticomplete to $B_j$. The vertices $a_i$ are the **teeth** of the comb.

[F3] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

[F4] [[def-bird-graph-and-co-bird-graph]] supplies the following definition: The **Bird graph** is the graph on vertices $\{x_1,x_2,x_3,y,z,w\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$ So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.

## Verification

**Given:** The graph, vertices, sets and hypotheses in the example.

1.1 The graph has only three vertices and hence cannot contain the six-vertex co-Bird. The single block is nonempty of size one, its tooth $a$ is outside it and complete to it, and $v$ is outside both and sees $b$ but misses $a$. There are no distinct-tooth conditions to check. [F4, F2, given]

2.1 The block contains no six-vertex $E$, so its overlap support is empty. The singleton branch of the structural theorem gives exactly the displayed $X,Y$. The empty graph on $Y$ and the one-vertex pattern contain no $E$, the one-block blockade is pure, and the other-block purity condition is vacuous. [F1, F3] ∎
