---
id: def-ancestral-moral-graph-of-a-dag
kind: definition
title: "The ancestral moral graph of a DAG"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps: [def-d-separation-in-a-dag]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, p. 672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1, pp. 78–79"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

For $S\subseteq V$, its **ancestral set** is
$$\operatorname{An}_G(S):=\{v\in V:\text{there is a directed path from }v\text{ to some }s\in S\},$$
where paths of length zero are allowed, so $S\subseteq\operatorname{An}_G(S)$.
The induced directed subgraph on this set keeps exactly the arrows of $G$
whose two endpoints lie in $\operatorname{An}_G(S)$. Its **moral graph** is
the undirected simple graph obtained by replacing every arrow by an
undirected edge and joining every distinct pair of parents of a common child
by an undirected edge; loops and duplicate edges are discarded. This
undirected graph is the **ancestral moral graph** on $S$ and is denoted
$\operatorname{mor}_G(S)$.
