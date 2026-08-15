---
id: rem-rapl-carries-no-size-hypothesis
kind: remark
title: 'The direct preservation theorem carries no size hypothesis'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-right-adjoints-preserve-limits]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

The proof of [[thm-right-adjoints-preserve-limits]] transposes individual cone legs by explicit unit and counit formulas. It neither collects a hom-class into a set nor forms a Set-valued representable functor. Consequently its statement applies to every legitimate diagram whose limit exists, without assuming local smallness of the categories or smallness of the indexing category. The separate representable proof needs both hypotheses because its chain of hom-set isomorphisms is Set-valued.
