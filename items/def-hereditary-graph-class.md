---
id: def-hereditary-graph-class
kind: definition
title: "Hereditary graph classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-induced-embedding-and-induced-copy, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Definition

A class $\mathcal C$ of finite simple graphs is a **hereditary graph class** when:

1. it is closed under isomorphism; and
2. whenever $G\in\mathcal C$ and $H$ has an induced embedding into $G$, one has $H\in\mathcal C$.

The second clause is closure under taking induced subgraphs ([[def-induced-embedding-and-induced-copy]]). Isomorphism closure makes membership depend only on graph structure, not on the chosen vertex labels ([[def-graph-isomorphism-and-complement]]).
