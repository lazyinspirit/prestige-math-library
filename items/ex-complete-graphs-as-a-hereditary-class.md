---
id: ex-complete-graphs-as-a-hereditary-class
kind: example
title: "Complete graphs form the hereditary class with forbidden basis $\\{\\overline K_2\\}$"
status: published
origin: session
deps: [def-hereditary-graph-class, def-minimal-forbidden-induced-subgraph, thm-hereditary-classes-have-a-unique-minimal-forbidden-basis, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

## Statement

The class of finite complete graphs is hereditary, and its minimal forbidden induced-subgraph basis is $\{\overline K_2\}$.

## Facts & Assumptions

**Given:** The class $\mathcal K$ of finite complete graphs.

[F1] Every induced subgraph of a complete graph is complete ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A graph is not complete exactly when it has two nonadjacent vertices.

[F3] A minimal forbidden graph is outside the class while all proper induced subgraphs are inside ([[def-minimal-forbidden-induced-subgraph]]).

[L1] A hereditary class is determined by its unique minimal forbidden basis ([[thm-hereditary-classes-have-a-unique-minimal-forbidden-basis]]).

[F4] Heredity means closure under isomorphism and induced subgraphs ([[def-hereditary-graph-class]]).

## Verification

**Proof technique:** direct.

1.1 The class $\mathcal K$ is isomorphism-closed and closed under induced subgraphs, so it is hereditary. [F1, F4]

1.2 The graph $\overline K_2$ is not complete, while each of its proper induced subgraphs is $K_0$ or $K_1$ and is complete. Thus it is minimally forbidden. [F3]

1.3 Every noncomplete graph has two nonadjacent vertices, and they induce $\overline K_2$. Hence avoiding $\overline K_2$ is equivalent to being complete. [F2]

2.1 Therefore $\{\overline K_2\}$ is the unique minimal forbidden basis of $\mathcal K$. [step 1.1, step 1.2, step 1.3, L1] ∎
