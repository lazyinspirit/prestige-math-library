---
id: def-elementary-abelian-p-group
kind: definition
title: "Elementary abelian $p$-groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-group, def-order-in-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 2.6"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Definition

An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted ([[def-finite-p-group]], [[def-group]], [[def-order-in-a-group]]).
