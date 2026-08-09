---
id: def-countably-based-uniformity
kind: definition
title: "A uniformity with a countable entourage base"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-filter-base, def-countable]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Definition

A uniformity is **countably based** if it has an at most countable filter base of entourages ([[def-filter-base]], [[def-countable]]): every entourage contains a member of that base.
