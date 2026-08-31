---
id: def-dedekind-domain
kind: definition
title: "Dedekind domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-noetherian-ring, def-integral-closure-and-integrally-closed-domain, def-krull-dimension-of-a-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Definition

A **Dedekind domain** is a commutative ring $R$ such that:

1. $R$ is a Noetherian ring ([[def-noetherian-ring]]);
2. $R$ is an integrally closed domain ([[def-integral-closure-and-integrally-closed-domain]]);
3. $R$ has Krull dimension $1$ ([[def-krull-dimension-of-a-ring]]).

Thus this page uses the one-dimensional normal-domain convention, so fields are excluded.
