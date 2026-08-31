---
id: thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property
kind: theorem
title: "A forest complement and its star-expansion have the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-star-expansion-of-a-graph,
       thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property,
       thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex,
       prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical,
       cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree,
       thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 7.2"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $F$ be a forest, and let $F^\star$ be its star-expansion. Then the pair
$\{\overline F,F^\star\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A forest $F$.

[L1] Theorem 7.2 of the cited primary source proves exactly that
$\{\overline F,F^\star\}$ has the Erdős-Hajnal property for every forest $F$.

## Proof

**Proof technique:** direct translation of the cited primary-source theorem.

1.1 The cited primary-source theorem treats the complement-side low-degree case separately, using the forest-free sparse-pair theorem, and treats the graph-side case with the quantitative comb construction. [L1, given]

2.1 Its two cases exclude a critical counterexample and yield exactly the Erdős-Hajnal property for $\{\overline F,F^\star\}$. [step 1.1, L1] ∎
