---
id: def-dominating-set-in-a-graph
kind: definition
title: "Dominating sets in a finite graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 6.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a finite graph. A set $D\subseteq V$ is a **dominating set** when every vertex in $V\setminus D$ has a neighbour in $D$. The **domination number** $\gamma(G)$ is the minimum cardinality of a dominating set. The full vertex set is always dominating, so the minimum exists.
