---
id: def-scheme
kind: definition
title: "Schemes"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-locally-ringed-space, def-affine-scheme]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Definition 9.1"
      url: "https://stacks.math.columbia.edu/tag/01IO"
---
## Definition

A **scheme** is a locally ringed space $(X,\mathcal O_X)$ such that every
point has an open neighbourhood which, with the restricted structure sheaf, is
an affine scheme. The empty locally ringed space is consequently a scheme.
