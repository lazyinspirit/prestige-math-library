---
id: def-local-ring
kind: definition
title: 'A local ring is a nonzero commutative ring with a unique maximal ideal'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-prime-and-maximal-ideals, lem-ring-units-form-a-group, thm-quotient-is-field-iff-ideal-maximal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Definition

A **local ring** is a nonzero commutative ring $R$ with exactly one maximal ideal. That ideal is usually denoted $\mathfrak m_R$ or simply $\mathfrak m$. The quotient $R/\mathfrak m$, which is a field, is the **residue field** of the local ring.
