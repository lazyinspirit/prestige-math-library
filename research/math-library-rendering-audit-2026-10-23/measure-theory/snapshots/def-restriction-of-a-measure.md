---
id: def-restriction-of-a-measure
kind: definition
title: "Restriction of a measure to a measurable set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure]
justified_by: [prop-restriction-is-a-measure]
aliases: []
landmark: false
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
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 10"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $\mu$ be a measure on $(X,\mathcal A)$ and fix a measurable set $E\in\mathcal A$. The **restriction of $\mu$ to $E$ on the original sigma-algebra** is the set function

$$\mu_E:\mathcal A\to[0,+\infty],\qquad \mu_E(A):=\mu(A\cap E).$$

This is the same-ambient convention: the domain remains $\mathcal A$, rather than becoming the trace sigma-algebra on $E$. The fact that $\mu_E$ is a measure is [[prop-restriction-is-a-measure]].

