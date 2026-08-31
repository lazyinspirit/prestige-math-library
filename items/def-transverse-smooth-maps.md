---
id: def-transverse-smooth-maps
kind: definition
title: "Transverse smooth maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-differential-of-a-smooth-map,
       def-smooth-manifold]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $F:M\to N$ and $G:P\to N$ be smooth maps. They are **transverse**, written
$F\pitchfork G$, when for every pair $(p,q)\in M\times P$ with
$F(p)=G(q)=y$,

$$dF_p(T_pM)+dG_q(T_qP)=T_yN.$$
