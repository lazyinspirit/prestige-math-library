---
id: def-divisibility-and-associates-in-a-domain
kind: definition
title: "Divisibility and associates in an integral domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-zero-divisor-and-integral-domain, def-invertible-element]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

Let $R$ be an integral domain. For $a,b\in R$, say that **$a$ divides $b$**,
written $a\mid b$, if $b=ac$ for some $c\in R$.

Elements $a,b\in R$ are **associates** if $a=ub$ for a unit $u\in R^\times$.
Thus associates differ only by multiplication by an invertible factor. This
relation is used to state uniqueness of factorisations without artificially
choosing representatives of unit classes.
