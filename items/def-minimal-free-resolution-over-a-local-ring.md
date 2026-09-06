---
id: def-minimal-free-resolution-over-a-local-ring
kind: definition
title: "Minimal Free Resolution Over A Local Ring"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-ring, def-chain-complex-in-an-abelian-category, def-free-module-on-a-set-and-standard-basis, def-generated-cyclic-finitely-generated-and-free-modules]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Definition

A finite free resolution $F_\bullet\to N$ over local $(R,\mathfrak m)$ is minimal when $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for every $i>0$.


