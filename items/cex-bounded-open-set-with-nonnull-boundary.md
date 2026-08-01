---
id: cex-bounded-open-set-with-nonnull-boundary
kind: counterexample
title: "$((0,1)\\setminus S)\\times(0,1)$ is bounded and open, but its boundary has positive Jordan outer content"
status: published
origin: session
deps: [cex-compact-set-without-jordan-content, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, lem-product-lower-bound-for-jordan-content, thm-jordan-boundary-criterion, def-metric-interior-closure-boundary, def-jordan-inner-and-outer-content]
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
pipeline_run: null
---

## Statement refuted

Every bounded open subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** $U=((0,1)\setminus S)\times(0,1)$, with $S$ the fat Cantor set.

[L1] $S$ is closed, nowhere dense, and has interval-cover lower bound $1/2$ ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]]).

[L2] The slab $S\times[0,1]$ has outer content at least $1/2$ ([[lem-product-lower-bound-for-jordan-content]], [[cex-compact-set-without-jordan-content]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $(0,1)\setminus S$ is open, so $U$ is open and bounded.  [L1]

1.2 Every neighbourhood of a point of $S\times[0,1]$ meets $U$, by nowhere density in the first coordinate and the interval factor, and meets the complement. Hence $S\times[0,1]\subseteq\partial U$.   [L1, given]

2.1 Outer content is monotone under inclusion, so [L2] gives the boundary positive outer content.   [step 1.2, L2, given]

3.1 By [[thm-jordan-boundary-criterion]], $U$ is not Jordan measurable.  [step 2.1] ∎
