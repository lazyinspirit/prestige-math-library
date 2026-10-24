---
id: def-conjugacy-problem-for-a-finitely-generated-group
kind: definition
title: "The conjugacy problem for a finitely generated group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-word-problem-for-a-fixed-finite-presentation]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
pipeline_run: null
---

## Definition

For a finitely generated group with a fixed finite presentation, the
**conjugacy problem** asks, given two input words $u,v$, whether the elements
they represent are conjugate, that is, whether some group element $g$ satisfies
$gug^{-1}=v$.
