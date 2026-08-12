---
id: def-field-of-fractions
kind: definition
title: 'The field of fractions $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ of an integral domain'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multiplicative-subset-and-localisation, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: [fraction field]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Definition

If $D$ is an integral domain, then $D\setminus\{0\}$ is multiplicative. Its localisation
$$ \operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D $$
is the **field of fractions** of $D$. Thus its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$, modulo the localisation equivalence relation.
