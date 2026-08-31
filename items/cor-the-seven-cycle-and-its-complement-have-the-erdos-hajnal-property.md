---
id: cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property
kind: corollary
title: "The seven-cycle and its complement have the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property,
       lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven,
       prop-erdos-hajnal-property-passes-to-hereditary-subclasses,
       def-h-free-and-family-free-graph]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 1.8"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, sentence after Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

The pair $\{C_7,\overline{C_7}\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The cycle $C_7$.

[L1] The pair $\{P_4^\star,\overline{P_4^\star}\}$ has the Erdős-Hajnal
property
([[cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property]]).

[L2] The star-expansion $P_4^\star$ contains an induced $C_7$
([[lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven]]).

[L3] The Erdős-Hajnal property passes to hereditary subclasses
([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C$ be the class of graphs containing neither $C_7$ nor $\overline{C_7}$ as an induced subgraph. The same containment argument as in the $C_6$ case, now using [L2], shows that every graph in $\mathcal C$ is $\{P_4^\star,\overline{P_4^\star}\}$-free. [L1, L2, given]

2.1 Applying [L3] to the superclass from [L1], we conclude that $\mathcal C$ has the Erdős-Hajnal property. Equivalently, $\{C_7,\overline{C_7}\}$ has the Erdős-Hajnal property. [step 1.1, L3] ∎
