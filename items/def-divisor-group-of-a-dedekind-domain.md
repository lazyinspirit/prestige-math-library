---
id: def-divisor-group-of-a-dedekind-domain
kind: definition
title: "The divisor group of a Dedekind domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dedekind-domain]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a Dedekind domain. Its **divisor group** $\operatorname{Div}(R)$ is
the free abelian group on the nonzero prime ideals of $R$. Equivalently, it is
the group of finitely supported sums
$$
\sum_{\mathfrak p}n_{\mathfrak p}[\mathfrak p],\qquad n_{\mathfrak p}\in\mathbb Z.
$$
