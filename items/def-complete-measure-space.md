---
id: def-complete-measure-space
kind: definition
title: "Complete measure spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-null-set-and-almost-everywhere]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

A measure space $(X,\mathcal A,\mu)$ is **complete** if every subset of every measurable $\mu$-null set is measurable: whenever $N\in\mathcal A$, $\mu(N)=0$, and $S\subseteq N$, one has $S\in\mathcal A$ ([[def-measure-null-set-and-almost-everywhere]]).
