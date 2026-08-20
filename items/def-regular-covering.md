---
id: def-regular-covering
kind: definition
title: "Regular coverings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-covering-map-and-evenly-covered-neighbourhoods,
       def-deck-transformation-and-deck-group, def-path-connected]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Section 1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

Let $p:E\to B$ be a covering with path-connected total space. It is a **regular covering** when its deck group acts transitively on every fibre: whenever $e,e'\in E$ satisfy $p(e)=p(e')$, there is a deck transformation $\tau$ with $\tau(e)=e'$ ([[def-deck-transformation-and-deck-group]]).

The term **normal covering** is a synonym. Normality of an induced fundamental-group subgroup is not part of this definition; its equivalence with regularity is proved in [[thm-regular-covering-characterizations]].

