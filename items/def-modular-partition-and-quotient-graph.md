---
id: def-modular-partition-and-quotient-graph
kind: definition
title: "Modular partitions and the quotient graph they define"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-of-a-graph, lem-disjoint-modules-are-a-pure-pair, def-finite-simple-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-edges-between-sets-and-pure-mixed-pairs, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph ([[def-finite-simple-graph]]). A **modular
partition** of $G$ is a set $\mathcal P$ of nonempty modules of $G$
([[def-module-of-a-graph]]) that are pairwise disjoint and whose union is
$V(G)$. Its members are its **parts**. Since the parts are nonempty and
pairwise disjoint subsets of the finite set $V(G)$, there are finitely many of
them ([[def-finite-cardinality]]).

The **quotient graph** $G/\mathcal P$ has vertex set $\mathcal P$, and for
distinct parts $M,N\in\mathcal P$,

$$\{M,N\}\in E(G/\mathcal P)\quad:\Longleftrightarrow\quad(M,N)\text{ is a complete pair in }G$$

([[def-edges-between-sets-and-pure-mixed-pairs]]).

**Why this is a definition and not a wish.** Two distinct parts are disjoint
nonempty modules, so the pair they form is complete or anticomplete and not
both ([[lem-disjoint-modules-are-a-pure-pair]]). The displayed condition is
therefore a genuine dichotomy: for each unordered pair of distinct parts exactly
one of "complete" and "anticomplete" holds, and $E(G/\mathcal P)$ is a
well-defined set of two-element subsets of $\mathcal P$. Hence $G/\mathcal P$ is
a finite simple graph.

The partition of $V(G)$ into singletons is modular, and its quotient is $G$
itself up to the renaming $v\mapsto\{v\}$; when $V(G)\ne\varnothing$ the
partition $\{V(G)\}$ is modular too, and its quotient is the one-vertex graph.
The induced subgraphs $G[M]$ on the parts
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]) carry the information
the quotient discards.
