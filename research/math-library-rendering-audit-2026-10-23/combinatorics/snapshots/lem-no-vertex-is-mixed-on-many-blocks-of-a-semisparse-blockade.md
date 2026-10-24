---
id: lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade
kind: lemma
title: "No vertex is mixed on many blocks of a semisparse blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-edges-between-sets-and-pure-mixed-pairs,
       def-directional-and-weak-sparsity-between-vertex-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.1.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exist constants $c>0$ and $d\ge 1$ such that the following holds. Let
$G$ be a sufficiently large $c$-sparse $\overline{P_5}$-free graph, and let
$(B_1,\dots,B_t)$ be a blockade from outcome 2 of
[[lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations]].
Then at least one of the following holds:

1. $G$ has a $c^d$-sparse induced subgraph of linear size; or
2. every vertex outside the blockade is mixed on fewer than $ct$ blocks,
   where a vertex $v$ is mixed on $B_i$ when the pair $(\{v\},B_i)$ is mixed
   in the sense of [[def-edges-between-sets-and-pure-mixed-pairs]].

## Facts & Assumptions

**Given:** A graph $G$ and a blockade $(B_1,\dots,B_t)$ as in the statement.

[L1] Claim 7.1.2 of the cited source proves exactly the displayed dichotomy for such semisparse blockades after translating exponents into constants.

## Proof

**Proof technique:** translate the cited source claim.

1.1 The cited source claim proves exactly this mixed-block dichotomy after translating exponents into constants. [L1, given]

2.1 Therefore one of the two displayed outcomes holds. [step 1.1] ∎
