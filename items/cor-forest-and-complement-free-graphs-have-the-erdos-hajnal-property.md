---
id: cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property
kind: corollary
title: "For every forest $H$, graphs excluding $H$ and $\\overline{H}$ have the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property, thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property, lem-forbidden-induced-subgraph-classes-are-hereditary]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, statement 1.3"
      url: "https://arxiv.org/pdf/1809.00919"
pipeline_run: null
---

## Statement

For every forest $H$, every finite graph with no induced $H$ and no induced
$\overline{H}$ has a clique or a stable set of size at least a positive power
of its order. Equivalently, the hereditary class forbidding $H$ and
$\overline{H}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A forest $H$.

[L1] The class of graphs with no induced $H$ and no induced $\overline H$ has the strong Erdős-Hajnal property ([[thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property]]).

[L2] Every class defined by forbidden induced subgraphs is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L3] Every hereditary class with the strong Erdős-Hajnal property has the Erdős-Hajnal property ([[thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C_H$ be the class of finite graphs with no induced $H$ and no induced $\overline H$. By [L2], this is a hereditary class, and by [L1] it has the strong Erdős-Hajnal property. [L1, L2]

2.1 Applying [L3] to $\mathcal C_H$ gives the Erdős-Hajnal property for that class. This is the claimed graph-level statement. [step 1.1, L3] ∎
