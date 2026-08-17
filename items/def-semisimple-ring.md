---
id: def-semisimple-ring
kind: definition
title: "A semisimple ring as a ring whose left regular module is semisimple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-semisimple-module, def-left-and-right-modules]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Definition

A unital ring $R$ is **semisimple** when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings.
