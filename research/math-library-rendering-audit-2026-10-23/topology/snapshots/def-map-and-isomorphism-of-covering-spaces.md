---
id: def-map-and-isomorphism-of-covering-spaces
kind: definition
title: "Maps and isomorphisms of covering spaces over a fixed base"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
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

For coverings $p:E\to B$ and $q:F\to B$, a **map of covering spaces over $B$** is a continuous map $h:E\to F$ with $q\circ h=p$. It is an **isomorphism of covering spaces** when $h$ is a homeomorphism; its inverse is then also over $B$ ([[def-homeomorphism-and-open-maps]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

