---
id: def-preorder
kind: definition
title: "Preorder and monotone map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A **preorder** on a set $P$ is a relation $\le$ that is reflexive and transitive.
Unlike a partial order ([[def-partial-order]]), it need not be antisymmetric.

A map $f:P\to Q$ between preorders is **monotone** when
$x\le_P y$ implies $f(x)\le_Q f(y)$. Every partial order is a preorder, and the
definition of monotone map agrees with the usual one for partially ordered
sets.

