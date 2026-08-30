---
id: def-quasi-isomorphism
kind: definition
title: "Quasi-isomorphism"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-a-chain-map-induces-a-well-defined-map-on-homology]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Definition 12.13.4"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

A chain map $f:C_\bullet\to D_\bullet$ is a **quasi-isomorphism** if for every
$n\in\mathbb Z$ the induced map
$$H_n(f):H_n(C)\to H_n(D)$$
is an isomorphism.
