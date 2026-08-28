---
id: thm-pure-blockades-with-cograph-patterns-have-additive-kappa
kind: theorem
title: "A pure blockade with a cograph pattern has additive kappa"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pattern-graph-of-a-pure-blockade,
       def-cograph-by-singletons-disjoint-union-and-complete-connection,
       lem-induced-subgraphs-of-cographs-are-cographs,
       thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement,
       def-kappa-of-a-graph,
       def-clique-stable-set-and-numbers,
       cor-connected-components-partition-the-vertex-set,
       lem-anticonnected-components-are-complement-components,
       lem-components-are-anticomplete-and-anticomponents-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Theorem 5.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\mathcal B=(B_1,\dots,B_t)$ be a pure blockade in a graph $G$ whose
pattern graph is a cograph. Then

$$
\kappa(G[V(\mathcal B)])\geq \sum_{i=1}^{t}\kappa(G[B_i]).
$$

## Facts & Assumptions

**Given:** A pure blockade $\mathcal B=(B_1,\dots,B_t)$ in a graph $G$, with
pattern graph $P$ a cograph.

[L1] Every induced subgraph of a cograph is a cograph
([[lem-induced-subgraphs-of-cographs-are-cographs]]).

[L2] Every nontrivial cograph is disconnected or has disconnected complement
([[thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement]]).

[L3] Distinct connected components are anticomplete, and distinct
anticomponents are complete
([[lem-components-are-anticomplete-and-anticomponents-complete]]).

[L4] In the pattern graph, two indices are adjacent exactly when the
corresponding two blocks are complete
([[def-pattern-graph-of-a-pure-blockade]]).

[L5] $\kappa(X)=\alpha(X)\omega(X)$ for every induced subgraph $X$
([[def-kappa-of-a-graph]], [[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** induction on the number $t$ of blocks.

1.1 We argue by induction on $t$. If $t=1$, then $V(\mathcal B)=B_1$, so $\kappa(G[V(\mathcal B)])=\kappa(G[B_1]),$ and the claim is immediate. [given, base]

1.2 Assume now that $t>1$ and that the theorem is known for shorter pure blockades with cograph pattern. By [L2], the cograph $P$ is disconnected or its complement is disconnected. Choose either a connected component $I$ of $P$ in the first case, or an anticomponent $I$ of $P$ in the second case, and let $J:=[t]\setminus I$. Then $I$ and $J$ are nonempty. Put $U:=\bigcup_{i\in I}B_i,\qquad W:=\bigcup_{j\in J}B_j,\qquad V:=U\cup W=V(\mathcal B).$ [L2, choose, ih]

2.1 The induced pattern subgraphs $P[I]$ and $P[J]$ are cographs by [L1]. If $I$ is a component, then [L3] and [L4] make $U$ anticomplete to $W$; if $I$ is an anticomponent, then [L3] and [L4] make $U$ complete to $W$. [step 1.2, L1, L3, L4]

3.1 Applying the induction hypothesis to the subblockades indexed by $I$ and $J$ gives $\kappa(G[U])\geq \sum_{i\in I}\kappa(G[B_i]), \qquad \kappa(G[W])\geq \sum_{j\in J}\kappa(G[B_j]).$ [step 1.2, step 2.1, ih]

3.2 If $U$ is anticomplete to $W$, then a stable set in $G[U]$ together with a stable set in $G[W]$ is stable in $G[V]$, while every clique in $G[V]$ lies in one side. Thus $\alpha(G[V])\geq \alpha(G[U])+\alpha(G[W]),\qquad \omega(G[V])\geq \max\{\omega(G[U]),\omega(G[W])\},$ and [L5] yields $\kappa(G[V])\geq \kappa(G[U])+\kappa(G[W])$. If $U$ is complete to $W$, the same reasoning with cliques and stable sets exchanged again gives $\kappa(G[V])\geq \kappa(G[U])+\kappa(G[W])$. [step 2.1, L5]

4.1 Combining steps 3.1 and 3.2 gives $\kappa(G[V(\mathcal B)])=\kappa(G[V])\geq \sum_{i=1}^{t}\kappa(G[B_i]).$ Together with step 1.1, this closes the induction. [step 1.1, step 3.1, step 3.2, discharge-induction] ∎
