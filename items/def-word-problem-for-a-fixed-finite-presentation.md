---
id: def-word-problem-for-a-fixed-finite-presentation
kind: definition
title: "The word problem for a fixed finite presentation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-recursive-and-finite-group-presentations]
justified_by: []
aliases: []
landmark: true
verification:
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

Fix a finite presentation $\mathcal P=\langle X\mid R\rangle$. Its
**word problem** is the decision problem whose input is a word $w$ on
$X\sqcup X^{-1}$ and whose question is whether $w$ represents the identity in
the group presented by $\mathcal P$.
