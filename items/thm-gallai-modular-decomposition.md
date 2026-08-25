---
id: thm-gallai-modular-decomposition
kind: theorem
title: "Gallai's modular decomposition theorem: a graph on at least two vertices is disconnected, or has a disconnected complement, or has a modular partition into its maximal proper modules whose quotient is prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-every-vertex-lies-in-a-unique-maximal-proper-module, lem-unions-of-components-and-of-anticomponents-are-modules, thm-every-nontrivial-graph-is-connected-or-anticonnected, def-modular-partition-and-quotient-graph, lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is, def-prime-graph, def-module-of-a-graph, def-anticonnected-graph-and-anticonnected-component, cor-connected-components-partition-the-vertex-set, lem-anticonnected-components-are-complement-components, lem-components-are-anticomplete-and-anticomponents-complete, def-connected-graph-and-connected-component]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 4"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph with $|V(G)|\ge2$. Then exactly one of the
following holds.

1. $G$ is disconnected. The vertex sets of its connected components form a
   modular partition of $G$, and the quotient by that partition has no edge.
2. $\overline G$ is disconnected. The anticomponents of $G$ form a modular
   partition of $G$, and the quotient by that partition has every pair of
   distinct vertices as an edge.
3. $G$ and $\overline G$ are both connected. The maximal proper modules $M(v)$,
   $v\in V(G)$, form a modular partition of $G$ with at least two parts, and
   the quotient by that partition is prime.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with $|V(G)|\ge2$.

[L1] In a connected and anticonnected graph with at least two vertices, each vertex $v$ lies in a largest proper module $M(v)$, any two of these are equal or disjoint, and they cover $V(G)$ ([[lem-every-vertex-lies-in-a-unique-maximal-proper-module]]).

[L2] Every union of vertex sets of connected components is a module, with every outside vertex anticomplete to it, and every union of anticomponents is a module, with every outside vertex complete to it ([[lem-unions-of-components-and-of-anticomponents-are-modules]]).

[L3] Every finite graph with at least two vertices is connected or anticonnected ([[thm-every-nontrivial-graph-is-connected-or-anticonnected]], [[def-anticonnected-graph-and-anticonnected-component]]).

[F1] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient $G/\mathcal P$ has vertex set $\mathcal P$, with distinct parts $M,N$ adjacent exactly when $(M,N)$ is a complete pair in $G$ ([[def-modular-partition-and-quotient-graph]]).

[L4] For a modular partition $\mathcal P$ and $\mathcal X\subseteq\mathcal P$, the set $\mathcal X$ is a module of $G/\mathcal P$ if and only if $\bigcup_{M\in\mathcal X}M$ is a module of $G$ ([[lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is]]).

[F2] $G$ is prime when every module of $G$ is trivial, the trivial modules being $\varnothing$, the singletons and the whole vertex set ([[def-prime-graph]], [[def-module-of-a-graph]]).

[L5] The vertex sets of the connected components are nonempty, cover $V(G)$, and any two are equal or disjoint; a graph is disconnected when it has a vertex and two of its vertices are joined by no path, and then it has at least two components ([[cor-connected-components-partition-the-vertex-set]], [[def-connected-graph-and-connected-component]]).

[L6] The anticomponents of $G$ are exactly the vertex sets of the connected components of $\overline G$, and they partition $V(G)$ ([[lem-anticonnected-components-are-complement-components]]).

[L7] Distinct connected components are anticomplete to one another, and distinct anticomponents are complete to one another ([[lem-components-are-anticomplete-and-anticomponents-complete]]).

## Proof

**Proof technique:** cases.

1.1 By [L3] the graph is connected or anticonnected, so it is not the case that both $G$ and $\overline G$ are disconnected; the three listed situations are therefore mutually exclusive, and they are exhaustive because $G$ is disconnected, or $\overline G$ is disconnected, or both are connected. [L3]

1.2 First case: $G$ is disconnected. By [L5] the vertex sets of its components are nonempty, pairwise disjoint and cover $V(G)$, and by [L2] each is a module, so they form a modular partition $\mathcal P$. [assume-case disc, L2, L5, F1]

1.3 Second case: $\overline G$ is disconnected, that is, $G$ is not anticonnected. By [L6] the anticomponents are nonempty, pairwise disjoint and cover $V(G)$, and by [L2] each is a module, so they form a modular partition $\mathcal Q$. [assume-case codisc, L2, L6, F1]

1.4 Third case: $G$ and $\overline G$ are both connected, so $G$ is connected and anticonnected. By [L1] the sets $M(v)$ are proper modules, pairwise equal or disjoint, and cover $V(G)$; they are nonempty since $v\in M(v)$, so the distinct ones form a modular partition $\mathcal R$. [assume-case both, L1, F1]

2.1 In the first case, distinct components are anticomplete to one another by [L7], so no pair of distinct parts of $\mathcal P$ is complete and the quotient $G/\mathcal P$ has no edge. [step 1.2, L7, F1]

2.2 In the second case, distinct anticomponents are complete to one another by [L7], so every pair of distinct parts of $\mathcal Q$ is complete and every pair of distinct vertices of $G/\mathcal Q$ is an edge. [step 1.3, L7, F1]

2.3 In the third case $\mathcal R$ has at least two parts: a single part would be $M(v)=V(G)$ for some $v$, contradicting that $M(v)$ is proper. [step 1.4, L1, F1]

3.1 Still in the third case, let $\mathcal X$ be a module of $G/\mathcal R$ that is neither $\varnothing$ nor $\mathcal R$, and put $U=\bigcup_{M\in\mathcal X}M$. By [L4] the set $U$ is a module of $G$, and $U\ne V(G)$ because some part outside $\mathcal X$ is nonempty and disjoint from $U$, so $U$ is a proper module. [step 1.4, step 2.3, L4, F1]

4.1 Choose $M\in\mathcal X$, possible because $\mathcal X\ne\varnothing$, and $x\in M$, possible because parts are nonempty. Then $M=M(u)$ for some $u$, and $M(x)$ meets $M(u)$ at $x$, so $M(x)=M$ by [L1]; the set $U$ is a proper module containing $x$, so maximality gives $U\subseteq M(x)=M$. Every $M'\in\mathcal X$ therefore satisfies $M'\subseteq M$, and a part distinct from $M$ is disjoint from $M$ and nonempty, so no such part lies in $\mathcal X$: that is, $\mathcal X=\{M\}$. [step 3.1, L1, F1, choose]

5.1 So in the third case every module of $G/\mathcal R$ is $\varnothing$, a singleton or all of $\mathcal R$, that is, $G/\mathcal R$ is prime; with steps 1.1, 2.1, 2.2 and 2.3 this proves all three clauses and their mutual exclusion. [step 1.1, step 2.1, step 2.2, step 2.3, step 4.1, F2, cases-exhaustive] ∎
