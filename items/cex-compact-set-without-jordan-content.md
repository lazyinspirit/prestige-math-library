---
id: cex-compact-set-without-jordan-content
kind: counterexample
title: "The Smith–Volterra–Cantor slab $S\\times[0,1]$ is compact and not Jordan measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, lem-product-lower-bound-for-jordan-content, thm-jordan-boundary-criterion, thm-heine-borel-rn, def-metric-interior-closure-boundary, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "Whitman College real analysis notes"
      url: "https://www.whitman.edu/Documents/Academics/Mathematics/Hardman.pdf"
pipeline_run: null
---

## Statement refuted

Every compact bounded subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ and $K=S\times[0,1]$.

[L1] $S$ is compact, nowhere dense, and every finite interval cover has total length at least $1/2$ ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]]).

[L2] The product lower bound is [[lem-product-lower-bound-for-jordan-content]].

## Counterexample

**Proof technique:** direct.

1.1 The slab $K$ is closed and bounded, hence compact by [[thm-heine-borel-rn]]. Since $S$ has empty interior, $K$ has empty interior and, being closed, equals its boundary.   [L1, given]

1.2 By [L1] and [L2], every rectangle cover of $K$ has total area at least $1/2$; its boundary therefore does not have content zero.   [L1, L2, given]

2.1 The boundary criterion [[thm-jordan-boundary-criterion]] makes $K$ non-Jordan-measurable.  [step 1.1, step 1.2] ∎
