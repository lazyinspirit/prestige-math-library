---
id: def-locally-ringed-space
kind: definition
title: "A locally ringed space"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-ring, def-ringed-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 26.2.1"
      url: "https://stacks.math.columbia.edu/tag/01HA"
    - title: "Ravi Vakil, The Rising Sea, Section 6.3.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

A **locally ringed space** is a ringed space $(X,\mathcal O_X)$ such that every
stalk $\mathcal O_{X,x}$ is a local ring in the sense of [[def-local-ring]].
