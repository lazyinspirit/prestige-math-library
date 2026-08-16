---
id: def-pullback-covering-space
kind: definition
title: "The pullback of a covering space along a continuous map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-product-topology, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
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

For a covering $p:E\to B$ and a continuous map $f:X\to B$, define $f^*E:=\{(x,e)\in X\times E:f(x)=p(e)\}$ with the subspace topology, and let $f^*p:f^*E\to X$ be $(x,e)\mapsto x$ ([[def-product-topology]], [[def-subspace-topology-top]]). This is the **pullback covering space**; its covering property is proved in [[prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback]].

