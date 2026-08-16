---
id: def-idempotent-monad
kind: definition
title: "Idempotent monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.iii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A monad $(T,\eta,\mu)$ is **idempotent** when its multiplication $\mu:T^2\Rightarrow T$ is a natural isomorphism.
