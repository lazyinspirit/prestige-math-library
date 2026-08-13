---
id: def-complex-domain
kind: definition
title: "A complex domain is a nonempty connected open subset of $\\mathbb C$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-metric-topology, def-connected-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §3.1"
      url: "https://complexanalysis.org/web/sec_diff-analytic.html"
pipeline_run: null
---

## Definition

A **complex domain** is a nonempty, connected, open subset $U\subseteq\mathbb C$. Open means open in the modulus metric of [[def-metric-topology]], and connected has the meaning of [[def-connected-space]]. By [[rem-complex-plane-euclidean-dictionary]], these are exactly the usual Euclidean notions for the corresponding subset of $\mathbb R^2$.
