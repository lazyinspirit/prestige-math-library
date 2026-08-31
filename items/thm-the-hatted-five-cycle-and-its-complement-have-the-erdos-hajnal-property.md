---
id: thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property
kind: theorem
title: "The hatted five-cycle and its complement have the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components,
       lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle,
       thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb,
       thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades,
       prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical,
       cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree,
       thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 8.1"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, sentence after Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\widehat{C_5}$ be the graph obtained from a five-cycle by adding one
vertex adjacent to two adjacent cycle vertices. Then the pair
$\{\widehat{C_5},\overline{\widehat{C_5}}\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The graph $\widehat{C_5}$.

[L1] Theorem 8.1 of the cited primary source proves exactly the Erdős-Hajnal
property for $\{\widehat{C_5},\overline{\widehat{C_5}}\}$, including the
quantitative component-width and stable-pattern estimates.

## Proof

**Proof technique:** direct translation of the cited primary-source theorem.

1.1 The cited primary-source theorem constructs connected comb components of width at least $\gamma|V(G)|/t^3$, proves their pattern triangle-free, and extracts a stable pattern set of size at least $t^{1/2}/2$. [L1, given]

2.1 The source chooses the critical exponent so those exact length and width bounds contradict criticality, thereby proving the stated Erdős-Hajnal property. [step 1.1, L1] ∎
