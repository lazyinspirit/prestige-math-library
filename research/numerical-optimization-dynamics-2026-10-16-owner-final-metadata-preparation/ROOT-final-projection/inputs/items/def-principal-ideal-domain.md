---
id: def-principal-ideal-domain
kind: definition
title: "Principal ideal domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-zero-divisor-and-integral-domain, def-generated-and-principal-ideals]
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

An integral domain $R$ is a **principal ideal domain** (PID) if every ideal
$I\mathrel{\trianglelefteq}R$ is principal: there is an $a\in R$ with $I=(a)$.

The domain hypothesis is part of the term. A ring in which all ideals are
principal but which has zero divisors is not called a PID here.
