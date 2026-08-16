---
id: def-lift-of-a-map-path-and-homotopy
kind: definition
title: "Lifts of maps, paths, and homotopies through a covering map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-homotopy-relative-and-path-homotopy, def-path-connected]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
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

Let $p:E\to B$ be a covering and $f:Y\to B$ continuous. A **lift** of $f$ through $p$ is a continuous map $\widetilde f:Y\to E$ with $p\circ\widetilde f=f$. This includes lifts of paths $I\to B$ and of homotopies $Y\times I\to B$; an initial lift prescribes the restriction at time $0$ ([[def-homotopy-relative-and-path-homotopy]], [[def-path-connected]]).

