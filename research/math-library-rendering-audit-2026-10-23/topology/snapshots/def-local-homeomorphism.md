---
id: def-local-homeomorphism
kind: definition
title: "Local homeomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-map-top, def-homeomorphism-and-open-maps,
       def-neighbourhood-top]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Problem 4"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

A continuous map $f:X\to Y$ is a **local homeomorphism** when for every $x\in X$ there is an open neighbourhood $U$ of $x$ such that $f[U]$ is open in $Y$ and the restriction

$$f|_U:U\longrightarrow f[U]$$

is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[def-neighbourhood-top]]).

Surjectivity is not part of this definition. Nor does the definition require one neighbourhood of a target point to be evenly covered by all of its inverse images, so a local homeomorphism need not be a covering map.

