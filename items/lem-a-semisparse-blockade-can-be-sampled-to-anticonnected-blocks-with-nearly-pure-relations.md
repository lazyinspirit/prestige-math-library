---
id: lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations
kind: lemma
title: "A semisparse blockade can be sampled to anticonnected blocks with nearly pure relations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-five-vertex-path-is-nice,
       lem-small-anticonnected-components-yield-a-complete-blockade,
       def-anticonnected-graph-and-anticonnected-component,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-blockade-length-and-width]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.1.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exist constants $c>0$ and $d\ge 1$ such that every sufficiently large
sparse $\overline{P_5}$-free graph has at least one of the following:

1. a complete blockade of linear width; or
2. a blockade $(B_1,\dots,B_t)$ with $t\ge c^{-1}$, every block of size at
   least $c|V(G)|$, each $B_i$ anticonnected, and every pair $(B_i,B_j)$ with
   $i\ne j$ either complete or weakly $c$-sparse.

## Facts & Assumptions

**Given:** A sufficiently large sparse $\overline{P_5}$-free graph $G$.

[L1] Claim 7.1.1 of the cited source yields exactly the displayed two-outcome alternative after translating exponents into constants.

## Proof

**Proof technique:** translate the cited source claim.

1.1 The cited source claim yields exactly this semisparse-blockade or complete-blockade alternative after translating exponents into constants. [L1, given]

2.1 Therefore one of the two displayed outcomes holds. [step 1.1] ∎
