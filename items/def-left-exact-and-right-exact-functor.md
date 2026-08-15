---
id: def-left-exact-and-right-exact-functor
kind: definition
title: 'Left exact and right exact functors'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, def-preservation-reflection-creation-continuity-and-cocontinuity]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.6.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Definition

A functor is **left exact** when it preserves every finite limit that exists in its source category, and **right exact** when it preserves every finite colimit that exists there. Here finite means indexed by a finite category as in [[def-small-finite-and-large-limits-completeness-and-cocompleteness]], and preservation has the meaning of [[def-preservation-reflection-creation-continuity-and-cocontinuity]]. These terms assert preservation, not existence, of the relevant limits or colimits.
