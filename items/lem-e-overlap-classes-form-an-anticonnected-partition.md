---
id: lem-e-overlap-classes-form-an-anticonnected-partition
title: "E overlap classes form an anticonnected partition"
kind: lemma
status: published
origin: pipeline
deps: ["def-e-overlap-chain-relation-in-a-comb-block", "def-anticonnected-graph-and-anticonnected-component", "def-e-graph-and-co-e-graph"]
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
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5, overlap classes"
      url: https://arxiv.org/html/2606.06258v2
    - title: "Diestel, Graph Theory, Chapter 1, §§1.1 and 1.4 (foundations)"
      url: https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf
---

## Statement

The relation $R_i$ on the overlap support $X_i$ is an equivalence relation. Its classes partition $X_i$; every induced $E$ in $B_i$ lies within one class. Each class is nonempty and anticonnected. If $X_i=\varnothing$, there are no classes.

## Facts & Assumptions

[F1] [[def-e-overlap-chain-relation-in-a-comb-block]] supplies the following definition: Fix a block $B_i$ of a finite graph comb (def-comb-in-a-graph). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in def-e-graph-and-co-e-graph. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation.

[F2] [[def-anticonnected-graph-and-anticonnected-component]] supplies the following definition: A graph $G$ is **anticonnected**, or **co-connected**, when its complement $\overline G$ is connected (def-connected-graph-and-connected-component, def-graph-isomorphism-and-complement). An **anticonnected component**, or **anticomponent**, of $G$ is a vertex set $A\subseteq V(G)$ that is the vertex set of a connected component of $\overline G$. Equivalently, $G[A]$ is anticonnected and $A$ is inclusion-maximal with that property (def-subgraph-induced-subgraph-and-spanning-subgraph). Under the library convention, the null graph is not anticonnected, while a one-vertex graph is anticonnected.

[F3] [[def-e-graph-and-co-e-graph]] supplies the following definition: The **$E$-graph** is the graph on vertices $\{p_1,p_2,p_3,p_4,p_5,q\}$ with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$ Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 Length zero gives reflexivity, reversal gives symmetry, and concatenating two finite chains gives transitivity. These assertions also hold on the empty support. Classes cover $X_i$ because each vertex relates to itself; classes meeting at a vertex are equal by symmetry and transitivity. [F1]

1.2 Any two vertices of one induced $E$ have a length-one chain, so that copy lies in one class. In the complement of $E$, $p_1$ is adjacent to $p_3,p_4,p_5,q$ and reaches $p_2$ through $p_4$. Thus the complement is connected. [F1, F3]

2.1 For two vertices of a class, take a defining chain. Each consecutive pair can be joined in the complement of its witnessing $E$; all vertices of that copy belong to the class. Concatenation gives a complement walk within the class, from which deleting closed portions gives a path. For an identical pair the length-zero path suffices. The class is nonempty and hence anticonnected. [F1, F2] ∎
