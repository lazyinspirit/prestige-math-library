---
id: thm-cographs-are-exactly-the-p-four-free-graphs
kind: theorem
title: "The cographs are exactly the P_4-free graphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cograph-by-singletons-disjoint-union-and-complete-connection,
       lem-induced-subgraphs-of-cographs-are-cographs,
       thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement,
       thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-h-free-and-family-free-graph,
       cor-connected-components-partition-the-vertex-set,
       lem-anticonnected-components-are-complement-components,
       lem-components-are-anticomplete-and-anticomponents-complete,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-connected-graph-and-connected-component,
       def-anticonnected-graph-and-anticonnected-component,
       def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Theorem 2.1"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

A finite graph is a cograph if and only if it is $P_4$-free.

## Facts & Assumptions

**Given:** A finite graph $G$.

[L1] Every induced subgraph of a cograph is a cograph
([[lem-induced-subgraphs-of-cographs-are-cographs]]).

[L2] Every nontrivial cograph is disconnected or has disconnected complement
([[thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement]]).

[L3] The four-vertex path $P_4$ has vertices $0,1,2,3$ and edges
$01,12,23$, and its complement has edges $02,03,13$. Hence both $P_4$ and
$\overline{P_4}$ are connected
([[def-standard-complete-bipartite-path-and-cycle-graphs]],
[[def-connected-graph-and-connected-component]],
[[def-graph-isomorphism-and-complement]]).

[L4] Every nontrivial $P_4$-free graph is disconnected or its complement is
disconnected
([[thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected]]).

[L5] Connected components partition the vertex set, anticomponents do too,
distinct components are anticomplete, and distinct anticomponents are complete
([[cor-connected-components-partition-the-vertex-set]],
[[lem-anticonnected-components-are-complement-components]],
[[lem-components-are-anticomplete-and-anticomponents-complete]]).

[F1] A graph is $P_4$-free when it contains no induced copy of the path $P_4$
([[def-h-free-and-family-free-graph]],
[[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] Every induced subgraph of a $P_4$-free graph is again $P_4$-free, because
an induced copy inside an induced subgraph is also an induced copy in the whole
graph
([[def-h-free-and-family-free-graph]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** induction on the order of a $P_4$-free graph.

1.1 Suppose first that $G$ is a cograph. If $G$ had an induced copy of $P_4$ on some vertex set $X$, then [L1] would make $G[X]$ a cograph. But $G[X]$ is isomorphic to $P_4$, and [L3] shows that both $P_4$ and its complement are connected, contradicting [L2]. Therefore every cograph is $P_4$-free. [L1, L2, L3, F1]

1.2 For the converse, we prove by induction on $n:=|V(G)|$ that every $P_4$-free graph on $n$ vertices is a cograph. If $n\leq 1$, then $G$ is the null graph or a one-vertex graph, and the recursive definition makes it a cograph. [F1, base]

2.1 Assume now that $n\geq 2$ and that every smaller $P_4$-free graph is a cograph. Because $G$ is $P_4$-free, [L4] gives that $G$ is disconnected or $\overline G$ is disconnected. [step 1.2, L4, ih]

3.1 If $G$ is disconnected, choose a connected component $C$ of $G$ and let $D:=V(G)\setminus C$. Then $C$ and $D$ are nonempty, [L5] makes them anticomplete, and [F2] makes both $G[C]$ and $G[D]$ smaller $P_4$-free graphs. By the induction hypothesis they are cographs, so $G$ is their disjoint union and hence a cograph. [step 2.1, L5, F2, ih, choose]

3.2 If $\overline G$ is disconnected, choose an anticomponent $C$ of $G$ and let $D:=V(G)\setminus C$. Again $C$ and $D$ are nonempty, [L5] makes them complete to one another, and [F2] makes $G[C]$ and $G[D]$ smaller $P_4$-free graphs. By the induction hypothesis they are cographs, so $G$ is their complete connection and hence a cograph. [step 2.1, L5, F2, ih, choose]

4.1 Steps 3.1 and 3.2 close the induction, proving that every $P_4$-free graph is a cograph. Together with step 1.1, this proves the equivalence. [step 1.1, step 3.1, step 3.2, discharge-induction] ∎
