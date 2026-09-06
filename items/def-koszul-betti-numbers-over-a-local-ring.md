---
id: def-koszul-betti-numbers-over-a-local-ring
kind: definition
title: "Koszul Betti Numbers Over A Local Ring"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-minimal-free-resolution-over-a-local-ring, def-exterior-algebra-of-a-finite-free-module]
verification:
  audited: 2026-09-06
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

When a Koszul resolution of $N$ over a local ring is minimal, define its $i$th Koszul Betti number by $\beta_i^K(N)=\operatorname{rank}_R K_i$.


