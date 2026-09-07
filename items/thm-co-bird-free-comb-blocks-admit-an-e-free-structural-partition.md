---
id: thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition
title: "A special-vertex co-Bird-free comb admits an E-free structural partition"
kind: theorem
status: draft
origin: pipeline
deps: ["def-e-overlap-chain-relation-in-a-comb-block", "lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade", "lem-terminal-e-overlap-quotient-pattern-is-e-free", "lem-co-bird-free-external-purity-survives-e-overlap-quotients", "def-comb-in-a-graph", "def-h-free-and-family-free-graph", "def-e-graph-and-co-e-graph", "def-bird-graph-and-co-bird-graph"]
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
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. For every $i\in[\ell]$ there exist disjoint sets $X_i,Y_i$ with $B_i=X_i\cup Y_i$ such that $G[Y_i]$ is $E$-free, and $X_i$ has a partition into a nonempty ordered sequence $(A^i_1,\ldots,A^i_{t_i})$ of nonempty sets satisfying: the sequence is a pure blockade, its pattern is $E$-free, and each individual vertex of every other comb block is pure to each $A^i_j$. The blocks $A^i_j$ may additionally be chosen anticonnected.

## Facts & Assumptions

[F1] [[def-e-overlap-chain-relation-in-a-comb-block]] supplies the following definition: Fix a block $B_i$ of a finite graph comb (def-comb-in-a-graph). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in def-e-graph-and-co-e-graph. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation.

[F2] [[lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade]] supplies the following statement: For nonempty overlap support, put $n=|\mathcal L^1|$. Every stage $\mathcal L^s$ partitions the same support into nonempty anticonnected blocks and coarsens $\mathcal L^1$. There is a least $q\geq1$ for which $\mathcal L^q$ is pure, with $q\leq n$. At most $n-1$ strict transitions occur, and all stages from $q$ onward are identical.

[F3] [[lem-terminal-e-overlap-quotient-pattern-is-e-free]] supplies the following statement: For a comb block with nonempty $E$ overlap support, the pattern graph of its terminal pure quotient blockade $\mathcal L^q$ is $E$-free.

[F4] [[lem-co-bird-free-external-purity-survives-e-overlap-quotients]] supplies the following statement: Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. Fix $i$ with nonempty $E$ overlap support. For every $s\geq1$, every block $L$ of $\mathcal L^s$ and every vertex $u\in\bigcup_{k\ne i}B_k$, the vertex $u$ is pure to $L$.

[F5] [[def-comb-in-a-graph]] supplies the following definition: Let $\ell\in\mathbb N$ with $\ell\geq1$, and let $w>0$. An **$(\ell,w)$-comb** in a graph $G$ is a sequence of pairs $((a_i,B_i):i\in[\ell])$ satisfying the conditions below. Here a vertex $a$ is **complete to** (respectively, **anticomplete to**) a set $B$ when the pair $(\{a\},B)$ is complete (respectively, anticomplete) in the sense of def-edges-between-sets-and-pure-mixed-pairs. 1. $(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade; 2. the vertices $a_1,\dots,a_\ell$ are distinct; 3. the set $\{a_1,\dots,a_\ell\}$ is disjoint from every block $B_i$; and 4. for every $i\in[\ell]$, the vertex $a_i$ is complete to $B_i$; and 5. for all distinct $i,j\in[\ell]$, the vertex $a_i$ is anticomplete to $B_j$. The vertices $a_i$ are the **teeth** of the comb.

[F6] [[def-h-free-and-family-free-graph]] supplies the following definition: For finite graphs $H$ and $G$, the graph $G$ is **$H$-free** when $G$ has no induced copy of $H$ (def-induced-embedding-and-induced-copy). Equivalently, $\operatorname{ind}_H(G)=0$ (def-induced-copy-number). For a family $\mathcal F$ of finite graphs, a finite graph $G$ is **$\mathcal F$-free** when it is $H$-free for every $H\in\mathcal F$. Throughout this page, “free” always refers to induced subgraphs. It does not merely prohibit ordinary subgraph copies.

[F7] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

[F8] [[def-bird-graph-and-co-bird-graph]] supplies the following definition: The **Bird graph** is the graph on vertices $\{x_1,x_2,x_3,y,z,w\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$ So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 The forbidden pattern here is the complement of the six-vertex Bird, and freeness means absence of an induced copy. Fix $i$. The comb definition ensures $B_i$ is nonempty. Use its overlap support $X_i^0$ and complement $Y_i^0$. [F8, F6, F5, F1]

1.2 If $X_i^0$ is nonempty, set $X_i=X_i^0$ and $Y_i=Y_i^0$. An induced $E$ in $Y_i$ would put all its vertices in the overlap support, contradicting disjointness. Take the terminal quotient as the partition of $X_i$; it is a nonempty pure blockade of anticonnected sets. [F1, F2]

1.3 The terminal pattern is $E$-free. Every vertex of another comb block is pure to every terminal block by external quotient purity, with the same given comb and special vertex. This verifies all claims in the nonempty-support case. [F3, F4]

1.4 If $X_i^0$ is empty, there is no induced $E$ anywhere in $B_i$. Choose the first vertex $b$ in a fixed finite enumeration of this nonempty block, and set $X_i=\{b\}$, $Y_i=B_i\setminus\{b\}$. Then $Y_i$ is $E$-free. The one-block sequence $(\{b\})$ is pure, anticonnected and has a one-vertex pattern, which cannot contain the six-vertex $E$. Any outside vertex is either adjacent or nonadjacent to $b$, so is pure to this block. [F1, F5, F7]

2.1 The two support cases exhaust every $i$. Use a fixed enumeration of the finite ambient vertex set for all choices and block orderings. When $\ell=1$ there are no other-block vertices, so that clause is vacuous; $Y_i$ is allowed to be empty. The constructions establish the assertion for all blocks. [given] ∎
