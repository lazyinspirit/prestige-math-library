---
id: def-a-smooth-map-transverse-to-an-embedded-submanifold
kind: definition
title: "A smooth map transverse to an embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-embedded-submanifold-and-slice-chart,
       def-differential-of-a-smooth-map]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $F:M\to N$ be smooth, and let $Z\subseteq N$ be an embedded submanifold.
Then $F$ is **transverse to $Z$**, written $F\pitchfork Z$, when for every
$p\in F^{-1}(Z)$,

$$dF_p(T_pM)+T_{F(p)}Z=T_{F(p)}N.$$

If $F(M)\cap Z=\varnothing$, this condition is vacuous, so $F\pitchfork Z$
still holds.
