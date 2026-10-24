---
id: def-opposite-ring
kind: definition
title: "The opposite ring $R^{\\mathrm{op}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring]
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

For a unital ring $R$, the **opposite ring** $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring.
