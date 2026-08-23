---
id: def-solid-between-continuous-graphs-over-a-jordan-base
kind: definition
title: 'A solid between continuous graphs over a compact Jordan base'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-riemann-integral-over-a-jordan-set, def-metric-compactness, def-metric-continuity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Definition

For a compact Jordan set $D\subseteq\mathbb R^m$ and continuous functions $\alpha,\beta:D\to\mathbb R$ with $\alpha\le\beta$, the solid between their graphs is $K=\{(u,t):u\in D,\ \alpha(u)\le t\le\beta(u)\}$.

The weak inequality is part of the definition. Thus a vertical section may be a singleton, and if $D$ is empty then $K$ is empty. Every point of $K$ is specified by the displayed conditions, so the construction requires no choice of representatives.
