---
id: def-uniformizable-space
kind: definition
title: "Uniformizable and separated-uniformizable topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-uniformity-induces-a-topology, def-separated-uniform-space, def-topological-space]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Definition

A topological space is **uniformizable** if its topology is induced by some uniformity ([[thm-uniformity-induces-a-topology]]). It is **separated-uniformizable** if it is induced by a separated uniformity ([[def-separated-uniform-space]]).
