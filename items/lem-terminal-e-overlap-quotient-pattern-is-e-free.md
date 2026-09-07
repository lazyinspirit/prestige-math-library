---
id: lem-terminal-e-overlap-quotient-pattern-is-e-free
title: "The terminal E overlap pattern is E-free"
kind: lemma
status: published
origin: pipeline
deps: ["lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade", "def-e-overlap-blockade-and-iterated-mixed-quotients", "def-e-overlap-chain-relation-in-a-comb-block", "def-pattern-graph-of-a-pure-blockade", "def-e-graph-and-co-e-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5(2.2)"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

For a comb block with nonempty $E$ overlap support, the pattern graph of its terminal pure quotient blockade $\mathcal L^q$ is $E$-free.

## Facts & Assumptions

[F1] [[lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade]] supplies the following statement: For nonempty overlap support, put $n=|\mathcal L^1|$. Every stage $\mathcal L^s$ partitions the same support into nonempty anticonnected blocks and coarsens $\mathcal L^1$. There is a least $q\geq1$ for which $\mathcal L^q$ is pure, with $q\leq n$. At most $n-1$ strict transitions occur, and all stages from $q$ onward are identical.

[F2] [[def-e-overlap-chain-relation-in-a-comb-block]] supplies the following definition: Fix a block $B_i$ of a finite graph comb (def-comb-in-a-graph). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in def-e-graph-and-co-e-graph. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation. Throughout this definition, “the graph in def-e-graph-and-co-e-graph” means the $E$-graph defined there, not the co-$E$ graph.

[F3] [[def-pattern-graph-of-a-pure-blockade]] supplies the following definition: Let $\mathcal{B}=(B_1,\dots,B_t)$ be a pure blockade in a graph $G$. Its **pattern graph** is the graph $P(\mathcal{B})$ with vertex set $[t]$ in which $i$ and $j$ are adjacent exactly when $B_i$ is complete to $B_j$. Because the blockade is pure, every unordered pair of distinct blocks is either complete or anticomplete, so this graph is well defined. A pattern graph is called **$P_4$-free** when it contains no induced four-vertex path.

[F4] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

[F5] [[def-e-overlap-blockade-and-iterated-mixed-quotients]] supplies the following definition: Fix a comb block $B_i$ with nonempty $E$ overlap support $X_i$. By lem-e-overlap-classes-form-an-anticonnected-partition, its overlap classes are nonempty anticonnected sets partitioning $X_i$. Fix an enumeration of the finite set $B_i$, and order the classes by their least enumerated vertex to obtain $\mathcal L^1$. Define recursively $\mathcal L^{s+1}=\mathcal L^s/\mathcal M$ for $s\geq1$, using def-quotient-blockade-by-mixed-block-reachability and its least-member ordering. Thus one replaces each mixed-reachability class of blocks by its union. This construction is used only when $X_i\ne\varnothing$.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 All terminal blocks are nonempty, pairwise pure, and unions of initial overlap classes. Suppose six distinct pattern vertices induce $E$. Choose one vertex in each corresponding block. The six choices are possible because each block is nonempty, and the chosen vertices are distinct because the blocks are disjoint. [F1, given]

1.2 By the definition of the pattern, complete block pairs supply edges between the representatives; nonadjacent pattern pairs, being pure and not complete, are anticomplete. Thus all fifteen pairs of representatives have exactly the adjacency of $E$, including its ten nonedges. [F3, F4]

2.1 These six vertices form an induced $E$ inside $B_i$, so every pair has an overlap chain of length one and they all belong to a single overlap class. That class is one block of $\mathcal L^1$, and coarsening places it in a single terminal block, contradicting the six distinct chosen blocks. If the pattern has fewer than six vertices the prohibited selection is already impossible. [F2, F5, F1] ∎
