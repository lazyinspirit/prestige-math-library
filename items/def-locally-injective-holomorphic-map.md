---
id: def-locally-injective-holomorphic-map
kind: definition
title: "Locally injective holomorphic maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-differentiability-holomorphic-and-entire, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
forward_refs: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open, let $f:U\to\mathbb C$ be holomorphic ([[def-complex-differentiability-holomorphic-and-entire]]), and let $a\in U$. The map $f$ is **locally injective at $a$** if there is a neighbourhood $V$ of $a$ in $U$ ([[def-neighbourhood-top]]) such that the restriction $f|_V$ is injective ([[def-injection-surjection-bijection]]). It is **locally injective on $U$** if it is locally injective at every point of $U$.

The neighbourhood may always be replaced by a smaller open disc centred at $a$, so this convention agrees with the usual disc formulation.
