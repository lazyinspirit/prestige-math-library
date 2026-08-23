---
id: def-regular-outer-measure-and-measurable-hull
kind: definition
title: "Measurable hulls and regular outer measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-outer-measure, def-caratheodory-measurable-set]
justified_by: []
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
    - title: "G. Folland, Real Analysis, 2nd ed., Exercises 18 and 20 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $\mu^*$ be an outer measure on $X$. A **measurable hull** of $E$ is a Carathéodory measurable set $H\supseteq E$ with $\mu^*(H)=\mu^*(E)$; the outer measure is **regular** when every subset has a measurable hull.

This use of regularity concerns measurable supersets of arbitrary subsets. It is distinct from inner and outer regularity of a measure with respect to compact and open sets.
