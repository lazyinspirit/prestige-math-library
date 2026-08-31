---
id: thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property
kind: theorem
title: "The star-expansion four-family of a forest has the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-star-expansion-of-a-graph,
       def-blockade-rainbow-induced-copy,
       thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest,
       thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb,
       thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades,
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorems 6.1 and 6.8"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $F$ be a forest. Let $F^\star$ be the star-expansion of $F$, and let
$(\overline F)^\star$ be the star-expansion of $\overline F$. Then the finite
family

$$\{F^\star,\ (\overline F)^\star,\ \overline{F^\star},\ \overline{(\overline F)^\star}\}$$

has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A forest $F$.

[L1] Theorems 6.1 and 6.8 of the cited primary source prove exactly the
displayed four-family result, with the critical exponent chosen after all
blockade-length and width parameters.

## Proof

**Proof technique:** direct translation of the cited primary-source theorems.

1.1 The cited proof chooses the forest/blockade constants first and then chooses the critical exponent so the cograph-pattern blockade has the exact width required by the criticality theorem. [L1, given]

2.1 The alternative rainbow outcome supplies one of the four forbidden star-expansion graphs, while the quantitatively wide cograph outcome contradicts criticality. The source therefore proves exactly the stated four-family Erdős-Hajnal property. [step 1.1, L1] ∎
