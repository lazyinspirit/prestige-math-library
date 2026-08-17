---
id: def-maximal-subgroup-of-a-group
kind: definition
title: "Maximal proper subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, The Sylow Theorems, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Definition

A subgroup $M<G$ is **maximal proper** when there is no subgroup $H$ with $M<H<G$. Equivalently, every subgroup containing $M$ is either $M$ or $G$. The word maximal refers to inclusion among proper subgroups, not to cardinality.
