---
id: def-generator-and-cogenerator-of-a-category
kind: definition
title: "Generator and cogenerator of a category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-separating-set-and-coseparating-set]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.9"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Tag 079B"
      url: "https://stacks.math.columbia.edu/tag/079B"
pipeline_run: frontier-22
---

## Definition

An object $G$ of a category $\mathcal C$ is a **generator** when the singleton
set $\{G\}$ is separating in the sense of
[[def-separating-set-and-coseparating-set]].

Dually, an object $Q$ is a **cogenerator** when $\{Q\}$ is coseparating.
