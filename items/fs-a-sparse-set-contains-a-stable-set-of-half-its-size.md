---
id: fs-a-sparse-set-contains-a-stable-set-of-half-its-size
kind: false-statement
title: "Every $c$-sparse set of size $m$ contains a stable set of size at least $m/2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set, def-clique-stable-set-and-numbers, cor-connected-components-partition-the-vertex-set, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Every $c$-sparse set of size $m$ contains a stable set of size at least $m/2$.

## Facts & Assumptions

**Given:** An integer $n>8$ divisible by $4$, and a graph $G$ that is the disjoint union of four cliques, each of order $n/4$.

[L1] The whole vertex set of this graph is $(1/4)$-sparse ([[ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set]], [[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] A stable set meets each clique in at most one vertex ([[def-clique-stable-set-and-numbers]], [[cor-connected-components-partition-the-vertex-set]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the whole vertex set of $G$ is a $(1/4)$-sparse set of size $n$. [L1]

1.2 By [L2], every stable set of $G$ has size at most $4$, because there are only four clique components. [L2]

2.1 Since $n>8$, one has $4<n/2$. So the sparse set of step 1.1 contains no stable set of size at least half its order. Therefore the claim is false. [step 1.1, step 1.2, algebra] ∎
