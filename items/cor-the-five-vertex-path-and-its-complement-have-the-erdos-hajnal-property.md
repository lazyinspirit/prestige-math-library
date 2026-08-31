---
id: cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property
kind: corollary
title: "The five-vertex path and its complement have the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-five-vertex-path-has-the-polynomial-rodl-property,
       cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 1.2"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Both $P_5$ and $\overline{P_5}$ have the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The graph $P_5$.

[L1] The graph $P_5$ has the polynomial Rödl property
([[thm-the-five-vertex-path-has-the-polynomial-rodl-property]]).

[L2] Every finite family with the polynomial Rödl property has the
Erdős-Hajnal property
([[cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family]]).

[F1] The polynomial Rödl property and the Erdős-Hajnal property are both
invariant under complementation of the forbidden graph.

## Proof

**Proof technique:** direct.

1.1 Applying [L2] to the singleton family $\{P_5\}$ and using [L1], we conclude that $P_5$ has the Erdős-Hajnal property. [L1, L2]

2.1 By [F1], the same holds for $\overline{P_5}$. [step 1.1]

3.1 Therefore both $P_5$ and $\overline{P_5}$ have the Erdős-Hajnal property. [step 1.1, step 2.1] ∎
