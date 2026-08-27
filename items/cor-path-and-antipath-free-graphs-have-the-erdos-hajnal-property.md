---
id: cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property
kind: corollary
title: "For every $k$, the class forbidding $P_k$ and $\\overline{P_k}$ has the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property, thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé, The Erdős-Hajnal Conjecture for Paths and Antipaths, Theorem 4"
      url: "https://arxiv.org/html/1303.5205v3"
pipeline_run: null
---

## Statement

For every integer $k\ge 2$, every finite graph with no induced $P_k$ and no
induced $\overline{P_k}$ has a clique or stable set of size at least a positive
power of its order. Equivalently, the class forbidding $P_k$ and
$\overline{P_k}$ has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** An integer $k\ge 2$.

[L1] For this $k$, the class forbidding $P_k$ and $\overline{P_k}$ has the strong Erdős–Hajnal property ([[thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property]]).

[L2] Every hereditary class with the strong Erdős–Hajnal property has the Erdős–Hajnal property ([[thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property]]).

## Proof

**Proof technique:** direct.

1.1 The previous theorem gives the strong Erdős–Hajnal property for the hereditary class of graphs forbidding $P_k$ and $\overline{P_k}$. [L1]

2.1 Applying [L2] to that class yields the Erdős–Hajnal property. [step 1.1, L2] ∎
