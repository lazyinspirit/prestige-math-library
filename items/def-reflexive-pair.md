---
id: def-reflexive-pair
kind: definition
title: "Reflexive parallel pairs and reflexive coequalizers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equalizers-and-coequalizers]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.5.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A parallel pair $f,g:A\rightrightarrows B$ is **reflexive** when it has a common section: there is a morphism $r:B\to A$ such that

$$fr=gr=1_B.$$

A **reflexive coequalizer** is a coequalizer ([[def-equalizers-and-coequalizers]]) of a reflexive parallel pair.
