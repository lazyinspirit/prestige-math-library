---
id: def-absolute-colimit
kind: definition
title: "Absolute colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram, def-preservation-reflection-creation-continuity-and-cocontinuity]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 3.4.vi(iii) and Lemma 5.4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A colimit of a diagram in a category $\mathcal C$ is **absolute** when every functor with domain $\mathcal C$ preserves that colimit ([[def-limit-and-colimit-of-a-diagram]], [[def-preservation-reflection-creation-continuity-and-cocontinuity]]). Equivalently, a colimit is absolute when every functor preserves it.
