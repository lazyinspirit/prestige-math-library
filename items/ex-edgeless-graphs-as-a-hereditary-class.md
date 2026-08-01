---
id: ex-edgeless-graphs-as-a-hereditary-class
kind: example
title: "Edgeless graphs form the hereditary class with forbidden basis $\\{K_2\\}$"
status: published
origin: session
deps: [ex-complete-graphs-as-a-hereditary-class, thm-complementation-preserves-hereditary-classes-and-bases, def-standard-complete-bipartite-path-and-cycle-graphs]
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

The class of finite edgeless graphs is hereditary, and its minimal forbidden induced-subgraph basis is $\{K_2\}$.

## Facts & Assumptions

**Given:** The class $\mathcal E$ of finite edgeless graphs.

[L1] Complete graphs have minimal forbidden basis $\{\overline K_2\}$ ([[ex-complete-graphs-as-a-hereditary-class]]).

[L2] Complementation preserves hereditary classes and complements their minimal forbidden bases ([[thm-complementation-preserves-hereditary-classes-and-bases]]).

[F1] Complements of complete graphs are edgeless, and $\overline{\overline K_2}=K_2$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 The class $\mathcal E$ is the complement class of the complete graphs. [F1]

2.1 Therefore it is hereditary and its basis is obtained by complementing $\overline K_2$. [step 1.1, L1, L2]

3.1 That complement is $K_2$, so the basis is $\{K_2\}$. [step 2.1, F1] ∎
