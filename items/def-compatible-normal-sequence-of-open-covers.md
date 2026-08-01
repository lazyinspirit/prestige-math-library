---
id: def-compatible-normal-sequence-of-open-covers
kind: definition
title: "Compatible normal sequences of open covers"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-neighbourhood-top]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Umeå University, The Smirnov- and Bing–Nagata–Smirnov Metrization Theorems"
      url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1395113"
pipeline_run: null
---

## Definition

For an open cover $\mathcal U$ and $x\in X$, write $\operatorname{St}(x,\mathcal U)=\operatorname{St}(\{x\},\mathcal U)$, using the star of [[def-cover-refinement-and-local-finiteness]]. A sequence $(\mathcal U_n)_{n\in\mathbb N}$ of open covers is **normal** if $\mathcal U_{n+1}$ star-refines $\mathcal U_n$ for every $n$.

It is **compatible** with the topology if (i) for $x\ne y$ some $n$ has $y\notin\operatorname{St}(x,\mathcal U_n)$, and (ii) for every open neighbourhood $O$ of $x$ ([[def-neighbourhood-top]]) some $n$ has $\operatorname{St}(x,\mathcal U_n)\subseteq O$. The indexing starts at $0$; an empty space has the legal empty cover at every index.
