---
id: def-locally-cartesian-closed-category
kind: definition
title: "Locally cartesian closed category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cartesian-closed-category, def-slice-category-and-the-pullback-functor]
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
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.6.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Definition

A category $\mathcal C$ is **locally cartesian closed** when, for every object $X$, the slice category $\mathcal C/X$ is cartesian closed in the sense of [[def-cartesian-closed-category]]. The slice categories and their pullback functors are those of [[def-slice-category-and-the-pullback-functor]].
