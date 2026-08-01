---
id: fs-every-hereditary-class-has-a-finite-forbidden-basis
kind: false-statement
title: "Every hereditary graph class has a finite forbidden induced-subgraph basis"
status: published
origin: session
deps: [thm-hereditary-classes-have-a-unique-minimal-forbidden-basis, def-bipartite-graph, thm-bipartite-iff-no-odd-cycle, def-standard-complete-bipartite-path-and-cycle-graphs, def-minimal-forbidden-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## False Statement

Every hereditary graph class has a finite minimal forbidden induced-subgraph basis.

## Facts & Assumptions

**Given:** The hereditary class $\mathcal B$ of finite bipartite graphs.

[L1] A graph is bipartite if and only if it contains no odd cycle ([[def-bipartite-graph]], [[thm-bipartite-iff-no-odd-cycle]]).

[F1] For every $k\ge1$, $C_{2k+1}$ is an odd cycle, and distinct lengths give nonisomorphic graphs ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A minimal forbidden induced subgraph is outside the class while all proper induced subgraphs are inside ([[def-minimal-forbidden-induced-subgraph]]).

[L2] The family of all such minimal graphs is the unique minimal basis ([[thm-hereditary-classes-have-a-unique-minimal-forbidden-basis]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the minimal forbidden basis of $\mathcal B$ is finite. [assume-contra]

1.2 For every $k\ge1$, the graph $C_{2k+1}$ is not bipartite. Every proper induced subgraph of this chordless cycle is a disjoint union of paths, hence is bipartite. Thus $C_{2k+1}$ is minimally forbidden. [L1, F1, F2]

2.1 The minimal basis therefore contains the pairwise nonisomorphic graphs $C_3,C_5,C_7,\ldots$. [step 1.2, L2]

3.1 This is an infinite family, contradicting step 1.1. Hence a hereditary class need not have a finite minimal forbidden basis. [step 1.1, step 2.1, discharge-contradiction] ∎
