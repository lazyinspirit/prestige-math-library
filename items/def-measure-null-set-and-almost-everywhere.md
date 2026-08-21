---
id: def-measure-null-set-and-almost-everywhere
kind: definition
title: "Measure-null sets and almost-everywhere statements relative to a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

In a measure space $(X,\mathcal A,\mu)$ ([[def-measure-space]]), a measurable set $N\in\mathcal A$ is **$\mu$-null** if $\mu(N)=0$.

A property $P(x)$ holds **$\mu$-almost everywhere**, or **for $\mu$-almost every $x$**, if its exceptional set is contained in a measurable $\mu$-null set: there is $N\in\mathcal A$ with $\mu(N)=0$ such that $P(x)$ holds for every $x\in X\setminus N$. Both notions are relative to the named measure $\mu$.

