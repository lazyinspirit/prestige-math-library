---
id: cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property
kind: corollary
title: "The six-cycle and its complement have the Erdős-Hajnal property"
status: draft
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 1.7"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, sentence after Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

The pair $\{C_6,\overline{C_6}\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The cycle $C_6$.

[L1] The pair $\{P_4^\star,\overline{P_4^\star}\}$ has the Erdős-Hajnal
property
([[cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property]]).

[L2] The star-expansion $P_4^\star$ contains an induced $C_6$
([[lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven]]).

[L3] The Erdős-Hajnal property passes to hereditary subclasses
([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C$ be the class of graphs containing neither $C_6$ nor $\overline{C_6}$ as an induced subgraph. If $G\in\mathcal C$ contained $P_4^\star$, then [L2] would force an induced $C_6$ in $G$; similarly, if $G$ contained $\overline{P_4^\star}$, then $\overline G$ would contain $P_4^\star$ and hence $G$ would contain $\overline{C_6}$. Thus every graph in $\mathcal C$ is also $\{P_4^\star,\overline{P_4^\star}\}$-free. [L1, L2, given]

2.1 Therefore $\mathcal C$ is a hereditary subclass of the class from [L1], so [L3] implies that $\mathcal C$ has the Erdős-Hajnal property. This is exactly the statement that $\{C_6,\overline{C_6}\}$ has the Erdős-Hajnal property. [step 1.1, L3] ∎
