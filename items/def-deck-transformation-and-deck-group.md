---
id: def-deck-transformation-and-deck-group
kind: definition
title: "Deck transformations and the deck-transformation group of a covering"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-map-and-isomorphism-of-covering-spaces, def-group, def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Definition

For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ ([[def-map-and-isomorphism-of-covering-spaces]]). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation ([[def-group]], [[def-group-action]]).

