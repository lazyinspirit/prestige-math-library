---
id: def-transverse-embedded-submanifolds
kind: definition
title: "Transverse embedded submanifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-transverse-smooth-maps,
       prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $S,T\subseteq M$ be embedded submanifolds. They are **transverse**, written
$S\pitchfork T$, when their inclusion maps into $M$ are transverse. Equivalently,
for every $p\in S\cap T$,

$$T_pS+T_pT=T_pM.$$
