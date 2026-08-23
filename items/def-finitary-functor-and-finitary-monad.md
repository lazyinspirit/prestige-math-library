---
id: def-finitary-functor-and-finitary-monad
kind: definition
title: "Finitary functors and finitary monads"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filtered-category-and-filtered-colimit, def-preservation-reflection-creation-continuity-and-cocontinuity, def-monad]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.5.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A functor is **finitary** when it preserves every small filtered colimit ([[def-filtered-category-and-filtered-colimit]], [[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

A monad $(T,\eta,\mu)$ is **finitary** when its underlying endofunctor $T$ is finitary ([[def-monad]]). No preservation claim is imposed on the unit or multiplication separately.
