---
id: def-product-and-colon-of-fractional-ideals
kind: definition
title: "Products, colons, and inverse candidates for fractional ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-fractional-ideal]
justified_by: [lem-fractional-ideal-operations-well-defined]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Definition

Let $I$ and $J$ be fractional ideals of a domain $R$ with fraction field $K$.
Their **product** is
$$
IJ:=\left\{\sum_{r=1}^n x_ry_r:n\ge1,\ x_r\in I,\ y_r\in J\right\}\subseteq K,
$$
and their **colon** is
$$
(I:J):=\{x\in K:xJ\subseteq I\}.
$$
The usual inverse candidate is
$$
I^{-1}:=(R:I).
$$
The next lemma checks that these constructions stay inside the world of
fractional ideals.
